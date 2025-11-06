'use client'
import clsx from "clsx"
import { Grid2X2 ,ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"


export default function Sectionsnav() {
    const path = usePathname();

    
    return(
            <div className="flex items-center justify-end text-[16px] gap-4 ">
                <span className={clsx("p-2 text-black/75  hover:text-blue-500 transition-colors cursor-pointer " ,path==='/' ? 'text-blue-700' : '' )}>
                    ส่วนนำ
                </span>
                <span className={clsx("p-2 text-black/75  hover:text-blue-500 transition-colors cursor-pointer " )}>
                    ระบบสุริยะคือ
                </span>
                <span className={clsx("p-2 text-black/75  hover:text-blue-500 transition-colors cursor-pointer " )}>
                    การกำเนิดระบบสุริยะ
                </span>
                <span className={clsx("p-2 text-black/75 hover:text-blue-500 transition-colors cursor-pointer " )}>
                    ดาวเคราะห์
                </span>
                <span className={clsx("p-2 text-black/75 hover:text-blue-500 transition-colors cursor-pointer " )}>
                    สรุปเนื้อหา
                </span>
                <span className={clsx("p-2 text-black/75 hover:text-blue-500 transition-colors cursor-pointer " )}>
                    ติดต่อเรา
                </span>


            </div>
    )
}