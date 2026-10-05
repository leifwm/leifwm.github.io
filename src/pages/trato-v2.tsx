import type { CSSProperties, ReactNode } from "react";

import { useEffect, useState } from "react";

import TratoJourney from "@/components/trato-journey";
import { portfolioColors } from "@/components/primitives";
import { assetUrl, routeUrl } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import "@/styles/trato-v2.css";

const chapters = [
  { id: "project", label: "The project" },
  { id: "role", label: "My role" },
  { id: "results", label: "Results" },
  { id: "research", label: "Research" },
  { id: "journey", label: "The journey" },
  { id: "concepts", label: "Concepts" },
  { id: "prototypes", label: "Prototypes" },
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
    title: "Trust traveled through the community.",
    finding:
      "Drivers turned to familiar WhatsApp groups for freight, advice and road information. An unfamiliar app had to earn that trust.",
    decision:
      "Build on existing habits through WhatsApp integration, peer reviews and clear information about providers.",
  },
  {
    number: "02",
    title: "Every trip carried uncertainty.",
    finding:
      "Thin margins, unpredictable repairs and the search for a return load made planning a constant concern.",
    decision:
      "Support the whole trip, connecting freight planning with fuel, maintenance and financial needs.",
  },
  {
    number: "03",
    title: "Information had to work on the road.",
    finding:
      "Fuel prices, service recommendations and route information were useful only when drivers could access and trust them.",
    decision:
      "Treat accurate information and offline access as core requirements of the service.",
  },
];

const demonstrations = [
  {
    id: "freight",
    label: "Freight search",
    status: "Prototype",
    title: "Help drivers judge the next load.",
    description:
      "A freight search experience for finding and evaluating opportunities before committing to a trip.",
    file: "Trato_Fretes_Prototipo.webm",
    poster: "freight-preview.jpg",
    walkthrough: [
      "Browse freight cards with origin, destination, cargo, distance, price and company ratings. Switch between one-way, return-trip and continuous freight options.",
      "Open an offer to inspect the carrier, payment methods and payment timing, vehicle requirements, reviews and a WhatsApp contact option.",
      "Compare an alternative carrier and select an offer to continue.",
    ],
    finding:
      "Participants wanted pickup location first, written comments alongside company ratings, and expected loading and unloading times.",
    implication:
      "Make the information needed to evaluate a load easier to find. Testing also showed that the proposition needed clearer differentiation from competitors.",
    summary:
      "Silent walkthrough of the freight-search prototype, showing how a driver explores available freight and its details.",
  },
  {
    id: "map",
    label: "Social map",
    status: "Prototype",
    title: "Bring knowledge from the road into view.",
    description:
      "A map concept bringing useful stops, services and community knowledge into the driver’s journey.",
    file: "Trato_Mapa_Prototipo.webm",
    poster: "map-preview.jpg",
    walkthrough: [
      "Follow a route with fuel stations marked along the way.",
      "Select a station to see its distance, rating, facilities and Trato fuel benefit.",
      "Expand the station details to compare listed and discounted fuel prices, read driver reviews and access directions.",
    ],
    finding:
      "Accurate fuel prices and offline access were central to the map’s usefulness. Drivers valued contributions from peers, provided the information was dependable.",
    implication:
      "Make information freshness visible and support access in areas with intermittent connectivity.",
    summary:
      "Silent walkthrough of the social-map prototype, demonstrating the exploration of locations and services along the road.",
  },
  {
    id: "tires",
    label: "Tire subscription",
    status: "Service concept",
    title: "Make a major expense easier to plan.",
    description:
      "A subscription proposition exploring more predictable access to tire replacement, demonstrated through a prototype.",
    file: "Trato_Prototipo_Assinatura_Pneu.webm",
    poster: "tires-preview.jpg",
    walkthrough: [
      "Choose preferred tire brands in the first step of the subscription flow.",
      "Specify tire characteristics, including rim size, profile and width.",
      "Compare plans showing the number of tires, monthly price and commitment duration before continuing.",
    ],
    finding:
      "Concept testing showed interest in planning tire purchases at a more accessible price, even with a commitment period and cancellation fee.",
    implication:
      "Develop the offer around predictable replacement costs and transparent terms. This finding concerns the service proposition, rather than the usability of this screen flow.",
    summary:
      "Silent prototype walkthrough illustrating the tire-subscription service concept and its offer.",
  },
];

