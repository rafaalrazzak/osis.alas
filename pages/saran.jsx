import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card, Layout, Container, Gradient } from "@components";
import supabase from "@/libs/supabase";
import fetch from "@/libs/supabase/fetch";
export default function Menfess() {
  const { push } = useRouter();
  const session = supabase.auth.session();
  
  const [saran, setSaran] = useState();
  useEffect(() => {
    if (session) {
      fetch().then((x) => setSaran(x));
    }else{
      push("/")
    }
  }, []);
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