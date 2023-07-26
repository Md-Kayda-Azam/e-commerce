import { Link } from "react-router-dom";
import avater from "../../assets/img/profiles/avatar-01.jpg";
const Profile = () => {
  return (
    <>
      <div className="content container-fluid" style={{ padding: "0px" }}>
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">Profile</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Profile</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="profile-header">
              <div className="row align-items-center">
                <div className="col-auto profile-image">
                  <a href="#">
                    <img
                      className="rounded-circle"
                      alt="User Image"
                      src={avater}
                    />
                  </a>
                </div>
                <div className="col ml-md-n2 profile-user-info">
                  <h4 className="user-name mb-0">Ryan Taylor</h4>
                  <h6 className="text-muted">ryantaylor@admin.com</h6>
                  <div className="user-Location">
                    <i className="fa fa-map-marker"></i> Florida, United States
                  </div>
                  <div className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
                <div className="col-auto profile-btn">
                  <a href="#" className="btn btn-primary">
                    Edit
                  </a>
                </div>
              </div>
            </div>
            <div className="profile-menu">
              <ul className="nav nav-tabs nav-tabs-solid">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#per_details_tab"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#password_tab"
                  >
                    Password
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content profile-tab-cont">
              <div className="tab-pane fade show active" id="per_details_tab">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title d-flex justify-content-between">
                          <span>Personal Details</span>
                          <a
                            className="edit-link"
                            data-toggle="modal"
                            href="#edit_personal_details"
                          >
                            <i className="fa fa-edit mr-1"></i>Edit
                          </a>
                        </h5>
                        <div className="row">
                          <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">
                            Name
                          </p>
                          <p className="col-sm-10">John Doe</p>
                        </div>
                        <div className="row">
                          <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">
                            Date of Birth
                          </p>
                          <p className="col-sm-10">24 Jul 1983</p>
                        </div>
                        <div className="row">
                          <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">
                            Email ID
                          </p>
                          <p className="col-sm-10">johndoe@example.com</p>
                        </div>
                        <div className="row">
                          <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">
                            Mobile
                          </p>
                          <p className="col-sm-10">305-310-5857</p>
                        </div>
                        <div className="row">
                          <p className="col-sm-2 text-muted text-sm-right mb-0">
                            Address
                          </p>
                          <p className="col-sm-10 mb-0">
                            4663 Agriculture Lane,
                            <br />
                            Miami,
                            <br />
                            Florida - 33165,
                            <br />
                            United States.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="edit_personal_details"
                      aria-hidden="true"
                      role="dialog"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Personal Details</h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="row form-row">
                                <div className="col-12 col-sm-6">
                                  <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="John"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="Doe"
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group">
                                    <label>Date of Birth</label>
                                    <div className="cal-icon">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value="24-07-1983"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <div className="form-group">
                                    <label>Email ID</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      value="johndoe@example.com"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <div className="form-group">
                                    <label>Mobile</label>
                                    <input
                                      type="text"
                                      value="+1 202-555-0125"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <h5 className="form-title">
                                    <span>Address</span>
                                  </h5>
                                </div>
                                <div className="col-12">
                                  <div className="form-group">
                                    <label>Address</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="4663 Agriculture Lane"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <div className="form-group">
                                    <label>City</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="Miami"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <div className="form-group">
                                    <label>State</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="Florida"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <div className="form-group">
                                    <label>Zip Code</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="22434"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <div className="form-group">
                                    <label>Country</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="United States"
                                    />
                                  </div>
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="btn btn-primary btn-block"
                              >
                                Save Changes
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="password_tab" className="tab-pane fade">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Change Password</h5>
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                        <form>
                          <div className="form-group">
                            <label>Old Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>New Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <button className="btn btn-primary" type="submit">
                            Save Changes
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
