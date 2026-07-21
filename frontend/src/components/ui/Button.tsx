// import type { ReactElement } from "react";

import type { ReactElement } from "react"

// interface ButtonProps {
//     variant: Variants;
//     size: "sm" | "md" | "lg";
//     text: string;
//     startIcon?: ReactElement;
//     endIcon?: ReactElement;
//     onClick: () => void;
// }

// type Variants = "primary" | "secondary";

// // #5046e4 - 600
// // #e0e7fe
// // #3e38a7

// const variantStyles = {
//     "primary": "bg-[#5046e4] text-white",
//     "secondary": "bg-[#e0e7fe] text-[#3e38a7]"
// }

// const sizeStyles = {
//     "sm": "px-2 py-1",
//     "md": "px-4 py-2",
//     "lg": "px-6 py-3"
// }

// const defaultStyles = "rounded-md flex"

// export const Button = (props: ButtonProps) => {
//     return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{props.text}{props.endIcon}</button>
// }






interface ButtonProps {
    variant: ButtonVariants,
    size: ButtonSize,
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick: () => void,
    url?: string
}

type ButtonVariants = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg" | "xl"

const variantStyles = {
    "primary": "bg-blue-500",
    "secondary": "bg-green-500"
}

const sizeStyles = {
    "sm": "px-2 py-1",
    "md": "px-4 py-2",
    "lg": "px-6 py-3",
    "xl": "px-8 py-4"
}

const defaultStyles = "rounded-md text-white font-helvetica p-2 m-2 cursor-pointer flex items-center gap-2";

export const Button = (props: ButtonProps) => {
    return(
        <>
        <button className={`${variantStyles[props.variant]} ${onclick = ()=>{
            window.open(`${props.url}`,'_blank');
        }} ${defaultStyles} ${sizeStyles[props.size]}`}>
            {props.startIcon}{props.text}{props.endIcon}
        </button>
        </>
    )
}