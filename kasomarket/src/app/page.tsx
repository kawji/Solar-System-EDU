import Navbar from "@/layout/feature/navbar";
import Carousel from "@/layout/feature/carousel";


export default function Home() {
  return (
    <div className="bg-[#ececec] w-full min-h-screen text-black ">
      <Navbar />
      <Carousel />
      <div className=" w-150px h-auto  " >
        <Carousel />
      </div>








    </div>
  );
}
