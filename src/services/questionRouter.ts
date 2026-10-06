import { concepts } from "../data/concepts";

export type QuestionRouteResult = {
  concept_id: string;
  title: string;
  description: string;
};

export function findConceptFromQuestion(
  question: string
): QuestionRouteResult | null {
  const normalizedQuestion = question
    .trim()
    .toLowerCase();

  if (!normalizedQuestion) {
    return null;
  }

  const concept = concepts.find((item) =>
    item.keywords.some((keyword) =>
      normalizedQuestion.includes(
        keyword.toLowerCase()
      )
    )
  );

  if (!concept) {
    return null;
  }

  return {
    concept_id: concept.id,
    title: concept.title,
    description: concept.description,
  };
}