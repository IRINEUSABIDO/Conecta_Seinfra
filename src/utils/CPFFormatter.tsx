import React, { useState } from "react";
import identify from "/janela da rua/barcelona2015/Conecta_Seinfra/src/assets/icons/User_Card_ID.png";

const corretorCPF = (cpf: string): string => {
  cpf = cpf.replace(/\D/g, "");

  return cpf
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
};

const CPFFormatter: React.FC = () => {
  const [cpf, setCpf] = useState<string>("");

  const mudanca = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(corretorCPF(e.target.value));
  };
  return (
    <>
      <div>
        <div className="rounded-2xl bg-light-gray flex items-center space-x-3">
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={mudanca}
            maxLength={14}
            className="px-8 py-3 text-header-blue font-inter font-semibold outline-0"
          />
          <img src={identify} alt="identify" className="w-[30px]" />
        </div>
      </div>
    </>
  );
};

export default CPFFormatter;
