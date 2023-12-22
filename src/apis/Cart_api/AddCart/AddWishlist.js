import { url } from "~/apis/Config";

export const addToCart = (userID, productInf, accessToken) => {
    return fetch(url.REST_API + "/api/user/update-cart/" + userID, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "token": "Beare " +  accessToken
      },
      body: JSON.stringify([
        productInf
      ]),
    }).then((response) => {
      return response.json();
    }).then((response) => {
        return response
      });
  };