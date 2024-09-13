
function PackagePaymentsInvoice() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="container">
            <div className="card z-depth-2-top mt-4 mb-4">
              <div className="card-body">
                <div className="print" id="printableArea">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="row gutters-5">
                        <div className="col text-center text-md-left">
                          <h2>invoice</h2>
                        </div>
                        <div className="col-md-7 text-right">
                          <h3>Purchase Code : 210408-125301</h3>
                        </div>
                      </div>
                      <hr />
                      <div className="col-sm-12">
                        <strong>Purchase Date:</strong> 2021-04-08 02:53:01
                      </div>
                      <br />
                      <div className="col-sm-12">
                        <strong>Billed To,</strong><br />
                        <b>Name</b> Ramona D. Mears
                        <br />
                        <b>Email</b> user14@example.com
                        <br />
                        <b>Phone</b> +
                      </div>
                      <br />
                      <div className="col-sm-6">
                        <strong>Payment Method: </strong>
                        Stripe
                        <br />
                        <strong>Payment Status: </strong>Paid
                      </div>
                      <br />
                    </div>
                  </div>
                  <div className="row pt-5">
                    <div className="col-md-12">
                      <h5><b>purchase_summary</b></h5>
                      <div className="card">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <td><strong>item</strong></td>
                                  <td className="text-center"><strong>Price</strong></td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    Package Name:
                                    Diamond Package
                                  </td>
                                  <td className="text-center">100$</td>
                                </tr>
                                <tr>
                                  <td className="text-right"><strong>Total</strong></td>
                                  <td className="text-center">100$</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="text-center mt-5 mb-3">
                      <button type="button" className="btn btn-primary btn-sm" onclick="printDiv('printableArea')"><i className="las la-print" /> print</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PackagePaymentsInvoice;