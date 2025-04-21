import axios from "./api/axios";
import { userLogin } from "./zodSchemas";

const loginAuth = async (data: userLogin) => {
  const response = await axios
    .post("/login", data, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
    .then((res) => {
      console.log("aeeeeeeee", res);
    })
    .catch((err) => {
      console.log("a vida e triste e injusta", err);

      if (!err?.response) {
        alert("Sem resposta do servidor");
      } else if (err.response?.status === 401) {
        alert("Sem autorizaçao");
      }
    });
  console.log(response);
};

export default loginAuth;
