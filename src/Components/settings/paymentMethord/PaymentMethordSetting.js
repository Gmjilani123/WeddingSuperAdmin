import InstamojoCredential from "./Instamojo Credential/InstamojoCredential";
import ManualPaymentMethordOne from "./manualPaymentMethod 1/ManualPaymentMethodOne";
// import ManualPaymentMethord from "./manualPaymentMethod 1/ManualPaymentMethodOne";
import ManualPaymentMethordTwo from "./manualPaymentMethod 2/ManualPaymentMethodTwo";
import PayPalCredential from "./PaypalCredential/PaypalCredential";
import PayStackCredential from "./payStackCredential/PayStackCredential";
import RazorPayCredential from "./razorPayCredential/RazorPayCredential";
import StripeCredential from "./stripeCredential/StripeCredential";

function PaymentMethordSetting() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-md-6">
              <PayPalCredential />
            </div>
            <div className="col-md-6">
              <InstamojoCredential />
            </div>
            <div className="col-md-6">
              <StripeCredential />
            </div>
            <div className="col-md-6">
              <RazorPayCredential />
            </div>
            <div className="col-md-6">
              <PayStackCredential />
            </div>
            <div className="col-md-6">
              <ManualPaymentMethordOne />
            </div>

            {/* <div className="col-md-6">
              <ManualPaymentMethordTwo />
            </div> */}
            
             {/* <div className="col-lg-6 mx-auto">
              <PayPalCredential />
            </div> */}

          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
export default PaymentMethordSetting;
