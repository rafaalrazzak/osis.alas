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
          <section className="mx-auto mt-36 mb-24 flex max-w-lg justify-center">
            <Form />
          </section>
        </Container>
      </Layout>
    </div>
  );
}
