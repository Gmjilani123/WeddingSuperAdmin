import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ReactQuill from "react-quill";
import '../../../../../node_modules/react-quill/dist/quill.snow.css'
import { useNavigate, useParams } from "react-router-dom";
import { toastErrorMessage, toastSuccessMessage } from "../../../../common/tostShow/TostShow";
import { AddBlogPost, getBlogPostById, getCategoryForSelector, updateBlogPost } from "../../../../api/Api";
import { ToastContainer } from "react-toastify";
import axios from "axios";

function Create() {
  const [body, setBody] = useState("");
  const handleBody = (e) => {
    setBody(e)
  };

  const [loading, setLoading] = useState(false);
  const [allCategory, setAllCategory] = useState();
  const [showMetaImage, setShowMetaImage] = useState();
  const [showBannerImage, setShowBannerImage] = useState();
  const [inputVal, setInputval] = useState({
    title: "",
    category_id: "",
    slug: "",
    banner_image: "",
    short_description: "",
    meta_title: "",
    meta_keyword: "",
    meta_image: "",
    meta_description: "",
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
    const payloadData = { ...inputVal, description: body };
    e.preventDefault();
    if (params?.id) {
      try {
        setLoading(true)
        const res = await updateBlogPost({ id: params?.id, data: payloadData });
        console.log("updateDataResponse---", res);
        if (res?.error === false) {
          toastSuccessMessage(res?.message);
          setTimeout(() => {
            navigate('../blog-all-Post')
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
        const res = await AddBlogPost(payloadData);
        console.log("AddDataResponse---", res);
        if (res?.error === false) {
          toastSuccessMessage(res?.message);
          setTimeout(() => {
            navigate('../blog-all-Post')
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
      const res = await getBlogPostById(params?.id);
      console.log("getByIdResponse---", res);
      setInputval(res?.data);
      setBody(res?.data?.description)
      setLoading(false)
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getByIdData();
  }, [params?.id]);

  const getSelectorData = async () => {
    try {
      const res = await getCategoryForSelector();
      setAllCategory(res?.data);
    } catch (error) {
    }
  };
  useEffect(() => {
    getSelectorData();
  }, []);


  const handleOnChangeImage = async (e) => {
    if (e.target.name === 'banner_image') {
      let arr = [];
      const fromData = new FormData();
      const arrs = [...e.target.files]
      for (let index = 0; index < arrs.length; index++) {
        const element = arrs[index];
        fromData.append('image', element)
        try {
          setLoading(true)
          const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, fromData,);
          setShowBannerImage(res.data);
          arr.push(res.data)
        } catch (error) {

        };
        setLoading(false)
        fromData.delete('image')
      }
    } else if (e.target.name == 'meta_image') {
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
                  <h5 className="mb-0 h6">{params?.id ? 'Update' : 'Add'} Blog Information</h5>
                </div>
                <div className="card-body">
                  <form
                    onSubmit={handleSubmitData}
                    className="form-horizontal"
                  >
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">
                        Blog Title
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          placeholder="Blog Title"
                          name="title"
                          value={inputVal?.title}
                          onChange={handleChange}
                          className="form-control"
                          required
                          fdprocessedid="4dwpqh"
                        />
                      </div>
                    </div>

                    <div className="form-group row" id="category">
                      <label className="col-md-3 col-from-label">
                        Category
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <select className="form-select form-control" name="category_id"
                          value={inputVal?.category_id} onChange={handleChange} aria-label="Default select example">
                          <option selected>Select Category</option>
                          {allCategory && allCategory?.map((item, i) => {
                            return <option value={item?._id} key={i}>{item?.category_name}</option>
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">
                        Slug
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          placeholder="Slug"
                          name="slug"
                          value={inputVal?.slug} onChange={handleChange}
                          id="slug"
                          className="form-control"
                          required
                          fdprocessedid="st54m"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="signinSrEmail"
                      >
                        Banner
                        <small>(1300x650)+</small>
                      </label>
                      <div className="col-md-9">
                        <input
                          // value={inputVal?.banner_image}
                          onChange={handleOnChangeImage}
                          className="form-control"
                          type="file"
                          name="banner_image"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="signinSrEmail"
                      >

                      </label>
                      <div className='col-lg-8'> <img src={showBannerImage?.url} style={{ width: '400px', height: '200px', objectFit: 'cover', margin: '12px', border: '1px solid black' }} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">
                        Short Description
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <textarea
                          name="short_description"
                          value={inputVal?.short_description} onChange={handleChange}
                          rows={5}
                          className="form-control"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-from-label">
                        Description
                      </label>
                      <div className="col-md-9">
                        <ReactQuill
                          placeholder='write something amazing...'
                          modules={Create.modules}
                          formats={Create.formats}
                          onChange={handleBody}
                          value={body}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">
                        Meta Title
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          name="meta_title"
                          value={inputVal?.meta_title} onChange={handleChange}
                          placeholder="Meta Title"
                          fdprocessedid="husag"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="signinSrEmail"
                      >
                        Meta Image
                        <small>(200x200)+</small>
                      </label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          // value={inputVal?.meta_image}
                          onChange={handleOnChangeImage}
                          type="file"
                          name="meta_image"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="signinSrEmail"
                      >

                      </label>
                      <div className='col-lg-8'>
                        {/* <img src={showMetaImage?.url} style={{ width: '400px', height: '200px', objectFit: 'cover', margin: '12px', border: '1px solid black' }} /> */}
                        <img src={inputVal?.meta_image} style={{ width: '400px', height: '200px', objectFit: 'cover', margin: '12px', border: '1px solid black' }} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">
                        Meta Description
                      </label>
                      <div className="col-md-9">
                        <textarea
                          name="meta_description"
                          value={inputVal?.meta_description} onChange={handleChange}
                          rows={5}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">
                        Meta Keywords
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          id="meta_keywords"
                          name="meta_keyword"
                          value={inputVal?.meta_keyword} onChange={handleChange}
                          placeholder="Meta Keywords"
                          fdprocessedid="sgy85"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        fdprocessedid="am6vxe"
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
        <ToastContainer />
        {/* Footer */}
      </div>
    </>
  );
}

Create.modules = {
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
Create.formats = [
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
export default Create;
