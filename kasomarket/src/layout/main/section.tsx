import { Handbag, Search ,User ,Github  ,Sun  } from "lucide-react"



export default function Section() {
    
    return(
    <div className=" w-full h-auto flex  item-center justify-center ">

        <div className="max-w-[1200px] w-full h-auto flex items-center justify-start pb-5 border-b border-b-black/9 ">
            <span className=" w-full h-auto flex flex-col items-start gap-2 " >
                <h1 className=" text-[28px] text-black/75 font-semibold   ">
                    กำเนิดระบบสุริยะและการแบ่งเขตบริวารรอบดวงอาทิตย์
                </h1>
                <div className="max-w-[1200px] w-full h-auto flex items-center justify-between   ">
                    <div className="flex items-center justify-start text-sm text-black/38 gap-2 ">
                        <span className="relative w-auto h-auto text-black/35 pr-2.5 ">
                            นักเรียนโรงเรียนท่าปลาประชาอุทิศ

                            <span className="absolute top-1/2 right-0 -translate-y-1/2 w-[1.5px] h-[70%] bg-black/14 " />
                        </span>
                        <span className="relative w-auto h-auto ">
                            มัธยมศึกษาปีที่ 6 ประจำปีการศึกษา 68 

                        </span>

                    </div>
                </div>
            </span>

            
        </div>



    </div>
    )
}