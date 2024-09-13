import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from "../../../../common/tostShow/TostShow";
import { ToastContainer } from "react-toastify";
import { getAllNexmoCredentialD, updateNexmoCredentialD } from "../../../../api/Api";


function NexmoCredential() {
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [inputVal, setInputval] = useState({
    is_active: null,
    key: "",
    secret: '',
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
      const res = await updateNexmoCredentialD(payloadData);
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
      const res = await getAllNexmoCredentialD();
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
          <h5 className="mb-0 h6">Nexmo Credential</h5>
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
                <label className="col-from-label">NEXMO KEY</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" value={inputVal?.key}
                  onChange={handleChange} name="key" placeholder="NEXMO KEY" required />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-lg-3">
                <label className="col-from-label">NEXMO SECRET</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" value={inputVal?.secret}
                  onChange={handleChange} name="secret" placeholder="NEXMO SECRET" required />
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
export default NexmoCredential;