import { Navigate, Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/home-v2";
import AboutPage from "@/pages/about-v2";
import CVPage from "@/pages/cv-v2";
import TratoV2Page from "@/pages/trato-v2";
import PertinhoPage from "@/pages/pertinho-v2";
import SerDigitalCaseStudy from "@/pages/ser-v2";
import IPadSurveyPage from "@/pages/ipadsurvey-v2";
import { getLocale } from "@/i18n/locale";
import "@/styles/mobile.css";

function App() {
  return (
    <Routes>
      <Route path={`/${getLocale()}`}>
        <Route index element={<IndexPage />} />
        <Route
          element={<Navigate replace to={`/${getLocale()}/#projects`} />}
          path="projects"
        />
        <Route element={<AboutPage />} path="about" />
        <Route element={<CVPage />} path="cv" />
        <Route element={<TratoV2Page />} path="trato" />
        <Route
          element={<Navigate replace to={`/${getLocale()}/trato`} />}
          path="trato-v2"
        />
        <Route element={<PertinhoPage />} path="pertinho" />
        <Route element={<SerDigitalCaseStudy />} path="ser" />
        <Route element={<IPadSurveyPage />} path="ipadsurvey" />
        <Route
          element={<Navigate replace to={`/${getLocale()}/`} />}
          path="*"
        />
      </Route>
    </Routes>
  );
}

export default App;
