
import Tag from "@/ui/tag/tag"

export default function TagCard() {

    return(
    <div className="w-full h-auto px-2 py-3 max-w-[1200px] flex gap-1 border border-black/8 rounded flex-wrap items-center justify-start mt-10 ">
        <span className="text-lg text-black/70 fon-semibold shrink-0 ">
            ศัพท์สำคัญที่ควรรู้ ;
        </span>
    
        <Tag text=" เนบิวลา," link="https://en.wikipedia.org/wiki/Nebula" />
        <Tag text=" แผ่นจานกำเนิดดาวเคราะห์," link="https://en.wikipedia.org/wiki/Protoplanetary_disk" />
        <Tag text=" นิวเคลียร์ฟิวชัน," link="https://en.wikipedia.org/wiki/Nuclear_fusion"  />
        <Tag text=" ดาวฤกษ์,"  link="https://en.wikipedia.org/wiki/Star" />
        <Tag text=" ดาวเคราะห์หิน," link="https://en.wikipedia.org/wiki/Terrestrial_planet"  />
        <Tag text=" ดาวเคราะห์แก๊สยักษ์," link="https://en.wikipedia.org/wiki/Gas_giant" />
        <Tag text=" แถบดาวเคราะห์น้อย,"  link="https://en.wikipedia.org/wiki/Asteroid_belt" />
        <Tag text=" ระบบสุริยะชั้นใน,"  link="https://en.wikipedia.org/wiki/Inner_Solar_System" />
        <Tag text=" ดาวเคราะห์แคระ," link="https://en.wikipedia.org/wiki/Dwarf_planet" />
        <Tag text=" ดาวหาง," link="https://en.wikipedia.org/wiki/Comet"  />
        <Tag text=" อุกกาบาต,"  link="https://en.wikipedia.org/wiki/Meteorite" />

    </div>
    )
}