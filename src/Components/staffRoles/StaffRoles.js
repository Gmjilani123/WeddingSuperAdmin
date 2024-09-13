import { Link } from "react-router-dom"
function StaffRoles() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar mt-2 mb-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">All Roles</h1>
              </div>
              <div className="col-md-6 text-right">
                <Link to="create" className="btn btn-circle btn-primary">Add New Role</Link>
              </div>
            </div>
          </div>
          {/* <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0 h6">Add New Permission</h5>
          </div>
          <div class="card-body">
            <form action="https://demo.activeitzone.com/matrimonial/admin/roles/add_permission" method="POST">
              <input type="hidden" name="_token" value="EXRVx84F1wCyzLHQxGs1EQIvFBRiulegs1DcgBVm">                    <div class="form-group mb-3">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Permission" class="form-control" required>
              </div>
                <div class="form-group mb-3">
                  <label for="name">Parent</label>
                  <input type="text" id="parent" name="parent" placeholder="Parent" class="form-control" required>
                </div>
                <div class="form-group mb-3 text-right">
                  <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header row gutters-5">
                  <div className="col text-center text-md-left">
                    <h5 className="mb-md-0 h6">All Roles</h5>
                  </div>
                  <div className="col-md-3">
                    <form className id="sort_members" action method="GET">
                      <div className="input-group input-group-sm">
                        <input type="text" className="form-control" id="search" name="search" placeholder="Type name" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card-body">
                  <table className="table aiz-table mb-0 footable footable-1 breakpoint-lg" style={{}}>
                    <thead>
                      <tr className="footable-header">
                        <th width="10%" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>Super Admin</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="edit" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>Manager</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="edit" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                          <a href="javascript:void(0);" data-href="https://demo.activeitzone.com/matrimonial/admin/roles/destroy/8" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete">
                            <i className="las la-trash" />
                          </a>
                        </td></tr></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default StaffRoles