import { portfolioColors } from "@/components/primitives";

// Source: June 2018 planning synthesis, persona deck, future journey and roadmap.
// These describe research and proposed services, rather than launch outcomes.
export const serMindsets = [
  {
    id: "enthusiast",
    title: "Enthusiast",
    motivation: "Internal",
    direction: "Defined",
    summary: "Learning is a goal in itself.",
    description:
      "Knows what they want to study and values learning, personal growth and a deeper understanding of their subject.",
    implication:
      "Make room for practical learning, academic depth and support that helps them develop their interests.",
    color: portfolioColors.aloe,
  },
  {
    id: "practical",
    title: "Practical",
    motivation: "External",
    direction: "Defined",
    summary: "A degree should unlock opportunities.",
    description:
      "Has a clear objective outside the course itself: employment, promotion, recognition or a stronger professional profile.",
    implication:
      "Connect learning to career opportunities and make administrative tasks efficient, so the value of studying stays visible.",
    color: portfolioColors.breeze,
  },
  {
    id: "instinctive",
    title: "Instinctive",
    motivation: "Internal",
    direction: "Exploratory",
    summary: "Interested, still finding a direction.",
    description:
      "Enters university with interest but a limited picture of what a degree involves. A mismatch between expectations and the course can weaken that connection.",
    implication:
      "Help students explore interests, understand courses and make informed decisions about their next steps.",
    color: portfolioColors.cloudberry,
  },
  {
    id: "apathetic",
    title: "Apathetic",
    motivation: "External",
    direction: "Exploratory",
    summary: "Following an expected next step.",
    description:
      "May enroll because of family expectations or the sense that university naturally follows school, without a clear personal reason to study.",
    implication:
      "Create opportunities for belonging and connection, alongside straightforward support for everyday university life.",
    color: portfolioColors.raspberry,
  },
] as const;

export const serStrategy = [
  {
    id: "basics",
    number: "01",
    title: "Make the basics reliable",
    summary: "Maintain tranquility.",
    need: "Administrative problems compete with studying, working and managing life. Students need understandable processes and someone to help when a case becomes critical.",
    response:
      "Consolidate everyday tasks in the academic portal and app, clarify support requests, and combine digital assistance with human ownership of complex cases.",
    services: [
      "Academic Portal 2.0",
      "App Ser 2.0",
      "Sofia / RoboSer",
      "Seu Problema É Meu",
    ],
    color: portfolioColors.breeze,
  },
  {
    id: "learning",
    number: "02",
    title: "Strengthen learning",
    summary: "Enhance development.",
    need: "Students expect relevant teaching, coherent assessments and learning that fits their circumstances. Teachers need tools and feedback that help them support that progress.",
    response:
      "Use learning diagnostics, complementary courses and more useful feedback to connect assessment with development.",
    services: [
      "Raio-X do Ensino",
      "Cursos Livres 2.0",
      "Prova Colegiada 3.0: Mais Aprendizado",
      "Relatório de Turmas",
    ],
    color: portfolioColors.aloe,
  },
  {
    id: "direction",
    number: "03",
    title: "Help students find a path",
    summary: "Guide their direction.",
    need: "Choosing a course and finding professional opportunities require different support depending on a student's interests, goals and experience.",
    response:
      "Connect self-knowledge and course exploration with skills development, professional profiles and internship opportunities.",
    services: ["Quem Sou Eu?", "Prévia EaD", "Portal da Trabalhabilidade 2.0"],
    color: portfolioColors.cloudberry,
  },
  {
    id: "community",
    number: "04",
    title: "Build a lasting community",
    summary: "Connect students, faculty and alumni.",
    need: "Belonging grows through relationships and opportunities to contribute. The connection with the institution can continue beyond graduation.",
    response:
      "Support campus participation, collaboration and recognition, with opportunities for graduates to return and keep learning.",
    services: ["IntegraSer", "Ser Comunidade", "Orgulho Ser", "Todos de Volta"],
    color: portfolioColors.raspberry,
  },
] as const;

