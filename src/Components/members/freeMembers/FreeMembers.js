import React from 'react'
import AllMembers from './allMembers/AllMembers';
import Members from './members/Members';

function FreeMembers() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <Members />
                    <AllMembers />
                </div>
            </div>

        </>
    )
}

export default FreeMembers;