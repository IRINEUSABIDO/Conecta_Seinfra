import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Title } from "../components/title";
import Logo from "../assets/logoPrefeitura.png";
import Tres_Pontos from "../assets/icons/tres_pontos.png";
import adicionar_icon from "../assets/icons/+.png";
import teclado_icon from "../assets/icons/teclado.png";

function RouteComponent() {
  return (
    <>
      <header>
        <div className="bg-light-gray">
          <img
            src={Logo}
            alt="logo da prefeitura HEADER"
            className="w-[190px]"
          />
          <div className="absolute top-[75px] right-0  ">
            <img src={Tres_Pontos} alt="Três pontos do Header" />
          </div>
          <Header title=" " />
        </div>
      </header>

      <main>
        <div className="flex items-center justify-center bg-dark-gray text-light-gray h-screen">
          <div className="columns-1">
            <Title />

            <div className="rounded-2xl bg-light-gray flex items-center space-x-16 ">
              <button
                type="button"
                className="px-9 py-4 text-header-blue font-inter font-semibold cursor-pointer"
              >
                <h1>Registrar um Ordem</h1>
              </button>
              <img
                src={adicionar_icon}
                alt="Opção Index +"
                className="w-[10px]"
              />
            </div>

            <br />

            <div className="rounded-2xl bg-light-gray flex items-center space-x-16">
              {" "}
              <button
                type="button"
                className="px-9 py-4 text-header-blue font-inter font-semibold cursor-pointer"
              >
                <h1>Minhas Solicitações</h1>
              </button>
              <img
                src={adicionar_icon}
                alt="Opção Index +"
                className="w-[10px]"
              />
            </div>

            <br />

            <div className="rounded-2xl bg-light-gray flex items-center space-x-18 ">
              {" "}
              <button
                type="button"
                className="px-9 py-4 text-header-blue font-inter font-semibold cursor-pointer"
              >
                <h1>Mensagem Direta</h1>
              </button>
              <img
                src={teclado_icon}
                alt="Opção Index teclado"
                className="w-[25px]"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer hasLogo={false} />
    </>
  );
}
