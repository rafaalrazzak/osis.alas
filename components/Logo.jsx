import Image from "next/image";
export default function Logo({ className }) {
  const Img = ( {...props} ) => {
    return <Image width={50} height={50} {...props} />;
  };
  return (
    <div className={`md:gap-2 ${className}`}>
      <Img src="/static/logo-osis.png" alt="OSIS SMK AL-ASIYAH" />
    </div>
  );
}
