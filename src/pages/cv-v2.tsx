import englishCV from "../../assets/LeifMagalhaesCV_en.docx?url";
import portugueseCV from "../../assets/LeifMagalhaesCV_pt.docx?url";

import { getLocale } from "@/i18n/locale";
import DefaultLayout from "@/layouts/default";

export default function CVPage() {
  const pt = getLocale() === "pt";

  return (
    <DefaultLayout>
      <section className="cv-page mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold">{pt ? "Currículo" : "CV"}</h1>
        <p className="mt-6 text-xl">
          {pt
            ? "Experiência profissional e formação de Leif Magalhães."
            : "Leif Magalhães’ professional experience and qualifications."}
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          <a download="LeifMagalhaesCV_pt.docx" href={portugueseCV}>
            {pt ? "Baixar currículo · Português" : "Download CV · Portuguese"} ↓
          </a>
          <a download="LeifMagalhaesCV_en.docx" href={englishCV}>
            {pt ? "Baixar currículo · Inglês" : "Download CV · English"} ↓
          </a>
        </div>
      </section>
    </DefaultLayout>
  );
}
