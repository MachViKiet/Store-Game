

export const getDetailProduct = (id_product) => {
    return fetch("https://store-game-server.onrender.com/api/product/getDetails-Pro/" + id_product, {
      method: "GET"
      }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }).then ((response) => {
      return response.data
    });
  };
  