import React from 'react'

function ThirdpartyFacebookComment() {
    return (
        <>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h6 className="fw-600 mb-0">Facebook Comment</h6>
                    </div>
                    <div className="card-body">
                        <div className="row gutters-10">
                            <div className="col-lg-6">
                                <div className="card shadow-none bg-light">
                                    <div className="card-header">
                                        <h5 className="mb-0 h6">Facebook Comment Setting</h5>
                                    </div>
                                    <div className="card-body">
                                        <form action="https://demo.activeitzone.com/matrimonial/admin/third-party-settings/update" method="POST">
                                            <input type="hidden" name="setting_type" defaultValue="facebook_comment" />
                                            <input type="hidden" name="_token" defaultValue="TzQIq6Om03FLyro0DQeqNpRAdRmieKZiCT5LKRhL" />                                    <div className="form-group row">
                                                <div className="col-lg-3">
                                                    <label className="col-from-label">Facebook Comment</label>
                                                </div>
                                                <div className="col-md-7">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input defaultValue={1} name="facebook_comment_activation" type="checkbox" />
                                                        <span className="slider round" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <input type="hidden" name="types[]" defaultValue="FACEBOOK_APP_ID" />
                                                <div className="col-lg-3">
                                                    <label className="col-from-label">Facebook App ID</label>
                                                </div>
                                                <div className="col-md-7">
                                                    <input type="text" className="form-control" name="FACEBOOK_APP_ID" defaultValue={3651638584928275} placeholder="Facebook App ID" required fdprocessedid="e7yxsb" />
                                                </div>
                                            </div>
                                            <div className="form-group mb-0 text-right">
                                                <button type="button" className="btn btn-sm btn-primary" fdprocessedid="1jgilbj">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card shadow-none bg-light">
                                    <div className="card-header">
                                        <h5 className="mb-0 h6">Please be carefull when you are configuring Facebook Comment. For incorrect configuration you will not get comment section on your user-end site.</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group mar-no">
                                            <li className="list-group-item text-dark">
                                                1. Login into your facebook page
                                            </li>
                                            <li className="list-group-item text-dark">
                                                2. After then go to this URL https://developers.facebook.com/apps/.
                                            </li>
                                            <li className="list-group-item text-dark">
                                                3. Create Your App.
                                            </li>
                                            <li className="list-group-item text-dark">
                                                4. In Dashboard page you will get your App ID.
                                            </li>
                                        </ul>
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

export default ThirdpartyFacebookComment