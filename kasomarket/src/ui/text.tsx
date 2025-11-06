

interface TextType {
    text:string | React.ReactNode
}

export default function Text({ text }:TextType) {

    return(
        <p className="text-[17px] text-black/70 leading-relaxed ">
            {text}
        </p>
 
    )
}