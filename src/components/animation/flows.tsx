"use client"
import { useEffect, useRef } from "react"

// Lightweight inline 2D Pseudo-Random Noise function for performance
const noise2D = (x: number, y: number) => {
    const X = Math.floor(x) & 255, Y = Math.floor(y) & 255
    const n = X + Y * 57
    return (Math.sin(n) * 43758.5453123) % 1
}

export function FlowFieldCard() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let time = 0

        // Set high-DPI canvas boundaries
        const resize = () => {
            canvas.width = canvas.parentElement?.clientWidth || 300
            canvas.height = canvas.parentElement?.clientHeight || 200
        }
        resize()
        window.addEventListener("resize", resize)

        // Render loop
        const render = () => {
            time += 0.003
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            ctx.strokeStyle = "rgba(99, 102, 241, 0.15)" // Indigo vector color
            ctx.lineWidth = 1.5

            const step = 20 // Distance between noise vector nodes
            for (let x = 0; x < canvas.width; x += step) {
                for (let y = 0; y < canvas.height; y += step) {
                    // Calculate noise field value acting as an angle direction
                    const value = noise2D(x * 0.005 + time, y * 0.005 + time)
                    const angle = value * Math.PI * 2

                    // Draw the vector flow direction line
                    ctx.beginPath()
                    ctx.moveTo(x, y)
                    ctx.lineTo(x + Math.cos(angle) * 12, y + Math.sin(angle) * 12)
                    ctx.stroke()
                }
            }
            animationFrameId = requestAnimationFrame(render)
        }
        render()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <div className="w-full h-full">
            <canvas
                ref={canvasRef}
                className="block w-full h-full pointer-events-none absolute top-0 left-0"
            />
        </div>
    )
}


// Optimized pseudo-random 3D Simplex/Perlin noise approximation
function createNoise3D() {
    const F3 = 1.0 / 3.0, G3 = 1.0 / 6.0
    const p = new Uint8Array(256)
    for (let i = 0; i < 256; i++) p[i] = Math.floor(Math.random() * 256)
    const perm = new Uint8Array(512), permMod12 = new Uint8Array(512)
    for (let i = 0; i < 512; i++) {
        perm[i] = p[i & 255]
        permMod12[i] = perm[i] % 12
    }
    return function noise(xin: number, yin: number, zin: number) {
        let n0, n1, n2, n3
        const s = (xin + yin + zin) * F3
        const i = Math.floor(xin + s), j = Math.floor(yin + s), k = Math.floor(zin + s)
        const t = (i + j + k) * G3
        const X0 = i - t, Y0 = j - t, Z0 = k - t
        const x0 = xin - X0, y0 = yin - Y0, z0 = zin - Z0
        let i1, j1, k1, i2, j2, k2
        if (x0 >= y0) {
            if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0 }
            else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1 }
            else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1 }
        } else {
            if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1 }
            else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1 }
            else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0 }
        }
        const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3
        const x2 = x0 - i2 + 2.0 * G3, y2 = y0 - j2 + 2.0 * G3, z2 = z0 - k2 + 2.0 * G3
        const x3 = x0 - 1.0 + 3.0 * G3, y3 = y0 - 1.0 + 3.0 * G3, z3 = z0 - 1.0 + 3.0 * G3
        const ii = i & 255, jj = j & 255, kk = k & 255
        let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0; if (t0 < 0) n0 = 0.0; else { t0 *= t0; n0 = t0 * t0 * (x0 * (permMod12[ii + perm[jj + perm[kk]]] * 0.1) + y0 * (permMod12[ii + perm[jj + perm[kk]]] * 0.15)) }
        let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1; if (t1 < 0) n1 = 0.0; else { t1 *= t1; n1 = t1 * t1 * (x1 * (permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 0.1) + y1 * (permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 0.15)) }
        let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2; if (t2 < 0) n2 = 0.0; else { t2 *= t2; n2 = t2 * t2 * (x2 * (permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 0.1) + y2 * (permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 0.15)) }
        let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3; if (t3 < 0) n3 = 0.0; else { t3 *= t3; n3 = t3 * t3 * (x3 * (permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 0.1) + y3 * (permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 0.15)) }
        return 32.0 * (n0 + n1 + n2 + n3)
    }
}

