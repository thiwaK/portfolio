import React from "react";

interface CardExperienceProps {
  role: string;
  company?: string;
  companyUrl?: string;
  date: string;
  description: string;
  bullets: string[];
  tools: string[];
}

const CardExperience: React.FC<CardExperienceProps> = ({
  role,
  company,
  companyUrl,
  date,
  description,
  bullets,
  tools,
}) => {
  return (
    <div className="my-card h-full flex flex-col overflow-hidden rounded-box border border-base-content/10 shadow-sm transition-all duration-300 hover:scale-[101%]">

      {/* Header */}
      <div className="min-h-32 p-5 bg-base-200/50 border-b border-base-content/10 flex flex-col justify-between">

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-primary leading-snug">
            {role}
          </h3>

          <span className="badge badge-soft badge-primary badge-sm shrink-0">
            {date}
          </span>
        </div>

        {company && (
          companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-wide font-semibold text-base-content/70 hover:text-primary transition-colors"
            >
              {company}
            </a>
          ) : (
            <p className="text-sm uppercase tracking-wide font-semibold text-base-content/70">
              {company}
            </p>
          )
        )}

      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">

        {/* Description */}
        <div>
          <p className="text-sm leading-relaxed text-base-content/85 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Achievements */}
        {!!bullets.length && (
          <div className="mt-5 flex-1">
            <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-base-content/40 mb-2">
              Key Contributions
            </span>

            <ul className="space-y-2 text-sm text-base-content/80">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tools */}
        {!!tools.length && (
          <div className="mt-5 pt-4 border-t border-dashed border-base-content/15">

            <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-base-content/40 mb-2">
              Technologies Used
            </span>

            <div className="flex flex-wrap gap-1.5">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="badge badge-soft badge-dash badge-sm font-medium text-[0.7rem]"
                >
                  {tool}
                </span>
              ))}
            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default CardExperience;
