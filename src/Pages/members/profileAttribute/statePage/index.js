import React from 'react'
import AddNewState from '../../../../Components/members/profileAttribute/state/AddNewState'
import AllStates from '../../../../Components/members/profileAttribute/state/AllStates'
import State from '../../../../Components/members/profileAttribute/state/State'

function StatePage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <State />
                    <div className="row">
                        <AllStates />
                        <AddNewState />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatePage