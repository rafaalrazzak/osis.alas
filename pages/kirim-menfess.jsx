import Head from "next/head";
import Layout from "components/Layout";
import {Form}  from "@components";
export default function kirimMenfess() {
  return (
    <div>
      <Head>
        <title>Menfess OSIS/MPK | Kirim Menfess</title>
      </Head>
      <Layout>
        <Form />
      </Layout>
    </div>
  );
}
