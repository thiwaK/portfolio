import { createVertex } from "./node";
import { VertexType } from "./types";

<li>
  <div className="timeline-middle">{createVertex(VertexType.Minor)}</div>
  <div className="timeline-start mb-5 md:text-end">
    <time className="font-mono italic"> </time>
  </div>
  <hr />
</li>
