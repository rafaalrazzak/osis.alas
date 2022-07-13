import Image from "next/image";
export default function Logo({ className }) {
  const Img = (props) => {
    return <Image width={40} height={40} {...props} />;
  };
  return (
    <div className={`gap-2 ${className}`}>
      <Img src="/static/logo-osis.png" alt="OSIS SMK AL-ASIYAH" />
    </div>
  );
}
