import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from "../../../../common/tostShow/TostShow";
import { getInstamojoCredentialsD, updateInstamojoCredentialsD } from "../../../../api/Api";

function InstamojoCredential() {
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const [inputVal, setInputval] = useState({
    is_active: null,
    api_key: "",
    auth_token: '',
    sandbox: null,
  });
  const handleChange = (e) => {
    const inpVal = e.target.value;
    const inpName = e.target.name;
    const cloned = { ...inputVal };
    cloned[inpName] = inpVal;
    setInputval(cloned);
  };

  const handleSubmitData = async (e) => {
    const payloadData = { ...inputVal, is_active: isActive,sandbox:isActive2 };
    console.log(payloadData);
    e.preventDefault();
    try {
      setLoading(true)
      const res = await updateInstamojoCredentialsD(payloadData);
      console.log("updateDataResponse---", res);
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
      const res = await getInstamojoCredentialsD();
      console.log("GoogleLoginres---", res);
      setInputval(res?.data);
      setIsActive(res?.data?.is_active);
      setIsActive2(res?.data?.sandbox);
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
  const handleCheckboxChange2 = (event) => {
    setIsActive2(event.target.checked);
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
                  <h5 className="mb-0 h6 ">Instamojo Credential</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmitData}
                  >
                    <div className="form-group row">
                      <div className="col-md-4">
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
                      <div className="col-md-4">
                        <label className="col-from-label">
                          Instamojo API Key
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="api_key"
                          value={inputVal?.api_key}
                          onChange={handleChange}
                          placeholder="Instamojo API Key"
                          fdprocessedid="wkyjzk"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">
                          Instamojo Auth Token
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="auth_token"
                          value={inputVal?.auth_token}
                          onChange={handleChange}
                          placeholder="Instamojo Auth Token"
                          fdprocessedid="2hx3r"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">
                          Instamojo Sandbox Mode
                        </label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            name="sandbox"
                            type="checkbox"
                            onChange={handleCheckboxChange2} 
                            checked={isActive2}
                          />
                          <span className="slider round" />
                        </label>
                      </div>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="8mvd8h"
                      >
                        Save
                      </button>
                    </div>

                  </form>
                </div>
                <ToastContainer />
              </div>
        </>
    )
}
export default InstamojoCredential