import { Button } from "../../components/common/button"
import Logo from "./Logo"
import Search from "./Search"
import "./navbar.css"

function Navbar() {
  return (
    <>
      <nav>
        <Logo />
        <Search className="search" placeholder="Buscar..." />
        <Button className="btn" children="LIMPIAR TAREAS" />
      </nav>
      <hr />
    </>
  )
}

export default Navbar