// import { convertToRaw, EditorState } from "draft-js";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import { Editor } from "react-draft-wysiwyg";
import ReactQuill from "react-quill";
import '../../../../node_modules/react-quill/dist/quill.snow.css'
import { useNavigate, useParams } from "react-router-dom";
import { toastErrorMessage, toastSuccessMessage } from "../../../common/tostShow/TostShow";
import axios from "axios";
import { AddHappyStory, getHappyStoryById, updateHappyStory } from "../../../api/Api";
import { ToastContainer } from "react-toastify";



function EditHappyStories() {
  const [body, setBody] = useState("")
  const handleBody = (e) => {
    setBody(e)
  };


  const [loading, setLoading] = useState(false);
  const [allCategory, setAllCategory] = useState();
  const [showMetaImage, setShowMetaImage] = useState();
  const [showBannerImage, setShowBannerImage] = useState();
  const [inputVal, setInputval] = useState({
    title: "",
    details: "",
    partner_name: "",
    profile: "",
    video_provider: "",
    video_link: "",
    approved: true
  });
  const handleChange = (e) => {
    const inpVal = e.target.value;
    const inpName = e.target.name;
    const cloned = { ...inputVal };
    cloned[inpName] = inpVal;
    setInputval(cloned);
  };

  const params = useParams();
  const navigate = useNavigate();

  const handleSubmitData = async (e) => {
    const payloadData = { ...inputVal, details: body };
    e.preventDefault();
    if (params?.id) {
      try {
        setLoading(true)
        const res = await updateHappyStory({ id: params?.id, data: payloadData });
        console.log("updateDataResponse---", res);
        if (res?.error === false) {
          toastSuccessMessage(res?.message);
          setTimeout(() => {
            navigate('../happy-story')
          }, 5000);
        }
        setLoading(false)
      } catch (error) {
        toastErrorMessage(error?.message);
        setLoading(false);
      }
    } else {
      try {
        setLoading(true)
        const res = await AddHappyStory(payloadData);
        console.log("AddDataResponse---", res);
        if (res?.error === false) {
          toastSuccessMessage(res?.message);
          setTimeout(() => {
            navigate('../happy-story')
          }, 5000);
        }
        setLoading(false)
      } catch (error) {
        toastErrorMessage(error?.message);
        setLoading(false);
      }
    }

  };

  const getByIdData = async () => {
    try {
      setLoading(true)
      const res = await getHappyStoryById(params?.id);
      console.log("getByIdResponse---", res);
      setInputval(res?.data);
      setBody(res?.data?.details)
      setLoading(false)
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getByIdData();
  }, [params?.id]);



  const handleOnChangeImage = async (e) => {
    if (e.target.name == 'profile') {
      let balnkObj = {};
      const fromData = new FormData();
      fromData.append('image', e.target.files[0])
      try {
        setLoading(true)
        const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, fromData,);
        setShowMetaImage(res.data);
        balnkObj = res.data
      } catch (error) {

      };
      setLoading(false)
      fromData.delete('image')
    }
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
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">{params?.id ? 'Update' : 'Add'} Happy Story</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmitData}>

                    <div className="form-group ">
                      <label className="form-label" htmlFor="name">
                        Story Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={inputVal?.title}
                        onChange={handleChange}
                        className="form-control"
                        defaultValue="If I had a flower every time I thought of you, I could walk in my garden forever."
                        placeholder="Title"
                        required
                        fdprocessedid="0yirnh"
                      />
                    </div>

                    <div className="form-group">
                      <label className="from-label" htmlFor="name">
                        Story Details <span className="text-danger">*</span>
                      </label>
                      <ReactQuill
                        placeholder='write something amazing...'
                        modules={EditHappyStories.modules}
                        formats={EditHappyStories.formats}
                        onChange={handleBody}
                        value={body}
                      />
                    </div>

                    <div className="form-group">
                      <label className="from-label" htmlFor="name">
                        Partner Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="partner_name"
                        value={inputVal?.partner_name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Partner Name"
                        required
                        fdprocessedid="f1d6co"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="signinSrEmail">
                        Photos <span className="text-danger">*</span>
                      </label>
                      <div
                        className="input-group"
                        data-toggle="aizuploader"
                        data-type="image"
                        data-multiple="true"
                      >

                        <div className="col-md-12">
                          <input
                            className="form-control"
                            // value={inputVal?.meta_image}
                            onChange={handleOnChangeImage}
                            type="file"
                            name="profile"
                          />
                        </div>
                      </div>

                    </div>

                    {/* <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="signinSrEmail"
                      >
                        Photos
                      </label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          onChange={handleOnChangeImage}
                          type="file"
                          name="profile"
                        />
                      </div>
                    </div> */}

                    <div className="form-group ">
                      <label className="from-label">Video Provider</label>
                      <select className=" form-control aiz-selectpicker" name="video_provider" value={inputVal?.video_provider}
                        onChange={handleChange} aria-label="Default select example">
                        <option selected>Youtube</option>
                        <option value="Dailymotion">Dailymotion</option>
                        <option value="vimeo">vimeo</option>
                      </select>
                    </div>

                    <div className="form-group ">
                      <label className="from-label">Video Link</label>
                      <input
                        type="text"
                        name="video_link"
                        value={inputVal?.video_link}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Video Link"
                        fdprocessedid="ytmh4e"
                      />
                      <small className="text-muted">
                        Use proper link without extra parameter. Don't use short
                        share link/embeded iframe code.
                      </small>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        fdprocessedid="qqp5tc"
                      >
                        {params?.id ? 'Update' : 'Save'}
                      </button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <ToastContainer />
      </div>
    </>
  );
}

EditHappyStories.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']
  ]
};
EditHappyStories.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block'
]
export default EditHappyStories;
