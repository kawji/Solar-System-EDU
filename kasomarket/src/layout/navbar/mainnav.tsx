'use client'
import Logo from "@/ui/logo/logo"
import { Handbag, Search ,User ,Github  ,Sun  } from "lucide-react"
import Sectionsnav from "../navbar/sectionnav"
import { useTheme } from "@/app/providers/ThemeProvider"


export default function Mainnav() {
    const { theme, toggleTheme } = useTheme();

    return(
        <nav className="sticky top-0 z-99 w-full h-auto pt-5 pb-2  flex justify-center items-center  bg-white px-3 border-b border-b-black/7 shadow-2xs ">
            <div className="flex items-center justify-between w-full h-full flex-1 max-w-[1200px]">
                <div className=" p-0 m-0  ">
                    <Logo size="lg" />     
                </div>
                <div className=" flex-1 w-full flex items-center justify-end  relative h-full shrink-0 ">
                    <Sectionsnav />
                </div>

            </div>
        </nav>
    )
}
