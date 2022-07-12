import { FiTrendingUp, FiPlay } from "react-icons/fi";
import Image from "next/image";
import { Button, Container, HeroFeature } from "@components";
import { HiInboxIn, HiOutlineAnnotation } from "react-icons/hi";
import href from "@/data/href";
import { useUser } from "@/context/user";

export default function Hero() {
  const { user } = useUser();

  return (
    <section className="z-[-1] w-full bg-gradient-to-br from-teal-500 to-sky-500">
      <Container className="py-40 lg:pt-64 lg:pb-32">
        <div className="flex flex-wrap justify-center">
          <div className="w-full items-center justify-center px-8 text-center lg:w-6/12 lg:justify-start lg:text-left xl:w-6/12">
            <h1 className="text-4xl font-semibold  leading-tight text-white lg:text-5xl">
              Organisasi Siswa Intra Sekolah
            </h1>
            <p className="mx-auto mt-4 w-full max-w-xl  text-xl leading-relaxed text-white/80 xl:mx-0 ">
              Pusat Kegiatan Pembinaan Kesiswaan di sekolah untuk pengembangan
              minat, bakat serta potensi Siswa.
            </p>

            <div className="mt-10 flex w-full flex-wrap justify-center gap-4 md:flex-nowrap lg:justify-start">
              <Button
                variant="solidYellow"
                href={href.kirim}
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
    </section>
  );
}
