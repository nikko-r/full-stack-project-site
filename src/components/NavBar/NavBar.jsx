import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import RadiationIcon from "../../assets/images/RadiationIcon.png";

const NavBar = () => (
  <div className="nav-bar">
    <div className="nav-bar__home">
      <Link to="/">
        <img src={RadiationIcon} alt="radiation icon" width="35" height="35" />
      </Link>
      <Link className="ul-link-animation" to="/">
        HOME
      </Link>
    </div>
    <div className="nav-bar__links">
      <Link className="ul-link-animation" to="/api">
        API
      </Link>
      <Link className="ul-link-animation" to="/usersubmissions">
        USER SUBMISSIONS
      </Link>
      <Link className="ul-link-animation" to="/truerng">
        TRUE RNG
      </Link>
    </div>
  </div>
);

export default NavBar;
