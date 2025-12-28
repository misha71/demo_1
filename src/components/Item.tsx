import React, { MouseEvent } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import { useAction } from "../hooks/action";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDeleteDataMutation } from "../store/query/queryApi";
import { IData } from "../types/query";
import Button from "./UI/Button/Button";
type ItemProps = {
  data: IData;
};
export const Item: React.FC<ItemProps> = (param) => {
  const navigate = useNavigate();
  const [deleteItems] = useDeleteDataMutation();
  const { showModal, updateFields, updateId } = useAction();
  const { data } = param;
  const { title, description, id } = data;
  const onDeleteHandler = (event: MouseEvent<HTMLButtonElement>, id: string) => {
    deleteItems(id);
  };
  const onOpenHandler = (data: IData) => {
    const { id, title, description } = data;
    updateFields({name: "title", value:  title});
    updateFields({name: "description", value:  description});
    updateId(id);
    showModal("update")
  };

  return (
    <div className="item">
      <div className="item__inner">
        <div className="item__title title">{title}</div>
        <div className="item__buttons buttons">
          <Button label="Удалить"  classButton="button__error"
                  onClick={(e) => onDeleteHandler(e, id)}/>
          <Button label="Обновить"  classButton="button__success"
                  onClick={(e) => onOpenHandler(data)}/>
          <Button label="Перейти" classButton="button__grey"
                  onClick={(e) => navigate(`/items/${id}`)}/>
        </div>
      </div>
    </div>
  );
};