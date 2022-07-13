import Image from "next/future/image";
export default function Background() {
  return (
    <>
      <Image
        src="/bg-gradient.png"
        className="opacity:80  object-cover lg:opacity-60"
      />
      <Image src="/grid.png" className="object-cover opacity-30" />
    </>
  );
}
