import Image from "next/future/image";
export default function Logo({ className }) {
  return (
    <div className={`gap-2 ${className}`}>
      <Image
        src="/static/logo-osis.png"
        alt="OSIS SMK AL-ASIYAH"
        width={40}
        height={40}
      />
    </div>
  );
}
