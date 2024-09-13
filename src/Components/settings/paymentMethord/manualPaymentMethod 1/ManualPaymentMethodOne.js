import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from "../../../../common/tostShow/TostShow";
import ReactQuill from "react-quill";
import { getManualPaymentCredentialsD, updateManualPaymentCredentialsD } from "../../../../api/Api";

function ManualPaymentMethordOne() {
  const [body, setBody] = useState("")
  const handleBody = (e) => {
    setBody(e)
  };

  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [inputVal, setInputval] = useState({
    is_active: null,
    name: "",
    instruction: '',
    image: '',
  });
  const handleChange = (e) => {
    const inpVal = e.target.value;
    const inpName = e.target.name;
    const cloned = { ...inputVal };
    cloned[inpName] = inpVal;
    setInputval(cloned);
  };

  const handleSubmitData = async (e) => {
    const payloadData = { ...inputVal, is_active: isActive,instruction: body};
    console.log(payloadData);
    e.preventDefault();
    try {
      setLoading(true)
      const res = await updateManualPaymentCredentialsD(payloadData);
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
      const res = await getManualPaymentCredentialsD();
      console.log("GoogleLoginres---", res);
      setInputval(res?.data);
      setIsActive(res?.data?.is_active);
      setBody(res?.data?.instruction);
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
          <h5 className="mb-0 h6 ">Manual Payment Method</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmitData}
          >
            <div className="form-group row">
              <div className="col-md-3">
                <label className="col-from-label">Activation</label>
              </div>
              <div className="col-md-9">
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
              <div className="col-md-3">
                <label className="col-from-label">Name</label>
              </div>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={inputVal?.name}
                  onChange={handleChange}
                  placeholder="Name"
                  fdprocessedid="ql8qsy"
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-3">
                <label className="col-from-label">Instruction</label>
              </div>
              <div className="col-md-9">
                <ReactQuill
                  placeholder='write something amazing...'
                  modules={ManualPaymentMethordOne.modules}
                  formats={ManualPaymentMethordOne.formats}
                  onChange={handleBody}
                  value={body}
                />
              </div>
            </div>


            <div className="form-group row">
              <label
                className="col-md-3 col-form-label"
                htmlFor="signinSrEmail"
              >
                Image
              </label>
              <div className="col-md-9">
                <input
                  className="form-control"
                  onChange={handleChange}
                  type="file"
                  name="image"
                />
              </div>
            </div>

            <div className="form-group mb-0 text-right">
              <button
                type="submit"
                className="btn btn-sm btn-primary"
                fdprocessedid="hiykcc"
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
// ManualPaymentMethordOne.modules = {
//   toolbar:[
//     [{header:'1'},{header:'2'}, {header:[3,4,5,6]}, {font:[]}],
//     [{size:[]}],
//     ['bold','italic','underline','strike','blockquote'],
//     [{list:'ordered'},{list:'bullet'}],
//     ['link','image','video'],
//     ['clean'],
//     ['code-block']
//   ]
// };
// ManualPaymentMethordOne.formats = [
//   'header',
//   'font',
//   'size',
//   'bold',
//   'italic',
//   'underline',
//   'strike',
//   'blockquote',
//   'list',
//   'bullet',
//   'link',
//   'image',
//   'video',
//   'code-block'
// ]
export default ManualPaymentMethordOne