import { useState } from "react";
import password_hide from "../assets/icons/Hide.png";
import password_show from "../assets/icons/Show.png";

const PasswordPass = () => {
  const [showPassword, setShowPassword] = useState(false);

  const click = () => {
    setShowPassword((alternar) => !alternar);
  };

  return (
    <div className="rounded-2xl bg-light-gray flex items-center space-x-6">
      <input
        placeholder="SENHA"
        type={showPassword ? "text" : "password"}
        className="px-8 py-3 text-header-blue font-inter font-semibold outline-0"
      />
      <button type="button" onClick={click} className="outline-none">
        {" "}
        <img
          src={showPassword ? password_show : password_hide}
          alt="Altenar imagens quando quiser mostrar ou nao sua senha"
          className="w-[25px] m-[2px] cursor-pointer"
        />
      </button>
    </div>
  );
};

export default PasswordPass;
