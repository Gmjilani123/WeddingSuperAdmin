import React from 'react'
import AddNewSubCaste from '../../../../Components/members/profileAttribute/subCaste/AddNewSubCaste'
import AllSubCaste from '../../../../Components/members/profileAttribute/subCaste/AllSubCaste'
import SubCaste from '../../../../Components/members/profileAttribute/subCaste/SubCaste'

function SubCastepage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <SubCaste />
                    <div className="row">
                        <AllSubCaste />
                        <AddNewSubCaste />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubCastepage