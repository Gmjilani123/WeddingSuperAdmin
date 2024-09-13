import React from 'react'
import AddNewOnBehalfs from '../../../../Components/members/profileAttribute/onBehalf/AddNewOnBehalfs';
import OnAllBehalfs from '../../../../Components/members/profileAttribute/onBehalf/OnAllBehalfs';
import OnBehalf from '../../../../Components/members/profileAttribute/onBehalf/OnBehalf';
import FamilyStatus from '../../../../Components/members/profileAttribute/familyStatus/FamilyStatus';
import AllFamilyStatus from '../../../../Components/members/profileAttribute/familyStatus/AllFamilyStatus';
import AddNewFamilyStatus from '../../../../Components/members/profileAttribute/familyStatus/AddNewFamilyStatus';


function FamilyStatusPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <FamilyStatus />
                    <div className="row">
                        <AllFamilyStatus />
                        <AddNewFamilyStatus />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FamilyStatusPage;