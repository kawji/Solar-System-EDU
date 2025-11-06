

interface Tagype {
    text:string
}

export default function Tag({ text }:Tagype) {

    return(
        <p className=" text-base text-black/75 hover:text-black/50 transition-all duration-300 cursor-pointer flex items-cneter justify-center px-1 py-1  ">
            {text}
        </p>
    )
}