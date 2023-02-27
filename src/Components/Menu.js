import open from "../Images/icon-hamburger.svg";
import close from "../Images/icon-close.svg";
const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? (
          <img src={close}></img>
        ) : (
          <img src={open} alt="HamOpen"></img>
        )}
      </button>
    </>
  );
};

export default Menu;
