import type { Project } from "@/types";

import { t } from "@/i18n/locale";
import { assetUrl } from "@/config/site";

export const projectPreviews = {
  projects: [
    {
      id: 1,
      title: t("Trato"),
      img: assetUrl("/assets/img/project_thumbnails/TratoFretesVideo.webm"),
      format: "video/webm",
      description: t(
        "Expanding the pilot app from VLI (Top 5 largest logistic brazilian companies) from only connecting truck drivers with terminals to establishing a service ecosystem to support the truck drivers journey.",
      ),
      where: t("At Accenture for VLI"),
      tags: [t("Service Design"), t("Ux Research"), t("Product Design")],
      href: "/trato",
    },
    {
      id: 2,
      title: t("Pertinho de Casa"),
      img: assetUrl("/assets/img/project_thumbnails/PertinhoLogo.png"),
      format: "image/png",
      description: t(
        "Translated to Close to Home was a digital service born from a non-profit joint venture between Rede Asta and Accenture to help micro and small business during the pandemic by creating a B2C service.",
      ),
      where: t("At Accenture for Non Profit Venture with Rede Asta"),
      tags: [t("Service Design"), t("Product Design")],
      href: "/pertinho",
    },
    {
      id: 3,
      title: t("Ser Digital"),
      img: assetUrl("/assets/img/project_thumbnails/SerEducacional.png"),
      format: "image/png",
      description: t(
        "Ser Educacional (one of the biggest private higher education groups in Brazil) was looking to understand why students were dropping out and create solutions to solve this business problem while also undergoing a digital transformation in the company.",
      ),
      where: t("At Accenture for Ser Educacional"),
      tags: [t("Service Design"), t("Ux Research")],
      href: "/ser",
    },
    {
      id: 4,
      title: t("Filed Team Equipment Satisfaction Survey"),
      img: assetUrl("/assets/img/project_thumbnails/Survey.lottie"),
      format: "application/lottie",
      description: t(
        "A more straight forward project, a satisfaction survey enhanced by the use of AI in its creation and analysis, to understand how the field team felt about the equipment they were using in their daily work.",
      ),
      where: t("At Novartis"),
      tags: [t("Service Design")],
      href: "/ipadsurvey",
    },
    {
      id: 5,
      title: t("Project 5"),
      img: assetUrl("/assets/img/project_thumbnails/project4.png"),
      format: "image/png",
      description: t(
        "Pellentesque pretium convallis tempus. Morbi consequat, nunc ut lobortis tincidunt, mi magna fringilla tellus, at dapibus nisi ligula et odio. Curabitur mollis imperdiet urna eget aliquet. Nam at neque consectetur, consectetur odio sed, pellentesque ante. Proin ultrices malesuada elit, lacinia hendrerit nulla gravida sed. In imperdiet purus at ipsum eleifend egestas. Integer a magna vel nisi blandit sagittis. Donec arcu lorem, bibendum non porttitor vitae, condimentum at purus.",
      ),
      where: t("At Company X"),
      tags: [t("Service Design")],
      href: "/",
    },
    {
      id: 6,
      title: t("Project 6"),
      img: assetUrl("/assets/img/project_thumbnails/project4.png"),
      format: "image/png",
      description: t(
        "Pellentesque pretium convallis tempus. Morbi consequat, nunc ut lobortis tincidunt, mi magna fringilla tellus, at dapibus nisi ligula et odio. Curabitur mollis imperdiet urna eget aliquet. Nam at neque consectetur, consectetur odio sed, pellentesque ante. Proin ultrices malesuada elit, lacinia hendrerit nulla gravida sed. In imperdiet purus at ipsum eleifend egestas. Integer a magna vel nisi blandit sagittis. Donec arcu lorem, bibendum non porttitor vitae, condimentum at purus.",
      ),
      where: t("At Company X"),
      tags: [t("Service Design")],
      href: "/",
    },
  ] satisfies Project[],
};
