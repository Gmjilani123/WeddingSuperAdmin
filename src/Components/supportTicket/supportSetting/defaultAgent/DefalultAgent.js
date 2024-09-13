function DefaultAgent() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col">
              <div className="pb-4 d-flex">
                <h4 className="mr-3 h6">Default Ticket Assigned Agent</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="card">
                <div className="card-body">
                  <div className="card cta-box bg-danger text-white">
                    <div className="card-body">
                      <div className="media align-items-center">
                        <div className="media-body">
                          <h2 className="mt-0">
                            <i className="las la-bullhorn" />
                          </h2>
                          <h3 className="m-0 font-weight-normal cta-box-title">
                            All Support Tickets are automatically{" "}
                            <b>Assigned</b> to{" "}
                            <i className="las la-arrow-right" />
                            <b />
                          </h3>
                        </div>
                        <img
                          className="ml-3"
                          src="https://weddemoadmin.abaris.in/public/assets/img/email-campaign.svg"
                          width={120}
                          alt="Generic placeholder image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form
                    action="https://weddemoadmin.abaris.in/admin/settings/update"
                    method="POST"
                    encType="multipart/form-data"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="V3eUAFlZ4RZMMqWQoLNyu8KJ5Be77CCNc7fweveP"
                    />{" "}
                    <div className="form-group row">
                      <label className="col-sm-2 col-from-label">
                        Assigned To
                      </label>
                      <div className="col-sm-10">
                      <select className="form-select form-control aiz-selectpicker" aria-label="Default select example">
  <option selected>Mr. Admin John Doe</option>
  <option value={1}>Tammy J. Nelson Nelson</option>
  <option value={2}>Patrick S. Cloninger Cloninger</option>
</select>

                        <input
                          type="hidden"
                          name="types[]"
                          defaultValue="default_ticket_assigned_user"
                        />
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            name="default_ticket_assigned_user"
                            className="form-control aiz-selectpicker"
                            data-live-search="true"
                            required
                            tabIndex={-98}
                          >
                            <option value={1} selected>
                              Mr. Admin John Doe
                            </option>
                            <option value={45}>Tammy J. Nelson Nelson</option>
                            <option value={46}>
                              Patrick S. Cloninger Cloninger
                            </option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-1"
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
                                aria-controls="bs-select-1"
                                aria-autocomplete="list"
                              />
                            </div>
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
                        </div> */}
                      </div>
                    </div>
                    <div className="form-group mb-3 text-right">
                      <button
                        type="submit"
                        className="btn btn-primary btn-rounded"
                      >
                        Save
                      </button>
                    </div>
                  </form>
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
export default DefaultAgent;
