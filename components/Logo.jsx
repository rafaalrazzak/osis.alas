import Image from "next/image";
import {myLoader} from "@/libs/loader"
export default function Logo({ className }) {
  const Img = ({ source }) => {
    return <Image src={source} alt="Logo" width={50} height={50} loader={myLoader}/>;
  };
  return (
    <div className={`hidden md:flex md:flex-row gap-x-1 px-2 ${className}`}>
      <Img source="/static/logo-osis.png" />
      <Img source="/static/logo-mpk.png" />
    </div>
  );
}
