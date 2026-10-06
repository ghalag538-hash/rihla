from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import json
from dotenv import load_dotenv
from google import genai


# =========================
# Setup
# =========================

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

app = FastAPI(title="Rihla Backend")


# =========================
# CORS
# =========================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",     "https://regal-dolphin-50eee6.netlify.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================
# Load Knowledge Base
# =========================

def load_knowledge_base():
    try:
        with open(
            "sources.json",
            "r",
            encoding="utf-8"
        ) as file:
            return json.load(file)

    except Exception as e:
        print("SOURCES ERROR:", repr(e))

        return {
            "concepts": [],
            "clarifications": [],
            "relationships": [],
            "sample_journeys": [],
            "out_of_scope_response": {}
        }


# =========================
# Find Clarification
# =========================

def find_clarification(question):
    data = load_knowledge_base()

    question_lower = question.strip().lower()

    for clarification in data.get(
        "clarifications",
        []
    ):
        for keyword in clarification.get(
            "trigger_keywords",
            []
        ):
            if keyword.lower() in question_lower:
                return clarification

    return None


# =========================
# Find Concept
# =========================

def find_concept(question, ai_concept=""):
    data = load_knowledge_base()

    question_lower = question.strip().lower()
    ai_concept_lower = ai_concept.strip().lower()

    best_concept = None
    best_score = 0

    direct_forms = {
        "concept_salah": [
            "صلاة",
            "الصلاة",
            "يصلي",
            "يصلون",
            "نصلي",
            "صلوات",
            "الصلاه"
        ],

        "concept_tawhid": [
            "توحيد",
            "التوحيد",
            "يوحد",
            "العقيدة",
            "عقيدة"
        ],

        "concept_quran": [
            "قرآن",
            "القرآن",
            "القران",
            "المصحف",
            "آية",
            "آيات",
            "سورة"
        ],

        "concept_islam": [
            "الإسلام",
            "الاسلام",
            "دين الإسلام"
        ],

        "concept_prophet": [
            "محمد",
            "النبي",
            "الرسول"
        ],

        "concept_taharah": [
            "الطهارة",
            "طهارة",
            "الوضوء",
            "وضوء",
            "يتوضأ"
        ],

        "concept_qibla": [
            "القبلة",
            "قبلة",
            "الكعبة",
            "كعبة"
        ],

        "concept_sawm": [
            "الصيام",
            "صيام",
            "الصوم",
            "صوم",
            "رمضان"
        ],

        "concept_zakat_hajj": [
            "الزكاة",
            "زكاة",
            "الحج",
            "حج"
        ]
    }

    for concept in data.get("concepts", []):
        score = 0

        concept_id = concept.get("id", "")

        title = (
            concept.get("title", "")
            .strip()
            .lower()
        )

        keywords = concept.get(
            "keywords",
            []
        )

        if title and title in question_lower:
            score += 20

        for keyword in keywords:
            keyword_lower = keyword.strip().lower()

            if (
                keyword_lower
                and keyword_lower in question_lower
            ):
                score += 10

        for form in direct_forms.get(
            concept_id,
            []
        ):
            if form in question_lower:
                score += 30

        if title and title in ai_concept_lower:
            score += 4

        for keyword in keywords:
            keyword_lower = keyword.strip().lower()

            if (
                keyword_lower
                and keyword_lower in ai_concept_lower
            ):
                score += 2

        if score > best_score:
            best_score = score
            best_concept = concept

    return best_concept


# =========================
# Find Concept By ID
# =========================

def get_concept_by_id(concept_id):
    data = load_knowledge_base()

    for concept in data.get(
        "concepts",
        []
    ):
        if concept.get("id") == concept_id:
            return concept

    return None


# =========================
# Get Related Concepts
# =========================

def get_related_concepts(concept_id):
    data = load_knowledge_base()

    related = []

    for relationship in data.get(
        "relationships",
        []
    ):

        if (
            relationship.get("from")
            == concept_id
        ):
            target = get_concept_by_id(
                relationship.get("to")
            )

            if target:
                related.append({
                    "relation":
                        relationship.get("relation"),
                    "concept": target
                })

        elif (
            relationship.get("to")
            == concept_id
        ):
            source = get_concept_by_id(
                relationship.get("from")
            )

            if source:
                related.append({
                    "relation":
                        relationship.get("relation"),
                    "concept": source
                })

    return related


# =========================
# Select Cards By Level
# =========================

