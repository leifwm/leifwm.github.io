import type { CSSProperties } from "react";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { portfolioColors } from "@/components/primitives";

import "@/styles/trato-journey.css";

export const TRATO_SERVICES = [
  { id: "tires", label: "Tires", color: portfolioColors.raspberry },
  {
    id: "marketplace",
    label: "Marketplace",
    color: portfolioColors.cloudberry,
  },
  { id: "finance", label: "Finance", color: portfolioColors.beetroot },
  { id: "social", label: "Social map", color: portfolioColors.currant },
  { id: "fuel", label: "Fuel", color: portfolioColors.breeze },
  { id: "freight", label: "Freight", color: portfolioColors.aloe },
] as const;

type ServiceId = (typeof TRATO_SERVICES)[number]["id"];

type JourneyMoment = {
  id: string;
  label: string;
  context: string;
  need: string;
  opportunity: string;
  services: readonly ServiceId[];
  x?: string;
  y?: string;
};

export const TRATO_JOURNEY_MOMENTS: readonly JourneyMoment[] = [
  {
    id: "entry",
    label: "Become a driver",
    context: "Entering the profession",
    need: "The journey starts before the first delivery, with the decisions and resources needed to work independently.",
    opportunity:
      "Consider how access to services, financial support, and freight could help someone enter the profession.",
    services: ["marketplace", "finance", "freight"],
  },
  {
    id: "search",
    label: "Find freight",
    context: "01 / The freight cycle",
    need: "Drivers often looked to trusted contacts and WhatsApp first. Freight apps were a backup, and finding a return load could be difficult.",
    opportunity:
      "Make relevant freight easier to find, starting with the origin of the trip and supporting the relationships drivers already rely on.",
    services: ["finance", "social", "fuel", "freight"],
    x: "24%",
    y: "28%",
  },
  {
    id: "accept",
    label: "Decide & accept",
    context: "02 / The freight cycle",
    need: "Thin margins make the value of a load more than its advertised payment. Trust in the company also matters.",
    opportunity:
      "Bring company ratings and comments into the decision, alongside the information needed to judge whether a trip is worthwhile.",
    services: ["finance", "social", "fuel", "freight"],
    x: "41%",
    y: "19%",
  },
  {
    id: "prepare",
    label: "Plan & prepare",
    context: "03 / The freight cycle",
    need: "Arrival times, stops, and possible expenses introduce uncertainty before the journey has even started.",
    opportunity:
      "Connect trip planning with useful information about fuel, roadside services, costs, and the next load.",
    services: ["tires", "marketplace", "finance", "social", "fuel", "freight"],
    x: "59%",
    y: "19%",
  },
  {
    id: "load",
    label: "Load",
    context: "04 / The freight cycle",
    need: "Loading is part of the trip's real schedule. Drivers wanted clearer information about loading and unloading times.",
    opportunity:
      "Make timing visible in the freight experience so drivers can plan around the work beyond the drive itself.",
    services: ["social", "freight"],
    x: "76%",
    y: "23%",
  },
  {
    id: "travel",
    label: "Travel",
    context: "05 / The freight cycle",
    need: "Drivers need to make decisions on the road, where accurate prices, useful stops, and connectivity cannot be taken for granted.",
    opportunity:
      "Provide an offline-capable social map with reliable service information and recommendations from other drivers.",
    services: ["tires", "finance", "social", "fuel"],
    x: "83.3%",
    y: "47%",
  },
  {
    id: "unload",
    label: "Unload",
    context: "06 / The freight cycle",
    need: "The delivery is not over on arrival. Unloading time affects when the driver can move on to the next job.",
    opportunity:
      "Use shared information about destinations to help drivers anticipate the last part of a delivery.",
    services: ["social"],
    x: "72%",
    y: "73%",
  },
  {
    id: "payment",
    label: "Get paid",
    context: "07 / The freight cycle",
    need: "Large amounts of money pass through a driver's hands, while margins remain thin and truck and household finances have different demands.",
    opportunity:
      "Look beyond the freight payment to the expenses and financial commitments surrounding every delivery.",
    services: ["tires", "marketplace", "finance", "fuel", "freight"],
    x: "49%",
    y: "73%",
  },
  {
    id: "problem",
    label: "Problem on the road",
    context: "A possible disruption during travel",
    need: "When something goes wrong, drivers may call a trusted mechanic for advice before approaching an unfamiliar workshop.",
    opportunity:
      "Help drivers assess nearby support through peer reviews, workshop specialties, and the truck types a service can handle.",
    services: ["tires", "marketplace", "finance", "social", "fuel"],
  },
  {
    id: "maintenance",
    label: "Maintain the truck",
    context: "Time off the road / Preventive maintenance",
    need: "Time between trips also includes preventive maintenance. Keeping the truck ready is part of the working cycle.",
    opportunity:
      "Explore access to trusted maintenance services and tire support before a problem interrupts a journey.",
    services: ["tires", "marketplace", "finance", "social"],
  },
  {
    id: "upgrades",
    label: "Improve the truck",
    context: "Time off the road / Truck improvements",
    need: "The original journey map includes improvements to the truck among the responsibilities competing for time off.",
    opportunity:
      "Connect drivers with relevant services, peer recommendations, and ways to plan the cost of improvements.",
    services: ["marketplace", "finance", "social"],
  },
  {
    id: "family",
    label: "Be with family",
    context: "Time off the road / Family",
    need: "Family life is part of the driver's journey, alongside the time and responsibilities associated with the truck.",
    opportunity:
      "Evaluate services in the context of life outside a delivery, as the research journey explicitly brought family into view.",
    services: ["marketplace", "finance", "social"],
  },
  {
    id: "finances",
    label: "Manage finances",
    context: "Time off the road / Money management",
    need: "Drivers manage household and truck finances separately, balancing high cash flows against thin margins.",
    opportunity:
      "Bring the costs and commitments across the service ecosystem into a clearer picture of the driver's finances.",
    services: ["tires", "marketplace", "finance", "social", "fuel", "freight"],
  },
  {
    id: "health",
    label: "Care for health",
    context: "Time off the road / Health",
    need: "Looking after personal health appears in the original map as part of life between trips.",
    opportunity:
      "Include wellbeing when assessing how the wider service ecosystem could support drivers beyond freight.",
    services: ["marketplace", "finance", "social"],
  },
  {
    id: "rest",
    label: "Rest",
    context: "Time off the road / Rest",
    need: "Rest shares time with maintenance, family, finances, and health. Time off is not an empty space in the journey.",
    opportunity:
      "Explore how a social map could help drivers find useful places to stop and rest.",
    services: ["social"],
  },
];

