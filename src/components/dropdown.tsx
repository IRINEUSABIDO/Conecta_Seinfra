import { useState } from "react";

import chevron_up from "../assets/icons/Chevron_Up.png";
import chevron_down from "../assets/icons/Chevron_Down.png";
import { Dropdown_Select_Button } from "./dropdownButton";

interface Props {
  title: string;
  opcao1: string;
  opcao2: string;
  opcao3: string;
  opcao4: string;
  opcao5: string;
  
}

export const Dropdown_Select = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [indexSelecionado , setIndexSelecionado] = useState<number | null>(null);

  const click = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative z-10 rounded-2xl bg-light-gray flex flex-col items-center justify-center p-4 pr-2 mr- w-[365px]">
      <div className="w-full flex justify-between items-center font-inter font-bold text-header-blue">
        <h1 className="text-header-blue">{props.title}</h1>
        <button
          type="button"
          onClick={click}
          className="outline-none cursor-pointer"
        >
          <img
            src={isOpen ? chevron_down : chevron_up}
            alt="Ícone do menu"
            className="w-[25px] m-[2] cursor-pointer"
          />
        </button>
      </div>

      {/* Quando o usuário clicar no chevron, vai chamar esse bloco que contém as opções  */}
      {isOpen && (
        <div className="absolute top-full z-50 mt-2 w-full flex flex-col items-center space-y-2">
          {[
            props.opcao1,
            props.opcao2,
            props.opcao3,
            props.opcao4,
            props.opcao5,
          ].map((opcao, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between bg-white py-3 px-4 rounded-xl shadow-xl shadow-gray-400 cursor-pointer text-header-blue font-bold"
              onClick={() => setIndexSelecionado(index)}
            >
              <span className="">
                {opcao}
              </span>
              <Dropdown_Select_Button selected={indexSelecionado === index} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
