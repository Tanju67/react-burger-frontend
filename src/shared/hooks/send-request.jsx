import { useCallback, useState } from "react";

export const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearErrorHandler = () => {
    setError(null);
  };

  const sendRequest = useCallback(
    async (
      URL,
      method = "GET",
      controller,
      body,
      headers,
      callback,
      formdata = false
    ) => {
      try {
        setIsLoading(true);
        const responseData = await fetch(URL, {
          method: method,
          body: !formdata ? JSON.stringify(body) : body,
          headers: headers,
          signal: controller,
        });

        const data = await responseData.json();

        if (!responseData.ok) {
          throw new Error(data.msg);
        }

        setIsLoading(false);
        callback(data);
        setError(null);
        return data;
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, error, sendRequest, clearErrorHandler };
};
