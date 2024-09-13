import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function EditPackageInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Edit Package Info</h5>
                </div>
                <div className="card-body">
                  <form action="https://weddemoadmin.abaris.in/admin/packages/4" method="POST" encType="multipart/form-data">
                    <input name="_method" type="hidden" defaultValue="PATCH" />
                    <input type="hidden" name="_token" defaultValue="eNJhbdkEMu4D498sV9cRd0FRXFdbQCRUEeNzC3zL" />                        <div className="form-group row">
                      <label className="col-md-3 col-form-label">Name</label>
                      <div className="col-md-9">
                        <input type="text" name="name" defaultValue="Gold Package" className="form-control" placeholder="Package Name" required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Price</label>
                      <div className="col-md-9">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              $                                    </span>
                          </div>
                          <input type="number" name="price" defaultValue={50} className="form-control" placeholder="Price" min={0} required />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Package Image</label>
                      <div className="col-md-9">
                        <div className="input-group" onClick={() => setLgShow(true)} data-type="image">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary font-weight-medium" onClick={handleShow}>Browse</div>
                          </div>
                          <div className="form-control file-amount" onClick={handleShow}>1 File selected</div>
                          <input type="hidden" name="package_image" className="selected-files" defaultValue={182} />
                        </div>
                        <div className="file-preview box sm">
                          <div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={182} title="Group 8175.png">
                            <div className="align-items-center align-self-stretch d-flex justify-content-center thumb">
                              <img src="//weddemoadmin.abaris.in/public/uploads/all/RMTKXAZIB1cN2RA8GLgbhs8DmGl0qj01ACRlEFCG.png" className="img-fit" />
                            </div>
                            <div className="col body">
                              <h6 className="d-flex">
                                <span className="text-truncate title">Group 8175</span>
                                <span className="ext">.png</span>
                              </h6>
                              <p>4 KB</p>
                            </div>
                            <div className="remove">
                              <button className="btn btn-sm btn-link remove-attachment" type="button">
                                <i className="la la-close" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Express Interest</label>
                      <div className="col-md-9">
                        <input type="number" name="express_interest" defaultValue={50} className="form-control" placeholder="Eg. 10" min={0} required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Photo Gallery</label>
                      <div className="col-md-9">
                        <input type="text" name="photo_gallery" defaultValue={60} className="form-control" placeholder="Eg. 10" required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Contact Info View</label>
                      <div className="col-md-9">
                        <input type="number" name="contact" defaultValue={15} className="form-control" placeholder="Eg. 10" required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="profile_image_view">Profile Image View</label>
                      <div className="col-md-9">
                        <input type="number" name="profile_image_view" defaultValue={0} id="profile_image_view" className="form-control" readOnly />
                        <small>This will work when the profile picture privacy is set as only me.</small>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="gallery_image_view">Gallery Image View</label>
                      <div className="col-md-9">
                        <input type="number" name="gallery_image_view" defaultValue={0} id="gallery_image_view" className="form-control" readOnly />
                        <small>This will work when the gallery image privacy is set as only me.</small>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Validity for</label>
                      <div className="col-md-9">
                        <div className="input-group">
                          <input type="number" name="validity" defaultValue={90} className="form-control" placeholder="Eg. 30" min={0} required />
                          <div className="input-group-prepend"><span className="input-group-text">Days</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Auto Profile Matching Show</label>
                      <div className="col-md-8 mt-3">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input type="checkbox" name="auto_profile_match" defaultChecked />
                          <span />
                        </label>
                      </div>
                    </div>
                    <div className="form-group mb-3 text-right">
                      <button type="submit" className="btn btn-primary">Update Package Info</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Modal
            dialogClassName='happy-modle'
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header className=' pb-0 bg-light'>
              <div className="uppy-modal-nav">
                <ul className="nav nav-tabs border-0">
                  <li className="nav-item">
                    <a className="nav-link active font-weight-medium text-dark" data-toggle="tab" href="#aiz-select-file">Select File</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link font-weight-medium text-dark" data-toggle="tab" href="#aiz-upload-new">Upload New</a>
                  </li>
                </ul>
              </div>
              <button type="button" className="close" onClick={() => setLgShow(false)} aria-label="Close" fdprocessedid="w2kyc5">
                <span aria-hidden="true" />
              </button>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-body">
                <div className="tab-content h-100">
                  <div className="tab-pane active h-100" id="aiz-select-file">
                    <div className="aiz-uploader-filter pt-1 pb-3 border-bottom mb-4">
                      <div className="row align-items-center gutters-5 gutters-md-10 position-relative">
                        <div className="col-xl-2 col-md-3 col-5">
                          <div className>
                            {/* Input */}
                            <select className="form-control form-control-xs aiz-selectpicker" name="aiz-uploader-sort" fdprocessedid="6otd5d">
                              <option value="newest" selected>Sort by newest</option>
                              <option value="oldest">Sort by oldest</option>
                              <option value="smallest">Sort by smallest</option>
                              <option value="largest">Sort by largest</option>
                            </select>
                            {/* End Input */}
                          </div>
                        </div>
                        <div className="col-md-3 col-5">
                          <div className="custom-control custom-radio">
                            <input type="checkbox" className="custom-control-input" name="aiz-show-selected" id="aiz-show-selected" />
                            <label className="custom-control-label" htmlFor="aiz-show-selected">
                              Selected Only
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 col-xl-3 ml-auto mr-0 col-2 position-static">
                          <div className="aiz-uploader-search text-right">
                            <input type="text" className="form-control form-control-xs" name="aiz-uploader-search" placeholder="Search your files" fdprocessedid="swjwuh" />
                            <i className="search-icon d-md-none"><span /></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="aiz-uploader-all clearfix c-scrollbar-light"><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-1.png" data-value={313}><div className="card-file-thumb">
                      <img src="//weddemoadmin.abaris.in/public/uploads/all/0xjA6CAGcczj5XM17pripJwBsGoH9ayiPV0huWf5.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-1</span><span className="ext">.png</span></h6><p>57 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="1.png" data-value={312}>
                        <div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/uBDARQfJpAEFuUlutaNEZbg6cIU3QabJo32hTh01.png" className="img-fit" />
                        </div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">1</span><span className="ext">.png</span></h6><p>781 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-2.png" data-value={311}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/V8ascFa3sAFZSw3wfZ0iQwdUrT5sJ7XPINsN9eo0.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex">
                          <span className="text-truncate title">M-2</span><span className="ext">.png</span></h6><p>70 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2.png" data-value={310}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/NbGjsZSmGSEOm25ZAG9RCJv9dYeP94Z2z0Dunwwj.png" className="img-fit" />
                          </div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2</span><span className="ext">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-3.png" data-value={309}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/XhymxhSGSS55vMDaba0QcX6T1ABHK8O3Q9rgQZE9.png" className="img-fit" />
                          </div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-3</span><span className="ext">.png</span></h6><p>60 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="3.png" data-value={308}><div className="card-file-thumb">
                            <img src="//weddemoadmin.abaris.in/public/uploads/all/ChVoOrArnZDuuTsd6VUkR7P8L15D4pKMzuiL9TQ0.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">3</span><span className="ext">.png</span></h6><p>832 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-4.png" data-value={307}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/mwGP4G1aqF5DtDxEI111bPP0QGE1xqFkiCkQbDMO.png" className="img-fit" />
                            </div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-4</span><span className="ext">.png</span></h6><p>74 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="4.png" data-value={306}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/tJAsCSW4HdIkyOs6Ny34OntGa8t9NaNgmOlNLPXU.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex">
                              <span className="text-truncate title">4</span><span className="ext">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-5.png" data-value={305}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/rxGUYkry7DQzWegMZ9VfYy6UjPiu2gWB7PKpX1P9.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-5</span><span className="ext">.png</span></h6><p>69 KB</p></div>
                              </div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="5.png" data-value={304}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/c8Nq9cfMecTVbcBW7K0HxsH7Zqw65choZnCu1pRg.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">5</span><span className="ext">.png</span></h6><p>1010 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false">
                        <div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="6.png" data-value={303}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/14Q4NZoCYMxIc33sY0ayS9SYH5Kf3fdCCGD59pB1.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">6</span><span className="ext">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false">
                        <div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress.jpg" data-value={302}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Ha3BoiWkO6b4vENPPTM7D5SeEMP6uImAsu5MBayW.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress</span><span className="ext">.jpg</span></h6><p>411 KB</p></div></div></div>
                      </div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="groom-bride-wedding-day.jpg" data-value={301}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/FZtTEKkOiKg6DkHwSnDDhN783QKS3HJgQW2qzZsb.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex">
                        <span className="text-truncate title">groom-bride-wedding-day</span><span className="ext">.jpg</span></h6><p>781 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day.jpg" data-value={300}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/xV2jN72ErCdpYe6aZ5vysEUmBqm2qiouz13Ut0MA.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day</span><span className="ext">.jpg</span></h6><p>315 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="wedding.jpg" data-value={299}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/WmTlHsgN9QazTwnPoAfUlkmqlJEE29i6GZMYyk6H.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">wedding</span><span className="ext">.jpg</span></h6><p>316 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false">
                        <div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="gorgeous-bride-handsome-groom-touching-by-faces-each-other.jpg" data-value={298}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Ge17HtrhIa4YTojwUa1LGDyJgYLZP1CpNlrDn3av.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">gorgeous-bride-handsome-groom-touching-by-faces-each-other</span><span className="ext">.jpg</span></h6><p>533 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false">
                        <div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit.jpg" data-value={297}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Z1N1XQGvZUU1BlpprntVmmiMdo80sIy638rnMQLD.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit</span><span className="ext">.jpg</span></h6><p>295 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box">
                          <div className="card card-file aiz-uploader-select" title="wedding-shot-bride-groom-park-romantic-scene-park.jpg" data-value={296}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/yYDTNN7ctub8KHPGXJcOuNM5LpP3xVLeTEEejyZS.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">wedding-shot-bride-groom-park-romantic-scene-park</span><span className="ext">.jpg</span></h6><p>234 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box">
                            <div className="card card-file aiz-uploader-select" title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg" data-value={295}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/kfLiYSgqrdD5t8KYrg9HJNZyERclSnbpyZXxJjb5.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation</span><span className="ext">.jpg</span></h6><p>313 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png" data-value={294}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/9xXI1UVwcgC0jB4s8WeAZQM0BHh55jAEfkL6wkkZ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro</span><span className="ext">.png</span></h6><p>19 KB</p></div></div></div></div>
                      <div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png" data-value={287}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/HKb4dap327ArsZtb12KXUNeFVCfbA7mZBqQIGrCw.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro</span><span className="ext">.png</span></h6><p>1 KB</p></div></div></div></div>
                      <div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="nicolas-horn-MTZTGvDsHFY-unsplash.jpg" data-value={286}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/NiLOYq4Y5Lap1Ek7QrZcpgXq6UGwcOGpd5RQoOMA.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">nicolas-horn-MTZTGvDsHFY-unsplash</span><span className="ext">.jpg</span></h6><p>105 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box">
                        <div className="card card-file aiz-uploader-select" title="medicalert-uk-uXB-7la5vqA-unsplash.jpg" data-value={278}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/KA9rZPh3DxXFiKIAWpBqEF35ycIsbF3DLboW2wvI.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">medicalert-uk-uXB-7la5vqA-unsplash</span><span className="ext">.jpg</span></h6><p>112 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="crop-elegant-newlyweds-near-lake.jpg" data-value={277}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/cEOhVAwkzGE51HebB3Ky9CwQU3vLyKnW4DRMQ1mt.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">crop-elegant-newlyweds-near-lake</span><span className="ext">.jpg</span>
                        </h6><p>230 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg" data-value={276}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/OkwfK3lo8BgrCkMuOA4NGeORw7g9ldcOp6ykrIeU.jpg" className="img-fit" /></div>
                          <div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation</span><span className="ext">.jpg</span></h6><p>195 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8070.png" data-value={274}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/mGjZwnY7801CUnPA31gqWcH9FUisUPHpMSlFDXBi.png" className="img-fit" /></div>
                            <div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8070</span><span className="ext">.png</span></h6><p>324 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg" data-value={273}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/M1QyKHaRWLrZa7h2EjTBsAdTLxzefYPRk6FyDbdq.jpg" className="img-fit" /></div>
                              <div className="card-body"><h6 className="d-flex"><span className="text-truncate title">dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other</span><span className="ext">.jpg</span></h6><p>130 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg" data-value={272}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Qo4cAGtMHA9feO1ikM81J6pIz0377AgLMUKz5Vx4.jpg" className="img-fit" /></div>
                                <div className="card-body"><h6 className="d-flex"><span className="text-truncate title">dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other</span><span className="ext">.jpg</span></h6><p>130 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk.jpg" data-value={271}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/TrEw2nVHuYzHWsE4OWgLxThJNYn3jHCjtswqUdf8.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk</span><span className="ext">.jpg</span></h6><p>158 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="18.png" data-value={265}><div className="card-file-thumb">
                                  <img src="//weddemoadmin.abaris.in/public/uploads/all/kimX2PnqPaTQt1YJWqudR6ipTmWfhxMrfCb4uTf0.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">18</span><span className="ext">.png</span></h6><p>898 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8176.png" data-value={256}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/ccZXfUBJdeI3nVlTaDjj5XktantwFNh70bYVXTJR.png" className="img-fit" /></div>
                                    <div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8176</span><span className="ext">.png</span></h6><p>6 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="christiana-rivers-3_mQjo4Vb6A-unsplash.jpg" data-value={238}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/BvZIgmLAshq3ZyDe12xoIKYTNq1TbdxJyrjgGLin.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">christiana-rivers-3_mQjo4Vb6A-unsplash</span><span className="ext">.jpg</span>
                                    </h6><p>348 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="sina-rezakhani-oaMLLJ02_D8-unsplash.jpg" data-value={229}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/sirm6XabTxY94S2TGIeocRNys8abWbBB0ad9FDc1.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">sina-rezakhani-oaMLLJ02_D8-unsplash</span><span className="ext">.jpg</span></h6><p>137 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box">
                                      <div className="card card-file aiz-uploader-select" title="alexandru-zdrobau--djRG1vB1pw-unsplash.jpg" data-value={228}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Yy47gZu8En7TUvRYra3zKpFJ1GMCJr08LWYUkPB6.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">alexandru-zdrobau--djRG1vB1pw-unsplash</span><span className="ext">.jpg</span></h6><p>401 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="tamara-bellis-2Tv7-O13hgk-unsplash.jpg" data-value={227}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/j1HdWFnVQIla2KMy8GOiXFi6XZ9tO7S8rx7bhKCQ.jpg" className="img-fit" />
                                      </div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">tamara-bellis-2Tv7-O13hgk-unsplash</span><span className="ext">.jpg</span></h6><p>259 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="freestocks-8a95EVm0ovQ-unsplash.jpg" data-value={226}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/kraX7i8EY934OpDokvwUqokiZZZKupmY9Jc89npf.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">freestocks-8a95EVm0ovQ-unsplash</span><span className="ext">.jpg</span></h6><p>266 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="austin-distel-7uoMmzPd2JA-unsplash.jpg" data-value={225}><div className="card-file-thumb">
                                        <img src="//weddemoadmin.abaris.in/public/uploads/all/Jfwa5H7XVPI6A2r5oZdVPkxLJIq8kCM5WMB7JPUZ.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">austin-distel-7uoMmzPd2JA-unsplash</span><span className="ext">.jpg</span></h6><p>273 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="nick-karvounis-JyO_szjGvUw-unsplash.jpg" data-value={224}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/JBNnlxl0aX4iRk2e3qCpjDca3WFBArAi4tSPJjeC.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">nick-karvounis-JyO_szjGvUw-unsplash</span><span className="ext">.jpg</span></h6><p>151 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box">
                                          <div className="card card-file aiz-uploader-select" title="jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg" data-value={223}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/ozTCQz5ogBXJa4PMDevIkOcGWGmqhhhwPE7zwR0M.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">jonas-kakaroto-mjRwhvqEC0U-unsplash</span><span className="ext">.jpg</span></h6><p>206 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8177.png" data-value={184}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/N3IeDw37QUFOxBUc8g96V7ya7Z4Rg1WJDLAD1BRO.png" className="img-fit" />
                                          </div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8177</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8176.png" data-value={183}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/1dD4w1xIQIViixofGwsq8LdKysEx4BDug5hdpys6.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8176</span><span className="ext">.png</span></h6><p>4 KB</p></div>
                                          </div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8175.png" data-value={182}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/RMTKXAZIB1cN2RA8GLgbhs8DmGl0qj01ACRlEFCG.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8175</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8178.png" data-value={181}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/zzOHNo1lfGayWCnT9xK1xHB8VjkAzOSnb14ibeup.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex">
                                            <span className="text-truncate title">Group 8178</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8174.png" data-value={180}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/UIOcsIe8TMVx6Rp7Wbx9ig5kw6X2g2rSxKUNsPNQ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8174</span><span className="ext">.png</span></h6><p>5 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false">
                        <div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8174.png" data-value={179}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/eVmkovaQ5fdbstdKsvLjZrVjYdT4Jem2O3nzQslQ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8174</span><span className="ext">.png</span></h6><p>5 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8173.png" data-value={178}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/uYGlmDARpbT2sjJ4x3YTm1GsFQ5I78GOa8lWgMQq.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8173</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 967.png" data-value={150}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/a1RdLfMfXtNqskauoZwEC94F8xAmbH16mhaGVHWh.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 967</span><span className="ext">.png</span></h6><p>3 KB</p></div>
                        </div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 961.png" data-value={151}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/vr2RFTrdbxEawbPyG8suCNyMVEvr05lGIQ6MX1Nz.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 961</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8005.png" data-value={147}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Zk2lj7FFjeGGYOhch3vtEAkxnnom4zPcWq1bV0tr.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex">
                          <span className="text-truncate title">Group 8005</span><span className="ext">.png</span></h6><p>401 Bytes</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Page-1.png" data-value={148}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/54adYPz3OC2PKzpgZF0rpnvR3qKeDMTikwOqNsMW.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Page-1</span><span className="ext">.png</span></h6><p>516 Bytes</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8006.png" data-value={149}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/5HxbGcXOowGkctJOQHm5CYETk4wIPutWs5eb3dlL.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8006</span><span className="ext">.png</span></h6><p>250 Bytes</p>
                          </div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8168.png" data-value={144}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/bB4GZnLSrquYOKA3lbH0JI5WKWEwznwXNvjbAEEU.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8168</span><span className="ext">.png</span></h6><p>3 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8002.png" data-value={145}><div className="card-file-thumb">
                            <img src="//weddemoadmin.abaris.in/public/uploads/all/D8IvIuVZ1XgBEbW8WNygx6JM0G6AVPKohVaHyj7X.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8002</span><span className="ext">.png</span></h6><p>3 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8169.png" data-value={146}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/zxhwmcnXiCd5WUb8V4GBLb7VkvXuEl2DHFUUD2sk.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8169</span><span className="ext">.png</span></h6><p>6 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false">
                        <div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8170.png" data-value={143}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/UgoHnTw7QRHMYhzI9MaeSRNvcIP8FxR1FaGNyY32.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8170</span><span className="ext">.png</span></h6><p>181 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8169.png" data-value={142}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/MKeWioNRNyyZSPAJoi6Cy99Jk7kJn8gJabqjEBQW.png" className="img-fit" />
                        </div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8169</span><span className="ext">.png</span></h6><p>185 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8168.png" data-value={141}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/SHlh3Cwc7RaNiiSyvNGmexFDLSYoHkRXlMQqvYwo.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8168</span><span className="ext">.png</span></h6><p>144 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="bannon-morrissy-RxiAV5LC-ww-unsplash.jpg" data-value={140}>
                          <div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/LH0T5CcaRM0dYSiFx1sSrNHQWKje7QtvFrngtGHL.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">bannon-morrissy-RxiAV5LC-ww-unsplash</span><span className="ext">.jpg</span></h6><p>133 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="radu-florin-YLr8qZeu6d4-unsplash.jpg" data-value={139}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Yu77XFn8brOtsiEiRzQgcqekDk1fBhEIBUd5WzjM.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">radu-florin-YLr8qZeu6d4-unsplash</span><span className="ext">.jpg</span></h6><p>166 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="everton-vila-AsahNlC0VhQ-unsplash.png" data-value={138}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Zo4yekKwhDtasX6uEl3cKZFei63iYAAvi2550jOr.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">everton-vila-AsahNlC0VhQ-unsplash</span><span className="ext">.png</span></h6><p>957 KB</p></div></div></div></div></div>
                  </div>
                  <div className="tab-pane h-100" id="aiz-upload-new">
                    <div id="aiz-upload-files" className="h-100">
                      <div className="uppy-Root uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--isInnerWrapVisible" aria-hidden="false" aria-label="File Uploader"><div className="uppy-Dashboard-overlay" tabIndex={-1} /><div className="uppy-Dashboard-inner" style={{ width: 750, height: 550 }}><div className="uppy-Dashboard-innerWrap"><div className="uppy-Dashboard-dropFilesHereHint">Drop your files here</div><div className="uppy-DashboardAddFiles"><input className="uppy-Dashboard-input" hidden aria-hidden="true" tabIndex={-1} type="file" name="files[]" multiple /><div className="uppy-DashboardTabs"><div className="uppy-Dashboard-dropFilesTitle">Drop files here, paste or <button type="button" className="uppy-u-reset uppy-Dashboard-browse">browse</button></div></div><div className="uppy-DashboardAddFiles-info" /></div><span /><span /><span /><div className="uppy-Dashboard-progressindicators"><div className="uppy-StatusBar is-waiting" aria-hidden="true"><div className="uppy-StatusBar-progress
                     " role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} style={{ width: '0%' }} /><div className="uppy-StatusBar-actions" /></div><div className="uppy uppy-Informer" aria-hidden="true"><p role="alert"> </p></div></div></div></div></div></div>
                  </div>
                </div>
              </div>

            </Modal.Body>
            <Modal.Footer className="modal-footer justify-content-between bg-light">
              <div className="flex-grow-1 overflow-hidden d-flex">
                <div className>
                  <div className="aiz-uploader-selected">1 File selected</div>
                  <button type="button" className="btn-link btn btn-sm p-0 aiz-uploader-selected-clear" fdprocessedid="kgz5so">Clear</button>
                </div>
                <div className="mb-0 ml-3">
                  <button type="button" className="btn btn-sm btn-primary me-1" id="uploader_prev_btn" disabled="disabled">Prev</button>
                  <button type="button" className="btn btn-sm btn-primary" id="uploader_next_btn" fdprocessedid="7gn0fi">Next</button>
                </div>
              </div>
              <button type="button" className="btn btn-sm btn-primary" data-toggle="aizUploaderAddSelected" fdprocessedid="ngsqez">Add Files</button>
            </Modal.Footer>
          </Modal>
        </div>

      </div>
    </>
  )
}
export default EditPackageInfo;