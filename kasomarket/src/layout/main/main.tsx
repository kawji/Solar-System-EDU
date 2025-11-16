
import Section from "./section"
import MainSections from "./mainSections"

export default function Main() {

    return(
        <div className=" min-h-screen h-auto w-full flex flex-col items-center px-3 pt-7 bg-white pb-25 ">
            <Section />
            <MainSections />
        </div>
    )
}