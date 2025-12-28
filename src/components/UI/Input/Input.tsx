import React, {ChangeEvent, MouseEvent} from 'react';
// @ts-ignore
import style from './style.module.scss';
type InputType = {
    onChange: (event:ChangeEvent<HTMLInputElement>) => void,
    value: string,
    title: string,
    type: string
    classButton?: string,
    // остаточные параметры, котоые могут быть переданы в restProps
}
const Input = ({ onChange, title, type, classButton, ...restProps}:InputType & Record<string, any>) => {
    const classJoinWithParams = [style.input, style[classButton]];
    return (
        <label className="label">
            <div className="title">{title}</div>
            <input type={type} onChange={onChange} className={classJoinWithParams.join(" ")} {...restProps} />
        </label>
    );
};
export default Input;
