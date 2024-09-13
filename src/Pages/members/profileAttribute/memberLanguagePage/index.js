import React from 'react'
import AddNewMemberLanguage from '../../../../Components/members/profileAttribute/memberLanguage/AddNewMemberLanguage'
import AllMemberLanguage from '../../../../Components/members/profileAttribute/memberLanguage/AllMemberLanguage'
import MemberLanguage from '../../../../Components/members/profileAttribute/memberLanguage/MemberLanguage'

function MemberLanguagePage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <MemberLanguage />
                    <div className="row">
                        <AllMemberLanguage />
                        <AddNewMemberLanguage />
                    </div>
                </div>
            </div>
        </>
    )
}
export default MemberLanguagePage