export const navItems = ["Home", "About", "Articles", "Media", "Travel", "Contact"];

export const articleCategories = [
  "AI",
  "Education",
  "Islamic Economics",
  "Science Innovations",
  "All Articles",
];

type FeaturedArticle = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tone: string;
};

type LatestArticle = {
  category: string;
  title: string;
  date: string;
};

export const featuredArticles: FeaturedArticle[] = [];

export const topics = [
  {
    title: "AI",
    description: "Artificial intelligence, ethics, tools, and society",
  },
  {
    title: "Education",
    description: "Learning culture, institutions, pedagogy, and reform",
  },
  {
    title: "Islamic Economics",
    description: "Finance, justice, markets, and ethical prosperity",
  },
  {
    title: "Science Innovations",
    description: "Research, discovery, materials, health, and technology",
  },
];

export const milestones = [
  {
    title: "Academic Foundation",
    body: "Built a lifelong commitment to teaching, research, and public learning.",
  },
  {
    title: "Professional Service",
    body: "Contributed across education, public discourse, and institutional leadership.",
  },
  {
    title: "Publication Work",
    body: "Developed essays and commentary for readers seeking thoughtful perspective.",
  },
  {
    title: "Public Intellectual",
    body: "Focused on learning, inspiration, motivation, and meaningful contribution.",
  },
];

export const latestArticles: LatestArticle[] = [];
