import React, { useContext } from "react";
import { NavbarItem } from "./NavbarItem";
import { NavbarContent } from "./navbarContent";
import "./navbar.scss";

import { ContextUser } from "../../context";

const Navbar = () => {
  let { user } = useContext(ContextUser);
  return (
    <nav>
      <ul className='navbar'>
        {NavbarContent.map((item, index) => {
          if (user && item.link === "/enter") {
            return (
              <NavbarItem
                link='/personal'
                content='Личный Кабинет'
                key={index}
              />
            );
          } else {
            return <NavbarItem {...item} key={index} />;
          }
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
