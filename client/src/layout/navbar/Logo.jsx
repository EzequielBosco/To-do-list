import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link to="/">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 256 352"><path fill="#FFBA00" d="M232 352H24c-13.28 0-24-10.72-24-24V24C0 10.72 10.72 0 24 0h144l88 88v240c0 13.28-10.72 24-24 24Z"/><path fill="#FF9500" d="m168 0l88 88h-88z"/><path fill="#FFF" d="M156 236v20h-56v-20h56Zm-28.08-115.999l.78.006c28.323.46 51.14 23.56 51.14 51.993c0 18.56-9.72 34.8-24.32 44h-55.2C85.68 206.8 76 190.56 76 172c0-28.72 23.28-52 52-52l-.08.001Z"/></svg>    
        <p className="logo-text">To Do List</p>
      </div>
    </Link>
  )
}

export default Logo