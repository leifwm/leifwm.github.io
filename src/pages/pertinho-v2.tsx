import cover from "../../assets/img/pertinho_imgs/cover_pertinho.jpg";
import traditional from "../../assets/img/pertinho_imgs/Persona_TraditionalSeller.JPG";
import entrepreneur from "../../assets/img/pertinho_imgs/Persona_Entrepreneur.JPG";
import established from "../../assets/img/pertinho_imgs/Persona_EstablishedBusiness.JPG";
import registration from "../../assets/img/pertinho_imgs/fluxo_cadastro.jpg";

import { t } from "@/i18n/locale";
import { PertinhoRoadmap } from "@/components/pertinho-roadmap";
import { VulnerableBusinessesChart } from "@/components/VulnerableBusinessesChart";
import {
  CaseExplorer,
  CaseFigure,
  CaseHeading,
  CaseSection,
  ProjectCaseStudy,
} from "@/components/project-case-study";

const chapters = [
  { id: "project", label: t("The project") },
  { id: "role", label: t("My role") },
  { id: "results", label: t("Results") },
  { id: "research", label: t("Research") },
  { id: "audiences", label: t("Business audiences") },
  { id: "insights", label: t("Service needs") },
  { id: "journey", label: t("Buying & selling") },
  { id: "roadmap", label: t("The roadmap") },
];
const audiences = [
  {
    title: t("The traditional seller"),
    description: t(
      "Zé runs a market stall with a routine built around neighborhoods and familiar customers. Most communication happens in person, with some orders arriving by phone or WhatsApp.",
    ),
    implication: t(
      "Make registration accessible and preserve the direct relationship with customers while introducing remote orders.",
    ),
    image: traditional,
  },
  {
    title: t("The digital entrepreneur"),
    description: t(
      "Marcos sells brownies through Instagram and WhatsApp. He manages production and promotion himself, delivering nearby orders by bicycle or coordinating a courier.",
    ),
    implication: t(
      "Help organize orders and delivery so an existing digital operation can grow without overwhelming its owner.",
    ),
    image: entrepreneur,
  },
  {
    title: t("The established physical business"),
    description: t(
      "Ayana has a restaurant and loyal customers, but limited experience selling online. A small team makes the prospect of handling more delivery orders intimidating.",
    ),
    implication: t(
      "Support a manageable transition with clear order information, operational guidance and flexible delivery.",
    ),
    image: established,
  },
];
const needs = [
  {
    title: t("Customer relationships"),
    description: t(
      "WhatsApp and Instagram already played an important role in communicating with customers and generating orders.",
    ),
    implication: t(
      "Build on familiar channels and give owners control over their customer relationships.",
    ),
  },
  {
    title: t("Delivery economics"),
    description: t(
      "Some owners paid couriers a daily fee before knowing how many deliveries they would receive. Others delivered orders themselves.",
    ),
    implication: t(
      "Explore flexible delivery arrangements and make delivery costs clear before an order is sent.",
    ),
  },
  {
    title: t("Demand and visibility"),
    description: t(
      "Food businesses still had demand despite reduced cash flow. Retailers selling non-essential products faced a more fundamental shortage of customers.",
    ),
    implication: t(
      "Begin with food and beverage businesses, then adapt the proposition as the service expands.",
    ),
  },
  {
    title: t("Operational support"),
    description: t(
      "Rapid adoption of WhatsApp and delivery added work: receiving orders, managing stock, preparing products and coordinating payments and couriers.",
    ),
    implication: t(
      "Help organize the whole order process and connect businesses with guidance and relevant suppliers.",
    ),
  },
];

