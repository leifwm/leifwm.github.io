import { formatNumber, t } from "@/i18n/locale";
import {
  CaseExplorer,
  CaseHeading,
  CaseSection,
  ProjectCaseStudy,
} from "@/components/project-case-study";
import { IPadSurveyVisual } from "@/components/ipad-survey-visuals";

const chapters = [
  { id: "project", label: t("The project") },
  { id: "role", label: t("My role") },
  { id: "results", label: t("Results") },
  { id: "research", label: t("Research") },
  { id: "findings", label: t("Field experience") },
  { id: "friction", label: t("Sources of friction") },
  { id: "recommendations", label: t("Recommendations") },
];
const friction = [
  {
    title: t("Hardware performance"),
    description: t(
      "28% of respondents reported technical issues. Aging batteries and slow devices affected everyday work, making a hardware refresh a reasonable recommendation.",
    ),
    implication: t(
      "Refresh the equipment to address performance and battery limitations, while evaluating the rest of the work experience separately.",
    ),
  },
  {
    title: t("Software compatibility"),
    description: t(
      "Excel and C360 emerged as the most problematic tools. Large spreadsheets failed to open or changed formatting; users also described access, filtering and saving problems.",
    ),
    implication: t(
      "Address application compatibility and usability. New hardware alone cannot resolve software that does not support the required workflow.",
    ),
  },
  {
    title: t("Interaction"),
    description: t(
      "Tasks involving spreadsheets and text entry were harder without an external keyboard or mouse. Touch interaction did not suit every enterprise tool.",
    ),
    implication: t(
      "Provide a keyboard and trackpad to support tasks that require more precise input.",
    ),
  },
  {
    title: t("Context of use"),
    description: t(
      "48% reported situations where using the iPad was more challenging. Busy environments, hospital visits and small text in presentation materials complicated its use.",
    ),
    implication: t(
      "Consider the conditions of a visit and the readability of materials alongside the device specifications.",
    ),
  },
  {
    title: t("Connectivity"),
    description: t(
      "66% wanted or needed to connect their iPad to other equipment, including headsets, monitors and printers.",
    ),
    implication: t(
      "Provide a compact hub for the ports needed in the field, particularly HDMI and a headset connection.",
    ),
  },
];

