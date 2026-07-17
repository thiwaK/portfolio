// components/timeline/types.ts
export const VertexType = {
  Major: "Major",
  Minor: "Minor",
  Milestone: "Milestone",
} as const

export type VertexType = typeof VertexType[keyof typeof VertexType]

export type Vertex = {
  filled: boolean
  type: VertexType
}

export type TimelineSegment = {
  index: number
  year: number
  summary: {
    title: string
    description: string
  }
  vertices: Vertex[]
}