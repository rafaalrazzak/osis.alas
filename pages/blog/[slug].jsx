import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MdArrowBackIosNew } from "react-icons/md";
import Image from "next/future/image";
import supabase from "@/libs/supabase";
import { Container, Layout, Link, SEO } from "@components";
import localDate from "@/libs/localDate";

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data } = await supabase
    .from("blog")
    .select(`*, author (*)`)
    .filter("slug", "eq", slug)
    .single();
  return {
    props: {
      blog: data,
    },
  };
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from("blog").select("slug");
  const paths = data.map(({ slug }) => ({
    params: { slug: slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function Blog({ blog }) {
  const { title, created_at, article, description, author, thumbnail } = blog;
  const { name, avatar, instagram } = author;
  return (
    <>
      <SEO title={title} description={description} thumbnail={thumbnail} />
      <Layout>
        <div className="mx-6 my-12 ">
          <Link
            href="/"
            className="inline-flex items-center text-primary-900 transition duration-300 ease-in-out hover:text-primary-600"
          >
            <MdArrowBackIosNew size={13} />
            <h1 className="font-bold">Go home</h1>
          </Link>
        </div>
        <Container className="my-12 w-full">
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-4 text-primary-800">
              {/* Head */}
              <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                <time className="text-sm">{localDate(created_at)}</time>
                <h1 className="text-4xl font-bold">{title}</h1>
                <div className="flex  items-center gap-3 space-y-2 text-sm">
                  <Image
                    src={avatar}
                    width={35}
                    height={35}
                    className="rounded-full object-cover"
                    priority
                    alt={name}
                  />
                  <div>
                    <h1 className="font-semibold text-secondary-700">{name}</h1>
                    <Link
                      className="font-semibold text-primary-700 hover:text-primary-600 hover:underline"
                      href={`https:instagram.com/${instagram}`}
                    >
                      {`@${instagram}`}
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Head */}

              <Image src={thumbnail} className="rounded-lg " alt={title} />
              <div className="flex flex-col">
                <ReactMarkdown
                  className="text-secondary-900"
                  remarkPlugins={[remarkGfm]}
                >
                  {article}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