export default function TratoJourney() {
  const [momentId, setMomentId] = useState<string | null>(null);
  const [serviceId, setServiceId] = useState<ServiceId | null>(null);
  const panelId = useId();
  const headingId = useId();
  const selected = TRATO_JOURNEY_MOMENTS.find(({ id }) => id === momentId);
  const reducedMotion = useReducedMotion();
  const service = TRATO_SERVICES.find(({ id }) => id === serviceId);
  const roadMoments = TRATO_JOURNEY_MOMENTS.slice(1, 8);
  const offRoadMoments = TRATO_JOURNEY_MOMENTS.slice(9);
  const matchingMoments = TRATO_JOURNEY_MOMENTS.filter((moment) =>
    serviceId ? moment.services.includes(serviceId) : true,
  );

  function momentButton(moment: JourneyMoment, index?: number) {
    const matches = serviceId !== null && moment.services.includes(serviceId);

    return (
      <>
        <button
          aria-controls={moment.id === momentId ? panelId : undefined}
          aria-expanded={moment.id === momentId}
          aria-pressed={moment.id === momentId}
          className={`trato-journey__moment${matches ? " is-service-match" : ""}`}
          type="button"
          onClick={() =>
            setMomentId((current) => (current === moment.id ? null : moment.id))
          }
        >
          {matches && (
            <span aria-hidden="true" className="trato-journey__match">
              ✓
            </span>
          )}
          {index !== undefined && (
            <span aria-hidden="true" className="trato-journey__number">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span>{moment.label}</span>
          <span aria-hidden="true" className="trato-journey__expand">
            {moment.id === momentId ? "−" : "+"}
          </span>
          <span aria-hidden="true" className="trato-journey__dots">
            {TRATO_SERVICES.filter(({ id }) =>
              moment.services.includes(id),
            ).map(({ id, color }) => (
              <i
                key={id}
                className={serviceId && serviceId !== id ? "is-muted" : ""}
                style={{ "--journey-service": color } as CSSProperties}
              />
            ))}
          </span>
          {serviceId && (
            <span className="trato-journey__sr-only">
              {matches
                ? `Includes ${service?.label}`
                : `No ${service?.label} opportunity mapped`}
            </span>
          )}
        </button>
      </>
    );
  }

  return (
    <div
      className={`trato-journey${serviceId ? " is-filtered" : ""}`}
      style={{ "--journey-selected-service": service?.color } as CSSProperties}
    >
      <fieldset className="trato-journey__filters">
        <legend>Explore a service opportunity</legend>
        <div className="trato-journey__filter-buttons">
          <button
            aria-pressed={serviceId === null}
            className="trato-journey__filter"
            type="button"
            onClick={() => setServiceId(null)}
          >
            All services
          </button>
          {TRATO_SERVICES.map(({ id, label, color }) => (
            <button
              key={id}
              aria-pressed={serviceId === id}
              className="trato-journey__filter"
              style={{ "--journey-service": color } as CSSProperties}
              type="button"
              onClick={() => setServiceId(id)}
            >
              <i aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="trato-journey__instruction">
        {service
          ? `${service.label} connects to ${matchingMoments.length} moments highlighted below.`
          : "A recurring cycle of work and life."}{" "}
        Select a moment to explore it.
      </p>

      <div
        className={`trato-journey__graphic${offRoadMoments.some(({ id }) => id === momentId) ? " is-off-road-selected" : ""}`}
      >
        <div
          aria-label="The driver's recurring journey"
          className="trato-journey__map"
        >
          <svg
            aria-hidden="true"
            className="trato-journey__lines"
            preserveAspectRatio="none"
            viewBox="0 0 1080 480"
          >
            <path
              className="trato-journey__track"
              d="M240 220V190Q240 90 360 90H760Q900 90 900 220Q900 350 760 350H360Q240 350 240 220Z"
            />
            <path
              className="trato-journey__branch"
              d="M75 220H240M900 220C1005 220 990 325 990 415"
            />
            <path
              className="trato-journey__arrow"
              d="M525 85l7 5-7 5M410 345l-7 5 7 5"
            />
          </svg>

          <div className="trato-journey__entry">
            <span className="trato-journey__branch-label">Start here</span>
            {momentButton(TRATO_JOURNEY_MOMENTS[0])}
          </div>

          <div aria-hidden="true" className="trato-journey__cycle-label">
            <span>On the road</span>
            <strong>The freight cycle</strong>
            <p>Every delivery leads to the next.</p>
          </div>

          <ol
            aria-label="Freight cycle, repeated after each delivery"
            className="trato-journey__road"
          >
            {roadMoments.map((moment, index) => (
              <li
                key={moment.id}
                style={
                  {
                    "--moment-x": moment.x,
                    "--moment-y": moment.y,
                  } as CSSProperties
                }
              >
                {momentButton(moment, index)}
              </li>
            ))}
          </ol>
          <p className="trato-journey__repeat">↻ Back to finding freight</p>

          <div className="trato-journey__disruption">
            <span className="trato-journey__branch-label">
              A branch during travel
            </span>
            {momentButton(TRATO_JOURNEY_MOMENTS[8])}
          </div>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              animate={{ height: "auto", opacity: 1 }}
              className="trato-journey__reveal"
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
              transition={{
                duration: reducedMotion ? 0 : 0.3,
                ease: "easeInOut",
              }}
            >
              <div
                aria-atomic="true"
                aria-live="polite"
                className="trato-journey__detail"
                id={panelId}
                tabIndex={-1}
              >
                <div className="trato-journey__detail-title">
                  <button
                    aria-label="Close moment details"
                    className="trato-journey__close"
                    type="button"
                    onClick={() => setMomentId(null)}
                  >
                    ×
                  </button>
                  <p className="trato-journey__eyebrow">{selected.context}</p>
                  <h3 id={headingId}>{selected.label}</h3>
                  <ul
                    aria-label="Mapped service opportunities"
                    className="trato-journey__service-list"
                  >
                    {TRATO_SERVICES.filter(({ id }) =>
                      selected.services.includes(id),
                    ).map(({ id, label, color }) => (
                      <li
                        key={id}
                        style={{ "--journey-service": color } as CSSProperties}
                      >
                        <i aria-hidden="true" />
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  aria-labelledby={headingId}
                  className="trato-journey__detail-copy"
                >
                  <div>
                    <h4>The driver’s need</h4>
                    <p>{selected.need}</p>
                  </div>
                  <div>
                    <h4>The design opportunity</h4>
                    <p>{selected.opportunity}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="trato-journey__off-road">
          <div className="trato-journey__off-road-heading">
            <h3>Time “off” the road</h3>
            <p>
              Between deliveries. These moments overlap; they are not a
              sequence.
            </p>
          </div>
          <ul
            aria-label="Life off the road"
            className="trato-journey__off-road-moments"
          >
            {offRoadMoments.map((moment) => (
              <li key={moment.id}>{momentButton(moment)}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="trato-journey__caption">
        Interactive adaptation of the project’s journey and service map.
        Connections represent service opportunities, not a list of launched
        features.
      </p>
    </div>
  );
}
