

interface Tagype {
    text:string
    link:string
}

export default function Tag({ text ,link }:Tagype) {

    return(
        <a href={link} target="_blank" className=" text-base text-black/75 hover:text-black/50 transition-all duration-300 cursor-pointer flex items-cneter justify-center px-1 py-1  ">
            {text}
        </a>
    )
}