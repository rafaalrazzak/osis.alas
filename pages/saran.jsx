import Head from "next/head";
import { useState, useEffect } from "react";
import { Card, Layout, Container, Gradient } from "@components";
import fetch from "@/libs/supabase/fetch";
export default function Menfess() {
  const [saran, setSaran] = useState();
  useEffect(() => {
    fetch().then((x) => setSaran(x));
  }, []);
  return (
    <div>
      <Head>
        <title>OSIS | Semua Saran</title>
      </Head>
      <Layout>
        <div className=" w-full overflow-hidden flex pt-10 relative justify-center">
          <Gradient />
          <Container className="flex justify-center my-32">
            <div className="w-full flex flex-wrap md:w-1/2 md:flex-1">
              {saran ? (
                saran.map((saran) => (
                  <Card
                    key={saran.id}
                    from={saran.from}
                    message={saran.text}
                    date={saran.created_at}
                  />
                ))
              ) : (
                <Card
                  from="Server"
                  message="Sabar yaa, lagi loading...."
                  date={new Date()}
                />
              )}
            </div>
          </Container>
        </div>
      </Layout>
    </div>
  );
}
