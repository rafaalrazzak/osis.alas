import Head from "next/head";
import Layout from "components/Layout";
import { Card } from "@components";
export default function kirimMenfess() {
  return (
    <div>
      <Head>
        <title>Menfess OSIS/MPK | All Menfess</title>
      </Head>
      <Layout>
        <Card />
      </Layout>
    </div>
  );
}
