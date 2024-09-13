import FastCredential from "./Fast2SmsCredential/FastCredential";
import MimoCredential from "./MimoCredential/MimoCredential";
import MimSmsCredential from "./MimSmsCredential/MimSmsCredential";
import NexmoCredential from "./NexmoCredential/NexmoCredential";
import SslWirelessCredential from "./SslWirelessCredential/SslWirelessCredential";
import TwilioCredential from "./twilioCredential/TwilioCredential";

function SetOtp() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-6">
              <TwilioCredential/>
            </div>
            <div className="col-lg-6">
              <FastCredential/>
            </div>
            <div className="col-lg-6">
              <MimoCredential/>
            </div>
            <div className="col-lg-6">
              <SslWirelessCredential/>
            </div>
            <div className="col-lg-6">
              <NexmoCredential/>
            </div>
            <div className="col-lg-6">
              <MimSmsCredential/>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default SetOtp;