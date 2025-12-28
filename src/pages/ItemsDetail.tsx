import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {
  useGetDataIdQuery,
  useLazyGetDataIdQuery,
} from "../store/query/queryApi";

export const ItemsDetail = () => {
  //const [searchParams] = useSearchParams();
  //const id = searchParams.get("id");
  const params = useParams();
  const id = params.id;
  const { data, isLoading, isError } = useGetDataIdQuery(id);
  if (!data) return null;
  const { title, description } = data;
  return (
    <div className="detail">
      {title && <div className="detail__title">{title}</div>}
      {description && <div className="detail__title">{description}</div>}
    </div>
  );
};
