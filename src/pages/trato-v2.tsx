import type { CSSProperties, ReactNode } from "react";

import { useEffect, useState } from "react";

import { t } from "@/i18n/locale";
import TratoJourney from "@/components/trato-journey";
import { portfolioColors } from "@/components/primitives";
import { assetUrl, routeUrl } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { MediaZoom, ZoomableImage } from "@/components/zoomable-image";
import "@/styles/trato-v2.css";

const chapters = [
  { id: "project", label: t("The project") },
  { id: "role", label: t("My role") },
  { id: "results", label: t("Results") },
  { id: "research", label: t("Research") },
  { id: "journey", label: t("The journey") },
  { id: "concepts", label: t("Concepts") },
  { id: "prototypes", label: t("Prototypes") },
];

const paletteStyles = Object.fromEntries(
  Object.entries(portfolioColors).map(([name, color]) => [
    `--portfolio-${name}`,
    color,
  ]),
) as CSSProperties;

const researchInsights = [
  {
    number: "01",
    title: t("Trust traveled through the community."),
    finding: t(
      "Drivers turned to familiar WhatsApp groups for freight, advice and road information. An unfamiliar app had to earn that trust.",
    ),
    decision: t(
      "Build on existing habits through WhatsApp integration, peer reviews and clear information about providers.",
    ),
  },
  {
    number: "02",
    title: t("Every trip carried uncertainty."),
    finding: t(
      "Thin margins, unpredictable repairs and the search for a return load made planning a constant concern.",
    ),
    decision: t(
      "Support the whole trip, connecting freight planning with fuel, maintenance and financial needs.",
    ),
  },
  {
    number: "03",
    title: t("Information had to work on the road."),
    finding: t(
      "Fuel prices, service recommendations and route information were useful only when drivers could access and trust them.",
    ),
    decision: t(
      "Treat accurate information and offline access as core requirements of the service.",
    ),
  },
];

const demonstrations = [
  {
    id: "freight",
    label: t("Freight search"),
    status: t("Prototype"),
    title: t("Help drivers judge the next load."),
    description: t(
      "A freight search experience for finding and evaluating opportunities before committing to a trip.",
    ),
    file: "Trato_Fretes_Prototipo.webm",
    poster: "freight-preview.jpg",
    walkthrough: [
      t(
        "Browse freight cards with origin, destination, cargo, distance, price and company ratings. Switch between one-way, return-trip and continuous freight options.",
      ),
      t(
        "Open an offer to inspect the carrier, payment methods and payment timing, vehicle requirements, reviews and a WhatsApp contact option.",
      ),
      t("Compare an alternative carrier and select an offer to continue."),
    ],
    finding: t(
      "Participants wanted pickup location first, written comments alongside company ratings, and expected loading and unloading times.",
    ),
    implication: t(
      "Make the information needed to evaluate a load easier to find. Testing also showed that the proposition needed clearer differentiation from competitors.",
    ),
    summary: t(
      "Silent walkthrough of the freight-search prototype, showing how a driver explores available freight and its details.",
    ),
  },
  {
    id: "map",
    label: t("Social map"),
    status: t("Prototype"),
    title: t("Bring knowledge from the road into view."),
    description: t(
      "A map concept bringing useful stops, services and community knowledge into the driver’s journey.",
    ),
    file: "Trato_Mapa_Prototipo.webm",
    poster: "map-preview.jpg",
    walkthrough: [
      t("Follow a route with fuel stations marked along the way."),
      t(
        "Select a station to see its distance, rating, facilities and Trato fuel benefit.",
      ),
      t(
        "Expand the station details to compare listed and discounted fuel prices, read driver reviews and access directions.",
      ),
    ],
    finding: t(
      "Accurate fuel prices and offline access were central to the map’s usefulness. Drivers valued contributions from peers, provided the information was dependable.",
    ),
    implication: t(
      "Make information freshness visible and support access in areas with intermittent connectivity.",
    ),
    summary: t(
      "Silent walkthrough of the social-map prototype, demonstrating the exploration of locations and services along the road.",
    ),
  },
  {
    id: "tires",
    label: t("Tire subscription"),
    status: t("Service concept"),
    title: t("Make a major expense easier to plan."),
    description: t(
      "A subscription proposition exploring more predictable access to tire replacement, demonstrated through a prototype.",
    ),
    file: "Trato_Prototipo_Assinatura_Pneu.webm",
    poster: "tires-preview.jpg",
    walkthrough: [
      t(
        "Choose preferred tire brands in the first step of the subscription flow.",
      ),
      t("Specify tire characteristics, including rim size, profile and width."),
      t(
        "Compare plans showing the number of tires, monthly price and commitment duration before continuing.",
      ),
    ],
    finding: t(
      "Concept testing showed interest in planning tire purchases at a more accessible price, even with a commitment period and cancellation fee.",
    ),
    implication: t(
      "Develop the offer around predictable replacement costs and transparent terms. This finding concerns the service proposition, rather than the usability of this screen flow.",
    ),
    summary: t(
      "Silent prototype walkthrough illustrating the tire-subscription service concept and its offer.",
    ),
  },
];