export default function PertinhoV2Page() {
  return (
    <ProjectCaseStudy
      chapters={chapters}
      title={t("Pertinho de Casa — Research & Service Design")}
    >
      <header className="ser-case__hero" id="project">
        <div className="ser-case__hero-copy">
          <p className="ser-case__eyebrow">
            {t("Pertinho de Casa / Local commerce · 2020")}
          </p>
          <h1>
            {t("Keeping local")}
            <br />
            {t("businesses connected.")}
          </h1>
          <p className="ser-case__lead">
            {t(
              "Helping small businesses adapt when the pandemic changed how they reached their customers.",
            )}
          </p>
          <p>
            {t(
              "Physical stores lost foot traffic almost overnight. We researched how owners were adapting and shaped a service around local discovery, familiar digital behaviors and the practical work of selling remotely.",
            )}
          </p>
          <div className="ser-case__hero-meta">
            <span>{t("User research")}</span>
            <span>{t("Audience segmentation")}</span>
            <span>{t("Service design")}</span>
          </div>
        </div>
        <figure className="ser-case__cover">
          <img
            alt={t("Pertinho de Casa project cover")}
            fetchPriority="high"
            src={cover}
          />
          <figcaption>
            {t(
              "A service vision for neighborhood commerce during the COVID-19 crisis.",
            )}
          </figcaption>
        </figure>
      </header>
      <CaseSection
        eyebrow={t("01 / My role")}
        id="role"
        title={t("Understand the businesses. Shape the service.")}
      >
        <div className="ser-case__role">
          <div className="ser-case__reading">
            <h3>{t("Service design & user research")}</h3>
            <p>
              {t(
                "My work focused on understanding the changing needs of business owners and translating research into direction for the platform, including its initial audience and service proposition.",
              )}
            </p>
          </div>
          <div>
            <p className="ser-case__label">{t("Research")}</p>
            <ul>
              <li>{t("Market and audience analysis")}</li>
              <li>{t("Qualitative interviews with business owners")}</li>
              <li>{t("Segmentation and persona development")}</li>
            </ul>
          </div>
          <div>
            <p className="ser-case__label">{t("Service direction")}</p>
            <ul>
              <li>{t("Mapping needs and emerging behaviors")}</li>
              <li>{t("Validating the service proposition")}</li>
              <li>{t("Identifying platform opportunities")}</li>
            </ul>
          </div>
        </div>
      </CaseSection>
      <section className="ser-case__results" id="results">
        <CaseHeading
          eyebrow={t("02 / Results")}
          title={t("A focused starting point for a broader service.")}
        />
        <div className="ser-case__results-grid">
          <div>
            <p>
              {t(
                "The research defined an initial audience in food and beverage and clarified how the platform could support businesses with different levels of digital maturity.",
              )}
            </p>
            <ul className="ser-case__deliverables">
              <li>
                <span>01</span>
                {t(
                  "Three personas grounded in physical structure and digital maturity",
                )}
              </li>
              <li>
                <span>02</span>
                {t(
                  "Service opportunities spanning discovery, ordering and delivery",
                )}
              </li>
              <li>
                <span>03</span>
                {t(
                  "A roadmap across three releases for buyer and seller experiences",
                )}
              </li>
            </ul>
            <p className="ser-case__source-note">
              {t(
                "Project outputs from the 2020 research and service strategy. Proposed capabilities are presented as a roadmap.",
              )}
            </p>
          </div>
          <div className="ser-case__result-figures">
            <div>
              <strong>{t("14k+")}</strong>
              <span>{t("registered sellers reported in 2020")}</span>
            </div>
            <div>
              <strong>27</strong>
              <span>{t("Brazilian states reached, across 646 cities")}</span>
            </div>
            <p className="ser-case__source-note">
              {t("Source:")}{" "}
              <a
                href="https://faespsenar.com.br/wp-content/uploads/2022/05/RelatoriodeAtividades2020_FAESP-SENARSP.pdf"
                rel="noreferrer"
                target="_blank"
              >
                {t("FAESP–SENAR-SP 2020 activity report, p. 19")}
              </a>
              {t(
                ". Platform-wide reach provides context beyond my research contribution.",
              )}
            </p>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="pertinho-story"
        className="ser-case__chapter-break"
      >
        <p className="ser-case__eyebrow">{t("In depth / The full story")}</p>
        <h2 id="pertinho-story">{t("Meet businesses where they are.")}</h2>
        <p>
          {t(
            "How research into everyday commerce shaped the audience, buying experience and evolution of the service.",
          )}
        </p>
      </section>
      <CaseSection
        eyebrow={t("03 / Research")}
        id="research"
        title={t("Find a realistic starting point.")}
      >
        <div className="ser-case__reading">
          <p>
            {t(
              "The research included market-stall sellers, neighborhood grocers, retailers and businesses operating through Instagram. We explored how the loss of physical traffic affected demand, suppliers and the day-to-day work of fulfilling orders.",
            )}
          </p>
          <p>
            {t(
              "Food and beverage offered a practical initial focus: demand continued even when customers could no longer visit. That gave the service a starting audience while leaving room to support other categories.",
            )}
          </p>
        </div>
        <div className="project-case__figure">
          <VulnerableBusinessesChart />
        </div>
        <p className="ser-case__source-note">
          {t(
            "Historical market context reproduced in the 2020 phase-two summary; these figures are not platform results.",
          )}
        </p>
      </CaseSection>
      <CaseSection
        eyebrow={t("04 / Business audiences")}
        id="audiences"
        title={t("Different businesses needed different next steps.")}
      >
        <div className="ser-case__reading">
          <p>
            {t(
              "Industry alone could not explain what support an owner needed. Physical structure and digital maturity helped distinguish a street-market operation, a digital entrepreneur and an established store or restaurant.",
            )}
          </p>
        </div>
        <div className="project-case__figure">
          <CaseExplorer
            items={audiences}
            label={t("Explore the business personas")}
          />
        </div>
        <p className="ser-case__source-note">
          {t(
            "Personas are research synthesis, rather than individual participant profiles.",
          )}
        </p>
      </CaseSection>
      <CaseSection
        eyebrow={t("05 / Service needs")}
        id="insights"
        title={t("Selling online changed the work behind a sale.")}
      >
        <CaseExplorer items={needs} label={t("Explore the service needs")} />
        <blockquote className="project-case__quote">
          {t(
            "Helping a business receive orders also meant helping it manage the work those orders created.",
          )}
        </blockquote>
        <div className="project-case__cards">
          <div>
            <h3>{t("Practical guidance")}</h3>
            <p>
              {t(
                "Accessible support for adapting processes, using digital tools and coordinating a small team.",
              )}
            </p>
          </div>
          <div>
            <h3>{t("A business ecosystem")}</h3>
            <p>
              {t(
                "Connections to suppliers and services that could help owners keep their operation running.",
              )}
            </p>
          </div>
        </div>
      </CaseSection>
      <CaseSection
        eyebrow={t("06 / Buying & selling")}
        id="journey"
        title={t("Make the handoff between discovery and ordering clear.")}
      >
        <div className="ser-case__reading">
          <p>
            {t(
              "The June 2020 purchase-flow study explored finding a business, understanding its offer and sending an order through WhatsApp. Buyers looked for photos and reviews to establish trust and wanted delivery costs and payment information before completing an order.",
            )}
          </p>
          <p>
            {t(
              "The WhatsApp handoff raised questions about response time, phone-number privacy and whether the seller could understand the message. The study recommended making the handoff explicit and testing the order-message format with sellers.",
            )}
          </p>
        </div>
        <CaseFigure
          alt={t("Seller registration flow for Pertinho de Casa")}
          caption={t(
            "Seller onboarding covered category, location, contact details, payment methods, opening hours and catalog information.",
          )}
          src={registration}
        />
        <div className="project-case__cards">
          <div>
            <h3>{t("Before sending the order")}</h3>
            <p>
              {t(
                "Show a summary, delivery fee, confirmed address and payment method. Explain that the order will be sent through WhatsApp.",
              )}
            </p>
          </div>
          <div>
            <h3>{t("After the handoff")}</h3>
            <p>
              {t(
                "Explore how sellers accept and update orders, and how buyers receive clear, brief follow-up messages.",
              )}
            </p>
          </div>
        </div>
        <p className="ser-case__source-note">
          {t("Source: Pertinho purchase-flow study, June 4, 2020.")}
        </p>
      </CaseSection>
      <CaseSection
        eyebrow={t("07 / The roadmap")}
        id="roadmap"
        title={t("Build support as the service evolves.")}
      >
        <div className="project-case__cards">
          <div>
            <h3>{t("01 / Connect buyers and sellers")}</h3>
            <p>
              {t(
                "Help people discover local businesses and give owners an accessible place to register and share their offer.",
              )}
            </p>
          </div>
          <div>
            <h3>{t("02 / Organize the order")}</h3>
            <p>
              {t(
                "Improve visibility and confidence in the buying process while helping sellers manage incoming orders, preparation and fulfillment.",
              )}
            </p>
          </div>
          <div>
            <h3>{t("03 / Support the business")}</h3>
            <p>
              {t(
                "Develop a fuller commerce experience with tools that help businesses manage their transition and grow beyond the immediate crisis.",
              )}
            </p>
          </div>
        </div>
        <div className="project-case__figure">
          <PertinhoRoadmap />
        </div>
        <p className="ser-case__source-note">
          {t(
            "Sources: Pertinho de Casa phase-two summary and service-evolution materials, 2020.",
          )}
        </p>
      </CaseSection>
    </ProjectCaseStudy>
  );
}
