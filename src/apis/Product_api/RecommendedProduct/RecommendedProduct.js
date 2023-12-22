import { url } from "~/apis/Config";

export const getTopRatedProduct = async (UserID, accessToken) => {
    return fetch(url.REST_API + "/api/user/getrecommendations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": "Kiet " + accessToken
        },
        body: JSON.stringify({
            "userId": UserID
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((response) => {
            return response.data;
        });
};

