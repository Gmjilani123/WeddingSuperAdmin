import TicketDetails from "../ticketDetails/TicketDetails";

function SupportTickets() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h1 className="mb-0 h6">Assign this ticket to agent</h1>
                </div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
                    action="https://weddemoadmin.abaris.in/support/support-tickets/9"
                    method="POST"
                    encType="multipart/form-data"
                  >
                    <input name="_method" type="hidden" defaultValue="PATCH" />
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="CJIEZcXamvK9letGMuVshPnGQK1Ovsg6QLrMaGSj"
                    />{" "}
                    <div className="form-group mb-3">
                      <label htmlFor="category">Category</label>
                      <div className="dropdown bootstrap-select disabled form-control aiz-">
                        <select
                          className="form-control aiz-selectpicker"
                          name="category_id"
                          disabled
                          ata-toggle="select2"
                          data-placeholder="Choose ..."
                          required
                          tabIndex={-98}
                        >
                          <option value={1}>Marketing</option>
                          <option value={2} selected>
                            Sales
                          </option>
                          <option value={3}>Report</option>
                          <option value={4}>Account Related</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle disabled btn-light"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-1"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          tabIndex={-1}
                          aria-disabled="true"
                          title="Sales"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Sales
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div className="dropdown-menu ">
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-1"
                            tabIndex={-1}
                          >
                            <ul
                              className="dropdown-menu inner show"
                              role="presentation"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="priority">Priority</label>
                      <select
                        class="form-select  form-control aiz-selectpicker"
                        aria-label="Default select example"
                      >
                        <option selected>Regular</option>
                        <option value="1">Regular</option>
                        <option value="2">Low</option>
                        <option value="3">Medium</option>
                        <option value="3">High</option>
                      </select>
                      {/* <div className="dropdown bootstrap-select form-control aiz-">
                        <select
                          className="form-control aiz-selectpicker"
                          name="priority"
                          data-toggle="select2"
                          data-placeholder="Choose ..."
                          required
                          tabIndex={-98}
                        >
                          <option value="regular">Regular</option>
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-2"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          title="Regular"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Regular
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div className="dropdown-menu ">
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-2"
                            tabIndex={-1}
                          >
                            <ul
                              className="dropdown-menu inner show"
                              role="presentation"
                            />
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="support_agent">Support Agent</label>
                      <select
                        class="form-select  form-control aiz-selectpicker"
                        aria-label="Default select example"
                      >
                        <option selected>Patrick S. Cloninger Cloninger</option>
                        <option value="1">Patrick S. Cloninger Cloninger</option>
                        <option value="2">Tammy J. Nelson Nelson</option>
                        <option value="3">Mr. Admin John Doe</option>
                      </select>
                      {/* <div className="dropdown bootstrap-select form-control aiz-">
                        <select
                          name="assigned_user_id"
                          className="form-control aiz-selectpicker"
                          data-live-search="true"
                          data-toggle="select2"
                          data-placeholder="Choose ..."
                          required
                          tabIndex={-98}
                        >
                          <option value={46}>
                            Patrick S. Cloninger Cloninger
                          </option>
                          <option value={45}>Tammy J. Nelson Nelson</option>
                          <option value={1} selected>
                            Mr. Admin John Doe
                          </option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-3"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          title="Mr. Admin John Doe"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Mr. Admin John Doe
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div className="dropdown-menu ">
                          <div className="bs-searchbox">
                            <input
                              type="search"
                              className="form-control"
                              autoComplete="off"
                              role="combobox"
                              aria-label="Search"
                              aria-controls="bs-select-3"
                              aria-autocomplete="list"
                            />
                          </div>
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-3"
                            tabIndex={-1}
                          >
                            <ul
                              className="dropdown-menu inner show"
                              role="presentation"
                            />
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="form-group mb-3 text-right">
                      <button type="submit" className="btn btn-primary">
                        Assign Ticket
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <TicketDetails />
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
export default SupportTickets;
