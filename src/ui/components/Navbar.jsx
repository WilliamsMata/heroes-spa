import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className=" navbar navbar-expand navbar-dark bg-dark">
      <div className="container-xxl">
        {/* <Link to="/" className="navbar-brand">
          Heroes
        </Link> */}
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              to="/marvel"
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
            >
              Marvel
            </NavLink>
            <NavLink
              to="/dc"
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
            >
              DC
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
            >
              Search
            </NavLink>
          </div>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <a
              className="nav-item nav-link text-primary"
              href="https://github.com/WilliamsMata"
              target="_blank"
            >
              {user?.name}
            </a>
            <button className="nav-item nav-link btn" onClick={onLogout}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
