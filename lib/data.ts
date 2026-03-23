// ─── Guests ────────────────────────────────────────────────────────────────
export type SocialLink = {
  label: string;
  href: string;
  type: "x" | "linkedin" | "website" | "substack";
};

export type Guest = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  episodeTitle: string;
  youtubeUrl: string;
  transcriptUrl: string;
  date: string;
  duration: string;
  image: string;
  socials: SocialLink[];
};

export const guests: Guest[] = [
  {
    initials: "MK",
    name: "Mike Krieger",
    role: "Chief Product Officer (CPO)",
    bio: "Co-founder of Instagram. After leaving Meta, co-founded Artifact (AI-powered news app). Joined Anthropic to lead product in 2024.",
    episodeTitle: "Anthropic's CPO on what comes next",
    youtubeUrl: "https://www.youtube.com/watch?v=DKrBGOFs0GY",
    transcriptUrl:
      "https://www.lennysnewsletter.com/p/anthropics-cpo-heres-what-comes-next",
    date: "Jun 5, 2025",
    duration: "1h 6m",
    image: "https://img.youtube.com/vi/DKrBGOFs0GY/maxresdefault.jpg",
    socials: [
      { label: "X", href: "https://x.com/mikeyk", type: "x" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mikekrieger/",
        type: "linkedin",
      },
    ],
  },
  {
    initials: "BM",
    name: "Benjamin Mann",
    role: "Co-founder & Tech Lead, Product Engineering",
    bio: "One of the architects of GPT-3 at OpenAI. Left OpenAI with the safety team to co-found Anthropic.",
    episodeTitle:
      "Anthropic co-founder on quitting OpenAI, AGI predictions, $100M talent wars",
    youtubeUrl: "https://www.youtube.com/watch?v=WWoyWNhx2XU",
    transcriptUrl:
      "https://www.lennysnewsletter.com/p/anthropic-co-founder-benjamin-mann",
    date: "Jul 20, 2025",
    duration: "1h 15m",
    image: "https://img.youtube.com/vi/WWoyWNhx2XU/maxresdefault.jpg",
    socials: [
      { label: "X", href: "https://x.com/8enmann", type: "x" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/benjamin-mann/",
        type: "linkedin",
      },
      { label: "Website", href: "https://benjmann.net/", type: "website" },
    ],
  },
  {
    initials: "BC",
    name: "Boris Cherny",
    role: "Creator & Head of Claude Code",
    bio: "Previously Principal Engineer at Meta for 5 years. Author of Programming TypeScript. Briefly left Anthropic for Cursor, returned after two weeks.",
    episodeTitle: "Head of Claude Code: What happens after coding is solved",
    youtubeUrl: "https://www.youtube.com/watch?v=We7BZVKbCVw",
    transcriptUrl:
      "https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens",
    date: "Feb 19, 2026",
    duration: "1h 17m",
    image: "https://img.youtube.com/vi/We7BZVKbCVw/maxresdefault.jpg",
    socials: [
      { label: "X", href: "https://x.com/bcherny", type: "x" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/bcherny",
        type: "linkedin",
      },
      { label: "Website", href: "https://borischerny.com", type: "website" },
    ],
  },
  {
    initials: "JW",
    name: "Jenny Wen",
    role: "Head of Design for Claude",
    bio: "Previously Director of Design at Figma (led FigJam and Slides). Before that, designer at Dropbox, Square, and Shopify.",
    episodeTitle: "The design process is dead. Here's what's replacing it.",
    youtubeUrl: "https://www.youtube.com/watch?v=eh8bcBIAAFo",
    transcriptUrl: "https://www.lennysnewsletter.com/p/the-design-process-is-dead",
    date: "Mar 1, 2026",
    duration: "1h 17m",
    image: "https://img.youtube.com/vi/eh8bcBIAAFo/maxresdefault.jpg",
    socials: [
      { label: "X", href: "https://x.com/jenny_wen", type: "x" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jennywen",
        type: "linkedin",
      },
      { label: "Website", href: "https://jennywen.ca", type: "website" },
      {
        label: "Substack",
        href: "https://jennywen.substack.com",
        type: "substack",
      },
    ],
  },
];

// ─── Culture ───────────────────────────────────────────────────────────────
export type Quote = { text: string; attr: string };
export type CultureTheme = {
  name: string;
  icon: "shield" | "zap" | "code" | "heart";
  quotes: Quote[];
};

