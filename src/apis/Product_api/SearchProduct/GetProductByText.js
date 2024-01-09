import { url } from "~/apis/Config";

export const getProductByText = (text) => {
    return fetch(url.REST_API + "/api/product/searchBar", {
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
          return {
            data: []
          }
        }
        return response.json();
      })
      .then((response) => {
        return response.data;
      });
  };
  
  