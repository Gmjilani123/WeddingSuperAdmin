import React from 'react'
import CookiesAgreement from '../../../Components/websiteSetup/appearances/CookiesAgreement'
import CustomScript from '../../../Components/websiteSetup/appearances/CustomScript'
import General from '../../../Components/websiteSetup/appearances/General'
import GlobalSEO from '../../../Components/websiteSetup/appearances/GlobalSEO'

function AppearancesPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-11 mx-auto">
                            <General />
                            <GlobalSEO />
                            <CookiesAgreement />
                            <CustomScript />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AppearancesPage