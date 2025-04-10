
import { WritingSample, InspirationCategory } from "@/types";

 export const academicSamples: WritingSample[] = [
  {
    id: "rhetorical-analysis",
    title: "Rhetorical Analysis Essay",
    date: "November 15, 2024",
    status: "Final Draft (A)",
    prefatory: {
      explanation: "This assignment required an analysis of rhetorical strategies in a published speech or essay.",
      approach: "",
      strengthsWeaknesses: "",
    },
    preview: {
      title: "Letter from Birmingham Jail: A Masterclass in Rhetoric",
      content: [
        
      ]
    },
    versions: ["First Draft", "Second Draft", "Final Draft"],
    activeVersion: "Final Draft"
  },
  {
    id: "argumentative-essay",
    title: "Argumentative Essay on Digital Privacy",
    date: "February 10, 2025",
    status: "Second Draft (B+)",
    prefatory: {
      explanation: "This essay required us to take a position on a contemporary issue and develop an argument with supporting evidence.",
      approach: "I focused on digital privacy rights in the age of artificial intelligence, arguing that stronger regulations are needed to protect individual autonomy.",
      strengthsWeaknesses: "My research was thorough, but I need to improve my counterargument section to acknowledge valid concerns from the technology sector."
    },
    preview: {
      title: "The Price of Convenience: Why Digital Privacy Requires New Protections",
      content: [
        

      ]
    },
    versions: ["First Draft", "Second Draft"],
    activeVersion: "Second Draft"
  }
];

 export const beyondClassroomSample: WritingSample = {
  id: "personal-essay",
  title: "College Application Essay",
  date: "January 5, 2025",
  status: "Submitted to Universities",
  prefatory: {
    explanation: "This personal essay was written for my college applications to explore a formative experience that shaped my worldview.",
    approach: "I chose to write about my experience volunteering at a local literacy program and how it changed my understanding of education access.",
    strengthsWeaknesses: "The essay effectively conveys my passion for education equity, though I struggled to balance personal anecdotes with broader reflections."
  },
  preview: {
    title: "Words That Bridge Worlds",
    content: [
      
      
    ]
  },
  versions: ["First Draft", "Final Draft"],
  activeVersion: "Final Draft"
};

 export const inspirationCategories: InspirationCategory[] = [
  {
    id: "authors",
    title: "Authors & Works",
    imagePlaceholder: "📚",
    items: [
      {
        title: "Joan Didion",
        description: "Her precise, clear prose style and unflinching examination of her own experiences showed me how personal essays can achieve both intimacy and universal significance."
      },
      {
        title: "James Baldwin",
        description: "Baldwin's ability to blend the personal and political while maintaining extraordinary eloquence has deeply influenced my approach to argumentative writing."
      },
      {
        title: "'The Things They Carried' by Tim O'Brien",
        description: "This book taught me how storytelling can be both factually untrue and emotionally honest at the same time—a concept that transformed my understanding of creative nonfiction."
      }
    ]
  },
  {
    id: "teachers",
    title: "Teachers & Mentors",
    imagePlaceholder: "👩‍🏫",
    items: [
      {
        title: "Ms. Rivera, 10th Grade English",
        description: "She was the first teacher who pushed me to revise beyond superficial edits, showing me that real writing happens in revision."
      },
      {
        title: "Mr. Chen, Debate Coach",
        description: "His emphasis on thorough research and anticipating counterarguments fundamentally shaped my approach to persuasive writing."
      }
    ]
  },
  {
    id: "experiences",
    title: "Formative Experiences",
    imagePlaceholder: "✨",
    items: [
      {
        title: "Keeping a Daily Journal",
        description: "Since eighth grade, I've maintained a daily journal that has become my laboratory for experimenting with voice and reflection."
      },
      {
        title: "School Newspaper",
        description: "Serving as features editor taught me to write for a specific audience and to value clarity and concision in my prose."
      }
    ]
  }
];