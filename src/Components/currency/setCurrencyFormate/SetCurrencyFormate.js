

function SetCurrencyFormate() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Set Currency Formats</h5>
        </div>
        <div className="card-body">
          <form
            action="https://weddemoadmin.abaris.in/admin/settings/update"
            method="POST"
          >
            <input
              type="hidden"
              name="_token"
              defaultValue="V3eUAFlZ4RZMMqWQoLNyu8KJ5Be77CCNc7fweveP"
            />{" "}
            <div className="form-group row">
              <input
                type="hidden"
                name="types[]"
                defaultValue="symbol_format"
              />
              <div className="col-lg-4">
                <label className="control-label">Symbol Format</label>
              </div>
              <div className="col-lg-8">
                <select className="form-select form-control aiz-selectpicker" aria-label="Default select example">
                  <option value={1}>[Symbol] [Amount]</option>
                  <option value={2}>
                    [Amount] [Symbol]
                  </option>
                </select>

              </div>
            </div>
            <div className="form-group row">
              <input
                type="hidden"
                name="types[]"
                defaultValue="decimal_separator"
              />
              <div className="col-lg-4">
                <label className="control-label">
                  Decimal Separator
                </label>
              </div>
              <div className="col-lg-8">
                <select className="form-select form-control aiz-selectpicker" aria-label="Default select example">
                  <option value={1}>
                    1,23,456.70
                  </option>
                  <option value={2}>1.23.456,70</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <input
                type="hidden"
                name="types[]"
                defaultValue="no_of_decimals"
              />
              <div className="col-lg-4">
                <label className="control-label">No of decimals</label>
              </div>
              <div className="col-lg-8">
                <select className="form-select" aria-label="Default select example">
                  <option value={0}>
                    12345
                  </option>
                  <option value={1}>1234.5</option>
                  <option value={2}>123.45</option>
                  <option value={3}>12.345</option>
                </select>
              </div>
            </div>
            <div className="form-group mb-0 text-right">
              <button type="submit" className="btn btn-sm btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default SetCurrencyFormate