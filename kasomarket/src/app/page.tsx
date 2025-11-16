import Topnav from "@/layout/navbar/topnav";
import Mainnav from "@/layout/navbar/mainnav";
import Main from "@/layout/main/main";
import Footer from "@/layout/main/footer";

export default function Home() {
  return (
    <div className=" w-full min-h-screen text-black bg-[#f5f4f4] ">
      <Topnav />
      <Mainnav />
      <Main />
      <Footer />
    </div>
  );
}
