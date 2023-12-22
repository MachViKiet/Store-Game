import { url } from "~/apis/Config";

export const getProductByCategory = (type) => {
    return fetch(`${url.REST_API}/api/product/getType-Pro/` + type, {
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
  