import { Link } from "react-router-dom";

function SolveTickets() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <form className id="solved_ticket_list" action method="GET">
                  <div className="card-header row gutters-5">
                    <div className="col text-center text-md-left">
                      <h5 className="mb-md-0 h6">Solved tickets</h5>
                    </div>
                    <div className="col-md-3 ml-auto">
                      <select
                        className="form-select form-control form-control-sm aiz-selectpicker mb-2 mb-md-0"
                        aria-label="Default select example"
                      >
                        <option selected>Sort by options</option>
                        <option value={1}>Priority (Regular)</option>
                        <option value={2}>Priority (Low)</option>
                        <option value={3}>Priority (Medium)</option>
                        <option value={3}>Priority (High)</option>
                      </select>

                      {/* <div className="dropdown bootstrap-select form-control form-control-sm aiz- mb-2 mb-md-0">
                        <select
                          className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0"
                          name="priority"
                          id="priority"
                          onchange="solved_ticket_list()"
                          tabIndex={-98}
                        >
                          <option value>Sort by options</option>
                          <option value="regular">Priority (Regular)</option>
                          <option value="low">Priority (Low)</option>
                          <option value="medium">Priority (Medium)</option>
                          <option value="high">Priority (High)</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-1"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-id="priority"
                          title="Sort by options"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Sort by options
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div
                          className="dropdown-menu"
                          style={{ overflow: "hidden" }}
                        >
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-1"
                            tabIndex={-1}
                            aria-activedescendant="bs-select-1-0"
                            style={{ overflowY: "auto" }}
                          >
                            <ul
                              className="dropdown-menu inner show"
                              role="presentation"
                              style={{ marginTop: 0, marginBottom: 0 }}
                            >
                              <li className="selected active">
                                <a
                                  role="option"
                                  className="dropdown-item active selected"
                                  id="bs-select-1-0"
                                  tabIndex={0}
                                  aria-setsize={5}
                                  aria-posinset={1}
                                  aria-selected="true"
                                >
                                  <span className="text">Sort by options</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-1"
                                  tabIndex={0}
                                >
                                  <span className="text">
                                    Priority (Regular)
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-2"
                                  tabIndex={0}
                                >
                                  <span className="text">Priority (Low)</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-3"
                                  tabIndex={0}
                                >
                                  <span className="text">
                                    Priority (Medium)
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-4"
                                  tabIndex={0}
                                >
                                  <span className="text">Priority (High)</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-md-3 ml-auto">
                    <select
                        className="form-select form-control form-control-sm aiz-selectpicker mb-2 mb-md-0"
                        aria-label="Default select example"
                      >
                        <option selected>Sort by options</option>
                        <option value={1}>Sort by Time (Old &gt; New)</option>
                        <option value={2}>Sort by Time (New &gt; Old)</option>
                      </select>

                      {/* <div className="dropdown bootstrap-select form-control form-control-sm aiz- mb-2 mb-md-0">
                        <select
                          className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0"
                          name="type"
                          id="type"
                          onchange="solved_ticket_list()"
                          tabIndex={-98}
                        >
                          <option value>Sort by options</option>
                          <option value="created_at,asc">
                            Sort by Time (Old &gt; New)
                          </option>
                          <option value="created_at,desc">
                            Sort by Time (New &gt; Old)
                          </option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-2"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-id="type"
                          title="Sort by options"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Sort by options
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div
                          className="dropdown-menu "
                          style={{ overflow: "hidden" }}
                        >
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-2"
                            tabIndex={-1}
                            aria-activedescendant="bs-select-2-0"
                            style={{ overflowY: "auto" }}
                          >
                            <ul
                              className="dropdown-menu inner show"
                              role="presentation"
                              style={{ marginTop: 0, marginBottom: 0 }}
                            >
                              <li className="selected active">
                                <a
                                  role="option"
                                  className="dropdown-item active selected"
                                  id="bs-select-2-0"
                                  tabIndex={0}
                                  aria-setsize={3}
                                  aria-posinset={1}
                                  aria-selected="true"
                                >
                                  <span className="text">Sort by options</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-2-1"
                                  tabIndex={0}
                                >
                                  <span className="text">
                                    Sort by Time (Old &gt; New)
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-2-2"
                                  tabIndex={0}
                                >
                                  <span className="text">
                                    Sort by Time (New &gt; Old)
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-md-3">
                      <div className="input-group input-group-sm">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Type Ticket no and Hit Enter"
                          name="search"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-light" type="submit">
                            <i className="las la-search la-rotate-270" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
                            Ticket
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
                            Suport Agent
                          </th>
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Submitted Date
                          </th>
                          <th
                            width="10%"
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            option
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          data-href="https://weddemoadmin.abaris.in/support/support-tickets/eyJpdiI6InE5WlFoZGIxa1lFK2pCdlBidWFrcVE9PSIsInZhbHVlIjoiS1J1QUpidllsRnhaMW1IWWwxbktXQT09IiwibWFjIjoiZmJkYzU4MGYyYTRkNDJmMmMwNTk4ZTVkOTY4YmYwMzlkODUyYmVkNTcyYTA5ZDFkN2RiNjFlOTBjMzc2ODc5ZSIsInRhZyI6IiJ9"
                          className="clickable-row"
                        >
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            1
                          </td>
                          <td style={{ display: "table-cell" }}>
                            20210418-073742
                          </td>
                          <td style={{ display: "table-cell" }}>
                            A doloribus aut quae{" "}
                          </td>
                          <td style={{ display: "table-cell" }}>Idona Mccoy</td>
                          <td
                            className="text-capitalize"
                            style={{ display: "table-cell" }}
                          >
                            regular
                          </td>
                          <td style={{ display: "table-cell" }}>Sales</td>
                          <td style={{ display: "table-cell" }}>
                            Mr. Admin John Doe
                          </td>
                          <td style={{ display: "table-cell" }}>
                            2021-04-18 09:37:42
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <Link
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              to="/admin/solved-ticket/solved-ticket-inner"
                              title="Reply"
                            >
                              <i className="las la-edit" />
                            </Link>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://weddemoadmin.abaris.in/support/support-ticket/destroy/5"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
                          </td>
                        </tr>
                        <tr
                          data-href="https://weddemoadmin.abaris.in/support/support-tickets/eyJpdiI6IlBKZkdVUHV6UzlaYnNtV21oNitVNFE9PSIsInZhbHVlIjoiTXZyTkhBZTdDcWdsVFhxMmpiNVVoZz09IiwibWFjIjoiYjRhMmQ0MDI4OWQxOTZhNzg3NTgyMWJjMDNmMjA4M2QyYzA0ZTgyMjY0Yzc1MDU5MTQ3NTQzMWNiN2E3OGJjNCIsInRhZyI6IiJ9"
                          className="clickable-row"
                        >
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            2
                          </td>
                          <td style={{ display: "table-cell" }}>
                            20210418-073015
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Et natus minim sint{" "}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Kimberley Lang
                          </td>
                          <td
                            className="text-capitalize"
                            style={{ display: "table-cell" }}
                          />
                          <td style={{ display: "table-cell" }}>Sales</td>
                          <td style={{ display: "table-cell" }}>
                            Mr. Admin John Doe
                          </td>
                          <td style={{ display: "table-cell" }}>
                            2021-04-18 09:30:15
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <Link
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              to="/admin/solved-ticket/solved-ticket-inner"
                              title="Reply"
                            >
                              <i className="las la-edit" />
                            </Link>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://weddemoadmin.abaris.in/support/support-ticket/destroy/3"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
                          </td>
                        </tr>
                        <tr
                          data-href="https://weddemoadmin.abaris.in/support/support-tickets/eyJpdiI6Ik1GQUVjM2phcjM2L0hXSnJGKzN1M2c9PSIsInZhbHVlIjoiaHFQcDhtN3k3QitrVlFaeGtYNHloZz09IiwibWFjIjoiNTc4MzkxNDg0ZmU2ODM5MmFkMzJhMGQ4NTVkYTViMjhjMzlmODcwZDdlNDhmZjZmMGZlYzhjZDI3NzQ3ZGM1NyIsInRhZyI6IiJ9"
                          className="clickable-row"
                        >
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            3
                          </td>
                          <td style={{ display: "table-cell" }}>
                            20210410-013924
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Cupiditate qui aut p{" "}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Donna J. Perryman
                          </td>
                          <td
                            className="text-capitalize"
                            style={{ display: "table-cell" }}
                          >
                            low
                          </td>
                          <td style={{ display: "table-cell" }}>Marketing</td>
                          <td style={{ display: "table-cell" }}>
                            Mr. Admin John Doe
                          </td>
                          <td style={{ display: "table-cell" }}>
                            2021-04-10 03:39:24
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <Link
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              to="/admin/solved-ticket/solved-ticket-inner"
                              title="Reply"
                            >
                              <i className="las la-edit" />
                            </Link>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://weddemoadmin.abaris.in/support/support-ticket/destroy/2"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
export default SolveTickets;
