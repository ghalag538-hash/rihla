import { relationships } from "../data/relationships";
import { concepts } from "../data/concepts";

export function getNextRecommendation(
  currentConceptId: string,
  visitedConcepts: string[] = []
) {
  const related = relationships.filter(
    (relationship) =>
      relationship.from === currentConceptId
  );

  const next = related.find(
    (relationship) =>
      !visitedConcepts.includes(
        relationship.to
      )
  );

  if (!next) {
    return null;
  }

  const concept = concepts.find(
    (item) => item.id === next.to
  );

  if (!concept) {
    return null;
  }

  return {
    next_concept_id: concept.id,
    title: concept.title,
    reason:
      next.relation === "requires"
        ? `مرتبط بما تتعلمينه الآن لأن ${concept.title} يساعد على فهم المفهوم.`
        : `مرتبط بهذا المفهوم لأن ${concept.title} يوسّع رحلتك المعرفية.`,
  };
}


/**
 * إعادة توجيه الرحلة عندما يطرح المستخدم
 * سؤالًا جديدًا أثناء الرحلة.
 */
export function rerouteJourney(
  newConceptId: string,
  currentConceptId: string,
  visitedConcepts: string[] = []
) {
  const updatedHistory = [
    ...visitedConcepts,
    currentConceptId,
  ];

  const nextRecommendation =
    getNextRecommendation(
      newConceptId,
      updatedHistory
    );

  const concept = concepts.find(
    (item) => item.id === newConceptId
  );

  if (!concept) {
    return {
      status: "not_found" as const,
      current_concept_id: newConceptId,
      next_recommendation: null,
      visited_concepts: updatedHistory,
    };
  }

  return {
    status: "rerouted" as const,

    message:
      "غيّرنا مسارك بناءً على سؤالك الجديد، ويمكنك متابعة رحلتك من هنا.",

    current_concept_id: concept.id,

    current_concept_title:
      concept.title,

    next_recommendation:
      nextRecommendation,

    visited_concepts: updatedHistory,
  };
}