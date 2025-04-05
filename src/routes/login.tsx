import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Title } from "../components/title";

import CPFFormatter from "../utils/CPFFormatter";
import PasswordPass from "../utils/PasswordPass";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header title="LOGIN" />

      <main className="h-screen bg-dark-gray flex items-center justify-center">
        <div className="columns-1">
          <Title />

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

      <Footer hasLogo={true} />
    </>
  );
}
