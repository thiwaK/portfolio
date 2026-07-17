import CIcon from "@coreui/icons-react";

import { cilChatBubble } from "@coreui/icons";
import CardCertificate from "@/components/ui/card-certificate";


export default function ContactContent() {
  return (
    <>
      {/* Visual Anchor: Minimalist GIS / Automation Grid Map */}



      <h2 className="text-2xl font-bold tracking-tight text-base-content">
        Let’s Build Something Spatial, <h1 className="text-accent">Together</h1>
      </h2>

      <p className="text-base-content/80  leading-relaxed">
        I help engineering teams, environmental agencies, and businesses eliminate manual bottlenecks by turning complex spatial data into automated backend pipelines and responsive interactive web applications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm pt-2">
        <div className="flex items-start gap-2.5">
          <span className="text-primary mt-0.5">✔</span>
          <span><strong>GIS Automation</strong> Python scripting with ArcPy, PyQGIS, and FME.</span>
        </div>
        <div className="flex items-start gap-2.5">
          <span className="text-primary mt-0.5">✔</span>
          <span><strong>Web Mapping</strong> Lightweight, fast spatial interfaces using Leaflet.</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm pt-2">
        <div className="flex items-start gap-2.5">
          <span className="text-primary mt-0.5">✔</span>
          <span><strong>ETL Pipelines</strong> Automated spatial data migration and cleaning.</span>
        </div>
        <div className="flex items-start gap-2.5">
          <span className="text-primary mt-0.5">✔</span>
          <span><strong>Full-Stack Dev</strong> Seamless integration of spatial data with Next.js layouts.</span>
        </div>
      </div >

    </>
  );
}

// export default {
//   id: "contact",
//   title: "Contact",
//   subtitle: "Let’s connect and collaborate",
//   gridCols: "grid-cols-1 md:grid-cols-2",
//   icon: (
//     <CIcon icon={cilChatBubble} className="w-9 h-9 flip-yoyo-y" />
//   ),
//   order: 5,
//   component: content,
// };