import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/header";
import { Title } from "../components/title";
import { Button_Input } from "../components/button";

import pessoa from "../assets/icons/pessoa.png";
import telefone from "../assets/icons/telefone.png";
import credencias from "../assets/icons/credenciais.png";

import teclado from "../assets/icons/teclado.png";
import { Footer } from "../components/footer";
import { Button_cpf } from "../components/buttonCPF";
import { Button_password } from "../components/buttonPassword";

export const Route = createFileRoute("/cadastro")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header title="CADASTRE-SE" />
      <div className="flex justify-center items-center bg-dark-gray text-light-gray h-screen">
        <div className="columns-1">
          <Title />

          <main>
            <form>
              <Button_Input title="Nome" src={pessoa} />

              <br />

              <Button_Input title="Telefone" src={telefone} />
              <br />

              <Button_cpf title="CPF" src={credencias} />
              <br />

              <Button_password title="Senha" hasPassword={true} src="" />
              <br />

              <Button_password title="Confirmação da Senha" hasPassword={false} src={teclado}/>
            </form>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className=" m-[20px] text-whitebor  bg-green-blue rounded-2xl disabled:bg-red-700 "
              >
                <h1 className="px-5.5 py-1.5 font-inter font-extrabold ">OK</h1>
              </button>
            </div>
          </main>
        </div>
      </div>
      <footer>
        <Footer hasLogo={true} />
      </footer>
    </>
  );
}
