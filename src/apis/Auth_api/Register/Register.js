export const registerAPI = (
  username,
  email,
  password,
  confirmPassword,
  phone,
  role
) => {
  return fetch("https://store-game-server.onrender.com/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phone: phone,
      role: role,
    }),
  })
    .then((response) => {
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
