import Image from "next/future/image";
export default function Logo({ className }) {
  return (
    <div className={`gap-2 w-10 h-10 ${className}`}>
      <Image
        src="/static/logo-osis.png"
        alt="OSIS SMK AL-ASIYAH"
      />
    </div>
  );
}
