import WelcomeMessage from "./WelcomeMessage";

const isLoggedIn = false;

const Header = () => {
  return (
    <div id="header">
      Header <br />
      <br />
      {/* {isLoggedIn ? <WelcomeMessage /> : <a href="#/">Giriş Yapın</a>} */}
      {isLoggedIn && <WelcomeMessage />}
      {!isLoggedIn && <a href="#/">Giriş Yapın</a>}
      <hr />
    </div>
  );
};

export default Header;
