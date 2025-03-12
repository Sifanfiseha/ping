import logo from "../assets/logo.svg";
export default function Header() {
  return (
    <>
      <img className="logo-ping" src={logo} alt="PING" />
      <h1>
        We are launching <span>soon!</span>
      </h1>
      <p className="sub">Subscribe and get notified.</p>
    </>
  );
}
