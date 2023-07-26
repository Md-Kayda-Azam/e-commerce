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
                  <i className="fe fe-users"></i> <span>Orders</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users">
                  <i className="fe fe-users"></i> <span>Products</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users">
                  <i className="fe fe-users"></i> <span>Category</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users">
                  <i className="fe fe-users"></i> <span>Tags</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users">
                  <i className="fe fe-users"></i> <span>Brands</span>
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
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li className="">
                <Link to="/profile">
                  <i className="fe fe-user-plus"></i> <span>Profile</span>
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
