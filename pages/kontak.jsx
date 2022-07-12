import { SEO, Layout } from "@components";

export default function Kontak() {
  return (
    <>
      <SEO title="Kontak" />
      <Layout noBg>
        <div className="flex h-screen items-center justify-center">
          <h1>
            Hello, <span className="font-semibold">kontak</span>
          </h1>
        </div>
      </Layout>
    </>
  );
}
