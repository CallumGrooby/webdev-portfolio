import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Links = [
  { linkName: "Home", href: "home" },
  { linkName: "Projects", href: "projects" },
  { linkName: "Contact Us", href: "contact" },
];

export const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row gap-2">
        {Links.map((link, index) => {
          return (
            <NavLink key={index} to={link.href}>
              {link.linkName}
            </NavLink>
          );
        })}
      </nav>

      <Outlet></Outlet>
    </>
  );
};
