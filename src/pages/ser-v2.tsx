import type { CSSProperties, KeyboardEvent, ReactNode } from "react";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import serCoverImage from "../../assets/img/serdigital_imgs/ser_cover.jpg";
import serResultsImage from "../../assets/img/serdigital_imgs/ser-resultados.png";

import { t } from "@/i18n/locale";
import { portfolioColors } from "@/components/primitives";
import {
  SerMindsetExplorer,
  SerStrategyExplorer,
} from "@/components/ser-explorers";
import { assetUrl, routeUrl } from "@/config/site";
import {
  serInsights,
  serJourney,
  serMindsets,
  serPriorities,
  serStrategy,
} from "@/config/ser-case-study";
import DefaultLayout from "@/layouts/default";

import "@/styles/ser-v2.css";

const chapters = [
  { id: "project", label: t("The project") },
  { id: "role", label: t("My role") },
  { id: "results", label: t("Results") },
  { id: "research", label: t("Research") },
  { id: "mindsets", label: t("Student mindsets") },
  { id: "strategy", label: t("Experience strategy") },
  { id: "journey", label: t("Future journeys") },
  { id: "portal", label: t("The portal") },
  { id: "roadmap", label: t("The roadmap") },
];

const paletteStyles = Object.fromEntries(
  Object.entries(portfolioColors).map(([name, color]) => [
    `--portfolio-${name}`,
    color,
  ]),
) as CSSProperties;

