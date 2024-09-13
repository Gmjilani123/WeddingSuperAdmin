import React from 'react'
import FamilyValues from '../../../../Components/members/profileAttribute/familyValues/FamilyValues';
import AllFamilyValues from '../../../../Components/members/profileAttribute/familyValues/AllFamilyValues';
import AddNewFamilyValues from '../../../../Components/members/profileAttribute/familyValues/AddNewFamilyValues';


function FamilyValuesPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <FamilyValues />
                    <div className="row">
                        <AllFamilyValues />
                        <AddNewFamilyValues />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FamilyValuesPage