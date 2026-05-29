import "./Nav.css";
import Logo from "../../assets/logo-dark.svg";
export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <img src={Logo} alt="" />
          <ul className="ul-nav">
            <li>
              <a href="#Inicio">Início</a>
            </li>
            <li>
              <a href="#Sobre">Sobre</a>
            </li>
            <li>
              <a href="#Serviços">Serviços</a>
            </li>
            <li>
              <a href="#Depoimentos">Depoimentos</a>
            </li>
          </ul>
          <button className="btn-outlined">Agendar consulta</button>
        </div>
      </div>
    </nav>
  );
}
