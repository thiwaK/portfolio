// components/timeline/SegmentCard.tsx
import { TimelineSegment } from "./types"

export function SegmentCard({
  segment,
  x,
  y,
}: {
  segment: TimelineSegment
  x: number
  y: number
}) {
  return (
    <div
      className="absolute w-80 bg-white rounded-xl shadow-xl p-5"
      style={{ left: x, top: y }}
    >
      <span className="text-xs text-sky-500 font-semibold">
        {segment.year}
      </span>
      <h3 className="text-lg font-bold">
        {segment.summary.title}
      </h3>
      <p className="text-slate-600 text-sm mt-1">
        {segment.summary.description}
      </p>
    </div>
  )
}