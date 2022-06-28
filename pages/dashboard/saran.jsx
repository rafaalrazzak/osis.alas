import Head from "next/head";
import { useState, useEffect } from "react";
import { Card, Layout, Gradient } from "@components";
import fetch from "@/libs/supabase/fetch";

export async function getServerSideProps(ctx) {
  const cookies = ctx.req.headers.cookie
  const sbToken = cookies["sb-access-token"]
  console.log(sbToken);
  if (!sbToken) {
    ctx.res.writeHead(302, {
      Location: "/",
    });
    ctx.res.end();
  }

  return {
    props: { },
  };
}

export default function Saran({  }) {
  // const [saran, setSaran] = useState();
  // useEffect(() => {
  //   if (sbToken) {
  //     fetch().then((x) => setSaran(x));
  //   }
  // }, []);
  return (
    <div>
      <Head>
        <title>OSIS | Semua Saran</title>
      </Head>
      <Layout>
        <div className=" relative flex w-full justify-center overflow-hidden py-24">
          <Gradient />
          <div className="flex justify-center px-4 md:w-8/12 ">
            <div className="flex w-full flex-wrap md:w-1/2 md:flex-1">
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
          </div>
        </div>
      </Layout>
    </div>
  );
}
