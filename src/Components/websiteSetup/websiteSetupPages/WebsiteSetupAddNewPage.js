import React, { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom';
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { AddPagesD, getPagesById, updatePageD } from '../../../api/Api';
import { ToastContainer } from 'react-toastify';

function WebsiteSetupAddNewPage() {
  const [body, setBody] = useState("");
  const handleBody = (e) => {
    setBody(e)
  };
  const [loading, setLoading] = useState(false);
  const [inputVal, setInputval] = useState({
    title: "",
    link: "",
    content: "",
    meta_title: "",
    meta_description: "",
    keywords: "",
    meta_image: "",
    slug: "",
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
    const payloadData = { ...inputVal, content: body };
    e.preventDefault();
    if (params?.id) {
      try {
        setLoading(true)
        const res = await updatePageD({ id: params?.id, data: payloadData });
        console.log("updateDataResponse---", res);
        if (res?.error === false) {
          toastSuccessMessage(res?.message);
          setTimeout(() => {
            navigate('../website/custom-pages')
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
        const res = await AddPagesD(payloadData);
        console.log("AddDataResponse---", res);
        if (res?.error === false) {
          toastSuccessMessage(res?.message);
          setTimeout(() => {
            navigate('../website/custom-pages')
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
      const res = await getPagesById(params?.id);
      console.log("getByIdResponse---", res);
      setInputval(res?.data);
      setBody(res?.data?.content)
      setLoading(false)
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getByIdData();
  }, [params?.id]);


  return (
    <>
      <div className="aiz-main-content">
      {loading && <div className="preloaderCount">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col">
                <h1 className="h3">{params?.id ? 'Update' : 'Add New'} Page</h1>
              </div>
            </div>
          </div>
          <div className="card">
            <form onSubmit={handleSubmitData}>
              <div className="card-header">
                <h6 className="fw-600 mb-0">Page Content</h6>
              </div>
              <div className="card-body">

                <div className="form-group row">
                  <label className="col-sm-2 col-from-label" htmlFor="name">Title <span className="text-danger">*</span></label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Title"  value={inputVal?.title}
                          onChange={handleChange} name="title" required fdprocessedid="412a5" />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-from-label" htmlFor="name">Link <span className="text-danger">*</span></label>
                  <div className="col-sm-10">
                    <div className="input-group d-block d-md-flex">
                      <div className="input-group-prepend "><span className="input-group-text flex-grow-1">https://weddemoadmin.abaris.in/</span></div>
                      <input type="text" className="form-control w-100 w-md-auto" placeholder="Link"  value={inputVal?.link}
                          onChange={handleChange} name="link" required fdprocessedid="yh8bg" />
                    </div>
                    <small className="form-text text-muted">Use character, number, hypen only</small>
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-from-label" htmlFor="name">Add Content <span className="text-danger">*</span></label>
                  <div className="col-sm-10">
                    <ReactQuill
                      placeholder='write something amazing...'
                      modules={WebsiteSetupAddNewPage.modules}
                      formats={WebsiteSetupAddNewPage.formats}
                      onChange={handleBody}
                      value={body}
                    />
                  </div>
                </div>
              </div>


              <div className="card-header">
                <h6 className="fw-600 mb-0">Seo Fields</h6>
              </div>
              <div className="card-body">

                <div className="form-group row">
                  <label className="col-sm-2 col-from-label" htmlFor="name">Meta Title</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Meta Title"  value={inputVal?.meta_title}
                          onChange={handleChange} name="meta_title" fdprocessedid="u5476p" />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-from-label" htmlFor="name">Slug</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Slug"  value={inputVal?.slug}
                          onChange={handleChange} name="slug" fdprocessedid="u5476p" />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-from-label" htmlFor="name">Meta Description</label>
                  <div className="col-sm-10">
                    <textarea className="resize-off form-control" placeholder="Description"  value={inputVal?.meta_description}
                          onChange={handleChange} name="meta_description"  />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-from-label" htmlFor="name">Keywords</label>
                  <div className="col-sm-10">
                    <textarea className="resize-off form-control"  value={inputVal?.keywords}
                          onChange={handleChange} placeholder="Keyword" name="keywords"  />
                    <small className="text-muted">Separate with coma</small>
                  </div>
                </div>

                <div className="form-group row">
                      <label
                        className="col-md-2 col-form-label"
                        htmlFor="signinSrEmail"
                      >
                        Meta Image
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          // value={inputVal?.meta_image}
                          onChange={handleChange}
                          type="file"
                          name="meta_image"
                        />
                      </div>
                    </div>

                <div className="text-right">
                  <button type="submit" className="btn btn-primary" fdprocessedid="klb32">{params?.id ? 'Update' : 'Save'} Page</button>
                </div>
              </div>

            </form>

          </div>
        </div>
        <ToastContainer />
      </div>

    </>
  )
}

export default WebsiteSetupAddNewPage

