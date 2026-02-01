import MainLayout from "./components/layout/MainLayout";
import Sidebar from "./components/layout/Sidebar";

import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Hackathon from "./sections/Hacakathon";
import Education from "./sections/Education";

export default function Page() {
  return (
    <MainLayout sidebar={<Sidebar />}>
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Hackathon />
      <Contact />
    </MainLayout>
  );
}
