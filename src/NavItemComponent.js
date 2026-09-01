import { Link } from "react-router";

const NavItemComponent = () => {
  return (
    <div className="nav-item-container">
      <div className="nav-item"><Link to='/'>Home</Link></div>
      <div className="nav-item">
        <Link to={'/about'}>
        About Us
        </Link>
      </div>
      <div className="nav-item">
        <Link to = '/contact'>
          Contact
        </Link>
      </div>
      <div className="nav-item">
        <Link to = '/login'>
          Login
        </Link>
      </div>
    </div>
  );
};
export default NavItemComponent;