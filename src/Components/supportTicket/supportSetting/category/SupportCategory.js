import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddNewCategory from "./addNewCategory/AddNewCategory";

function SupportCategory() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className=" col-lg-7 ">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">All Support Categories</h5>
                </div>
                <div className="card-body">
                  <table
                    className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                    style={{}}
                  >
                    <thead>
                      <tr className="footable-header">
                        <th
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          #
                        </th>
                        <th style={{ display: "table-cell" }}>Name</th>
                        <th
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          Options
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          1
                        </td>
                        <td style={{ display: "table-cell" }}>
                          Account Related
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            href="#"
                            onClick={handleShow}
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            // onClick="category_edit_modal('https://weddemoadmin.abaris.in/support/support-categories/4/edit')"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://weddemoadmin.abaris.in/support/support-categories/destroy/4"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          2
                        </td>
                        <td style={{ display: "table-cell" }}>Report</td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            href="#"
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            // onClick="category_edit_modal('https://weddemoadmin.abaris.in/support/support-categories/3/edit')"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://weddemoadmin.abaris.in/support/support-categories/destroy/3"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          3
                        </td>
                        <td style={{ display: "table-cell" }}>Sales</td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            href="#"
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            // onClick="category_edit_modal('https://weddemoadmin.abaris.in/support/support-categories/2/edit')"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://weddemoadmin.abaris.in/support/support-categories/destroy/2"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          4
                        </td>
                        <td style={{ display: "table-cell" }}>Marketing</td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            href="#"
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            // onClick="category_edit_modal('https://weddemoadmin.abaris.in/support/support-categories/1/edit')"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://weddemoadmin.abaris.in/support/support-categories/destroy/1"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <AddNewCategory/>
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Support Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-group mb-3">
  <label htmlFor="name">Category Name</label>
  <input type="text" id="name" name="name" defaultValue="Account Related" className="form-control" required />
</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SupportCategory;
