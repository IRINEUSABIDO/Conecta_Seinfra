import { login } from "./api/axios";
import { userLogin } from "./zodSchemas";
// cpf da lenda: 093.426.767-09
// senha do legend: irineu13
export const loginAuth = async (data: userLogin) => {
  try {
    const response = await login.post("/login", data, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
