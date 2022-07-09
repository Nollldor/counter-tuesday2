import {FC} from "react";

type ButtonPropsType = {
    title: string,
    onClick: () => void,
    disabled? : boolean
}

export const Button: FC<ButtonPropsType> = ({title, onClick, disabled}) => {

    return (
        <button onClick={onClick} disabled={disabled}>{title}</button>
    )
}