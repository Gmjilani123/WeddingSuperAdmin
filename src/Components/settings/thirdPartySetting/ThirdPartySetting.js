import React from 'react'
import ThirdPartyGoogleRecaptch from './ThirdPartyGoogleRecaptch'
import ThirdpartGoogleAnalitics from './ThirdpartGoogleAnalitics'
import ThirdpartyFacebookchat from './ThirdpartyFacebookchat'
import ThirdpartyFacbookpixel from './ThirdpartyFacbookpixel'
import ThirdpartyFacebookComment from './ThirdpartyFacebookComment'

function ThirdPartySetting() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                    <ThirdPartyGoogleRecaptch />
                    <ThirdpartGoogleAnalitics />
                    <ThirdpartyFacebookchat />
                    <ThirdpartyFacbookpixel />
                    {/* <ThirdpartyFacebookComment /> */}
                    </div>
                </div>
            </div>

        </>
    )
}
export default ThirdPartySetting