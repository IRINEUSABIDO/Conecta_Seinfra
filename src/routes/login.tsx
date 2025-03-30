import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

import password_ocult from "/janela da rua/barcelona2015/Conecta_Seinfra/src/assets/icons/senha.png";
import CPFFormatter from "../utils/CPFFormatter";

function RouteComponent() {
  return (
    <>
      <header className="bg-light-gray w-screen">
        <h1 className="text-center font-bold text-2xl text-header-blue mb-[20px]">
          LOGIN
        </h1>

        <div className="flex">
          <div className="bg-header-red h-[10px] grow"></div>
          <div className="bg-header-light-blue h-[10px] grow"></div>
          <div className="bg-header-yellow h-[10px] grow"></div>
        </div>
      </header>

      <main className="h-screen bg-dark-gray flex items-center justify-center">
        <div className="columns-1">
          <div className="mr-[70px] ml-[30px]">
            <h1 className="text-5xl font-inter font-light text-whitebor">
              <em>CONECTA</em>
            </h1>
          </div>

          <div className="ml-[130px] mb-[100px]">
            <h1 className="text-5xl font-inter font-light text-whitebor mb-[40px]">
              <em>SEINFRA</em>
            </h1>
          </div>

          <div className="rounded-2xl bg-light-gray flex items-center space-x-3">
            <CPFFormatter />
          </div>

          <br />

          <div className="rounded-2xl bg-light-gray flex items-center space-x-8">
            <input
              placeholder="SENHA"
              type="password"
              className="px-8 py-3 text-header-blue font-inter font-semibold outline-0"
            />
            <img
              src={password_ocult}
              alt="passwordOcult"
              className="w-[25px]"
            />
          </div>
        </div>
      </main>
    </>
  );
}
