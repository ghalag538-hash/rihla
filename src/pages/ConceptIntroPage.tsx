type ConceptIntroPageProps = {
  conceptTitle: string;
  onContinue: () => void;
};

function ConceptIntroPage({
  conceptTitle,
  onContinue,
}: ConceptIntroPageProps) {
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
        <div className="question-logo">رِحلة</div>

        <div className="journey-progress">
          <span className="active">01</span>
          <span className="line" />
          <span className="active">02</span>
          <span className="line" />
          <span>03</span>
        </div>
      </nav>

      <section className="concept-content">
        <span className="concept-label">
          ✦ فهم السؤال
        </span>

        <h1>
          فهمنا سؤالك
        </h1>

        <p className="concept-subtitle">
          يبدو أنك تستكشف مفهومًا مرتبطًا بـ
        </p>

        <div className="concept-orb">
          <div className="concept-orb-ring ring-one" />
          <div className="concept-orb-ring ring-two" />

          <div className="concept-core">
            <span>رِحلة</span>
          </div>
        </div>

        <div className="concept-name">
          {conceptTitle}
        </div>

        <p className="concept-description">
          سنبدأ من هذا المفهوم، ثم نكتشف المفاهيم المرتبطة به
          خطوة بخطوة.
        </p>

        <button
          className="discover-button concept-button"
          onClick={onContinue}
        >
          <span>ابدأ الاستكشاف</span>
          <span>←</span>
        </button>
      </section>
    </main>
  );
}

export default ConceptIntroPage;