"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface SectionContextType {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const SectionContext = createContext<SectionContextType | null>(null);

export function SectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <SectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);

  if (!context) {
    throw new Error(
      "useSectionContext must be used inside SectionProvider"
    );
  }

  return context;
}