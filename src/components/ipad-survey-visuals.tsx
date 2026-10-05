import type { CSSProperties, ReactNode } from "react";

import { formatNumber, getLocale, t } from "@/i18n/locale";
import "@/styles/ipad-survey-visuals.css";

type VisualKind =
  | "survey_stats"
  | "overall_satisfaction"
  | "challenges"
  | "connectivity"
  | "conclusion1"
  | "conclusion2";
function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="ipad-visual__metric">
      <strong>
        {getLocale() === "pt" ? value.replace(/(\d)\.(\d)/g, "$1,$2") : value}
      </strong>
      <span>{label}</span>
    </div>
  );
}
function Bars({
  title,
  data,
  note,
}: {
  title: string;
  data: { label: string; value: number }[];
  note: string;
}) {
  return (
    <div className="ipad-visual__bars">
      <h3>{title}</h3>
      <ul>
        {data.map(({ label, value }) => (
          <li key={label}>
            <div>
              <span>{label}</span>
              <strong>{formatNumber(value)}%</strong>
            </div>
            <div aria-hidden="true" className="ipad-visual__track">
              <div style={{ "--bar-width": `${value}%` } as CSSProperties} />
            </div>
          </li>
        ))}
      </ul>
      <p className="ipad-visual__note">{note}</p>
    </div>
  );
}
function Themes({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="ipad-visual__themes">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
const ports = [
  { label: t("3.5 mm headset jack (P2)"), value: 34.6 },
  { label: t("HDMI"), value: 21.8 },
  { label: t("USB-C with video"), value: 18.8 },
  { label: t("USB-C"), value: 17.3 },
  { label: t("Other"), value: 7.5 },
];
const issues = [
  { label: t("Speed"), value: 30 },
  { label: t("Connectivity"), value: 23 },
  { label: t("Storage"), value: 23 },
  { label: t("Battery / charging"), value: 20 },
  { label: t("Other"), value: 6 },
];

export function IPadSurveyVisual({
  kind,
  caption,
}: {
  kind: VisualKind;
  caption: string;
}) {
  let content: ReactNode;

  if (kind === "survey_stats")
    content = (
      <>
        <p className="ser-case__eyebrow">{t("Research at a glance")}</p>
        <div className="ipad-visual__stats">
          <Metric label={t("people invited")} value="205" />
          <Metric label={t("responses")} value="107" />
          <Metric label={t("response rate")} value="52.2%" />
          <Metric label={t("average response time")} value="5:50" />
        </div>
        <div className="ipad-visual__timeline">
          <div>
            <strong>{t("Week 1")}</strong>
            <span>{t("Prepare the survey")}</span>
          </div>
          <div>
            <strong>{t("Weeks 2–3")}</strong>
            <span>{t("Collect responses")}</span>
          </div>
          <div>
            <strong>{t("Week 4")}</strong>
            <span>{t("Analyze and report")}</span>
          </div>
        </div>
      </>
    );
  else if (kind === "overall_satisfaction")
    content = (
      <>
        <p className="ser-case__eyebrow">{t("Overall satisfaction")}</p>
        <h3 className="ipad-visual__title">
          {t("How satisfied are you with your current iPad?")}
        </h3>
        <div className="ipad-visual__stats">
          <Metric label={t("average satisfaction")} value="4.06 / 5" />
          <Metric label={t("positive ratings, as reported")} value="77%" />
        </div>
        <div className="ipad-visual__columns">
          <Themes
            items={[
              t("Practicality in everyday work"),
              t("Greater portability than a laptop"),
              t("Ability to complete most daily tasks"),
              t("Useful equipment despite limitations"),
            ]}
            title={t("What people valued")}
          />
          <Themes
            items={[
              t("Small text and screen size during presentations"),
              t("Missing external keyboard"),
              t("Enterprise tools not optimized for iPad"),
              t("Slow performance and spreadsheets that would not open"),
            ]}
            title={t("What got in the way")}
          />
        </div>
        <p className="ipad-visual__note">
          {t(
            "Themes paraphrased from participant comments. Satisfaction used a five-point scale.",
          )}
        </p>
      </>
    );
  else if (kind === "challenges")
    content = (
      <>
        <p className="ser-case__eyebrow">{t("Everyday challenges")}</p>
        <div className="ipad-visual__columns">
          <div>
            <Metric
              label={t("reported challenges using the iPad")}
              value="45%"
            />
            <p className="ipad-visual__body">
              {t(
                "The question covered the experience of using the device in daily work, including software and situational barriers.",
              )}
            </p>
            <div aria-hidden="true" className="ipad-visual__track">
              <div style={{ "--bar-width": "45%" } as CSSProperties} />
            </div>
          </div>
          <Themes
            items={[
              t("Company tools and mandatory training requiring a laptop"),
              t("Opening and editing large files"),
              t("Editing spreadsheets and accessing enterprise data"),
              t("Opening attachments, forms and links"),
              t("Battery life"),
              t("Presenting during brief or busy doctor visits"),
            ]}
            title={t("Challenges described by participants")}
          />
        </div>
        <p className="ipad-visual__note">
          {t(
            "Themes summarize the open-ended responses. General challenges and technical issues were separate questions.",
          )}
        </p>
      </>
    );
  else if (kind === "connectivity")
    content = (
      <>
        <p className="ser-case__eyebrow">{t("Connections in the field")}</p>
        <div className="ipad-visual__columns">
          <div>
            <Metric
              label={t("wanted or needed to connect other devices")}
              value="66%"
            />
            <p className="ipad-visual__body">
              {t(
                "Headsets for meetings and visits. Video connections for monitors and presentations. Connections to equipment such as printers.",
              )}
            </p>
          </div>
          <Bars
            data={ports}
            note={t(
              "Connection shares reproduced from the report; these are not percentages of the entire invited field team.",
            )}
            title={t("Connection types")}
          />
        </div>
      </>
    );
  else if (kind === "conclusion1")
    content = (
      <>
        <p className="ser-case__eyebrow">{t("Hardware recommendation")}</p>
        <h3 className="ipad-visual__title">
          {t("Refresh the equipment and address the wider experience.")}
        </h3>
        <div className="ipad-visual__columns">
          <div>
            <Metric label={t("reported technical issues")} value="28%" />
            <p className="ipad-visual__body">
              {t(
                "The report identified slowing devices and reduced battery life as reasons to refresh the hardware. A refresh would still leave software and interaction needs to address.",
              )}
            </p>
          </div>
          <Bars
            data={issues}
            note={t(
              "Percentages reproduced from the original report. They total 102%; the source does not specify the base for this breakdown.",
            )}
            title={t("Reported technical issue breakdown")}
          />
        </div>
      </>
    );
  else
    content = (
      <>
        <p className="ser-case__eyebrow">{t("Support for everyday work")}</p>
        <div className="ipad-visual__columns">
          <div className="ipad-visual__recommendation">
            <span className="ipad-visual__number">01</span>
            <h3>{t("Connect the equipment")}</h3>
            <p>
              {t(
                "Provide a compact USB hub for the ports people need, particularly HDMI and a 3.5 mm headset connection.",
              )}
            </p>
            <p className="ipad-visual__note">
              {t(
                "66% wanted or needed to connect other devices. Headset and HDMI connections led the reported mix.",
              )}
            </p>
          </div>
          <div className="ipad-visual__recommendation">
            <span className="ipad-visual__number">02</span>
            <h3>{t("Make input easier")}</h3>
            <p>
              {t(
                "Provide a keyboard and trackpad for text entry, spreadsheets and software that is difficult to use through touch.",
              )}
            </p>
            <p className="ipad-visual__note">
              {t(
                "Participants described missing external keyboards, difficulty copying text and the on-screen keyboard obscuring content.",
              )}
            </p>
          </div>
        </div>
      </>
    );

  return (
    <figure className={`project-case__figure ipad-visual ipad-visual--${kind}`}>
      <div className="ipad-visual__content">{content}</div>
      <figcaption>
        {caption}
        {t(" Source: Work Experience with iPads, June 2025; 107 respondents.")}
      </figcaption>
    </figure>
  );
}
