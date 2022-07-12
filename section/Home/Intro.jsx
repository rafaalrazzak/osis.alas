import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import Image from "next/image";
import { Container, IntroCard, SectionBadge, SectionTitle } from "@components";
export default function Intro() {
  return (
    <section className="bg-fixed py-12 md:py-24">
      <Container>
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 lg:mt-10 lg:w-6/12 lg:px-10">
            <div className="relative w-full sm:p-10">
              <div className="absolute -top-12 left-5 z-[-1] h-64 w-64 bg-blue-100 shadow-lg sm:top-5 sm:left-[5px] lg:flex" />
              <div className="absolute bottom-[-35px] right-[5px] z-[-1] h-64 w-64 rounded-full bg-blue-500 shadow-lg lg:flex" />
              <div className="flex w-full items-center justify-center rounded-lg bg-[#FFB1A3] shadow-xl">
                <Image alt="Intro" src="/Intro.png" width="300" height="300" />
              </div>
            </div>
          </div>
          <div className="mt-20 lg:mt-0 lg:w-6/12">
            <SectionBadge className="text-white">Introduction</SectionBadge>
            <SectionTitle className="mb-8">
              Apa manfaatnya jadi <span className="font-semibold"> OSIS?</span>
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
  );
}
