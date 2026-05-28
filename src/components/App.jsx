import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Section from "./SectionServicos/SectionServicos";
import "./App.css";
import SectionServicos from "./SectionServicos/SectionServicos";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <SectionServicos />
    </div>
  );
}