def get_cards_for_level(
    concept,
    level
):
    cards = concept.get(
        "cards",
        []
    )

    level_map = {
        "أسمع لأول مرة": "beginner",
        "أعرف شيئاً بسيطاً": "intermediate",
        "أريد التعمق": "advanced",
        "مبتدئ": "beginner",
        "متوسط": "intermediate",
        "متقدم": "advanced",
        "beginner": "beginner",
        "intermediate": "intermediate",
        "advanced": "advanced"
    }

    requested_level = level_map.get(
        level.strip().lower(),
        level.strip().lower()
    )

    if requested_level == "beginner":
        allowed_levels = [
            "beginner"
        ]

    elif requested_level == "intermediate":
        allowed_levels = [
            "beginner",
            "intermediate"
        ]

    else:
        allowed_levels = [
            "beginner",
            "intermediate",
            "advanced"
        ]

    selected_cards = [
        card
        for card in cards
        if card.get("level")
        in allowed_levels
    ]

    return selected_cards


# =========================
# Journey Engine
# =========================

class JourneyEngine:

    def __init__(self):
        self.data = load_knowledge_base()

    def get_title(
        self,
        concept_id
    ):
        concept = get_concept_by_id(
            concept_id
        )

        if concept:
            return concept.get("title")

        return concept_id

    def get_next_recommended_step(
        self,
        current_concept_id,
        visited_concepts
    ):

        relationships = self.data.get(
            "relationships",
            []
        )

        prerequisites = []

        for relationship in relationships:

            if (
                relationship.get("to")
                == current_concept_id
                and relationship.get(
                    "relation"
                ) == "requires"
            ):

                source_id = relationship.get(
                    "from"
                )

                if (
                    source_id
                    not in visited_concepts
                ):
                    prerequisites.append(
                        source_id
                    )

        if prerequisites:
            next_id = prerequisites[0]

            return {
                "next_concept_id": next_id,
                "next_concept_title":
                    self.get_title(next_id),
                "reason": (
                    f"لأن "
                    f"{self.get_title(next_id)} "
                    f"متطلب أساسي لفهم "
                    f"{self.get_title(current_concept_id)}."
                )
            }

        required_targets = []

        for relationship in relationships:

            if (
                relationship.get("from")
                == current_concept_id
                and relationship.get(
                    "relation"
                ) == "requires"
            ):

                target_id = relationship.get(
                    "to"
                )

                if (
                    target_id
                    not in visited_concepts
                ):
                    required_targets.append(
                        target_id
                    )

        if required_targets:
            next_id = required_targets[0]

            return {
                "next_concept_id": next_id,
                "next_concept_title":
                    self.get_title(next_id),
                "reason": (
                    f"لأن "
                    f"{self.get_title(next_id)} "
                    f"من المفاهيم المرتبطة بـ "
                    f"{self.get_title(current_concept_id)}."
                )
            }

        related = []

        for relationship in relationships:

            if (
                relationship.get("from")
                == current_concept_id
            ):

                target_id = relationship.get(
                    "to"
                )

                if (
                    target_id
                    not in visited_concepts
                ):
                    related.append(
                        target_id
                    )

            elif (
                relationship.get("to")
                == current_concept_id
            ):

                source_id = relationship.get(
                    "from"
                )

                if (
                    source_id
                    not in visited_concepts
                ):
                    related.append(
                        source_id
                    )

        if related:
            next_id = related[0]

            return {
                "next_concept_id": next_id,
                "next_concept_title":
                    self.get_title(next_id),
                "reason": (
                    f"لتوسيع رحلتك المعرفية إلى "
                    f"{self.get_title(next_id)}."
                )
            }

        return None

    def reroute(
        self,
        new_concept_id,
        current_concept_id,
        history
    ):

        new_concept = get_concept_by_id(
            new_concept_id
        )

        if not new_concept:
            return None

        updated_history = list(history)

        if (
            current_concept_id
            and current_concept_id
            not in updated_history
        ):
            updated_history.append(
                current_concept_id
            )

        next_step = (
            self.get_next_recommended_step(
                new_concept_id,
                updated_history
            )
        )

        return {
            "status": "rerouted",
            "message": (
                f"تم تحديث رحلتك لتنتقل إلى: "
                f"{self.get_title(new_concept_id)}"
            ),
            "current_concept": {
                "id": new_concept_id,
                "title":
                    self.get_title(
                        new_concept_id
                    )
            },
            "history":
                updated_history,
            "next_recommendation":
                next_step
        }


# =========================
# Request Models
# =========================

class QuestionRequest(BaseModel):
    question: str


class JourneyRequest(BaseModel):
    topic: str
    level: str


class ExploreRequest(BaseModel):
    question: str
    level: str


class NextStepRequest(BaseModel):
    current_concept_id: str
    visited_concepts: list[str]


class RerouteRequest(BaseModel):
    new_concept_id: str
    current_concept_id: str
    history: list[str]


# =========================
# Home
# =========================