export const cultureThemes: CultureTheme[] = [
  {
    name: "Safety-First Mission",
    icon: "shield",
    quotes: [
      {
        text: "If you ask anyone in the hallway why they're here, the answer is always going to be safety.",
        attr: "Boris Cherny",
      },
      {
        text: "Intellectual honesty and a shared view of what it means to do AI responsibly.",
        attr: "Mike Krieger, on Anthropic's founders",
      },
      {
        text: "The company was founded when the entire safety team left OpenAI because safety wasn't being prioritized.",
        attr: "Ben Mann",
      },
      {
        text: "Mission alignment trumps financial incentives, helping retain talent despite $100M+ competitor offers.",
        attr: "Ben Mann",
      },
      {
        text: "Constitutional AI creates Claude's beloved personality as a direct result of the safety focus.",
        attr: "Ben Mann",
      },
    ],
  },
  {
    name: "Speed & Experimentation",
    icon: "zap",
    quotes: [
      {
        text: "No roadmap for innovation. Give people space and psychological safety that it's okay to fail. 80% of ideas being bad is okay.",
        attr: "Boris Cherny",
      },
      {
        text: "Building trust through speed — continuously shipping and improving.",
        attr: "Jenny Wen",
      },
      {
        text: "Claude Cowork was built in just 10 days from internal prototype to external launch.",
        attr: "Boris Cherny & Jenny Wen",
      },
      {
        text: "Give engineers unlimited tokens so they're free to try crazy ideas.",
        attr: "Boris Cherny",
      },
    ],
  },
  {
    name: "Technical Excellence",
    icon: "code",
    quotes: [
      {
        text: "Everyone is fairly technical — even for non-technical functions. Designers largely code.",
        attr: "Boris Cherny",
      },
      {
        text: "90-95% of code is written by AI; 70%+ of pull requests are Claude-generated.",
        attr: "Mike Krieger",
      },
      {
        text: "4× engineering team growth while productivity per engineer increased 200%.",
        attr: "Boris Cherny",
      },
      {
        text: "The Claude Code team uses Claude Code to build Claude Code in a self-improving loop.",
        attr: "Mike Krieger",
      },
    ],
  },
  {
    name: "Collaborative & Humble",
    icon: "heart",
    quotes: [
      {
        text: "The Anthropic Design team — really humble, doing great work, resilient, spanning from technical prototypers to high-craft specialists.",
        attr: "Jenny Wen",
      },
      {
        text: "The best teams roast each other — psychological safety combined with high standards.",
        attr: "Jenny Wen",
      },
      {
        text: "Slack is a gold mine of ideas and prototypes.",
        attr: "Jenny Wen",
      },
      {
        text: "Very little grandiosity from the founders �� they're clear-eyed about what they're building.",
        attr: "Mike Krieger",
      },
    ],
  },
];

// ─── Skills ────────────────────────────────────────────────────────────────
export type SkillCard = { initials: string; name: string; text: string };

export const skillCards: SkillCard[] = [
  {
    initials: "MK",
    name: "Mike Krieger",
    text: "\"I'm a huge believer in the founding engineer / tech lead with an idea — pair them with design and product support. I'm 10 times more a believer in that than before.\" Values curiosity, scientific thinking, and independent inquiry.",
  },
  {
    initials: "BM",
    name: "Benjamin Mann",
    text: "\"Be ambitious in how you use AI tools. People who use new tools as if they were old tools tend to not succeed.\" Teaches his kids: curiosity, creativity, self-led learning, and kindness. \"Facts are going to fade into the background.\"",
  },
  {
    initials: "BC",
    name: "Boris Cherny",
    text: "\"Everyone on the team codes — product managers, engineering managers, designers, finance, data scientists.\" Seeks people who are \"AI-native, curious, and generalists.\" Emphasizes speed, common sense, and first-principles thinking.",
  },
  {
    initials: "JW",
    name: "Jenny Wen",
    text: "Three hiring archetypes: (1) Strong Generalists (80th percentile in multiple skills), (2) Deep Specialists (top 10% in their area), (3) Craft New Grads (wise beyond years, humble, unburdened by old processes). Values resilience, adaptability, and excitement about frontier tech.",
  },
];

// ─── Products ──────────────────────────────────────────────────────────────
export type Product = { name: string; who: string; desc: string };

export const products: Product[] = [
  {
    name: "Claude Code",
    who: "Boris Cherny, Mike Krieger, Ben Mann",
    desc: '"100% of my code is AI-written since November. Haven\'t edited a single line by hand." Grew to 4% of public GitHub commits. Even legal and finance teams get massive value.',
  },
  {
    name: "Cowork",
    who: "Boris Cherny, Jenny Wen",
    desc: '"Built in 10 days. I use it every day — paid a parking ticket, all my project management. Tested against 50 non-technical use cases, passed 48/50. Life-changing."',
  },
  {
    name: "MCP (Model Context Protocol)",
    who: "Mike Krieger, Ben Mann",
    desc: '"May reshape how all software works. The fastest growing standard — Microsoft adopted it into Windows. Everything becomes scriptable and composable."',
  },
  {
    name: "Constitutional AI",
    who: "Ben Mann",
    desc: '"The model critiques and improves itself based on natural language principles. Claude\'s beloved personality is a direct result of this safety-focused approach."',
  },
  {
    name: "Claude Opus 4",
    who: "Mike Krieger",
    desc: '"My go-to product strategy partner — praised for independence, creativity, and novelty of thought."',
  },
  {
    name: "Prompt Improver",
    who: "Mike Krieger",
    desc: '"Describe your problem, give examples, and Claude agentically creates and iterates on a prompt for you."',
  },
  {
    name: "Anthropic Model Family",
    who: "Boris Cherny",
    desc: "Opus 4.6 (best for coding), Sonnet 4, Haiku — a trajectory from coding to tool use to computer use.",
  },
];

