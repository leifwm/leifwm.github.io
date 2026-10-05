import type { CSSProperties, KeyboardEvent, ReactNode } from "react";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import serCoverImage from "../../assets/img/serdigital_imgs/ser_cover.jpg";
import serResultsImage from "../../assets/img/serdigital_imgs/ser-resultados.png";

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
  { id: "project", label: "The project" },
  { id: "role", label: "My role" },
  { id: "results", label: "Results" },
  { id: "research", label: "Research" },
  { id: "mindsets", label: "Student mindsets" },
  { id: "strategy", label: "Experience strategy" },
  { id: "journey", label: "Future journeys" },
  { id: "portal", label: "The portal" },
  { id: "roadmap", label: "The roadmap" },
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

    document.title =
      "Ser Digital — Research & Experience Strategy | Leif Magalhães";
    let observer: IntersectionObserver;
    const observe = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.find((entry) => entry.isIntersecting);

          if (visible) setActiveChapter(visible.target.id);
        },
        {
          rootMargin: `-${Math.round(window.innerHeight * 0.2)}px 0px -${Math.round(window.innerHeight * 0.6)}px`,
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
          <nav aria-label="Case study chapters" className="ser-case__nav">
            <p className="ser-case__nav-title">Contents</p>
            <div className="ser-case__nav-items">
              <div className="ser-case__nav-group">
                <p className="ser-case__nav-label">Overview</p>
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
                <p className="ser-case__nav-label">In depth</p>
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
              <a href={routeUrl("/#projects")}>← All projects</a>
            </div>
            <header className="ser-case__hero" id="project">
              <div className="ser-case__hero-copy">
                <p className="ser-case__eyebrow">
                  Ser Educacional / Ser Digital · 2018
                </p>
                <h1>
                  More than
                  <br />a degree.
                </h1>
                <p className="ser-case__lead">
                  Connecting the university experience around the people living
                  it.
                </p>
                <p>
                  Ser Educacional wanted to understand what weakened students’
                  experience and contributed to dropout. We explored how
                  academic, administrative, professional and social services
                  could support a more coherent relationship with the
                  university.
                </p>
                <div className="ser-case__hero-meta">
                  <span>Research leadership</span>
                  <span>Service design</span>
                  <span>Experience strategy</span>
                </div>
              </div>
              <figure className="ser-case__cover">
                <img
                  alt="A person walking through a city, illustrating life beyond the classroom"
                  fetchPriority="high"
                  src={serCoverImage}
                />
                <figcaption>Photo by Vinicius Amano on Unsplash.</figcaption>
              </figure>
            </header>

            <section className="ser-case__section" id="role">
              <Heading
                eyebrow="01 / My role"
                title="Lead the research. Help shape the experience."
              />
              <div className="ser-case__role">
                <div className="ser-case__reading">
                  <h3>Research leadership & service design</h3>
                  <p>
                    I led the research team through planning, execution and
                    synthesis, and contributed to translating the findings into
                    a vision for the future student experience.
                  </p>
                </div>
                <div>
                  <p className="ser-case__label">I led</p>
                  <ul>
                    <li>Research planning and study design</li>
                    <li>Research team coordination and execution</li>
                    <li>Synthesis and student segmentation</li>
                  </ul>
                </div>
                <div>
                  <p className="ser-case__label">I contributed to</p>
                  <ul>
                    <li>Experience strategy and opportunity definition</li>
                    <li>Future journeys and the service ecosystem</li>
                    <li>Initiative prioritization and the roadmap</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="ser-case__results" id="results">
              <Heading
                eyebrow="02 / Results"
                title="One vision. A connected ecosystem of services."
              />
              <div className="ser-case__results-grid">
                <div>
                  <p>
                    The project turned research into a shared direction for the
                    future student experience, connecting the basics of
                    university life with learning, career development and
                    community.
                  </p>
                  <ul className="ser-case__deliverables">
                    <li>
                      <span>01</span>Student mindsets and an experience strategy
                      grounded in research
                    </li>
                    <li>
                      <span>02</span>Future journeys linking needs to concrete
                      service opportunities
                    </li>
                    <li>
                      <span>03</span>A proposed portal structure and a roadmap
                      for transformation
                    </li>
                  </ul>
                </div>
                <div className="ser-case__result-figures">
                  <div>
                    <strong>R$1.25bn</strong>
                    <span>net revenue in 2020</span>
                  </div>
                  <div>
                    <strong>83.8k</strong>
                    <span>digital students in Q1 2021, up from 12k in 2017</span>
                  </div>
                  <div>
                    <strong>228.1k</strong>
                    <span>total students in Q1 2021, including 144.3k in hybrid / in-person education</span>
                  </div>
                  <p className="ser-case__source-note">
                    In 2020, adjusted EBITDA was R$296.7 million and adjusted
                    profit was R$120.1 million. Revenue remained close to 2019
                    levels (R$1,276 million), while profitability declined.
                  </p>
                  <p className="ser-case__source-note">
                    Source: Ser Educacional results summary, 2017–Q1 2021
                    (ser-resultados-2.png). These company-wide figures provide
                    context for the years following the project and do not
                    establish its individual contribution.
                  </p>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="ser-deep-dive"
              className="ser-case__chapter-break"
            >
              <p className="ser-case__eyebrow">In depth / The full story</p>
              <h2 id="ser-deep-dive">Start with the relationship.</h2>
              <p>
                What people expected from university, what got in the way, and
                how those insights shaped the service vision.
              </p>
            </section>

            <section className="ser-case__section" id="research">
              <Heading
                eyebrow="03 / Research"
                title="A student experience has many perspectives."
              />
              <div className="ser-case__research-facts">
                <div>
                  <strong>191+</strong>
                  <span>interviewees reported in the project synthesis</span>
                </div>
                <div>
                  <strong>7</strong>
                  <span>selected institutions across five cities</span>
                </div>
              </div>
              <div className="ser-case__reading ser-case__research-copy">
                <p>
                  The research brought together students, distance-learning
                  students, prospective students, alumni, teachers, course
                  coordinators, managers and directors.
                </p>
                <p>
                  Looking across those perspectives showed how learning,
                  everyday administration and working-life ambitions shaped the
                  relationship with the institution.
                </p>
                <p className="ser-case__source-note">
                  Source: Ser Educacional, Phase 1 planning presentation, pp.
                  15–16. The source reports 191+ interviewees; this is the
                  study’s reported scope.
                </p>
              </div>
              <div className="ser-case__statement">
                <p className="ser-case__eyebrow">The shift in perspective</p>
                <p>
                  The relationship felt transactional.
                  <br />
                  They were also looking for <em>a way forward.</em>
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
                      <p className="ser-case__label">Design direction</p>
                      <p>{insight.decision}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="ser-case__source-note">
                Research synthesis · Phase 1, pp. 19–38.
              </p>
            </section>

            <section
              className="ser-case__section ser-case__section--ruled"
              id="mindsets"
            >
              <Heading
                eyebrow="04 / Student mindsets"
                title="Different motivations. Different kinds of support."
              >
                <p>
                  The model connected two dimensions: what motivates a student
                  and how defined their objective is. These are changing
                  relationships with education, rather than fixed student
                  identities.
                </p>
              </Heading>
              <SerMindsetExplorer items={serMindsets} />
              <p className="ser-case__source-note">
                Adapted from the project’s mindset model · Phase 1, pp. 19–23;
                persona deck, pp. 1–8.
              </p>
              <Artifact
                alt="Original student mindset map, with internal and external motivation and defined and exploratory objectives"
                file="personas.png"
                title="Explore the original persona map"
              />
            </section>

            <section className="ser-case__section" id="strategy">
              <Heading
                eyebrow="05 / Experience strategy"
                title="Build value from a reliable foundation."
              >
                <p>
                  Four complementary pillars connected everyday needs to a
                  broader ambition: helping students prepare for evolving
                  opportunities in their working lives.
                </p>
              </Heading>
              <SerStrategyExplorer items={serStrategy} />
              <p className="ser-case__source-note">
                Four pillars from the experience strategy. The services shown
                are project proposals.
              </p>
            </section>

            <section
              className="ser-case__section ser-case__section--ruled"
              id="journey"
            >
              <Heading
                eyebrow="06 / Future journeys"
                title="Support that follows the student."
              >
                <p>
                  The future journey deck explored four student scenarios and
                  one teacher scenario. These recurring moments bring that
                  vision into view; learning, support and community connect
                  across the whole experience.
                </p>
              </Heading>
              <StudentJourney />
              <details className="ser-case__artifact ser-case__teacher">
                <summary>
                  The teacher experience behind the student experience
                </summary>
                <div className="ser-case__reading">
                  <p>
                    The faculty scenario connected recruitment, digital
                    onboarding, mentoring, class-performance information, peer
                    exchange and individual feedback.
                  </p>
                  <p>
                    Proposals included <strong>Bem-vindo Professor</strong>,{" "}
                    <strong>Professor Padrinho</strong>,{" "}
                    <strong>Relatório de Turmas</strong>,{" "}
                    <strong>Fórum dos Docentes</strong> and{" "}
                    <strong>Feedback Ativo</strong>.
                  </p>
                  <p className="ser-case__source-note">
                    Future journey deck, p. 5.
                  </p>
                </div>
              </details>
              <Artifact
                alt="Original proposed student and faculty journeys, connecting future experiences to service opportunities"
                file="journey_to_be.jpg"
                title="Explore the original future journey map"
              />
            </section>

            <section className="ser-case__section" id="portal">
              <Heading
                eyebrow="07 / Making the basics work"
                title="A portal organized around student tasks."
              >
                <p>
                  The information architecture iterations made the strategy
                  concrete: clearer ways to find information, manage academic
                  life and get help.
                </p>
              </Heading>
              <div className="ser-case__portal-grid">
                <div>
                  <p className="ser-case__label">Earlier structure</p>
                  <h3>A broad collection of destinations.</h3>
                  <ul>
                    <li>Ten home-level branches</li>
                    <li>Complementary activities inside the course area</li>
                    <li>Separate physical and digital library access</li>
                    <li>Finance and notifications at the home level</li>
                  </ul>
                </div>
                <div>
                  <p className="ser-case__label">Proposed refinement</p>
                  <h3>More coherent task groups.</h3>
                  <ul>
                    <li>Seven home-level branches</li>
                    <li>A dedicated complementary-activities area</li>
                    <li>
                      A task-oriented library with available titles and
                      professor recommendations
                    </li>
                    <li>
                      Finance within the user profile; notifications in settings
                    </li>
                  </ul>
                </div>
              </div>
              <p className="ser-case__source-note">
                Comparison of the two supplied sitemap drafts. Both are
                internally titled “Sitemap To Be”; this describes design
                iterations.
              </p>
            </section>

            <section
              className="ser-case__section ser-case__section--ruled"
              id="roadmap"
            >
              <Heading
                eyebrow="08 / From strategy to action"
                title="Prioritize the experience and the work behind it."
              >
                <p>
                  Initiatives were evaluated through student value, business
                  value and the complexity of making change happen.
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
                  <p className="ser-case__label">Start with the foundations</p>
                  <h3>Make the everyday experience dependable.</h3>
                  <p>
                    First-wave proposals included clearer support requests,
                    Academic Portal 2.0, App Ser 2.0 and Sofia / RoboSer.
                  </p>
                </div>
                <div>
                  <p className="ser-case__label">
                    Create the conditions for change
                  </p>
                  <h3>Connect services with organizational capability.</h3>
                  <p>
                    The roadmap paired its ambitions with experience governance,
                    leadership preparation, innovation practices, application
                    maintenance and agile maturity.
                  </p>
                </div>
              </div>
              <details className="ser-case__artifact">
                <summary>How the roadmap proposed measuring progress</summary>
                <div className="ser-case__measurement-grid">
                  <div>
                    <h4>Reliable basics</h4>
                    <p>Response times, NPS, repeat contacts and open cases.</p>
                  </div>
                  <div>
                    <h4>Learning</h4>
                    <p>Attendance, grades, ENADE and portal engagement.</p>
                  </div>
                  <div>
                    <h4>Direction</h4>
                    <p>
                      Course transfers, first-year dropout and employability.
                    </p>
                  </div>
                  <div>
                    <h4>Community</h4>
                    <p>
                      Participation, returning graduates and social engagement.
                    </p>
                  </div>
                </div>
                <p className="ser-case__source-note">
                  Example experience indicators proposed in the roadmap, p. 2.
                </p>
              </details>
              <Artifact
                alt="Original Ser Educacional roadmap, connecting four experience ambitions with organizational enablers"
                file="roadmap.jpg"
                title="Explore the original roadmap"
              />
              <Artifact
                alt="Original prioritization matrix balancing user and business value with implementation complexity"
                file="priority_matrix.jpg"
                title="Explore the original prioritization matrix"
              />
            </section>

            <section className="ser-case__section ser-case__closing">
              <Heading
                eyebrow="09 / The wider story"
                title="A strategy for a lasting relationship."
              />
              <p className="ser-case__reflection">
                The work connected individual service improvements to a larger
                question: how could the university help people learn, find
                direction and stay connected throughout their lives?
              </p>
              <div className="ser-case__coverage">
                <p className="ser-case__label">Subsequent public reporting</p>
                <p>
                  In 2018, company leadership described Ser Digital as an
                  investment in improving the student experience. In 2021,
                  reporting described the group’s growing digital education
                  ecosystem.
                </p>
                <div className="ser-case__coverage-links">
                  <a
                    href="https://www.diariodepernambuco.com.br/noticia/vidaurbana/2018/12/ser-educacional-entre-as-melhores-empresas-do-brasil-em-2018.html"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Diario de Pernambuco · 2018 ↗
                  </a>
                  <a
                    href="https://www.seudinheiro.com/2021/empresas/ser-educacional-janyo-diniz-entrevista/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Seu Dinheiro · 2021 ↗
                  </a>
                </div>
                <details className="ser-case__artifact">
                  <summary>View later company enrollment figures</summary>
                  <figure className="ser-case__company-chart">
                    <img
                      alt="Ser Educacional enrollment, in thousands: hybrid and in-person versus digital, from 2017 to the first quarter of 2021"
                      loading="lazy"
                      src={serResultsImage}
                    />
                    <figcaption>
                      Company-wide enrollment reported by Seu Dinheiro in 2021.
                      The project’s direct contribution was the research,
                      experience vision and roadmap.
                    </figcaption>
                  </figure>
                </details>
              </div>
              <div className="ser-case__end-links">
                <a href={routeUrl("/#projects")}>Back to all projects →</a>
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
          Original project artifact · Open the image to inspect it at full size.
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
      aria-label="Explore future student journey moments"
      className="ser-journey"
      role="group"
    >
      <div className="ser-journey__intro">
        <p className="ser-case__label">Future experience vision</p>
        <p>Choose a moment to reveal the student need and proposed services.</p>
      </div>
      <ul
        aria-label="Recurring moments across future student journeys"
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
                      aria-label="Close journey details"
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
                        aria-label="Proposed services"
                        className="ser-journey__services"
                      >
                        {selected.services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="ser-journey__copy">
                      <div>
                        <h4>The student’s need</h4>
                        <p>{selected.need}</p>
                      </div>
                      <div>
                        <h4>The proposed experience</h4>
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
