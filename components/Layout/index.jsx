import { Navbar, Logo, Container,Button,FooterTitle, FooterLink
 } from "@components";
 import {HiOutlineAnnotation} from 'react-icons/hi'

export default function Layout({ children }) {
     
  return (
    <div>
      <Navbar
        logo={
          <div className="flex items-center text-base tracking-wide text text-white uppercase xl:my-6">
            <Logo className="hidden md:flex" />
            <span className="px-2">Menfess OSIS/MPK</span>
          </div>
        }
        
        rightButton={{
          variant: "lightBlue",
          children: "Kirim Menfess",
          href: "/kirim-menfess",
        }}
      />
      {children}
      <footer className="relative  text-white flex">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-300 to-sky-300 z-[-1]" />
        <Container>
          <div className="flex py-14 border-b border-white/10 mb-14 flex-wrap">
            <div className="lg:w-6/12 md:w-7/12 w-full">
              <div className="text-2xl font-semibold text-white">
                Sudah siap mengirim Menfess kamu?
              </div>
              <div className="text-white/60 mt-2 text-lg">
                Kapan lagi coba kirim Menfess buat doi, kali aja dia nanti peka
                hehe
              </div>
            </div>
            <div className="ml-auto lg:w-6/12 md:w-4/12 flex lg:space-x-4 lg:justify-end justify-center items-center flex-wrap flex-col lg:flex-row space-y-4 lg:space-y-0 w-full mt-4 md:mt-0">
              <Button
                variant="solidYellow"
                href="/kirim-menfess"
                className="w-full justify-center md:w-auto"
              >
                Kirim Menfess
              </Button>
              <Button
                variant="lightOpacity"
                href="/menfess"
                className="w-full justify-center md:w-auto"
              >
                <HiOutlineAnnotation className="h-auto w-6 mr-2" /> Lihat
                Menfess
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap flex-row -mx-10 sm:justify-between">
            <div className=" px-10 mb-10 sm:w-6/12 lg:w-3/12 lg:mb-0">
              <div className="flex items-center">
                <Logo />
                <h2 className="text-xl font-bold md:ml-4">Menfess OSIS/MPK</h2>
              </div>
              <p className="mt-4 text-white/60 leading-relaxed">
                Design By{" "}
                <a
                  href="https://instagram.com/rafa.ar.id"
                  className="underline"
                >
                  {"<raf />"}
                </a>{" "}
                &bull; Copyright &copy; {new Date().getFullYear()}. All rights
                reserved.
              </p>
              <hr className="my-6 border-white/5" />
            </div>

            <div className="w-full px-10 lg:w-3/12 md:w-6/12">
              <FooterTitle>Social Media</FooterTitle>
              <ul className="mt-4">
                <li>
                  <FooterLink href="https://www.youtube.com/channel/UCQAn63ZnbmQ8b6KZhmIV03Q">
                    YouTube
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://www.instagram.com/osis.mpk_matick/">
                    Instagram
                  </FooterLink>
                </li>
              </ul>
            </div>
            <div className="w-full px-10 lg:w-3/12 md:w-6/12">
              <FooterTitle>SMK TI AL-Asiyah</FooterTitle>
              <ul className="mt-4">
                <li>
                  <FooterLink href="https://www.youtube.com/channel/UCsfNGLVQLSHf7N0uRLcESPg">
                    YouTube
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://www.instagram.com/smkalasiyah/">
                    Instagram
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://goo.gl/maps/DDyJcHG8r3fQEf6D7">
                    Lokasi
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
