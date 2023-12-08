

export const getProductByCategory = (type) => {

    return fetch("http://localhost:5000/api/product/getType-Pro/" + type, {
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
  