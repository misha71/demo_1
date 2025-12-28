import React, {useEffect, useState, MouseEvent, useRef} from "react";
import {IData} from "../types/query";
import {Item} from "../components/Item";
import {useAction} from "../hooks/action";
import {
    useAddDataMutation,
    useDeleteDataMutation,
    useGetDataQuery,
    useLazyGetDataIdQuery,
    useUpdateDataMutation,
} from "../store/query/queryApi";
import useModal from "../hooks/useModal";
import {Modal} from "../components/UI/Modal/Modal";
import {Form} from "../components/Form";
import Button from "../components/UI/Button/Button"
import {useTypedSelector} from "../hooks/useTypedSelector";
import {clearFields} from "../store/form/formSlice";

export const Home = () => {
    const {hideModal, showModal, showAlert, clearFields} = useAction();
    const {data, isError, isLoading} = useGetDataQuery(null, {
        refetchOnFocus: true,
        //pollingInterval: 3000
    });
    const [addItems] = useAddDataMutation();
    const [updateItems] = useUpdateDataMutation();
    const rootRef = useRef<HTMLDivElement>(null);
    const {visible, type} = useTypedSelector((state) => state.modal);
    const {fields, id} = useTypedSelector((state) => state.form);
    useEffect(() => {
        const wrapperHandler = (e) => {
            console.log('test');
            const {target, key} = e;
            if ((target instanceof Node && target === rootRef.current) || key === "Escape") {
                hideModal();
            }
        };
        window.addEventListener("click", wrapperHandler);
        window.addEventListener("keydown", wrapperHandler);
        return () => {
            window.removeEventListener("click", wrapperHandler);
            window.addEventListener("keydown", wrapperHandler);
        };
    }, [rootRef]);

    const changeData = () => {
        const arError = [];
        const body = {} as IData;
        console.log(fields);
        fields.forEach((item) => {
            const {title, value, name} = item;
            body[name] = value;
            if (!value) {
                arError.push(`Заполните поле: ${title}`);
            }
        });
        if (arError.length > 0) {
            showAlert(arError, "danger");
            return;
        }
        if (type == "update") {
            updateItems({id, body});
            showAlert(["Данные успешно обновлены"], "success");
        } else {
            addItems(body);
            showAlert(["Данные успешно добавлены"], "success");
        }
        hideModal();
    };
    const onOpen = () => {
        clearFields();
        showModal('add');
    }
    return (
        <>
            <div className="home inner">
                <h1>Главная</h1>
                {data?.map((element) => (
                    <Item data={element}  key={element.id}/>
                ))}
                <Button label="Добавить" classButton="button__success" onClick={(e) => onOpen()} title="test"/>
            </div>
            {visible &&
                (<Modal
                title={type == "add" ? "Добавить посты" : "Изменить посты"}
                refProp={rootRef}
                hide={() => hideModal()}
                save={() => changeData()}
            >
                <Form/>
            </Modal>)
            }
        </>
    );
};
