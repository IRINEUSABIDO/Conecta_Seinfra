import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const login = axios.create({
    withCredentials: true,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
}
)