export type ContentCard = {
  id: string;
  title: string;
  content: string;
  level: "beginner" | "intermediate";
  source_title: string;
  source_url: string;
};

export type Concept = {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  cards: ContentCard[];
};

export type Relationship = {
  from: string;
  relation: string;
  to: string;
};

export type Journey = {
  id: string;
  title: string;
  description: string;
  steps: string[];
};
