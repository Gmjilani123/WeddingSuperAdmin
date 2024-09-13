import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Activation from "./activation/Activation";
import { toastErrorMessage, toastSuccessMessage } from "../../../common/tostShow/TostShow";
import { ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getAllgeneralsettingD, updategenralsettingD } from "../../../api/Api";

function GeneralSettings() {
  const [loading, setLoading] = useState(false);
  const [showMetaImage, setShowMetaImage] = useState();
  const [showBannerImage, setShowBannerImage] = useState();

  const [isHttpsActive, setIsHttpsActive] = useState(false);
  const [maintananceMode, setMaintananceMode] = useState(false);
  const [walletSystem, setWalletSystem] = useState(false);
  const [emailVerification, setEmailVerification] = useState(false);
  const [memberApproval, setMemberApproval] = useState(false);
  const [onlyPremiumMember, setOnlyPremiumMember] = useState(false);
  const [memberProfilePic, setMemberProfilePic] = useState(false);

  const [inputVal, setInputval] = useState({
    name: "",
    admin_login_page_background: "",
    system_logo: "",
    member_code_prefix: "",
    member_minimum_age: "",
    member_profile_picture_privacy: "",
    member_gallery_image_privacy: "",
    system_timezone: "",

    // https_activation: null,
    // maintenance_mode_activation: null,
    // wallet_system_activation: null,
    // email_verification:null,
    // member_approval_by_admin_activation: null,
    // only_premium_member_can_see_other_members_full_profile: null,
    // member_profile_picture_approval_by_admin: null,
  });
  const handleChange = (e) => {
    const inpVal = e.target.value;
    const inpName = e.target.name;
    const cloned = { ...inputVal };
    cloned[inpName] = inpVal;
    setInputval(cloned);
  };
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmitData = async (e) => {
    const payloadData = { ...inputVal, https_activation:isHttpsActive,maintenance_mode_activation:maintananceMode,wallet_system_activation:walletSystem,email_verification:emailVerification,member_approval_by_admin_activation:memberApproval,only_premium_member_can_see_other_members_full_profile:onlyPremiumMember,member_profile_picture_approval_by_admin:memberProfilePic,};
    console.log(payloadData);
    // e.preventDefault();
    try {
      setLoading(true)
      const res = await updategenralsettingD(payloadData);
      console.log("updateDataResponse---", res);
      if (res?.error === false) {
        toastSuccessMessage(res?.message);
        setTimeout(() => {
          window.location.reload()
          // navigate('../blog-all-Post')
        }, 5000);
      }
      setLoading(false)
    } catch (error) {
      toastErrorMessage(error?.message);
      setLoading(false);
    }
  };

  const getData = async () => {
    try {
      setLoading(true)
      const res = await getAllgeneralsettingD();
      console.log("getAllgeneralsettingDres---", res);
      setInputval(res?.data);
      setIsHttpsActive(res?.data?.https_activation);
      setMaintananceMode(res?.data?.maintenance_mode_activation);
      setWalletSystem(res?.data?.wallet_system_activation);
      setEmailVerification(res?.data?.email_verification);

      setMemberApproval(res?.data?.member_approval_by_admin_activation);
      setOnlyPremiumMember(res?.data?.only_premium_member_can_see_other_members_full_profile);

      setMemberProfilePic(res?.data?.member_profile_picture_approval_by_admin);

      setLoading(false)
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  const handleOnChangeImage = async (e) => {
    if (e.target.name === 'banner_image') {
      let arr = [];
      const fromData = new FormData();
      const arrs = [...e.target.files]
      for (let index = 0; index < arrs.length; index++) {
        const element = arrs[index];
        fromData.append('image', element)
        try {
          setLoading(true)
          const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, fromData,);
          // setShowBannerImage(res.data);
          arr.push(res.data)
        } catch (error) {

        };
        setLoading(false)
        fromData.delete('image')
      }
    } else if (e.target.name == 'meta_image') {
      let balnkObj = {};
      const fromData = new FormData();
      fromData.append('image', e.target.files[0])
      try {
        setLoading(true)
        const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, fromData,);
        // setShowMetaImage(res.data);
        balnkObj = res.data
      } catch (error) {

      };
      setLoading(false)
      fromData.delete('image')
    }
  };


  const handleCheckboxChange = (event) => {
    console.log(event.target.checked)
    setIsHttpsActive(event.target.checked);
  };
  const handlecheckMaintanance = (event) => {
    console.log(event.target.checked)
    setMaintananceMode(event.target.checked);
  };
  const handlecheckSystemWallet = (event) => {
    console.log(event.target.checked)
    setWalletSystem(event.target.checked);
  };
  const handlecheckEmailVerification = (event) => {
    console.log(event.target.checked)
    setEmailVerification(event.target.checked);
  };
  const handlecheckMemberApproval = (event) => {
    console.log(event.target.checked)
    setMemberApproval(event.target.checked);
  };
  const handlecheckPremiumMember = (event) => {
    console.log(event.target.checked)
    setOnlyPremiumMember(event.target.checked);
  };
  const handlecheckMemberProfilePic = (event) => {
    console.log(event.target.checked)
    setMemberProfilePic(event.target.checked);
  };
  return (
    <>
      <div className="aiz-main-content">
        {loading && <div className="preloaderCount">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h1 className="mb-0 h6">General Settings</h1>
                </div>
                <div className="card-body">
                  <form
                    >

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        System Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          value={inputVal?.name}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="signinSrEmail"
                      >
                        System logo
                      </label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          // value={inputVal?.system_logo}
                          // onChange={handleOnChangeImage}
                          onChange={handleChange}
                          type="file"
                          name="system_logo"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        System Timezone
                      </label>
                      <div className="col-sm-9">
                        <select className="form-select form-control aiz-selectpicker" name="system_timezone" value={inputVal?.system_timezone}
                          onChange={handleChange} aria-label="Default select example">
                          <option value="Pacific/Kwajalein">
                            (GMT-12:00) International Date Line West
                          </option>
                          <option value="Pacific/Midway">
                            (GMT-11:00) Midway Island
                          </option>
                          <option value="Pacific/Apia">
                            (GMT-11:00) Samoa
                          </option>
                          <option value="Pacific/Honolulu">
                            (GMT-10:00) Hawaii
                          </option>
                          <option value="America/Anchorage">
                            (GMT-09:00) Alaska
                          </option>
                          <option value="America/Los_Angeles">
                            (GMT-08:00) Pacific Time (US &amp; Canada)
                          </option>
                          <option value="America/Tijuana">
                            (GMT-08:00) Tijuana
                          </option>
                          <option value="America/Phoenix">
                            (GMT-07:00) Arizona
                          </option>
                          <option value="America/Denver">
                            (GMT-07:00) Mountain Time (US &amp; Canada)
                          </option>
                          <option value="America/Chihuahua">
                            (GMT-07:00) Chihuahua
                          </option>
                          <option value="America/Chihuahua">
                            (GMT-07:00) La Paz
                          </option>
                          <option value="America/Mazatlan">
                            (GMT-07:00) Mazatlan
                          </option>
                          <option value="America/Chicago">
                            (GMT-06:00) Central Time (US &amp; Canada)
                          </option>
                          <option value="America/Managua">
                            (GMT-06:00) Central America
                          </option>
                          <option value="America/Mexico_City">
                            (GMT-06:00) Guadalajara
                          </option>
                          <option value="America/Mexico_City">
                            (GMT-06:00) Mexico City
                          </option>
                          <option value="America/Monterrey">
                            (GMT-06:00) Monterrey
                          </option>
                          <option value="America/Regina">
                            (GMT-06:00) Saskatchewan
                          </option>
                          <option value="America/New_York">
                            (GMT-05:00) Eastern Time (US &amp; Canada)
                          </option>
                          <option value="America/Indiana/Indianapolis">
                            (GMT-05:00) Indiana (East)
                          </option>
                          <option value="America/Bogota">
                            (GMT-05:00) Bogota
                          </option>
                          <option value="America/Lima">
                            (GMT-05:00) Lima
                          </option>
                          <option value="America/Bogota">
                            (GMT-05:00) Quito
                          </option>
                          <option value="America/Halifax">
                            (GMT-04:00) Atlantic Time (Canada)
                          </option>
                          <option value="America/Caracas">
                            (GMT-04:00) Caracas
                          </option>
                          <option value="America/La_Paz">
                            (GMT-04:00) La Paz
                          </option>
                          <option value="America/Santiago">
                            (GMT-04:00) Santiago
                          </option>
                          <option value="America/St_Johns">
                            (GMT-03:30) Newfoundland
                          </option>
                          <option value="America/Sao_Paulo">
                            (GMT-03:00) Brasilia
                          </option>
                          <option value="America/Argentina/Buenos_Aires">
                            (GMT-03:00) Buenos Aires
                          </option>
                          <option value="America/Argentina/Buenos_Aires">
                            (GMT-03:00) Georgetown
                          </option>
                          <option value="America/Godthab">
                            (GMT-03:00) Greenland
                          </option>
                          <option value="America/Noronha">
                            (GMT-02:00) Mid-Atlantic
                          </option>
                          <option value="Atlantic/Azores">
                            (GMT-01:00) Azores
                          </option>
                          <option value="Atlantic/Cape_Verde">
                            (GMT-01:00) Cape Verde Is.
                          </option>
                          <option value="Africa/Casablanca">
                            (GMT) Casablanca
                          </option>
                          <option value="Europe/London">(GMT) Dublin</option>
                          <option value="Europe/London">
                            (GMT) Edinburgh
                          </option>
                          <option value="Europe/Lisbon">(GMT) Lisbon</option>
                          <option value="Europe/London">(GMT) London</option>
                          <option value="UTC">(GMT) UTC</option>
                          <option value="Africa/Monrovia">
                            (GMT) Monrovia
                          </option>
                          <option value="Europe/Amsterdam">
                            (GMT+01:00) Amsterdam
                          </option>
                          <option value="Europe/Belgrade">
                            (GMT+01:00) Belgrade
                          </option>
                          <option value="Europe/Berlin">
                            (GMT+01:00) Berlin
                          </option>
                          <option value="Europe/Berlin">
                            (GMT+01:00) Bern
                          </option>
                          <option value="Europe/Bratislava">
                            (GMT+01:00) Bratislava
                          </option>
                          <option value="Europe/Brussels">
                            (GMT+01:00) Brussels
                          </option>
                          <option value="Europe/Budapest">
                            (GMT+01:00) Budapest
                          </option>
                          <option value="Europe/Copenhagen">
                            (GMT+01:00) Copenhagen
                          </option>
                          <option value="Europe/Ljubljana">
                            (GMT+01:00) Ljubljana
                          </option>
                          <option value="Europe/Madrid">
                            (GMT+01:00) Madrid
                          </option>
                          <option value="Europe/Paris">
                            (GMT+01:00) Paris
                          </option>
                          <option value="Europe/Prague">
                            (GMT+01:00) Prague
                          </option>
                          <option value="Europe/Rome">
                            (GMT+01:00) Rome
                          </option>
                          <option value="Europe/Sarajevo">
                            (GMT+01:00) Sarajevo
                          </option>
                          <option value="Europe/Skopje">
                            (GMT+01:00) Skopje
                          </option>
                          <option value="Europe/Stockholm">
                            (GMT+01:00) Stockholm
                          </option>
                          <option value="Europe/Vienna">
                            (GMT+01:00) Vienna
                          </option>
                          <option value="Europe/Warsaw">
                            (GMT+01:00) Warsaw
                          </option>
                          <option value="Africa/Lagos">
                            (GMT+01:00) West Central Africa
                          </option>
                          <option value="Europe/Zagreb">
                            (GMT+01:00) Zagreb
                          </option>
                          <option value="Europe/Athens">
                            (GMT+02:00) Athens
                          </option>
                          <option value="Europe/Bucharest">
                            (GMT+02:00) Bucharest
                          </option>
                          <option value="Africa/Cairo">
                            (GMT+02:00) Cairo
                          </option>
                          <option value="Africa/Harare">
                            (GMT+02:00) Harare
                          </option>
                          <option value="Europe/Helsinki">
                            (GMT+02:00) Helsinki
                          </option>
                          <option value="Europe/Istanbul">
                            (GMT+02:00) Istanbul
                          </option>
                          <option value="Asia/Jerusalem">
                            (GMT+02:00) Jerusalem
                          </option>
                          <option value="Europe/Kiev">
                            (GMT+02:00) Kyev
                          </option>
                          <option value="Europe/Minsk">
                            (GMT+02:00) Minsk
                          </option>
                          <option value="Africa/Johannesburg">
                            (GMT+02:00) Pretoria
                          </option>
                          <option value="Europe/Riga">
                            (GMT+02:00) Riga
                          </option>
                          <option value="Europe/Sofia">
                            (GMT+02:00) Sofia
                          </option>
                          <option value="Europe/Tallinn">
                            (GMT+02:00) Tallinn
                          </option>
                          <option value="Europe/Vilnius">
                            (GMT+02:00) Vilnius
                          </option>
                          <option value="Asia/Baghdad">
                            (GMT+03:00) Baghdad
                          </option>
                          <option value="Asia/Kuwait">
                            (GMT+03:00) Kuwait
                          </option>
                          <option value="Europe/Moscow">
                            (GMT+03:00) Moscow
                          </option>
                          <option value="Africa/Nairobi">
                            (GMT+03:00) Nairobi
                          </option>
                          <option value="Asia/Riyadh">
                            (GMT+03:00) Riyadh
                          </option>
                          <option value="Europe/Moscow">
                            (GMT+03:00) St. Petersburg
                          </option>
                          <option value="Europe/Volgograd">
                            (GMT+03:00) Volgograd
                          </option>
                          <option value="Asia/Tehran">
                            (GMT+03:30) Tehran
                          </option>
                          <option value="Asia/Muscat">
                            (GMT+04:00) Abu Dhabi
                          </option>
                          <option value="Asia/Baku">(GMT+04:00) Baku</option>
                          <option value="Asia/Muscat">
                            (GMT+04:00) Muscat
                          </option>
                          <option value="Asia/Tbilisi">
                            (GMT+04:00) Tbilisi
                          </option>
                          <option value="Asia/Yerevan">
                            (GMT+04:00) Yerevan
                          </option>
                          <option value="Asia/Kabul">
                            (GMT+04:30) Kabul
                          </option>
                          <option value="Asia/Yekaterinburg">
                            (GMT+05:00) Ekaterinburg
                          </option>
                          <option value="Asia/Karachi">
                            (GMT+05:00) Islamabad
                          </option>
                          <option value="Asia/Karachi">
                            (GMT+05:00) Karachi
                          </option>
                          <option value="Asia/Tashkent">
                            (GMT+05:00) Tashkent
                          </option>
                          <option value="Asia/Kolkata" selected>
                            (GMT+05:30) Chennai
                          </option>
                          <option value="Asia/Kolkata" selected>
                            (GMT+05:30) Kolkata
                          </option>
                          <option value="Asia/Kolkata" selected>
                            (GMT+05:30) Mumbai
                          </option>
                          <option value="Asia/Kolkata" selected>
                            (GMT+05:30) New Delhi
                          </option>
                          <option value="Asia/Kathmandu">
                            (GMT+05:45) Kathmandu
                          </option>
                          <option value="Asia/Almaty">
                            (GMT+06:00) Almaty
                          </option>
                          <option value="Asia/Dhaka">
                            (GMT+06:00) Astana
                          </option>
                          <option value="Asia/Dhaka">
                            (GMT+06:00) Dhaka
                          </option>
                          <option value="Asia/Novosibirsk">
                            (GMT+06:00) Novosibirsk
                          </option>
                          <option value="Asia/Colombo">
                            (GMT+06:00) Sri Jayawardenepura
                          </option>
                          <option value="Asia/Rangoon">
                            (GMT+06:30) Rangoon
                          </option>
                          <option value="Asia/Bangkok">
                            (GMT+07:00) Bangkok
                          </option>
                          <option value="Asia/Bangkok">
                            (GMT+07:00) Hanoi
                          </option>
                          <option value="Asia/Jakarta">
                            (GMT+07:00) Jakarta
                          </option>
                          <option value="Asia/Krasnoyarsk">
                            (GMT+07:00) Krasnoyarsk
                          </option>
                          <option value="Asia/Hong_Kong">
                            (GMT+08:00) Beijing
                          </option>
                          <option value="Asia/Chongqing">
                            (GMT+08:00) Chongqing
                          </option>
                          <option value="Asia/Hong_Kong">
                            (GMT+08:00) Hong Kong
                          </option>
                          <option value="Asia/Irkutsk">
                            (GMT+08:00) Irkutsk
                          </option>
                          <option value="Asia/Kuala_Lumpur">
                            (GMT+08:00) Kuala Lumpur
                          </option>
                          <option value="Australia/Perth">
                            (GMT+08:00) Perth
                          </option>
                          <option value="Asia/Singapore">
                            (GMT+08:00) Singapore
                          </option>
                          <option value="Asia/Taipei">
                            (GMT+08:00) Taipei
                          </option>
                          <option value="Asia/Irkutsk">
                            (GMT+08:00) Ulaan Bataar
                          </option>
                          <option value="Asia/Urumqi">
                            (GMT+08:00) Urumqi
                          </option>
                          <option value="Asia/Tokyo">
                            (GMT+09:00) Osaka
                          </option>
                          <option value="Asia/Tokyo">
                            (GMT+09:00) Sapporo
                          </option>
                          <option value="Asia/Seoul">
                            (GMT+09:00) Seoul
                          </option>
                          <option value="Asia/Tokyo">
                            (GMT+09:00) Tokyo
                          </option>
                          <option value="Asia/Yakutsk">
                            (GMT+09:00) Yakutsk
                          </option>
                          <option value="Australia/Adelaide">
                            (GMT+09:30) Adelaide
                          </option>
                          <option value="Australia/Darwin">
                            (GMT+09:30) Darwin
                          </option>
                          <option value="Australia/Brisbane">
                            (GMT+10:00) Brisbane
                          </option>
                          <option value="Australia/Sydney">
                            (GMT+10:00) Canberra
                          </option>
                          <option value="Pacific/Guam">
                            (GMT+10:00) Guam
                          </option>
                          <option value="Australia/Hobart">
                            (GMT+10:00) Hobart
                          </option>
                          <option value="Australia/Melbourne">
                            (GMT+10:00) Melbourne
                          </option>
                          <option value="Pacific/Port_Moresby">
                            (GMT+10:00) Port Moresby
                          </option>
                          <option value="Australia/Sydney">
                            (GMT+10:00) Sydney
                          </option>
                          <option value="Asia/Vladivostok">
                            (GMT+10:00) Vladivostok
                          </option>
                          <option value="Asia/Magadan">
                            (GMT+11:00) Magadan
                          </option>
                          <option value="Asia/Magadan">
                            (GMT+11:00) New Caledonia
                          </option>
                          <option value="Asia/Magadan">
                            (GMT+11:00) Solomon Is.
                          </option>
                          <option value="Pacific/Auckland">
                            (GMT+12:00) Auckland
                          </option>
                          <option value="Pacific/Fiji">
                            (GMT+12:00) Fiji
                          </option>
                          <option value="Asia/Kamchatka">
                            (GMT+12:00) Kamchatka
                          </option>
                          <option value="Pacific/Fiji">
                            (GMT+12:00) Marshall Is.
                          </option>
                          <option value="Pacific/Auckland">
                            (GMT+12:00) Wellington
                          </option>
                          <option value="Pacific/Tongatapu">
                            (GMT+13:00) Nuku'alofa
                          </option>
                        </select>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="signinSrEmail"
                      >
                        Admin login page background
                      </label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          // value={inputVal?.admin_login_page_background}
                          // onChange={handleOnChangeImage}
                          onChange={handleChange}
                          type="file"
                          name="admin_login_page_background"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        Member Code Prefix
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="member_code_prefix"
                          placeholder="Enter Member Code Prefix"
                          value={inputVal?.member_code_prefix}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        Member Minimum Age
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          name="member_minimum_age"
                          placeholder="Enter Member Minimum Age"
                          value={inputVal?.member_minimum_age}
                          onChange={handleChange}
                          step={1}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        Member Profile Picture Privacy
                      </label>
                      <div className="col-sm-9">
                        <select className="form-select form-control aiz-selectpicker" name="member_profile_picture_privacy" value={inputVal?.member_profile_picture_privacy}
                          onChange={handleChange} aria-label="Default select example">
                          <option>All</option>
                          <option value={'Only Me'}>Only Me</option>
                          <option value={'Premium Members'}>Premium Members</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        Member Gallery Image Privacy
                      </label>
                      <div className="col-sm-9">
                        <select className="form-select form-control aiz-selectpicker" name="member_gallery_image_privacy" value={inputVal?.member_gallery_image_privacy}
                          onChange={handleChange} aria-label="Default select example" >
                          <option>All</option>
                          <option value={'Only Me'}>Only Me</option>
                          <option value={'Premium Members'}>Premium Members</option>
                        </select>
                      </div>
                    </div>

                   

                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              {/* <Activation /> */}
              <div className="card">
                <div className="card-header">
                  <h1 className="mb-0 h6">Activation</h1>
                </div>
                <div className="card-body">

                  <div className="form-group row">
                    <label className="col-sm-8 col-from-label">HTTPS Activation</label>
                    <div className="col-sm-4">
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input type="checkbox" onChange={handleCheckboxChange} checked={isHttpsActive}/>
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-8 col-from-label">
                      Maintenance Mode Activation
                    </label>
                    <div className="col-sm-4">
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input type="checkbox" onChange={handlecheckMaintanance} checked={maintananceMode}/>
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-8 col-from-label">
                      Wallet System Activation
                    </label>
                    <div className="col-sm-4">
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input type="checkbox" onChange={handlecheckSystemWallet} checked={walletSystem} />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-8">
                      <label className="col-from-label">
                        Email Verification
                        <i>
                          <code>
                            (You need to configure SMTP correctly to enable this
                            feature.
                            {/* <a href="">
                              Configure Now
                            </a> */}
                            )
                          </code>
                        </i>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input type="checkbox" onChange={handlecheckEmailVerification} checked={emailVerification}/>
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-8 col-from-label">
                      Member Approval by Admin Activation
                    </label>
                    <div className="col-sm-4">
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input type="checkbox" onChange={handlecheckMemberApproval} checked={memberApproval} />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-8">
                      <label className="col-from-label">
                        Only Premium Member Can See Other Members Full Profile.
                        <i>
                          <code>
                            (If you disable this, all registered members will be able to
                            see the members full profile.)
                          </code>
                        </i>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input type="checkbox" onChange={handlecheckPremiumMember} checked={onlyPremiumMember} />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-8">
                      <label className="col-from-label">
                        Member Profile Picture Approval by Admin.
                        <i>
                          <code>
                            (If you disable this, all registered members will be able to
                            see the members full profile.)
                          </code>
                        </i>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input type="checkbox" onChange={handlecheckMemberProfilePic} checked={memberProfilePic}/>
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>

                  <div className="text-right">
                      <button type="button" onClick={handleSubmitData} className="btn btn-primary">
                        Update
                      </button>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
export default GeneralSettings;
