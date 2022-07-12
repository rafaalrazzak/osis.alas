import { SEO, Layout } from "@components";

export default function Tentang() {
  return (
    <>
      <SEO title="Tentang" />
      <Layout noBg>
        <div className="flex h-screen items-center justify-center">
          <h1>
            Hello, <span className="font-semibold">tentang</span>
          </h1>
        </div>
      </Layout>
    </>
  );
}
