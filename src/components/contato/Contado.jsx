import "./Contado.css";
import Mail from "../../assets/mail.svg";
import Map from "../../assets/map.svg";
import whatsapp from "../../assets/whatsapp.svg";
import imageContato from "../../assets/imageContato.png";

export default function Contato() {
  return (
    <section className="contato">
      <div className="container">
        <div className="content-contato">
          <div className="contato-info">
            <h2>Entre em contato com a gente!</h2>
            <div className="map">
              <img src={Map} alt="" />
              R. Amauri Souza, 346
            </div>
            <div className="mail">
              <img src={Mail} alt="" />
              contato@doctorcare.com
            </div>
            <button className="btn-full">
              <img src={whatsapp} alt="" />
              Agende sua consulta
            </button>
          </div>
          <img src={imageContato} alt="" />
        </div>
      </div>
    </section>
  );
}
