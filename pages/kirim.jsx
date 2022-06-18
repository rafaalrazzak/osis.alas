import Head from "next/head";
import { Layout, Form, Gradient, Container } from "@components";
export default function Kirim() {
  return (
    <div>
      <Head>
        <title>OSIS | Kirim Saran</title>
      </Head>
      <Gradient />
      <Layout>
        <Container>
          <section className="mt-36 mb-24 flex justify-center">
            <Form />
          </section>
        </Container>
      </Layout>
    </div>
  );
}
