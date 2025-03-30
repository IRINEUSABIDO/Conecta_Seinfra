import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

import identify from "/janela da rua/barcelona2015/Conecta_Seinfra/src/assets/icons/identify.png";

function RouteComponent() {
  return (
    <>
      <header className="bg-light-gray">
        <h1 className="text-center font-semibold text-2xl text-header-blue ">
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
          <div className="mr-[70px]">
            <h1 className="text-5xl font-inter font-light text-whitebor">
              <em>CONECTA</em>
            </h1>
          </div>

          <div className="ml-[100px]">
            <h1 className="text-5xl font-inter font-light text-whitebor mb-[40px]">
              <em>SEINFRA</em>
            </h1>
          </div>

          <div className="rounded-3xl bg-light-gray border-1 flex items-center space-x-3">
            <input
              placeholder="CPF"
              type="text"
              className="px-8 py-3 text-header-blue font-inter font-semibold"
            />
            <img src={identify} alt="identify" className="w-[50px]" />
          </div>

          <br />

          <div className="rounded-3xl bg-light-gray">
              <input
                placeholder="SENHA"
                type="passaword"
                className="px-8 py-3 text-header-blue font-inter font-semibold"
              />
          </div>
        </div>
      </main>
    </>
  );
}
