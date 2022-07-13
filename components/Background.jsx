import Image from "next/future/image";
export default function Background() {
  return (
    <>
      <Image
        src="/bg-gradient.png"
        className="opacity:80  object-cover lg:opacity-60"
        alt="Background"
      />

      <Image
        src="/grid.png"
        className="object-cover opacity-30"
        alt="Grid"
      />
    </>
  );
}
