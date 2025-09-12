import React from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  gridCols?: string;
  icon?: React.ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  gridCols = "grid-cols-1 md:grid-cols-2",
  icon,
}: SectionProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-30">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl bg-amber-100">
            {icon ? (
              icon
            ) : (
              <svg
                className="fill-none stroke-gray-500"
                width="24"
                height="24"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="3"
              >
                <circle cx="32" cy="32" r="28" />
              </svg>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
              {title}
            </h3>
            <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
              {subtitle}
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className={`grid ${gridCols} gap-6 md:gap-10`}>{children}</div>
    </section>
  );
}

