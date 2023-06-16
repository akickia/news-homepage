import logo from "../assets copy/images/logo.svg"
import NavMobile from "./NavMobile"
import "../style/header.css"
import NavDesktop from "./NavDesktop"

export default function Header() {
  return (
    <>
    <header>
      <img src={logo} />
      <NavDesktop />
      <NavMobile />
    </header>
    </>
  )
}
