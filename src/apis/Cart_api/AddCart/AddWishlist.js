export const addToCart = (userID, productInf, accessToken) => {
    return fetch("https://store-game-server.onrender.com/api/user/update-cart/" + userID, {
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
  