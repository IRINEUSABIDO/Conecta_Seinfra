import { createLazyFileRoute } from "@tanstack/react-router";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Dropdown_Select } from "../components/dropdown";
import { Button_Input } from "../components/button";

import teclado_azul from "../assets/icons/tecladoAzul.png";
import icon_camera from "../assets/icons/cameraRO.png";
export const Route = createLazyFileRoute("/registrarOrdem")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header title="Registrar uma Ordem" />
      <main className="flex justify-center items-center bg-dark-gray h-screen">
        <div className="columns-1">
          <Dropdown_Select
            title="Categoria"
            opcao1="Iluminação"
            opcao2="Poda da Árvore"
            opcao3="Buraco na Pista"
            opcao4="Asfaltar"
            opcao5="Outros"
          />

          <br />

          <Button_Input title="Bairro" src="" />

          <br />

          <Button_Input title="Rua" src="" />

          <br />

          <Button_Input title="Ponto de Referência" src="" />

          <br />

          <div className="relative max-w-md rounded-2xl bg-light-gray space-x-3">
            <div className="">
              <img 
              src={teclado_azul}
              className="w-[32px] ml-80 pt-4"
              />
            </div>
            <textarea
              placeholder="Descreva o ocorrido"
              className="w-full p-6 text-header-blue font-inter font-bold cursor-pointer outline-0 resize-none"
            />
            
            
            <button type="button" className="cursor-pointer">
              <img
                src={icon_camera}
                className="relative p-2 ml-2 outline-none rounded-2xl bg-header-blue w-[38px]"
              />
            </button>
            
          </div>
        </div>
      </main>
      <Footer hasLogo={false} />
    </>
  );
}