export default function TratoV2Page() {
  const [activeChapter, setActiveChapter] = useState("project");

  useEffect(() => {
    const previousTitle = document.title;

    document.title = t("Trato — Research & Service Design | Leif Magalhães");

    let observer: IntersectionObserver;

    const observeChapters = () => {
      observer?.disconnect();

      // Percentage root margins use viewport width, including vertical margins.
      const topMargin = Math.round(window.innerHeight * 0.2);
      const bottomMargin = Math.round(window.innerHeight * 0.6);

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.find((entry) => entry.isIntersecting);

          if (visible) setActiveChapter(visible.target.id);
        },
        {
          rootMargin: t("-{0}px 0px -{1}px 0px", [topMargin, bottomMargin]),
          threshold: 0,
        },
      );

      chapters.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section) observer.observe(section);
      });
    };

    observeChapters();
    window.addEventListener("resize", observeChapters);

    return () => {
      document.title = previousTitle;
      window.removeEventListener("resize", observeChapters);
      observer.disconnect();
    };
  }, []);

  return (
    <DefaultLayout>
      <article className="trato-v2" style={paletteStyles}>
        <div className="trato-v2__layout">
          <nav
            aria-label={t("Case study chapters")}
            className="trato-v2__chapter-nav"
          >
            <p className="trato-v2__nav-title">{t("Contents")}</p>
            <div className="trato-v2__nav-items">
              <div className="trato-v2__nav-group">
                <p className="trato-v2__nav-label">{t("Overview")}</p>
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
              <hr className="trato-v2__nav-separator" />
              <div className="trato-v2__nav-group">
                <p className="trato-v2__nav-label">{t("In depth")}</p>
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
          <div className="trato-v2__content">
            <div className="trato-v2__version trato-v2__wrap">
              <a href={routeUrl("/#projects")}>{t("← All projects")}</a>
            </div>

            <header className="trato-v2__hero trato-v2__wrap" id="project">
              <div className="trato-v2__hero-copy">
                <p className="trato-v2__eyebrow">
                  {t("VLI / Trato · Service & product design")}
                </p>
                <h1>
                  {t("Beyond the")}
                  <br />
                  {t("next cargo.")}
                </h1>
                <p className="trato-v2__lead">
                  {t(
                    "Expanding a freight app into a service vision for life on the road.",
                  )}
                </p>
                <p>
                  {t(
                    "Trato began as VLI’s pilot app connecting truck drivers with its logistics infrastructure. As the team explored expansion, we asked how it could support drivers across more of their working lives.",
                  )}
                </p>
              </div>
              <figure className="trato-v2__cover">
                <img
                  alt={t("A Trato-branded truck on a highway at sunset")}
                  fetchPriority="high"
                  height={1144}
                  src={assetUrl("/assets/img/trato_imgs/trato_cover.jpg")}
                  width={2036}
                />
              </figure>
            </header>

            <section className="trato-v2__section trato-v2__wrap" id="role">
              <SectionHeading
                eyebrow={t("01 / My role")}
                title={t("From understanding drivers to shaping the service.")}
              />
              <div className="trato-v2__role">
                <div>
                  <h3>
                    {t("Lead Researcher")}
                    <br />
                    {t("& Junior Product Designer")}
                  </h3>
                  <p>
                    {t(
                      "I led the research and worked with a product designer to turn what we learned into concepts, prototypes and a service roadmap.",
                    )}
                  </p>
                </div>
                <div>
                  <p className="trato-v2__label">{t("I led")}</p>
                  <ul>
                    <li>{t("Participant profiling and research planning")}</li>
                    <li>
                      {t(
                        "Interviews, WhatsApp diaries and community observation",
                      )}
                    </li>
                    <li>
                      {t("Synthesis of behaviors, needs and opportunities")}
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="trato-v2__label">{t("I co-created")}</p>
                  <ul>
                    <li>{t("Service concepts and value-proposition tests")}</li>
                    <li>
                      {t("The journey map, flows and high-fidelity prototypes")}
                    </li>
                    <li>{t("Remote UX tests and a service roadmap")}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="trato-v2__results" id="results">
              <div className="trato-v2__wrap trato-v2__results-grid">
                <div>
                  <SectionHeading
                    eyebrow={t("02 / Results")}
                    title={t("A shared direction for Trato’s next chapter.")}
                  />
                  <p>
                    {t(
                      "The project connected customer understanding to a broader service strategy.",
                    )}
                  </p>
                  <ul className="trato-v2__deliverables">
                    <li>
                      <span>01</span>
                      {t("A service vision spanning six connected areas")}
                    </li>
                    <li>
                      <span>02</span>
                      {t(
                        "Tested propositions and prototypes to inform decisions",
                      )}
                    </li>
                    <li>
                      <span>03</span>
                      {t("A journey-based roadmap for future services")}
                    </li>
                  </ul>
                </div>
                <div className="trato-v2__outcome">
                  <p className="trato-v2__label">
                    {t("Later platform results")}
                  </p>
                  <p className="trato-v2__metric">
                    1.4<span>{t("million")}</span>
                  </p>
                  <p className="trato-v2__metric-label">
                    {t("tonnes of road freight orchestrated through Trato")}
                  </p>
                  <p className="trato-v2__source-note">
                    {t(
                      "VLI’s reported platform-wide results describe Trato’s subsequent growth. The project’s direct contribution was the research, service vision, concepts and roadmap.",
                    )}
                  </p>
                  <a
                    href="https://www.vli-logistica.com.br/inovacao/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {t("Source: VLI’s innovation report ↗")}
                  </a>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="trato-deep-dive-title"
              className="trato-v2__deep-dive"
            >
              <p className="trato-v2__label">
                {t("In depth / The full story")}
              </p>
              <h2 id="trato-deep-dive-title">{t("Inside the project.")}</h2>
              <p>
                {t(
                  "The research, decisions and explorations that shaped the service.",
                )}
              </p>
            </section>

            <section className="trato-v2__section trato-v2__wrap" id="research">
              <SectionHeading
                eyebrow={t("03 / Research")}
                title={t("Start with the people behind the freight.")}
              />
              <div className="trato-v2__research-intro">
                <figure>
                  <img
                    alt={t(
                      "A truck unloading agricultural cargo, illustrating the work around a freight journey",
                    )}
                    loading="lazy"
                    src={assetUrl("/assets/img/trato_imgs/Truck1.jpg")}
                  />
                </figure>
                <div>
                  <div className="trato-v2__research-facts">
                    <div>
                      <strong>11</strong>
                      <span>{t("drivers interviewed")}</span>
                    </div>
                    <div>
                      <strong>{t("4 days")}</strong>
                      <span>{t("of WhatsApp diaries")}</span>
                    </div>
                  </div>
                  <p>
                    {t(
                      "I shaped participant profiles around cargo and vehicle characteristics, tailored the interviews and diary prompts, and observed driver communities.",
                    )}
                  </p>
                  <p>
                    {t(
                      "We explored the practical realities of freight, money, maintenance, safety and time away from home.",
                    )}
                  </p>
                  <details className="trato-v2__details">
                    <summary>{t("Research approach and limitations")}</summary>
                    <p>
                      {t(
                        "The study included eight agricultural-cargo drivers and three ore drivers. Interviews, diaries and comparative concept tests were conducted remotely during the pandemic.",
                      )}
                    </p>
                    <p>
                      {t(
                        "Remote recruitment may have favored drivers already comfortable with digital services. I organized and cataloged the findings in Optimal Workshop.",
                      )}
                    </p>
                  </details>
                </div>
              </div>
              <div className="trato-v2__insight-statement">
                <p className="trato-v2__eyebrow">
                  {t("The finding that changed the brief")}
                </p>
                <p>
                  {t("For these drivers, freight apps were often")}{" "}
                  <em>{t("plan&nbsp;B.")}</em>
                  <br />
                  {t("Trusted relationships came first.")}
                </p>
                <span>
                  {t(
                    "Research synthesis · WhatsApp was already part of the job.",
                  )}
                </span>
              </div>
              <div className="trato-v2__insights">
                {researchInsights.map((insight) => (
                  <div key={insight.number} className="trato-v2__insight">
                    <span className="trato-v2__insight-number">
                      {insight.number}
                    </span>
                    <div>
                      <h3>{insight.title}</h3>
                      <p>{insight.finding}</p>
                    </div>
                    <div>
                      <p className="trato-v2__label">{t("Design direction")}</p>
                      <p>{insight.decision}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="trato-v2__journey-section" id="journey">
              <div className="trato-v2__wrap">
                <SectionHeading
                  eyebrow={t("04 / Mapping the opportunity")}
                  title={t("One journey. Many moments of need.")}
                >
                  <p>
                    {t(
                      "The journey connected freight with the rest of a driver’s life: preparing, traveling, getting paid, maintaining the truck and making time for home.",
                    )}
                  </p>
                </SectionHeading>
                <TratoJourney />
                <details className="trato-v2__details trato-v2__original-maps">
                  <summary>{t("Explore the original journey maps")}</summary>
                  <div>
                    <figure>
                      <ZoomableImage
                        alt={t(
                          "Original Portuguese journey map: a recurring freight cycle with a road-problem branch and time-off activities",
                        )}
                        src={assetUrl(
                          "/assets/img/trato_imgs/journey_trato.jpg",
                        )}
                      />
                    </figure>
                    <figure>
                      <ZoomableImage
                        alt={t(
                          "Original journey with six colored service layers: tires, marketplace, finance, social map, fuel and freight",
                        )}
                        src={assetUrl(
                          "/assets/img/trato_imgs/journey_trato2.jpg",
                        )}
                      />
                    </figure>
                  </div>
                </details>
              </div>
            </section>

            <section className="trato-v2__section trato-v2__wrap" id="concepts">
              <SectionHeading
                eyebrow={t("05 / Testing the value")}
                title={t("Make the proposition concrete.")}
              >
                <p>
                  {t(
                    "We used everyday scenarios to compare service offers with drivers. Fuel benefits, financial services and tire replacement became choices they could weigh against their own routines.",
                  )}
                </p>
              </SectionHeading>
              <FuelComparison />
              <details className="trato-v2__details">
                <summary>{t("View the original comparison cards")}</summary>
                <figure>
                  <ZoomableImage
                    alt={t(
                      "Portuguese concept-test cards comparing fuel benefits, financial services, insurance and ways to receive stop recommendations",
                    )}
                    src={assetUrl(
                      "/assets/img/trato_imgs/trato_service_concepts.jpg",
                    )}
                  />
                </figure>
              </details>
            </section>

            <section className="trato-v2__prototype-section" id="prototypes">
              <div className="trato-v2__wrap">
                <SectionHeading
                  eyebrow={t("06 / Concepts & prototypes")}
                  title={t("Bring the service into the driver’s hands.")}
                >
                  <p>
                    {t(
                      "I co-created flows and high-fidelity prototypes in Adobe XD and supported remote UX testing through Lookback. Each exploration connected a service proposition to a concrete experience.",
                    )}
                  </p>
                </SectionHeading>
                <PrototypeExplorer />
              </div>
            </section>

            <section className="trato-v2__section trato-v2__wrap trato-v2__closing">
              <SectionHeading
                eyebrow={t("07 / Bringing it together")}
                title={t("A roadmap built around the driver.")}
              >
                <p>
                  {t(
                    "We brought the research, journey and service propositions into a shared direction for Trato Care: freight, fuel, tires, financial services, a social map and a marketplace.",
                  )}
                </p>
              </SectionHeading>
              <div
                aria-label={t("Six experience principles")}
                className="trato-v2__principles"
              >
                {[
                  t("Belonging"),
                  t("Recognition"),
                  t("Transparency"),
                  t("Autonomy"),
                  t("Safety"),
                  t("Predictability"),
                ].map((principle) => (
                  <span key={principle}>{principle}</span>
                ))}
              </div>
              <p className="trato-v2__reflection">
                {t(
                  "The central lesson: a useful service had to fit the relationships, responsibilities and uncertainty drivers already navigated every day.",
                )}
              </p>
              <div className="trato-v2__end-links">
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

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="trato-v2__section-heading">
      <p className="trato-v2__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function FuelComparison() {
  const [choice, setChoice] = useState<"cashback" | "discount" | null>(null);
  const [revealed, setRevealed] = useState(false);

  function choose(value: "cashback" | "discount") {
    setChoice(value);
    setRevealed(true);
  }

  return (
    <div className="trato-v2__comparison">
      <p className="trato-v2__label">{t("Try a question from the research")}</p>
      <h3>
        {t("You spend R$7,000 a month on fuel.")}
        <br />
        {t("Which benefit would you choose?")}
      </h3>
      <div
        aria-label={t("Compare two fuel benefits")}
        className="trato-v2__choices"
        role="group"
      >
        <button
          aria-pressed={choice === "cashback"}
          type="button"
          onClick={() => choose("cashback")}
        >
          <span className="trato-v2__label">{t("Option A")}</span>
          <strong>{t("4% cashback")}</strong>
          <span>
            {t("Accumulates during the month.")}
            <br />
            {t("Available to withdraw at month’s end.")}
          </span>
          <span className="trato-v2__choice-action">
            {choice === "cashback" ? t("Selected ✓") : t("Choose cashback →")}
          </span>
        </button>
        <button
          aria-pressed={choice === "discount"}
          type="button"
          onClick={() => choose("discount")}
        >
          <span className="trato-v2__label">{t("Option B")}</span>
          <strong>{t("2% discount")}</strong>
          <span>
            {t("Applied immediately,")}
            <br />
            {t("each time you refuel.")}
          </span>
          <span className="trato-v2__choice-action">
            {choice === "discount" ? t("Selected ✓") : t("Choose a discount →")}
          </span>
        </button>
      </div>
      <div aria-live="polite" className="trato-v2__comparison-result">
        {revealed ? (
          <>
            <p className="trato-v2__label">{t("What the research revealed")}</p>
            <p>
              {t(
                "Participants prioritized the overall financial benefit, even when they had to wait to use it. The value of the offer mattered more than its format.",
              )}
            </p>
            <p className="trato-v2__source-note">
              {t(
                "A qualitative finding across the fuel concept tests. Your selection is a way to explore the question and is not recorded.",
              )}
            </p>
          </>
        ) : (
          <button
            className="trato-v2__text-link"
            type="button"
            onClick={() => setRevealed(true)}
          >
            {t("See the research finding without choosing →")}
          </button>
        )}
      </div>
    </div>
  );
}

function PrototypeExplorer() {
  const [selected, setSelected] = useState(0);
  const demo = demonstrations[selected];

  return (
    <div className="trato-v2__prototype-explorer">
      <div
        aria-label={t("Choose a concept demonstration")}
        className="trato-v2__prototype-controls"
        role="group"
      >
        {demonstrations.map((item, index) => (
          <button
            key={item.id}
            aria-controls="trato-demo-panel"
            aria-pressed={selected === index}
            type="button"
            onClick={() => setSelected(index)}
          >
            <span>0{index + 1}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div className="trato-v2__prototype-grid" id="trato-demo-panel">
        <div className="trato-v2__video-stage">
          <video
            key={`video-${demo.id}`}
            controls
            muted
            playsInline
            aria-describedby="trato-video-summary"
            aria-label={`${demo.label} demonstration`}
            poster={assetUrl(`/assets/img/trato_imgs/${demo.poster}`)}
            preload="metadata"
            src={assetUrl(`/assets/img/trato_imgs/${demo.file}`)}
          />
          <p id="trato-video-summary">{demo.summary}</p>
          <MediaZoom
            video
            alt={demo.label}
            src={assetUrl(`/assets/img/trato_imgs/${demo.file}`)}
          />
          <details
            key={`walkthrough-${demo.id}`}
            className="trato-v2__details trato-v2__walkthrough"
          >
            <summary>{t("Read the video walkthrough")}</summary>
            <ol>
              {demo.walkthrough.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </details>
          <a
            href={assetUrl(`/assets/img/trato_imgs/${demo.file}`)}
            rel="noreferrer"
            target="_blank"
          >
            {t("Open video in a new tab ↗")}
          </a>
        </div>
        <div aria-live="polite" className="trato-v2__prototype-copy">
          <p className="trato-v2__eyebrow">{demo.status}</p>
          <h3>{demo.title}</h3>
          <p>{demo.description}</p>
          <div>
            <p className="trato-v2__label">{t("What testing revealed")}</p>
            <p>{demo.finding}</p>
          </div>
          <div>
            <p className="trato-v2__label">{t("Design direction")}</p>
            <p>{demo.implication}</p>
          </div>
          <p className="trato-v2__source-note">
            {t("Project exploration · Demonstrates the proposed experience.")}
          </p>
        </div>
      </div>
    </div>
  );
}
