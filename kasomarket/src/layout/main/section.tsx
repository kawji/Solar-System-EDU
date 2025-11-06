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
                            06 ส.ค. 67 

                        </span>

                    </div>
                </div>
            </span>

            <div className="w-auto h-full  items-center flex gap-5 ">
            <button className=" flex justify-center items-center  bg-black/3 border border-black/15  rounded-full w-10.5 h-10.5 cursor-pointer  text-black/75 transition-colors hover:bg-black/12 " 
            >
                <Sun  width={20} />
                
            </button>
            <span className=" flex justify-center items-center bg-black/3 border border-black/15 rounded-full w-10.5 h-10.5 cursor-pointer  text-black/65 transition-colors hover:bg-black/12 " >
                <Github   width={20} />
                
            </span>
            </div>


            
        </div>



    </div>
    )
}