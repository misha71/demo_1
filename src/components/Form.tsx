import React, { ChangeEvent, useState } from "react";
import { useAction } from "../hooks/action";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Input from "./UI/Input/Input";

export const Form = () => {
  const { updateFields } = useAction();
  const { fields } = useTypedSelector((state) => state.form);
  const onUpdateHandler = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    updateFields({ name: name, value: e.target.value });
  };
  return (
    <div className="form">
      {fields.map(({ title, value, type, name }, key) => (
        <div className="form__field" key={String(key)}>
          <Input
              onChange={(e) => onUpdateHandler(e, name)}
              type="text"
              value = {value}
              title={title}
          />
        </div>
      ))}
    </div>
  );
};
