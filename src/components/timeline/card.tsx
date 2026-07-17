
type Props = {
  title: string
  summary: string
  x: number
  y: number
}

export function TimelineCard({ title, summary, x, y }: Props) {
  return (
    <div
      className="absolute w-72 bg-white rounded-xl shadow-lg p-4"
      style={{ left: x + 40, top: y - 40 }}
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-slate-600 text-sm">{summary}</p>
    </div>
  )
}