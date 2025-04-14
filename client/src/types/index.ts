export interface DraftFile {
  type: 'pdf' | 'image' | 'text';
  title: string;
  content?: string[]; // Used for text content
  filePath?: string;  // Used for PDFs and images
  description?: string;
}

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
  drafts: DraftFile[]; // List of drafts with their file paths or content
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