export default function TratoV2Page() {
  const [activeChapter, setActiveChapter] = useState("project");

  useEffect(() => {
    const previousTitle = document.title;

    document.title = "Trato — Research & Service Design | Leif Magalhães";

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
          rootMargin: `-${topMargin}px 0px -${bottomMargin}px 0px`,
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
            aria-label="Case study chapters"
            className="trato-v2__chapter-nav"
          >
            <p className="trato-v2__nav-title">Contents</p>
            <div className="trato-v2__nav-items">
              <div className="trato-v2__nav-group">
                <p className="trato-v2__nav-label">Overview</p>
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
                <p className="trato-v2__nav-label">In depth</p>
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
              <a href={routeUrl("/#projects")}>← All projects</a>
            </div>

            <header className="trato-v2__hero trato-v2__wrap" id="project">
              <div className="trato-v2__hero-copy">
                <p className="trato-v2__eyebrow">
                  VLI / Trato · Service & product design
                </p>
                <h1>
                  Beyond the
                  <br />
                  next cargo.
                </h1>
                <p className="trato-v2__lead">
                  Expanding a freight app into a service vision for life on the
                  road.
                </p>
                <p>
                  Trato began as VLI’s pilot app connecting truck drivers with
                  its logistics infrastructure. As the team explored expansion,
                  we asked how it could support drivers across more of their
                  working lives.
                </p>
              </div>
              <figure className="trato-v2__cover">
                <img
                  alt="A Trato-branded truck on a highway at sunset"
                  fetchPriority="high"
                  height={1144}
                  src={assetUrl("/assets/img/trato_imgs/trato_cover.jpg")}
                  width={2036}
                />
              </figure>
            </header>

            <section className="trato-v2__section trato-v2__wrap" id="role">
              <SectionHeading
                eyebrow="01 / My role"
                title="From understanding drivers to shaping the service."
              />
              <div className="trato-v2__role">
                <div>
                  <h3>
                    Lead Researcher
                    <br />& Junior Product Designer
                  </h3>
                  <p>
                    I led the research and worked with a product designer to
                    turn what we learned into concepts, prototypes and a service
                    roadmap.
                  </p>
                </div>
                <div>
                  <p className="trato-v2__label">I led</p>
                  <ul>
                    <li>Participant profiling and research planning</li>
                    <li>
                      Interviews, WhatsApp diaries and community observation
                    </li>
                    <li>Synthesis of behaviors, needs and opportunities</li>
                  </ul>
                </div>
                <div>
                  <p className="trato-v2__label">I co-created</p>
                  <ul>
                    <li>Service concepts and value-proposition tests</li>
                    <li>The journey map, flows and high-fidelity prototypes</li>
                    <li>Remote UX tests and a service roadmap</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="trato-v2__results" id="results">
              <div className="trato-v2__wrap trato-v2__results-grid">
                <div>
                  <SectionHeading
                    eyebrow="02 / Results"
                    title="A shared direction for Trato’s next chapter."
                  />
                  <p>
                    The project connected customer understanding to a broader
                    service strategy.
                  </p>
                  <ul className="trato-v2__deliverables">
                    <li>
                      <span>01</span>A service vision spanning six connected
                      areas
                    </li>
                    <li>
                      <span>02</span>Tested propositions and prototypes to
                      inform decisions
                    </li>
                    <li>
                      <span>03</span>A journey-based roadmap for future services
                    </li>
                  </ul>
                </div>
                <div className="trato-v2__outcome">
                  <p className="trato-v2__label">Later platform results</p>
                  <p className="trato-v2__metric">
                    1.4<span>million</span>
                  </p>
                  <p className="trato-v2__metric-label">
                    tonnes of road freight orchestrated through Trato
                  </p>
                  <p className="trato-v2__source-note">
                    VLI’s reported platform-wide results describe Trato’s
                    subsequent growth. The project’s direct contribution was the
                    research, service vision, concepts and roadmap.
                  </p>
                  <a
                    href="https://www.vli-logistica.com.br/inovacao/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Source: VLI’s innovation report ↗
                  </a>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="trato-deep-dive-title"
              className="trato-v2__deep-dive"
            >
              <p className="trato-v2__label">In depth / The full story</p>
              <h2 id="trato-deep-dive-title">Inside the project.</h2>
              <p>
                The research, decisions and explorations that shaped the
                service.
              </p>
            </section>

            <section className="trato-v2__section trato-v2__wrap" id="research">
              <SectionHeading
                eyebrow="03 / Research"
                title="Start with the people behind the freight."
              />
              <div className="trato-v2__research-intro">
                <figure>
                  <img
                    alt="A truck unloading agricultural cargo, illustrating the work around a freight journey"
                    loading="lazy"
                    src={assetUrl("/assets/img/trato_imgs/Truck1.jpg")}
                  />
                </figure>
                <div>
                  <div className="trato-v2__research-facts">
                    <div>
                      <strong>11</strong>
                      <span>drivers interviewed</span>
                    </div>
                    <div>
                      <strong>4 days</strong>
                      <span>of WhatsApp diaries</span>
                    </div>
                  </div>
                  <p>
                    I shaped participant profiles around cargo and vehicle
                    characteristics, tailored the interviews and diary prompts,
                    and observed driver communities.
                  </p>
                  <p>
                    We explored the practical realities of freight, money,
                    maintenance, safety and time away from home.
                  </p>
                  <details className="trato-v2__details">
                    <summary>Research approach and limitations</summary>
                    <p>
                      The study included eight agricultural-cargo drivers and
                      three ore drivers. Interviews, diaries and comparative
                      concept tests were conducted remotely during the pandemic.
                    </p>
                    <p>
                      Remote recruitment may have favored drivers already
                      comfortable with digital services. I organized and
                      cataloged the findings in Optimal Workshop.
                    </p>
                  </details>
                </div>
              </div>
              <div className="trato-v2__insight-statement">
                <p className="trato-v2__eyebrow">
                  The finding that changed the brief
                </p>
                <p>
                  For these drivers, freight apps were often{" "}
                  <em>plan&nbsp;B.</em>
                  <br />
                  Trusted relationships came first.
                </p>
                <span>
                  Research synthesis · WhatsApp was already part of the job.
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
                      <p className="trato-v2__label">Design direction</p>
                      <p>{insight.decision}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="trato-v2__journey-section" id="journey">
              <div className="trato-v2__wrap">
                <SectionHeading
                  eyebrow="04 / Mapping the opportunity"
                  title="One journey. Many moments of need."
                >
                  <p>
                    The journey connected freight with the rest of a driver’s
                    life: preparing, traveling, getting paid, maintaining the
                    truck and making time for home.
                  </p>
                </SectionHeading>
                <TratoJourney />
                <details className="trato-v2__details trato-v2__original-maps">
                  <summary>Explore the original journey maps</summary>
                  <div>
                    <figure>
                      <a
                        href={assetUrl(
                          "/assets/img/trato_imgs/journey_trato.jpg",
                        )}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          alt="Original Portuguese journey map: a recurring freight cycle with a road-problem branch and time-off activities"
                          loading="lazy"
                          src={assetUrl(
                            "/assets/img/trato_imgs/journey_trato.jpg",
                          )}
                        />
                      </a>
                    </figure>
                    <figure>
                      <a
                        href={assetUrl(
                          "/assets/img/trato_imgs/journey_trato2.jpg",
                        )}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          alt="Original journey with six colored service layers: tires, marketplace, finance, social map, fuel and freight"
                          loading="lazy"
                          src={assetUrl(
                            "/assets/img/trato_imgs/journey_trato2.jpg",
                          )}
                        />
                      </a>
                    </figure>
                  </div>
                </details>
              </div>
            </section>

            <section className="trato-v2__section trato-v2__wrap" id="concepts">
              <SectionHeading
                eyebrow="05 / Testing the value"
                title="Make the proposition concrete."
              >
                <p>
                  We used everyday scenarios to compare service offers with
                  drivers. Fuel benefits, financial services and tire
                  replacement became choices they could weigh against their own
                  routines.
                </p>
              </SectionHeading>
              <FuelComparison />
              <details className="trato-v2__details">
                <summary>View the original comparison cards</summary>
                <figure>
                  <a
                    href={assetUrl(
                      "/assets/img/trato_imgs/trato_service_concepts.jpg",
                    )}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="Portuguese concept-test cards comparing fuel benefits, financial services, insurance and ways to receive stop recommendations"
                      loading="lazy"
                      src={assetUrl(
                        "/assets/img/trato_imgs/trato_service_concepts.jpg",
                      )}
                    />
                  </a>
                </figure>
              </details>
            </section>

            <section className="trato-v2__prototype-section" id="prototypes">
              <div className="trato-v2__wrap">
                <SectionHeading
                  eyebrow="06 / Concepts & prototypes"
                  title="Bring the service into the driver’s hands."
                >
                  <p>
                    I co-created flows and high-fidelity prototypes in Adobe XD
                    and supported remote UX testing through Lookback. Each
                    exploration connected a service proposition to a concrete
                    experience.
                  </p>
                </SectionHeading>
                <PrototypeExplorer />
              </div>
            </section>

            <section className="trato-v2__section trato-v2__wrap trato-v2__closing">
              <SectionHeading
                eyebrow="07 / Bringing it together"
                title="A roadmap built around the driver."
              >
                <p>
                  We brought the research, journey and service propositions into
                  a shared direction for Trato Care: freight, fuel, tires,
                  financial services, a social map and a marketplace.
                </p>
              </SectionHeading>
              <div
                aria-label="Six experience principles"
                className="trato-v2__principles"
              >
                {[
                  "Belonging",
                  "Recognition",
                  "Transparency",
                  "Autonomy",
                  "Safety",
                  "Predictability",
                ].map((principle) => (
                  <span key={principle}>{principle}</span>
                ))}
              </div>
              <p className="trato-v2__reflection">
                The central lesson: a useful service had to fit the
                relationships, responsibilities and uncertainty drivers already
                navigated every day.
              </p>
              <div className="trato-v2__end-links">
                <a href={routeUrl("/#projects")}>Back to all projects →</a>
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
      <p className="trato-v2__label">Try a question from the research</p>
      <h3>
        You spend R$7,000 a month on fuel.
        <br />
        Which benefit would you choose?
      </h3>
      <div
        aria-label="Compare two fuel benefits"
        className="trato-v2__choices"
        role="group"
      >
        <button
          aria-pressed={choice === "cashback"}
          type="button"
          onClick={() => choose("cashback")}
        >
          <span className="trato-v2__label">Option A</span>
          <strong>4% cashback</strong>
          <span>
            Accumulates during the month.
            <br />
            Available to withdraw at month’s end.
          </span>
          <span className="trato-v2__choice-action">
            {choice === "cashback" ? "Selected ✓" : "Choose cashback →"}
          </span>
        </button>
        <button
          aria-pressed={choice === "discount"}
          type="button"
          onClick={() => choose("discount")}
        >
          <span className="trato-v2__label">Option B</span>
          <strong>2% discount</strong>
          <span>
            Applied immediately,
            <br />
            each time you refuel.
          </span>
          <span className="trato-v2__choice-action">
            {choice === "discount" ? "Selected ✓" : "Choose a discount →"}
          </span>
        </button>
      </div>
      <div aria-live="polite" className="trato-v2__comparison-result">
        {revealed ? (
          <>
            <p className="trato-v2__label">What the research revealed</p>
            <p>
              Participants prioritized the overall financial benefit, even when
              they had to wait to use it. The value of the offer mattered more
              than its format.
            </p>
            <p className="trato-v2__source-note">
              A qualitative finding across the fuel concept tests. Your
              selection is a way to explore the question and is not recorded.
            </p>
          </>
        ) : (
          <button
            className="trato-v2__text-link"
            type="button"
            onClick={() => setRevealed(true)}
          >
            See the research finding without choosing →
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
        aria-label="Choose a concept demonstration"
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
          <details
            key={`walkthrough-${demo.id}`}
            className="trato-v2__details trato-v2__walkthrough"
          >
            <summary>Read the video walkthrough</summary>
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
            Open video in a new tab ↗
          </a>
        </div>
        <div aria-live="polite" className="trato-v2__prototype-copy">
          <p className="trato-v2__eyebrow">{demo.status}</p>
          <h3>{demo.title}</h3>
          <p>{demo.description}</p>
          <div>
            <p className="trato-v2__label">What testing revealed</p>
            <p>{demo.finding}</p>
          </div>
          <div>
            <p className="trato-v2__label">Design direction</p>
            <p>{demo.implication}</p>
          </div>
          <p className="trato-v2__source-note">
            Project exploration · Demonstrates the proposed experience.
          </p>
        </div>
      </div>
    </div>
  );
}
