import Topnav from "@/layout/navbar/topnav";
import Navbar from "@/layout/navbar/navbar";
import Footnav from "@/layout/navbar/footnav";



export default function Home() {
  return (
    <div className="bg-[#dedede] w-full min-h-screen text-black ">
      <Topnav />
      <Navbar />
      <Footnav />
    </div>
  );
}
