import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import heroImg from "./assets/illustration-dashboard.png";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <Input></Input>
      <img className="hero-img" src={heroImg} alt="" />
      <Footer></Footer>
    </>
  );
}

export default App;
