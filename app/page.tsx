import Layout from "@/components/Layout";
import Header from "@/components/Header";
import About from "@/components/About";
import SocialBar from "@/components/SocialBar";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import GithubCalendar from "@/components/GithubCalendar"
import Contributions from "@/components/Contributions";

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <About />
      <Project />
      <Experience />
      <Contributions />
      <Education />
      <GithubCalendar />
      <Skills />

      <SocialBar />
    </Layout>
  );
}
