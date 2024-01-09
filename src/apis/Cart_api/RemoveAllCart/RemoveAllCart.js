import { url } from "~/apis/Config";

export const removeAllCart = (userID, accessToken) => {
    console.log(userID, accessToken)
    return fetch(url.REST_API + "/api/user/delete-allcart/" + userID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "token": "Beare " +  accessToken
      },
      body: JSON.stringify(
        
      ),
    }).then((response) => {
      return response.json();
    }).then((response) => {
      return response
    });
  };
  