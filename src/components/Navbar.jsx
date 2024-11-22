import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Links = [
  { linkName: "Home", href: "/" },
  { linkName: "Projects", href: "projects" },
];

export const Navbar = () => {
  return (
    <>
      <nav className="container-sm mx-auto flex flex-row gap-4 w-full h-[140px] justify-end items-center">
        {Links.map((link, index) => {
          return (
            <NavLink
              className={"text-lg hover:text-red"}
              key={index}
              to={link.href}
            >
              {link.linkName}
            </NavLink>
          );
        })}
      </nav>

      <Outlet></Outlet>
    </>
  );
};
