import Logo from "@/ui/logo/logo"
import { Search } from "lucide-react"


export default function Navbar() {
    return(
        <nav className="sticky w-full pt-5 pb-2 lg:pl-10 lg:pr-15 flex justify-between items-center  bg-white ">
            <div className=" p-0 m-0  ">
                <Logo size="lg" />     
            </div>
            <div className=" w-[40vw]  relative h-full shrink-0 ">
                <Search width={15} className="absolute text-black/35 left-5 top-1/2 translate-y-[-50%]  " />
                <input type="text" placeholder=" ค้นหา" className="w-full py-2 px-15 text-black/75 outline-none placeholder:text-white/35 border border-black/35 rounded-full " />
            </div>
            <div className="w-auto h-full bg-blue-500 ">
                
            </div>

        </nav>
    )
}