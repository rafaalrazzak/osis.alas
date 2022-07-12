import { Layout, SEO } from "@components";
import Hero from "@/section/Home/Hero";
import Intro from "@/section/Home/Intro";
import Join from "@/section/Home/Join";
import Testimoni from "@/section/Home/Testimoni";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Layout noBg>
        <Hero />
        <Intro />
        <Join />
        <Testimoni />
      </Layout>
    </>
  );
}
