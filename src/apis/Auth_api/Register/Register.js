import { url } from "~/apis/Config";

export const registerAPI = (
  username,
  email,
  password,
  confirmPassword,
  phone,
  role
) => {
  return fetch(url.REST_API + "/api/user/register", {
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
      return response.json();
    });
};
