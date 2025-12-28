type IForm = {
  name: string,  
  title: string;
  value?: string;
  type: string;
}
export type FormState = {
  fields: IForm[],
  id?: string
}
export type FormPayload = {
  name: string,
  value: string
}