@app.get("/")
def home():

    return {
        "message":
            "Rihla Backend is running"
    }


# =========================
# Sources
# =========================

@app.get("/sources")
def get_sources():

    data = load_knowledge_base()

    return {
        "concepts_count":
            len(
                data.get(
                    "concepts",
                    []
                )
            ),

        "clarifications_count":
            len(
                data.get(
                    "clarifications",
                    []
                )
            ),

        "relationships_count":
            len(
                data.get(
                    "relationships",
                    []
                )
            ),

        "sample_journeys_count":
            len(
                data.get(
                    "sample_journeys",
                    []
                )
            ),

        "concepts":
            data.get(
                "concepts",
                []
            )
    }


# =========================
# Sample Journeys
# =========================

@app.get("/sample-journeys")
def get_sample_journeys():

    data = load_knowledge_base()

    journeys = []

    for journey in data.get(
        "sample_journeys",
        []
    ):

        concepts = []

        for concept_id in journey.get(
            "concept_ids",
            []
        ):

            concept = get_concept_by_id(
                concept_id
            )

            if concept:

                concepts.append({
                    "id":
                        concept.get("id"),

                    "title":
                        concept.get("title"),

                    "description":
                        concept.get(
                            "description"
                        )
                })

        journeys.append({
            "id":
                journey.get("id"),

            "title":
                journey.get("title"),

            "concepts":
                concepts
        })

    return {
        "journeys": journeys
    }


# =========================
# Analyze Question
# =========================

@app.post("/analyze")
def analyze_question(
    request: QuestionRequest
):

    clarification = find_clarification(
        request.question
    )

    if clarification:

        return {
            "question":
                request.question,

            "needs_clarification":
                True,

            "clarification":
                clarification
        }

    prompt = f"""
    حلل السؤال التالي المتعلق بالمحتوى الإسلامي:

    {request.question}

    حدد المفهوم الرئيسي وهدف المستخدم.

    أعد JSON فقط بالشكل التالي:

    {{
        "concept": "المفهوم الرئيسي",
        "intent": "نية المستخدم",
        "needs_clarification": false
    }}
    """

    try:

        response = (
            client.models.generate_content(
                model=
                    "gemini-3.5-flash-lite",

                contents=prompt,

                config={
                    "response_mime_type":
                        "application/json"
                }
            )
        )

        analysis = json.loads(
            response.text
        )

        return {
            "question":
                request.question,

            "concept":
                analysis.get(
                    "concept"
                ),

            "intent":
                analysis.get(
                    "intent"
                ),

            "needs_clarification":
                analysis.get(
                    "needs_clarification",
                    False
                )
        }

    except Exception as e:

        print(
            "ANALYZE ERROR:",
            repr(e)
        )

        if "503" in str(e):

            raise HTTPException(
                status_code=503,
                detail=(
                    "خدمة الذكاء الاصطناعي "
                    "مشغولة حالياً، "
                    "حاول مرة أخرى بعد قليل."
                )
            )

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# =========================
# Create Journey
# =========================

@app.post("/journey")
def create_journey(
    request: JourneyRequest
):

    concept = find_concept(
        request.topic,
        request.topic
    )

    if not concept:

        data = load_knowledge_base()

        out_scope = data.get(
            "out_of_scope_response",
            {}
        )

        return {
            "topic":
                request.topic,

            "journey":
                None,

            "message":
                out_scope.get(
                    "message",
                    "لا توجد مصادر كافية."
                ),

            "recommendation":
                out_scope.get(
                    "recommendation"
                )
        }

    cards = get_cards_for_level(
        concept,
        request.level
    )

    related = get_related_concepts(
        concept.get("id")
    )

    engine = JourneyEngine()

    next_recommendation = (
        engine.get_next_recommended_step(
            concept.get("id"),
            []
        )
    )

    return {
        "topic":
            concept.get("title"),

        "level":
            request.level,

        "concept": {
            "id":
                concept.get("id"),

            "title":
                concept.get("title"),

            "description":
                concept.get(
                    "description"
                )
        },

        "cards":
            cards,

        "related_concepts": [
            {
                "relation":
                    item.get(
                        "relation"
                    ),

                "id":
                    item[
                        "concept"
                    ].get("id"),

                "title":
                    item[
                        "concept"
                    ].get("title")
            }

            for item in related
        ],

        "next_recommendation":
            next_recommendation
    }


# =========================
# Explore - FAST VERSION
# =========================

