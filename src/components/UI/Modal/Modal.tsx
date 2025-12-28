import React, {ReactNode} from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";
// @ts-ignore
import style from './style.module.scss'
type ModalProps = {
    refProp: React.MutableRefObject<HTMLDivElement>
    title: string,
    hide: () => void,
    save: () => void,
    children: React.ReactNode | React.ReactNode[];
};
export const Modal = (props: ModalProps) => {
    const { title,
        children,
        refProp,
        hide,
        save} = props;
    return createPortal(
        <div className={style.modal__wrapper} ref={refProp}>
            <div className={style.modal}>
                <div className={style.modal__inner}>
                    <div className={style.modal__header}>{title}</div>
                    <div className={style.modal__body}>{children}</div>
                </div>
                <div className={style.modal__footer}>
                    <Button label="Сохранить"  classButton="button__success" onClick={save}/>
                    <Button label="Отмена"  classButton="button__grey" onClick={hide}/>
                </div>
            </div>
        </div>,
        document.body
    );
};
