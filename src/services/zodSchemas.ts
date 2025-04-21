import { z } from "zod";

export const userLoginSchema = z.object({
  cpf: z
    .string()
    .max(14, { message: "CPF invalido" })
    .min(1, { message: "O campo precisa ser preenchido" }).min(14, { message: "CPF invalido" }),
  senha: z
    .string()
    .min(8, { message: "A senha deve conter no minimo 8 caracteres" })
    .min(1, { message: "O campo precisa ser preenchido" }),
});

export type userLogin = z.infer<typeof userLoginSchema>;
