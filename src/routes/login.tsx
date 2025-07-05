import { Footer } from "../components/footer.tsx";
import { Header } from "../components/header.tsx";
import { Title } from "../components/title.tsx";

import type { userLogin } from "../services/zodSchemas.ts";
import { userLoginSchema } from "../services/zodSchemas.ts";
import { loginAuth } from "../services/authRequest.ts";
import { corretorCPF } from "../utils/CPFFormatter.tsx";

import identify from "../assets/icons/credenciais.png";
import password_hide from "../assets/icons/Hide_gray.png";
import password_show from "../assets/icons/Show_gray.png";

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [cpf, setCpf] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const mudanca = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(corretorCPF(e.target.value));
  };

  const click = () => {
    setShowPassword((alternar) => !alternar);
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<userLogin>({ resolver: zodResolver(userLoginSchema) });

  async function onSubmit(data: userLogin) {
    loginAuth(data);
  }

  return (
    <>
      <Header title="LOGIN" />

      <main className="h-screen bg-dark-gray flex items-center justify-center">
        <div className="columns-1">
          <Title />

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* form do cpf  */}
            <div>
              <div className="rounded-2xl bg-light-gray flex items-center space-x-3">
                <input
                  {...register("cpf")}
                  type="text"
                  placeholder="CPF"
                  value={cpf}
                  onChange={mudanca}
                  maxLength={14}
                  className="px-9 py-3 text-header-blue font-inter font-semibold outline-0"
                />
                <img src={identify} alt="identify" className="w-[30px]" />
              </div>
              {errors.cpf && (
                <p
                  className="text-red-main
              font-inter font-semibold outline-0"
                >
                  {errors.cpf.message}
                </p>
              )}
            </div>

            <br />

            {/* form da senha  */}
            <div className="rounded-2xl bg-light-gray flex items-center space-x-6">
              <input
                {...register("senha")}
                placeholder="SENHA"
                type={showPassword ? "text" : "password"}
                className="px-8 py-3 text-header-blue font-inter font-semibold outline-0"
              />
              <button type="button" onClick={click} className="outline-none">
                {" "}
                <img
                  src={showPassword ? password_show : password_hide}
                  alt="Altenar imagens quando quiser mostrar ou nao sua senha"
                  className="w-[25px] m-[2px] cursor-pointer"
                />
              </button>
            </div>
            {errors.senha && (
              <p
                className="text-red-main
              font-inter font-semibold outline-0"
              >
                {errors.senha.message}
              </p>
            )}
            {/* botao do cadastro */}
            <div className="text-header-blue font-inter font-semibold text-[15px] mt-[10px] mb-[25px]">
              <h1>
                NOVO NO CONECTA SEINFRA?{" "}
                <a
                  className="hover:text-blue-800 underline"
                  href="https://www.youtube.com/watch?v=HrD4DoP7ArY&t=31s"
                >
                  CADASTRE-SE
                </a>
              </h1>
            </div>
            {/* botao do submit */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className=" m-[20px] text-whitebor  bg-green-blue rounded-2xl disabled:bg-red-700 "
              >
                <h1 className="px-5.5 py-1.5 font-inter font-extrabold hover:cursor-crosshair">
                  ENTRAR
                </h1>
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer hasLogo={true} />
    </>
  );
}
