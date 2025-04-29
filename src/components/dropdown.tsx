import { useState } from "react";
import seta_up from "../assets/icons/Chevron_Up.png";
import seta_down from "../assets/icons/Chevron_Down.png";

interface Props{
    title: string;
}

export const Dropdown = (props: Props) => {
    const [showMenu ,setShowMenu] = useState(false)
    const clicar = () => {
        setShowMenu((alternar) => !alternar)
    }

    return(
        <>
        <div className="rounded-2xl bg-light-gray flex items-center space-x-6">

        </div>
        </>
    )
}