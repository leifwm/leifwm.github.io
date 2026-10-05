import type { CSSProperties, KeyboardEvent, ReactNode } from "react";

import {
  AnimatePresence,
  motion,
  useIsPresent,
  useReducedMotion,
} from "motion/react";
import { useId, useRef, useState } from "react";

import { t } from "@/i18n/locale";

import "@/styles/ser-explorers.css";

export type SerMindset = {
  id: string;
  title: string;
  motivation: string;
  direction: string;
  summary: string;
  description: string;
  implication: string;
  color: string;
};

export type SerStrategyLayer = {
  id: string;
  number: string;
  title: string;
  summary: string;
  need: string;
  response: string;
  services: readonly string[];
  color: string;
};

function Reveal({
  children,
  id,
  labelledBy,
}: {
  children: ReactNode;
  id: string;
  labelledBy: string;
}) {
  const reducedMotion = useReducedMotion();
  const isPresent = useIsPresent();

  return (
    <motion.div
      animate={{ height: "auto", opacity: 1 }}
      aria-hidden={!isPresent}
      aria-labelledby={labelledBy}
      className="ser-explorer__reveal"
      exit={{ height: 0, opacity: 0 }}
      id={id}
      inert={!isPresent}
      initial={{ height: 0, opacity: 0 }}
      role="region"
      transition={{
        duration: reducedMotion ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function itemStyle(color: string): CSSProperties {
  return { "--ser-item-color": color } as CSSProperties;
}

export function SerMindsetExplorer({
  items,
}: {
  items: readonly SerMindset[];
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const buttonRefs = useRef(new Map<string, HTMLButtonElement>());
  const instanceId = useId();
  const selected = items.find((item) => item.id === selectedId);
  const panelId = `${instanceId}-mindset-details`;
  const headingId = `${instanceId}-mindset-heading`;

  function close() {
    if (selectedId) buttonRefs.current.get(selectedId)?.focus();
    setSelectedId(null);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape" && selectedId) {
      event.preventDefault();
      close();
    }
  }

  return (
    <div
      aria-label={t("Explore student mindsets")}
      className="ser-mindsets ser-explorer"
      role="group"
    >
      <p className="ser-explorer__instruction">
        {t("Select a mindset to explore the support it calls for.")}
      </p>
      <div className="ser-mindsets__canvas">
        <div aria-hidden="true" className="ser-mindsets__motivation">
          <span>{t("Internal")}</span>
          <span>{t("Motivation")}</span>
          <span>{t("External")}</span>
        </div>
        <div aria-hidden="true" className="ser-mindsets__direction">
          <span>{t("Defined")}</span>
          <span>{t("Objective")}</span>
          <span>{t("Exploratory")}</span>
        </div>
        <div className="ser-mindsets__grid">
          {items.map((item) => {
            const isSelected = item.id === selectedId;

            return (
              <button
                key={item.id}
                ref={(button) => {
                  if (button) buttonRefs.current.set(item.id, button);
                  else buttonRefs.current.delete(item.id);
                }}
                aria-controls={isSelected ? panelId : undefined}
                aria-expanded={isSelected}
                className="ser-mindsets__button"
                style={itemStyle(item.color)}
                type="button"
                onClick={() =>
                  setSelectedId((current) =>
                    current === item.id ? null : item.id,
                  )
                }
                onKeyDown={onKeyDown}
              >
                <span className="ser-explorer__button-heading">
                  <strong>{item.title}</strong>
                  <span aria-hidden="true" className="ser-explorer__toggle">
                    {isSelected ? "−" : "+"}
                  </span>
                </span>
                <span className="ser-mindsets__summary">{item.summary}</span>
                <span className="ser-mindsets__axes">
                  <span>
                    {t("Motivation: ")}
                    {item.motivation}
                  </span>
                  <span>
                    {t("Objective: ")}
                    {item.direction}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait">
        {selected && (
          <Reveal key={selected.id} id={panelId} labelledBy={headingId}>
            <div
              className="ser-explorer__details ser-mindsets__details"
              style={itemStyle(selected.color)}
            >
              <div className="ser-explorer__detail-heading">
                <h3 id={headingId}>{selected.title}</h3>
                <button
                  aria-label={t("Close {0} details", [selected.title])}
                  className="ser-explorer__close"
                  type="button"
                  onClick={close}
                  onKeyDown={onKeyDown}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="ser-explorer__detail-columns">
                <p>{selected.description}</p>
                <div>
                  <p className="ser-explorer__label">
                    {t("Design implication")}
                  </p>
                  <p>{selected.implication}</p>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SerStrategyExplorer({
  items,
}: {
  items: readonly SerStrategyLayer[];
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const buttonRefs = useRef(new Map<string, HTMLButtonElement>());
  const instanceId = useId();

  function close() {
    if (selectedId) buttonRefs.current.get(selectedId)?.focus();
    setSelectedId(null);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape" && selectedId) {
      event.preventDefault();
      close();
    }
  }

  return (
    <div
      aria-label={t("Explore experience strategy")}
      className="ser-strategy ser-explorer"
      role="group"
    >
      <p className="ser-explorer__instruction">
        {t(
          "Explore four pillars, from everyday essentials to a wider community.",
        )}
      </p>
      <ol
        aria-label={t("Experience strategy pillars")}
        className="ser-strategy__layers"
      >
        {items.map((item) => {
          const isSelected = selectedId === item.id;
          const panelId = `${instanceId}-${item.id}-details`;
          const headingId = `${instanceId}-${item.id}-heading`;

          return (
            <li key={item.id} style={itemStyle(item.color)}>
              <span aria-hidden="true" className="ser-strategy__number">
                {item.number}
              </span>
              <button
                ref={(button) => {
                  if (button) buttonRefs.current.set(item.id, button);
                  else buttonRefs.current.delete(item.id);
                }}
                aria-controls={isSelected ? panelId : undefined}
                aria-expanded={isSelected}
                className="ser-strategy__button"
                type="button"
                onClick={() =>
                  setSelectedId((current) =>
                    current === item.id ? null : item.id,
                  )
                }
                onKeyDown={onKeyDown}
              >
                <span className="ser-explorer__button-heading">
                  <strong>{item.title}</strong>
                  <span aria-hidden="true" className="ser-explorer__toggle">
                    {isSelected ? "−" : "+"}
                  </span>
                </span>
                <span className="ser-strategy__summary">{item.summary}</span>
              </button>
              <AnimatePresence initial={false}>
                {isSelected && (
                  <Reveal key={item.id} id={panelId} labelledBy={headingId}>
                    <div className="ser-explorer__details ser-strategy__details">
                      <div className="ser-explorer__detail-heading">
                        <h3 id={headingId}>{item.title}</h3>
                        <button
                          aria-label={t("Close {0} details", [item.title])}
                          className="ser-explorer__close"
                          type="button"
                          onClick={close}
                          onKeyDown={onKeyDown}
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="ser-explorer__detail-columns">
                        <div>
                          <p className="ser-explorer__label">
                            {t("Student need")}
                          </p>
                          <p>{item.need}</p>
                        </div>
                        <div>
                          <p className="ser-explorer__label">
                            {t("Experience response")}
                          </p>
                          <p>{item.response}</p>
                        </div>
                      </div>
                      {item.services.length > 0 && (
                        <div className="ser-strategy__services">
                          <p className="ser-explorer__label">
                            {t("Service opportunities")}
                          </p>
                          <ul>
                            {item.services.map((service) => (
                              <li key={service}>{service}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </Reveal>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
