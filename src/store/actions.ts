import * as alertActions from "./alert/actions";
import { clearFields, updateFields, updateId } from "./form/formSlice";
import { hideBurger, showBurger, toggleBurger } from "./menu/menuSlice";
import { hideModal, showModal } from "./modal/modalSlice";
export default {
  ...alertActions,
  clearFields,
  updateFields,
  updateId,
  showModal,
  hideModal,
  showBurger,
  hideBurger,
  toggleBurger
};
