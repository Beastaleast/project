import axios from "axios";

export const API = axios.create({
  baseURL: "https://my-api-six-steel.vercel.app/api/",
  headers: { "x-api-key": "ggp-pro-ject" },
});
