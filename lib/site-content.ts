export const navItems = ["Home", "About", "Articles", "Media", "Travel", "Contact"];

export const articleCategories = [
  "Education",
  "Politics",
  "Technology",
  "Islam",
  "General",
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
    title: "Education",
    description: "Pedagogy, learning culture, institutions",
  },
  {
    title: "Politics",
    description: "Civic life, policy, public responsibility",
  },
  {
    title: "Technology",
    description: "Digital society, ethics, future skills",
  },
  {
    title: "Islam",
    description: "Faith, knowledge, character, service",
  },
  {
    title: "General",
    description: "Essays, commentary, lived observations",
  },
  {
    title: "Travel & Leisure",
    description: "Places, culture, reflective journeys",
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
