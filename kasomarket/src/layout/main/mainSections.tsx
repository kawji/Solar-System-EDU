

import Text from "@/ui/text"
import TagCard from "../feature/tagcard"
import Setellites from "../sections/satellites"


export default function MainSections() {

    return(
        <div className="max-w-[1200px] w-full h-auto flex items-center justify-around   pt-5  ">
            <div className="max-w-[1200px] w-full h-auto flex flex-col items-center gap-2">
                <Text text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;กว่า 4,600 ล้านปีก่อน ในมุมหนึ่งของเอกภพ กลุ่มเมฆก๊าซและฝุ่นอวกาศได้รวมตัวกันภายใต้แรงโน้มถ่วง จนก่อให้เกิดดาวฤกษ์ดวงหนึ่งซึ่งเรารู้จักกันในชื่อว่า “ดวงอาทิตย์” และจากเศษวัสดุที่เหลืออยู่รอบ ๆ มัน ก็ค่อย ๆ รวมตัวกันกลายเป็นดาวเคราะห์ ดวงจันทร์ และวัตถุท้องฟ้าต่าง ๆ จนเกิดเป็นระบบดาวที่เราเรียกว่า “ระบบสุริยะ” เรื่องราวของการกำเนิดนี้ไม่เพียงเป็นต้นกำเนิดของโลกและชีวิต แต่ยังสะท้อนถึงวิวัฒนาการอันยิ่งใหญ่ของเอกภพที่เราดำรงอยู่ในทุกวันนี้" />
                <img src={'/1.jpg'} className="max-w-[800px] w-full h-auto object-cover aspect-video mt-5" />
                <span className=" max-w-[800px] w-full h-auto flex items-center justify-center text-[17px] text-black/55 font-medium  ">
                    ภาพ : nstda.or.th
                </span>
                <div className="w-full h-[1px] bg-black/10 mb-2  " />
                <p className="text-[17px] text-black/70 leading-relaxed ">
                ระบบสุริยะถือกำเนิดมาจากแก๊ส และฝุ่นที่มีการเคลื่อนที่ตลอดเวลา เมื่อรวมกันตรงใจกลาง จะมีความหนาแน่นเพิ่มขึ้น ทำให้มีมวลและแรงดึงดูดมากขึ้น เมื่อมวลมากขึ้นจะเริ่มหดตัวลงด้วยแรงโน้มถ่วง นักดาราศาสตร์แบ่งดาวเคราะห์ออกเป็นดาวเคราะห์ชั้นใน และดาวเคราะห์ชั้นนอก โดยใช้แถบดาวเคราะห์น้อยเป็นเกณฑ์ในการแบ่ง นอกจากนี้ ในระบบสุริยะยังประกอบด้วยองค์ประกอบอื่นๆ อีก เช่น ดาวเคราะห์แคระ ดาวหาง สะเก็ดดาว เป็นต้น
                <br /><br />
                ดวงอาทิตย์เกิดจากกลุ่มแก๊สยุบตัวลง และหมุนรอบตัวเอง ทำให้ความดันเพิ่มขึ้น บริเวณ
                ตรงกลางมีอุณหภูมิสูงมาก จนเกิดปฏิกิริยาเทอร์โมนิวเคลียร์ หรือนิวเคลียร์ฟิวชัน โดยไฮโดรเจนรวมกันเป็นฮีเลียมได้พลังงานของดาวฤกษ์ดวงใหม่ คือ ดวงอาทิตย์ ฝุ่นและแก๊สที่เหลือรอบนอก เคลื่อนที่หมุนวนเป็นแผ่นกลมแบนรอบดวงอาทิตย์<br /><br />
                บริเวณใกล้ดวงอาทิตย์มีอุณหภูมิสูง สารบางส่วนระเหยเป็นแก๊ส บางส่วนเกิดจากเศษโลหะ เศษหิน รวมตัวกันจนมีขนาดใหญ่ขึ้น กลายเป็นดาวเคราะห์ชั้นในที่มีขนาดเล็ก ส่วนบริเวณที่ไกลออกไป มีอุณหภูมิต่ำกว่า จึงรวมตัวกันเป็นดาวเคราะห์ขนาดใหญ่ ในแถบกลุ่มดาวเคราะห์แก๊สที่อยู่รอบนอก
                <br /><br />
                ของแข็งที่เหลือจากการรวมตัวเป็นดาวเคราะห์ ในช่องว่างระหว่างวงโคจรดาวอังคารกับ
                วงโคจรดาวพฤหัสบดี ยังคงโคจรรอบดวงอาทิตย์ กลายเป็นดาวเคราะห์น้อย สสารที่กระจายตัว
                อยู่รอบนอก ไกลกว่าดาวเคราะห์ กลายเป็นแหล่งกำเนิดของดาวหาง

                </p>

                <img src={'/2.jpg'} className="max-w-[800px] w-full h-auto object-cover aspect-video mt-5 " />
                <span className=" max-w-[800px] w-full h-auto flex items-center justify-center text-[17px] text-black/55 font-medium  ">
                    ภาพ : nstda.or.th
                </span>
                <p className="text-[17px] text-black/70 leading-relaxed ">
                    ระบบสุริยะ ประกอบด้วยดวงอาทิตย์เป็นศูนย์กลางของระบบ นักดาราศาสตร์แบ่งเขตพื้นที่รอบดวงอาทิตย์ ตามลักษณะของการเกิด และลักษณะขององค์ประกอบ ออกเป็น 4 เขตคือ<br />&nbsp;&nbsp;&nbsp;
                    1. เขตดาวเคราะห์ชั้นใน อยู่ระหว่างดวงอาทิตย์กับแถบดาวเคราะห์น้อย ได้แก่ ดาวพุธ ดาวศุกร์ โลก และดาวอังคาร มีแก่นเป็นโลหะ จึงเรียกว่า ดาวเคราะห์หิน<br />&nbsp;&nbsp;&nbsp;
                    2. แถบดาวเคราะห์น้อย อยู่ระหว่างวงโคจรของดาวอังคาร และดาวพฤหัสบดี เป็นเศษของดาวเคราะห์หิน แต่ไม่สามารถจับตัวกันเป็นขนาดใหญ่ได้<br />&nbsp;&nbsp;&nbsp;
                    3. เขตดาวเคราะห์ชั้นนอก อยู่ถัดจากแถบดาวเคราะห์น้อยออกไป ได้แก่ ดาวพฤหัสบดี ดาวเสาร์ ดาวยูเรนัส ดาวเนปจูน มีขนาดใหญ่ มีองค์ประกอบหลักเป็นไฮโดรเจนกับฮีเลียม จึงเรียกว่า ดาวเคราะห์แก๊ส<br />&nbsp;&nbsp;&nbsp;
                    4. เขตดาวหาง อยู่ตั้งแต่วงโคจรของดาวเนปจูนไกลออกไป เช่น ดาวเคราะห์แคระ ดาวพลูโต ดาวอีริส ดาวหาง สะเก็ดดาว
                </p>

                <img src={'/3.png'} className="max-w-[800px] w-full h-auto object-cover aspect-video mt-5 " />
                <span className=" max-w-[800px] w-full h-auto flex items-center justify-center text-[17px] text-black/55 font-medium  ">
                    ภาพ : nstda.or.th
                </span>
                <p className="text-[17px] flex w-full items-center justify-start pl-6  text-black/75 font-semibold leading-relaxed ">
                    "ส่วนประกอบของระบบ"
                </p>
                <p className="text-[17px] text-black/70 leading-relaxed ">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบสุริยะเป็นระบบที่ประกอบด้วยดวงอาทิตย์เป็นศูนย์กลาง และมีดาวเคราะห์ 8 ดวง เรียงลำดับจากที่อยู่ใกล้ดวงอาทิตย์ไปยังดาวที่อยู่ไกลจากดวงอาทิตย์มากที่สุด คือ ดาวพุธ ดาวศุกร์ โลก ดาวอังคาร ดาวพฤหัสบดี ดาวเสาร์ ดาวยูเรนัส และดาวเนปจูน
                    <br /> <br />            
                    ระบบสุริยะเป็นส่วนหนึ่งในกาแลกซี่ทางช้างเผือก ซึ่งในกาแลกซี่ก็มีอีกหลายๆ ระบบ ไม่ได้มีแค่ระบบสุริยะอย่างเดียว
                </p>
                <p className="text-[17px] flex w-full items-center justify-start pl-6  text-black/75 font-semibold leading-relaxed ">
                    "ดาวฤกษ์"
                </p>
                <p className="text-[17px] text-black/70 leading-relaxed ">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;คือ ดาวที่มีความร้อนและแสงสว่างในตัวเอง โดยกําเนิดจากการระเบิดอย่างรุนแรงของ
                    ก๊าซ ไฮโดรเจนกลายเป็นก๊าซฮีเลียม ทําให้มีอุณหภูมิสูงมาก ในระบบสุริยะมีดาวฤกษ์เพียงดวงเดียว คือ 
                    ดวงอาทิตย์
                </p>


                <img src={'/4.webp'} className="max-w-[800px] w-full h-auto object-cover aspect-video mt-5" />
                <span className=" max-w-[800px] w-full h-auto flex items-center justify-center text-[17px] text-black/55 font-medium  ">
                    ภาพ : nstda.or.th
                </span>
                <p className="text-[17px] flex w-full items-center justify-start pl-6  text-black/75 font-semibold leading-relaxed ">
                    "ดวงอาทิตย์"
                </p>
                <p className="text-[17px] text-black/70 leading-relaxed ">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เป็นดาวฤกษ์ศูนย์กลางของระบบสุริยะ ดวงอาทิตย์เป็น&nbsp;&nbsp;d ดาวฤกษ์ขนาดเล็ก เมื่อเทียบกับดาวฤกษ์อื่น ๆ 
                    ดวงอาทิตย์เป็นดาวฤกษ์สีเหลือง &nbsp;
                    อยู่ห่างจากโลกประมาณ 150 ล้านกิโลเมตร มีขนาดใหญ่
                    กว่าโลก 109 เท่า &nbsp;
                    หมุนรอบตัวเองครบ 1 รอบใช้เวลา 27 วัน &nbsp;
                    ดวงอาทิตย์ประกอบด้วยแก๊สไฮโดรเจนเป็นส่วนใหญ่ 
                    มีเส้นผ่านศูนย์กลาง 1.39 ล้านกิโลเมตร &nbsp;
                    แสงสว่างจากดวงอาทิตย์ใช้เวลาเดินทางผ่านอวกาศมายังโลกใช้เวลาประมาณ 8.30 นาที
                </p>
                <p className="text-[17px] flex w-full items-center justify-start pl-6  text-black/75 font-semibold leading-relaxed ">
                    "ดาวเคราะห์"
                </p>
                <p className="text-[17px] text-black/70 leading-relaxed ">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; เป็นดาวที่ไม่มีแสงสว่างในตัวเองเราสามารถมองเห็นดาวเคราะห์ได้เนื่องจากดาวเคราะห์จะสะท้อนแสงจากดวงอาทิตย์เข้าสู่ตาของเรา จึงทําให้เรามองเห็นดาวเคราะห์ได้นั่นเอง ในปัจจุบันดาวเคราะห์ที่
                    เป็นบริวารดวงอาทิตย์มีอยู่ทั้งหมด 8 ดวง
                </p>


                <img src={'/5.png'} className="max-w-[800px] w-full h-auto object-contain aspect-video mt-5" />
                <span className=" max-w-[800px] w-full h-auto flex items-center justify-center text-[17px] text-black/55 font-medium -translate-y-8 ">
                    ภาพ : nstda.or.th
                </span>
                <p className="text-[17px] flex w-full items-center justify-start text-black/70 font-semibold leading-relaxed ">
                    "ถ้าแบ่งดาวเคราะห์โดยใช้ระยะที่อยู่ห่างจากดวงอาทิตย์กับดาวเคราะห์น้อย ซึ่งดาวเคราะห์น้อยอยู่ ระหว่างดาวอังคารและดาวพฤหัสบดีเป็นเกณฑ์ จะสามารถแบ่งได้ 2 ประเภท ดังนี้"
                </p>
                <p className="text-[17px] text-black/70 leading-relaxed ">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 ดาวเคราะห์ชั้นใน คือดาวเคราะห์ที่อยู่ใกล้ดวงอาทิตย์มากกว่าดาวเคราะห์น้อย ได้แก่ ดาวพุธ ดาวศุกร์ โลก และดาวอังคาร <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 ดาวเคราะห์ชั้นนอก คือ ดาวเคราะห์ที่อยู่ห่างจากดวงอาทิตย์มากกว่าดาวเคราะห์น้อย ได้แก่ ดาวพฤหัสบดี ดาวเสาร์ ดาวยูเรนัส และดาวเนปจูน
                </p>
                <p className="text-[17px] flex w-full items-center justify-start pl-6  text-black/70 font-semibold leading-relaxed mt-2 ">
                    "ถ้าแบ่งดาวเคราะห์ตามคาบโคจร โดยใช้วงโคจรของโลกเป็นเกณฑ์ จะสามารถแบ่งได้ 2 ประเภท ดังนี้"
                </p>
                <p className="text-[17px] text-black/70 leading-relaxed ">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 ดาวเคราะห์วงใน คือ ดาวเคราะห์ที่อยู่ใกล้ดวงอาทิตย์มากกว่าโลก ได้แก่ ดาวพุธ และดาวศุกร์ <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 ดาวเคราะห์วงนอก คือ ดาวเคราะห์ที่อยู่ไกลดวงอาทิตย์มากกว่าโลก ได้แก่ ดาวอังคาร             ดาวพฤหัสบดี ดาวเสาร์ ดาวยูเรนัส และดาวเนปจูน

                </p>

                <img src={'/6.png'} className="max-w-[800px] w-full h-auto object-contain aspect-video mt-5" />
                <span className=" max-w-[800px] w-full h-auto flex items-center justify-center text-[17px] text-black/55 font-medium -translate-y-8 ">
                    ภาพ : nstda.or.th
                </span>
                <p className="text-[17px] flex w-full items-center justify-start pl-0 text-black/70 font-semibold leading-relaxed mt-2 ">
                    "ถ้าแบ่งดาวเคราะห์ตามลักษณะพื้นผิวจะแบ่งได้เป็น 2 ประเภท คือ"
                </p>
                <p className="text-[17px] text-black/70 leading-relaxed ">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.ดาวเคราะห์หิน คือ ดาวเคราะห์ที่มีส่วนประกอบเป็นหินและโลหะมีชั้นบรรยากาศบางๆห่อหุ้ม ได้แก่ ดาวพุธ ดาวศุกร์ โลก และดาวอังคาร <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.ดาวเคราะห์แก๊ส คือ ดาวเคราะห์ที่มีส่วนประกอบส่วนใหญ่เป็นแก๊ส อาจมีแกนหินขนาดเล็กอยู่
                    ภายใน พื้นผิวจึงปกคลุมด้วยแก๊สมีเทน แอมโมเนีย ไฮโดรเจน และฮีเลียม ได้แก่ ดาวพฤหัสบดี ดาวเสาร์ ดาวยูเรนัส และดาวเนปจูน
                </p>
                <img src={'/8.png'} className="max-w-[800px] w-full h-auto object-contain aspect-video mt-0" />
                <span className=" max-w-[800px] w-full h-auto flex items-center justify-center text-[17px] text-black/55 font-medium -translate-y-10 ">
                    ภาพ : nstda.or.th
                </span>
                <p className="text-[17px] text-black/70 leading-relaxed ">
                ภายใน พื้นผิวจึงปกคลุมด้วยแก๊สมีเทน แอมโมเนีย ไฮโดรเจน และฮีเลียม ได้แก่ ดาวพฤหัสบดี ดาวเสาร์ ดาวยูเรนัส และดาวเนปจูน
                </p>

                <Setellites />


                <p className="text-[24px] flex w-full items-center justify-center text-black/75 mt-25 font-semibold leading-relaxed  ">
                    " วัตถุบนท้องฟ้า "
                </p>


                <p className="text-[17px] text-black/70 leading-relaxed flex justify-start items-center w-full ">
                วัตถุท้องฟ้า  หมายถึงวัตถุทางดาราศาสตร์ เช่น ดาวฤกษ์ ดาวเคราะห์ ดาวหาง ดาวเคราะห์แคระ เป็นต้น&nbsp;&nbsp;&nbsp; 
                วัตถุท้องฟ้าที่จะกล่าวถึง คือ ดาวเคราะห์น้อย ดาวหาง ดาวเคราะห์แคระ และอุกกาบาต
                </p>

                <p className=" text-lg lg:text-[24px] text-cent justify-center mt-5 flex w-full items-center pl-0 text-black/70 font-semibold leading-relaxed  ">
                ดาวเคราะห์น้อย  <br />
                </p>
                <img src={'/17.1.png'} className="max-w-[400px] w-full h-auto object-contain aspect-video mt-2" />
                <span className=" max-w-[800px] w-full h-auto flex items-center justify-center text-[17px] text-black/55 font-medium -translate-y-0 ">
                    ภาพ : nstda.or.th
                </span>
                <p className="text-[17px] text-black/70 leading-relaxed flex justify-start items-center w-full ">
                    &nbsp;&nbsp;&nbsp;
                    เป็นก้อนหินขนาดต่าง ๆ ขนาดเส้นผ่านศูนย์กลาง 1-1,000 กิโลเมตร ซึ่งมีจำนวนมากกว่า 200,000 ดวง ส่วนมากโคจรอยู่ระหว่างวงโคจรของ
ดาวอังคารแ ละดาวพฤหัสบดี
                </p>
                <p className=" text-lg lg:text-[24px] text-cent justify-center mt-5 flex w-full items-center pl-0 text-black/70 font-semibold leading-relaxed  ">
                ดาวหาง  <br />
                </p>
                <img src={'/18.1.png'} className="max-w-[400px] w-full h-auto object-contain aspect-video mt-2" />
                <span className=" max-w-[800px] w-full h-auto flex items-center justify-center text-[17px] text-black/55 font-medium -translate-y-0 ">
                    ภาพ : nstda.or.th
                </span>
                <p className="text-[17px] text-black/70 leading-relaxed flex justify-start items-center w-full ">
                    &nbsp;&nbsp;&nbsp;
                    เป็นก้อนนำแข็งสกปรก โคจรรอบดวงอาทิตย์เป็นวงรีมากเมื่อเข้าใกล้ดวงอาทิตย์ก็จะเกิดการระเหิดเป็นแก๊สและมีฝุ่นปะปน สะท้อนแสงดวงอาทิตย์
                    ทำให้มองเห็นเป็นหัวและหาง ยิ่งเข้าใกล้ดวงอาทิตย์ ส่วนหัวจะใหญ่ขึ้นส่วนหางก็จะยิ่ง
                    ยาวมากขึ้น และหางจะชี้ไปทางทิศตรงข้ามกับดวงอาทิตย์เสมอ

                </p>
                <p className=" text-lg lg:text-[24px] text-cent justify-center mt-5 flex w-full items-center pl-0 text-black/70 font-semibold leading-relaxed  ">
                ดาวเคราะห์แคระ  <br />
                </p>
                <img src={'/19.png'} className="max-w-[400px] w-full h-auto object-contain aspect-video mt-2" />
                <span className=" max-w-[2000px] w-full h-auto flex items-center justify-center text-[17px] text-black/55 font-medium -translate-y-0 ">
                    ภาพ : nstda.or.th
                </span>
                <p className="text-[17px] text-black/70 leading-relaxed flex justify-start items-center w-full ">
                    &nbsp;&nbsp;&nbsp;
                    เป็นดาวที่มีลักษณะคล้ายกับดาวเคราะห์ เป็นวัตถุท้องฟ้าที่โคจรรอบดาวฤกษ์ มีมวลมากพอที่จะมีแรงโน้มถ่วงดึงดูดตัวเองให้มีรูปร่างใกล้เคียงกับทรงกลมมีวงโคจรที่ไม่เป็นอิสระ หรือซ้อนทับกับดาวอื่น ๆ และไม่ใช่บริวารของดาวเคราะห์ดวงใดปัจจุบันมีวัตถุท้องฟ้าที่จัดเป็นดาวเคราะห์แคระ เช่น พลูโต ซีรีส    อีริส เฮาเมอา มาคีมาคี 
                </p>
                <p className=" text-lg lg:text-[24px] text-cent justify-center mt-5 flex w-full items-center pl-0 text-black/70 font-semibold leading-relaxed  ">
                อุกกาบาต  <br />
                </p>
                <img src={'/20.1.png'} className="max-w-[400px] w-full h-auto object-contain aspect-video mt-2" />
                <span className=" max-w-[2000px] w-full h-auto flex items-center justify-center text-[17px] text-black/55 font-medium -translate-y-0 ">
                    ภาพ : nstda.or.th
                </span>
                <p className="text-[17px] text-black/70 leading-relaxed flex justify-start items-center w-full ">
                    &nbsp;&nbsp;&nbsp;
                    
                    เกิดจากวัตถุแข็งจำพวกโลหะและหินขนาดเล็กที่ล่องลอยอยู่ในอวกาศ เมื่อโคจรเข้ามาใกล้โลกจะถูกดึงดูดเข้าสู่ชั้นบรรยากาศของโลกเกิดการเสียดสี
                    ลุกไหม้เป็นแสงวาบ เรียกว่า ดาวตกหรือผีพุ่งไต้ 
                    หากลุกไหม้ไม่หมดเหลือตกลงสู่พื้นโลก เรียกว่า อุกกาบาต
                </p>









                <TagCard />
            </div>










        </div>

    )
}