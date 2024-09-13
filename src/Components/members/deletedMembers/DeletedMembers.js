import React from 'react'

function DeletedMembers() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Deleted Members</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header row gutters-5">
                                    <div className="col text-center text-md-left">
                                        <h5 className="mb-md-0 h6">All Deleted Members</h5>
                                    </div>
                                    <div className="col-md-3">
                                        <form id="sort_members" >
                                            <div className="input-group input-group-sm">
                                                <input type="text" className="form-control" id="search" name="search" placeholder="Type first name / last name / ID & Enter" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Image</th><th style={{ display: 'table-cell' }}>Member Id</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Name</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Membership</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Approval Status</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Profile Reported</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Member Science</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Member Status</th><th className="text-right" width="10%" style={{ display: 'table-cell' }}>Options</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr className="footable-empty"><td colSpan={10}>Nothing Found</td></tr></tbody>
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

export default DeletedMembers