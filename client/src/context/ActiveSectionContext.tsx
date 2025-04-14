import { createContext, useState, useContext, ReactNode } from 'react';

export type Section = "about" | "academic" | "beyond" | "inspirations";

interface ActiveSectionContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

// Create context with default values
const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: "about",
  setActiveSection: () => {},
});

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const value = { activeSection, setActiveSection };
  
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}