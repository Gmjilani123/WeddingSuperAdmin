import React from 'react'
import AddNewOnBehalfs from '../../../../Components/members/profileAttribute/onBehalf/AddNewOnBehalfs'
import OnAllBehalfs from '../../../../Components/members/profileAttribute/onBehalf/OnAllBehalfs'
import OnBehalf from '../../../../Components/members/profileAttribute/onBehalf/OnBehalf';
import MaritalStatus from '../../../../Components/members/profileAttribute/maritalStatus/MaritalStatus';
import AllMaritalStatuses from '../../../../Components/members/profileAttribute/maritalStatus/AllMaritalStatuses';
import AddNewMaritalStatus from '../../../../Components/members/profileAttribute/maritalStatus/AddNewMaritalStatus';



function MaritalStatusPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <MaritalStatus />
                    <div className="row">
                        <AllMaritalStatuses />
                        <AddNewMaritalStatus />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MaritalStatusPage