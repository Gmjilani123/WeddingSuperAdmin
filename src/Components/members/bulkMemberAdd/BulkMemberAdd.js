import React from 'react'
import { Link } from 'react-router-dom'

function BulkMemberAdd() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Member Bulk Upload</h5>
                        </div>
                        <div className="card-body">
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                <strong>Step 1:</strong>
                                <p>1. Download the skeleton file and fill it with proper data.</p>
                                <p>2. You can download the example file to understand how the data must be filled.</p>
                                <p>3. Once you have downloaded and filled the skeleton file, upload it in the form below and submit.</p>
                            </div>
                            <br />
                            <div className>
                                <a href="https://weddemoadmin.abaris.in/public/download/member_bulk_demo.xlsx" download><button className="btn btn-primary">Download CSV</button></a>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                <strong>Step 2:</strong>
                                <p>1. Gender, On Behalf Id and Package Id should be in numerical id..</p>
                                <p>2. Gender numerical ids are, Male Id = 1, Female Id = 2.</p>
                                <p>3. You can download the pdf to get On Behalf Id and Package Id..</p>
                                <p>4. Add the country code before the phone number..</p>
                            </div>
                            <br />
                            <div className>
                                <Link to="https://weddemoadmin.abaris.in/admin/download/on-behalf"><button className="btn btn-primary me-5">Download On Behalf</button></Link>
                                <a href="https://weddemoadmin.abaris.in/admin/download/package"><button className="btn btn-primary">Download Package</button></a>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6"><strong>Upload Member File</strong></h5>
                        </div>
                        <div className="card-body">
                            <form className="form-horizontal" action="https://weddemoadmin.abaris.in/admin/bulk-member-upload" method="POST" encType="multipart/form-data">
                                <input type="hidden" name="_token" defaultValue="LVtL5aCLISDclnSyLEq3nIbV9JuwT0W5A1JXDDE4" />                <div className="form-group row">
                                    <div className="col-sm-9">
                                        <div className="custom-file">
                                            <label className="custom-file-label">
                                                <input type="file" name="bulk_file" className="custom-file-input" required />
                                                <span className="custom-file-name">Choose file</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-0">
                                    <button type="submit" className="btn btn-primary">Upload CSV</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BulkMemberAdd