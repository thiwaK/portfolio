import { forwardRef } from "react"

type Props = {
  path: string
}

export const TimelinePath = forwardRef<SVGPathElement, Props>(
  function TimelinePath({ path }, ref) {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 700 1000"
        preserveAspectRatio="xMinYMin meet"
      >
        <defs>
          <linearGradient id="grad" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>

        <path
          ref={ref}
          d={path}
          fill="none"
          stroke="url(#grad)"
          strokeWidth={18}
          strokeLinecap="round"
        />
      </svg>
    )
  }
)