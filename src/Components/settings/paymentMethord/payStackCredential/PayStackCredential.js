import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from "../../../../common/tostShow/TostShow";
import { getPayStackCredentialsD, updatePayStackCredentialsD } from "../../../../api/Api";

function PayStackCredential() {
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [inputVal, setInputval] = useState({
    is_active: null,
    public_key: "",
    secret_key: '',
    merchant_email: '',
    currency_code: '',
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
      const res = await updatePayStackCredentialsD(payloadData);
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
      const res = await getPayStackCredentialsD();
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
                  <h5 className="mb-0 h6 ">PayStack Credential</h5>
                </div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
                    onSubmit={handleSubmitData}
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
                        <label className="col-from-label">PUBLIC KEY</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="public_key"
                          value={inputVal?.public_key}
                          onChange={handleChange}
                          placeholder="PUBLIC KEY"
                          required
                          fdprocessedid="l039fi"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">SECRET KEY</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="secret_key"
                          value={inputVal?.secret_key}
                          onChange={handleChange}
                          placeholder="SECRET KEY"
                          required
                          fdprocessedid="tqu6ce"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">MERCHANT EMAIL</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="merchant_email"
                          value={inputVal?.merchant_email}
                          onChange={handleChange}
                          placeholder="MERCHANT EMAIL"
                          required
                          fdprocessedid="fhzptf"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">
                          PAYSTACK CURRENCY CODE
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="currency_code"
                          value={inputVal?.currency_code}
                          onChange={handleChange}
                          placeholder="PAYSTACK CURRENCY CODE"
                          required
                          fdprocessedid="vik3xg"
                        />
                      </div>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="g3w1o"
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
export default PayStackCredential