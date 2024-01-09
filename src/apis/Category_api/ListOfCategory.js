import { url } from "~/apis/Config";

export const getListOfCategory = () => {

    return fetch(url.REST_API + "/api/category/getAll-category", {
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
  