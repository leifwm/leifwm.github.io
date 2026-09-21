"use client";

import React from "react";
import DefaultLayout from "@/layouts/default";
import { assetUrl } from "@/config/site";
import serCoverImage from "../../assets/img/serdigital_imgs/ser_cover.jpg";
import serResultsImage from "../../assets/img/serdigital_imgs/ser-resultados.png";

const studentMindsets = [
  {
    title: "Enthusiast",
    description:
      "Understands what they want to study and is in college to learn and grow both professionally and personally. Has a personal desire to specialize in specific subjects.",
    position: "top-left",
  },
  {
    title: "Pratical",
    description:
      "Is pursuing an undergraduate degree with the goal of external rewards, such as employment, promotions, résumé building, recognition, among others. Not necessarily interested in the learning itself, but in what can be gained from it.",
    position: "top-right",
  },
  {
    title: "Instinctive",
    description:
      "Has only a superficial understanding of what pursuing a degree means and why to pursue it. Enrolls based on instinct, but may show disinterest in initiatives that are not aligned with their initial expectations.",
    position: "bottom-left",
  },
  {
    title: "Apathetic",
    description:
      "Will pursue a degree due to social pressure, whether from family obligation or a ‘social contract.’ For many, after graduating from high school, college seems to be the natural next step, even if they don’t really know why.",
    position: "bottom-right",
  },
];

const experienceLayers = [
  {
    number: "01",
    title: "Maintain tranquility",
    description:
      "Remove unnecessary friction and create a reliable foundation so students can focus on studying and building their lives.",
  },
  {
    number: "02",
    title: "Enhance development",
    description:
      "Create a stronger and more consistent learning experience that helps students develop academically and personally.",
  },
  {
    number: "03",
    title: "Guide their path",
    description:
      "Offer differentiated services and support that respond to students' contexts, ambitions, and evolving needs.",
  },
  {
    number: "04",
    title: "Foster community",
    description:
      "Create stronger connections between students, alumni, institutions, and the broader educational ecosystem.",
  },
];

const serviceAreas = [
  {
    title: "Academic experience",
    description:
      "A more coherent foundation for navigating academic life and accessing essential information.",
  },
  {
    title: "Student support",
    description:
      "Simpler, more transparent ways for students to resolve problems and access help.",
  },
  {
    title: "Personalized journeys",
    description:
      "Experiences that can adapt to different student contexts and moments in their journey.",
  },
  {
    title: "Career & employability",
    description:
      "Services that help students connect their education with professional opportunities.",
  },
  {
    title: "Community",
    description:
      "Stronger connections between students, organizations, alumni, and shared interests.",
  },
  {
    title: "Beyond the classroom",
    description:
      "Events, innovation, extracurricular activities, and experiences that expand the value of university.",
  },
];

const prioritizationCriteria = [
  {
    title: "Value for the student",
    description: "How meaningfully could this improve the student experience?",
  },
  {
    title: "Value for the business",
    description: "How does this contribute to strategic and organizational goals?",
  },
  {
    title: "Technical complexity",
    description: "What technological effort and dependencies are required?",
  },
  {
    title: "Operational complexity",
    description: "What changes to processes and teams are needed?",
  },
  {
    title: "Business-model complexity",
    description: "What new capabilities or ways of operating would this require?",
  },
];

