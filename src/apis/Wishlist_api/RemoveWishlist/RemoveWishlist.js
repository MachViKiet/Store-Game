import { url } from "~/apis/Config";

export const removeWishlist = (userID, productInf, accessToken) => {
    return fetch(url.REST_API + "/api/user/delete-wishlist/" + userID, {
      method: "DELETE",
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
  