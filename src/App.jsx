import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import heroImg from "./assets/illustration-dashboard.png";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Input></Input>
        <img className="hero-img" src={heroImg} alt="hero" />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
