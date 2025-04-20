import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Title } from "../components/title";

import type { userLogin } from "../utils/zodSchemas.ts";
import { userLoginSchema } from "../utils/zodSchemas.ts";
import { corretorCPF } from "../utils/CPFFormatter.tsx";

import identify from "../assets/icons/User_Card_ID.png";
import password_hide from "../assets/icons/Hide.png";
import password_show from "../assets/icons/Show.png";

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../services/api/api.ts";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [cpf, setCpf] = useState<string>("");

  const mudanca = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(corretorCPF(e.target.value));
  };

  const [showPassword, setShowPassword] = useState(false);

  const click = () => {
    setShowPassword((alternar) => !alternar);
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<userLogin>({ resolver: zodResolver(userLoginSchema) });

  async function onSubmit(data: userLogin) {
    console.log(data);

    const response = await api.post("/login", data, {
      headers: {
        "Content-Type": "multipart/form-data", // necessario para ser enviado corretamente sendo um form, da erro 415
      },
    });
    console.log(response);

    // const response = await api.post("/login", data).then((res) => {
    //   console.log("aeeeeeeee", res)
    // }).catch((err) => {
    //   console.log("a vida e triste e injusta", err)
    // });
    // console.log(response);
    // erro 404
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
                <h1 className="px-5.5 py-1.5 font-inter font-extrabold ">
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
