import type { CSSProperties, ReactNode } from "react";

import { useEffect, useId, useState } from "react";

import { t } from "@/i18n/locale";
import { portfolioColors } from "@/components/primitives";
import { routeUrl } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { ZoomableImage } from "@/components/zoomable-image";
import "@/styles/ser-v2.css";
import "@/styles/project-case-study.css";

export type Chapter = { id: string; label: string };
const palette = Object.fromEntries(
  Object.entries(portfolioColors).map(([name, value]) => [
    `--portfolio-${name}`,
    value,
  ]),
) as CSSProperties;

export function ProjectCaseStudy({
  title,
  chapters,
  children,
  className = "",
}: {
  title: string;
  chapters: Chapter[];
  children: ReactNode;
  className?: string;
}) {
  const [active, setActive] = useState(chapters[0].id);

  useEffect(() => {
    const previous = document.title;

    document.title = t("{0} | Leif Magalhães", [title]);
    let observer: IntersectionObserver;
    const observe = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.find((entry) => entry.isIntersecting);

          if (visible) setActive(visible.target.id);
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
      observer.disconnect();
      window.removeEventListener("resize", observe);
      document.title = previous;
    };
  }, [title, chapters]);

  return (
    <DefaultLayout>
      <article className={`ser-case project-case ${className}`} style={palette}>
        <div className="ser-case__layout">
          <nav aria-label={t("Case study chapters")} className="ser-case__nav">
            <p className="ser-case__nav-title">{t("Contents")}</p>
            <div className="ser-case__nav-items">
              {[chapters.slice(0, 3), chapters.slice(3)].map((group, index) => (
                <div key={index} className="ser-case__nav-group">
                  {index > 0 && <hr className="ser-case__nav-divider" />}
                  <p className="ser-case__nav-label">
                    {index === 0 ? t("Overview") : t("In depth")}
                  </p>
                  {group.map((chapter) => (
                    <a
                      key={chapter.id}
                      aria-current={
                        active === chapter.id ? "location" : undefined
                      }
                      href={`#${chapter.id}`}
                    >
                      {chapter.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </nav>
          <div className="ser-case__content">
            <div className="ser-case__back">
              <a href={routeUrl("/#projects")}>{t("← All projects")}</a>
            </div>
            {children}
          </div>
        </div>
      </article>
    </DefaultLayout>
  );
}

export function CaseHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="ser-case__heading">
      <p className="ser-case__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export function CaseSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="ser-case__section" id={id}>
      <CaseHeading eyebrow={eyebrow} title={title} />
      {children}
    </section>
  );
}

export function CaseFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="project-case__figure">
      <ZoomableImage alt={alt} src={src} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function CaseExplorer({
  label,
  items,
}: {
  label: string;
  items: {
    title: string;
    description: string;
    implication: string;
    image?: string;
  }[];
}) {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const item = items[selected];

  return (
    <div className="project-case__explorer">
      <div aria-label={label} className="project-case__choices" role="group">
        {items.map((option, index) => (
          <button
            key={option.title}
            aria-controls={id}
            aria-pressed={selected === index}
            type="button"
            onClick={() => setSelected(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {option.title}
          </button>
        ))}
      </div>
      <div
        aria-atomic="true"
        aria-live="polite"
        className="project-case__detail"
        id={id}
      >
        <p className="ser-case__label">{label}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="project-case__implication">
          <p className="ser-case__label">{t("Design direction")}</p>
          <p>{item.implication}</p>
        </div>
        {item.image && (
          <ZoomableImage
            alt={t("{0} persona from the research synthesis", [item.title])}
            src={item.image}
          />
        )}
      </div>
    </div>
  );
}
