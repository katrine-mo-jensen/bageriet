import map from "../assets/images/dolly.png";
import style from "../styling/form.module.scss";

export const ContactPage = () => {
  return (
    <section className={style.formWrapper}>
      <section>
        <h2>Kontakt os</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque
          minus tenetur aliquid ab accusamus quos ullam libero atque, <br /> temporibus
          consequuntur dolore in voluptate laboriosam et eius vel illo ratione.
        </p>
      </section>
    <section className={style.contactForm}>
      <form>
        <div>
          <input type="text" placeholder="Dit navn..." name="name" required />
        </div>
        <div>
          <input
            type="email"
            placeholder="Din email..."
            name="email"
            required
          />
        </div>
        <div>
          <textarea placeholder="Din besked..." name="message" required />
        </div>
        <div className={style.btnContainer}>
          <button type="submit">Send</button>
        </div>
      </form>
      <section className={style.location}>
        <p>
          <span>adresse:</span> Øster uttrupvej 1, 9200 aalborg
        </p>
        <p>
          <span>telefon:</span> +45 25 26 95 40
        </p>
        <img src={map} alt="Map" />
      </section>
    </section>
    </section>
  );
};
