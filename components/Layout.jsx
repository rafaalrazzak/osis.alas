import { HiOutlineAnnotation, HiInboxIn } from "react-icons/hi";
import { Toaster } from "react-hot-toast";
import {
  Navbar,
  Logo,
  Container,
  Button,
  FooterTitle,
  FooterLink,
  Gradient,
} from "@components";
import href from "@/data/href";
import { useUser } from "@/context/user";

export default function Layout({ children, noBg }) {
  const { user } = useUser();

  return (
    <>
      <Navbar
        items={[
          { text: "Home", href: href.home },
          { text: "Tentang", href: href.tentang },
          { text: "Kontak", href: href.kontak },
          { text: "Kirim Saran", href: href.kirimSaran },
        ]}
        logo={
          <div className="flex w-full items-center justify-start text-base uppercase tracking-wide text-white md:gap-2 xl:my-6 ">
            <Logo />
            <span className="hidden text-sm drop-shadow-sm md:flex md:px-2">
              OSIS SMK AL-ASIYAH
            </span>
          </div>
        }
        rightButton={
          !user
            ? {
                variant: "solidBlue",
                children: "Sign In",
                href: "/auth/signin",
              }
            : {
                variant: "solidRed",
                children: "Sign Out",
                href: "/auth/signout",
              }
        }
      />
      {!noBg && <Gradient />}

      <Toaster />
      {children}
      <footer className=" flex bg-gradient-to-br from-teal-500 to-sky-500 text-white">
        <Container>
          <div className="mb-14 flex flex-wrap border-b border-white/10 py-14">
            <div className="w-full md:w-7/12 lg:w-6/12">
              <div className="text-2xl font-semibold text-white">
                Sudah siap mengirim saran dan masukan kamu?
              </div>
              <div className="mt-2 text-lg text-white/60">
                Kapan lagi coba kirim saran dan masukan buat membangun OSIS
              </div>
            </div>
            <div className="ml-auto mt-4 flex w-full flex-col flex-wrap items-center justify-center space-y-4 md:mt-0 md:w-4/12 lg:w-6/12 lg:flex-row lg:justify-end lg:space-x-4 lg:space-y-0">
              <Button
                variant="solidYellow"
                href={href.kirim}
                className="w-full justify-center md:w-auto"
              >
                <HiInboxIn className="mr-2 h-auto w-6" />
                Kirim Saran
              </Button>
              {user && (
                <Button
                  variant="lightOpacity"
                  href={href.saran}
                  className="w-full justify-center md:w-auto"
                >
                  <HiOutlineAnnotation className="mr-2 h-auto w-6" /> Lihat
                  Saran
                </Button>
              )}
            </div>
          </div>
          <div className="-mx-10 flex flex-1 flex-row flex-wrap sm:justify-between">
            <div className=" mb-10 px-10 sm:w-6/12 lg:mb-0 lg:w-3/12">
              <div className="flex items-center gap-2 ">
                <Logo />
                <h2 className="font-bold md:ml-4">OSIS SMK AL-ASIYAH</h2>
              </div>
              <p className="mt-4 leading-relaxed text-white/60">
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

            <div className="w-full px-10 md:w-6/12 lg:w-3/12">
              <FooterTitle>OSIS SMK-Al-Asiyah</FooterTitle>
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
            <div className="my-5 w-full px-10 md:w-6/12 lg:w-3/12">
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
    </>
  );
}
