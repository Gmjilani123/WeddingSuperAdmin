import { useEffect, useState } from "react";
import Instruction from "./instrction/Instrction"
import { toastErrorMessage, toastSuccessMessage } from "../../../common/tostShow/TostShow";
import { getAllGoogleLoginD, getAllSMTPSettingD, updateGoogleLoginD, updateSMTPSettingD } from "../../../api/Api";
import { ToastContainer } from "react-toastify";

function SmptSettings() {
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [inputVal, setInputval] = useState({
    type: "",
    mail_host: "",
    mail_port: "",
    mail_username: "",
    password: "",
    mail_encryption: "",
    mail_address: "",
    mail_from_name: "",
  });
  const handleChange = (e) => {
    const inpVal = e.target.value;
    const inpName = e.target.name;
    const cloned = { ...inputVal };
    cloned[inpName] = inpVal;
    setInputval(cloned);
  };

  const handleSubmitData = async (e) => {
    const payloadData = { ...inputVal, is_active: isActive };
    console.log(payloadData);
    e.preventDefault();
    try {
      setLoading(true)
      const res = await updateSMTPSettingD(payloadData);
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
      const res = await getAllSMTPSettingD();
      console.log("getAllgeneralsettingDres---", res);
      setInputval(res?.data);
      setLoading(false)
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleCheckboxChange = (event) => {
    setIsActive(event.target.checked);
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
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">SMTP Settings</h5>
                </div>
                <div className="card-body">

                  <form onSubmit={handleSubmitData}>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Type</label>
                      <div className="col-md-9">
                      <input type="text" className="form-control" name="type" onChange={handleChange} value={inputVal?.type}  placeholder="Type" fdprocessedid="vxeq0h" />
                      </div>
                    </div>

                    <div id="smtp">
                      <div className="form-group row">
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL HOST</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="mail_host" value={inputVal?.mail_host}
                            onChange={handleChange} placeholder="MAIL HOST" fdprocessedid="vxeq0h" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL PORT</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="mail_port" value={inputVal?.mail_port}
                            onChange={handleChange} placeholder="MAIL PORT" fdprocessedid="ghjyty" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL USERNAME</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="mail_username" value={inputVal?.mail_username}
                            onChange={handleChange} placeholder="MAIL USERNAME" fdprocessedid="vd5woo" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL PASSWORD</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="password" value={inputVal?.password}
                            onChange={handleChange} placeholder="MAIL PASSWORD" fdprocessedid="nikm8t" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL ENCRYPTION</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="mail_encryption" value={inputVal?.mail_encryption}
                            onChange={handleChange} placeholder="MAIL ENCRYPTION" fdprocessedid="4rtf3" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL FROM ADDRESS</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="mail_address" value={inputVal?.mail_address}
                            onChange={handleChange} placeholder="MAIL FROM ADDRESS" fdprocessedid="hpx7tr" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL FROM NAME</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="mail_from_name" value={inputVal?.mail_from_name}
                            onChange={handleChange} placeholder="MAIL FROM NAME" fdprocessedid="tqqew" />
                        </div>
                      </div>
                    </div>

                    {/* <div id="mailgun" style={{ display: 'none' }}>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAILGUN_DOMAIN" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAILGUN DOMAIN</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="MAILGUN_DOMAIN" defaultValue="test@altoromutual.com" placeholder="MAILGUN DOMAIN" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAILGUN_SECRET" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAILGUN SECRET</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="MAILGUN_SECRET" defaultValue="test@altoromutual.com" placeholder="MAILGUN SECRET" />
                        </div>
                      </div>
                    </div> */}

                    <div className="form-group mb-3 text-right">
                      <button type="submit" className="btn btn-primary" fdprocessedid="dlzb0h">Update</button>
                    </div>
                  </form>
                </div>
              </div>

              {/* <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Test SMTP configuration</h5>
                </div>
                <div className="card-body">
                  <form action="https://weddemoadmin.abaris.in/admin/newsletter/test/smtp" method="post">
                    <input type="hidden" name="_token" defaultValue="TL7gVYMMi3cj9D3J88UFc4u0yeb2JH9IB6LAucU5" />                        <div className="row">
                      <div className="col">
                        <input type="email" className="form-control" name="email" defaultValue="admin@example.com" placeholder="Enter your email address" fdprocessedid="qz4gfh" />
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary" fdprocessedid="6t71wr">Send test email</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}

            </div>
            <div className="col-md-6">
              <Instruction />
            </div>
          </div>
        </div>
        {/* Footer */}
        <ToastContainer />
      </div>

    </>
  )
}
export default SmptSettings 