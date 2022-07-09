import React, {ChangeEvent, FC} from "react";
import {Simulate} from "react-dom/test-utils";


type InputNumberPropsType = {
    value: number,
    onChange: (value: string) => void
}

export const InputNumber: FC<InputNumberPropsType> = ({value, onChange}) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    return (
        <input type={"number"} value={value} onChange={onChangeHandler}/>
    )
}