export const loginAPI = (email, password) => {
  return fetch("https://store-game-server.onrender.com/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response) => {
    // if (!response.ok) {
    //   return {
    //     message: 'Unconnected on server',
    //     status: 'ERROR'
    //   }
    // }
    console.log(response)
    return response.json();
  });
};
