import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from "../../../../common/tostShow/TostShow";
import { ToastContainer } from "react-toastify";
import { getAllSslCredentialD, updateSslCredentialD } from "../../../../api/Api";


function SslWirelessCredential() {

  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [inputVal, setInputval] = useState({
    is_active: null,
    api_token: "",
    sms_id: '',
    sms_url: '',
  });
  const handleChange = (e) => {
    const inpVal = e.target.value;
    const inpName = e.target.name;
    const cloned = { ...inputVal };
    cloned[inpName] = inpVal;
    setInputval(cloned);
  };

  const handleSubmitData = async (e) => {
    const payloadData = { ...inputVal, is_active: isActive};
    console.log(payloadData);
    e.preventDefault();
    try {
      setLoading(true)
      const res = await updateSslCredentialD(payloadData);
      if (res?.error === false) {
        toastSuccessMessage(res?.message);
        setTimeout(() => {
          window.location.reload()
        }, 3000);
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
      const res = await getAllSslCredentialD();
      setInputval(res?.data);
      setIsActive(res?.data?.is_active);
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
      <div className="card">
      {loading && <div className="preloaderCount">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
        <div className="card-header">
          <h5 className="mb-0 h6">SSL Wireless Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" onSubmit={handleSubmitData}>

            <div className="form-group row">
              <div className="col-md-3">
                <label className="col-from-label">Activation</label>
              </div>
              <div className="col-md-8">
                <label className="aiz-switch aiz-switch-success mb-0">
                  <input 
                    name="is_active"
                    type="checkbox"
                    onChange={handleCheckboxChange} 
                    checked={isActive}
                  />
                  <span className="slider round" />
                </label>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-lg-3">
                <label className="col-from-label">SSL SMS API TOKEN</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" value={inputVal?.api_token}
                  onChange={handleChange} name="api_token" placeholder="SSL SMS API TOKEN" required />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-lg-3">
                <label className="col-from-label">SSL SMS SID</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" value={inputVal?.sms_id}
                  onChange={handleChange} name="sms_id" placeholder="SSL SMS SID" required />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-lg-3">
                <label className="col-from-label">SSL SMS URL</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" value={inputVal?.sms_url}
                  onChange={handleChange} name="sms_url" placeholder="SSL SMS URL" />
              </div>
            </div>

            <div className="form-group mb-0 text-right">
              <button type="submit" className="btn btn-sm btn-primary">Save</button>
            </div>

          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}
export default SslWirelessCredential;