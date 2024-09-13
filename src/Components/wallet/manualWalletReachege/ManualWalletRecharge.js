function ManualWalletReachege() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Offline Wallet Recharge Requests</h5>
            </div>
            <div className="card-body">
              <table
                className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                style={{}}
              >
                <thead>
                  <tr className="footable-header">
                    <th style={{ display: "table-cell" }}>#</th>
                    <th style={{ display: "table-cell" }}>Name</th>
                    <th style={{ display: "table-cell" }}>Amount</th>
                    <th style={{ display: "table-cell" }}>Method</th>
                    <th style={{ display: "table-cell" }}>Approval</th>
                    <th style={{ display: "table-cell" }}>Date</th>
                    <th
                      className="text-right"
                      style={{ display: "table-cell" }}
                    >
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="footable-empty">
                    <td colSpan={7}>Nothing Found</td>
                  </tr>
                </tbody>
              </table>
              <div className="aiz-pagination"></div>
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
export default ManualWalletReachege;
