import {
  HiOutlineSpeakerphone,
  HiInboxIn,
  HiOutlineAnnotation,
	HiOutlineArrowSmRight,
} from "react-icons/hi";
import { FiTrendingUp, FiPlay, FiUser } from "react-icons/fi";
import Slider from "react-slick";
import Image from "next/image";
import {
  Layout,
  Button,
  Container,
  HeroFeature,
  IntroCard,
	Link,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  TestimonialCard,
  SEO,
  BlogCard,
} from "@components";
import { useUser } from "@/context/user";
import href from "@/data/href";
import supabase from "@/libs/supabase";
import settings from "@/libs/sliderSetting";

export async function getStaticProps() {
  const { data: pendapat, error: errorPendapat } = await supabase
    .from("pendapat")
    .select();
  const { data: blog, error: errorBlog } = await supabase
    .from("blog")
    .select(`*, author (*)`)
    .order("id", { ascending: false });
  if (errorPendapat) throw errorPendapat;
  if (errorBlog) throw errorBlog;
  return {
    props: { blog, pendapat },
  };
}

export default function Home({ blog, pendapat }) {
  const { user } = useUser();
  const MAX_BLOG_CARD = 3;
  return (
    <>
      <SEO title="Home" />
      <Layout noBg>
        <div className="z-[-1] w-full bg-gradient-to-br from-teal-500 to-sky-500">
          <Container className="lg:pt-42 py-24 lg:pb-32">
            <div className="flex flex-wrap justify-center">
              <div className="w-full items-center justify-center px-8 text-center lg:w-6/12 lg:justify-start lg:text-left xl:w-6/12">
                <h1 className="text-4xl font-semibold  leading-tight text-white lg:text-5xl">
                  Organisasi Siswa Intra Sekolah
                </h1>
                <p className="mx-auto mt-4 w-full max-w-xl  text-xl leading-relaxed text-white/80 xl:mx-0 ">
                  Pusat Kegiatan Pembinaan Kesiswaan di sekolah untuk
                  pengembangan minat, bakat serta potensi Siswa.
                </p>

                <div className="mt-10 flex w-full flex-wrap justify-center gap-4 md:flex-nowrap lg:justify-start">
                  <Button
                    variant="solidYellow"
                    href={href.kirimSaran}
                    className={`mb-2 w-full justify-center sm:w-8/12 md:w-4/12 lg:w-8/12 ${
                      user ?? "w-full sm:w-8/12 md:w-4/12 lg:w-8/12"
                    }`}
                  >
                    <HiInboxIn className="mr-2 h-auto w-6" />
                    Kirim Saran
                  </Button>
                  {user && (
                    <Button
                      variant="outlineBlue"
                      href={href.saran}
                      className="mb-2 w-full  justify-center sm:w-8/12 md:w-4/12 lg:w-8/12"
                    >
                      <HiOutlineAnnotation className="mr-2 h-auto w-6" />
                      Lihat Saran
                    </Button>
                  )}
                </div>
              </div>
              <div className="align-center mt-12 flex w-full justify-center rounded-lg bg-[#EAB308] md:w-8/12 lg:mt-0 lg:w-6/12">
                <Image width={300} height={300} alt="Hero" src="/Hero.png" />
              </div>
            </div>
            <div className="mx-auto mt-20 flex flex-wrap justify-center space-y-10 md:mt-40 lg:space-x-6 lg:space-y-0">
              <div className="flex w-full border-b border-white/30 pb-8 md:justify-center lg:flex-1 lg:justify-end lg:border-r lg:border-b-0 lg:pr-12 lg:pb-0">
                <HeroFeature
                  title="Kreativitas"
                  description="Mengembangkan kreativitas siswa"
                  icon={FiTrendingUp}
                />
              </div>
              <div className="flex w-full md:justify-center lg:flex-1">
                <HeroFeature
                  title="Program-program menarik"
                  description="Menjalankan program-program menarik"
                  icon={FiPlay}
                />
              </div>
            </div>
          </Container>
        </div>

        <section className="bg-fixed py-12 md:py-24">
          <Container>
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 lg:mt-10 lg:w-6/12 lg:px-10">
                <div className="relative w-full sm:p-10">
                  <div className="absolute top-4 -left-4 z-[-1] h-64 w-64 bg-blue-100 shadow-lg sm:top-5 sm:left-[5px] lg:top-0 lg:left-5 lg:flex" />
                  <div className="absolute bottom-[-30px] right-[5px] z-[-1] h-64 w-64 rounded-full bg-blue-500 shadow-lg lg:bottom-0 lg:right-[5px] lg:flex" />
                  <div className="flex w-full items-center justify-center rounded-lg bg-[#FFB1A3] shadow-xl">
                    <Image
                      alt="Intro"
                      src="/Intro.png"
                      width="300"
                      height="300"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-20 lg:mt-0 lg:w-6/12">
                <SectionBadge className="text-white">Introduction</SectionBadge>
                <SectionTitle className="mb-8">
                  Apa manfaatnya jadi{" "}
                  <span className="font-semibold"> OSIS?</span>
                </SectionTitle>

                <IntroCard
                  icon={FiUser}
                  title="Melatih Jiwa Kepemimpinan Siswa"
                  content="Jiwa kepemimpinan merupakan keniscayaan bagi generasi muda"
                />
                <IntroCard
                  icon={HiOutlineSpeakerphone}
                  title="Melatih Public Speaking Siswa"
                  content="Public Speaking akan sangat-sangat berguna untuk masa depan siswa "
                />
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className="flex flex-wrap items-center">
              <div className="order-2 w-full px-6 lg:w-6/12 xl:order-1">
                <SectionBadge>Ayo Gabung Besama Kami</SectionBadge>
                <SectionTitle>
                  Kami akan membimbing kalian menuju masa depan yang lebih baik{" "}
                  <span role="img" aria-label="ok">
                    👌
                  </span>
                </SectionTitle>
                <SectionDescription>
                  Banyak program-program keren yang akan menyambut kamu
                </SectionDescription>
              </div>
              <div className="order-1 mb-10 w-full px-6 lg:mx-0 lg:mb-0 lg:w-6/12 xl:order-2 ">
                <div className="flex w-full items-center justify-center rounded-lg bg-[#1E90FF] shadow-lg">
                  <Image
                    className="rounded-lg shadow-lg"
                    src="/Join.png"
                    alt="Join"
                    width={300}
                    height={500}
                  />
                </div>
              </div>
            </div>

            <hr className="my-5 border-gray-100 md:my-10" />
          </Container>
        </section>

        <section className="py-6">
          <div className="mx-4 flex flex-col lg:mx-24 ">
            <div className="w-full px-6 py-4 text-center md:text-start">
              <SectionBadge>Artikel terbaru</SectionBadge>
              <SectionDescription>
                Artikel terbaru yang telah kami tulis sedemikian rupa
              </SectionDescription>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-4 space-y-5">
              {blog
                .slice(0, MAX_BLOG_CARD)
                .map(
                  ({
                    id,
                    created_at,
                    title,
                    description,
                    thumbnail,
                    author,
                    slug,
                  }) => (
                    <BlogCard
                      key={id}
                      title={title}
                      description={description}
                      thumbnail={thumbnail}
                      date={created_at}
                      author={author}
                      slug={slug}
                    />
                  )
                )}
            </div>
						<div className="mx-3 my-6 self-end">
          <Link
            href={href.blog}
            className="inline-flex items-center text-primary-900 transition duration-300 ease-in-out hover:text-primary-600"
          >
            <h1 className="font-bold">All Post</h1>
            <HiOutlineArrowSmRight size={13} />
          </Link>
        </div>
          </div>
        </section>

        <section className="py-20">
          <Container>
            <div className="-mx-6 flex flex-wrap">
              <div className="w-full px-6 lg:w-6/12">
                <SectionBadge>Pendapat</SectionBadge>
                <SectionTitle>
                  Apa kata orang lain tentang{" "}
                  <span className="font-semibold">OSIS</span>?
                </SectionTitle>
              </div>
            </div>
            <Slider className="mt-16" {...settings}>
              {pendapat?.map(({ name, text, avatar, job }, i) => (
                <TestimonialCard
                  key={i}
                  testimoni={`"${text}"`}
                  avatar={avatar}
                  name={name}
                  job={job}
                />
              ))}
            </Slider>
          </Container>
        </section>
      </Layout>
    </>
  );
}
