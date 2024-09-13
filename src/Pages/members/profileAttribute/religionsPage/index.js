import React from 'react'
import AddNewReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/AddNewReligionsAndCaste'
import AllReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/AllReligionsAndCaste'
import ReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/ReligionsAndCaste'

function ReligionsPage() {

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <ReligionsAndCaste />
          <div className="row">
            <AllReligionsAndCaste />
            <AddNewReligionsAndCaste />
          </div>
        </div>
      </div>
    </>

  )
}

export default ReligionsPage