import Image from "next/image";
export default function Logo({ className }) {
  const Img = ({ src }) => {
    return <Image src={src} alt="Logo" width={50} height={50} />;
  };
  return (
    <div className={`hidden md:flex md:flex-row gap-x-1 px-2 ${className}`}>
      <Img src="/static/logo-osis.png" />
    </div>
  );
}
