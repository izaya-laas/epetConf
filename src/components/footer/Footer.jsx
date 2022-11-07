import { BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="p-8 bg-gradient-to-b from-third-color via-third-color to-primary-color"></div>
      <footer className="p-8 bg-primary-color text-fourth-color font-inter ">
        <h2 className="text-center text-lg tablet:text-xl">Conocenos mas en</h2>
        <div className="border-t-2 tablet:w-3/5 mx-auto border-fourth-color mb-4"></div>
        <div className="flex justify-center gap-x-8">
          <BsInstagram className="scale-150 text-third-color" />
          <BsYoutube className="scale-150 text-third-color" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