export const serJourney = [
  {
    id: "explore",
    title: "Explore a direction",
    summary: "Before choosing a course",
    need: "A prospective student is unsure what to study and feels pressure to make a choice.",
    response:
      "Campus experiences and an interests-and-strengths diagnosis help make the possibilities more tangible.",
    services: ["Mostra Campus 2.0", "Quem Sou Eu?"],
    source: "Future student scenario · Journey deck, p. 3",
  },
  {
    id: "try",
    title: "Try before committing",
    summary: "Make an informed choice",
    need: "A course name alone does not show what studying will actually feel like.",
    response:
      "A sample distance-learning subject lets a prospective student experience learning before choosing a course and enrolling.",
    services: ["Prévia EaD", "+EaD"],
    source: "Future student scenario · Journey deck, p. 3",
  },
  {
    id: "belong",
    title: "Find a place to belong",
    summary: "Arrive and get connected",
    need: "Joining a new campus means learning its tools, spaces and communities.",
    response:
      "Orientation and student organizations help newcomers connect with people and opportunities across the institution.",
    services: ["IntegraSer", "Ser Comunidade", "Ser Sem Fronteiras"],
    source: "Future student scenario · Journey deck, p. 4",
  },
  {
    id: "study",
    title: "Learn with support",
    summary: "Throughout the course",
    need: "Missed classes, unfamiliar material and uneven progress can make it difficult to keep up.",
    response:
      "The portal, digital assistant, peer forums and learning diagnostics connect students with useful materials and complementary learning.",
    services: [
      "Academic Portal 2.0",
      "Sofia / RoboSer",
      "Fórum Ser",
      "Raio-X do Ensino",
    ],
    source: "Future student scenarios · Journey deck, pp. 1–2",
  },
  {
    id: "resolve",
    title: "Resolve everyday pressure",
    summary: "Support when it matters",
    need: "Financial and personal pressure can interrupt study. A critical support case needs more than another ticket.",
    response:
      "Clear status updates and a human case owner help resolve recurring problems and connect students with the next academic step.",
    services: ["Seu Problema É Meu", "Academic Portal 2.0"],
    source: "Future student scenario · Journey deck, p. 1",
  },
  {
    id: "career",
    title: "Build professional direction",
    summary: "Connect learning and work",
    need: "Students need to understand their capabilities and turn learning into professional opportunities.",
    response:
      "A professional profile links diagnosed strengths, complementary learning and relevant internship opportunities.",
    services: [
      "Portal da Trabalhabilidade 2.0",
      "Prova Colegiada 3.0: Mais Aprendizado",
      "DNA da Trabalhabilidade",
    ],
    source: "Future student scenarios · Journey deck, pp. 2–3",
  },
  {
    id: "return",
    title: "Stay connected",
    summary: "Life after graduation",
    need: "Graduation changes the relationship with the university, but does not end the need to learn or contribute.",
    response:
      "Continued learning, recognition and opportunities to return as a speaker keep graduates involved in the community.",
    services: ["Cursos Livres 2.0", "Orgulho Ser", "Todos de Volta"],
    source: "Future student scenario · Journey deck, p. 4",
  },
] as const;

export const serInsights = [
  {
    number: "01",
    title: "The relationship felt transactional.",
    finding:
      "Students wanted engaging classes, relevant content, coherent assessment and fast administrative resolution. Standardized services often overshadowed that value.",
    decision:
      "Organize the experience around student tasks and progress, making everyday interactions easier to understand.",
  },
  {
    number: "02",
    title: "Progress meant different things.",
    finding:
      "Some students wanted academic depth; others wanted a promotion or a first job. Many were still discovering why and what to study.",
    decision:
      "Connect efficient self-service with guidance, practical learning and visible professional opportunities.",
  },
  {
    number: "03",
    title: "Teachers needed support too.",
    finding:
      "Cumbersome workflows, unclear tool benefits and limited peer exchange restricted the experience teachers could offer.",
    decision:
      "Include teaching workflows, feedback and faculty connections in the service vision.",
  },
] as const;

export const serPriorities = [
  {
    title: "Value for students",
    text: "How critical is the need, and how meaningfully does the initiative improve or differentiate the experience?",
  },
  {
    title: "Value for the business",
    text: "How does the initiative contribute to revenue and costs?",
  },
  {
    title: "Complexity of change",
    text: "What effort, time and resources are needed across technology, operations and the business model?",
  },
] as const;
