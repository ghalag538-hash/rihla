import { getNextRecommendation } from "./journeyEngine";

const result = getNextRecommendation(
  "concept_salah",
  ["concept_salah"]
);

console.log("Rihla Journey Test:", result);