import { t } from "@/i18n/locale";
import { portfolioColors } from "@/components/primitives";

// Source: June 2018 planning synthesis, persona deck, future journey and roadmap.
// These describe research and proposed services, rather than launch outcomes.
export const serMindsets = [
  {
    id: "enthusiast",
    title: t("Enthusiast"),
    motivation: t("Internal"),
    direction: t("Defined"),
    summary: t("Learning is a goal in itself."),
    description: t(
      "Knows what they want to study and values learning, personal growth and a deeper understanding of their subject.",
    ),
    implication: t(
      "Make room for practical learning, academic depth and support that helps them develop their interests.",
    ),
    color: portfolioColors.aloe,
  },
  {
    id: "practical",
    title: t("Practical"),
    motivation: t("External"),
    direction: t("Defined"),
    summary: t("A degree should unlock opportunities."),
    description: t(
      "Has a clear objective outside the course itself: employment, promotion, recognition or a stronger professional profile.",
    ),
    implication: t(
      "Connect learning to career opportunities and make administrative tasks efficient, so the value of studying stays visible.",
    ),
    color: portfolioColors.breeze,
  },
  {
    id: "instinctive",
    title: t("Instinctive"),
    motivation: t("Internal"),
    direction: t("Exploratory"),
    summary: t("Interested, still finding a direction."),
    description: t(
      "Enters university with interest but a limited picture of what a degree involves. A mismatch between expectations and the course can weaken that connection.",
    ),
    implication: t(
      "Help students explore interests, understand courses and make informed decisions about their next steps.",
    ),
    color: portfolioColors.cloudberry,
  },
  {
    id: "apathetic",
    title: t("Apathetic"),
    motivation: t("External"),
    direction: t("Exploratory"),
    summary: t("Following an expected next step."),
    description: t(
      "May enroll because of family expectations or the sense that university naturally follows school, without a clear personal reason to study.",
    ),
    implication: t(
      "Create opportunities for belonging and connection, alongside straightforward support for everyday university life.",
    ),
    color: portfolioColors.raspberry,
  },
] as const;

export const serStrategy = [
  {
    id: "basics",
    number: "01",
    title: t("Make the basics reliable"),
    summary: t("Maintain tranquility."),
    need: t(
      "Administrative problems compete with studying, working and managing life. Students need understandable processes and someone to help when a case becomes critical.",
    ),
    response: t(
      "Consolidate everyday tasks in the academic portal and app, clarify support requests, and combine digital assistance with human ownership of complex cases.",
    ),
    services: [
      t("Academic Portal 2.0"),
      t("App Ser 2.0"),
      "Sofia / RoboSer",
      t("Seu Problema É Meu"),
    ],
    color: portfolioColors.breeze,
  },
  {
    id: "learning",
    number: "02",
    title: t("Strengthen learning"),
    summary: t("Enhance development."),
    need: t(
      "Students expect relevant teaching, coherent assessments and learning that fits their circumstances. Teachers need tools and feedback that help them support that progress.",
    ),
    response: t(
      "Use learning diagnostics, complementary courses and more useful feedback to connect assessment with development.",
    ),
    services: [
      t("Raio-X do Ensino"),
      t("Cursos Livres 2.0"),
      t("Prova Colegiada 3.0: Mais Aprendizado"),
      t("Relatório de Turmas"),
    ],
    color: portfolioColors.aloe,
  },
  {
    id: "direction",
    number: "03",
    title: t("Help students find a path"),
    summary: t("Guide their direction."),
    need: t(
      "Choosing a course and finding professional opportunities require different support depending on a student's interests, goals and experience.",
    ),
    response: t(
      "Connect self-knowledge and course exploration with skills development, professional profiles and internship opportunities.",
    ),
    services: [
      t("Quem Sou Eu?"),
      t("Prévia EaD"),
      t("Portal da Trabalhabilidade 2.0"),
    ],
    color: portfolioColors.cloudberry,
  },
  {
    id: "community",
    number: "04",
    title: t("Build a lasting community"),
    summary: t("Connect students, faculty and alumni."),
    need: t(
      "Belonging grows through relationships and opportunities to contribute. The connection with the institution can continue beyond graduation.",
    ),
    response: t(
      "Support campus participation, collaboration and recognition, with opportunities for graduates to return and keep learning.",
    ),
    services: [
      t("IntegraSer"),
      t("Ser Comunidade"),
      t("Orgulho Ser"),
      t("Todos de Volta"),
    ],
    color: portfolioColors.raspberry,
  },
] as const;

