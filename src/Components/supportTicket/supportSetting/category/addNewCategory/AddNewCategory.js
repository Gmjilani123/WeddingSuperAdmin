function AddNewCategory() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Add New Category</h5>
        </div>
        <div className="card-body">
          <form
            className="form-horizontal"
            action="https://weddemoadmin.abaris.in/support/support-categories"
            method="POST"
            encType="multipart/form-data"
          >
            <input
              type="hidden"
              name="_token"
              defaultValue="DaIWAY03a8VZ0i5SPSYjQfrLQzjPJUvjxXHxzVOY"
            />{" "}
            <div className="form-group mb-3">
              <label htmlFor="name">Category Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
              />
            </div>
            <div className="form-group mb-3 text-right">
              <button type="submit" className="btn btn-success btn-rounded">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddNewCategory;
