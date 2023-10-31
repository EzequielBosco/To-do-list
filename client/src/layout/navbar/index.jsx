import Logo from "./Logo"
import Reload from "./Reload"
import Search from "./Search"
import "./navbar.css"

function Navbar({ id }) {
  return (
    <>
      <nav>
        <Logo />
        <Search className="search" placeholder="Buscar..." />
        <Reload link='/' id={id} />
      </nav>
      <hr />
    </>
  )
}

export default Navbar