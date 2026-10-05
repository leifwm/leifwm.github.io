import type { CSSProperties } from "react";

import { useEffect } from "react";

import portrait from "../../assets/img/photo me.jpg";

import { t } from "@/i18n/locale";
import { portfolioColors } from "@/components/primitives";
import { routeUrl } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import "@/styles/about.css";

const palette = Object.fromEntries(
  Object.entries(portfolioColors).map(([name, value]) => [
    `--portfolio-${name}`,
    value,
  ]),
) as CSSProperties;
const strengths = [
  {
    title: t("Make sense of the research"),
    text: t(
      "I combine interviews, surveys and testing to understand what people need, then help teams see the patterns that matter for a decision.",
    ),
    example: t(
      "At Novartis, an equipment survey informed recommendations for the complete fieldwork experience.",
    ),
    link: "/ipadsurvey",
    label: t("Explore the iPad research"),
    color: "breeze",
  },
  {
    title: t("Connect the whole service"),
    text: t(
      "I look at the experience around a product: the journeys, teams and operations that shape how a service works for people.",
    ),
    example: t(
      "For Ser Educacional, research informed a shared experience strategy and a roadmap for university services.",
    ),
    link: "/ser",
    label: t("Explore Ser Digital"),
    color: "cloudberry",
  },
  {
    title: t("Create direction together"),
    text: t(
      "I lead designers, guide research and facilitate workshops that bring different perspectives into a shared understanding of what to do next.",
    ),
    example: t(
      "On Trato, driver research and concept testing helped shape the service vision and feature roadmap.",
    ),
    link: "/trato",
    label: t("Explore Trato"),
    color: "raspberry",
  },
];
const experience = [
  {
    company: "Novartis",
    role: t("Service Design Lead"),
    dates: t("Nov 2023 — Dec 2025"),
    sector: t("Healthcare"),
    text: t(
      "Led designers across business units, working with brand and regulatory requirements. Research with field teams and caregivers informed equipment decisions and strategic priorities.",
    ),
    detail: t("Contract through CTC / WM Design."),
  },
  {
    company: "Banco Carrefour",
    role: t("Senior Service Designer"),
    dates: t("Oct 2021 — Feb 2023"),
    sector: t("Financial services"),
    text: t(
      "Helped customers compare credit models through research and visual explanations. Developed personas and journey maps to guide product decisions and align design, engineering and business teams.",
    ),
  },
  {
    company: "Accenture / Fjord",
    role: t("Service Design Consultant"),
    dates: t("May 2018 — Jun 2021"),
    sector: t("Education, logistics & local commerce"),
    text: t(
      "Led research and translated findings into service concepts, prototypes and roadmaps for Ser Educacional, VLI’s Trato and Pertinho de Casa.",
    ),
  },
];

