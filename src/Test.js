import { useEffect, useState } from "react";

const API = () => {
  fetch("http://localhost:4000/api/v1/assets", {
    method: "GET",
  })
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return;
};

export default API;
