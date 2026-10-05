import { Navigate, Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import AboutPage from "@/pages/about";
import CVPage from "@/pages/cv";
import TratoV2Page from "@/pages/trato-v2";
import PertinhoPage from "@/pages/pertinho";
import SerDigitalCaseStudy from "@/pages/ser";
import IPadSurveyPage from "@/pages/ipadsurvey";


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<CVPage />} path="/cv" />
      <Route element={<TratoV2Page />} path="/trato" />
      <Route element={<Navigate replace to="/trato" />} path="/trato-v2" />
      <Route element={<PertinhoPage />} path="/pertinho" />
      <Route element={<SerDigitalCaseStudy />} path="/ser" />
      <Route element={<IPadSurveyPage />} path="/ipadsurvey" />
    </Routes>
  );
}

export default App;
