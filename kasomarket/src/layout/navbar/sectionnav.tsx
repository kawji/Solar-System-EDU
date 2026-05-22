'use client'
import clsx from "clsx"
import { TextAlignEnd, X, Earth } from 'lucide-react';
import { usePathname } from "next/navigation"
import { useState } from "react";
import { scrollToSection } from "@/utils/scrollToSections";
import { SiGmail ,SiDiscord } from "react-icons/si";
import { FaGithub ,FaFacebookF ,FaInstagram   } from "react-icons/fa";

export default function Sectionsnav() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-end lg:text-[15px] gap-4 w-full h-full max-h-screen ">

            <TextAlignEnd
                width={50}
                height={40}
                onClick={() => setIsOpen(true)}
                className="p-2 text-black/75 hover:text-blue-500 transition-colors cursor-pointer block"
            />

            <div
                className={clsx(
                    "fixed right-0 top-0 w-full sm:max-w-[500px] h-screen bg-white shadow-lg z-200 transition-transform duration-300 flex flex-col",
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

                    <span className="text-black/95 font-black  flex items-center gap-2">
                        <Earth /> ภาษาไทย
                    </span>
                </div>

                
                <div className="flex flex-col w-full">

                    <div className="w-full px-8 py-4 text-black/95 font-black">
                        หัวข้อเรื่อง
                    </div>

                    <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer transition-colors"
                    onClick={() => {
                            scrollToSection('formation') 
                            setIsOpen(false) 
                        }}
                    >
                        • การกำเนิดระบบสุริยะ
                    </div>

                    <div   className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer transition-colors"
                    onClick={() => {
                        scrollToSection('zones')
                        setIsOpen(false)
                    }}
                    >
                        • เขตต่างๆ ของระบบสุริยะ
                    </div>

                    <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer transition-colors"
                    onClick={() => {
                        scrollToSection('components')
                        setIsOpen(false)
                    }}
                    >
                        • ส่วนประกอบหลักของระบบสุริยะ
                    </div>

                    <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer transition-colors"
                    onClick={() => {
                        scrollToSection('type')
                        setIsOpen(false)
                    }}
                    >
                        • การแบ่งประเภทดาวเคราะห์
                    </div>

                    <div className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer transition-colors"
                    onClick={() => {
                        scrollToSection('planet')
                        setIsOpen(false)
                    }}
                    >
                        • ข้อมูลของดาวเคราะห์แต่ละดวง
                    </div>

                    <div  className="w-full px-8 py-4 hover:bg-black/5 cursor-pointer transition-colors "
                    onClick={() => {
                        scrollToSection('object')
                        setIsOpen(false)
                    }}
                    >
                        • วัตถุท้องฟ้าอื่น ๆ
                    </div>
                </div>

                <div className="w-[85%] h-px bg-black/18 my-5 mx-auto" />

                <a href="https://github.com/kawji" className="w-full px-8 py-4  hover:bg-black/5  text-black/95">
                    แจ้งปัญหาต่างๆ
                </a>
                <div className="w-full mt-4 px-8 py-4 text-black/95">
                    ติดต่อเรา & ช่องทางการติดต่อ
                </div>
                
                <div className="w-full flex items-center justify-center pb-4 " >
                    <div className="w-full h-auto flex px-8 ietms-center gap-4 ">
                    <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-all p-3 border border-black/10 shadow-2xs hover:bg-black/3 duration-200 hover:scale-108 ">
                        <SiGmail size={21} />
                    </a>

                    <a href="https://github.com/kawji" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-all p-3 border border-black/10 shadow-2xs hover:bg-black/3 duration-200 hover:scale-108 ">
                        <FaGithub size={21} />
                    </a>

                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-all p-3 border border-black/10 shadow-2xs hover:bg-black/3 duration-200 hover:scale-108 ">
                        <SiDiscord size={21} />
                    </a>

                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all p-3 border border-black/10 shadow-2xs hover:bg-black/3 duration-200 hover:scale-108 ">
                        <FaInstagram size={21} />
                    </a>

                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all p-3 border border-black/10 shadow-2xs hover:bg-black/3 duration-200 hover:scale-108 ">
                        <FaFacebookF size={21} />
                    </a>

                    </div>


                </div>
            
            
            </div>

        </nav>
    );
}
