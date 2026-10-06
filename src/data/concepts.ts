import type { Concept } from "../types/rihla"

export const concepts: Concept[] = [
  {
    id: "concept_islam",
    title: "الإسلام",
    description:
      "الاستسلام لله بالتوحيد والانقياد له بالطاعة والبراءة من الشرك، وهو الدين الخاتم.",
    keywords: [
      "إسلام",
      "مسلم",
      "دين الإسلام",
      "رسالة الإسلام",
      "ما هو الإسلام",
    ],
    cards: [
      {
        id: "card_islam_1",
        title: "حقيقة دين الإسلام ومعناه",
        content:
          "الإسلام هو الدين الذي بعث الله به خاتم الأنبياء محمدًا ﷺ، ويقوم على الاستسلام لله وحده بالتوحيد، والانقياد له بالطاعة، والبراءة من الشرك وأهله.",
        level: "beginner",
        source_title:
          "إسلام ويب - فتوى رقم 5742 (حقيقة الإسلام وأركانه)",
        source_url: "https://www.islamweb.net/ar/fatwa/5742",
      },
      {
        id: "card_islam_2",
        title: "شمولية الرسالة الإسلامية",
        content:
          "جاء الإسلام بصالح المعاش والمعاد، وينظم حياة الإنسان في العقيدة والأخلاق والمعاملات، وهو رسالة عامة للناس كافة وليست مقتصرة على قوم أو عصر معين.",
        level: "intermediate",
        source_title:
          "الإسلام سؤال وجواب - إجابة رقم 219 (محاسن الدين الإسلامي)",
        source_url: "https://islamqa.info/ar/answers/219",
      },
    ],
  },

  {
    id: "concept_tawhid",
    title: "التوحيد",
    description:
      "إفراد الله تعالى بما يختص به من الربوبية والألوهية والأسماء والصفات.",
    keywords: [
      "توحيد",
      "الله",
      "عقيدة",
      "لا إله إلا الله",
      "ربوبية",
      "ألوهية",
    ],
    cards: [
      {
        id: "card_tawhid_1",
        title: "ما هو التوحيد وما أنواعه؟",
        content:
          "التوحيد هو إفراد الله بالعبادة والربوبية والأسماء والصفات. وينقسم إلى ثلاثة أقسام: توحيد الربوبية (الخلق والتدبير)، توحيد الألوهية (إفراد الله بالعبادة)، وتوحيد الأسماء والصفات.",
        level: "beginner",
        source_title:
          "الإسلام سؤال وجواب - إجابة رقم 49030 (أنواع التوحيد الثلاثة)",
        source_url: "https://islamqa.info/ar/answers/49030",
      },
      {
        id: "card_tawhid_2",
        title: "أهمية التوحيد ومكانته",
        content:
          "التوحيد هو أول واجب على المكلف، وهو الغاية التي خلق الله لأجلها الجن والإنس، وبدونه لا تُقبل أي عبادة أو عمل صالح.",
        level: "intermediate",
        source_title:
          "إسلام ويب - فتوى رقم 13524 (منزلة التوحيد وأهميته)",
        source_url: "https://www.islamweb.net/ar/fatwa/13524",
      },
    ],
  },

  {
    id: "concept_quran",
    title: "القرآن الكريم",
    description:
      "كلام الله المنزل على محمد ﷺ المتعبد بتلاوته المعجز بلفظه ومعناه.",
    keywords: [
      "قرآن",
      "مصاحف",
      "كلام الله",
      "آيات",
      "سورة",
      "القرآن الكريم",
    ],
    cards: [
      {
        id: "card_quran_1",
        title: "تعريف القرآن الكريم",
        content:
          "القرآن الكريم هو كلام الله تعالى غير المخلوق، المنزل على نبينا محمد ﷺ بواسطة جبريل عليه السلام، المكتوب في المصاحف، المنقول إلينا بالتواتر، المتعبد بتلاوته.",
        level: "beginner",
        source_title:
          "الإسلام سؤال وجواب - إجابة رقم 102697 (تعريف القرآن وتواتره)",
        source_url: "https://islamqa.info/ar/answers/102697",
      },
      {
        id: "card_quran_2",
        title: "حفظ الله للقرآن من التحريف",
        content:
          "تولى الله تعالى بنفسه حفظ القرآن الكريم من التبديل والزيادة والنقصان، بخلاف الكتب السماوية السابقة التي استحفظ عليها أربابها.",
        level: "intermediate",
        source_title:
          "إسلام ويب - فتوى رقم 27282 (دلائل حفظ الله للقرآن الكريم)",
        source_url: "https://www.islamweb.net/ar/fatwa/27282",
      },
    ],
  },

  {
    id: "concept_prophet",
    title: "النبي محمد ﷺ",
    description:
      "خاتم الأنبياء والمرسلين المبعوث رحمة للعالمين.",
    keywords: [
      "محمد",
      "النبي",
      "الرسول",
      "السيرة",
      "الرسول صلى الله عليه وسلم",
    ],
    cards: [
      {
        id: "card_prophet_1",
        title: "من هو النبي محمد ﷺ؟",
        content:
          "هو محمد بن عبد الله بن عبد المطلب، خاتم الأنبياء والمرسلين، أرسله الله رحمة للعالمين بشيراً ونذيراً ليخرج الناس من الظلمات إلى النور.",
        level: "beginner",
        source_title:
          "الإسلام سؤال وجواب - إجابة رقم 87588 (موجز سيرة النبي ﷺ)",
        source_url: "https://islamqa.info/ar/answers/87588",
      },
      {
        id: "card_prophet_2",
        title: "عصمة النبي ووجوب اتباعه",
        content:
          "النبي ﷺ معصوم فيما يبلغه عن الله تعالى من الدين والأحكام، وطاعته واتباع سنته واجبتان على كل مسلم.",
        level: "intermediate",
        source_title:
          "إسلام ويب - فتوى رقم 21422 (حدود عصمة الأنبياء)",
        source_url: "https://www.islamweb.net/ar/fatwa/21422",
      },
    ],
  },
    {
    id: "concept_salah",
    title: "الصلاة",
    description: "الركن الثاني من أركان الإسلام وعماد الدين والصلة بين العبد وربه.",
    keywords: ["صلاة", "يصلون", "صلوات", "فرض", "خمس مرات", "أوقات الصلاة"],
    cards: [
      {
        id: "card_salah_1",
        title: "مكانة الصلاة في الإسلام",
        content: "الصلاة هي عماد الدين وركنه الثاني بعد الشهادتين، وهي العبادة الوحيدة التي فرضت في السماء ليلة الإسراء والمعراج لعظم شأنها.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 1145 (أهمية الصلاة ومكانتها)",
        source_url: "https://www.islamweb.net/ar/fatwa/1145"
      },
      {
        id: "card_salah_2",
        title: "لماذا نصلي خمس صلوات في اليوم؟",
        content: "فرضت الصلوات الخمس لتكون صلة متجددة ومستمرة بين العبد وربه طوال اليوم.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12305",
        source_url: "https://islamqa.info/ar/answers/12305"
      }
    ]
  },

  {
    id: "concept_taharah",
    title: "الطهارة",
    description: "رفع الحدث وزوال الخبث، وهي شرط لصحة الصلاة والتقرب إلى الله.",
    keywords: ["طهارة", "وضوء", "غسل", "نظافة", "حدث", "خبث"],
    cards: [
      {
        id: "card_taharah_1",
        title: "مفهوم الطهارة وأهميتها",
        content: "الطهارة شرط أساسي لصحة الصلاة، وتتضمن طهارة البدن والثوب والمكان.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 13570",
        source_url: "https://www.islamweb.net/ar/fatwa/13570"
      },
      {
        id: "card_taharah_2",
        title: "صفة الوضوء الشرعي",
        content: "الوضوء هو غسل أعضاء مخصوصة بنية التعبد لله والاستعداد للصلاة.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 11497",
        source_url: "https://islamqa.info/ar/answers/11497"
      }
    ]
  },

  {
    id: "concept_qibla",
    title: "القبلة والكعبة",
    description: "الكعبة المشرفة هي قبلة المسلمين في صلاتهم ومثال لوحدتهم حول العالم.",
    keywords: ["قبلة", "كعبة", "مكة", "اتجاه الصلاة", "بيت الله"],
    cards: [
      {
        id: "card_qibla_1",
        title: "ما هي القبلة ولماذا تتجه الصلاة نحو الكعبة؟",
        content: "القبلة هي الوجهة الموحدة التي يتجه إليها جميع المسلمين عند أداء الصلاة، وهي الكعبة المشرفة بمكة المكرمة.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 5532",
        source_url: "https://www.islamweb.net/ar/fatwa/5532"
      },
      {
        id: "card_qibla_2",
        title: "رمزية الكعبة وحقيقتها",
        content: "الكعبة قبلة للمسلمين وليست معبودة، بل يُعبد الله وحده.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 21720",
        source_url: "https://islamqa.info/ar/answers/21720"
      }
    ]
  },

  {
    id: "concept_sawm",
    title: "الصيام",
    description: "الإمساك عن المفطرات بنية التعبد من طلوع الفجر إلى غروب الشمس.",
    keywords: ["صيام", "رمضان", "صوم", "مفطرات", "فجر", "مغرب"],
    cards: [
      {
        id: "card_sawm_1",
        title: "تعريف الصيام وحكمه",
        content: "الصيام هو التعبد لله بالإمساك عن الطعام والشراب وسائر المفطرات من طلوع الفجر إلى غروب الشمس.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 22908",
        source_url: "https://www.islamweb.net/ar/fatwa/22908"
      }
    ]
  },

  {
    id: "concept_zakat_hajj",
    title: "الزكاة والحج",
    description: "من أركان الإسلام؛ الزكاة للمال والحج للبدن والمال.",
    keywords: ["زكاة", "حج", "صدقة", "بيت الله الحرام", "أنصبة"],
    cards: [
      {
        id: "card_zakat_hajj_1",
        title: "حقيقة الزكاة وأثرها الاجتماعي",
        content: "الزكاة حق واجب في أموال محددة، وتحقق التكافل الاجتماعي وتطهر المال.",
        level: "beginner",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12519",
        source_url: "https://islamqa.info/ar/answers/12519"
      },
      {
        id: "card_zakat_hajj_2",
        title: "فرضية الحج وشروطه",
        content: "الحج هو قصد البيت الحرام لأداء مناسك مخصوصة، وهو فرض مرة واحدة في العمر على المسلم المستطيع.",
        level: "intermediate",
        source_title: "إسلام ويب - فتوى رقم 3550",
        source_url: "https://www.islamweb.net/ar/fatwa/3550"
      }
    ]
  },
    {
    id: "concept_salah",
    title: "الصلاة",
    description: "الركن الثاني من أركان الإسلام وعماد الدين والصلة بين العبد وربه.",
    keywords: ["صلاة", "يصلون", "صلوات", "فرض", "خمس مرات", "أوقات الصلاة"],
    cards: [
      {
        id: "card_salah_1",
        title: "مكانة الصلاة في الإسلام",
        content: "الصلاة هي عماد الدين وركنه الثاني بعد الشهادتين، وهي العبادة الوحيدة التي فرضت في السماء ليلة الإسراء والمعراج لعظم شأنها.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 1145 (أهمية الصلاة ومكانتها)",
        source_url: "https://www.islamweb.net/ar/fatwa/1145"
      },
      {
        id: "card_salah_2",
        title: "لماذا نصلي خمس صلوات في اليوم؟",
        content: "فرضت الصلوات الخمس لتكون صلة متجددة ومستمرة بين العبد وربه طوال اليوم.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12305",
        source_url: "https://islamqa.info/ar/answers/12305"
      }
    ]
  },

  {
    id: "concept_taharah",
    title: "الطهارة",
    description: "رفع الحدث وزوال الخبث، وهي شرط لصحة الصلاة والتقرب إلى الله.",
    keywords: ["طهارة", "وضوء", "غسل", "نظافة", "حدث", "خبث"],
    cards: [
      {
        id: "card_taharah_1",
        title: "مفهوم الطهارة وأهميتها",
        content: "الطهارة شرط أساسي لصحة الصلاة، وتتضمن طهارة البدن والثوب والمكان.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 13570",
        source_url: "https://www.islamweb.net/ar/fatwa/13570"
      },
      {
        id: "card_taharah_2",
        title: "صفة الوضوء الشرعي",
        content: "الوضوء هو غسل أعضاء مخصوصة بنية التعبد لله والاستعداد للصلاة.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 11497",
        source_url: "https://islamqa.info/ar/answers/11497"
      }
    ]
  },

  {
    id: "concept_qibla",
    title: "القبلة والكعبة",
    description: "الكعبة المشرفة هي قبلة المسلمين في صلاتهم ومثال لوحدتهم حول العالم.",
    keywords: ["قبلة", "كعبة", "مكة", "اتجاه الصلاة", "بيت الله"],
    cards: [
      {
        id: "card_qibla_1",
        title: "ما هي القبلة ولماذا تتجه الصلاة نحو الكعبة؟",
        content: "القبلة هي الوجهة الموحدة التي يتجه إليها جميع المسلمين عند أداء الصلاة، وهي الكعبة المشرفة بمكة المكرمة.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 5532",
        source_url: "https://www.islamweb.net/ar/fatwa/5532"
      },
      {
        id: "card_qibla_2",
        title: "رمزية الكعبة وحقيقتها",
        content: "الكعبة قبلة للمسلمين وليست معبودة، بل يُعبد الله وحده.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 21720",
        source_url: "https://islamqa.info/ar/answers/21720"
      }
    ]
  },

  {
    id: "concept_sawm",
    title: "الصيام",
    description: "الإمساك عن المفطرات بنية التعبد من طلوع الفجر إلى غروب الشمس.",
    keywords: ["صيام", "رمضان", "صوم", "مفطرات", "فجر", "مغرب"],
    cards: [
      {
        id: "card_sawm_1",
        title: "تعريف الصيام وحكمه",
        content: "الصيام هو التعبد لله بالإمساك عن الطعام والشراب وسائر المفطرات من طلوع الفجر إلى غروب الشمس.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 22908",
        source_url: "https://www.islamweb.net/ar/fatwa/22908"
      }
    ]
  },

  {
    id: "concept_zakat_hajj",
    title: "الزكاة والحج",
    description: "من أركان الإسلام؛ الزكاة للمال والحج للبدن والمال.",
    keywords: ["زكاة", "حج", "صدقة", "بيت الله الحرام", "أنصبة"],
    cards: [
      {
        id: "card_zakat_hajj_1",
        title: "حقيقة الزكاة وأثرها الاجتماعي",
        content: "الزكاة حق واجب في أموال محددة، وتحقق التكافل الاجتماعي وتطهر المال.",
        level: "beginner",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12519",
        source_url: "https://islamqa.info/ar/answers/12519"
      },
      {
        id: "card_zakat_hajj_2",
        title: "فرضية الحج وشروطه",
        content: "الحج هو قصد البيت الحرام لأداء مناسك مخصوصة، وهو فرض مرة واحدة في العمر على المسلم المستطيع.",
        level: "intermediate",
        source_title: "إسلام ويب - فتوى رقم 3550",
        source_url: "https://www.islamweb.net/ar/fatwa/3550"
      }
    ]
  },
    {
    id: "concept_salah",
    title: "الصلاة",
    description: "الركن الثاني من أركان الإسلام وعماد الدين والصلة بين العبد وربه.",
    keywords: ["صلاة", "يصلون", "صلوات", "فرض", "خمس مرات", "أوقات الصلاة"],
    cards: [
      {
        id: "card_salah_1",
        title: "مكانة الصلاة في الإسلام",
        content: "الصلاة هي عماد الدين وركنه الثاني بعد الشهادتين، وهي العبادة الوحيدة التي فرضت في السماء ليلة الإسراء والمعراج لعظم شأنها.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 1145 (أهمية الصلاة ومكانتها)",
        source_url: "https://www.islamweb.net/ar/fatwa/1145"
      },
      {
        id: "card_salah_2",
        title: "لماذا نصلي خمس صلوات في اليوم؟",
        content: "فرضت الصلوات الخمس لتكون صلة متجددة ومستمرة بين العبد وربه طوال اليوم.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12305",
        source_url: "https://islamqa.info/ar/answers/12305"
      }
    ]
  },

  {
    id: "concept_taharah",
    title: "الطهارة",
    description: "رفع الحدث وزوال الخبث، وهي شرط لصحة الصلاة والتقرب إلى الله.",
    keywords: ["طهارة", "وضوء", "غسل", "نظافة", "حدث", "خبث"],
    cards: [
      {
        id: "card_taharah_1",
        title: "مفهوم الطهارة وأهميتها",
        content: "الطهارة شرط أساسي لصحة الصلاة، وتتضمن طهارة البدن والثوب والمكان.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 13570",
        source_url: "https://www.islamweb.net/ar/fatwa/13570"
      },
      {
        id: "card_taharah_2",
        title: "صفة الوضوء الشرعي",
        content: "الوضوء هو غسل أعضاء مخصوصة بنية التعبد لله والاستعداد للصلاة.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 11497",
        source_url: "https://islamqa.info/ar/answers/11497"
      }
    ]
  },

  {
    id: "concept_qibla",
    title: "القبلة والكعبة",
    description: "الكعبة المشرفة هي قبلة المسلمين في صلاتهم ومثال لوحدتهم حول العالم.",
    keywords: ["قبلة", "كعبة", "مكة", "اتجاه الصلاة", "بيت الله"],
    cards: [
      {
        id: "card_qibla_1",
        title: "ما هي القبلة ولماذا تتجه الصلاة نحو الكعبة؟",
        content: "القبلة هي الوجهة الموحدة التي يتجه إليها جميع المسلمين عند أداء الصلاة، وهي الكعبة المشرفة بمكة المكرمة.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 5532",
        source_url: "https://www.islamweb.net/ar/fatwa/5532"
      },
      {
        id: "card_qibla_2",
        title: "رمزية الكعبة وحقيقتها",
        content: "الكعبة قبلة للمسلمين وليست معبودة، بل يُعبد الله وحده.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 21720",
        source_url: "https://islamqa.info/ar/answers/21720"
      }
    ]
  },

  {
    id: "concept_sawm",
    title: "الصيام",
    description: "الإمساك عن المفطرات بنية التعبد من طلوع الفجر إلى غروب الشمس.",
    keywords: ["صيام", "رمضان", "صوم", "مفطرات", "فجر", "مغرب"],
    cards: [
      {
        id: "card_sawm_1",
        title: "تعريف الصيام وحكمه",
        content: "الصيام هو التعبد لله بالإمساك عن الطعام والشراب وسائر المفطرات من طلوع الفجر إلى غروب الشمس.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 22908",
        source_url: "https://www.islamweb.net/ar/fatwa/22908"
      }
    ]
  },

  {
    id: "concept_zakat_hajj",
    title: "الزكاة والحج",
    description: "من أركان الإسلام؛ الزكاة للمال والحج للبدن والمال.",
    keywords: ["زكاة", "حج", "صدقة", "بيت الله الحرام", "أنصبة"],
    cards: [
      {
        id: "card_zakat_hajj_1",
        title: "حقيقة الزكاة وأثرها الاجتماعي",
        content: "الزكاة حق واجب في أموال محددة، وتحقق التكافل الاجتماعي وتطهر المال.",
        level: "beginner",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12519",
        source_url: "https://islamqa.info/ar/answers/12519"
      },
      {
        id: "card_zakat_hajj_2",
        title: "فرضية الحج وشروطه",
        content: "الحج هو قصد البيت الحرام لأداء مناسك مخصوصة، وهو فرض مرة واحدة في العمر على المسلم المستطيع.",
        level: "intermediate",
        source_title: "إسلام ويب - فتوى رقم 3550",
        source_url: "https://www.islamweb.net/ar/fatwa/3550"
      }
    ]
  },
    {
    id: "concept_salah",
    title: "الصلاة",
    description: "الركن الثاني من أركان الإسلام وعماد الدين والصلة بين العبد وربه.",
    keywords: ["صلاة", "يصلون", "صلوات", "فرض", "خمس مرات", "أوقات الصلاة"],
    cards: [
      {
        id: "card_salah_1",
        title: "مكانة الصلاة في الإسلام",
        content: "الصلاة هي عماد الدين وركنه الثاني بعد الشهادتين، وهي العبادة الوحيدة التي فرضت في السماء ليلة الإسراء والمعراج لعظم شأنها.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 1145 (أهمية الصلاة ومكانتها)",
        source_url: "https://www.islamweb.net/ar/fatwa/1145"
      },
      {
        id: "card_salah_2",
        title: "لماذا نصلي خمس صلوات في اليوم؟",
        content: "فرضت الصلوات الخمس لتكون صلة متجددة ومستمرة بين العبد وربه طوال اليوم.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12305",
        source_url: "https://islamqa.info/ar/answers/12305"
      }
    ]
  },

  {
    id: "concept_taharah",
    title: "الطهارة",
    description: "رفع الحدث وزوال الخبث، وهي شرط لصحة الصلاة والتقرب إلى الله.",
    keywords: ["طهارة", "وضوء", "غسل", "نظافة", "حدث", "خبث"],
    cards: [
      {
        id: "card_taharah_1",
        title: "مفهوم الطهارة وأهميتها",
        content: "الطهارة شرط أساسي لصحة الصلاة، وتتضمن طهارة البدن والثوب والمكان.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 13570",
        source_url: "https://www.islamweb.net/ar/fatwa/13570"
      },
      {
        id: "card_taharah_2",
        title: "صفة الوضوء الشرعي",
        content: "الوضوء هو غسل أعضاء مخصوصة بنية التعبد لله والاستعداد للصلاة.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 11497",
        source_url: "https://islamqa.info/ar/answers/11497"
      }
    ]
  },

  {
    id: "concept_qibla",
    title: "القبلة والكعبة",
    description: "الكعبة المشرفة هي قبلة المسلمين في صلاتهم ومثال لوحدتهم حول العالم.",
    keywords: ["قبلة", "كعبة", "مكة", "اتجاه الصلاة", "بيت الله"],
    cards: [
      {
        id: "card_qibla_1",
        title: "ما هي القبلة ولماذا تتجه الصلاة نحو الكعبة؟",
        content: "القبلة هي الوجهة الموحدة التي يتجه إليها جميع المسلمين عند أداء الصلاة، وهي الكعبة المشرفة بمكة المكرمة.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 5532",
        source_url: "https://www.islamweb.net/ar/fatwa/5532"
      },
      {
        id: "card_qibla_2",
        title: "رمزية الكعبة وحقيقتها",
        content: "الكعبة قبلة للمسلمين وليست معبودة، بل يُعبد الله وحده.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 21720",
        source_url: "https://islamqa.info/ar/answers/21720"
      }
    ]
  },

  {
    id: "concept_sawm",
    title: "الصيام",
    description: "الإمساك عن المفطرات بنية التعبد من طلوع الفجر إلى غروب الشمس.",
    keywords: ["صيام", "رمضان", "صوم", "مفطرات", "فجر", "مغرب"],
    cards: [
      {
        id: "card_sawm_1",
        title: "تعريف الصيام وحكمه",
        content: "الصيام هو التعبد لله بالإمساك عن الطعام والشراب وسائر المفطرات من طلوع الفجر إلى غروب الشمس.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 22908",
        source_url: "https://www.islamweb.net/ar/fatwa/22908"
      }
    ]
  },

  {
    id: "concept_zakat_hajj",
    title: "الزكاة والحج",
    description: "من أركان الإسلام؛ الزكاة للمال والحج للبدن والمال.",
    keywords: ["زكاة", "حج", "صدقة", "بيت الله الحرام", "أنصبة"],
    cards: [
      {
        id: "card_zakat_hajj_1",
        title: "حقيقة الزكاة وأثرها الاجتماعي",
        content: "الزكاة حق واجب في أموال محددة، وتحقق التكافل الاجتماعي وتطهر المال.",
        level: "beginner",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12519",
        source_url: "https://islamqa.info/ar/answers/12519"
      },
      {
        id: "card_zakat_hajj_2",
        title: "فرضية الحج وشروطه",
        content: "الحج هو قصد البيت الحرام لأداء مناسك مخصوصة، وهو فرض مرة واحدة في العمر على المسلم المستطيع.",
        level: "intermediate",
        source_title: "إسلام ويب - فتوى رقم 3550",
        source_url: "https://www.islamweb.net/ar/fatwa/3550"
      }
    ]
  },
  
   {
    id: "concept_salah",
    title: "الصلاة",
    description: "الركن الثاني من أركان الإسلام وعماد الدين والصلة بين العبد وربه.",
    keywords: ["صلاة", "يصلون", "صلوات", "فرض", "خمس مرات", "أوقات الصلاة"],
    cards: [
      {
        id: "card_salah_1",
        title: "مكانة الصلاة في الإسلام",
        content: "الصلاة هي عماد الدين وركنه الثاني بعد الشهادتين، وهي العبادة الوحيدة التي فرضت في السماء ليلة الإسراء والمعراج لعظم شأنها.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 1145 (أهمية الصلاة ومكانتها)",
        source_url: "https://www.islamweb.net/ar/fatwa/1145"
      },
      {
        id: "card_salah_2",
        title: "لماذا نصلي خمس صلوات في اليوم؟",
        content: "فرضت الصلوات الخمس لتكون صلة متجددة ومستمرة بين العبد وربه طوال اليوم.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12305",
        source_url: "https://islamqa.info/ar/answers/12305"
      }
    ]
  },

  {
    id: "concept_taharah",
    title: "الطهارة",
    description: "رفع الحدث وزوال الخبث، وهي شرط لصحة الصلاة والتقرب إلى الله.",
    keywords: ["طهارة", "وضوء", "غسل", "نظافة", "حدث", "خبث"],
    cards: [
      {
        id: "card_taharah_1",
        title: "مفهوم الطهارة وأهميتها",
        content: "الطهارة شرط أساسي لصحة الصلاة، وتتضمن طهارة البدن والثوب والمكان.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 13570",
        source_url: "https://www.islamweb.net/ar/fatwa/13570"
      },
      {
        id: "card_taharah_2",
        title: "صفة الوضوء الشرعي",
        content: "الوضوء هو غسل أعضاء مخصوصة بنية التعبد لله والاستعداد للصلاة.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 11497",
        source_url: "https://islamqa.info/ar/answers/11497"
      }
    ]
  },

  {
    id: "concept_qibla",
    title: "القبلة والكعبة",
    description: "الكعبة المشرفة هي قبلة المسلمين في صلاتهم ومثال لوحدتهم حول العالم.",
    keywords: ["قبلة", "كعبة", "مكة", "اتجاه الصلاة", "بيت الله"],
    cards: [
      {
        id: "card_qibla_1",
        title: "ما هي القبلة ولماذا تتجه الصلاة نحو الكعبة؟",
        content: "القبلة هي الوجهة الموحدة التي يتجه إليها جميع المسلمين عند أداء الصلاة، وهي الكعبة المشرفة بمكة المكرمة.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 5532",
        source_url: "https://www.islamweb.net/ar/fatwa/5532"
      },
      {
        id: "card_qibla_2",
        title: "رمزية الكعبة وحقيقتها",
        content: "الكعبة قبلة للمسلمين وليست معبودة، بل يُعبد الله وحده.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 21720",
        source_url: "https://islamqa.info/ar/answers/21720"
      }
    ]
  },

  {
    id: "concept_sawm",
    title: "الصيام",
    description: "الإمساك عن المفطرات بنية التعبد من طلوع الفجر إلى غروب الشمس.",
    keywords: ["صيام", "رمضان", "صوم", "مفطرات", "فجر", "مغرب"],
    cards: [
      {
        id: "card_sawm_1",
        title: "تعريف الصيام وحكمه",
        content: "الصيام هو التعبد لله بالإمساك عن الطعام والشراب وسائر المفطرات من طلوع الفجر إلى غروب الشمس.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 22908",
        source_url: "https://www.islamweb.net/ar/fatwa/22908"
      }
    ]
  },

  {
    id: "concept_zakat_hajj",
    title: "الزكاة والحج",
    description: "من أركان الإسلام؛ الزكاة للمال والحج للبدن والمال.",
    keywords: ["زكاة", "حج", "صدقة", "بيت الله الحرام", "أنصبة"],
    cards: [
      {
        id: "card_zakat_hajj_1",
        title: "حقيقة الزكاة وأثرها الاجتماعي",
        content: "الزكاة حق واجب في أموال محددة، وتحقق التكافل الاجتماعي وتطهر المال.",
        level: "beginner",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12519",
        source_url: "https://islamqa.info/ar/answers/12519"
      },
      {
        id: "card_zakat_hajj_2",
        title: "فرضية الحج وشروطه",
        content: "الحج هو قصد البيت الحرام لأداء مناسك مخصوصة، وهو فرض مرة واحدة في العمر على المسلم المستطيع.",
        level: "intermediate",
        source_title: "إسلام ويب - فتوى رقم 3550",
        source_url: "https://www.islamweb.net/ar/fatwa/3550"
      }
    ]
  },
    {
    id: "concept_salah",
    title: "الصلاة",
    description: "الركن الثاني من أركان الإسلام وعماد الدين والصلة بين العبد وربه.",
    keywords: ["صلاة", "يصلون", "صلوات", "فرض", "خمس مرات", "أوقات الصلاة"],
    cards: [
      {
        id: "card_salah_1",
        title: "مكانة الصلاة في الإسلام",
        content: "الصلاة هي عماد الدين وركنه الثاني بعد الشهادتين، وهي العبادة الوحيدة التي فرضت في السماء ليلة الإسراء والمعراج لعظم شأنها.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 1145 (أهمية الصلاة ومكانتها)",
        source_url: "https://www.islamweb.net/ar/fatwa/1145"
      },
      {
        id: "card_salah_2",
        title: "لماذا نصلي خمس صلوات في اليوم؟",
        content: "فرضت الصلوات الخمس لتكون صلة متجددة ومستمرة بين العبد وربه طوال اليوم.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12305",
        source_url: "https://islamqa.info/ar/answers/12305"
      }
    ]
  },

  {
    id: "concept_taharah",
    title: "الطهارة",
    description: "رفع الحدث وزوال الخبث، وهي شرط لصحة الصلاة والتقرب إلى الله.",
    keywords: ["طهارة", "وضوء", "غسل", "نظافة", "حدث", "خبث"],
    cards: [
      {
        id: "card_taharah_1",
        title: "مفهوم الطهارة وأهميتها",
        content: "الطهارة شرط أساسي لصحة الصلاة، وتتضمن طهارة البدن والثوب والمكان.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 13570",
        source_url: "https://www.islamweb.net/ar/fatwa/13570"
      },
      {
        id: "card_taharah_2",
        title: "صفة الوضوء الشرعي",
        content: "الوضوء هو غسل أعضاء مخصوصة بنية التعبد لله والاستعداد للصلاة.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 11497",
        source_url: "https://islamqa.info/ar/answers/11497"
      }
    ]
  },

  {
    id: "concept_qibla",
    title: "القبلة والكعبة",
    description: "الكعبة المشرفة هي قبلة المسلمين في صلاتهم ومثال لوحدتهم حول العالم.",
    keywords: ["قبلة", "كعبة", "مكة", "اتجاه الصلاة", "بيت الله"],
    cards: [
      {
        id: "card_qibla_1",
        title: "ما هي القبلة ولماذا تتجه الصلاة نحو الكعبة؟",
        content: "القبلة هي الوجهة الموحدة التي يتجه إليها جميع المسلمين عند أداء الصلاة، وهي الكعبة المشرفة بمكة المكرمة.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 5532",
        source_url: "https://www.islamweb.net/ar/fatwa/5532"
      },
      {
        id: "card_qibla_2",
        title: "رمزية الكعبة وحقيقتها",
        content: "الكعبة قبلة للمسلمين وليست معبودة، بل يُعبد الله وحده.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 21720",
        source_url: "https://islamqa.info/ar/answers/21720"
      }
    ]
  },

  {
    id: "concept_sawm",
    title: "الصيام",
    description: "الإمساك عن المفطرات بنية التعبد من طلوع الفجر إلى غروب الشمس.",
    keywords: ["صيام", "رمضان", "صوم", "مفطرات", "فجر", "مغرب"],
    cards: [
      {
        id: "card_sawm_1",
        title: "تعريف الصيام وحكمه",
        content: "الصيام هو التعبد لله بالإمساك عن الطعام والشراب وسائر المفطرات من طلوع الفجر إلى غروب الشمس.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 22908",
        source_url: "https://www.islamweb.net/ar/fatwa/22908"
      }
    ]
  },

  {
    id: "concept_zakat_hajj",
    title: "الزكاة والحج",
    description: "من أركان الإسلام؛ الزكاة للمال والحج للبدن والمال.",
    keywords: ["زكاة", "حج", "صدقة", "بيت الله الحرام", "أنصبة"],
    cards: [
      {
        id: "card_zakat_hajj_1",
        title: "حقيقة الزكاة وأثرها الاجتماعي",
        content: "الزكاة حق واجب في أموال محددة، وتحقق التكافل الاجتماعي وتطهر المال.",
        level: "beginner",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12519",
        source_url: "https://islamqa.info/ar/answers/12519"
      },
      {
        id: "card_zakat_hajj_2",
        title: "فرضية الحج وشروطه",
        content: "الحج هو قصد البيت الحرام لأداء مناسك مخصوصة، وهو فرض مرة واحدة في العمر على المسلم المستطيع.",
        level: "intermediate",
        source_title: "إسلام ويب - فتوى رقم 3550",
        source_url: "https://www.islamweb.net/ar/fatwa/3550"
      }
    ]
  },
  {
    id: "concept_salah",
    title: "الصلاة",
    description: "الركن الثاني من أركان الإسلام وعماد الدين والصلة بين العبد وربه.",
    keywords: ["صلاة", "يصلون", "صلوات", "فرض", "خمس مرات", "أوقات الصلاة"],
    cards: [
      {
        id: "card_salah_1",
        title: "مكانة الصلاة في الإسلام",
        content: "الصلاة هي عماد الدين وركنه الثاني بعد الشهادتين، وهي العبادة الوحيدة التي فرضت في السماء ليلة الإسراء والمعراج لعظم شأنها.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 1145 (أهمية الصلاة ومكانتها)",
        source_url: "https://www.islamweb.net/ar/fatwa/1145"
      },
      {
        id: "card_salah_2",
        title: "لماذا نصلي خمس صلوات في اليوم؟",
        content: "فرضت الصلوات الخمس لتكون صلة متجددة ومستمرة بين العبد وربه طوال اليوم.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12305",
        source_url: "https://islamqa.info/ar/answers/12305"
      }
    ]
  },

  {
    id: "concept_taharah",
    title: "الطهارة",
    description: "رفع الحدث وزوال الخبث، وهي شرط لصحة الصلاة والتقرب إلى الله.",
    keywords: ["طهارة", "وضوء", "غسل", "نظافة", "حدث", "خبث"],
    cards: [
      {
        id: "card_taharah_1",
        title: "مفهوم الطهارة وأهميتها",
        content: "الطهارة شرط أساسي لصحة الصلاة، وتتضمن طهارة البدن والثوب والمكان.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 13570",
        source_url: "https://www.islamweb.net/ar/fatwa/13570"
      },
      {
        id: "card_taharah_2",
        title: "صفة الوضوء الشرعي",
        content: "الوضوء هو غسل أعضاء مخصوصة بنية التعبد لله والاستعداد للصلاة.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 11497",
        source_url: "https://islamqa.info/ar/answers/11497"
      }
    ]
  },

  {
    id: "concept_qibla",
    title: "القبلة والكعبة",
    description: "الكعبة المشرفة هي قبلة المسلمين في صلاتهم ومثال لوحدتهم حول العالم.",
    keywords: ["قبلة", "كعبة", "مكة", "اتجاه الصلاة", "بيت الله"],
    cards: [
      {
        id: "card_qibla_1",
        title: "ما هي القبلة ولماذا تتجه الصلاة نحو الكعبة؟",
        content: "القبلة هي الوجهة الموحدة التي يتجه إليها جميع المسلمين عند أداء الصلاة، وهي الكعبة المشرفة بمكة المكرمة.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 5532",
        source_url: "https://www.islamweb.net/ar/fatwa/5532"
      },
      {
        id: "card_qibla_2",
        title: "رمزية الكعبة وحقيقتها",
        content: "الكعبة قبلة للمسلمين وليست معبودة، بل يُعبد الله وحده.",
        level: "intermediate",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 21720",
        source_url: "https://islamqa.info/ar/answers/21720"
      }
    ]
  },

  {
    id: "concept_sawm",
    title: "الصيام",
    description: "الإمساك عن المفطرات بنية التعبد من طلوع الفجر إلى غروب الشمس.",
    keywords: ["صيام", "رمضان", "صوم", "مفطرات", "فجر", "مغرب"],
    cards: [
      {
        id: "card_sawm_1",
        title: "تعريف الصيام وحكمه",
        content: "الصيام هو التعبد لله بالإمساك عن الطعام والشراب وسائر المفطرات من طلوع الفجر إلى غروب الشمس.",
        level: "beginner",
        source_title: "إسلام ويب - فتوى رقم 22908",
        source_url: "https://www.islamweb.net/ar/fatwa/22908"
      }
    ]
  },

  {
    id: "concept_zakat_hajj",
    title: "الزكاة والحج",
    description: "من أركان الإسلام؛ الزكاة للمال والحج للبدن والمال.",
    keywords: ["زكاة", "حج", "صدقة", "بيت الله الحرام", "أنصبة"],
    cards: [
      {
        id: "card_zakat_hajj_1",
        title: "حقيقة الزكاة وأثرها الاجتماعي",
        content: "الزكاة حق واجب في أموال محددة، وتحقق التكافل الاجتماعي وتطهر المال.",
        level: "beginner",
        source_title: "الإسلام سؤال وجواب - إجابة رقم 12519",
        source_url: "https://islamqa.info/ar/answers/12519"
      },
      {
        id: "card_zakat_hajj_2",
        title: "فرضية الحج وشروطه",
        content: "الحج هو قصد البيت الحرام لأداء مناسك مخصوصة، وهو فرض مرة واحدة في العمر على المسلم المستطيع.",
        level: "intermediate",
        source_title: "إسلام ويب - فتوى رقم 3550",
        source_url: "https://www.islamweb.net/ar/fatwa/3550"
      }
    ]
  },
  

]