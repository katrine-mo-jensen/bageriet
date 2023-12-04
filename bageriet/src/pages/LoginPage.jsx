import style from "../styling/form.module.scss";

export const LoginPage = () => {
  return (
    <section className={style.formWrapper}>
      <h2>Log ind</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores
        earum atque aut voluptate explicabo quaerat quos unde cupiditate <br />
        laudantium itaque aliquam suscipit inventore facere error ipsa incidunt,
        exercitationem numquam.
      </p>
      <section className={style.loginForm}>
        <form>
          <div>
            <input
              type="text"
              placeholder="Brugernavn..."
              name="username"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password..."
              name="password"
              required
            />
          </div>

          <div className={style.btnContainer}>
            <button type="submit">Log ind</button>
          </div>
        </form>
      </section>
    </section>
  );
};
