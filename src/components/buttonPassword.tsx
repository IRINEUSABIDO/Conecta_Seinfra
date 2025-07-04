import { useState } from "react";
import hide_gray from "../assets/icons/Hide_gray.png";
import show_gray from "../assets/icons/Show_gray.png";
interface Props {
  title: string;
  hasPassword: boolean;
  src: string;
}

export const Button_password = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const click = () => {
    setShowPassword((alternar) => !alternar);
  };
  return (
    <>
    {props.hasPassword ? (
        <div className="rounded-2xl bg-light-gray flex items-center space-x-6">
        <input
          placeholder={props.title}
          type={showPassword ? "text" : "password"}
          className="px-10 py-4 text-header-blue font-inter font-semibold outline-0"
        />
        <button type="button" onClick={click} className="outline-none">
          {" "}
          <img
            src={showPassword ? show_gray : hide_gray}
            alt="Altenar imagens quando quiser mostrar ou nao sua senha"
            className="w-[25px] m-[2px] cursor-pointer"
          />
        </button>
      </div>
    ) : (
        <div className="rounded-2xl bg-light-gray flex items-center space-x-6">
            <input 
            placeholder={props.title}
            type="password"
            className="px-10 py-4 text-header-blue font-inter font-semibold outline-0"
            />
            <img src={props.src} alt="confirmação da senha" className="mr-4"/>
        </div>
    )}
      
    </>
  );
};
