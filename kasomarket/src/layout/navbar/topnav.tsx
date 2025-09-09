import { PhoneCall } from "lucide-react"
import { Mail } from 'lucide-react';


export default function Topnav() {
    return(
        <nav className="relative top-0 left-0 w-full py-2 lg:pl-10 lg:pr-20 flex justify-between  bg-black ">
        <div className=" flex gap-5  flex-1  text-[13px] text-white/95">

            <span className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer ">
                <PhoneCall width={14} />
                <p className=" font-extralight  ">08   680 4905</p>
            </span>

            <span className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer ">
                <Mail width={14} />
                <p className=" font-extralight t">std11038@tpu.ac.th</p>
            </span>
            <span className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer ">
                <p className=" font-extralight  ">ถ้าคุณชอบเที่ยวแพทัวร์ เราคือเพื่อนกัน</p>
            </span>

        </div>
        <div className=" flex-1 flex items-center justify-end ">
            <span className=" text-[13px] text-white/95 hover:text-red-500 transition-colors cursor-pointer ">
                ร้านค้าใกล้คุณ
            </span>
        </div>

    </nav>
    )
}