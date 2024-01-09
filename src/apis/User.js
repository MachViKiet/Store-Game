import { url } from "~/apis/Config";

export const getUserInf = ( userID ) => {
    return fetch(url.REST_API + "/api/user/getDetails-user/" + userID, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": "Beare " +  localStorage.getItem('accessToken')
      },
    })
      .then((response) => {
        return response.json();
      });
  };
  