export const loginAPI = (email, password) => {
    let res = {} 
  fetch("http://localhost:5000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    res = response.json()
    return response.json();
  });

  return res
};
