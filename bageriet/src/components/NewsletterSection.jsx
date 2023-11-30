import React, { useEffect, useState } from "react";

export function Newsletter() {
  useEffect(() => {
    
  })
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }

  return (
    <>
      <h2>Tilmeld dig vores nyhedsbrev</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facilis
      </p>
      {!isEmailValid ? <p>Vær sød og indsæt en korrekt email</p> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Indtast din email..."
          value={email}
          onChange={handleInput}
        />
        <button type="submit">Tilmeld</button>
      </form>
    </>
  );
}