@app.post("/explore")
def explore(
    request: ExploreRequest
):

    try:

        # 1. Check Clarifications
        clarification = find_clarification(
            request.question
        )

        if clarification:

            redirected_concept = get_concept_by_id(
                clarification.get(
                    "redirect_concept_id"
                )
            )

            return {
                "question": request.question,
                "needs_clarification": True,
                "clarification": {
                    "message": clarification.get(
                        "clarification_text"
                    ),
                    "source_title": clarification.get(
                        "source_title"
                    ),
                    "source_url": clarification.get(
                        "source_url"
                    )
                },
                "redirect_concept": (
                    {
                        "id":
                            redirected_concept.get("id"),
                        "title":
                            redirected_concept.get("title")
                    }
                    if redirected_concept
                    else None
                )
            }

        # 2. Find concept directly
        # لا يوجد Gemini هنا
        concept = find_concept(
            request.question
        )

        if not concept:

            data = load_knowledge_base()

            out_scope = data.get(
                "out_of_scope_response",
                {}
            )

            return {
                "question":
                    request.question,

                "analysis": {
                    "concept": None,
                    "intent":
                        request.question
                },

                "journey":
                    None,

                "sources":
                    [],

                "message":
                    out_scope.get(
                        "message",
                        "لم أجد محتوى موثوقاً كافياً لهذا السؤال."
                    ),

                "recommendation":
                    out_scope.get(
                        "recommendation"
                    )
            }

        # 3. Select trusted cards
        cards = get_cards_for_level(
            concept,
            request.level
        )

        related = get_related_concepts(
            concept.get("id")
        )

        # 4. Build journey locally
        # لا يوجد Gemini هنا أيضًا
        nodes = []

        next_titles = []

        for item in related:

            related_concept = item.get(
                "concept",
                {}
            )

            related_title = (
                related_concept.get(
                    "title"
                )
            )

            if (
                related_title
                and related_title
                not in next_titles
            ):
                next_titles.append(
                    related_title
                )

        for card in cards:

            description = (
                card.get("content")
                or card.get("description")
                or card.get("text")
                or card.get("summary")
                or concept.get("description")
                or ""
            )

            source_card_ids = []

            if card.get("id"):
                source_card_ids.append(
                    card.get("id")
                )

            nodes.append({
                "title":
                    card.get(
                        "title",
                        concept.get("title")
                    ),

                "description":
                    description,

                "source_card_ids":
                    source_card_ids,

                "next_steps":
                    next_titles[:2]
            })

        # Fallback if no cards
        if not nodes:

            nodes.append({
                "title":
                    concept.get("title"),

                "description":
                    concept.get(
                        "description",
                        ""
                    ),

                "source_card_ids":
                    [],

                "next_steps":
                    next_titles[:2]
            })

        journey = {
            "topic":
                concept.get("title"),

            "level":
                request.level,

            "nodes":
                nodes
        }

        # 5. Prepare trusted sources
        sources = []

        for card in cards:

            sources.append({
                "card_id":
                    card.get("id"),

                "title":
                    card.get("title"),

                "source_title":
                    card.get(
                        "source_title"
                    ),

                "source_url":
                    card.get(
                        "source_url"
                    )
            })

        # 6. Journey Engine
        engine = JourneyEngine()

        next_recommendation = (
            engine.get_next_recommended_step(
                concept.get("id"),
                []
            )
        )

        # 7. Final Response
        return {
            "question":
                request.question,

            "analysis": {
                "concept":
                    concept.get("title"),

                "intent":
                    request.question
            },

            "matched_concept": {
                "id":
                    concept.get("id"),

                "title":
                    concept.get("title")
            },

            "journey":
                journey,

            "next_recommendation":
                next_recommendation,

            "sources":
                sources
        }

    except Exception as e:

        print(
            "EXPLORE ERROR:",
            repr(e)
        )

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# =========================
# Next Recommended Step
# =========================

@app.post("/next-step")
def next_step(
    request: NextStepRequest
):

    current_concept = (
        get_concept_by_id(
            request.current_concept_id
        )
    )

    if not current_concept:

        raise HTTPException(
            status_code=404,
            detail="المفهوم غير موجود."
        )

    engine = JourneyEngine()

    recommendation = (
        engine.get_next_recommended_step(
            request.current_concept_id,
            request.visited_concepts
        )
    )

    return {
        "current_concept": {
            "id":
                current_concept.get("id"),

            "title":
                current_concept.get(
                    "title"
                )
        },

        "next_recommendation":
            recommendation
    }


# =========================
# Dynamic Rerouting
# =========================

@app.post("/reroute")
def reroute(
    request: RerouteRequest
):

    engine = JourneyEngine()

    result = engine.reroute(
        request.new_concept_id,
        request.current_concept_id,
        request.history
    )

    if not result:

        raise HTTPException(
            status_code=404,
            detail=
                "المفهوم الجديد غير موجود."
        )

    return result 
