import React from "react";

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  date: string;
  description?: string;
}

export interface TimelineProps {
  items: ExperienceItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <ol className="relative border-l border-primary/50 border-opacity-30 my-2 mx-4 text-left">
      {items.map((item, index) => (
        <li key={index} className="mb-6 ml-4 group">
          {/* Dot */}
          <div
            className="absolute w-2 h-2 bg-primary rounded-full border border-base-100 mt-1.5 duration-400 transition-all  group-hover:border-primary"
            style={{ left: "-4.5px" }}></div>

          {/* Date */}
          <div className="my-0.5 text-xs text-base-content/70">{item.date}</div>

          {/* Role */}
          <h3 className="font-semibold text-primary">{item.role}</h3>

          {/* Company */}
          <div className="mb-2 font-normal text-sm">
            {item.companyUrl ? (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {item.company}
              </a>
            ) : (
              <span>{item.company}</span>
            )}
          </div>

          {/* Optional Description */}
          {item.description && (
            <p className="text-xs text-base-content/70">{item.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
