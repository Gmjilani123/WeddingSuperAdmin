
function SystemDefaultCurrency() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">System Default Currency</h5>
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
                defaultValue="system_default_currency"
              />
              <div className="col-lg-3">
                <label className="control-label">
                  System Default Currency
                </label>
              </div>
              <div className="col-lg-6">
                <select className="form-select form-control aiz-selectpicker" aria-label="Default select example" defaultValue={'#'}>
                  <option value={1}>
                    U.S. Dollar
                  </option>
                  <option value={2}>Australian Dollar</option>
                  <option value={5}>Brazilian Real</option>
                  <option value={6}>Canadian Dollar</option>
                  <option value={7}>Czech Koruna</option>
                  <option value={8}>Danish Krone</option>
                  <option value={9}>Euro</option>
                  <option value={10}>Hong Kong Dollar</option>
                  <option value={11}>Hungarian Forint</option>
                  <option value={12}>Israeli New Sheqel</option>
                  <option value={13}>Japanese Yen</option>
                  <option value={14}>Malaysian Ringgit</option>
                  <option value={15}>Mexican Peso</option>
                  <option value={16}>Norwegian Krone</option>
                  <option value={17}>New Zealand Dollar</option>
                  <option value={18}>Philippine Peso</option>
                  <option value={19}>Polish Zloty</option>
                  <option value={20}>Pound Sterling</option>
                  <option value={21}>Russian Ruble</option>
                  <option value={22}>Singapore Dollar</option>
                  <option value={23}>Swedish Krona</option>
                  <option value={24}>Swiss Franc</option>
                  <option value={26}>Thai Baht</option>
                  <option value={27}>Taka</option>
                  <option value={28}>Indian Rupee</option>
                </select>

              </div>
              <div className="col-lg-3">
                <button
                  className="btn btn-sm btn-primary"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default SystemDefaultCurrency