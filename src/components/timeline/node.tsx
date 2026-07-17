// components/timeline/VertexNode.tsx
import { symbol } from "motion/react-client";
import { Vertex, VertexType } from "./types";

const STYLE_MAP_ = {
  Milestone: "w-4 h-4 bg-emerald-500 border-emerald-500",
  Major: "w-3 h-3 bg-sky-600 border-sky-600",
  Minor: "w-2.5 h-2.5 bg-slate-400 border-slate-400",
};

// https://www.alt-codes.net/bullet_alt_codes.php
// ○ • •
const STYLE_MAP = {
  Milestone: {
    color: "emerald-500",
    width: "w-4",
    height: "h-4",
    border: "2",
    symbol: "⦿",
  },
  Major: {
    color: "sky-600",
    width: "w-3",
    height: "h-3",
    border: "2",
    symbol: "⦾",
  },
  Minor: {
    color: "slate-400",
    width: "w-2.5",
    height: "h-2.5",
    border: "2",
    symbol: "•",
  },
};

export function createVertex(type: VertexType) {
  const styleClass = STYLE_MAP[type];

  return (
    <div className={`${styleClass.width} ${styleClass.height} bg-transparent flex items-center justify-center`}>
      <span
        className={`${
          type === VertexType.Milestone
            ? "text-red-400 text-2xl"
            : type === VertexType.Major
            ? "text-emerald-500 text-xl"
            : type === VertexType.Minor
            ? "text-blue-500 text-lg"
            : "text-slate-400 text-sm"
        } font-medium `}
      >
        {styleClass.symbol ? styleClass.symbol : "•"}
      </span>
    </div>
  );
}
