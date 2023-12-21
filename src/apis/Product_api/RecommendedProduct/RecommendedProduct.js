export const getTopRatedProduct = (UserID, accessToken) => {
    return fetch("https://store-game-server.onrender.com/api/user/getrecommendations", {
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

