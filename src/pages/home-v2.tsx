import type { CSSProperties } from "react";

import { useEffect } from "react";

import portrait from "../../assets/img/photo me.jpg";

import { formatNumber, t } from "@/i18n/locale";
import { portfolioColors } from "@/components/primitives";
import { projectPreviews } from "@/config/projects-preview";
import { assetUrl, routeUrl } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import "@/styles/home.css";

const palette = Object.fromEntries(
  Object.entries(portfolioColors).map(([name, value]) => [
    `--portfolio-${name}`,
    value,
  ]),
) as CSSProperties;
const projects = [
  {
    title: t("Trato"),
    context: t("Accenture / VLI · Logistics"),
    role: t("Research lead & service design"),
    description: t(
      "Helping a freight platform support more of the truck driver’s journey.",
    ),
    outcome: t(
      "A service vision, tested concepts and a roadmap across six connected areas.",
    ),
    metric: "6",
    metricLabel: t("areas in the service vision"),
    image: "/assets/img/project_thumbnails/TratoFretesVideo.webm",
    video: true,
    href: "/trato",
    color: "breeze",
  },
  {
    title: t("Ser Digital"),
    context: t("Accenture / Ser Educacional · Education"),
    role: t("Research leadership & experience strategy"),
    description: t(
      "Connecting university services around the people living the student experience.",
    ),
    outcome: t(
      "Research and co-creation translated into 51 proposed initiatives and a prioritized roadmap.",
    ),
    metric: "51",
    metricLabel: t("proposed initiatives"),
    image: "/assets/img/serdigital_imgs/ser_cover.jpg",
    href: "/ser",
    color: "aloe",
  },
  {
    title: t("Pertinho de Casa"),
    context: t("Accenture / Rede Asta · Local commerce"),
    role: t("User research & service design"),
    description: t(
      "Helping local businesses reach customers during the pandemic.",
    ),
    outcome: t(
      "Audience definition and buyer and seller journeys shaped the service’s direction.",
    ),
    metric: "3",
    metricLabel: t("business personas"),
    image: "/assets/img/pertinho_imgs/cover_pertinho.jpg",
    href: "/pertinho",
    color: "cloudberry",
  },
  {
    title: t("iPad Surveys"),
    context: t("Novartis · Fieldwork experience"),
    role: t("Research design & analysis"),
    description: t(
      "Evaluating what field teams needed before an equipment investment.",
    ),
    outcome: t(
      "Evidence supported a hardware refresh, connectivity hub and keyboard with trackpad.",
    ),
    metric: "4",
    metricLabel: t("weeks from research to recommendations"),
    href: "/ipadsurvey",
    color: "raspberry",
  },
];

export default function HomePage() {
  useEffect(() => {
    const previous = document.title;

    document.title = t("Leif Magalhães — Service Design Lead");

    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <DefaultLayout>
      <div className="home" style={palette}>
        <header className="home__hero home__wrap">
          <div className="home__introduction">
            <p className="home__eyebrow">
              {t("Leif Magalhães / Service Design Lead")}
            </p>
            <h1>
              {t("Designing better ")}
              <span>{t("relationships")}</span>
              {t(" between people and organizations.")}
            </h1>
            <p className="home__lead">
              {t(
                "I help teams turn research into clearer decisions and better services.",
              )}
            </p>
            <p className="home__intro-copy">
              {t(
                "Over a decade working across research, strategy and product design, connecting people’s needs with what organizations can change.",
              )}
            </p>
            <div className="home__actions">
              <a className="home__button" href="#projects">
                {t("Explore my work ")}
                <span aria-hidden="true">↓</span>
              </a>
              <a className="home__text-link" href="mailto:leifwm@gmail.com">
                {t("Get in touch ↗")}
              </a>
            </div>
            <p className="home__location">{t("Based in São Paulo, Brazil")}</p>
          </div>
          <div className="home__portrait">
            <img
              alt={t("Leif Magalhães")}
              fetchPriority="high"
              height={400}
              src={portrait}
              width={400}
            />
          </div>
        </header>
        <section
          aria-label={t("Experience at a glance")}
          className="home__proof home__wrap"
        >
          <div>
            <strong>{t("10+ years")}</strong>
            <span>{t("in service design, research and product design")}</span>
          </div>
          <div>
            <strong>{t("Across sectors")}</strong>
            <span>{t("healthcare, finance, logistics and education")}</span>
          </div>
        </section>
        <section
          aria-labelledby="selected-work"
          className="home__work home__wrap"
          id="projects"
        >
          <div className="home__section-heading">
            <div>
              <p className="home__eyebrow">{t("Selected work")}</p>
              <h2 id="selected-work">
                {t("Research that shaped")}
                <br />
                {t("what came next.")}
              </h2>
            </div>
            <p>
              {t(
                "A selection of projects showing my role, the decisions we informed and the services we helped shape.",
              )}
            </p>
          </div>
          <div className="home__projects">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`home__project home__project--${project.color}`}
              >
                <a
                  aria-label={t("View {0} case study", [project.title])}
                  className="home__project-visual"
                  href={routeUrl(project.href)}
                  tabIndex={-1}
                >
                  {project.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={t("Trato freight platform preview")}
                      preload="metadata"
                    >
                      <source
                        src={assetUrl(project.image!)}
                        type="video/webm"
                      />
                    </video>
                  ) : project.image ? (
                    <img
                      alt={`${project.title} project`}
                      loading="lazy"
                      src={assetUrl(project.image)}
                    />
                  ) : (
                    <div className="home__survey-preview">
                      <span>{t("FIELDWORK / RESEARCH")}</span>
                      <strong>
                        {t("Looking beyond")}
                        <br />
                        {t("the device.")}
                      </strong>
                      <div>
                        <span>
                          <b>107</b>
                          {t("responses")}
                        </span>
                        <span>
                          <b>{formatNumber(52.2)}%</b>
                          {t("response rate")}
                        </span>
                      </div>
                      <div aria-hidden="true" className="home__mini-bars">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  )}
                </a>
                <div className="home__project-copy">
                  <p className="home__context">{project.context}</p>
                  <h3>
                    <a href={routeUrl(project.href)}>{project.title}</a>
                  </h3>
                  <p className="home__project-description">
                    {project.description}
                  </p>
                  <p className="home__role">
                    <span>{t("My role")}</span>
                    {project.role}
                  </p>
                  <div className="home__project-footer">
                    <ul
                      aria-label={t("Project disciplines")}
                      className="home__tags"
                    >
                      {projectPreviews.projects
                        .find((preview) => preview.href === project.href)
                        ?.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <a
                      className="home__button home__more-button"
                      href={routeUrl(project.href)}
                    >
                      {t("View more")}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          aria-labelledby="home-about"
          className="home__about home__wrap"
        >
          <div>
            <p className="home__eyebrow">{t("A little about me")}</p>
            <h2 id="home-about">
              {t("Curious about people.")}
              <br />
              {t("Comfortable with complexity.")}
            </h2>
          </div>
          <div>
            <p>
              {t(
                "I’m interested in the moments when research changes a team’s understanding of a problem. My work combines hands-on research with leading designers, facilitating conversations and turning findings into practical direction.",
              )}
            </p>
            <p>
              {t(
                "I also explore how AI and frontend development can support the way we research, prototype and collaborate.",
              )}
            </p>
            <a className="home__text-link" href={routeUrl("/about")}>
              {t("More about me ↗")}
            </a>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
