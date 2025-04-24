import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/header";
import { Title } from "../components/title";
import { Button_Input } from "../components/button";

import pessoa from "../assets/icons/pessoa.png";
import telefone from "../assets/icons/telefone.png";
import credencias from "../assets/icons/credenciais.png";
import hide_gray from "../assets/icons/Hide_gray.png";
import show_gray from "../assets/icons/Show_gray.png";

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
          <form>
          <div className="flex items-center justify-center">
          <Button_Input title="Nome" />
          <img src={pessoa} alt="pessoa_icon" className="w-[25px]" />
          </div>
          <br />

          <Button_Input title="Telefone"/>
          <br />

          <Button_Input title="CPF"/>
          <br />

          <Button_Input title="Senha"/>
          <br />

          <Button_Input title="Confirmação da Senha"/>

          </form>
        </div>
      </div>
    </>
  );
}
