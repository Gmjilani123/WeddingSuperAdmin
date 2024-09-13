import { Link } from "react-router-dom";

function AllStaffs() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">All staffs</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Link to="create" className="btn btn-circle btn-primary">
                  <span>Add New Staffs</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Staffs</h5>
            </div>
            <div className="card-body">
              <table className="table aiz-table mb-0 footable footable-1 breakpoint-lg" style={{}}>
                <thead>
                  <tr className="footable-header">
                    <th width="10%" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Email</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Phone</th><th style={{ display: 'table-cell' }}>Role</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>Patrick S. Cloninger Cloninger</td><td style={{ display: 'table-cell' }}>Staff2@example.com</td><td style={{ display: 'table-cell' }}>863-623-2972</td><td style={{ display: 'table-cell' }}>
                      Manager
                    </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                      <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to="edit" title="Edit">
                        <i className="las la-edit" />
                      </Link>
                      <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://demo.activeitzone.com/matrimonial/admin/staffs/destroy/6" title="Delete">
                        <i className="las la-trash" />
                      </a>
                    </td></tr><tr>
                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>Tammy J. Nelson Nelson</td><td style={{ display: 'table-cell' }}>staff@example.com</td><td style={{ display: 'table-cell' }}>605-795-6871</td><td style={{ display: 'table-cell' }}>
                      Super Admin
                    </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                      <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to="edit" title="Edit">
                        <i className="las la-edit" />
                      </Link>
                      <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://demo.activeitzone.com/matrimonial/admin/staffs/destroy/5" title="Delete">
                        <i className="las la-trash" />
                      </a>
                    </td></tr></tbody>
              </table>
              <div className="aiz-pagination">
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default AllStaffs;