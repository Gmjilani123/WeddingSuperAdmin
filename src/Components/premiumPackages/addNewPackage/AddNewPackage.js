import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import first from '../../../assets/img/modalImg/first.png'
import c1 from '../../../assets/img/modalImg/c1.png'
import c2 from '../../../assets/img/modalImg/c2.png'
import c3 from '../../../assets/img/modalImg/c3.png'
import c4 from '../../../assets/img/modalImg/c4.png'
import { ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { AddPremiumPackage, getPremiumPackageById, updatePremiumPackage } from '../../../api/Api';
function AddNewPackage() {
  const [loading, setLoading] = useState(false);
  const [showPackageImage, setShowPackageImage] = useState();
  const [inputVal, setInputval] = useState({
    name: "",
    price: "",
    file: "",
    express_interest: "",
    gallery_upload: "",
    contact_info_view: "",
    gallery_image_view: "",
    profile_image_view: "",
    validity_for: "",
    auto_matching: true,
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
    console.log('payloadData--', inputVal)
    e.preventDefault();
    if (params?.id) {
      try {
        setLoading(true)
        const res = await updatePremiumPackage({ id: params?.id, data: inputVal });
        if (res?.error === false) {
          toastSuccessMessage(res?.message);
          setTimeout(() => {
            navigate('../packages')
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
        const res = await AddPremiumPackage(inputVal);
        if (res?.error === false) {
          toastSuccessMessage(res?.message);
          setTimeout(() => {
            navigate('../packages')
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
      const res = await getPremiumPackageById(params?.id);
      console.log("getByIdResponse---", res);
      setInputval(res?.data);
      setLoading(false)
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getByIdData();
  }, [params?.id]);


  const handleOnChangeImage = async (e) => {
    if (e.target.name == 'file') {
      let balnkObj = {};
      const fromData = new FormData();
      fromData.append('image', e.target.files[0])
      try {
        setLoading(true)
        const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, fromData,);
        setShowPackageImage(res.data);
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
                  <h5 className="mb-0 h6">{params?.id ? 'Update New Package' : 'Add New Package'}</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmitData}>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="name">Name</label>
                      <div className="col-md-9">
                        <input type="text" name="name" value={inputVal?.name}
                          onChange={handleChange} id="name" className="form-control" placeholder="Package Name" required />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="price">Price</label>
                      <div className="col-md-9">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              $
                            </span>
                          </div>
                          <input type="number" name="price" value={inputVal?.price}
                            onChange={handleChange} id="price" className="form-control" placeholder="Price" min={0} required />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="signinSrEmail"
                      >
                        Package Image
                      </label>
                      <div className="col-md-9">
                        <input
                          onChange={handleOnChangeImage}
                          className="form-control"
                          type="file"
                          name="file"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="signinSrEmail"
                      >

                      </label>
                      {/* <div className='col-lg-8'> <img src={showBannerImage?.url} style={{ width: '400px', height: '200px', objectFit: 'cover', margin: '12px', border: '1px solid black' }} />
                      </div> */}
                      <div className='col-lg-8'> <img src={inputVal?.file} style={{ width: '400px', height: '200px', objectFit: 'cover', margin: '12px', border: '1px solid black' }} />
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="express_interest">Express Interest</label>
                      <div className="col-md-9">
                        <input type="number" name="express_interest" value={inputVal?.express_interest}
                          onChange={handleChange} id="express_interest" className="form-control" placeholder="Eg. 10" min={0} required />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="photo_gallery">Gallery Photo Upload</label>
                      <div className="col-md-9">
                        <input type="number" name="gallery_upload" value={inputVal?.gallery_upload}
                          onChange={handleChange} id="gallery_upload" className="form-control" placeholder="Eg. 10" required />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="contact">Contact Info View</label>
                      <div className="col-md-9">
                        <input type="number" name="contact_info_view" value={inputVal?.contact_info_view}
                          onChange={handleChange} id="contact" className="form-control" placeholder="Eg. 10" required />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="profile_image_view">Profile Image View</label>
                      <div className="col-md-9">
                        <input type="number" name="profile_image_view" value={inputVal?.profile_image_view}
                          onChange={handleChange} id="profile_image_view" className="form-control" />
                        {/* <small>This will work when the profile picture privacy is set as only me.</small> */}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="gallery_image_view">Gallery Image View</label>
                      <div className="col-md-9">
                        <input type="number" name="gallery_image_view" value={inputVal?.gallery_image_view}
                          onChange={handleChange} id="gallery_image_view" className="form-control" />
                        {/* <small>This will work when the gallery image privacy is set as only me.</small> */}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Validity For</label>
                      <div className="col-md-9">
                        <div className="input-group">
                          <input type="number" name="validity_for" value={inputVal?.validity_for}
                            onChange={handleChange} className="form-control" placeholder="Eg. 30" min={0} required />
                          <div className="input-group-prepend"><span className="input-group-text">Days</span></div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Auto Profile Matching Show</label>
                      <div className="col-md-8 mt-3">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input type="checkbox" checked={inputVal?.auto_matching} name="auto_profile_match" />
                          <span />
                        </label>
                      </div>
                    </div>

                    <div className="form-group mb-3 text-right">
                      <button type="submit" className="btn btn-primary">{params?.id ? 'Update New Package' : 'Add New Package'}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>

    </>
  )
}
export default AddNewPackage;