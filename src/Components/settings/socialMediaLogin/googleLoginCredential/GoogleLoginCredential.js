import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from "../../../../common/tostShow/TostShow";
import { getAllGoogleLoginD, updateGoogleLoginD } from "../../../../api/Api";
import { ToastContainer } from "react-toastify";


function GoogleLogInCredential() {
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [inputVal, setInputval] = useState({
    id: "",
    secret_key: "",
    is_active: null,
    slug: "",
  });
  const handleChange = (e) => {
    const inpVal = e.target.value;
    const inpName = e.target.name;
    const cloned = { ...inputVal };
    cloned[inpName] = inpVal;
    setInputval(cloned);
  };

  const handleSubmitData = async (e) => {
    const payloadData = { ...inputVal, is_active:isActive};
    console.log(payloadData);
    e.preventDefault();
    try {
      setLoading(true)
      const res = await updateGoogleLoginD(payloadData);
      console.log("updateDataResponse---", res);
      if (res?.error === false) {
        toastSuccessMessage(res?.message);
        setTimeout(() => {
          window.location.reload()
          // navigate('../blog-all-Post')
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
      const res = await getAllGoogleLoginD();
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
                  <h5 className="mb-0 h6">Google Login Credential</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmitData}
                  >
                    <div className="form-group row">
                      <div className="col-md-3">
                        <label className="col-from-label">Activation</label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            name="google_login_activation"
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
                        <label className="col-from-label">Client ID</label>
                      </div>
                      <div className="col-md-7">
                        <input
                          type="text"
                          className="form-control"
                          name="id"
                          value={inputVal?.id}
                          onChange={handleChange}
                          placeholder="Google Client ID"
                          required
                          fdprocessedid="8wj238"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-lg-3">
                        <label className="col-from-label">Client Secret</label>
                      </div>
                      <div className="col-md-7">
                        <input
                          type="text"
                          className="form-control"
                          name="secret_key"
                          value={inputVal?.secret_key}
                          onChange={handleChange}
                          placeholder="Google Client Secret"
                          required
                          fdprocessedid="6itf3o"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-lg-3">
                        <label className="col-from-label">Slug</label>
                      </div>
                      <div className="col-md-7">
                        <input
                          type="text"
                          className="form-control"
                          name="slug"
                          value={inputVal?.slug}
                          onChange={handleChange}
                          placeholder="slug"
                          required
                          fdprocessedid="6itf3o"
                        />
                      </div>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="e0iovo"
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
export default GoogleLogInCredential