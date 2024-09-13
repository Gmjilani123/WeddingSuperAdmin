import React from 'react'
import AllCountries from '../../../../Components/members/profileAttribute/country/AllCountries';
import Country from '../../../../Components/members/profileAttribute/country/Country';
import AddNewCountry from '../../../../Components/members/profileAttribute/country/AddNewCountry';
// import AddCountries from '../../../../Components/members/profileAttribute/country/AddCountries';

function CountryPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <Country />
                    <div className="row">
                        <AllCountries />
                        <AddNewCountry />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CountryPage;