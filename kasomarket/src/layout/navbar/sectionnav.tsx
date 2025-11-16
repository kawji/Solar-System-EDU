'use client'
import clsx from "clsx"
import { TextAlignEnd, X, Earth } from 'lucide-react';
import { usePathname } from "next/navigation"
import { useState } from "react";

export default function Sectionsnav() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false); // << state ควบคุม sidebar

    return (
        <div className="flex items-center justify-end lg:text-[16px] gap-4 w-full h-auto ">

            {/* Navbar (Desktop) */}
            <span className={clsx("p-2 text-black/75 hover:text-blue-500 transition-colors cursor-pointer hidden ", path==='/' ? 'text-blue-700' : '' )}>
                กำเนิดระบบสุริยะ
            </span>
            <span className="p-2 text-black/75 hover:text-blue-500 transition-colors cursor-pointer hidden ">
                เขตของระบบสุริยะ
            </span>
            <span className="p-2 text-black/75 hover:text-blue-500 transition-colors cursor-pointer hidden ">
                ส่วนประกอบระบบสุริยะ
            </span>
            <span className="p-2 text-black/75 hover:text-blue-500 transition-colors cursor-pointer hidden ">
                ประเภทดาวเคราะห์
            </span>
            <span className="p-2 text-black/75 hover:text-blue-500 transition-colors cursor-pointer hidden ">
                ดาวเคราะห์ทั้ง 8
            </span>
            <span className="p-2 text-black/75 hover:text-blue-500 transition-colors cursor-pointer hidden">
                วัตถุท้องฟ้า
            </span>

            <TextAlignEnd
                width={50}
                height={40}
                onClick={() => setIsOpen(true)}
                className="p-2 text-black/75 hover:text-blue-500 transition-colors cursor-pointer block"
            />

            <div
                className={clsx(
                    "fixed right-0 top-0 w-full sm:max-w-[500px] h-screen bg-white shadow-lg z-[200] transition-transform duration-300 flex flex-col",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                
                <div className="w-full px-4 py-2 mt-2 flex items-center gap-2">
                    <span
                        className="p-3 rounded-full cursor-pointer hover:bg-black/5"
                        onClick={() => setIsOpen(false)}  // ปิด Sidebar
                    >
                        <X />
                    </span>

                    <span className="text-black/95 font-black text-lg flex items-center gap-2">
                        <Earth /> ภาษาไทย TH
                    </span>
                </div>

                
                <div className="flex flex-col w-full">

                    <div className="w-full px-8 py-4 text-black/95 font-black text-xl">
                        หัวข้อเรื่อง
                    </div>

                    <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer">
                        • การกำเนิดระบบสุริยะ
                    </div>

                    <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer">
                        • เขตต่างๆ ของระบบสุริยะ
                    </div>

                    <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer">
                        • ส่วนประกอบหลักของระบบสุริยะ
                    </div>

                    <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer">
                        • การแบ่งประเภทดาวเคราะห์
                    </div>

                    <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer">
                        • ข้อมูลของดาวเคราะห์แต่ละดวง
                    </div>

                    <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer">
                        • วัตถุท้องฟ้าอื่น ๆ
                    </div>
                </div>

                <div className="w-[85%] h-[1px] bg-black/18 my-5 mx-auto" />

                <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer">
                    แจ้งปัญหาต่างๆ
                </div>
                <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer">
                    ติดต่อเรา & ช่องทางการติดต่อ
                </div>
            </div>
        </div>
    );
}
