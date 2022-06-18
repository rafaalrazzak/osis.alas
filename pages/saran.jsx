import Head from "next/head";
import { Card, Layout, Container, Gradient } from "@components";
import supabase from "@/libs/supabase";

export async function getStaticProps() {
  let { data: saran, error } = await supabase.from("saran").select();
  if (error) {
    console.log(error);
  }
  return {
    props: { saran },
  };
}
export default function Menfess({ saran }) {
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
              {saran.map((saran) => (
                <Card
                  key={saran.id}
                  from={saran.from}
                  message={saran.text}
                  date={saran.created_at}
                />
              ))}
            </div>
          </Container>
        </div>
      </Layout>
    </div>
  );
}
