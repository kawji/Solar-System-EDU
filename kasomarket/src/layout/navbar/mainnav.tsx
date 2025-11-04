'use client'
import Logo from "@/ui/logo/logo"
import { Handbag, Search ,User ,Github  ,Sun  } from "lucide-react"
import Sectionsnav from "../navbar/sectionnav"
import { useTheme } from "@/app/providers/ThemeProvider"


export default function Mainnav() {
    const { theme, toggleTheme } = useTheme();

    return(
        <nav className="sticky w-full pt-5 pb-2 lg:pl-10 lg:pr-15 flex justify-between items-center  bg-white ">
            <div className=" p-0 m-0  ">
                <Logo size="lg" />     
            </div>
            <div className=" max-w-[40vw] w-full flex items-center justify-center  relative h-full shrink-0 ">
                <Sectionsnav />
            </div>
            <div className="w-auto h-full  items-center flex gap-5 ">
                <button className=" flex justify-center items-center bg-black/5 rounded-full w-10.5 h-10.5 cursor-pointer  text-black/75 transition-colors hover:bg-black/12 " 
                  onClick={toggleTheme}
                >
                    <Sun  width={20} />
                    
                </button>
                <span className=" flex justify-center items-center bg-black/5 rounded-full w-10.5 h-10.5 cursor-pointer  text-black/65 transition-colors hover:bg-black/12 " >
                    <Github   width={20} />
                    
                </span>
            </div>
        </nav>
    )
}



// Seaarc

// <div className=" w-[40vw]  relative h-full shrink-0 ">
// <Search width={15} className="absolute text-black/35 left-5 top-1/2 translate-y-[-50%]  " />
// <input type="text" placeholder="ค้นหาสินค้า" className="w-full py-2 px-15 text-black/75 outline-none placeholder:text-black/35 border border-black/19 rounded-full " />
// </div>