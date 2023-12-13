export const removeWishlist = (userID, productInf, accessToken) => {
    console.log(userID, productInf, accessToken)
    return fetch("https://store-game-server.onrender.com/api/user/delete-wishlist/" + userID, {
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
  