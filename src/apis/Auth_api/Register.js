import { useNavigate } from "react-router-dom";

export const registerAPI = (username, email, password, confirmPassword, phone, role) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()

    let res = {} 
    fetch("http://localhost:5000/api/user/register", {
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
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          res = response.json()
          return response.json();
        })
        .then((response) => {
          console.log("Server response:", response);
          if (response.status === "OK" && response.message === "SUCCESS") {
            navigate("/store-game");
          } 
          res = response.json()
          return response.json();
          // Xử lý phản hồi từ server tại đây
        })
  return res
};
