import axios from "axios";
import request from "request";
import got from "got";

const catsApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

catsApi
  .get(`/images/search`, {
    params: {
      limit: 12,
      order: "Asc",
      mime_types: "jpg,png",
      size: "small",
      sub_id: "demo-87a227",
    },
    headers: {
      "x-api-key": "DEMO-API-KEY",
    },
  })
  .then(function (result) {
    console.log("axios: ", result.data);
  });

request(
  "https://api.thecatapi.com/v1/images/search",
  function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("request body:", body); // Print the HTML for the Google homepage.
  }
);

const { data } = got
  .get("https://api.thecatapi.com/v1/images/search")
  .json()
  .then(function (result) {
    console.log("got: ", result);
  });
