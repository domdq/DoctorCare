import "./SectionSobre.css";
import Doctor from "../../assets/doctor.png";

export default function SectionSobre() {
  return (
    <section className="section-sobre">
      <div className="container">
        <div className="content-sobre">
          <img src={Doctor} alt="" />
          <div className="sobre-info">
            <span>SOBRE NÓS</span>
            <h1>Entenda quem somos e por que existimos</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim. Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
