import Layout from "@/components/Layout";
import Header from "@/components/Header";
import About from "@/components/About";
import SocialBar from "@/components/SocialBar";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <About />
      <Project />
      <Experience />
      <Education />
      <Skills />


      <SocialBar />
    </Layout>
  );
}
