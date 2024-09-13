import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/abaris-wedding-ai-admin-logo.png";

function Aside() {
  const [members, setMembers] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [profileAttribute, setProfileAttribute] = useState(false);
  const [blog, setBlog] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [referal, setReferal] = useState(false);
  const [supportTicket, setSupportTicket] = useState(false);
  const [supportSetting, setSupportSetting] = useState(false);

  const [otpSystem, setOtpSystem] = useState(false);
  const [generalSettings, setGeneralSettings] = useState(false);
  const [websiteSetup, setWebsiteSetup] = useState(false);
  const [system, setSystem] = useState(false);

  const [staffs, setStaffs] = useState(false)

  const hideModal = (event) => {
    // document.body.classNameList.remove('mobile-menu-visible');
    document.getElementById("myDIV").className = "";
    this.setState({ showModal: false });
  }

  return (
    <>
      <div className="aiz-sidebar-wrap" id='myDIV'>
        <div className="aiz-sidebar left c-scrollbar" >
          <div className="aiz-side-nav-logo-wrap">
            <a
              href="https://demo.activeitzone.com/matrimonial/admin/dashboard"
              className="d-block"
            >
              <img src={logo} className="img-fluid" />
            </a>
          </div>
          <div className="aiz-side-nav-wrap">
            <ul
              className="aiz-side-nav-list metismenu"
              data-toggle="aiz-side-menu"
            >
              <li className="aiz-side-nav-item mm-active">
                <Link
                  to=""
                  className="aiz-side-nav-link active"
                  aria-expanded="true"
                >
                  <i className="las la-home aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Dashboard</span>
                </Link>
              </li>
              {/* Member Manage */}
              <li className="aiz-side-nav-item">
                <Link
                  to="#" className="aiz-side-nav-link" onClick={() => { setMembers(!members); }}
                >
                  <i className="las la-user aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Members</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${members ? "mm-show" : "extra"}`}
                >
                  <li className="aiz-side-nav-item">
                    <Link to="members" className="aiz-side-nav-link  ">
                      <span className="aiz-side-nav-text">Free Members</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="premium-members" className="aiz-side-nav-link  ">
                      <span className="aiz-side-nav-text">Premium Members</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="member-bulk-add/index"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">Bulk Member Add</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="deleted_members" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Deleted Members</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="reported-members/all" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Reported Members</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="unapproved-profile-pictures"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Unapproved Profile Pictures
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="#"
                      className="aiz-side-nav-link"
                      onClick={() => setProfileAttribute(!profileAttribute)}
                    >
                      <span className="aiz-side-nav-text">
                        Profile Attributes
                      </span>
                      <span className="aiz-side-nav-arrow" />
                    </Link>
                    <ul
                      className={`aiz-side-nav-list level-2 mm-collapse ${profileAttribute ? "mm-show" : "extra"
                        }`}
                    >
                      <li className="aiz-side-nav-item">
                        <Link to="religions" className="aiz-side-nav-link">
                          <span className="aiz-side-nav-text">Religions</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link to="castes" className="aiz-side-nav-link ">
                          <span className="aiz-side-nav-text">Caste</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link to="sub-castes" className="aiz-side-nav-link ">
                          <span className="aiz-side-nav-text">Sub-Caste</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link to="member-languages" className="aiz-side-nav-link">
                          <span className="aiz-side-nav-text">
                            Member Language
                          </span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link to="countries" className="aiz-side-nav-link">
                          <span className="aiz-side-nav-text">Country</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link to="states" className="aiz-side-nav-link ">
                          <span className="aiz-side-nav-text">State</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link to="cities" className="aiz-side-nav-link ">
                          <span className="aiz-side-nav-text">City</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link to="on-behalf" className="aiz-side-nav-link">
                          <span className="aiz-side-nav-text">On Behalf</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link to="family-status" className="aiz-side-nav-link">
                          <span className="aiz-side-nav-text">Family Status</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link to="family-values" className="aiz-side-nav-link">
                          <span className="aiz-side-nav-text">Family Values</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link to="marital-statuses" className="aiz-side-nav-link">
                          <span className="aiz-side-nav-text">
                            Marital Statuses
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="member-profile-sections" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Profile Sections</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Premium Packages */}
              <li className="aiz-side-nav-item">
                <Link to="packages" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Premium Packages</span>
                </Link>
              </li>
              {/* Earnings */}
              <li className="aiz-side-nav-item ">
                <Link to="package-payments" className="aiz-side-nav-link">
                  <i className="las la-money-bill-alt aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Package Payments</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="#"
                  className="aiz-side-nav-link"
                  onClick={() => {
                    setWallet(!wallet);
                  }}
                >
                  <i className="las la-dollar-sign aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Wallet</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${wallet ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link
                      to="wallet-transaction-history"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Wallet Transaction History
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="manual-wallet-recharge-requests"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Manual Wallet Recharge Request
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="aiz-side-nav-item ">
                <Link to="happy-story" className="aiz-side-nav-link ">
                  <i className="las la-handshake aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Happy Stories</span>
                </Link>
              </li>
              {/*Blog System*/}
              <li className="aiz-side-nav-item">
                <Link
                  to="#"
                  className="aiz-side-nav-link"
                  onClick={() => {
                    setBlog(!blog);
                  }}
                >
                  <i className="las la-blog aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Blog System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${blog ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link to="blog-all-Post" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All Posts</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="blog-category" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Categories</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Messaging */}
              <li className="aiz-side-nav-item">
                <Link
                  to="#"
                  className="aiz-side-nav-link"
                  onClick={() => {
                    setMarketing(!marketing);
                  }}
                >
                  <i className="las la-envelope aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Marketing</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${marketing ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link to="newsletter" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Newsletter</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="#"
                  className="aiz-side-nav-link"
                  onClick={() => {
                    setReferal(!referal);
                  }}
                >
                  <i className="las la-money-bill aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Referral</span>
                  <span className="badge badge-inline badge-danger">Addon</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${referal ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link
                      to="set-referral-commission"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Set Referral Comission
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="referal/users" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Referral Users</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="referal/earnings" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Referral Earnings</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="wallet-withdraw-requests"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Wallet Withdraw Request
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Support Ticket Addon */}
              <li className="aiz-side-nav-item">
                <Link
                  to="#"
                  className="aiz-side-nav-link"
                  onClick={() => {
                    setSupportTicket(!supportTicket);
                  }}
                >
                  <i className="las la-people-carry aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Support Ticket</span>
                  <span className="badge badge-inline badge-danger">Addon</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${supportTicket ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link to="active-ticket" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Active Tickets</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="my-ticket" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">My tickets</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="solved-ticket" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Solved tickets</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="#"
                      className="aiz-side-nav-link"
                      onClick={() => {
                        setSupportSetting(!supportSetting);
                      }}
                    >
                      <span className="aiz-side-nav-text">Support Settings</span>
                      <span className="aiz-side-nav-arrow" />
                    </Link>
                    <ul
                      className={`aiz-side-nav-list level-2 mm-collapse ${supportSetting ? "mm-show" : "extra"
                        }`}
                    >
                      <li className="aiz-side-nav-item">
                        <Link
                          to="support-categories"
                          className="aiz-side-nav-link "
                        >
                          <span className="aiz-side-nav-text">Category</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link
                          to="default-ticket-assigned-agent"
                          className="aiz-side-nav-link"
                        >
                          <span className="aiz-side-nav-text">
                            Default Asssigned Agent
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="#"
                  className="aiz-side-nav-link"
                  onClick={() => {
                    setOtpSystem(!otpSystem);
                  }}
                >
                  <i className="las la-phone aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">OTP System</span>
                  <span className="badge badge-inline badge-danger">Addon</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${otpSystem ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link to="sms-templates" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">SMS Templates</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="otp-credentials-configuration"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Set OTP Credentials
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="bulk-sms" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Send SMS</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Uploader Manage */}
              <li className="aiz-side-nav-item">
                <Link to="uploaded-files" className="aiz-side-nav-link ">
                  <i className="las la-folder-open aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Uploaded Files</span>
                </Link>
              </li>
              {/* Website Setup */}
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setWebsiteSetup(!websiteSetup) }}>
                  <i className="las la-desktop aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Website Setup</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${websiteSetup ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="website/header_settings" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Header</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="website/footer_settings" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Footer</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="website/custom-pages" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Pages</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="website/appearances" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Appearance</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* General settings */}
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setGeneralSettings(!generalSettings) }}>
                  <i className="las la-cog aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Settings</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${generalSettings ? "mm-show" : "extra"
                  }`}>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="general-settings"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">General Settings</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="languages"
                      className="aiz-side-nav-link "
                    >
                      <span className="aiz-side-nav-text">Language</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="currencies"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">Currency</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="payment-methods-settings"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">Payment Methods</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="smtp-settings"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">SMTP Settings</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="email-templates"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">Email Templates</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="third-party-settings"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Third Party Settings
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="social-media-login-settings"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Social Media Login
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Staff */}


              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setStaffs(!staffs); }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Staffs</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${staffs ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="staffs"
                      className="aiz-side-nav-link "
                    >
                      <span className="aiz-side-nav-text">All staffs</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="roles"
                      className="aiz-side-nav-link "
                    >
                      <span className="aiz-side-nav-text">Staff Roles</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* System */}
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setSystem(!system) }}>
                  <i className="las la-dharmachakra aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${system ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="system/update"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">Update</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="server-status"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">Server status</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Addon Manager */}
              <li className="aiz-side-nav-item">
                <Link
                  to="addons"
                  className="aiz-side-nav-link "
                >
                  <i className="las la-wrench aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Addon Manager</span>
                </Link>
              </li>
            </ul>
            {/* .aiz-side-nav */}
          </div>
          {/* .aiz-side-nav-wrap */}
        </div>
        <div className="aiz-sidebar-overlay" onClick={hideModal}></div>
      </div>
    </>
  );
}
export default Aside;
