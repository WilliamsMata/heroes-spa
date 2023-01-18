import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
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
            <span className="nav-item nav-link text-primary">Williams</span>
            <button className="nav-item nav-link btn" onClick={onLogout}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
