import axios from "axios";
export function fetchData() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}
