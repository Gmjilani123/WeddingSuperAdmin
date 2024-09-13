import React from 'react'
import AddNewCity from '../../../../Components/members/profileAttribute/cities/AddNewCity'
import AllCities from '../../../../Components/members/profileAttribute/cities/AllCities'
import Cities from '../../../../Components/members/profileAttribute/cities/Cities'

function CityPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <Cities />
                    <div className="row">
                        <AllCities />
                        <AddNewCity />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CityPage