export default function SerDigitalCaseStudy() {
  return (
    <DefaultLayout>
      <main className="case-study">
      {/* Hero */}
      <header className="case-study__header">
        <p className="case-study__eyebrow">
          Service Design · Experience Strategy
        </p>

        <h1 className="case-study__title">
          Ser Digital
        </h1>

        <p className="case-study__lead">
          Designing a connected university experience beyond the classroom.
        </p>

        <div className="case-study__question">
          <p>
            How might we transform a university experience from a collection of
            disconnected services into a meaningful relationship that supports
            students throughout their journey?
          </p>
        </div>
      </header>
      <img
        src={serCoverImage}
        alt="Photo by Vinicius Amano on Unsplash"
        className="mb-6 rounded-lg"
      />
      {/* Overview */}
      <Section title="Overview">
        <p>
          Ser Digital explored how the university experience could evolve around
          students' changing needs, connecting customer experience, technology,
          innovation, and organizational transformation.
        </p>

        <p>
          This was not a project about designing a single product. The challenge
          was to define how an entire ecosystem of services could work together
          to create a more coherent and meaningful relationship with students.
        </p>
      </Section>

      {/* Challenge */}
      <Section title="The challenge">
        <p>
          A student's university experience is much bigger than attending
          classes.
        </p>

        <Quote>
          But the services supporting that experience don't always feel like one
          connected journey.
        </Quote>

        <p>
          Students navigate academic, administrative, financial, professional,
          and social aspects of university throughout their lives as students.
          Each of these moments can involve different processes, teams, and
          channels.
        </p>

        <p>
          The challenge was to understand the factors that negatively impacted 
          student experiences and led to dropout. The goal was to move beyond 
          isolated improvements and establish a coherent experience strategy that could guide future services and investments across the ecosystem.
        </p>
      </Section>

      {/* Role */}
      <Section title="My role">
  <div className="rounded-lg border border-default-200 p-6">
    <h3 className="font-semibold">
      Service Design / Experience Strategy / Research Leadership
    </h3>

    <p className="mt-3 text-default-600">
      I led the research team throughout the creation, execution, and synthesis
      of the research, while contributing to translating the findings and
      strategic direction into a coherent vision for the future student
      experience.
    </p>

    <div className="mt-6 grid gap-2 text-default-600 sm:grid-cols-2">
      <span>— Research planning & design</span>
      <span>— Research team leadership</span>
      <span>— Research execution</span>
      <span>— Research synthesis</span>
      <span>— Student segmentation</span>
      <span>— Experience strategy</span>
      <span>— Opportunity definition</span>
      <span>— Service ecosystem design</span>
      <span>— Initiative prioritization</span>
    </div>
  </div>
</Section>

      {/* Student understanding */}
      <Section title="Students don't all experience university in the same way">
        <p>
          A key part of the work was recognizing that the student population
          could not be treated as a single audience.
        </p>

        <p>
          Students arrive with different motivations, levels of direction, and
          expectations about what university should help them achieve.
        </p>

        <StudentMindsetMatrix />

        <p>
          This gave us a more useful lens for thinking about experience design:
          rather than asking what a generic student needs, we could consider how
          different relationships with education might require different kinds of
          support.
        </p>
        <img src={assetUrl("/assets/img/serdigital_imgs/personas.png")} alt="Student Personas" className="mb-6 rounded-lg" />
      </Section>

      {/* Strategy */}
      <Section title="From individual needs to an experience strategy">
        <p>
          The research and strategic work were synthesized into four
          progressively broader layers of value.
        </p>

        <p>
          Together, they created a framework for thinking about the evolution of
          the student experience—from making essential interactions work better
          to building a broader sense of connection and belonging.
        </p>

        <ExperienceStrategy />

        <Quote>
          A great experience starts with doing the basics well.
        </Quote>
      </Section>

      {/* Ecosystem */}
      <Section title="Turning strategy into services">
        <p>
          The strategy was designed to guide a portfolio of initiatives rather
          than prescribe a single solution.
        </p>

        <p>
          Foundational improvements could make everyday university life easier,
          while new services could expand the relationship into areas such as
          career, community, development, and life beyond the classroom.
        </p>
        <ServiceEcosystem />
        <img src={assetUrl("/assets/img/serdigital_imgs/journey_to_be.jpg")} alt="Student Personas" className="mb-6 rounded-lg"/>
      </Section>

      {/* Example */}
      <Section title="Building a stronger foundation first">
        <p>
          Experience transformation needed to begin with the basics. Before
          introducing new forms of value, students needed a simpler and more
          reliable way to manage their everyday university lives.
        </p>

        <p>
          This included opportunities to create more unified access to academic
          information, simplify service requests, improve support, and evolve
          the mobile and digital experience.
        </p>

        <img src={assetUrl("/assets/img/serdigital_imgs/roadmap.jpg")} alt="Student Personas" className="mb-6 rounded-lg"/>
      </Section>

      {/* Prioritization */}
      <Section title="Prioritizing transformation">
        <p>
          A large experience vision creates a large opportunity space. Not every
          initiative can happen at once.
        </p>

        <p>
          To help move from strategy to action, initiatives were evaluated across
          multiple dimensions of value and complexity.
        </p>

        <PrioritizationFramework />

        <p>
          This helped distinguish foundational initiatives from longer-term
          opportunities and created a clearer path for implementation.
        </p>
        <img src={assetUrl("/assets/img/serdigital_imgs/priority_matrix.jpg")} alt="Student Personas" className="mb-6 rounded-lg"/>

      </Section>

      {/* Outcome */}
      <Section title="Outcome">
        <p>
          The project established a strategic framework and roadmap for evolving
          the student experience across the university ecosystem.
        </p>

        <ul className="space-y-3 text-default-600">
          <li>— Created a shared vision for the future student experience</li>
          <li>— Connected different student needs to experience opportunities</li>
          <li>— Defined a portfolio of services across the university ecosystem</li>
          <li>— Connected individual initiatives to broader experience goals</li>
          <li>— Established criteria for prioritizing transformation</li>
          <li>
            — Connected experience design with technology, innovation, culture,
            and implementation
          </li>
        </ul>
      </Section>
    <Section title="News">
        <h1 className="text-2xl font-bold underline hover:text-accent">
          <a
            href="https://www.diariodepernambuco.com.br/noticia/vidaurbana/2018/12/ser-educacional-entre-as-melhores-empresas-do-brasil-em-2018.html"
            target="_blank"
            rel="noreferrer"
          >
            Diario de Pernambuco
          </a>
        </h1>
        <h2>Ser Educacional among the best companies in Brazil in 2018.</h2>
        <Quote> According to the company’s president, Jânyo Diniz, 
          innovation was the main investment in 2018. “We realized that we 
          needed to change some things to improve our students’ experience, 
          so we invested in innovation through the Ser Digital project. 
          Without a doubt, it was a very successful decision,” explains Diniz.
        </Quote>
        <h1 className="text-2xl font-bold underline hover:text-accent">
          <a
            href="https://www.seudinheiro.com/2021/empresas/ser-educacional-janyo-diniz-entrevista/"
            target="_blank"
            rel="noreferrer"
          >
            SeuDinheiro
          </a>
        </h1>
        <h2>Ser Educacional already envisions the future of education — and has a plan to get there.</h2>
        <p> 
          Results shared for the years following the project
        </p>
        <img src={serResultsImage} alt="Ser Educacional results" className="mb-6 rounded-lg"/>


      </Section>

      
      </main>
    </DefaultLayout>
  );
}

