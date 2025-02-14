import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <title>Home</title>
      <meta name="description" content="Welcome to the Contacts Book!" />
      <link rel="icon" href="/favicon.ico" />

      <div className={s.container}>
        <h1 className={s.title}>Welcome to the Contacts Book!</h1>
        <p className={s.text}>
          Please <Link to="/register">sign up</Link> or{" "}
          <Link to="/login">log in</Link> to get started with your contacts.
        </p>
      </div>
    </>
  );
};

export default HomePage;
