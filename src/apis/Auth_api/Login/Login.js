import { url } from "~/apis/Config";

export const loginAPI = (email, password) => {
  return fetch( url.REST_API + "/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response) => {
    return response.json();
  });
};
