import CIcon from "@coreui/icons-react";

import { cilEducation } from "@coreui/icons";
import CardCertificate from "@/components/ui/card-certificate";
import { portfolioConfig } from "@/config/portfolio.config";


const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon",
    year: "2023",
    image: "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp", // path to certificate image
    link: "https://www.credly.com/badges/your-aws-link",
  },
  {
    name: "Google Data Analytics Certificate",
    issuer: "Google",
    year: "2022",
    image: "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
    link: "https://www.credly.com/badges/your-google-link",
  },
  {
    name: "Google Data Analytics Certificate",
    issuer: "Google",
    year: "2022",
    image: "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
    link: "https://www.credly.com/badges/your-google-link",
  },
];

export default function EducationContent() {
  return (
    <>

      {/* Cards */}

      {portfolioConfig.education.map((item, idx) => (
        <div
          key={idx}
          className="my-card h-full flex flex-col overflow-hidden rounded-box border border-base-content/10 shadow-sm transition-all duration-300 hover:scale-[101%]"
        >
          {/* Header */}
          <div className="min-h-32 p-5 bg-base-200/50 border-b border-base-content/10 flex flex-col justify-between">
            <div className="flex justify-between items-start gap-3">
              <h3 className="text-lg font-bold text-primary leading-snug">
                {item.title}
              </h3>

              <span className="badge badge-soft badge-primary badge-sm shrink-0">
                {item.from} - {item.to}
              </span>
            </div>

            <p className="text-sm uppercase tracking-wide font-semibold text-base-content/70">
              {item.institution}
            </p>
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-5">

            {/* Description */}
            <div className="flex-1">
              <p className="text-sm leading-relaxed text-base-content/85 line-clamp-6">
                {item.description}
              </p>
            </div>

            {/* Skills */}
            {!!item.skills?.length && (
              <div className="mt-5 pt-4 border-t border-dashed border-base-content/15">
                <span className="block mb-2 text-[0.65rem] font-bold uppercase tracking-wider text-base-content/40">
                  Skills Acquired
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="badge badge-soft badge-dash badge-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      ))}


    </>
  );
}

// export default {
//   id: "education",
//   title: "Background",
//   subtitle: "Foundations of what I’ve learned and achieved",
//   gridCols: "",
//   icon: (
//     <CIcon icon={cilEducation} className="w-9 h-9 flip-yoyo-y" />
//   ),
//   order: 4,
//   component: content,
// };
