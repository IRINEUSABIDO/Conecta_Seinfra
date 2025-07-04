import { corretorCPF } from "../utils/CPFFormatter";
import { useState } from "react";

interface Props {
  title: string;
  src: string;
}
export const Button_cpf = (props: Props) => {
  const [cpf, setCpf] = useState<string>("");
  const mudanca = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(corretorCPF(e.target.value));
  };
  return (
    <>
      <div className="rounded-2xl bg-light-gray flex items-center space-x-3">
        <input
          type="text"
          placeholder={props.title}
          value={cpf}
          onChange={mudanca}
          maxLength={14}
          className="px-10 py-4 text-header-blue font-inter font-bold cursor-pointer outline-0 "
        />
        <img src={props.src} alt="identify" className="mr-4" />
      </div>
    </>
  );
};
