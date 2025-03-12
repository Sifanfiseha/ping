import Icon from "./Icon";
export default function Footer() {
  return (
    <>
      <div className="icon-container">
        <Icon name={"logo-facebook"}></Icon>
        <Icon name={"logo-twitter"}></Icon>
        <Icon name={"logo-instagram"}></Icon>
      </div>
      <p className="copy">&copy;Copyright Ping. All right reserved.</p>
    </>
  );
}
