import logo from "../assets copy/images/logo.svg"
import NavMobile from "./NavMobile"
import "../style/header.css"
import NavDesktop from "./NavDesktop"
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setMobile] = useState(window.innerWidth < 650);

  const updateMedia = () => {
    setMobile(window.innerWidth < 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
    <header>
      <img src={logo} />
      {isMobile ? 
      <NavMobile /> :
      <NavDesktop /> }
    </header>
    </>
  )
}
