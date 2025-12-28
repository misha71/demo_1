import { hide, show } from "./alertSlice"

export const showAlert = (text: Array<string>, type: string) => {
    return show({text, type});
}
export const hideAlert = () => {
    return hide();
}