/* -------------------------------------------------------------------------- */
/* Reusable sections                                                           */
/* -------------------------------------------------------------------------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="case-study__section">
      <p className="case-study__section-title">
        {title}
      </p>
      <div className="case-study__section-content">
        {children}
      </div>
    </section>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="case-study__quote">
      {children}
    </blockquote>
  );
}



/* -------------------------------------------------------------------------- */
/* Student mindset matrix                                                      */
/* -------------------------------------------------------------------------- */

function StudentMindsetMatrix() {
  return (
    <figure className="my-12">
      <figcaption className="mb-8">
        <p className="text-sm font-medium uppercase tracking-widest text-default-500">
          Student mindsets
        </p>
        <p className="mt-2 text-default-600">
          Different motivations and levels of direction create different
          relationships with the university experience.
        </p>
      </figcaption>

      <div className="hidden grid-cols-[64px_1fr] grid-rows-[1fr_52px] md:grid">
        {/* Vertical axis */}
        <div className="relative border-r border-default-300">
          <span className="absolute  top-2 -translate-x-1/2 text-right whitespace-nowrap text-xs font-medium uppercase tracking-widest text-default-500">
            Defined
          </span>

          <span className="absolute bottom-2  -translate-x-1/2 text-right whitespace-nowrap text-xs font-medium uppercase tracking-widest text-default-500">
            Exploratory
          </span>

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-sm font-medium text-default-600">
            Objective
          </span>
        </div>

        {/* Matrix */}
        <div className="grid min-h-120 grid-cols-2 grid-rows-2">
          <MindsetCell
            title="Enthusiast"
            description={studentMindsets[0].description}
            className="border-b border-r"
          />
          <MindsetCell
            title="Practical"
            description={studentMindsets[1].description}
            className="border-b"
          />
          <MindsetCell
            title="Instinctive"
            description={studentMindsets[2].description}
            className="border-r"
          />
          <MindsetCell
            title="Apathetic"
            description={studentMindsets[3].description}
          />
        </div>

        <div />

        {/* Horizontal axis */}
        <div className="relative border-t border-default-300">
          <span className="absolute left-0 top-4 text-xs font-medium uppercase tracking-widest text-default-500">
            Intrinsic
          </span>

          <span className="absolute right-0 top-4 text-xs font-medium uppercase tracking-widest text-default-500">
            Extrinsic
          </span>

          <span className="absolute left-1/2 top-4 -translate-x-1/2 text-sm font-medium text-default-600">
           Motivation
          </span>
        </div>
      </div>

      {/* Mobile */}
      <div className="grid gap-4 md:hidden">
        {studentMindsets.map((mindset) => (
          <div
            key={mindset.title}
            className="rounded-lg border border-default-200 p-5"
          >
            <h4 className="font-semibold">{mindset.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-default-600">
              {mindset.description}
            </p>
          </div>
        ))}
      </div>
    </figure>
  );
}

function MindsetCell({
  title,
  description,
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center p-6 border-default-300 ${className}`}
    >
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-default-600">
        {description}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Experience strategy                                                         */
/* -------------------------------------------------------------------------- */

function ExperienceStrategy() {
  return (
    <div className="my-12 border-y border-default-200">
      {experienceLayers.map((layer) => (
        <div
          key={layer.number}
          className="grid gap-4 border-b border-default-200 py-7 last:border-b-0 md:grid-cols-[80px_1fr_1.5fr]"
        >
          <span className="text-sm font-medium text-default-400">
            {layer.number}
          </span>

          <h3 className="font-semibold">{layer.title}</h3>

          <p className="text-default-600">{layer.description}</p>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Service ecosystem                                                           */
/* -------------------------------------------------------------------------- */

function ServiceEcosystem() {
  return (
    <div className="my-12">
      <div className="grid gap-4 sm:grid-cols-2">
        {serviceAreas.map((area) => (
          <article
            key={area.title}
            className="border-t border-default-200 py-5"
          >
            <h3 className="font-medium">{area.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-default-600">
              {area.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Prioritization                                                              */
/* -------------------------------------------------------------------------- */

function PrioritizationFramework() {
  return (
    <figure className="my-12 rounded-lg border border-default-200 p-6 md:p-8">
      <figcaption>
        <p className="text-sm font-medium uppercase tracking-widest text-default-500">
          Prioritization framework
        </p>
        <h3 className="mt-2 text-xl font-semibold">
          Balancing value with the complexity of making change happen
        </h3>
      </figcaption>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {prioritizationCriteria.map((criterion) => (
          <div key={criterion.title}>
            <h4 className="font-medium">{criterion.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-default-600">
              {criterion.description}
            </p>
          </div>
        ))}
      </div>
    </figure>
  );
}
