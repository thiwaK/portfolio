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
     <div className="p-4 rounded-lg bg-info/5 transform duration-400 hover:scale-[101%] shadow-md hover:shadow-xl group">
      {/* Role & Date */}
      <h4 className="font-semibold text-primary">{role}</h4>

      {company && (
        <p className="text-sm">
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-primary"
            >
              {company}
            </a>
          ) : (
            company
          )}
        </p>
      )}

      <p className="text-sm text-base-content/70 pt-3">{date}</p>

      {/* Description */}
      <p className="text-sm mt-2 text-base-content">{description}</p>

      {/* Bullets */}
      <ul className="list-disc list-inside mt-2 text-sm text-base-content/70 space-y-1">
        {bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>

      {/* Tools as badges */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tools.map((tool, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardExperience;
