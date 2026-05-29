import "./Header.css";
import Logo from "../../assets/logo-dark.svg";
import Image from "../../assets/image.png";
import Path4 from "../../assets/whatsapp.svg";
import divider from "../../assets/divider.png";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
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
              <button className="btn-full">
                <img src={Path4} alt="" />
                Agende sua consulta
              </button>
            </div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-wrapper">
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
