export interface IData{
    title: string,
    description: string,
    date?: string,
    id?: string
}

export interface updateDataRequest{
    id: string
    body: IData,
}