export default function IPadSurveyV2Page() {
  return (
    <ProjectCaseStudy
      chapters={chapters}
      className="ipad-case"
      title={t("iPad Surveys — Fieldwork research")}
    >
      <header className="ser-case__hero" id="project">
        <div className="ser-case__hero-copy">
          <p className="ser-case__eyebrow">
            {t("iPad Surveys / Fieldwork experience · 2025")}
          </p>
          <h1>
            {t("Looking beyond")}
            <br />
            {t("the device.")}
          </h1>
          <p className="ser-case__lead">
            {t(
              "Understanding what the field team needed before a significant technology investment.",
            )}
          </p>
          <p>
            {t(
              "A proposed iPad upgrade raised a practical question: would newer equipment make a meaningful difference? The research examined how the device, software and working environment supported everyday fieldwork.",
            )}
          </p>
          <div className="ser-case__hero-meta">
            <span>{t("Research design")}</span>
            <span>{t("Service design")}</span>
            <span>{t("AI-assisted analysis")}</span>
          </div>
        </div>
        <IPadSurveyVisual
          caption={t(
            "A four-week study to inform the equipment investment decision.",
          )}
          kind="survey_stats"
        />
      </header>
      <CaseSection
        eyebrow={t("01 / My role")}
        id="role"
        title={t("Turn an investment question into a research plan.")}
      >
        <div className="ser-case__role">
          <div className="ser-case__reading">
            <h3>{t("Research & service design")}</h3>
            <p>
              {t(
                "I designed the research and survey, analyzed quantitative feedback and synthesized open-ended responses into recommendations for the field experience. AI helped compile responses and organize themes, leaving more time for interpretation.",
              )}
            </p>
          </div>
          <div>
            <p className="ser-case__label">{t("Research")}</p>
            <ul>
              <li>{t("Study planning and questionnaire development")}</li>
              <li>{t("Quantitative analysis")}</li>
              <li>{t("Qualitative synthesis and insight identification")}</li>
            </ul>
          </div>
          <div>
            <p className="ser-case__label">{t("Decision support")}</p>
            <ul>
              <li>{t("AI-assisted compilation and analysis")}</li>
              <li>{t("Mapping friction across the work experience")}</li>
              <li>{t("Equipment and peripheral recommendations")}</li>
            </ul>
          </div>
        </div>
      </CaseSection>
      <section className="ser-case__results" id="results">
        <CaseHeading
          eyebrow={t("02 / Results")}
          title={t("Evidence for a broader equipment decision.")}
        />
        <div className="ser-case__results-grid">
          <div className="ser-case__reading">
            <p>
              {t(
                "The findings supported a hardware refresh while identifying needs that an upgrade alone would leave unresolved.",
              )}
            </p>
            <ul className="ser-case__deliverables">
              <li>
                <span>01</span>
                {t("Refresh aging hardware to address speed and battery life")}
              </li>
              <li>
                <span>02</span>
                {t("Add a compact hub for connectivity in the field")}
              </li>
              <li>
                <span>03</span>
                {t("Support precise input with a keyboard and trackpad")}
              </li>
            </ul>
            <p className="ser-case__source-note">
              {t(
                "Research recommendations, June 2025. The supplied report does not measure implementation outcomes or financial savings.",
              )}
            </p>
          </div>
          <div className="ser-case__result-figures">
            <div>
              <strong>77%</strong>
              <span>{t("rated their equipment positively")}</span>
            </div>
            <div>
              <strong>45%</strong>
              <span>{t("reported challenges using the iPad")}</span>
            </div>
            <div>
              <strong>66%</strong>
              <span>{t("wanted or needed to connect other devices")}</span>
            </div>
            <p className="ser-case__source-note">
              {t(
                "Source: Work Experience with iPads, June 2025. Survey sample: 107 respondents.",
              )}
            </p>
          </div>
        </div>
      </section>
      <section aria-labelledby="ipad-story" className="ser-case__chapter-break">
        <p className="ser-case__eyebrow">{t("In depth / The full story")}</p>
        <h2 id="ipad-story">{t("The work around the device.")}</h2>
        <p>
          {t(
            "How a survey revealed the relationship between equipment, enterprise tools and the realities of a field visit.",
          )}
        </p>
      </section>
      <CaseSection
        eyebrow={t("03 / Research")}
        id="research"
        title={t("Four weeks to support the decision.")}
      >
        <div className="project-case__facts">
          <div>
            <strong>205</strong>
            <span>{t("people invited")}</span>
          </div>
          <div>
            <strong>107</strong>
            <span>{t("responses collected")}</span>
          </div>
          <div>
            <strong>{formatNumber(52.2)}%</strong>
            <span>{t("response rate")}</span>
          </div>
        </div>
        <div className="ser-case__reading">
          <p>
            {t(
              "The plan allocated one week to preparation, two weeks to collecting responses and one week to reporting. The questionnaire combined satisfaction and ease-of-use scales with open questions about software, situational challenges, technical issues and connectivity.",
            )}
          </p>
          <p>
            {t(
              "Conditional questions asked participants to describe the problems they experienced. This connected the overall ratings to specific tasks and contexts rather than treating satisfaction as a complete picture.",
            )}
          </p>
          <p className="ser-case__source-note">
            {t(
              "Sources: equipment research proposal, May 2025; iPad satisfaction questionnaire, May 2025; findings report, June 2025.",
            )}
          </p>
        </div>
      </CaseSection>
      <CaseSection
        eyebrow={t("04 / Field experience")}
        id="findings"
        title={t("A useful device could still create friction.")}
      >
        <div className="ser-case__reading">
          <p>
            {t(
              "Respondents valued portability and practicality. The report recorded an average satisfaction score of 4.06 out of 5 and 77% positive ratings.",
            )}
          </p>
          <p>
            {t(
              "At the same time, 45% reported challenges. Battery life, screen size, application behavior and input methods affected their ability to complete work or show materials during visits.",
            )}
          </p>
        </div>
        <IPadSurveyVisual
          caption={t(
            "Satisfaction reflected the value of a portable device, alongside recurring limitations.",
          )}
          kind="overall_satisfaction"
        />
        <blockquote className="project-case__quote">
          {t(
            "The investment decision needed to account for the complete field experience.",
          )}
        </blockquote>
      </CaseSection>
      <CaseSection
        eyebrow={t("05 / Sources of friction")}
        id="friction"
        title={t("Different problems called for different responses.")}
      >
        <CaseExplorer
          items={friction}
          label={t("Explore the field experience")}
        />
        <IPadSurveyVisual
          caption={t(
            "45% of respondents reported some challenge; technical issues were a separate survey question.",
          )}
          kind="challenges"
        />
        <IPadSurveyVisual
          caption={t(
            "Connectivity needs informed the recommendation for an equipment hub.",
          )}
          kind="connectivity"
        />
      </CaseSection>
      <CaseSection
        eyebrow={t("06 / Recommendations")}
        id="recommendations"
        title={t("Equip people for the work they need to do.")}
      >
        <div className="ser-case__reading">
          <p>
            {t(
              "The recommendation combined newer hardware with practical support for connectivity and interaction. A compact hub would support common ports; a keyboard and trackpad would make enterprise software easier to use.",
            )}
          </p>
          <p>
            {t(
              "Software limitations remained a separate area to address. Replacing the iPad could improve performance, but it would not automatically fix spreadsheet compatibility or application usability.",
            )}
          </p>
        </div>
        <IPadSurveyVisual
          caption={t("Hardware recommendation from the findings report.")}
          kind="conclusion1"
        />
        <IPadSurveyVisual
          caption={t(
            "Peripheral recommendations extended the decision beyond the device.",
          )}
          kind="conclusion2"
        />
      </CaseSection>
    </ProjectCaseStudy>
  );
}
