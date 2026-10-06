import type { Relationship } from "../types/rihla";

export const relationships: Relationship[] = [
  {
    from: "concept_salah",
    relation: "requires",
    to: "concept_taharah",
  },
  {
    from: "concept_salah",
    relation: "requires",
    to: "concept_qibla",
  },
  {
    from: "concept_quran",
    relation: "revealed_to",
    to: "concept_prophet",
  },
  {
    from: "concept_tawhid",
    relation: "foundation_of",
    to: "concept_islam",
  },
];
