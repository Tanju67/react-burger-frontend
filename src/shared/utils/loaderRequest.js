import { json } from "react-router-dom";

export async function loaderRequest(url, server = false, headers) {
  const response = !server
    ? await fetch(url)
    : await fetch(url, { headers: headers });

  if (!response.ok) {
    if (response.status === 429) {
      throw json(
        { message: "Too many request" },
        {
          status: 429,
        }
      );
    } else {
      throw json(
        { message: "Could not fetch  data." },
        {
          status: 500,
        }
      );
    }
  } else {
    const resData = await response.json();
    return resData;
  }
}
