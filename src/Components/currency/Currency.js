import { useState } from "react";
import AllCurrency from "./allCurrency/AllCurrency";
import SetCurrencyFormate from "./setCurrencyFormate/SetCurrencyFormate";
import SystemDefaultCurrency from "./systemDefaultCurrency/SystemDefaultCurrency";
import AddCurrency from "./AddCurrency";

function Currency() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <div className="row">
        <div className="col-lg-6">
          <SystemDefaultCurrency />
        </div>
        <div className="col-lg-6">
          <SetCurrencyFormate />
        </div>
      </div>
      <div className="aiz-titlebar text-left mt-2 mb-3">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="h3">All Currencies</h1>
          </div>
          <div className="col-md-6 text-md-right">
            <button
              onClick={handleShow}
              className="btn btn-circle btn-primary"
            >
              <span>Add New Currency</span>
            </button>
          </div>
        </div>
      </div> */}

    </>
  );
}
export default Currency;
