import { Link } from "react-router-dom";

function MyTickets() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header row gutters-5">
                  <div className="col text-center text-md-left">
                    <h5 className="mb-md-0 h6">My tickets</h5>
                  </div>
                  <div className="col-md-3">
                    <div className="input-group input-group-sm">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search for..."
                      />
                      <div className="input-group-append">
                        <button className="btn btn-light" type="submit">
                          <i className="las la-search la-rotate-270" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive-sm">
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
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Ticket ID
                          </th>
                          <th style={{ display: "table-cell" }}>Subject</th>
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Member
                          </th>
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Priority
                          </th>
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Category
                          </th>
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Last Reply
                          </th>
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Suport Agent
                          </th>
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Submitted Date
                          </th>
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            New Reply
                          </th>
                          <th
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            option
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
                            20210629-114300{" "}
                          </td>
                          <td style={{ display: "table-cell" }}>Cupiditate</td>
                          <td style={{ display: "table-cell" }}>
                            Matthew Ryan
                          </td>
                          <td
                            className="text-capitalize"
                            style={{ display: "table-cell" }}
                          >
                            regular
                          </td>
                          <td style={{ display: "table-cell" }}>Sales</td>
                          <td style={{ display: "table-cell" }}>
                            2021-06-29 01:47:42
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Mr. Admin John Doe
                          </td>
                          <td style={{ display: "table-cell" }}>
                            2021-06-29 01:43:00
                          </td>
                          <td style={{ display: "table-cell" }}>0</td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <Link
                              to="/admin/my-ticket/cupiditate"
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              title="Reply"
                            >
                              <i className="las la-edit" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            2
                          </td>
                          <td style={{ display: "table-cell" }}>
                            20210629-114218{" "}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Voluptatibus quia id
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Matthew Ryan
                          </td>
                          <td
                            className="text-capitalize"
                            style={{ display: "table-cell" }}
                          />
                          <td style={{ display: "table-cell" }}>Report</td>
                          <td style={{ display: "table-cell" }}>
                            2021-06-29 01:45:47
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Mr. Admin John Doe
                          </td>
                          <td style={{ display: "table-cell" }}>
                            2021-06-29 01:42:18
                          </td>
                          <td style={{ display: "table-cell" }}>0</td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <Link
                              to="/admin/my-ticket/cupiditate"
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              title="Reply"
                            >
                              <i className="las la-edit" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            3
                          </td>
                          <td style={{ display: "table-cell" }}>
                            20210629-114156{" "}
                            <span className="badge badge-inline badge-success float-right">
                              New
                            </span>{" "}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Matthew Ryan
                          </td>
                          <td
                            className="text-capitalize"
                            style={{ display: "table-cell" }}
                          />
                          <td style={{ display: "table-cell" }}>
                            Account Related
                          </td>
                          <td style={{ display: "table-cell" }}>
                            2021-06-29 01:41:56
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Mr. Admin John Doe
                          </td>
                          <td style={{ display: "table-cell" }}>
                            2021-06-29 01:41:56
                          </td>
                          <td style={{ display: "table-cell" }}>0</td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <Link
                              to="/admin/my-ticket/cupiditate"
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              title="Reply"
                            >
                              <i className="las la-edit" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            4
                          </td>
                          <td style={{ display: "table-cell" }}>
                            20210418-073339{" "}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Cupiditate qui aut p
                          </td>
                          <td style={{ display: "table-cell" }}>Idona Mccoy</td>
                          <td
                            className="text-capitalize"
                            style={{ display: "table-cell" }}
                          >
                            high
                          </td>
                          <td style={{ display: "table-cell" }}>Report</td>
                          <td style={{ display: "table-cell" }}>
                            2021-04-18 09:34:06
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Mr. Admin John Doe
                          </td>
                          <td style={{ display: "table-cell" }}>
                            2021-04-18 09:33:39
                          </td>
                          <td style={{ display: "table-cell" }}>0</td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <Link
                              to="/admin/my-ticket/cupiditate"
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              title="Reply"
                            >
                              <i className="las la-edit" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            5
                          </td>
                          <td style={{ display: "table-cell" }}>
                            20210410-013905{" "}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Cupiditate qui aut p
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Donna J. Perryman
                          </td>
                          <td
                            className="text-capitalize"
                            style={{ display: "table-cell" }}
                          >
                            regular
                          </td>
                          <td style={{ display: "table-cell" }}>Report</td>
                          <td style={{ display: "table-cell" }}>
                            2021-04-18 09:34:49
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Mr. Admin John Doe
                          </td>
                          <td style={{ display: "table-cell" }}>
                            2021-04-10 03:39:05
                          </td>
                          <td style={{ display: "table-cell" }}>0</td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <Link
                              to="/admin/my-ticket/cupiditate"
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              title="Reply"
                            >
                              <i className="las la-edit" />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="aiz-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
export default MyTickets;
