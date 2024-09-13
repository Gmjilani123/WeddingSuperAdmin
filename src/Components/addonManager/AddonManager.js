import React from 'react'
import { Link } from 'react-router-dom'

function AddonManager() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className>
                        <div className="row ">
                            <div className="col-md-6">
                                <div className="nav border-bottom aiz-nav-tabs">
                                    <a className="p-3 fs-16 text-reset show active" data-toggle="tab" href="#installed">Installed Addon</a>
                                    <a className="p-3 fs-16 text-reset" data-toggle="tab" href="#available">Available Addon</a>
                                </div>
                            </div>
                            <div className="col-md-6 mt-3 mt-sm-0 text-center text-md-right">
                                <Link to="/admin/addons/create" className="btn btn-circle btn-primary">Install/Update Addon</Link>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="tab-content">
                        <div className="tab-pane fade in active show" id="installed">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <div className="card">
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <div className="align-items-center d-flex flex-column flex-md-row">
                                                        <img className="h-60px mb-3 mb-md-0" src="https://demo.activeitzone.com/matrimonial/public/otp_system.png" alt="Image" />
                                                        <div className="mr-md-3 ml-md-5">
                                                            <h4 className="fs-16 fw-600">OTP</h4>
                                                        </div>
                                                        <div className="mr-md-3 ml-0">
                                                            <p><small>Version: </small>1.2</p>
                                                        </div>
                                                        <div className="ml-auto mr-0">
                                                            <label className="aiz-switch mb-0">
                                                                <input type="checkbox" defaultChecked />
                                                                <span />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="align-items-center d-flex flex-column flex-md-row">
                                                        <img className="h-60px mb-3 mb-md-0" src="https://demo.activeitzone.com/matrimonial/public/support_ticket.png" alt="Image" />
                                                        <div className="mr-md-3 ml-md-5">
                                                            <h4 className="fs-16 fw-600">Support Ticket</h4>
                                                        </div>
                                                        <div className="mr-md-3 ml-0">
                                                            <p><small>Version: </small>1.0</p>
                                                        </div>
                                                        <div className="ml-auto mr-0">
                                                            <label className="aiz-switch mb-0">
                                                                <input type="checkbox" defaultChecked />
                                                                <span />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="align-items-center d-flex flex-column flex-md-row">
                                                        <img className="h-60px mb-3 mb-md-0" src="https://demo.activeitzone.com/matrimonial/public/referral_banner.png" alt="Image" />
                                                        <div className="mr-md-3 ml-md-5">
                                                            <h4 className="fs-16 fw-600">Referral System</h4>
                                                        </div>
                                                        <div className="mr-md-3 ml-0">
                                                            <p><small>Version: </small>1.0</p>
                                                        </div>
                                                        <div className="ml-auto mr-0">
                                                            <label className="aiz-switch mb-0">
                                                                <input type="checkbox" defaultChecked />
                                                                <span />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="available">
                            <div className="row" id="available-addons-content">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddonManager