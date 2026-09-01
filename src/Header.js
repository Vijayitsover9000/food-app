import NavItemComponent from "./NavItemComponent";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavItemComponent />
    </div>
  );
};

export default Header;