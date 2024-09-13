import FacebookLoginCredential from "./facebookLoginCredential/FacebookLoginCredential";
import GoogleLogInCredential from "./googleLoginCredential/GoogleLoginCredential";
import TwitterLoginCredential from "./twitterLoginCredential/TwitterLoginCredential";

function SocialMediaLogIn() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-md-6">
              <GoogleLogInCredential/>
            </div>
            <div className="col-md-6">
              <FacebookLoginCredential/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TwitterLoginCredential/>
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
export default SocialMediaLogIn;
