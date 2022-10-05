import { useEffect, useState } from "react";

const API = () => {
  fetch("http://localhost:4000/api/v1/activities", {
    "method": "GET"
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
  return;
};

export default API;
