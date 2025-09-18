'use client'
import clsx from "clsx"
import { Grid2X2 ,ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"


export default function Footnav() {
    const path = usePathname();

    
    return(
        <nav className="relative w-full pt-5 pb-2 lg:pl-10 lg:pr-[55px] flex justify-between items-center  bg-white z-99  ">
            <div className="flex-1 flex justify-start ">
                <span className=" px-5 py-2 lg:rounded-sm bg-black/3 text-black flex items-center gap-2 lg:text-[14px] ">
                    <Grid2X2 />
                    หมวดหมู่สินค้า
                    <ChevronRight className="text-black/35 " />
                </span>
            </div>

            <div className="flex-1 flex justify-end  gap-4 ">
                <span className={clsx("p-2 text-black/75 text-[15px] hover:text-red-500 transition-colors cursor-pointer " ,path==='/' ? 'text-red-700' : '' )}>
                    หน้าแรก
                </span>
                <span className={clsx("p-2 text-black/75 text-[15px] hover:text-red-500 transition-colors cursor-pointer " )}>
                คอมพิวเตอร์เซต
                </span>
                <span className={clsx("p-2 text-black/75 text-[15px] hover:text-red-500 transition-colors cursor-pointer " )}>
                จัดสเปกคอม
                </span>
                <span className={clsx("p-2 text-black/75 text-[15px] hover:text-red-500 transition-colors cursor-pointer " )}>
                บทความ
                </span>
                <span className={clsx("p-2 text-black/75 text-[15px] hover:text-red-500 transition-colors cursor-pointer " )}>
                ติดต่อเรา
                </span>
                <span className={clsx("p-2 text-black/75 text-[15px] hover:text-red-500 transition-colors cursor-pointer " )}>
                เกี่ยวกับเรา
                </span>


            </div>
        
        </nav>
    )
}