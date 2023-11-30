import React, { useState } from "react";
// https://herotofu.com/solutions/guides/react-contact-form
// Used this for contact form

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

import map from "../assets/images/dolly.png"

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <section>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div>
        <input type="text" placeholder="Dit navn..." name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Din email..." name="email" required />
      </div>
      <div>
        <textarea placeholder="Din besked..." name="message" required />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
    <section>
        <p><span>adresse:</span> Øster uttrupvej 1, 9200 aalborg</p>
        <p><span>telefon:</span> +45 25 26 95 40</p>
        <img src={map} alt="" />
    </section>
    </section>
  );
};

