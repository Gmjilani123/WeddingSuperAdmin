import { Link } from "react-router-dom"


function EditBlogCategory() {
    return (
        <>
        <div className="aiz-main-content">
  <div className="px-15px px-lg-25px">
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Blog Category Information</h5>
          </div>
          <div className="card-body">
            <form id="add_form" className="form-horizontal" action="https://weddemoadmin.abaris.in/admin/blog-category/2" method="POST">
              <input type="hidden" name="_token" defaultValue="z2rw777CuOQ8RfxKQzVsyiDwtekGPIfLdc7HTapg" />                    <input type="hidden" name="_method" defaultValue="PATCH" />
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Name</label>
                <div className="col-md-9">
                  <input type="text" placeholder="Name" id="category_name" name="category_name" defaultValue="Life Partner" className="form-control" required fdprocessedid="inx2xo" />
                </div>
              </div>
              <div className="form-group mb-0 text-right">
                <button type="submit" className="btn btn-primary" fdprocessedid="bn3zka">
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
    )
}
export default EditBlogCategory