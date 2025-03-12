import { useState } from "react";
const style = {
  error: {
    border: "1px solid red",
  },
};
export default function Input() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    setEmail("");
  };

  return (
    <>
      <form action="" onSubmit={handleChange}>
        <input
          style={isValid ? {} : style.error}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email address"
        />
        {isValid ? (
          <span></span>
        ) : (
          <>
            <span></span>
            <p className="error-msg">please provide a valid email address</p>
          </>
        )}
        <button type="submit" className="btn">
          Notify me
        </button>
      </form>
    </>
  );
}
