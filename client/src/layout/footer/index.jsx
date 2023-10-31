import { Link } from "react-router-dom"
import "./footer.css"

function Footer() {
  return (
    <footer>
      <p>Sitio web desarrollado por <Link to="https://ezequielbosco.vercel.app/" target="_blank">Ezequiel Bosco</Link></p>
    </footer>
  )
}

export default Footer