import { PhoneCall } from "lucide-react"
import { Mail } from 'lucide-react';


export default function Topnav() {
    return(
    <nav className="relative top-0 left-0 w-full py-2 flex justify-center  bg-black px-3 ">
        <div className="flex items-center justify-between w-full h-full flex-1 max-w-[1200px]  ">
            <div className=" flex gap-5  flex-1 flex-col sm:flex-row text-[13px] text-white/95">

                <span className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer shrink-0">
                    <PhoneCall width={14} />
                    <p className=" font-extralight  ">082 680 4905</p>
                </span>

                <span className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer shrink-0">
                    <Mail width={14} />
                    <p className=" font-extralight t">std11038@tpu.ac.th</p>
                </span>
                <span className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer shrink-0">
                    <p className=" font-extralight  ">อัปเดตเมื่อ 04/11/2025</p>
                </span>

            </div>
            <div className=" flex-1 flex items-center justify-end ">
                <span className=" text-[13px] text-white/95 hover:text-blue-400 transition-colors cursor-pointer ">
                    Solar System EDU
                </span>
            </div>
        </div>
    </nav>
    )
}