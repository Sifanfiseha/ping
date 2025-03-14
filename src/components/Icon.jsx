export default function Icon({ name }) {
  return (
    <>
      <div className="icon-box">
        <ion-icon name={name} alt={name}></ion-icon>
      </div>
    </>
  );
}
