import Logo from "@/ui/logo/logo"
import { Handbag, Search ,User} from "lucide-react"


export default function Navbar() {
    return(
        <nav className="sticky w-full pt-5 pb-2 lg:pl-10 lg:pr-15 flex justify-between items-center  bg-white ">
            <div className=" p-0 m-0  ">
                <Logo size="lg" />     
            </div>
            <div className=" w-[40vw]  relative h-full shrink-0 ">
                <Search width={15} className="absolute text-black/35 left-5 top-1/2 translate-y-[-50%]  " />
                <input type="text" placeholder="ค้นหาสินค้า" className="w-full py-2 px-15 text-black/75 outline-none placeholder:text-black/35 border border-black/19 rounded-full " />
            </div>
            <div className="w-auto h-full  items-center flex gap-5 ">
                <span className=" flex justify-center items-center bg-black/5 rounded-full w-10.5 h-10.5 cursor-pointer  text-black/75 transition-colors hover:bg-black/12 " >
                    <User width={20} />
                    
                </span>
                <span className=" flex justify-center items-center bg-black/5 rounded-full w-10.5 h-10.5 cursor-pointer  text-black/65 transition-colors hover:bg-black/12 " >
                    <Handbag width={20} />
                    
                </span>
            </div>
        </nav>
    )
}