export default function SerV2Page() {
  const [activeChapter, setActiveChapter] = useState("project");

  useEffect(() => {
    const previousTitle = document.title;

    document.title = t(
      "Ser Digital — Research & Experience Strategy | Leif Magalhães",
    );
    let observer: IntersectionObserver;
    const observe = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.find((entry) => entry.isIntersecting);

          if (visible) setActiveChapter(visible.target.id);
        },
        {
          rootMargin: t("-{0}px 0px -{1}px", [
            Math.round(window.innerHeight * 0.2),
            Math.round(window.innerHeight * 0.6),
          ]),
          threshold: 0,
        },
      );
      chapters.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section) observer.observe(section);
      });
    };

    observe();
    window.addEventListener("resize", observe);

    return () => {
      document.title = previousTitle;
      observer.disconnect();
      window.removeEventListener("resize", observe);
    };
  }, []);

  return (
    <DefaultLayout>
      <article className="ser-case" style={paletteStyles}>
        <div className="ser-case__layout">
          <nav aria-label={t("Case study chapters")} className="ser-case__nav">
            <p className="ser-case__nav-title">{t("Contents")}</p>
            <div className="ser-case__nav-items">
              <div className="ser-case__nav-group">
                <p className="ser-case__nav-label">{t("Overview")}</p>
                {chapters.slice(0, 3).map((chapter) => (
                  <a
                    key={chapter.id}
                    aria-current={
                      activeChapter === chapter.id ? "location" : undefined
                    }
                    href={`#${chapter.id}`}
                  >
                    {chapter.label}
                  </a>
                ))}
              </div>
              <hr className="ser-case__nav-divider" />
              <div className="ser-case__nav-group">
                <p className="ser-case__nav-label">{t("In depth")}</p>
                {chapters.slice(3).map((chapter) => (
                  <a
                    key={chapter.id}
                    aria-current={
                      activeChapter === chapter.id ? "location" : undefined
                    }
                    href={`#${chapter.id}`}
                  >
                    {chapter.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="ser-case__content">
            <div className="ser-case__back">
              <a href={routeUrl("/#projects")}>{t("← All projects")}</a>
            </div>
            <header className="ser-case__hero" id="project">
              <div className="ser-case__hero-copy">
                <p className="ser-case__eyebrow">
                  {t("Ser Educacional / Ser Digital · 2018")}
                </p>
                <h1>
                  {t("More than")}
                  <br />
                  {t("a degree.")}
                </h1>
                <p className="ser-case__lead">
                  {t(
                    "Connecting the university experience around the people living it.",
                  )}
                </p>
                <p>
                  {t(
                    "Ser Educacional wanted to understand what weakened students’ experience and contributed to dropout. We explored how academic, administrative, professional and social services could support a more coherent relationship with the university.",
                  )}
                </p>
                <div className="ser-case__hero-meta">
                  <span>{t("Research leadership")}</span>
                  <span>{t("Service design")}</span>
                  <span>{t("Experience strategy")}</span>
                </div>
              </div>
              <figure className="ser-case__cover">
                <img
                  alt={t(
                    "A person walking through a city, illustrating life beyond the classroom",
                  )}
                  fetchPriority="high"
                  src={serCoverImage}
                />
                <figcaption>
                  {t("Photo by Vinicius Amano on Unsplash.")}
                </figcaption>
              </figure>
            </header>

            <section className="ser-case__section" id="role">
              <Heading
                eyebrow={t("01 / My role")}
                title={t("Lead the research. Help shape the experience.")}
              />
              <div className="ser-case__role">
                <div className="ser-case__reading">
                  <h3>{t("Research leadership & service design")}</h3>
                  <p>
                    {t(
                      "I led the research team through planning, execution and synthesis, and contributed to translating the findings into a vision for the future student experience.",
                    )}
                  </p>
                </div>
                <div>
                  <p className="ser-case__label">{t("I led")}</p>
                  <ul>
                    <li>{t("Research planning and study design")}</li>
                    <li>{t("Research team coordination and execution")}</li>
                    <li>{t("Synthesis and student segmentation")}</li>
                  </ul>
                </div>
                <div>
                  <p className="ser-case__label">{t("I contributed to")}</p>
                  <ul>
                    <li>
                      {t("Experience strategy and opportunity definition")}
                    </li>
                    <li>{t("Future journeys and the service ecosystem")}</li>
                    <li>{t("Initiative prioritization and the roadmap")}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="ser-case__results" id="results">
              <Heading
                eyebrow={t("02 / Results")}
                title={t("One vision. A connected ecosystem of services.")}
              />
              <div className="ser-case__results-grid">
                <div>
                  <p>
                    {t(
                      "The project turned research into a shared direction for the future student experience, connecting the basics of university life with learning, career development and community.",
                    )}
                  </p>
                  <ul className="ser-case__deliverables">
                    <li>
                      <span>01</span>
                      {t(
                        "Student mindsets and an experience strategy grounded in research",
                      )}
                    </li>
                    <li>
                      <span>02</span>
                      {t(
                        "Future journeys linking needs to concrete service opportunities",
                      )}
                    </li>
                    <li>
                      <span>03</span>
                      {t(
                        "A proposed portal structure and a roadmap for transformation",
                      )}
                    </li>
                  </ul>
                </div>
                <div className="ser-case__result-figures">
                  <div>
                    <strong>{t("R$1.25bn")}</strong>
                    <span>{t("net revenue in 2020")}</span>
                  </div>
                  <div>
                    <strong>{t("83.8k")}</strong>
                    <span>
                      {t("digital students in Q1 2021, up from 12k in 2017")}
                    </span>
                  </div>
                  <div>
                    <strong>{t("228.1k")}</strong>
                    <span>
                      {t(
                        "total students in Q1 2021, including 144.3k in hybrid / in-person education",
                      )}
                    </span>
                  </div>
                  <p className="ser-case__source-note">
                    {t(
                      "In 2020, adjusted EBITDA was R$296.7 million and adjusted profit was R$120.1 million. Revenue remained close to 2019 levels (R$1,276 million), while profitability declined.",
                    )}
                  </p>
                  <p className="ser-case__source-note">
                    {t(
                      "Source: Ser Educacional results summary, 2017–Q1 2021 (ser-resultados-2.png). These company-wide figures provide context for the years following the project and do not establish its individual contribution.",
                    )}
                  </p>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="ser-deep-dive"
              className="ser-case__chapter-break"
            >
              <p className="ser-case__eyebrow">
                {t("In depth / The full story")}
              </p>
              <h2 id="ser-deep-dive">{t("Start with the relationship.")}</h2>
              <p>
                {t(
                  "What people expected from university, what got in the way, and how those insights shaped the service vision.",
                )}
              </p>
            </section>

            <section className="ser-case__section" id="research">
              <Heading
                eyebrow={t("03 / Research")}
                title={t("A student experience has many perspectives.")}
              />
              <div className="ser-case__research-facts">
                <div>
                  <strong>191+</strong>
                  <span>
                    {t("interviewees reported in the project synthesis")}
                  </span>
                </div>
                <div>
                  <strong>7</strong>
                  <span>{t("selected institutions across five cities")}</span>
                </div>
              </div>
              <div className="ser-case__reading ser-case__research-copy">
                <p>
                  {t(
                    "The research brought together students, distance-learning students, prospective students, alumni, teachers, course coordinators, managers and directors.",
                  )}
                </p>
                <p>
                  {t(
                    "Looking across those perspectives showed how learning, everyday administration and working-life ambitions shaped the relationship with the institution.",
                  )}
                </p>
                <p className="ser-case__source-note">
                  {t(
                    "Source: Ser Educacional, Phase 1 planning presentation, pp. 15–16. The source reports 191+ interviewees; this is the study’s reported scope.",
                  )}
                </p>
              </div>
              <div className="ser-case__statement">
                <p className="ser-case__eyebrow">
                  {t("The shift in perspective")}
                </p>
                <p>
                  {t("The relationship felt transactional.")}
                  <br />
                  {t("They were also looking for ")}
                  <em>{t("a way forward.")}</em>
                </p>
              </div>
              <div className="ser-case__insights">
                {serInsights.map((insight) => (
                  <div key={insight.number} className="ser-case__insight">
                    <span className="ser-case__insight-number">
                      {insight.number}
                    </span>
                    <div>
                      <h3>{insight.title}</h3>
                      <p>{insight.finding}</p>
                    </div>
                    <div>
                      <p className="ser-case__label">{t("Design direction")}</p>
                      <p>{insight.decision}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="ser-case__source-note">
                {t("Research synthesis · Phase 1, pp. 19–38.")}
              </p>
            </section>

            <section
              className="ser-case__section ser-case__section--ruled"
              id="mindsets"
            >
              <Heading
                eyebrow={t("04 / Student mindsets")}
                title={t("Different motivations. Different kinds of support.")}
              >
                <p>
                  {t(
                    "The model connected two dimensions: what motivates a student and how defined their objective is. These are changing relationships with education, rather than fixed student identities.",
                  )}
                </p>
              </Heading>
              <SerMindsetExplorer items={serMindsets} />
              <p className="ser-case__source-note">
                {t(
                  "Adapted from the project’s mindset model · Phase 1, pp. 19–23; persona deck, pp. 1–8.",
                )}
              </p>
              <Artifact
                alt={t(
                  "Original student mindset map, with internal and external motivation and defined and exploratory objectives",
                )}
                file="personas.png"
                title={t("Explore the original persona map")}
              />
            </section>

            <section className="ser-case__section" id="strategy">
              <Heading
                eyebrow={t("05 / Experience strategy")}
                title={t("Build value from a reliable foundation.")}
              >
                <p>
                  {t(
                    "Four complementary pillars connected everyday needs to a broader ambition: helping students prepare for evolving opportunities in their working lives.",
                  )}
                </p>
              </Heading>
              <SerStrategyExplorer items={serStrategy} />
              <p className="ser-case__source-note">
                {t(
                  "Four pillars from the experience strategy. The services shown are project proposals.",
                )}
              </p>
            </section>

            <section
              className="ser-case__section ser-case__section--ruled"
              id="journey"
            >
              <Heading
                eyebrow={t("06 / Future journeys")}
                title={t("Support that follows the student.")}
              >
                <p>
                  {t(
                    "The future journey deck explored four student scenarios and one teacher scenario. These recurring moments bring that vision into view; learning, support and community connect across the whole experience.",
                  )}
                </p>
              </Heading>
              <StudentJourney />
              <details className="ser-case__artifact ser-case__teacher">
                <summary>
                  {t("The teacher experience behind the student experience")}
                </summary>
                <div className="ser-case__reading">
                  <p>
                    {t(
                      "The faculty scenario connected recruitment, digital onboarding, mentoring, class-performance information, peer exchange and individual feedback.",
                    )}
                  </p>
                  <p>
                    {t("Proposals included ")}
                    <strong>{t("Bem-vindo Professor")}</strong>,{" "}
                    <strong>{t("Professor Padrinho")}</strong>,{" "}
                    <strong>{t("Relatório de Turmas")}</strong>,{" "}
                    <strong>{t("Fórum dos Docentes")}</strong>
                    {t(" and")} <strong>{t("Feedback Ativo")}</strong>.
                  </p>
                  <p className="ser-case__source-note">
                    {t("Future journey deck, p. 5.")}
                  </p>
                </div>
              </details>
              <Artifact
                alt={t(
                  "Original proposed student and faculty journeys, connecting future experiences to service opportunities",
                )}
                file="journey_to_be.jpg"
                title={t("Explore the original future journey map")}
              />
            </section>

            <section className="ser-case__section" id="portal">
              <Heading
                eyebrow={t("07 / Making the basics work")}
                title={t("A portal organized around student tasks.")}
              >
                <p>
                  {t(
                    "The information architecture iterations made the strategy concrete: clearer ways to find information, manage academic life and get help.",
                  )}
                </p>
              </Heading>
              <div className="ser-case__portal-grid">
                <div>
                  <p className="ser-case__label">{t("Earlier structure")}</p>
                  <h3>{t("A broad collection of destinations.")}</h3>
                  <ul>
                    <li>{t("Ten home-level branches")}</li>
                    <li>
                      {t("Complementary activities inside the course area")}
                    </li>
                    <li>{t("Separate physical and digital library access")}</li>
                    <li>{t("Finance and notifications at the home level")}</li>
                  </ul>
                </div>
                <div>
                  <p className="ser-case__label">{t("Proposed refinement")}</p>
                  <h3>{t("More coherent task groups.")}</h3>
                  <ul>
                    <li>{t("Seven home-level branches")}</li>
                    <li>{t("A dedicated complementary-activities area")}</li>
                    <li>
                      {t(
                        "A task-oriented library with available titles and professor recommendations",
                      )}
                    </li>
                    <li>
                      {t(
                        "Finance within the user profile; notifications in settings",
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <p className="ser-case__source-note">
                {t(
                  "Comparison of the two supplied sitemap drafts. Both are internally titled “Sitemap To Be”; this describes design iterations.",
                )}
              </p>
            </section>

            <section
              className="ser-case__section ser-case__section--ruled"
              id="roadmap"
            >
              <Heading
                eyebrow={t("08 / From strategy to action")}
                title={t("Prioritize the experience and the work behind it.")}
              >
                <p>
                  {t(
                    "Initiatives were evaluated through student value, business value and the complexity of making change happen.",
                  )}
                </p>
              </Heading>
              <div className="ser-case__priority-grid">
                {serPriorities.map((priority, index) => (
                  <div key={priority.title}>
                    <span className="ser-case__insight-number">
                      0{index + 1}
                    </span>
                    <h3>{priority.title}</h3>
                    <p>{priority.text}</p>
                  </div>
                ))}
              </div>
              <div className="ser-case__roadmap">
                <div>
                  <p className="ser-case__label">
                    {t("Start with the foundations")}
                  </p>
                  <h3>{t("Make the everyday experience dependable.")}</h3>
                  <p>
                    {t(
                      "First-wave proposals included clearer support requests, Academic Portal 2.0, App Ser 2.0 and Sofia / RoboSer.",
                    )}
                  </p>
                </div>
                <div>
                  <p className="ser-case__label">
                    {t("Create the conditions for change")}
                  </p>
                  <h3>
                    {t("Connect services with organizational capability.")}
                  </h3>
                  <p>
                    {t(
                      "The roadmap paired its ambitions with experience governance, leadership preparation, innovation practices, application maintenance and agile maturity.",
                    )}
                  </p>
                </div>
              </div>
              <details className="ser-case__artifact">
                <summary>
                  {t("How the roadmap proposed measuring progress")}
                </summary>
                <div className="ser-case__measurement-grid">
                  <div>
                    <h4>{t("Reliable basics")}</h4>
                    <p>
                      {t(
                        "Response times, NPS, repeat contacts and open cases.",
                      )}
                    </p>
                  </div>
                  <div>
                    <h4>{t("Learning")}</h4>
                    <p>
                      {t("Attendance, grades, ENADE and portal engagement.")}
                    </p>
                  </div>
                  <div>
                    <h4>{t("Direction")}</h4>
                    <p>
                      {t(
                        "Course transfers, first-year dropout and employability.",
                      )}
                    </p>
                  </div>
                  <div>
                    <h4>{t("Community")}</h4>
                    <p>
                      {t(
                        "Participation, returning graduates and social engagement.",
                      )}
                    </p>
                  </div>
                </div>
                <p className="ser-case__source-note">
                  {t(
                    "Example experience indicators proposed in the roadmap, p. 2.",
                  )}
                </p>
              </details>
              <Artifact
                alt={t(
                  "Original Ser Educacional roadmap, connecting four experience ambitions with organizational enablers",
                )}
                file="roadmap.jpg"
                title={t("Explore the original roadmap")}
              />
              <Artifact
                alt={t(
                  "Original prioritization matrix balancing user and business value with implementation complexity",
                )}
                file="priority_matrix.jpg"
                title={t("Explore the original prioritization matrix")}
              />
            </section>

            <section className="ser-case__section ser-case__closing">
              <Heading
                eyebrow={t("09 / The wider story")}
                title={t("A strategy for a lasting relationship.")}
              />
              <p className="ser-case__reflection">
                {t(
                  "The work connected individual service improvements to a larger question: how could the university help people learn, find direction and stay connected throughout their lives?",
                )}
              </p>
              <div className="ser-case__coverage">
                <p className="ser-case__label">
                  {t("Subsequent public reporting")}
                </p>
                <p>
                  {t(
                    "In 2018, company leadership described Ser Digital as an investment in improving the student experience. In 2021, reporting described the group’s growing digital education ecosystem.",
                  )}
                </p>
                <div className="ser-case__coverage-links">
                  <a
                    href="https://www.diariodepernambuco.com.br/noticia/vidaurbana/2018/12/ser-educacional-entre-as-melhores-empresas-do-brasil-em-2018.html"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {t("Diario de Pernambuco · 2018 ↗")}
                  </a>
                  <a
                    href="https://www.seudinheiro.com/2021/empresas/ser-educacional-janyo-diniz-entrevista/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {t("Seu Dinheiro · 2021 ↗")}
                  </a>
                </div>
                <details className="ser-case__artifact">
                  <summary>
                    {t("View later company enrollment figures")}
                  </summary>
                  <figure className="ser-case__company-chart">
                    <img
                      alt={t(
                        "Ser Educacional enrollment, in thousands: hybrid and in-person versus digital, from 2017 to the first quarter of 2021",
                      )}
                      loading="lazy"
                      src={serResultsImage}
                    />
                    <figcaption>
                      {t(
                        "Company-wide enrollment reported by Seu Dinheiro in 2021. The project’s direct contribution was the research, experience vision and roadmap.",
                      )}
                    </figcaption>
                  </figure>
                </details>
              </div>
              <div className="ser-case__end-links">
                <a href={routeUrl("/#projects")}>
                  {t("Back to all projects →")}
                </a>
              </div>
            </section>
          </div>
        </div>
      </article>
    </DefaultLayout>
  );
}

function Heading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="ser-case__heading">
      <p className="ser-case__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function Artifact({
  title,
  file,
  alt,
}: {
  title: string;
  file: string;
  alt: string;
}) {
  const src = assetUrl(`/assets/img/serdigital_imgs/${file}`);

  return (
    <details className="ser-case__artifact">
      <summary>{title}</summary>
      <figure>
        <a href={src} rel="noreferrer" target="_blank">
          <img alt={alt} loading="lazy" src={src} />
        </a>
        <figcaption>
          {t(
            "Original project artifact · Open the image to inspect it at full size.",
          )}
        </figcaption>
      </figure>
    </details>
  );
}

function StudentJourney() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = serJourney.find(({ id }) => id === selectedId);
  const panelId = useId();
  const headingId = useId();
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const reducedMotion = useReducedMotion();
  const close = () => {
    setSelectedId(null);
    lastTrigger.current?.focus();
  };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape" && selectedId) {
      event.preventDefault();
      close();
    }
  };

  return (
    <div
      aria-label={t("Explore future student journey moments")}
      className="ser-journey"
      role="group"
    >
      <div className="ser-journey__intro">
        <p className="ser-case__label">{t("Future experience vision")}</p>
        <p>
          {t(
            "Choose a moment to reveal the student need and proposed services.",
          )}
        </p>
      </div>
      <ul
        aria-label={t("Recurring moments across future student journeys")}
        className="ser-journey__moments"
      >
        {serJourney.map((moment) => (
          <li
            key={moment.id}
            className={selectedId === moment.id ? "is-expanded" : undefined}
          >
            <button
              aria-controls={
                moment.id === selectedId ? `${panelId}-${moment.id}` : undefined
              }
              aria-expanded={moment.id === selectedId}
              className="ser-journey__moment"
              type="button"
              onClick={(event) => {
                lastTrigger.current = event.currentTarget;
                setSelectedId((current) =>
                  current === moment.id ? null : moment.id,
                );
              }}
              onKeyDown={onKeyDown}
            >
              <span aria-hidden="true" className="ser-journey__toggle">
                {moment.id === selectedId ? "−" : "+"}
              </span>
              <strong>{moment.title}</strong>
              <span>{moment.summary}</span>
            </button>
            <AnimatePresence initial={false}>
              {selected?.id === moment.id && (
                <motion.div
                  key={selected.id}
                  animate={{ height: "auto", opacity: 1 }}
                  className="ser-journey__reveal"
                  exit={{ height: 0, opacity: 0 }}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    aria-labelledby={`${headingId}-${moment.id}`}
                    className="ser-journey__detail"
                    id={`${panelId}-${moment.id}`}
                    role="region"
                  >
                    <button
                      aria-label={t("Close journey details")}
                      className="ser-journey__close"
                      type="button"
                      onClick={close}
                      onKeyDown={onKeyDown}
                    >
                      ×
                    </button>
                    <div>
                      <p className="ser-case__eyebrow">{selected.summary}</p>
                      <h3 id={`${headingId}-${moment.id}`}>{selected.title}</h3>
                      <ul
                        aria-label={t("Proposed services")}
                        className="ser-journey__services"
                      >
                        {selected.services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="ser-journey__copy">
                      <div>
                        <h4>{t("The student’s need")}</h4>
                        <p>{selected.need}</p>
                      </div>
                      <div>
                        <h4>{t("The proposed experience")}</h4>
                        <p>{selected.response}</p>
                      </div>
                      <p className="ser-case__source-note">{selected.source}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}
