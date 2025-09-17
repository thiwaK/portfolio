"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-transparent">
      <div
        className="progress progress-primary h-[0.15rem] bg-primary transition-all duration-150 rounded-xl"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
