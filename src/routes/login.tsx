import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});
import footer from "/janela da rua/barcelona2015/Conecta_Seinfra/src/assets/footer.png";
import logoPrefeitura from "/janela da rua/barcelona2015/Conecta_Seinfra/src/assets/logoPrefeitura.png";
import CPFFormatter from "../utils/CPFFormatter";
import PasswordPass from "../utils/PasswordPass";

function RouteComponent() {
  return (
    <>
      <header className="bg-light-gray w-screen">
        <h1 className="text-center font-bold text-2xl text-header-blue mb-[20px]">
          LOGIN
        </h1>

        <div className="flex">
          <div className="bg-header-red h-[15px] grow"></div>
          <div className="bg-header-light-blue h-[15px] grow"></div>
          <div className="bg-header-yellow h-[15px] grow"></div>
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

          <CPFFormatter />

          <br />

          <PasswordPass />
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
          <div className="flex items-center justify-center">
            <button type="button" className=" m-[20px] text-whitebor">
              <h1 className="px-5.5 py-1.5 font-inter font-extrabold bg-green-blue rounded-2xl">
                ENTRAR
              </h1>
            </button>
          </div>
        </div>
      </main>

      <footer>
        <div className="flex">
          <div className="bg-header-red h-[15px] grow"></div>
          <div className="bg-header-light-blue h-[15px] grow"></div>
          <div className="bg-header-yellow h-[15px] grow"></div>
        </div>

        <div className="flex items-center justify-center bg-light-gray ">
          <img src={logoPrefeitura} alt="logo da prefeitura" />
        </div>

        <div className="flex items-center justify-center">
          <img src={footer} alt="footer do site" className="" />
        </div>
      </footer>
    </>
  );
}
