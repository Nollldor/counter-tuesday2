import React, {ChangeEvent, FC} from "react";
import styles from './InputNumber.module.css'


type InputNumberPropsType = {
    value: number,
    onChange: (value: string) => void
    error?: boolean
}

export const InputNumber: FC<InputNumberPropsType> = ({value, onChange, error}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    const className = `${styles.input} ${error ? styles.inputError : ''}`

    return (
        <input className={className} type={"number"} value={value} onChange={onChangeHandler}/>
    )
}