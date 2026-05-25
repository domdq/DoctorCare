import "./Header.css";
import Logo from "../../assets/Logo.svg";
import Image from "../../assets/image.png";
import Path4 from "../../assets/path4.svg";
import divider from "../../assets/divider.png";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="nav-header">
            <img src={Logo} alt="" />
            <ul className="ul-header">
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#serviços">Serviços</a>
              </li>
              <li>
                <a href="#depoimento">Depoimento</a>
              </li>
            </ul>
            <button className="btn-header">Agendar consulta</button>
          </div>
          <div className="header-infor">
            <div className="text-infor">
              <span>BOAS-VINDAS A DOCTORCARE 👋</span>
              <h1>
                Assistência médica <br /> simplificada para todos
              </h1>
              <p>
                Os médicos da DoctorCare vão além dos sintomas para tratar a
                causa
                <br />
                raiz de sua doença e proporcionar uma cura a longo prazo.
              </p>
              <button>
                <img src={Path4} alt="" /> Agende sua consulta
              </button>
            </div>
            <img src={Image} alt="" />
          </div>
          <div className="card">
            <div className="card-infor">
              +3.500
              <p>Pacientes atendidos</p>
            </div>
            <div>
              <img src={divider} alt="" />
            </div>
            <div className="card-infor">
              +15
              <p>Especialistas disponíveis</p>
            </div>
            <div>
              <img src={divider} alt="" />
            </div>
            <div className="card-infor">
              +10
              <p>Anos no mercado</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
