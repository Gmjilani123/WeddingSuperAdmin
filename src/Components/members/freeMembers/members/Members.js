import React from 'react'
import { Link } from 'react-router-dom'

function Members() {
    return (
        <>
            <div className="aiz-titlebar mt-2 mb-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">Members</h1>
                    </div>
                    <div className="col-md-6 text-right">
                        <Link to="/admin/members/create" className="btn btn-circle btn-primary">Add New Member</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Members