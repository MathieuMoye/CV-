import profilPicture from "../../assets/img/moi.jpg"
import Navbar from "./Navbar";
import './styles.scss'


const Header = () => (
  <div className="header-container">
    <img className="header-img" src={profilPicture} alt="profil picture" />
    <Navbar />
  </div>
)

export default Header;
