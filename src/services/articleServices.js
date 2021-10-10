import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = () => {
  return new Promise((resolve, reject) => {
      axiosWithAuth({
          method: "get",
          endpoint: "/articles"
      })
      .then(({data}) => {
          resolve(data)
      })
      .catch((error) => {
          reject(error)
      })
  })
};

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.
