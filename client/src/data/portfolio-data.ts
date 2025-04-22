import { WritingSample, InspirationCategory, DraftFile } from "@/types";

export const academicSamples: WritingSample[] = [
    {
      id: "descriptive-narrative",
      title: "Descriptive Narrative – Interview Reflection",
      date: "March 2025",
      status: "Final Draft (93/100)",
      prefatory: {
        explanation: "This assignment asked us to write about a memorable 'first' or emotionally significant moment. I chose to reflect on an important interview where I let go of rehearsed answers and embraced honesty.",
        approach: "I drew from my real-life experience interviewing for a technical role and reflected on my growth through journaling. I approached it like a cinematic scene—layering internal thoughts with rising emotional tension.",
        strengthsWeaknesses: "I received strong marks for emotional insight and clarity of writing. Feedback encouraged me to cut some ‘fluff’ and improve my dialogue formatting. I plan to enhance pacing and structure in future narratives."
      },
      preview: {
        title: "The Power of Truth: Embracing Authenticity Under Pressure",
        content: [
          "10:50 AM. This was it—the interview I had been preparing for tirelessly over the past two weeks. I sat there, sweating from excitement and the magnitude of what was about to happen.",
          "The moment I clicked into the meeting, everything felt quiet and still. I had practiced every response, but when the interviewer asked, 'Is that your real reason?' I froze. And for once, I let go of the rehearsed answer and just spoke from the heart.",
          "By the end of the interview, I didn’t just feel relieved—I felt accomplished. What blossomed was a journey of growth and self-discovery. I had learned that success isn’t measured by perfect preparation, but by the strength it takes to be genuinely honest."
        ]
      },
      versions: ["First Draft", "Final Draft", "What I Would Change"],
      activeVersion: "Final Draft",
      drafts: [
        {
          type: 'image',
          title: 'First Draft - Handwritten + Feedback',
          description: 'First draft including feedback on dialogue formatting, structure, and pacing.',
          filePath: '/drafts/sadi-draft-1.jpeg' // replace with real image route
        },
        {
          type: 'image',
          title: 'Final Draft',
          description: 'Final polished draft submitted for grading. Final grade: 93/100.',
          filePath: '/drafts/sadi-draft-final.jpeg'
        },
        {
          type: 'text',
          title: 'What I Would Do In a Third Draft',
          description: 'Reflection on next steps if I had one more round of revision.',
          content: [
            "I would restructure the opening to add more emotional stakes and maybe reduce the spacing/pacing issues noted by my teacher.",
            "I'd format the dialogue with clearer paragraph breaks and make the 'click into the meeting' moment a bit more vivid.",
            "I'd also layer in more internal tension during the midsection so the reader feels the weight of the decision as I made it."
          ]
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
        "As artificial intelligence increasingly mediates our daily activities, from shopping recommendations to healthcare decisions, the mechanisms that collect and process our personal data have become more intrusive yet simultaneously more invisible. This technological evolution demands a corresponding evolution in privacy laws that recognizes data rights as fundamental human rights.",
        "Current privacy frameworks remain woefully inadequate for three reasons. First, they rely on notice-and-consent models that place unreasonable burdens on individuals to understand complex data practices. Second, they fail to address the cumulative impact of data collection across platforms. Third, they provide insufficient remedies when violations occur.",
        "The European Union's General Data Protection Regulation (GDPR) offers a useful starting point for stronger protections, but even this comprehensive framework has shown limitations in the face of AI advancements. What we need is a rights-based approach that shifts the burden of protection from individuals to the entities collecting and processing data."
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
      "The first time Manuel read a complete sentence aloud without stumbling, his face lit up with such pure joy that I had to turn away to hide my own tears. At twelve years old, Manuel had been labeled a 'problem student' by a system that never identified his dyslexia. For eight weeks, I had been volunteering at the Community Literacy Alliance, working with Manuel twice weekly after school. That moment—his triumph over a system that had failed him—fundamentally changed how I understand educational privilege.",
      "Before volunteering, I viewed literacy as something so fundamental it seemed almost impossible to lack in our society. But Manuel's story is not unique. According to the National Center for Education Statistics, 21% of adults in the United States read below a fifth-grade level. These statistics transformed from abstract numbers into real people as I worked with learners ranging from elementary students to grandparents, all fighting to gain access to a world that assumes literacy as a baseline.",
      "Through this experience, I've come to understand education not simply as an individual achievement but as a collective responsibility. The barriers to learning that Manuel faced weren't the result of his abilities, but of systemic failures to recognize and accommodate different learning styles. As I look toward my future studies, I carry this understanding with me—that access to education isn't equally distributed, and that recognizing this inequality is the first step toward addressing it."
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