import Head from "next/head";
import Layout from "components/Layout";
import { Card, Background, Container } from "@components";
export default function kirimMenfess() {
  return (
    <div>
      <Head>
        <title>Menfess OSIS/MPK | All Menfess</title>
      </Head>
      <Layout>
        <div className="flex relative justify-center w-full">
          <Background />
          <Container className="flex flex-col lg:flex-row justify-center my-32">
            <div className="w-full">
              <Card
                from="Rafa"
                to="Rafa"
                instagram="rafa.ar.id"
                message="Sunt occaecat magna in commodo reprehenderit culpa mollit consequat ea."
                date="25 Maret 2022"
              />
              <Card
                from="Rafa"
                to="Rafa"
                instagram="rafa.ar.id"
                message="Sunt occaecat magna in commodo reprehenderit culpa mollit consequat ea."
                date="25 Maret 2022"
              />
              <Card
                from="Rafa"
                to="Rafa"
                instagram="rafa.ar.id"
                message="Sunt occaecat magna in commodo reprehenderit culpa mollit consequat ea."
                date="25 Maret 2022"
              />
              <Card
                from="Rafa"
                to="Rafa"
                instagram="rafa.ar.id"
                message="Sunt occaecat magna in commodo reprehenderit culpa mollit consequat ea."
                date="25 Maret 2022"
              />
            </div>
          </Container>
        </div>
      </Layout>
    </div>
  );
}
