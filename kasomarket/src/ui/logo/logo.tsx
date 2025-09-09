import clsx from "clsx"

type PropLogo = {
    size: 'lg' | 'md' | 'sm'
}

export default function Logo({size}:PropLogo  ) {
    return(
        <span className={clsx(size==='lg'? 'text-4xl': size==='md'? 'text-3xl': size==='sm'? 'text-2xl':size ,'shrink-0 flex font-bold')} >
            <p className="text-black/95">TURE</p>
            <p className="text-[#07A4FF] ">THARUA</p>
        </span>
    )
}