import { useState } from "react";

type QuestionPageProps = {
  onConceptDetected: (
    conceptId: string,
    conceptTitle: string,
    aiData?: any
  ) => void;

  onClarificationDetected: (
    clarificationText: string,
    sourceTitle: string,
    sourceUrl: string,
    targetConceptId: string
  ) => void;
};

function QuestionPage({
  onConceptDetected,
  onClarificationDetected,
}: QuestionPageProps) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim() || loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://rihla-backend-qs1t.onrender.com/explore",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: question.trim(),
            level: "مبتدئ",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Backend error: ${response.status}`
        );
      }

      const data = await response.json();

      console.log("AI RESPONSE:", data);

      // إذا احتاج السؤال إلى توضيح
      if (data.needs_clarification) {
        onClarificationDetected(
          data.clarification?.message ?? "",
          data.clarification?.source_title ?? "",
          data.clarification?.source_url ?? "",
          data.redirect_concept?.id ?? ""
        );

        return;
      }

      // إذا لم يجد النظام مفهومًا مناسبًا
      if (!data.matched_concept) {
        alert(
          data.message ||
            "لم أجد مسارًا مناسبًا لهذا السؤال ضمن المصادر المتاحة."
        );

        return;
      }

      // نرسل المفهوم + نتيجة الـ AI كاملة إلى App
      onConceptDetected(
        data.matched_concept.id,
        data.matched_concept.title,
        data
      );
    } catch (error) {
      console.error(
        "AI ERROR:",
        error
      );

      alert(
        "تعذر الاتصال بالذكاء الاصطناعي. تأكدي أن الـ Backend يعمل."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestion = (
    suggestion: string
  ) => {
    setQuestion(suggestion);
  };

  return (
    <main className="question-page">
      <div className="question-background">
        <div className="question-glow glow-one" />
        <div className="question-glow glow-two" />

        <div className="question-stars">
          <span>✦</span>
          <span>✧</span>
          <span>·</span>
          <span>✦</span>
          <span>·</span>
          <span>✧</span>
        </div>
      </div>

      <nav className="question-nav">
        <div className="question-logo">
          رِحلة
        </div>

        <div className="journey-progress">
          <span className="active">
            01
          </span>

          <span className="line" />

          <span>
            02
          </span>

          <span className="line" />

          <span>
            03
          </span>
        </div>
      </nav>

      <section className="question-content">
        <div className="question-intro">
          <span className="question-label">
            ابدأ من هنا
          </span>

          <h1>
            وش الشيء اللي
            <br />

            <span>
              يدور في بالك؟
            </span>
          </h1>

          <p>
            ما تحتاج تعرف من وين تبدأ.
            <br />
            اكتب سؤالك، ورِحلة تساعدك تكتشف الطريق.
          </p>
        </div>

        <div className="question-card">
          <div className="card-top">
            <span>
              سؤالك
            </span>

            <span className="card-icon">
              ✦
            </span>
          </div>

          <textarea
            value={question}
            onChange={(event) =>
              setQuestion(
                event.target.value
              )
            }
            placeholder="اكتب سؤالك هنا..."
            rows={5}
          />

          <div className="card-bottom">
            <span className="hint">
              لا يوجد سؤال خاطئ، ابدأ بما يدور في بالك.
            </span>

            <button
              className="discover-button"
              onClick={
                handleSubmit
              }
              disabled={
                !question.trim() ||
                loading
              }
            >
              <span>
                {loading
                  ? "جاري الاستكشاف..."
                  : "استكشف من هنا"}
              </span>

              <span>
                ←
              </span>
            </button>
          </div>
        </div>

        <div className="suggested-section">
          <span className="suggested-title">
            أو استكشف من سؤال مقترح
          </span>

          <div className="suggested-questions">
            <button
              onClick={() =>
                handleSuggestion(
                  "ما هو التوحيد؟"
                )
              }
            >
              ما هو التوحيد؟
            </button>

            <button
              onClick={() =>
                handleSuggestion(
                  "لماذا يصلي المسلمون؟"
                )
              }
            >
              لماذا يصلي المسلمون؟
            </button>

            <button
              onClick={() =>
                handleSuggestion(
                  "ما هو القرآن؟"
                )
              }
            >
              ما هو القرآن؟
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default QuestionPage; 
