import logoPrefeitura from "../assets/logoPrefeitura.png";
import footerImage from "../assets/footer.png";

interface Props {
  hasLogo: boolean;
}

export const Footer = (props: Props) => {
  return (
    <>
      <footer>
        {props.hasLogo ? (
          <div>
            <div className="flex">
              <div className="bg-header-red h-[15px] grow"></div>
              <div className="bg-header-light-blue h-[15px] grow"></div>
              <div className="bg-header-yellow h-[15px] grow"></div>
            </div>
            <div className="flex items-center justify-center bg-light-gray ">
              <img src={logoPrefeitura} alt="logo da prefeitura" />
            </div>
            <div className="flex items-center justify-center">
              <img src={footerImage} alt="footer do site" className="" />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img src={footerImage} alt="footer do site" />
          </div>
        )}
      </footer>
    </>
  );
};
