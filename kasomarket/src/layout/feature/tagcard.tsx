
import Tag from "@/app/components/tag"



export default function TagCard() {

    return(
            <div className="w-full h-auto px-2 py-3 max-w-[900px] flex gap-1 border border-black/8 rounded flex-wrap items-center justify-start mt-10 ">
        <span className="text-lg text-black/70 font-semibold shrink-0 ">
            ศัพท์สำคัญที่ควรรู้ ;
        </span>
    
        <Tag text=" เนบิวลา," />
        <Tag text=" แผ่นจานกำเนิดดาวเคราะห์," />
        <Tag text=" นิวเคลียร์ฟิวชัน," />
        <Tag text=" ดาวฤกษ์," />
        <Tag text=" ดาวเคราะห์หิน," />
        <Tag text=" ดาวเคราะห์แก๊สยักษ์," />
        <Tag text=" แถบดาวเคราะห์น้อย," />
        <Tag text=" ระบบสุริยะชั้นใน," />
        <Tag text=" ดาวเคราะห์แคระ," />
        <Tag text=" ดาวหาง," />
        <Tag text=" อุกกาบาต," />

    </div>
    )
}