// ─── Books ─────────────────────────────────────────────────────────────────
export type Book = {
  title: string;
  author: string;
  note?: string;
  linkLabel: string;
  linkHref: string;
  image: string;
};

export type Recommender = {
  initials: string;
  name: string;
  books: Book[];
};

export const recommenders: Recommender[] = [
  {
    initials: "MK",
    name: "Mike Krieger",
    books: [
      {
        title: "The Goal: A Process of Ongoing Improvement",
        author: "Eliyahu M. Goldratt",
        linkLabel: "Audiobook",
        linkHref: "https://www.audible.com/pd/The-Goal-Audiobook/B00IFG88SM",
        image: "/images/book-the-goal.jpg",
      },
      {
        title: "The Hard Thing About Hard Things",
        author: "Ben Horowitz",
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/The-Hard-Thing-About-Hard-Things-Audiobook/B00I0AJC2Y",
        image: "/images/book-hard-thing.jpg",
      },
      {
        title: "The Way of the Code: The Timeless Art of Vibe Coding",
        author: "Rick Rubin × Anthropic",
        linkLabel: "Website",
        linkHref: "https://www.thewayofcode.com/",
        image: "/images/book-way-of-code.png",
      },
    ],
  },
  {
    initials: "BM",
    name: "Benjamin Mann",
    books: [
      {
        title: "Superintelligence: Paths, Dangers, Strategies",
        author: "Nick Bostrom",
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/Superintelligence-Audiobook/B00LPMD72K",
        image: "/images/book-superintelligence.jpg",
      },
      {
        title: "The Hacker and the State",
        author: "Ben Buchanan",
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/The-Hacker-and-the-State-Audiobook/1705231926",
        image: "/images/book-hacker-state.jpg",
      },
      {
        title: "Replacing Guilt: Minding Our Way",
        author: "Nate Soares",
        linkLabel: "Audiobook",
        linkHref:
          "https://podcasts.apple.com/us/podcast/replacing-guilt-full-audiobook/id1498321446?i=1000526818550",
        image: "/images/book-replacing-guilt.png",
      },
      {
        title: "Good Strategy/Bad Strategy",
        author: "Richard Rumelt",
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/Good-Strategy-Bad-Strategy-Audiobook/0593162927",
        image: "/images/book-good-strategy.jpg",
      },
      {
        title: "The Alignment Problem",
        author: "Brian Christian",
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/The-Alignment-Problem-Audiobook/1536695173",
        image: "/images/book-alignment-problem.jpg",
      },
    ],
  },
  {
    initials: "BC",
    name: "Boris Cherny",
    books: [
      {
        title: "Functional Programming in Scala",
        author: "Paul Chiusano & Rúnar Bjarnason",
        note: '"The single best technical book I\'ve ever read."',
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/Functional-Programming-in-Scala-Audiobook/B07M9ZDLNG",
        image: "/images/book-fp-scala.jpg",
      },
      {
        title: "Accelerando",
        author: "Charles Stross",
        note: '"Captures the essence of this moment we\'re in — the pace gets faster and faster."',
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/Accelerando-Audiobook/B00J3542OI",
        image: "/images/book-accelerando.jpg",
      },
      {
        title: "The Wandering Earth",
        author: "Liu Cixin",
        note: '"Really amazing stories. Interesting Chinese sci-fi perspective."',
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/The-Wandering-Earth-Audiobook/1250819024",
        image: "/images/book-wandering-earth.jpg",
      },
      {
        title: "The Three-Body Problem",
        author: "Liu Cixin",
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/The-Three-Body-Problem-Audiobook/B0CTRZ4XGN",
        image: "/images/book-three-body.jpg",
      },
      {
        title: "A Fire Upon the Deep",
        author: "Vernor Vinge",
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/A-Fire-Upon-the-Deep-Audiobook/B0036N2C7M",
        image: "/images/book-fire-deep.jpg",
      },
      {
        title: "A Deepness in the Sky",
        author: "Vernor Vinge",
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/A-Deepness-in-the-Sky-Audiobook/B0030GOEUS",
        image: "/images/book-deepness-sky.jpg",
      },
    ],
  },
  {
    initials: "JW",
    name: "Jenny Wen",
    books: [
      {
        title: "The Power Broker",
        author: "Robert Caro",
        note: '"1,100 pages worth reading end to end. Understanding how somebody just gets things done."',
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/The-Power-Broker-Audiobook/B0051JH67K",
        image: "/images/book-power-broker.jpg",
      },
      {
        title: "Insomniac City: New York, Oliver Sacks, and Me",
        author: "Bill Hayes",
        note: '"Beautiful ethereal memoir. Makes you think about mortality, love, and life."',
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/Insomniac-City-Audiobook/B01N5QDPH3",
        image: "/images/book-insomniac-city.jpg",
      },
      {
        title: "Radical Candor",
        author: "Kim Scott",
        linkLabel: "Audiobook",
        linkHref:
          "https://www.audible.com/pd/Radical-Candor-Audiobook/B01MZ6RMS4",
        image: "/images/book-radical-candor.jpg",
      },
    ],
  },
];
