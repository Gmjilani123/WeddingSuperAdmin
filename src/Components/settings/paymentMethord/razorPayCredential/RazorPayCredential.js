import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from "../../../../common/tostShow/TostShow";
import { getRazorpayCredentialsD, updateRazorpayCredentialsD } from "../../../../api/Api";

function RazorPayCredential() {
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [inputVal, setInputval] = useState({
    is_active: null,
    client_key: "",
    client_secret: '',
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
      const res = await updateRazorpayCredentialsD(payloadData);
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
      const res = await getRazorpayCredentialsD();
      console.log("GoogleLoginres---", res);
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
                  <h5 className="mb-0 h6 ">RazorPay Credential</h5>
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
                        <label className="col-from-label">Razorpay Key</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="client_key"
                          value={inputVal?.client_key}
                          onChange={handleChange}
                          placeholder="Razorpay Key"
                          fdprocessedid="e6gw7t"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">
                          Razorpay Secret
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="client_secret"
                          value={inputVal?.client_secret}
                          onChange={handleChange}
                          placeholder="Razorpay Secret"
                          fdprocessedid="3daztk"
                        />
                      </div>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="eepnf9"
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
export default RazorPayCredential