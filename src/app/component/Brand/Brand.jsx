import { NavbarBrand, Link } from "@nextui-org/react";
import React from "react";

export default function Brand() {
  return (
    <NavbarBrand>
      <Link color="foreground" href="#" className="text-2xl font-bold">
        Phan Van Hai
      </Link>
    </NavbarBrand>
  );
}
