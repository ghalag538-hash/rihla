import { useMemo } from "react";
import { concepts } from "../data/concepts";
import { relationships } from "../data/relationships";
import { getNextRecommendation } from "../services/journeyEngine";
import "./KnowledgeMapPage.css";

type KnowledgeMapPageProps = {
  conceptId: string;
  visitedConcepts: string[];
  onContinue: (nextConceptId: string) => void;
  onOpenContent: () => void;
  onBack: () => void;
};

function KnowledgeMapPage({
  conceptId,
  visitedConcepts,
  onContinue,
  onOpenContent,
  onBack,
}: KnowledgeMapPageProps) {
  const currentConcept = concepts.find(
    (concept) => concept.id === conceptId
  );

  const journeyConcepts = useMemo(() => {
    return visitedConcepts
      .map((id) =>
        concepts.find(
          (concept) => concept.id === id
        )
      )
      .filter(Boolean);
  }, [visitedConcepts]);

  const relatedConcepts = useMemo(() => {
    const relatedIds = relationships
      .filter(
        (relationship) =>
          relationship.from === conceptId ||
          relationship.to === conceptId
      )
      .map((relationship) =>
        relationship.from === conceptId
          ? relationship.to
          : relationship.from
      );

    return concepts.filter((concept) =>
      relatedIds.includes(concept.id)
    );
  }, [conceptId]);

  const nextRecommendation =
    getNextRecommendation(
      conceptId,
      visitedConcepts
    );

  if (!currentConcept) {
    return (
      <main className="concept-page">
        <section className="concept-content">
          <h1>
            لم نتمكن من تحديد المفهوم
          </h1>

          <p>
            لم نجد هذا المفهوم في قاعدة المعرفة الحالية.
          </p>

          <button
            className="discover-button"
            onClick={onBack}
          >
            <span>العودة</span>
            <span>→</span>
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="knowledge-map-page">
      <div className="map-stars" />

      <nav className="question-nav">
        <button
          className="map-back-button"
          onClick={onBack}
        >
          <span>→</span>
          <span>العودة</span>
        </button>

        <div className="question-logo">
          رِحلة
        </div>

        <div className="journey-progress">
          <span className="active">01</span>
          <span className="line" />
          <span className="active">02</span>
          <span className="line" />
          <span className="active">03</span>
        </div>
      </nav>

      <section className="knowledge-map-content">
        <div className="map-heading">
          <span>خريطتك المعرفية</span>

          <h1>
            شوف وين وصلت
            <br />
            <strong>في رحلتك.</strong>
          </h1>

          <p>
            رحلتك تتغير مع أسئلتك، وكل محطة
            تضيف جزءًا جديدًا للصورة.
          </p>
        </div>

        <div className="journey-history">
          <div className="history-header">
            <div>
              <span>تاريخ الرحلة</span>

              <strong>
                {journeyConcepts.length} محطات
              </strong>
            </div>

            <span className="history-symbol">
              ✦
            </span>
          </div>

          <div className="history-list">
            {journeyConcepts.map(
              (concept, index) => {
                if (!concept) {
                  return null;
                }

                const isCurrent =
                  concept.id === conceptId;

                return (
                  <div
                    className={`history-item ${
                      isCurrent
                        ? "current"
                        : "visited"
                    }`}
                    key={concept.id}
                  >
                    <div className="history-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <div className="history-connector">
                      <span />
                    </div>

                    <div className="history-content">
                      <span>
                        {isCurrent
                          ? "أنت هنا"
                          : "تم استكشافها"}
                      </span>

                      <strong>
                        {concept.title}
                      </strong>
                    </div>
                  </div>
                );
              }
            )}

            {nextRecommendation && (
              <div className="history-item next">
                <div className="history-number">
                  {String(
                    journeyConcepts.length + 1
                  ).padStart(2, "0")}
                </div>

                <div className="history-connector">
                  <span />
                </div>

                <div className="history-content">
                  <span>
                    الخطوة المقترحة
                  </span>

                  <strong>
                    {nextRecommendation.title}
                  </strong>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="knowledge-map">
          <div className="map-orbit map-orbit-one" />
          <div className="map-orbit map-orbit-two" />

          <div className="map-line line-top" />
          <div className="map-line line-right" />
          <div className="map-line line-bottom" />
          <div className="map-line line-left" />

          <div className="map-node map-current">
            <span>أنت هنا</span>

            <strong>
              {currentConcept.title}
            </strong>
          </div>

          {relatedConcepts[0] && (
            <div className="map-node map-node-top">
              {relatedConcepts[0].title}
            </div>
          )}

          {relatedConcepts[1] && (
            <div className="map-node map-node-right">
              {relatedConcepts[1].title}
            </div>
          )}

          {relatedConcepts[2] && (
            <div className="map-node map-node-bottom">
              {relatedConcepts[2].title}
            </div>
          )}

          {relatedConcepts[3] && (
            <div className="map-node map-node-left">
              {relatedConcepts[3].title}
            </div>
          )}
        </div>

        <div className="map-actions">
          <button
            className="map-content-button"
            onClick={onOpenContent}
          >
            <span>
              اقرأ بطاقة المعرفة
            </span>

            <span>↗</span>
          </button>

          {nextRecommendation && (
            <div className="next-step-card">
              <div className="next-step-icon">
                ✦
              </div>

              <div className="next-step-text">
                <span>
                  الخطوة المقترحة
                </span>

                <strong>
                  {nextRecommendation.title}
                </strong>

                <p>
                  {nextRecommendation.reason}
                </p>
              </div>

              <button
                className="next-step-button"
                onClick={() =>
                  onContinue(
                    nextRecommendation.next_concept_id
                  )
                }
              >
                استكشف الخطوة التالية
                <span>←</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default KnowledgeMapPage;