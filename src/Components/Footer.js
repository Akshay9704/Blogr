import { useState } from "react";
import { footer } from "../Data/footer";
import logo from "../Images/logo.svg";
const Footer = () => {
  const [footerLinks, setFooterLinks] = useState(footer);
  return (
    <>
      <footer className="footer text-center md:text-left md:grid md:grid-cols-2 lg:py-10 px-5">
        <div>
          <img src={logo} alt="" className="block mx-auto pt-10 md:mx-0" />
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
          {footerLinks.map(({ id, title, links }) => (
            <ul key={id}>
              <h4 className="mb-5 mt-10 text-lg">{title}</h4>
              {links.map((link) => (
                <li key={link} className="py-3">
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
