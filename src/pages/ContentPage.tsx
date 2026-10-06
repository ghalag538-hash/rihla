import { useEffect, useState } from "react";
import "./ContentPage.css";

type ContentPageProps = {
  conceptId: string;
  visitedConcepts: string[];

  exploreData?: ExploreData | null;

  onNext: (nextConceptId: string) => void;

  onReroute: (
    conceptId: string,
    visitedConcepts: string[]
  ) => void;

  onNewQuestion: () => void;
};

type JourneyNode = {
  title: string;
  description: string;
  source_card_ids?: string[];
  next_steps?: string[];
};

type Source = {
  card_id: string;
  title: string;
  source_title: string;
  source_url: string;
};

type ExploreData = {
  journey?: {
    topic?: string;
    level?: string;
    nodes?: JourneyNode[];
  };

  matched_concept?: {
    id: string;
    title: string;
  };

  next_recommendation?: {
    next_concept_id?: string;
    next_concept_title?: string;
    title?: string;
    reason?: string;
  } | null;

  sources?: Source[];
  message?: string;
};

function ContentPage({
  conceptId,
  visitedConcepts,
  exploreData,
  onNext,
  onReroute,
  onNewQuestion,
}: ContentPageProps) {
  const [data, setData] =
    useState<ExploreData | null>(
      exploreData ?? null
    );

  const [loading, setLoading] =
    useState(!exploreData);

  const [error, setError] =
    useState("");

  const [showQuestionBox, setShowQuestionBox] =
    useState(false);

  const [newQuestion, setNewQuestion] =
    useState("");

  useEffect(() => {
    // إذا عندنا نتيجة AI محفوظة من QuestionPage
    // نستخدمها مباشرة بدون طلب جديد
    if (
      exploreData &&
      exploreData.matched_concept?.id === conceptId
    ) {
      setData(exploreData);
      setLoading(false);
      setError("");
      return;
    }

    // إذا ما عندنا نتيجة محفوظة،
    // مثل الانتقال لمفهوم جديد، نطلبها من Backend
    const loadContent = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://rihla-backend-qs1t.onrender.com/explore",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              question: conceptId,
              level: "مبتدئ",
            }),
          }
        );

        if (!response.ok) {
          throw new Error(
            `Backend error: ${response.status}`
          );
        }

        const result = await response.json();

        console.log(
          "CONTENT AI RESPONSE:",
          result
        );

        setData(result);
      } catch (err) {
        console.error(err);

        setError(
          "تعذر تحميل الرحلة من الذكاء الاصطناعي."
        );
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [conceptId, exploreData]);

  const handleReroute = async () => {
    if (!newQuestion.trim()) {
      return;
    }

    try {
      const response = await fetch(
        "https://rihla-backend-qs1t.onrender.com/explore",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            question: newQuestion.trim(),
            level: "مبتدئ",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Backend error: ${response.status}`
        );
      }

      const result = await response.json();

      if (!result.matched_concept) {
        alert(
          result.message ||
            "لم يتم العثور على مسار مناسب."
        );

        return;
      }

      onReroute(
        result.matched_concept.id,
        [
          ...visitedConcepts,
          result.matched_concept.id,
        ]
      );

      setNewQuestion("");
      setShowQuestionBox(false);
    } catch (err) {
      console.error(err);

      alert(
        "تعذر تغيير المسار."
      );
    }
  };

  if (loading) {
    return (
      <main className="content-page">
        <section className="content-empty">
          <span>✦</span>

          <h1>
            جاري بناء رحلتك...
          </h1>

          <p>
            رِحلة ترتب لك المعرفة بناءً على سؤالك.
          </p>
        </section>
      </main>
    );
  }

  if (
    error ||
    !data ||
    !data.journey ||
    !data.journey.nodes ||
    data.journey.nodes.length === 0
  ) {
    return (
      <main className="content-page">
        <section className="content-empty">
          <span>
            رِحلة
          </span>

          <h1>
            لا يوجد محتوى متاح
          </h1>

          <p>
            {error ||
              data?.message ||
              "لم نجد مادة موثوقة متاحة لهذا المفهوم."}
          </p>

          <button
            className="content-question-button"
            onClick={onNewQuestion}
          >
            اسأل سؤالًا جديدًا
          </button>
        </section>
      </main>
    );
  }

  const nodes =
    data.journey.nodes;

  const sources =
    data.sources || [];

  const nextRecommendation =
    data.next_recommendation;

  return (
    <main className="content-page">
      <div className="content-stars" />

      <nav className="question-nav">
        <div className="question-logo">
          رِحلة
        </div>

        <div className="journey-progress">
          <span className="active">
            01
          </span>

          <span className="line" />

          <span className="active">
            02
          </span>

          <span className="line" />

          <span className="active">
            03
          </span>
        </div>
      </nav>

      <section className="content-wrapper">
        <div className="content-heading">
          <span>
            المحطة الحالية
          </span>

          <h1>
            استكشف
            <br />

            <strong>
              {data.journey.topic ||
                data.matched_concept?.title ||
                conceptId}
            </strong>
          </h1>

          <p>
            خذي وقتك في فهم هذه الفكرة،
            ثم واصلي رحلتك عندما تكونين مستعدة.
          </p>
        </div>

        {nodes.map(
          (node, index) => {
            const source =
              sources.find((item) =>
                node.source_card_ids?.includes(
                  item.card_id
                )
              ) || sources[index];

            return (
              <article
                className="knowledge-card"
                key={`${node.title}-${index}`}
              >
                <div className="knowledge-card-top">
                  <span className="knowledge-level">
                    المحطة {index + 1}
                  </span>

                  <span className="knowledge-symbol">
                    ✦
                  </span>
                </div>

                <h2>
                  {node.title}
                </h2>

                <div className="knowledge-text">
                  {node.description}
                </div>

                {source && (
                  <div className="knowledge-source">
                    <div>
                      <span>
                        المصدر
                      </span>

                      <strong>
                        {source.source_title}
                      </strong>
                    </div>

                    {source.source_url && (
                      <a
                        href={source.source_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        عرض المصدر ↗
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          }
        )}

        {nextRecommendation?.next_concept_id ? (
          <div className="content-next-area">
            <div className="content-next-info">
              <span>
                الخطوة التالية في رحلتك
              </span>

              <strong>
                {nextRecommendation.next_concept_title ||
                  nextRecommendation.title ||
                  "المحطة التالية"}
              </strong>

              <p>
                {nextRecommendation.reason}
              </p>
            </div>

            <button
              className="content-next-button"
              onClick={() =>
                onNext(
                  nextRecommendation.next_concept_id!
                )
              }
            >
              <span>
                أكمل الرحلة
              </span>

              <span>
                ←
              </span>
            </button>
          </div>
        ) : (
          <div className="content-finished">
            <span>
              ✦
            </span>

            <strong>
              وصلت إلى نهاية هذا المسار
            </strong>

            <p>
              يمكنك طرح سؤال جديد وبدء مسار آخر.
            </p>
          </div>
        )}

        {showQuestionBox && (
          <div className="reroute-question-box">
            <div className="reroute-question-heading">
              <span>
                ✦
              </span>

              <div>
                <strong>
                  غيّر مسارك بسؤالك
                </strong>

                <p>
                  جاء في بالك سؤال مختلف؟
                  اسأله بدون ما تفقد رحلتك الحالية.
                </p>
              </div>
            </div>

            <textarea
              value={newQuestion}
              onChange={(event) =>
                setNewQuestion(
                  event.target.value
                )
              }
              placeholder="وش السؤال الجديد؟"
              rows={4}
            />

            <button
              className="content-next-button reroute-button"
              onClick={handleReroute}
              disabled={!newQuestion.trim()}
            >
              <span>
                غيّر المسار
              </span>

              <span>
                ←
              </span>
            </button>
          </div>
        )}

        <button
          className="content-question-button"
          onClick={() =>
            setShowQuestionBox(
              (current) => !current
            )
          }
        >
          <span>
            {showQuestionBox
              ? "إغلاق السؤال"
              : "اسأل سؤالًا آخر"}
          </span>

          <span>
            ✦
          </span>
        </button>
      </section>
    </main>
  );
}

export default ContentPage;
