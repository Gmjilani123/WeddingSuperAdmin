import React from 'react'

function UpdateAddon() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Install/Update Addon</h5>
                                </div>
                                <form className="form-horizontal" action="https://demo.activeitzone.com/matrimonial/admin/addons" method="POST" encType="multipart/form-data">
                                    <input type="hidden" name="_token" defaultValue="TzQIq6Om03FLyro0DQeqNpRAdRmieKZiCT5LKRhL" />                <div className="card-body">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="addon_zip">Zip File</label>
                                            <div className="col-sm-9">
                                                <div className="custom-file">
                                                    <label className="custom-file-label">
                                                        <input type="file" id="addon_zip" name="addon_zip" className="custom-file-input" required />
                                                        <span className="custom-file-name">Choose file</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="button" className="btn btn-primary">Install/Update</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateAddon