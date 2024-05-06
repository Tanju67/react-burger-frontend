/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ExtrasItem from "./ExtrasItem";
import { useHttpRequest } from "../../shared/hooks/send-request";
import Spinner from "../../shared/UIElements/Spinner";

function Extras({ title, query }) {
  const [data, setData] = useState([]);
  const { sendRequest, isLoading } = useHttpRequest();
  useEffect(() => {
    sendRequest(
      import.meta.env.VITE_BACKEND_URL + `/api/v1/admin/extra?title=${query}`,
      "GET",
      undefined,
      undefined,
      {
        "Content-Type": "application/json",
      },
      (data) => {
        setData(data);
      }
    );
  }, []);
  return (
    <div>
      {isLoading && <Spinner />}
      <h3>{title}</h3>
      {data.map((item) => (
        <ExtrasItem key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Extras;
