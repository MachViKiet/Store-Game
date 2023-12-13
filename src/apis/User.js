export const getUserInf = ( userID ) => {
    return fetch("https://store-game-server.onrender.com/api/user/getDetails-user/" + userID, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      });
  };
  