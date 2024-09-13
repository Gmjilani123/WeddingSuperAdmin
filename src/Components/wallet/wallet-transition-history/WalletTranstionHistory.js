function WalletTranstionHistory() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className=" align-items-center">
              <h1 className="h3">Wallet Transaction History</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card">
                <form
                  action="https://weddemoadmin.abaris.in/admin/wallet-transaction-history"
                  method="GET"
                >
                  <div className="card-header row gutters-5">
                    <div className="col text-center text-md-left">
                      <h5 className="mb-md-0 h6">Wallet History</h5>
                    </div>
                    <div className="col-md-3 ml-auto">
                      <select className="form-select form-control form-control-sm aiz-selectpicker mb-2 mb-md-0" aria-label="Default select example" >
                        <option >Choose User</option>
                        <option className="filter-option-inner-inner" value="1">Choose User</option>
                      </select>

                    </div>
                    <div className="col-md-3">
                      <div className="form-group mb-0">
                        <input
                          type="date"
                          className="form-control form-control-sm aiz-date-range"
                          id="search"
                          name="date_range"
                          placeholder="Daterange"
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <button className="btn btn-sm btn-primary" type="submit">
                        Filter
                      </button>
                    </div>
                  </div>
                </form>
                <div className="card-body">
                  <table
                    className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                    style={{}}
                  >
                    <thead>
                      <tr className="footable-header">
                        <th style={{ display: "table-cell" }}>#</th>
                        <th style={{ display: "table-cell" }}>Member</th>
                        <th
                          data-breakpoints="lg"
                          style={{ display: "table-cell" }}
                        >
                          Date
                        </th>
                        <th style={{ display: "table-cell" }}>Amount</th>
                        <th
                          data-breakpoints="lg"
                          style={{ display: "table-cell" }}
                        >
                          Payment Method
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="text-right"
                          style={{ display: "table-cell" }}
                        >
                          Approval
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="footable-empty">
                        <td colSpan={6}>Nothing Found</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="aiz-pagination mt-4"></div>
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
export default WalletTranstionHistory;
