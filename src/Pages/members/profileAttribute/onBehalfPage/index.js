import React from 'react'
import AddNewOnBehalfs from '../../../../Components/members/profileAttribute/onBehalf/AddNewOnBehalfs'
import OnAllBehalfs from '../../../../Components/members/profileAttribute/onBehalf/OnAllBehalfs'
import OnBehalf from '../../../../Components/members/profileAttribute/onBehalf/OnBehalf';



function OnBehalfPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <OnBehalf />
                    <div className="row">
                        <OnAllBehalfs />
                        <AddNewOnBehalfs />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnBehalfPage