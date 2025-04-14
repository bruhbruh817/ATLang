import { WritingSample, InspirationCategory, DraftFile } from "@/types";

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
    activeVersion: "Final Draft",
    drafts: [
      {
        type: 'pdf',
        title: 'First Draft - Rhetorical Analysis',
        description: 'Initial analysis with instructor comments',
        filePath: '/drafts/rhetorical-first-draft.pdf'
      },
      {
        type: 'pdf',
        title: 'Second Draft - Rhetorical Analysis',
        description: 'Revised version after peer feedback',
        filePath: '/drafts/rhetorical-second-draft.pdf'
      },
      {
        type: 'image',
        title: 'Planning Document',
        description: 'Initial brainstorming and outline',
        filePath: '/drafts/rhetorical-planning.jpg'
      }
    ]
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
    activeVersion: "Second Draft",
    drafts: [
      {
        type: 'pdf',
        title: 'First Draft - Digital Privacy Essay',
        description: 'Initial draft with thesis statement and main arguments',
        filePath: '/drafts/privacy-first-draft.pdf'
      },
      {
        type: 'image',
        title: 'Research Notes',
        description: 'Key data points and sources',
        filePath: '/drafts/privacy-research.jpg'
      }
    ]
  },
  {
    id: "literary-analysis",
    title: "Literary Analysis - The Great Gatsby",
    date: "April 2, 2025",
    status: "Final Draft (A-)",
    prefatory: {
      explanation: "This assignment asked us to analyze a major theme in F. Scott Fitzgerald's 'The Great Gatsby' and discuss its relevance to contemporary American society.",
      approach: "I focused on the theme of the American Dream and its corruption, drawing parallels between the 1920s setting and today's wealth inequality and social mobility challenges.",
      strengthsWeaknesses: "My analysis of symbolism is strong, particularly regarding the green light and the Valley of Ashes. I could have incorporated more secondary sources to support my modern-day connections."
    },
    preview: {
      title: "The Mirage of Green Light: Gatsby's Dream and America's Illusion",
      content: [
        "F. Scott Fitzgerald's 'The Great Gatsby' endures as a masterpiece not merely for its artistic prose or vivid characterization, but because it offers a devastating critique of the American Dream that remains hauntingly relevant a century later. Through the tragic figure of Jay Gatsby—a man who transforms himself completely in pursuit of wealth, status, and ultimately love—Fitzgerald reveals how the promises of American meritocracy often mask a system where privilege determines outcomes more than perseverance.",
        "The novel's most enduring symbol, the green light at the end of Daisy's dock, represents not just Gatsby's longing for Daisy but the tantalizing promise of American opportunity itself: always visible, seemingly within reach, yet ultimately unattainable for those born without advantage. As Fitzgerald writes, Gatsby believed in 'the orgastic future that year by year recedes before us.' This eternal hope, followed by inevitable disappointment, mirrors the experience of countless Americans who find social mobility increasingly elusive despite their efforts.",
        "The geographic stratification in the novel—from the old-money elegance of East Egg to the nouveau riche spectacle of West Egg to the desolate 'Valley of Ashes'—presents a physical manifestation of America's class divisions. Today, similar geographic divides persist in American cities, where zip codes remain powerful predictors of educational opportunity, health outcomes, and economic prospects. Like the characters in Gatsby, Americans still find themselves sorted into environments that either nurture or hinder their ambitions based largely on accidents of birth."
      ]
    },
    versions: ["First Draft", "Peer Review Draft", "Final Draft"],
    activeVersion: "Final Draft",
    drafts: [
      {
        type: 'pdf',
        title: 'First Draft - Gatsby Analysis',
        description: 'Original submission with instructor feedback',
        filePath: '/drafts/gatsby-first-draft.pdf'
      },
      {
        type: 'pdf',
        title: 'Peer Review Draft',
        description: 'Version with peer comments',
        filePath: '/drafts/gatsby-peer-review.pdf'
      },
      {
        type: 'image',
        title: 'Symbol Analysis Chart',
        description: 'Visual breakdown of key symbols',
        filePath: '/drafts/gatsby-symbols.jpg'
      }
    ]
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
  activeVersion: "Final Draft",
  drafts: [
    {
      type: 'pdf',
      title: 'College Essay - Draft Version',
      description: 'Initial write-up with counselor feedback',
      filePath: '/drafts/college-essay-draft.pdf'
    },
    {
      type: 'text',
      title: 'Reflection Notes',
      description: 'Personal reflections on the writing process',
      content: [
        "What made this essay challenging was balancing the personal narrative with broader observations about education inequality.",
        "I revised the opening paragraph three times to make it more engaging while remaining authentic to my experience."
      ]
    },
    {
      type: 'image',
      title: 'Volunteer Certificate',
      description: 'Certificate from Community Literacy Alliance',
      filePath: '/drafts/volunteer-certificate.jpg'
    }
  ]
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