import React from 'react'

function EditSubCasteInfo() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Edit Sub Caste Info</h5>
                                </div>
                                <div className="card-body">
                                    <form action="https://weddemoadmin.abaris.in/admin/sub-castes/4" method="POST">
                                        <input name="_method" type="hidden" defaultValue="PATCH" />
                                        <input type="hidden" name="_token" defaultValue="p8MERQePbRlFGsiuKSKG8cPScHeUINqH8k4Aaw6Z" />                        <div className="form-group mb-3">
                                            <label htmlFor="name">Religion</label>
                                            <div>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option value={6}>Isalm</option>
                                                    <option value={7}>Budhhism</option>
                                                    <option value={8}>Jainism</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="name">Caste</label>
                                            <div>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option value={6}>Brahmin</option>
                                                    <option value={7}>Kshatriyas</option>
                                                    <option value={8}>Shudras</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="name">Sub Caste Name</label>
                                            <input type="text" id="name" name="name" defaultValue="Chamar" className="form-control" required fdprocessedid="0w8zy9" />
                                        </div>
                                        <div className="form-group mb-3 text-right">
                                            <button type="submit" className="btn btn-primary" fdprocessedid="1c5i3">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditSubCasteInfo