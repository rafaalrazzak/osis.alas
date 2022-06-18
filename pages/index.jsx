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
import {
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineChatAlt2,
  HiOutlineChatAlt,
  HiOutlineLockClosed,
} from "react-icons/hi";
import Slider from "react-slick";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
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
      <Layout>
        <div className="relative">
          <div className="absolute w-full bottom-0 top-0 bg-gradient-to-br from-teal-500 to-sky-500 z-[-1]" />
          <Container className="lg:pt-64 lg:pb-32 py-40">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-8 items-center text-center justify-center lg:w-6/12 xl:w-6/12 lg:text-left lg:justify-start">
                <h1 className="text-4xl font-semibold  leading-tight text-white lg:text-5xl">
                  Organisasi Siswa Intra Sekolah
                </h1>
                <p className="mx-auto mt-4 text-xl leading-relaxed  text-white/80 xl:mx-0 w-full max-w-xl ">
                  Merupakan pesan yang ingin disampaikan kepada seseorang tanpa
                  mengungkapkan identitas pengirim.
                </p>

                <div className="flex flex-wrap mt-10 ">
                  <Button
                    variant="solidYellow"
                    href="/kirim"
                    className="justify-center w-full mb-2 md:mb-0 md:mr-4 md:w-auto"
                  >
                    Kirim Saran
                  </Button>
                </div>
              </div>
              <div className="bg-[#EAB308] mt-12 lg:mt-0 justify-center align-center rounded-lg flex w-full md:w-6/12">
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
            <div className="flex lg:space-x-6 md:mt-40 mt-20 flex-wrap space-y-10 lg:space-y-0">
              <div className="lg:flex-1 w-full lg:border-r border-white/10">
                <HeroFeature
                  title="Pesan Di Enskirpsi End-To-End"
                  description="Bahkan kami sendiri tidak tahu siapa yang mengirim pesan tersebut."
                  icon={HiOutlineLockClosed}
                />
              </div>
              <div className="lg:flex-1 w-full lg:border-r border-white/10">
                <HeroFeature
                  title="Pesan Dikirimkan Secara Otomatis"
                  description="Kami akan mengirimkan pesan kepada seseorang yang Anda inginkan."
                  icon={HiOutlineChatAlt}
                />
              </div>
            </div>
          </Container>
        </div>

        <section className="py-20 lg:py-40 bg-fixed">
          <Container>
            <div className="flex flex-wrap items-center -mx-10">
              <div className="w-full px-4 lg:w-6/12 lg:px-10 lg:mt-10">
                <div className="relative sm:p-10 w-full">
                  <div className="absolute -top-6 lg:flex sm:top-5 left-5 sm:left-[5px] z-[-1] w-64 h-64 bg-blue-100 shadow-lg" />
                  <div className="absolute lg:flex bottom-[-35px] right-[5px] z-[-1] w-64 h-64 bg-blue-500 rounded-full shadow-lg" />
                  <div className="bg-[#FFB1A3] rounded-lg shadow-xl flex items-center justify-center w-full">
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
              <div className="lg:w-6/12 px-10 mt-20 lg:mt-0">
                <SectionBadge>Introduction</SectionBadge>
                <SectionTitle className="mb-8">
                  Untuk apa kami membuat{" "}
                  <span className="font-semibold"> Website ini?</span>
                </SectionTitle>

                <IntroCard
                  icon={HiOutlineHeart}
                  title="Memberikan Sebuah Ruang Untuk Mengungkapkan Rasa"
                  content="Kami membuat web ini untuk membantu kalian mengungkapkan rasa kepada orang yang ada suka"
                />
                <IntroCard
                  icon={HiOutlineSparkles}
                  title="Menunjukan Sebuah Peluang Di Dunia TI Untuk Siswa SMK TI AL-Asiyah"
                  content="Dunia TI begitu luas dan tak akan pernah habis untuk dijelajahi oleh siswa SMK TI AL-Asiyah"
                />
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className="flex flex-wrap items-center -mx-6">
              <div className="order-2 w-full px-6 lg:w-6/12 xl:order-1">
                <SectionBadge>Mari Menfess</SectionBadge>
                <SectionTitle>
                  Mari Coba Untuk Mengirimkan Pesan Misterius Untuk Orang Yang
                  Anda Suka{" "}
                  <span role="img" aria-label="ok">
                    👌
                  </span>
                </SectionTitle>
                <SectionDescription>
                  Kami siap menampung pesan anda untuk orang yang anda suka
                </SectionDescription>
              </div>
              <div className="order-1 w-full px-6 mb-10 xl:order-2 lg:w-6/12 lg:mx-0 lg:mb-0 ">
                <div className="flex items-center justify-center bg-[#1E90FF] rounded-lg shadow-lg w-full">
                  <Image
                    className="shadow-lg rounded-lg"
                    src="/Menfess.png"
                    alt="Mari Menfess"
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

            <hr className="border-gray-100 md:my-10 my-5" />
          </Container>
        </section>

        <section className="py-20 lg:py-40">
          <Container>
            <div className="flex -mx-6 flex-wrap">
              <div className="lg:w-6/12 w-full px-6">
                <SectionBadge>Testimonial</SectionBadge>
                <SectionTitle>
                  Apa kata anonymous yang pernah{" "}
                  <span className="font-semibold">kirim Menfess</span> kesini?
                </SectionTitle>
              </div>
            </div>
            <Slider className="mt-16" {...settings}>
              <TestimonialCard
                testimoni={'"Kata Ilham Udah Tamat Gamenya Guys "'}
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
                testimoni={'"Gammer ganteng idaman"'}
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
