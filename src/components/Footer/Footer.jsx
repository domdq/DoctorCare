import "./Footer.css";
import logoWhite from "../../assets/logo-white.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content-footer">
          <div class="footer-copyright">
            <img src={logoWhite} alt="" />
            <p>©2022 - DoctorCare.</p>
            <p>Todos os direitos reservados.</p>
          </div>
          <div className="footer-redesocial">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
