import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">about</Link>
    </div>
  );
};

export default Footer;
