import React from 'react'

function UnAppRovedProfilePics() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Unapproved Profile Pictures</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-md-0 h6">Profile Pictures</h5>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>photo</th><th style={{ display: 'table-cell' }}>Member Code</th><th style={{ display: 'table-cell' }}>Member Name</th><th style={{ display: 'table-cell' }}>Approval</th></tr>
                                </thead>
                                <tbody>
                                    <tr className="footable-empty"><td colSpan={5}>Nothing Found</td></tr></tbody>
                            </table>
                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    <p className="mb-0">© testing v3.6</p>
                </div>
            </div>

        </>
    )
}

export default UnAppRovedProfilePics