export const getProductByText = (text) => {
  console.log('api')
    return fetch("https://store-game-server.onrender.com/api/product/searchBar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query : text
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
  
  