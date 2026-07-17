import { ComponentType, ReactNode } from "react";

export interface AppSection {
  id: string;
  title: string;
  subtitle: string;
  order: number;

  icon: ReactNode;
  gridCols: string;

  Content: ComponentType;
  Sidebar: ComponentType;
}