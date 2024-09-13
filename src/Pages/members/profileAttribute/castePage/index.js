import React from 'react'
import AddNewReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/AddNewReligionsAndCaste'
import AllReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/AllReligionsAndCaste'
import ReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/ReligionsAndCaste'
import Caste from '../../../../Components/members/profileAttribute/caste/Caste';
import AllCastes from '../../../../Components/members/profileAttribute/caste/AllCastes';
import AddNewCaste from '../../../../Components/members/profileAttribute/caste/AddNewCaste';

function CastePage() {


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <Caste />
                    <div className="row">
                        <AllCastes />
                        <AddNewCaste />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CastePage