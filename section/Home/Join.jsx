import Image from "next/image";
import {
  Container,
  SectionBadge,
  SectionDescription,
  SectionTitle,
} from "@components";
export default function Join() {
  return (
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
              />
            </div>
          </div>
        </div>

        <hr className="my-5 border-gray-100 md:my-10" />
      </Container>
    </section>
  );
}
