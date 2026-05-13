import Image from "next/image";
import Logo43 from "@/public/images/logo43.png";

export default function Dashboard() {
  return (
    <div className="logoWrapper flex justify-center ">
      <div className="logo">
        <Image src={Logo43} alt="logo" height={500}></Image>
      </div>
    </div>
  );
}
