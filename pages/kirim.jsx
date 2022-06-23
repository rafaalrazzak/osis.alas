import Head from "next/head";
import { Layout, Form, Gradient, Container } from "@components";
export default function Kirim() {
  return (
    <div>
      <Head>
        <title>OSIS | Kirim Saran</title>
      </Head>
      <Layout>
        <Gradient />
        <Container>
          <section className="mt-36 mb-24 max-w-lg mx-auto flex justify-center">
            <Form />
          </section>
        </Container>
      </Layout>
    </div>
  );
}
