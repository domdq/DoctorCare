import "./Nav.css";
import Title from "../../assets/Title.svg";
export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <img src={Title} alt="" />
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
        <button className="btn-nav">Agendar consulta</button>
      </div>
    </nav>
  );
}
