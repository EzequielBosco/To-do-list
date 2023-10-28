import Logo from "./Logo"
import Search from "./Search"
import "./navbar.css"

function Navbar() {
  return (
    <nav>
      <Logo />
      <Search />
      {/* <Button /> */}
    </nav>
  )
}

export default Navbar