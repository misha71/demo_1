import React from "react";
import { useAction } from "../hooks/action";
import { useTypedSelector } from "../hooks/useTypedSelector";
export const Alert = () => {
  const {hideAlert} = useAction();
  const { text, type, show } = useTypedSelector((state) => state.alert);
  const hideAction = () => {
    hideAlert();
  };
  const typeAlert = ["page__alert", `page__alert__${type}`];
  return (
    show && (
      <div className={typeAlert.join(" ")} onClick={hideAction}>
        {text.map((item, key) => (
          <p className="alert__error" key={String(key)}>
            {item}
          </p>
        ))}
      </div>
    )
  );
};
