import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="">
                <Link to="/">
                  <i className="fe fe-home"></i> <span>Dashboard</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users">
                  <i className="fe fe-users"></i> <span>Users</span>
                </Link>
              </li>
              <li className="">
                <Link to="/roles">
                  <i className="fa fa-anchor"></i> <span>Roles</span>
                </Link>
              </li>
              <li className="">
                <Link to="/permission">
                  <i className="fa fa-lock"></i> <span>Permission</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
