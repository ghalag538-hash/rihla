export type ClarificationResult = {
  matched: boolean;
  clarification_id?: string;
  text?: string;
  target_concept_id?: string;
  source_title?: string;
  source_url?: string;
};

type ClarificationRule = {
  id: string;
  keywords: string[];
  text: string;
  target_concept_id: string;
  source_title: string;
  source_url: string;
};

const clarificationRules: ClarificationRule[] = [
  {
    id: "clarify_kaaba_worship",
    keywords: [
      "يعبدون الكعبة",
      "عبادة الكعبة",
      "يسجدون للحجر",
      "عبادة الأحجار",
    ],
    text:
      "المسلمون لا يعبدون الكعبة، وإنما يعبدون الله وحده. والكعبة هي قبلة المسلمين التي يتوجهون إليها في الصلاة. يمكنك استكشاف مفهوم القبلة والكعبة لفهم هذا الموضوع أكثر.",
    target_concept_id: "concept_qibla",
    source_title: "هل المسلمون يعبدون الكعبة؟",
    source_url:
      "https://islamqa.info/ar/answers/21720",
  },
  {
    id: "clarify_new_religion",
    keywords: [
      "دين جديد",
      "ابتكره محمد",
      "مؤسس الإسلام",
    ],
    text:
      "الإسلام ليس فكرة دينية جديدة بدأها النبي محمد ﷺ، بل يقدّم الإسلام نفسه باعتباره امتدادًا لدعوة الأنبياء إلى عبادة الله وحده. يمكنك البدء من مفهوم الإسلام لفهم هذه الفكرة بصورة أوسع.",
    target_concept_id: "concept_islam",
    source_title: "هل الإسلام دين جديد؟",
    source_url:
      "https://www.islamweb.net/ar/fatwa/18195",
  },
];

export function findClarification(
  question: string
): ClarificationResult | null {
  const normalizedQuestion = question
    .trim()
    .toLowerCase();

  if (!normalizedQuestion) {
    return null;
  }

  const rule = clarificationRules.find((item) =>
    item.keywords.some((keyword) =>
      normalizedQuestion.includes(
        keyword.toLowerCase()
      )
    )
  );

  if (!rule) {
    return null;
  }

  return {
    matched: true,
    clarification_id: rule.id,
    text: rule.text,
    target_concept_id: rule.target_concept_id,
    source_title: rule.source_title,
    source_url: rule.source_url,
  };
}