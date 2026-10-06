import { useState } from "react";
import QuestionPage from "./pages/QuestionPage";
import ConceptIntroPage from "./pages/ConceptIntroPage";
import KnowledgeMapPage from "./pages/KnowledgeMapPage";
import ContentPage from "./pages/ContentPage";
import "./App.css";

type Page =
  | "home"
  | "question"
  | "concept"
  | "clarification"
  | "map"
  | "content";

function App() {
  const [currentPage, setCurrentPage] =
    useState<Page>("home");

  const [detectedConcept, setDetectedConcept] =
    useState("");

  const [currentConceptId, setCurrentConceptId] =
    useState("");

  const [visitedConcepts, setVisitedConcepts] =
    useState<string[]>([]);

  // نحفظ هنا نتيجة /explore حتى لا نطلبها مرة ثانية
  const [exploreData, setExploreData] =
    useState<any>(null);

  const [clarificationText, setClarificationText] =
    useState("");

  const [
    clarificationSourceTitle,
    setClarificationSourceTitle,
  ] = useState("");

  const [
    clarificationSourceUrl,
    setClarificationSourceUrl,
  ] = useState("");

  const [mapBackPage, setMapBackPage] =
    useState<Page>("concept");

  const handleConceptDetected = (
    conceptId: string,
    conceptTitle: string,
    aiData?: any
  ) => {
    setCurrentConceptId(conceptId);
    setDetectedConcept(conceptTitle);
    setVisitedConcepts([conceptId]);

    if (aiData) {
      setExploreData(aiData);
    }

    setCurrentPage("concept");
  };

  const handleClarificationDetected = (
    text: string,
    sourceTitle: string,
    sourceUrl: string,
    targetConceptId: string
  ) => {
    setClarificationText(text);
    setClarificationSourceTitle(
      sourceTitle
    );
    setClarificationSourceUrl(
      sourceUrl
    );

    setCurrentConceptId(
      targetConceptId
    );

    setVisitedConcepts([
      targetConceptId,
    ]);

    setCurrentPage("clarification");
  };

  const handleStartMap = () => {
    if (!currentConceptId) {
      return;
    }

    setMapBackPage(currentPage);
    setCurrentPage("map");
  };

  const handleOpenContent = () => {
    if (!currentConceptId) {
      return;
    }

    setCurrentPage("content");
  };

  const handleContinueMap = (
    nextConceptId: string
  ) => {
    setVisitedConcepts((current) =>
      current.includes(nextConceptId)
        ? current
        : [...current, nextConceptId]
    );

    setCurrentConceptId(
      nextConceptId
    );

    // المفهوم تغيّر، لذلك الرحلة القديمة لم تعد مناسبة
    setExploreData(null);

    setCurrentPage("content");
  };

  const handleContinueContent = (
    nextConceptId: string
  ) => {
    setVisitedConcepts((current) =>
      current.includes(nextConceptId)
        ? current
        : [...current, nextConceptId]
    );

    setCurrentConceptId(
      nextConceptId
    );

    setExploreData(null);

    setCurrentPage("content");
  };

  const handleReroute = (
    newConceptId: string,
    updatedVisitedConcepts: string[]
  ) => {
    setCurrentConceptId(
      newConceptId
    );

    setVisitedConcepts(
      updatedVisitedConcepts
    );

    setExploreData(null);

    setCurrentPage("content");
  };

  const handleMapBack = () => {
    setCurrentPage(
      mapBackPage
    );
  };

  const handleNewQuestion = () => {
    setExploreData(null);
    setCurrentPage("question");
  };

  if (currentPage === "question") {
    return (
      <QuestionPage
        onConceptDetected={
          handleConceptDetected
        }
        onClarificationDetected={
          handleClarificationDetected
        }
      />
    );
  }

  if (currentPage === "concept") {
    return (
      <ConceptIntroPage
        conceptTitle={
          detectedConcept
        }
        onContinue={
          handleStartMap
        }
      />
    );
  }

  if (
    currentPage ===
    "clarification"
  ) {
    return (
      <main className="concept-page">
        <div className="concept-background">
          <div className="concept-glow concept-glow-one" />
          <div className="concept-glow concept-glow-two" />

          <div className="concept-stars">
            <span>✦</span>
            <span>✧</span>
            <span>·</span>
            <span>✦</span>
            <span>·</span>
            <span>✧</span>
          </div>
        </div>

        <nav className="question-nav">
          <button
            className="map-back-button"
            onClick={
              handleNewQuestion
            }
          >
            <span>→</span>
            <span>العودة</span>
          </button>

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

            <span>
              03
            </span>
          </div>
        </nav>

        <section className="concept-content">
          <span className="concept-label">
            ✦ توضيح مهم
          </span>

          <h1>
            خلنا نوضح
            <br />

            <span>
              نقطة صغيرة أولًا
            </span>
          </h1>

          <p className="concept-subtitle">
            قبل ما نكمل رحلتك،
            فيه فكرة تحتاج توضيحًا.
          </p>

          <div className="knowledge-card">
            <div className="knowledge-card-top">
              <span className="knowledge-level">
                توضيح موثوق
              </span>

              <span className="knowledge-symbol">
                ✦
              </span>
            </div>

            <p className="knowledge-text">
              {clarificationText}
            </p>

            <div className="knowledge-source">
              <div>
                <span>
                  المصدر
                </span>

                <strong>
                  {
                    clarificationSourceTitle
                  }
                </strong>
              </div>

              <a
                href={
                  clarificationSourceUrl
                }
                target="_blank"
                rel="noreferrer"
              >
                عرض المصدر ↗
              </a>
            </div>
          </div>

          <button
            className="discover-button concept-button"
            onClick={
              handleStartMap
            }
          >
            <span>
              أكمل الاستكشاف
            </span>

            <span>
              ←
            </span>
          </button>

          <button
            className="content-question-button"
            onClick={
              handleNewQuestion
            }
          >
            <span>
              اسأل سؤالًا آخر
            </span>

            <span>
              ✦
            </span>
          </button>
        </section>
      </main>
    );
  }

  if (currentPage === "map") {
    return (
      <KnowledgeMapPage
        conceptId={
          currentConceptId
        }
        visitedConcepts={
          visitedConcepts
        }
        onContinue={
          handleContinueMap
        }
        onOpenContent={
          handleOpenContent
        }
        onBack={
          handleMapBack
        }
      />
    );
  }

  if (currentPage === "content") {
    return (
      <ContentPage
        conceptId={
          currentConceptId
        }
        visitedConcepts={
          visitedConcepts
        }
        exploreData={
          exploreData
        }
        onNext={
          handleContinueContent
        }
        onReroute={
          handleReroute
        }
        onNewQuestion={
          handleNewQuestion
        }
      />
    );
  }

  return (
    <main className="rihla-page">
      <div className="stars" />

      <nav className="navbar">
        <div className="logo">
          <span>رِحلة</span>
        </div>

        <span className="nav-tagline">
          لا تقرأ المعرفة… استكشفها.
        </span>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            رحلة معرفية تفاعلية
          </span>

          <h1>
            ابدأ من سؤالك،
            <br />

            <span>
              واكتشف الطريق.
            </span>
          </h1>

          <p>
            رِحلة تساعدك على استكشاف
            المعرفة الإسلامية
            <br />
            من خلال مسار يتغير مع أسئلتك
            واحتياجك.
          </p>

          <button
            className="start-button"
            onClick={() =>
              setCurrentPage(
                "question"
              )
            }
          >
            ابدأ رحلتك
            <span>←</span>
          </button>

          <button
            className="explore-button"
            onClick={() =>
              setCurrentPage(
                "question"
              )
            }
          >
            لا أعرف من أين أبدأ
          </button>
        </div>

        <div className="journey-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="node node-main">
            <span>رِحلة</span>
          </div>

          <div className="node node-one">
            الإسلام
          </div>

          <div className="node node-two">
            القرآن
          </div>

          <div className="node node-three">
            الصلاة
          </div>

          <div className="node node-four">
            التوحيد
          </div>
        </div>
      </section>
    </main>
  );
}

export default App; 