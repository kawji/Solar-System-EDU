'use client'

import { scrollToSection } from "@/utils/scrollToSections";


export default function Footer() {
    return (
      <footer className="w-full bg-[#0b0f19] text-gray-300 pt-12 pb-6 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 px-6">
  
          {/* Section 1: Logo / Title */}
          <div>
            <h2 className="text-xl font-bold text-white">Solar System EDU</h2>
            <p className="text-gray-400 mt-3 leading-relaxed">
              เว็บไซต์ให้ความรู้เกี่ยวกับกำเนิดระบบสุริยะ  
              เขตต่างๆ รอบดวงอาทิตย์ และดาวเคราะห์ในระบบสุริยะ
            </p>
          </div>
  
          {/* Section 2: Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">เนื้อหาเว็บไซต์</h3>
  
            <ul className="space-y-2 text-gray-400">
              <li onClick={() => scrollToSection('formation') } className="hover:text-white cursor-pointer">• การกำเนิดระบบสุริยะ</li>
              <li onClick={() => scrollToSection('zones') }className="hover:text-white cursor-pointer">• เขตต่างๆ ของระบบสุริยะ</li>
              <li onClick={() => scrollToSection('components') }className="hover:text-white cursor-pointer">• ส่วนประกอบหลัก</li>
              <li onClick={() => scrollToSection('type') }className="hover:text-white cursor-pointer">• การแบ่งประเภทดาวเคราะห์ง</li>
              <li onClick={() => scrollToSection('planet') }className="hover:text-white cursor-pointer">• ดาวเคราะห์แต่ละดวง</li>
              <li onClick={() => scrollToSection('object') }className="hover:text-white cursor-pointer">• วัตถุท้องฟ้าอื่นๆ</li>
            </ul>
          </div>
  
          {/* Section 3: Resources */}
          <div>
        <h3 className="text-white font-semibold mb-4">แหล่งข้อมูลอ้างอิง</h3>
        <ul className="space-y-2 text-gray-400 leading-relaxed">
            <li>• หนังสือติวเข้มวิทยาศาสตร์ ป.4</li>
            <li>• เว็บไซต์ทรูปลูกปัญญา การกำเนิดระบบสุริยะ</li>
            <li>• แบบเรียนวิทยาศาสตร์และเทคโนโลยี ชั้นประถมศึกษาปีที่ 4</li>
            <li>• Wikipedia Astronomy</li>
        </ul>
        </div>


        </div>
  
        {/* Bottom Info */}
        <div className="text-center text-gray-500 text-sm mt-12 border-t border-white/10 pt-4">
          © 2025 Solar System EDU — All Rights Reserved
        </div>
      </footer>
    );
  }
  