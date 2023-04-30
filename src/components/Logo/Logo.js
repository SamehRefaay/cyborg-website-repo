import "./Logo.css";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <a className="navbar-brand" href="#">
      <img src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
