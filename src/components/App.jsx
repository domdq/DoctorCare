import "./App.css";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Section from "./SectionServicos/SectionServicos";
import SectionServicos from "./SectionServicos/SectionServicos";
import SectionSobre from "./SectionSobre/SectionSobre";
import Contato from "./contato/Contado";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <SectionServicos />
      <SectionSobre />
      <Contato />
    </div>
  );
}