export const serJourney = [
  {
    id: "explore",
    title: t("Explore a direction"),
    summary: t("Before choosing a course"),
    need: t(
      "A prospective student is unsure what to study and feels pressure to make a choice.",
    ),
    response: t(
      "Campus experiences and an interests-and-strengths diagnosis help make the possibilities more tangible.",
    ),
    services: [t("Mostra Campus 2.0"), t("Quem Sou Eu?")],
    source: "Future student scenario · Journey deck, p. 3",
  },
  {
    id: "try",
    title: t("Try before committing"),
    summary: t("Make an informed choice"),
    need: t(
      "A course name alone does not show what studying will actually feel like.",
    ),
    response: t(
      "A sample distance-learning subject lets a prospective student experience learning before choosing a course and enrolling.",
    ),
    services: [t("Prévia EaD"), t("+EaD")],
    source: "Future student scenario · Journey deck, p. 3",
  },
  {
    id: "belong",
    title: t("Find a place to belong"),
    summary: t("Arrive and get connected"),
    need: t(
      "Joining a new campus means learning its tools, spaces and communities.",
    ),
    response: t(
      "Orientation and student organizations help newcomers connect with people and opportunities across the institution.",
    ),
    services: [t("IntegraSer"), t("Ser Comunidade"), t("Ser Sem Fronteiras")],
    source: "Future student scenario · Journey deck, p. 4",
  },
  {
    id: "study",
    title: t("Learn with support"),
    summary: t("Throughout the course"),
    need: t(
      "Missed classes, unfamiliar material and uneven progress can make it difficult to keep up.",
    ),
    response: t(
      "The portal, digital assistant, peer forums and learning diagnostics connect students with useful materials and complementary learning.",
    ),
    services: [
      t("Academic Portal 2.0"),
      "Sofia / RoboSer",
      t("Fórum Ser"),
      t("Raio-X do Ensino"),
    ],
    source: "Future student scenarios · Journey deck, pp. 1–2",
  },
  {
    id: "resolve",
    title: t("Resolve everyday pressure"),
    summary: t("Support when it matters"),
    need: t(
      "Financial and personal pressure can interrupt study. A critical support case needs more than another ticket.",
    ),
    response: t(
      "Clear status updates and a human case owner help resolve recurring problems and connect students with the next academic step.",
    ),
    services: [t("Seu Problema É Meu"), t("Academic Portal 2.0")],
    source: "Future student scenario · Journey deck, p. 1",
  },
  {
    id: "career",
    title: t("Build professional direction"),
    summary: t("Connect learning and work"),
    need: t(
      "Students need to understand their capabilities and turn learning into professional opportunities.",
    ),
    response: t(
      "A professional profile links diagnosed strengths, complementary learning and relevant internship opportunities.",
    ),
    services: [
      t("Portal da Trabalhabilidade 2.0"),
      t("Prova Colegiada 3.0: Mais Aprendizado"),
      t("DNA da Trabalhabilidade"),
    ],
    source: "Future student scenarios · Journey deck, pp. 2–3",
  },
  {
    id: "return",
    title: t("Stay connected"),
    summary: t("Life after graduation"),
    need: t(
      "Graduation changes the relationship with the university, but does not end the need to learn or contribute.",
    ),
    response: t(
      "Continued learning, recognition and opportunities to return as a speaker keep graduates involved in the community.",
    ),
    services: [t("Cursos Livres 2.0"), t("Orgulho Ser"), t("Todos de Volta")],
    source: "Future student scenario · Journey deck, p. 4",
  },
] as const;

export const serInsights = [
  {
    number: "01",
    title: t("The relationship felt transactional."),
    finding:
      "Students wanted engaging classes, relevant content, coherent assessment and fast administrative resolution. Standardized services often overshadowed that value.",
    decision:
      "Organize the experience around student tasks and progress, making everyday interactions easier to understand.",
  },
  {
    number: "02",
    title: t("Progress meant different things."),
    finding:
      "Some students wanted academic depth; others wanted a promotion or a first job. Many were still discovering why and what to study.",
    decision:
      "Connect efficient self-service with guidance, practical learning and visible professional opportunities.",
  },
  {
    number: "03",
    title: t("Teachers needed support too."),
    finding:
      "Cumbersome workflows, unclear tool benefits and limited peer exchange restricted the experience teachers could offer.",
    decision:
      "Include teaching workflows, feedback and faculty connections in the service vision.",
  },
] as const;

export const serPriorities = [
  {
    title: t("Value for students"),
    text: t(
      "How critical is the need, and how meaningfully does the initiative improve or differentiate the experience?",
    ),
  },
  {
    title: t("Value for the business"),
    text: t("How does the initiative contribute to revenue and costs?"),
  },
  {
    title: t("Complexity of change"),
    text: t(
      "What effort, time and resources are needed across technology, operations and the business model?",
    ),
  },
] as const;
