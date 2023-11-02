import Logo from "./Logo"
import Reload from "./Reload"
import Search from "./Search"
import "./navbar.css"

// recibo onSearch para pasarlo como argumento
function Navbar({ id, onSearch }) {
  const handleSearch = (searchQuery) => {
    // GET query reults
    // fetch(`http://localhost:3000/task?title=${searchQuery}`)
    fetch(`https://do-keep-api.onrender.com/task?title=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        onSearch(data)
      })
      .catch((error) => console.error('Error al buscar tareas', error))
  }

  return (
    <>
      <nav>
        <Logo />
        {/* // envío función de busqueda */}
        <Search className="search" placeholder="Buscar..." onSearch={handleSearch} />
        <Reload link='/' id={id} />
      </nav>
      <hr />
    </>
  )
}

export default Navbar