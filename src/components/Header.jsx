import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
} from "react-icons/bs";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-right">
          <BsFillBellFill className="icon" />
          <BsFillEnvelopeFill className="icon" />
          <BsPersonCircle className="icon" />
        </div>
      </header>
    </>
  );
}

export default Header;
