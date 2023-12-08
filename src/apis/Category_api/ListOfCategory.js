

export const getListOfCategory = () => {

    return fetch("https://store-game-server.onrender.com/api/category/getAll-category", {
      method: "GET"
      }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }).then ((response) => {
      console.log("getPopular: ",response.data)
      return response.data
    });
  
  };
  