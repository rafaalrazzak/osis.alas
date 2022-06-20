import {
  HiOutlineSpeakerphone,
  HiOutlineChatAlt,
  HiOutlineLockClosed,
  HiInboxIn,
  HiOutlineAnnotation,
} from "react-icons/hi";
import { FiTrendingUp, FiPlay, FiUser } from "react-icons/fi";
import Slider from "react-slick";
import Image from "next/image";
import Head from "next/head";
import {
  Layout,
  Button,
  Container,
  HeroFeature,
  IntroCard,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  TestimonialCard,
} from "@components";
import supabase from "@/libs/supabase";
import href from "@/data/href";

export default function Home() {
  const session = supabase.auth.session();

  const convertImage = ({ w, h, src }) => `
       <Image src="${src}" width="${w}" height="${h}" quality="1"/>
         `;
  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>OSIS | SMK AL-ASIYAH</title>
      </Head>
      <Layout noBg>
        <div className="z-[-1] w-full bg-gradient-to-br from-teal-500 to-sky-500">
          <Container className="py-40 lg:pt-64 lg:pb-32">
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
                    href={href.kirim}
                    className={`mb-2 w-full justify-center sm:w-8/12 md:w-4/12 lg:w-8/12 ${
                      session ?? "w-full sm:w-8/12 md:w-4/12 lg:w-8/12"
                    }`}
                  >
                    <HiInboxIn className="mr-2 h-auto w-6" />
                    Kirim Saran
                  </Button>
                  {session && (
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
                <Image
                  width={300}
                  height={300}
                  alt="Hero"
                  src="/Hero.png"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    convertImage(10, 10, "/Hero.png")
                  )}`}
                />
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
                  <div className="absolute -top-12 left-5 z-[-1] h-64 w-64 bg-blue-100 shadow-lg sm:top-5 sm:left-[5px] lg:flex" />
                  <div className="absolute bottom-[-35px] right-[5px] z-[-1] h-64 w-64 rounded-full bg-blue-500 shadow-lg lg:flex" />
                  <div className="flex w-full items-center justify-center rounded-lg bg-[#FFB1A3] shadow-xl">
                    <Image
                      alt="Intro"
                      src="/Intro.png"
                      width="300"
                      height="300"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        convertImage(10, 10, "/Intro.png")
                      )}`}
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
            <div className="-mx-6 flex flex-wrap items-center">
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
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      convertImage(10, 10, "/Menfess.png")
                    )}`}
                  />
                </div>
              </div>
            </div>

            <hr className="my-5 border-gray-100 md:my-10" />
          </Container>
        </section>

        <section className="py-20 lg:py-40">
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
              <TestimonialCard
                testimoni={'"Kita resmi menamatkan game membuat web"'}
                avatar="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                name="Ilham Kurniawan"
                job="Langganan Bang Windah"
              />
              <TestimonialCard
                testimoni={'"GG Gaming Ga Guys?"'}
                avatar="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                name="Windah Basudara"
                job="Youtuber Gaming"
              />
              <TestimonialCard
                testimoni={'"Gamer ganteng idaman"'}
                avatar="https://images.unsplash.com/photo-1599566147214-ce487862ea4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                name="Reza Pardede"
                job="Yotuber No 1"
              />
              <TestimonialCard
                testimoni={'"Chotomate kudasai"'}
                avatar="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                name="Regi Halimawan"
                job="Youtuber No Toxic"
              />
            </Slider>
          </Container>
        </section>
      </Layout>
    </>
  );
}
