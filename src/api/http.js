import axios from "axios";
const http = axios.create({
    base: process.env.VUE_APP_API_PATH,
});
export default http;
