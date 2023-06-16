import { useState } from "react"
import menu from "../assets copy/images/icon-menu.svg"


export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false)
  
  function handleBtn() {
    setIsOpen(prev => !prev)
  }

  return (
    <section className="nav-bar-mobile">
      <button className="close-menu" onClick={() => {handleBtn()}} >
        {isOpen ? "X" : <img src={menu} />}
      </button>
    {isOpen ? <nav>
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>

    </nav> : " " }
    </section>
  )
}
