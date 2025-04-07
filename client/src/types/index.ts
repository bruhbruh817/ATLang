export interface WritingSample {
  id: string;
  title: string;
  date: string;
  status: string;
  prefatory: {
    explanation: string;
    approach: string;
    strengthsWeaknesses: string;
  };
  preview: {
    title: string;
    content: string[];
  };
  versions: string[];
  activeVersion: string;
}

export interface InspirationItem {
  title: string;
  description: string;
}

export interface InspirationCategory {
  id: string;
  title: string;
  imagePlaceholder: string;
  items: InspirationItem[];
}