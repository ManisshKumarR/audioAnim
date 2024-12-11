import MenuIcon from "@mui/icons-material/Menu";
import profileImg from "../../asserts/images/profile.jpg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div>
        <MenuIcon className="menu-btn" />
      </div>
      <div className="logo">Aris</div>
      <div>
        <NotificationsNoneIcon className="notify-btn" />
        <img src={profileImg} alt="profile-img" className="profile-pic" />
      </div>
    </header>
  );
};
export default Header;
