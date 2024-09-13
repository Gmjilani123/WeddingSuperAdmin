function SetReferalCommission() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Set Referral Commissions</h5>
                </div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
                    action="https://weddemoadmin.abaris.in/admin/settings/update"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="VMCG0GyPLbYV3TMHzAvLcJNaqB7QY8AdRLyMvY5V"
                    />{" "}
                    <div className="form-group row">
                      <label htmlFor="name" className="col-md-5">
                        Referred by User Commission on Referral Users First
                        Package Purchase.
                      </label>
                      <div className="form-group col-md-7">
                        <div className="input-group">
                          <input
                            type="hidden"
                            name="types[]"
                            defaultValue="referred_by_user_commission"
                          />
                          <input
                            type="number"
                            name="referred_by_user_commission"
                            defaultValue={10}
                            min={0}
                            step="0.01"
                            // placeholder
                            className="form-control"
                            required
                            fdprocessedid="dlrmq"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">$</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="name" className="col-md-5">
                        Referral Users First Package Purchase Discount.
                      </label>
                      <div className="form-group col-md-4">
                        <div className="input-group">
                          <input
                            type="hidden"
                            name="types[]"
                            defaultValue="referral_user_package_purchase_discount"
                          />
                          <input
                            type="number"
                            name="referral_user_package_purchase_discount"
                            defaultValue={10}
                            min={0}
                            step="0.01"
                            // placeholder
                            className="form-control"
                            required
                            fdprocessedid="cpi6os"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <select className="form-select " aria-label="Default select example">
                          <option >Falt</option>
                          <option value="1">Percent</option>
                        </select>
                        {/* <input
                          type="hidden"
                          name="types[]"
                          defaultValue="referral_user_package_purchase_discount_type"
                        />
                        <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="referral_user_package_purchase_discount_type"
                            tabIndex={-98}
                          >
                            <option value="amount" selected>
                              Flat
                            </option>
                            <option value="percent">Percent</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-1"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="Flat"
                            fdprocessedid="g2b0fk"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  Flat
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
                        </div> */}
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="pl3umi"
                      >
                        Update
                      </button>
                    </div>
                    <i className="form-text text-danger">
                      <b>
                        Note: You need to activate wallet option first before
                        using referral system addon.
                      </b>
                    </i>
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

export default SetReferalCommission;