export default function AboutV2Page() {
  useEffect(() => {
    const previous = document.title;

    document.title = t("About Leif Magalhães — Service Design Lead");

    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <DefaultLayout>
      <div className="about-page" style={palette}>
        <header className="about-page__hero about-page__wrap">
          <div>
            <p className="about-page__eyebrow">{t("About / Leif Magalhães")}</p>
            <h1>
              {t("Curious about people.")}
              <br />
              <span>{t("Comfortable with complexity.")}</span>
            </h1>
            <p className="about-page__lead">
              {t(
                "I’m a service designer who enjoys making sense of what people need and helping teams act on what they learn.",
              )}
            </p>
            <p className="about-page__intro">
              {t(
                "For over a decade, I’ve worked across research, strategy and product design. I’m particularly interested in the moments when evidence challenges an assumption and changes the direction of a service.",
              )}
            </p>
            <div className="about-page__identity">
              <span>{t("Service Design Lead")}</span>
              <span>{t("São Paulo, Brazil")}</span>
            </div>
          </div>
          <figure className="about-page__portrait">
            <img
              alt={t("Leif Magalhães")}
              fetchPriority="high"
              height={400}
              src={portrait}
              width={400}
            />
          </figure>
        </header>
        <section
          aria-labelledby="about-contribution"
          className="about-page__section about-page__wrap"
        >
          <div className="about-page__heading">
            <p className="about-page__eyebrow">{t("What I bring to a team")}</p>
            <h2 id="about-contribution">
              {t("Understanding that leads to action.")}
            </h2>
          </div>
          <div className="about-page__strengths">
            {strengths.map((strength) => (
              <article
                key={strength.title}
                className={`about-page__strength about-page__strength--${strength.color}`}
              >
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
                <p className="about-page__example">{strength.example}</p>
                <a href={routeUrl(strength.link)}>
                  {strength.label} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
        <section
          aria-labelledby="about-leadership"
          className="about-page__section about-page__wrap about-page__leadership"
        >
          <div className="about-page__heading">
            <p className="about-page__eyebrow">{t("How I lead")}</p>
            <h2 id="about-leadership">
              {t("Make space for people to do their best work.")}
            </h2>
          </div>
          <div className="about-page__leadership-copy">
            <p>
              {t(
                "I want people to feel comfortable asking questions, sharing ideas and challenging a direction. That means building an open working environment while asking the questions that help us think more critically about the work.",
              )}
            </p>
            <p>
              {t(
                "My leadership combines project planning with mentoring and close support for the team. I stay involved in delivery and contribute directly when needed, bringing my research and design experience into the decisions we make together.",
              )}
            </p>
            <div className="about-page__recommendations">
              <article>
                <h3>{t("Miriam Emi Shirozaki")}</h3>
                <p className="about-page__recommendation-context">
                  {t("A designer I led")}
                </p>
                <blockquote>
                  “
                  {t(
                    "I had the opportunity to be led by Leif in his first experience managing people, and I can say it was a very successful debut. From the start, he helped build a safe, open and relaxed working environment, while asking questions and prompting important reflection — one of the qualities I most admire and value in him. Combined with his extensive experience and technical expertise, this makes Leif a well-rounded professional who brings together knowledge, critical thinking and a human approach to leadership. I am grateful to have been part of his journey and am certain he will make a difference wherever he goes.",
                  )}
                  ”
                </blockquote>
              </article>
              <article>
                <h3>{t("Luiz Felipe Bulis")}</h3>
                <p className="about-page__recommendation-context">
                  {t("My manager at Novartis in 2025")}
                </p>
                <blockquote>
                  “
                  {t(
                    "I had the pleasure of leading Leif in his role as Design Coordinator at Novartis during 2025. It was a year of significant growth in soft skills, especially leadership behaviors, for a professional with substantial technical expertise and a wide range of previous experiences. I would highlight the breadth of his contribution: from project planning and management to close support and effective mentoring of the team, never hesitating to roll up his sleeves when needed. His range of skills allows him to move between and add value in both management tracks and senior specialist positions. I know he will be a valuable asset to any organization looking for this combination of technical experience and leadership.",
                  )}
                  ”
                </blockquote>
              </article>
            </div>
            <p className="about-page__recommendation-source">
              {t(
                "Recommendations originally written in Portuguese. English translations.",
              )}
            </p>
          </div>
        </section>
        <section
          aria-labelledby="about-experience"
          className="about-page__section about-page__wrap about-page__career"
        >
          <div className="about-page__heading">
            <p className="about-page__eyebrow">{t("Experience at a glance")}</p>
            <h2 id="about-experience">
              {t("Different sectors.")}
              <br />
              {t("A focus on the people involved.")}
            </h2>
            <p>
              {t(
                "Selected roles from my recent career. Full experience and qualifications are available in my CV below.",
              )}
            </p>
          </div>
          <ol className="about-page__timeline">
            {experience.map((job) => (
              <li key={job.company}>
                <p className="about-page__dates">{job.dates}</p>
                <div>
                  <p className="about-page__sector">{job.sector}</p>
                  <h3>{job.company}</h3>
                  <p className="about-page__job-role">{job.role}</p>
                  <p className="about-page__job-description">{job.text}</p>
                  {job.detail && (
                    <p className="about-page__detail">{job.detail}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section
          aria-labelledby="about-personal"
          className="about-page__section about-page__wrap about-page__personal"
        >
          <div className="about-page__heading">
            <p className="about-page__eyebrow">{t("Beyond the projects")}</p>
            <h2 id="about-personal">
              {t("A nerd who likes")}
              <br />
              {t("learning how things work.")}
            </h2>
          </div>
          <div className="about-page__personal-copy">
            <p>
              {t(
                "I like knowing about technology and getting closer to the tools I design with. Learning frontend development has given me another way to explore ideas and collaborate with people who build them. This portfolio is part of that learning.",
              )}
            </p>
            <p>
              {t(
                "I’m also exploring how AI can help with research and design, especially the repetitive work of organizing information. What interests me is having more time to interpret findings and ask better questions.",
              )}
            </p>
            <div className="about-page__languages">
              <span>{t("Portuguese · Native")}</span>
              <span>{t("English · C1")}</span>
              <span>{t("Italian · Elementary")}</span>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
