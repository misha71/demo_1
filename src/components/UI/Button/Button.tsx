import React, {MouseEvent} from 'react';
// @ts-ignore
import style from './style.module.scss';
type ButtonType = {
    onClick: (event:MouseEvent<HTMLButtonElement>) => void,
    label: string,
    classButton?: string,
    // остаточные параметры, котоые могут быть переданы в restProps
    [key:string]: any
}
const Button = ({ onClick, label, classButton, ...restProps}:ButtonType & Record<string, any>) => {
    const classJoinWithParams = [style.button, style[classButton]];
    return (
        <button onClick={onClick} className={classJoinWithParams.join(" ")} {...restProps}>
            {label}
        </button>
    );
};

export default Button;
