import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from "../../../../common/tostShow/TostShow";
import { getStripeCredentialsD, updateStripeCredentialsD } from "../../../../api/Api";

function StripeCredential () {
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [inputVal, setInputval] = useState({
    is_active: null,
    stripe_key: "",
    stripe_secret: '',
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
      const res = await updateStripeCredentialsD(payloadData);
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
      const res = await getStripeCredentialsD();
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
                  <h5 className="mb-0 h6 ">Stripe Credential</h5>
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
                        <label className="col-from-label">Stripe Key</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="stripe_key"
                          value={inputVal?.stripe_key}
                          onChange={handleChange}
                          placeholder="Stripe Key"
                          fdprocessedid="r8hare"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">Stripe Secret</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="stripe_secret"
                          value={inputVal?.stripe_secret}
                          onChange={handleChange}
                          placeholder="Stripe Secret"
                          fdprocessedid="s9c8oe"
                        />
                      </div>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="7ll7b"
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
export default StripeCredential