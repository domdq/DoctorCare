import "./Section.css";
import Check from "../../assets/check.png";

export default function Section() {
  return (
    <section>
      <div className="container">
        <div className="content">
          <span>Serviços</span>
          <h1>
            Como podemos ajudá-lo <br /> a se sentir melhor?
          </h1>
          <div className="cards">
            <div className="cards-infor">
              <img src={Check} alt="" />
              <h3>Problemas digestivos</h3>
              <p>
                Amet minim mollit non deserunt <br /> ullamco est sit aliqua
                dolor do amet <br /> sint. Velit officia consequat duis enim.
              </p>
            </div>

            <div className="cards-infor">
              <img src={Check} alt="" />
              <h3>Bem-estar mental</h3>
              <p>
                Amet minim mollit non deserunt <br /> ullamco est sit aliqua
                dolor do amet <br /> sint. Velit officia consequat duis enim.
              </p>
            </div>

            <div className="cards-infor">
              <img src={Check} alt="" />
              <h3>Saúde Hormonal</h3>
              <p>
                Amet minim mollit non deserunt <br /> ullamco est sit aliqua
                dolor do amet <br /> sint. Velit officia consequat duis enim.
              </p>
            </div>
          </div>

          <div className="cards">
            <div className="cards-infor">
              <img src={Check} alt="" />
              <h3>Cuidados Pediátricos</h3>
              <p>
                Amet minim mollit non deserunt <br /> ullamco est sit aliqua
                dolor do amet <br /> sint. Velit officia consequat duis enim.
              </p>
            </div>

            <div className="cards-infor">
              <img src={Check} alt="" />
              <h3>Autoimune e Inflamação</h3>
              <p>
                Amet minim mollit non deserunt <br /> ullamco est sit aliqua
                dolor do amet <br /> sint. Velit officia consequat duis enim.
              </p>
            </div>

            <div className="cards-infor">
              <img src={Check} alt="" />
              <h3>Saúde do Coração</h3>
              <p>
                Amet minim mollit non deserunt <br /> ullamco est sit aliqua
                dolor do amet <br /> sint. Velit officia consequat duis enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
