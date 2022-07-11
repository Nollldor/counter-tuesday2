import {FC} from "react";
import styles from './Button.module.css'

type ButtonPropsType = {
    title: string,
    onClick: () => void,
    disabled? : boolean
}

export const Button: FC<ButtonPropsType> = ({title, onClick, disabled}) => {

    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>{title}</button>
    )
}