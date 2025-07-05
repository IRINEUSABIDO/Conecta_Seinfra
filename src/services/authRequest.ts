import { login } from "./api/axios";
import { userLogin } from "./zodSchemas";

export const loginAuth = async (data: userLogin) => {
  await login
    .post("/login", data, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
    .then((response) => {
      console.log("aeeeeeeee", response.data);
    })
    .catch((err) => {
      console.log("a vida e triste e injusta", err);

      if (!err?.response) {
        alert("Sem resposta do servidor");
      } else if (err.response?.status === 401) {
        alert("Sem autorizaçao");
      }
    });
};
;
