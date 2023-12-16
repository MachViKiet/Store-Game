export const removeCart = (userID, productInf, accessToken) => {
  console.log('---',productInf)
    return fetch("https://store-game-server.onrender.com/api/user/delete-cart/" + userID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "token": "Beare " +  accessToken
      },
      body: JSON.stringify(
        productInf
      ),
    }).then((response) => {
      return response.json();
    }).then((response) => {
      return response
    });
  };
  