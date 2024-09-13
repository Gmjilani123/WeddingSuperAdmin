import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from "../../../../common/tostShow/TostShow";
import { getAllTwitterD, updateTwitterD } from "../../../../api/Api";
import { ToastContainer } from "react-toastify";

function TwitterLoginCredential() {
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
      const res = await updateTwitterD(payloadData);
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
      const res = await getAllTwitterD();
      console.log("getAllTwitteres---", res);
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
                  <h5 className="mb-0 h6">Twitter Login Credential</h5>
                </div>
                <div className="card-body">
                  <form
                  onSubmit={handleSubmitData}
                  >
                    <div className="form-group row">
                      <div className="col-md-3">
                        <label className="col-from-label">Activation</label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            name="twitter_login_activation"
                            onChange={handleCheckboxChange} 
                            checked={isActive}
                            type="checkbox"
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
                          placeholder="Twitter Client ID"
                          required
                          fdprocessedid="on1tc7"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="TWITTER_CLIENT_SECRET"
                      />
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
                          placeholder="Twitter Client Secret"
                          required
                          fdprocessedid="4z5be"
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
                          placeholder="Slug"
                          required
                          fdprocessedid="6itf3o"
                        />
                      </div>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="qs0scr"
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
export default TwitterLoginCredential