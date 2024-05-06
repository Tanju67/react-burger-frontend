import { authActions } from "./auth-slice";

export const fetchCurrentUser = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/v1/auth/current",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Could not fetch user data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const userData = await fetchData();
      dispatch(
        authActions.setUser({
          user:
            {
              id: userData.info.id,
              name: userData.info.name,
              role: userData.info.role,
            } || {},
        })
      );
    } catch (error) {
      throw new Error("Could not fetch user data!");
    }
  };
};
