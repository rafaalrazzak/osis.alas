import Image from "next/image";
export default function Background() {
  return (
    <>
      <Image
        src="/bg-gradient.png"
        layout="fill"
        className="w-screen opacity:80 lg:opacity-60"
        objectFit="cover"
      />
      <Image
        src="/grid.png"
        layout="fill"
        className="w-screen opacity-50"
        objectFit="cover"
      />
    </>
  );
}
