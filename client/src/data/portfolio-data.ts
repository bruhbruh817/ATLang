import { WritingSample, InspirationCategory, DraftFile } from "@/types";

export const academicSamples: WritingSample[] = [
  {
    id: "rhetorical-analysis",
    title: "Rhetorical Analysis Essay",
    date: "November 15, 2024",
    status: "Final Draft (A)",
    prefatory: {
      explanation: "This assignment required an analysis of rhetorical strategies in a published speech or essay.",
      approach: "I chose Martin Luther King Jr.'s 'Letter from Birmingham Jail' and focused on how he uses ethos, pathos, and logos to build his argument against gradualism.",
      strengthsWeaknesses: "Strengths include my analysis of King's use of biblical references. I could have developed more on the historical context that surrounded the letter.",
    },
    preview: {
      title: "Letter from Birmingham Jail: A Masterclass in Rhetoric",
      content: [
        "In his seminal 'Letter from Birmingham Jail,' Martin Luther King Jr. demonstrates masterful command of rhetorical strategies to defend civil disobedience and critique white moderate inaction. Written in April 1963 while imprisoned for participating in non-violent demonstrations, King's letter responds to eight white clergymen who condemned the protests as 'unwise and untimely.'",
        "King establishes his ethos immediately by adopting a measured, scholarly tone that demonstrates his education while also appealing to his religious authority as a fellow clergyman. He writes, 'I am in Birmingham because injustice is here,' presenting himself as a necessary responder to crisis rather than an outside agitator.",
        "The most striking aspect of King's rhetoric is his use of pathos through precise, evocative language that forces readers to confront the human cost of segregation. His description of having to explain to his six-year-old daughter 'why she can't go to the public amusement park' and seeing 'ominous clouds of inferiority beginning to form in her little mental sky' transforms abstract policy discussions into painful human reality."
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
        "As artificial intelligence increasingly mediates our daily activities, from shopping recommendations to healthcare decisions, the mechanisms that collect and process our personal data have become more intrusive yet simultaneously more invisible. This technological evolution demands a corresponding evolution in privacy laws that recognizes data rights as fundamental human rights.",
        "Current privacy frameworks remain woefully inadequate for three reasons. First, they rely on notice-and-consent models that place unreasonable burdens on individuals to understand complex data practices. Second, they fail to address the cumulative impact of data collection across platforms. Third, they provide insufficient remedies when violations occur.",
        "The European Union's General Data Protection Regulation (GDPR) offers a useful starting point for stronger protections, but even this comprehensive framework has shown limitations in the face of AI advancements. What we need is a rights-based approach that shifts the burden of protection from individuals to the entities collecting and processing data."
      ]
    },
    versions: ["First Draft", "Second Draft"],
    activeVersion: "Second Draft"
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
    activeVersion: "Final Draft"
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
      "The first time Manuel read a complete sentence aloud without stumbling, his face lit up with such pure joy that I had to turn away to hide my own tears. At twelve years old, Manuel had been labeled a 'problem student' by a system that never identified his dyslexia. For eight weeks, I had been volunteering at the Community Literacy Alliance, working with Manuel twice weekly after school. That moment—his triumph over a system that had failed him—fundamentally changed how I understand educational privilege.",
      "Before volunteering, I viewed literacy as something so fundamental it seemed almost impossible to lack in our society. But Manuel's story is not unique. According to the National Center for Education Statistics, 21% of adults in the United States read below a fifth-grade level. These statistics transformed from abstract numbers into real people as I worked with learners ranging from elementary students to grandparents, all fighting to gain access to a world that assumes literacy as a baseline.",
      "Through this experience, I've come to understand education not simply as an individual achievement but as a collective responsibility. The barriers to learning that Manuel faced weren't the result of his abilities, but of systemic failures to recognize and accommodate different learning styles. As I look toward my future studies, I carry this understanding with me—that access to education isn't equally distributed, and that recognizing this inequality is the first step toward addressing it."
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