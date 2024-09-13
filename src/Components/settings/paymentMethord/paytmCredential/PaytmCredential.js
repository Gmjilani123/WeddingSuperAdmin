
function PaytmCredential () {
    return (
        <>
        <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Paytm Credential</h5>
                </div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
                    action="https://weddemoadmin.abaris.in/admin/payment_method_update"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="TL7gVYMMi3cj9D3J88UFc4u0yeb2JH9IB6LAucU5"
                    />{" "}
                    <input
                      type="hidden"
                      name="payment_method"
                      defaultValue="paytm"
                    />
                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">Activation</label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="paytm_payment_activation"
                            type="checkbox"
                          />
                          <span className="slider round" />
                        </label>
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="PAYTM_ENVIRONMENT"
                      />
                      <div className="col-lg-4">
                        <label className="col-from-label">
                          Paytm Environment
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="PAYTM_ENVIRONMENT"
                            required
                            tabIndex={-98}
                          >
                            <option value="production">Production</option>
                            <option value="local">Local</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-1"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="Production"
                            fdprocessedid="m5dh1d"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  Production
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
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="PAYTM_MERCHANT_ID"
                      />
                      <div className="col-lg-4">
                        <label className="col-from-label">
                          Paytm Merchant ID
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          name="PAYTM_MERCHANT_ID"
                          defaultValue
                          placeholder="PAYTM MERCHANT ID"
                          required
                          fdprocessedid="m1hs0l"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="PAYTM_MERCHANT_KEY"
                      />
                      <div className="col-lg-4">
                        <label className="col-from-label">
                          Paytm Merchant Key
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          name="PAYTM_MERCHANT_KEY"
                          defaultValue
                          placeholder="PAYTM MERCHANT KEY"
                          fdprocessedid="7fkg7f"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="PAYTM_MERCHANT_WEBSITE"
                      />
                      <div className="col-lg-4">
                        <label className="col-from-label">
                          Paytm Merchant Website
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          name="PAYTM_MERCHANT_WEBSITE"
                          defaultValue
                          placeholder="PAYTM MERCHANT WEBSITE"
                          fdprocessedid="wyjqu"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="PAYTM_CHANNEL"
                      />
                      <div className="col-lg-4">
                        <label className="col-from-label">Paytm Channel</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          name="PAYTM_CHANNEL"
                          defaultValue
                          placeholder="PAYTM CHANNEL"
                          fdprocessedid="63n1s9"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="PAYTM_INDUSTRY_TYPE"
                      />
                      <div className="col-lg-4">
                        <label className="col-from-label">
                          PAYTM INDUSTRY TYPE
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          name="PAYTM_INDUSTRY_TYPE"
                          defaultValue
                          placeholder="PAYTM INDUSTRY TYPE"
                          fdprocessedid="f2sxo"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        fdprocessedid="kbsqpc"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
        </>
    )
}
export default PaytmCredential