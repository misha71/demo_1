export interface AlertState{
    text: Array<string>,
    show: boolean,
    type: string
}
export interface AlertPayload{
    text: Array<string>,   
    type: string
}