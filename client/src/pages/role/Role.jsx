import { useEffect, useState } from "react";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import DataTables from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import useFormFrilds from "../../hooks/inputFeildsForm";
import {
  getAllPermissionData,
  setMessageEmpty,
} from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { createToast } from "../../helpers/toast";
import { createRole } from "../../features/user/userApiSlice";
import { timeAgo } from "../../helpers/timeAgo";

const Role = () => {
  const dispatch = useDispatch();

  const { permission, role, error, message } =
    useSelector(getAllPermissionData);

  const [input, handleInputChange, resetForm] = useFormFrilds({
    name: "",
  });

  const [selected, setSelected] = useState([]);

  const handleCheckBoxChange = (e) => {
    const val = e.target.value;
    const updat3eList = [...selected];
    if (selected.includes(val)) {
      updat3eList.splice(selected.indexOf(val), 1);
    } else {
      updat3eList.push(val);
    }
    setSelected(updat3eList);
  };

  // handle submit form
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      createRole({
        name: input.name,
        permissions: [...selected],
      })
    );
    resetForm();
    setSelected([]);
  };
  // validation
  useEffect(() => {
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }

    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch]);
  useEffect(() => {
    new DataTables(".datatable");
  });
  return (
    <>
      <PageHeader title="Roles" />

      <ModalPopup target="userModalPopup">
        <form onSubmit={handleSubmitForm}>
          <div className="my-3">
            <label htmlFor="">Role Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-3">
            <label htmlFor="">Permissions</label>
            {permission?.map((item, index) => {
              return (
                <label className="d-block" key={index}>
                  <input
                    type="checkbox"
                    value={item.name}
                    checked={selected.includes(item.name)}
                    onChange={handleCheckBoxChange}
                  />{" "}
                  {item.name}
                </label>
              );
            })}
          </div>
          <div className="my-3">
            <button className="btn btn-primary btn-block" type="submit">
              Add new permission
            </button>
          </div>
        </form>
      </ModalPopup>

      <div className="row">
        <div className="col-md-12">
          <button
            className="btnm btn-primary"
            data-target="#userModalPopup"
            data-toggle="modal"
          >
            Add new role
          </button>
          <br />
          <br />
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                {role && (
                  <table className="datatable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Role name</th>
                        <th>Slug</th>
                        <th>Permission</th>
                        <th>CreatedAt</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...role].reverse().map((item, index) => {
                        return (
                          <tr key={index}>
                            <td style={{ width: "50px" }}>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.slug}</td>
                            <td>Permission</td>
                            <td>{timeAgo(new Date(item.createdAt))}</td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id="status_1"
                                  className="check"
                                  checked
                                />
                                <label
                                  htmlFor="status_1"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <td className="text-right">
                              <button className="btn btn-small btn-danger">
                                <i className="fa fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Role;
