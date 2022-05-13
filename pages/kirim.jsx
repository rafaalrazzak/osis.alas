import Head from "next/head";
import { Layout, Form, Gradient, Container } from "@components";
export default function Kirim() {
  return (
    <div>
      <Head>
        <title>Menfess OSIS/MPK | Kirim Menfess</title>
      </Head>
      <div className="flex justify-center">
        <Gradient />
      </div>
      <Layout>
        <Container>
          <section className="my-32 flex justify-center">
            <Form />
          </section>
        </Container>
      </Layout>
    </div>
  );
}
