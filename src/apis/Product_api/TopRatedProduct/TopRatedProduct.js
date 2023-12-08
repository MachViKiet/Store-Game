export const getTopRatedProduct = () => {
    return fetch("http://localhost:5000/api/product/getTopRated-Pro", {
      method: "GET",
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
  
  