
type Props = {
  x: number
  y: number
  details: string
}

export function TimelinePoint({ x, y, details }: Props) {
  return (
    <div
      className="absolute group"
      style={{ left: x, top: y }}
    >
      <div className="w-4 h-4 rounded-full bg-sky-500 cursor-pointer" />

      <div className="absolute left-6 top-1/2 -translate-y-1/2
        scale-0 group-hover:scale-100 transition
        bg-slate-900 text-white text-sm p-3 rounded shadow-xl w-64">
        {details}
      </div>
    </div>
  )
}