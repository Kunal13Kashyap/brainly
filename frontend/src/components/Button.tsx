import type { ReactElement } from "react";

interface ButtonProps {
    variant: ButtonVariant;
    text: string,
    startIcon?: ReactElement
}

type ButtonVariant = "primary" | "secondary" | "extra";

const variantClasses = {
    "primary": "bg-teal-500 hover:bg-teal-600 text-white",
    "secondary": "bg-purple-600 hover:bg-purple-700 text-white",
    "extra": "bg-mist-500 text-white"
}

const defaultStyles = "px-4 py-2 rounded-md flex items-center justify-center gap-2"

export function Button(props: ButtonProps) {
    return (
        <button className={`${variantClasses[props.variant]} ${defaultStyles}`}>{props.startIcon}{props.text}</button>
    )
}