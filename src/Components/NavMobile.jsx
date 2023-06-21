import { useState } from "react"
import menu from "../assets copy/images/icon_menu.svg"
import close from "../assets copy/images/icon_menu_close.svg"
import Nav from "./Nav"


export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false)
  
  function handleBtn() {
    setIsOpen(prev => !prev)
  }

  return (
    <section className="nav-bar-mobile">
      <button className="close-menu" onClick={() => {handleBtn()}} >
        {isOpen ? <img src={close} /> : <img src={menu} />}
      </button>
    {isOpen ? <Nav /> : " " }
    </section>
  )
}