export function ContourNoiseCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const noise3D = createNoise3D()
        let animationFrameId: number
        let zTime = 0

        // Particle pool setup for clean performance
        const particleCount = 280
        const particles: Array<{ x: number; y: number; life: number; maxLife: number; color: string }> = []

        const colorPaletteDark = [
            "rgba(56, 189, 248, 0.75)",  // Sky blue neon
            "rgba(99, 102, 241, 0.65)",  // Deep indigo
            "rgba(147, 51, 234, 0.55)",  // Cyber purple
            "rgba(255, 255, 255, 0.85)"   // White core highlight
        ]

        const colorPalette = [
            "rgba(15, 23, 42, 0.85)",   // Slate Black (Dark core topography lines)
            "rgba(67, 56, 202, 0.70)",   // Deep Royal Indigo (Adds strong depth)
            "rgba(2, 132, 199, 0.65)",   // Oceanic Mid-Blue (Adds spatial definition)
            "rgba(147, 51, 234, 0.45)"   // Vibrant Accent Violet (Subtle high-altitude contour)
        ]

        const initParticle = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            life: 0,
            maxLife: 40 + Math.random() * 80,
            color: colorPalette[Math.floor(Math.random() * colorPalette.length)]
        })

        const resize = () => {
            const parent = canvas.parentElement
            canvas.width = parent ? parent.clientWidth * window.devicePixelRatio : 400
            canvas.height = parent ? parent.clientHeight * window.devicePixelRatio : 300
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

            // Initialize particles array
            particles.length = 0
            for (let i = 0; i < particleCount; i++) particles.push(initParticle())
        }

        resize()
        window.addEventListener("resize", resize)

        // Main animation loop
        const animate = () => {
            // Create a long frame-fade effect to draw the beautiful long line tracks
            ctx.fillStyle = "rgba(9, 9, 11, 0.06)"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            zTime += 0.002 // Speed of map evolution

            particles.forEach((p, index) => {
                p.life++
                if (p.life > p.maxLife) {
                    particles[index] = initParticle()
                    return
                }

                // Generate vector contour paths by mapping coordinates to the 3D Noise Field
                const noiseX = p.x * 0.0035
                const noiseY = p.y * 0.0035
                const nValue = noise3D(noiseX, noiseY, zTime)

                // Isolate angles along contours to make particles coil into loops
                const angle = nValue * Math.PI * 3.5

                const speed = 1.2
                const prevX = p.x
                const prevY = p.y

                p.x += Math.cos(angle) * speed
                p.y += Math.sin(angle) * speed

                // Render stroke line
                ctx.beginPath()
                ctx.strokeStyle = p.color
                ctx.lineWidth = 1.2
                ctx.moveTo(prevX, prevY)
                ctx.lineTo(p.x, p.y)
                ctx.stroke()

                // Edge resetting safety checks
                if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
                    particles[index] = initParticle()
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (

        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none opacity-85 transition-opacity duration-300 group-hover:opacity-100"
        />


    )
}

export function ContourNoiseCard() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const noise3D = createNoise3D()
        let animationFrameId: number
        let zTime = 0

        // Particle pool setup for clean performance
        const particleCount = 280
        const particles: Array<{ x: number; y: number; life: number; maxLife: number; color: string }> = []

        const colorPalette = [
            "rgba(56, 189, 248, 0.75)",  // Sky blue neon
            "rgba(99, 102, 241, 0.65)",  // Deep indigo
            "rgba(147, 51, 234, 0.55)",  // Cyber purple
            "rgba(255, 255, 255, 0.85)"   // White core highlight
        ]

        const colorPaletteDark = [
            "rgba(99, 139, 232, 0.85)",   // Slate Black (Dark core topography lines)
            "rgba(67, 56, 202, 0.70)",   // Deep Royal Indigo (Adds strong depth)
            "rgba(2, 132, 199, 0.65)",   // Oceanic Mid-Blue (Adds spatial definition)
            "rgba(147, 51, 234, 0.45)"   // Vibrant Accent Violet (Subtle high-altitude contour)
        ]

        const initParticle = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            life: 0,
            maxLife: 40 + Math.random() * 80,
            color: colorPalette[Math.floor(Math.random() * colorPalette.length)]
        })

        const resize = () => {
            const parent = canvas.parentElement
            canvas.width = parent ? parent.clientWidth * window.devicePixelRatio : 400
            canvas.height = parent ? parent.clientHeight * window.devicePixelRatio : 300
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

            // Initialize particles array
            particles.length = 0
            for (let i = 0; i < particleCount; i++) particles.push(initParticle())
        }

        resize()
        window.addEventListener("resize", resize)

        // Main animation loop
        const animate = () => {
            // Create a long frame-fade effect to draw the beautiful long line tracks
            ctx.fillStyle = "rgba(7, 7, 254, 0.06)"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            zTime += 0.002 // Speed of map evolution

            particles.forEach((p, index) => {
                p.life++
                if (p.life > p.maxLife) {
                    particles[index] = initParticle()
                    return
                }

                // Generate vector contour paths by mapping coordinates to the 3D Noise Field
                const noiseX = p.x * 0.0035
                const noiseY = p.y * 0.0035
                const nValue = noise3D(noiseX, noiseY, zTime)

                // Isolate angles along contours to make particles coil into loops
                const angle = nValue * Math.PI * 3.5

                const speed = 1.2
                const prevX = p.x
                const prevY = p.y

                p.x += Math.cos(angle) * speed
                p.y += Math.sin(angle) * speed

                // Render stroke line
                ctx.beginPath()
                ctx.strokeStyle = p.color
                ctx.lineWidth = 1.2
                ctx.moveTo(prevX, prevY)
                ctx.lineTo(p.x, p.y)
                ctx.stroke()

                // Edge resetting safety checks
                if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
                    particles[index] = initParticle()
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-zinc-950 p-7 shadow-2xl border border-zinc-800/80 max-w-sm w-full">

            {/* Dynamic Animated Contour Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none opacity-85 transition-opacity duration-300 group-hover:opacity-100"
            />

            {/* High-contrast Vignette Overlay to enhance glowing depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(9,9,11,0.6)_100%)] pointer-events-none" />

            {/* Main Content Layout */}
            <div className="relative z-10 mt-24">
                <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-400/20 uppercase">
                    Dynamic Topology
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-zinc-100 tracking-tight">
                    Bioluminescent Flow
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-normal">
                    An active vector coordinate simulation updating algorithmic Perlin boundaries natively in real-time.
                </p>
            </div>
        </div>
    )
}