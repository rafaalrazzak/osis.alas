import Head from "next/head";
import Layout from "components/Layout";
import { Card, Gradient, Container } from "@components";
export default function kirimMenfess() {
  return (
    <div>
      <Head>
        <title>Menfess OSIS/MPK | All Menfess</title>
      </Head>
      <Layout>
        <Container className="flex flex-col lg:flex-row justify-center">
        <Gradient className="absolute flex justify-center items-center" />
          <Card />
        </Container>
      </Layout>
    </div>
  );
}
