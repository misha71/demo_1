import { IData, updateDataRequest } from './../../types/query';
import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log(process.env);
const url = process.env.REACT_APP_DB_URL;
console.log(url);
export const queryApi = createApi({
    reducerPath: '/path/items',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    refetchOnFocus: true,
    tagTypes: ['items'],
    endpoints: (build) => ({
        getData: build.query<IData[], void>({
            query: () => ({
                url: 'items.json'
            }),
            transformResponse: (res?:IData[]) => {
                
                return res && Object.keys(res).map(key => ({...res[key], id: key}));
            },
            providesTags: ['items']
        }),
        getDataId: build.query<IData, string>({
            query: (id) => ({
                url: `items/${id}.json`
            })
        }),
        addData: build.mutation<any, IData>({
            query: (body) => ({
                url: 'items.json',
                method: 'POST',
                body
            }),
            invalidatesTags: ['items']
        }),
        updateData: build.mutation<any, updateDataRequest>({
            query: ({id, body}) => ({
                url: `items/${id}.json`,
                method: 'PUT',
                body
            }),
             invalidatesTags: ['items']
        }),
        deleteData: build.mutation<any, string>({
            query: (id) => ({
                url: `items/${id}.json`,
                method: "DELETE",
            
            }),
             invalidatesTags: ['items']
        })
    })
     
});
export const {
    useGetDataQuery, 
    useLazyGetDataIdQuery,
    useGetDataIdQuery, 
    useAddDataMutation, 
    useUpdateDataMutation, 
    useDeleteDataMutation}  = queryApi;