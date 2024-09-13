import { useState } from "react";
import { Modal } from "react-bootstrap";
import ReactQuill from "react-quill";
import '../../../../../node_modules/react-quill/dist/quill.snow.css'

function EditBlogPost() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
   
    const [body,setBody] = useState("")
    const handleBody = (e) => {
      setBody(e)
     }

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Blog Information</h5>
                </div>
                <div className="card-body">
                  <form
                    id="add_form"
                    className="form-horizontal"
                    action="https://weddemoadmin.abaris.in/admin/blog/6"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="VMCG0GyPLbYV3TMHzAvLcJNaqB7QY8AdRLyMvY5V"
                    />{" "}
                    <input type="hidden" name="_method" defaultValue="PATCH" />{" "}
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">
                        Blog Title
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          placeholder="Blog Title"
                          onkeyup="makeSlug(this.value)"
                          id="title"
                          name="title"
                          defaultValue="What do successful relationships and successful businesses have in common?"
                          className="form-control"
                          required
                          fdprocessedid="lt9fo"
                        />
                      </div>
                    </div>
                    <div className="form-group row" id="category">
                      <label className="col-md-3 col-from-label">
                        Category
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="category_id"
                            id="category_id"
                            data-live-search="true"
                            required
                            data-selected={1}
                            tabIndex={-98}
                          >
                            <option value={1}>Weeding Tips</option>
                            <option value={2}>Life Partner</option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-1"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            data-id="category_id"
                            title="Weeding Tips"
                            fdprocessedid="y2sji5"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  Weeding Tips
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div className="bs-searchbox">
                              <input
                                type="search"
                                className="form-control"
                                autoComplete="off"
                                role="combobox"
                                aria-label="Search"
                                aria-controls="bs-select-1"
                                aria-autocomplete="list"
                              />
                            </div>
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-1"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Slug</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          placeholder="Slug"
                          name="slug"
                          id="slug"
                          defaultValue="what-do-successful-relationships-and-successful-businesses-have-in-common"
                          className="form-control"
                          required
                          fdprocessedid="mjgz8"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="signinSrEmail"
                      >
                        Banner
                        <small>(1300x650)</small>
                      </label>
                      <div className="col-md-9">
                        <div
                          className="input-group"
                          data-toggle="aizuploader"
                          data-type="image"
                        >
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary font-weight-medium">
                              Browse
                            </div>
                          </div>
                          <div className="form-control file-amount" onClick={handleShow}>
                            1 File selected
                          </div>
                          <input
                            type="hidden"
                            name="banner"
                            className="selected-files"
                            defaultValue={312}
                          />
                        </div>

                        <Modal show={show} onHide={handleClose} dialogClassName='happy-modle'>
                          <Modal.Header closeButton>
                            <div className="uppy-modal-nav">
                              <ul className="nav nav-tabs border-0">
                                <li className="nav-item">
                                  <a className="nav-link font-weight-medium text-dark active" data-toggle="tab" href="#aiz-select-file">Select File</a>
                                </li>
                                <li className="nav-item">
                                  <div class="input-group">
                                    <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                  </div>
                                </li>
                              </ul>
                            </div>

                          </Modal.Header>
                          <Modal.Body>
                            {/* <div className="modal-body"> */}
                            <div className="tab-content h-100">
                              <div className="tab-pane active h-100" id="aiz-select-file">
                                <div className="aiz-uploader-filter pt-1 pb-3 border-bottom mb-4">
                                  <div className="row align-items-center gutters-5 gutters-md-10 position-relative">
                                    <div className="col-xl-2 col-md-3 col-5">
                                      <div className>
                                        {/* Input */}
                                        <select className="form-control form-control-xs aiz-selectpicker" name="aiz-uploader-sort" fdprocessedid="q0h7pa">
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
                                        <input type="text" className="form-control form-control-xs" name="aiz-uploader-search" placeholder="Search your files" fdprocessedid="e4ta" />
                                        <i className="search-icon d-md-none"><span /></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="aiz-uploader-all clearfix c-scrollbar-light"><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-1.png" data-value={313}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/0xjA6CAGcczj5XM17pripJwBsGoH9ayiPV0huWf5.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-1</span><span className="ext">.png</span></h6><p>57 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="1.png" data-value={312}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/uBDARQfJpAEFuUlutaNEZbg6cIU3QabJo32hTh01.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">1</span><span className="ext">.png</span></h6><p>781 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-2.png" data-value={311}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/V8ascFa3sAFZSw3wfZ0iQwdUrT5sJ7XPINsN9eo0.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-2</span><span className="ext">.png</span></h6><p>70 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2.png" data-value={310}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/NbGjsZSmGSEOm25ZAG9RCJv9dYeP94Z2z0Dunwwj.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2</span><span className="ext">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-3.png" data-value={309}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/XhymxhSGSS55vMDaba0QcX6T1ABHK8O3Q9rgQZE9.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-3</span><span className="ext">.png</span></h6><p>60 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="3.png" data-value={308}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/ChVoOrArnZDuuTsd6VUkR7P8L15D4pKMzuiL9TQ0.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">3</span><span className="ext">.png</span></h6><p>832 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-4.png" data-value={307}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/mwGP4G1aqF5DtDxEI111bPP0QGE1xqFkiCkQbDMO.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-4</span><span className="ext">.png</span></h6><p>74 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="4.png" data-value={306}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/tJAsCSW4HdIkyOs6Ny34OntGa8t9NaNgmOlNLPXU.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">4</span><span className="ext">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-5.png" data-value={305}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/rxGUYkry7DQzWegMZ9VfYy6UjPiu2gWB7PKpX1P9.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-5</span><span className="ext">.png</span></h6><p>69 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="5.png" data-value={304}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/c8Nq9cfMecTVbcBW7K0HxsH7Zqw65choZnCu1pRg.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">5</span><span className="ext">.png</span></h6><p>1010 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="6.png" data-value={303}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/14Q4NZoCYMxIc33sY0ayS9SYH5Kf3fdCCGD59pB1.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">6</span><span className="ext">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress.jpg" data-value={302}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Ha3BoiWkO6b4vENPPTM7D5SeEMP6uImAsu5MBayW.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress</span><span className="ext">.jpg</span></h6><p>411 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="groom-bride-wedding-day.jpg" data-value={301}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/FZtTEKkOiKg6DkHwSnDDhN783QKS3HJgQW2qzZsb.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">groom-bride-wedding-day</span><span className="ext">.jpg</span></h6><p>781 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day.jpg" data-value={300}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/xV2jN72ErCdpYe6aZ5vysEUmBqm2qiouz13Ut0MA.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day</span><span className="ext">.jpg</span></h6><p>315 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="wedding.jpg" data-value={299}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/WmTlHsgN9QazTwnPoAfUlkmqlJEE29i6GZMYyk6H.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">wedding</span><span className="ext">.jpg</span></h6><p>316 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="gorgeous-bride-handsome-groom-touching-by-faces-each-other.jpg" data-value={298}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Ge17HtrhIa4YTojwUa1LGDyJgYLZP1CpNlrDn3av.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">gorgeous-bride-handsome-groom-touching-by-faces-each-other</span><span className="ext">.jpg</span></h6><p>533 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit.jpg" data-value={297}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Z1N1XQGvZUU1BlpprntVmmiMdo80sIy638rnMQLD.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit</span><span className="ext">.jpg</span></h6><p>295 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="wedding-shot-bride-groom-park-romantic-scene-park.jpg" data-value={296}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/yYDTNN7ctub8KHPGXJcOuNM5LpP3xVLeTEEejyZS.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">wedding-shot-bride-groom-park-romantic-scene-park</span><span className="ext">.jpg</span></h6><p>234 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg" data-value={295}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/kfLiYSgqrdD5t8KYrg9HJNZyERclSnbpyZXxJjb5.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation</span><span className="ext">.jpg</span></h6><p>313 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png" data-value={294}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/9xXI1UVwcgC0jB4s8WeAZQM0BHh55jAEfkL6wkkZ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro</span><span className="ext">.png</span></h6><p>19 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png" data-value={287}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/HKb4dap327ArsZtb12KXUNeFVCfbA7mZBqQIGrCw.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro</span><span className="ext">.png</span></h6><p>1 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="nicolas-horn-MTZTGvDsHFY-unsplash.jpg" data-value={286}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/NiLOYq4Y5Lap1Ek7QrZcpgXq6UGwcOGpd5RQoOMA.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">nicolas-horn-MTZTGvDsHFY-unsplash</span><span className="ext">.jpg</span></h6><p>105 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="medicalert-uk-uXB-7la5vqA-unsplash.jpg" data-value={278}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/KA9rZPh3DxXFiKIAWpBqEF35ycIsbF3DLboW2wvI.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">medicalert-uk-uXB-7la5vqA-unsplash</span><span className="ext">.jpg</span></h6><p>112 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="crop-elegant-newlyweds-near-lake.jpg" data-value={277}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/cEOhVAwkzGE51HebB3Ky9CwQU3vLyKnW4DRMQ1mt.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">crop-elegant-newlyweds-near-lake</span><span className="ext">.jpg</span></h6><p>230 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg" data-value={276}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/OkwfK3lo8BgrCkMuOA4NGeORw7g9ldcOp6ykrIeU.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation</span><span className="ext">.jpg</span></h6><p>195 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8070.png" data-value={274}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/mGjZwnY7801CUnPA31gqWcH9FUisUPHpMSlFDXBi.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8070</span><span className="ext">.png</span></h6><p>324 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg" data-value={273}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/M1QyKHaRWLrZa7h2EjTBsAdTLxzefYPRk6FyDbdq.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other</span><span className="ext">.jpg</span></h6><p>130 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg" data-value={272}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Qo4cAGtMHA9feO1ikM81J6pIz0377AgLMUKz5Vx4.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other</span><span className="ext">.jpg</span></h6><p>130 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk.jpg" data-value={271}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/TrEw2nVHuYzHWsE4OWgLxThJNYn3jHCjtswqUdf8.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk</span><span className="ext">.jpg</span></h6><p>158 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="18.png" data-value={265}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/kimX2PnqPaTQt1YJWqudR6ipTmWfhxMrfCb4uTf0.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">18</span><span className="ext">.png</span></h6><p>898 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8176.png" data-value={256}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/ccZXfUBJdeI3nVlTaDjj5XktantwFNh70bYVXTJR.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8176</span><span className="ext">.png</span></h6><p>6 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="christiana-rivers-3_mQjo4Vb6A-unsplash.jpg" data-value={238}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/BvZIgmLAshq3ZyDe12xoIKYTNq1TbdxJyrjgGLin.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">christiana-rivers-3_mQjo4Vb6A-unsplash</span><span className="ext">.jpg</span></h6><p>348 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="sina-rezakhani-oaMLLJ02_D8-unsplash.jpg" data-value={229}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/sirm6XabTxY94S2TGIeocRNys8abWbBB0ad9FDc1.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">sina-rezakhani-oaMLLJ02_D8-unsplash</span><span className="ext">.jpg</span></h6><p>137 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="alexandru-zdrobau--djRG1vB1pw-unsplash.jpg" data-value={228}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Yy47gZu8En7TUvRYra3zKpFJ1GMCJr08LWYUkPB6.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">alexandru-zdrobau--djRG1vB1pw-unsplash</span><span className="ext">.jpg</span></h6><p>401 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="tamara-bellis-2Tv7-O13hgk-unsplash.jpg" data-value={227}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/j1HdWFnVQIla2KMy8GOiXFi6XZ9tO7S8rx7bhKCQ.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">tamara-bellis-2Tv7-O13hgk-unsplash</span><span className="ext">.jpg</span></h6><p>259 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="freestocks-8a95EVm0ovQ-unsplash.jpg" data-value={226}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/kraX7i8EY934OpDokvwUqokiZZZKupmY9Jc89npf.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">freestocks-8a95EVm0ovQ-unsplash</span><span className="ext">.jpg</span></h6><p>266 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="austin-distel-7uoMmzPd2JA-unsplash.jpg" data-value={225}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Jfwa5H7XVPI6A2r5oZdVPkxLJIq8kCM5WMB7JPUZ.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">austin-distel-7uoMmzPd2JA-unsplash</span><span className="ext">.jpg</span></h6><p>273 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="nick-karvounis-JyO_szjGvUw-unsplash.jpg" data-value={224}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/JBNnlxl0aX4iRk2e3qCpjDca3WFBArAi4tSPJjeC.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">nick-karvounis-JyO_szjGvUw-unsplash</span><span className="ext">.jpg</span></h6><p>151 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg" data-value={223}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/ozTCQz5ogBXJa4PMDevIkOcGWGmqhhhwPE7zwR0M.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">jonas-kakaroto-mjRwhvqEC0U-unsplash</span><span className="ext">.jpg</span></h6><p>206 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8177.png" data-value={184}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/N3IeDw37QUFOxBUc8g96V7ya7Z4Rg1WJDLAD1BRO.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8177</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8176.png" data-value={183}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/1dD4w1xIQIViixofGwsq8LdKysEx4BDug5hdpys6.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8176</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8175.png" data-value={182}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/RMTKXAZIB1cN2RA8GLgbhs8DmGl0qj01ACRlEFCG.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8175</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8178.png" data-value={181}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/zzOHNo1lfGayWCnT9xK1xHB8VjkAzOSnb14ibeup.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8178</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8174.png" data-value={180}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/UIOcsIe8TMVx6Rp7Wbx9ig5kw6X2g2rSxKUNsPNQ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8174</span><span className="ext">.png</span></h6><p>5 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8174.png" data-value={179}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/eVmkovaQ5fdbstdKsvLjZrVjYdT4Jem2O3nzQslQ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8174</span><span className="ext">.png</span></h6><p>5 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8173.png" data-value={178}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/uYGlmDARpbT2sjJ4x3YTm1GsFQ5I78GOa8lWgMQq.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8173</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 967.png" data-value={150}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/a1RdLfMfXtNqskauoZwEC94F8xAmbH16mhaGVHWh.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 967</span><span className="ext">.png</span></h6><p>3 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 961.png" data-value={151}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/vr2RFTrdbxEawbPyG8suCNyMVEvr05lGIQ6MX1Nz.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 961</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8005.png" data-value={147}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Zk2lj7FFjeGGYOhch3vtEAkxnnom4zPcWq1bV0tr.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8005</span><span className="ext">.png</span></h6><p>401 Bytes</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Page-1.png" data-value={148}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/54adYPz3OC2PKzpgZF0rpnvR3qKeDMTikwOqNsMW.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Page-1</span><span className="ext">.png</span></h6><p>516 Bytes</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8006.png" data-value={149}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/5HxbGcXOowGkctJOQHm5CYETk4wIPutWs5eb3dlL.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8006</span><span className="ext">.png</span></h6><p>250 Bytes</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8168.png" data-value={144}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/bB4GZnLSrquYOKA3lbH0JI5WKWEwznwXNvjbAEEU.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8168</span><span className="ext">.png</span></h6><p>3 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8002.png" data-value={145}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/D8IvIuVZ1XgBEbW8WNygx6JM0G6AVPKohVaHyj7X.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8002</span><span className="ext">.png</span></h6><p>3 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8169.png" data-value={146}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/zxhwmcnXiCd5WUb8V4GBLb7VkvXuEl2DHFUUD2sk.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8169</span><span className="ext">.png</span></h6><p>6 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8170.png" data-value={143}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/UgoHnTw7QRHMYhzI9MaeSRNvcIP8FxR1FaGNyY32.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8170</span><span className="ext">.png</span></h6><p>181 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8169.png" data-value={142}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/MKeWioNRNyyZSPAJoi6Cy99Jk7kJn8gJabqjEBQW.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8169</span><span className="ext">.png</span></h6><p>185 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8168.png" data-value={141}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/SHlh3Cwc7RaNiiSyvNGmexFDLSYoHkRXlMQqvYwo.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8168</span><span className="ext">.png</span></h6><p>144 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="bannon-morrissy-RxiAV5LC-ww-unsplash.jpg" data-value={140}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/LH0T5CcaRM0dYSiFx1sSrNHQWKje7QtvFrngtGHL.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">bannon-morrissy-RxiAV5LC-ww-unsplash</span><span className="ext">.jpg</span></h6><p>133 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="radu-florin-YLr8qZeu6d4-unsplash.jpg" data-value={139}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Yu77XFn8brOtsiEiRzQgcqekDk1fBhEIBUd5WzjM.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">radu-florin-YLr8qZeu6d4-unsplash</span><span className="ext">.jpg</span></h6><p>166 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="everton-vila-AsahNlC0VhQ-unsplash.png" data-value={138}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Zo4yekKwhDtasX6uEl3cKZFei63iYAAvi2550jOr.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">everton-vila-AsahNlC0VhQ-unsplash</span><span className="ext">.png</span></h6><p>957 KB</p></div></div></div></div></div>
                              </div>
                              <div className="tab-pane h-100" id="aiz-upload-new">
                                <div id="aiz-upload-files" className="h-100">
                                  <div className="uppy-Root uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--isInnerWrapVisible" aria-hidden="false" aria-label="File Uploader"><div className="uppy-Dashboard-overlay" tabIndex={-1} /><div className="uppy-Dashboard-inner" style={{ width: 750, height: 550 }}><div className="uppy-Dashboard-innerWrap"><div className="uppy-Dashboard-dropFilesHereHint">Drop your files here</div><div className="uppy-DashboardAddFiles"><input className="uppy-Dashboard-input" hidden aria-hidden="true" tabIndex={-1} type="file" name="files[]" multiple /><div className="uppy-DashboardTabs"><div className="uppy-Dashboard-dropFilesTitle">Drop files here, paste or <button type="button" className="uppy-u-reset uppy-Dashboard-browse">browse</button></div></div><div className="uppy-DashboardAddFiles-info" /></div><span /><span /><span /><div className="uppy-Dashboard-progressindicators"><div className="uppy-StatusBar is-waiting" aria-hidden="true"><div className="uppy-StatusBar-progress
                     " role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} style={{ width: '0%' }} /><div className="uppy-StatusBar-actions" /></div><div className="uppy uppy-Informer" aria-hidden="true"><p role="alert"> </p></div></div></div></div></div></div>
                              </div>
                            </div>
                            {/* </div> */}

                          </Modal.Body>
                          <Modal.Footer className="modal-footer justify-content-between bg-light">

                            {/* <div className="modal-footer justify-content-between bg-light"> */}
                            <div className="flex-grow-1 overflow-hidden d-flex">
                              <div className>
                                <div className="aiz-uploader-selected">1 File selected</div>
                                <button type="button" className="btn-link btn btn-sm p-0 aiz-uploader-selected-clear" fdprocessedid="rw2oth">Clear</button>
                              </div>
                              <div className="mb-0 ml-3">
                                <button type="button" className="btn btn-sm btn-primary mr-2" id="uploader_prev_btn" disabled="disabled">Prev</button>
                                <button type="button" className="btn btn-sm btn-primary" id="uploader_next_btn" fdprocessedid="2oxviv">Next</button>
                              </div>
                            </div>
                            <button type="button" className="btn btn-sm btn-primary" data-toggle="aizUploaderAddSelected" fdprocessedid="cohrl">Add Files</button>
                            {/* </div> */}

                            {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
                          </Modal.Footer>
                        </Modal>
                        <div className="file-preview box sm">
                          <div
                            className="d-flex justify-content-between align-items-center mt-2 file-preview-item"
                            data-id={312}
                            title="1.png"
                          >
                            <div className="align-items-center align-self-stretch d-flex justify-content-center thumb">
                              <img
                                src="//weddemoadmin.abaris.in/public/uploads/all/uBDARQfJpAEFuUlutaNEZbg6cIU3QabJo32hTh01.png"
                                className="img-fit"
                              />
                            </div>
                            <div className="col body">
                              <h6 className="d-flex">
                                <span className="text-truncate title">1</span>
                                <span className="ext">.png</span>
                              </h6>
                              <p>781 KB</p>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-link remove-attachment"
                                type="button"
                                fdprocessedid="9oz1i"
                              >
                                <i className="la la-close" />
                              </button>
                            </div>

                          </div>
                        </div>
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
                          rows={5}
                          className="form-control"
                          defaultValue={
                            "The leaders have a vision for the future and meet regularly to plan how to achieve their goals. Most couples stop thinking critically about their relationship after the initial honeymoon stage."
                          }
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
    modules={EditBlogPost.modules}
    formats={EditBlogPost.formats}
    onChange={handleBody}
    value={body}
    />
                      </div>
                      {/* <div className="col-md-9">
                        <textarea
                          className="aiz-text-editor"
                          name="description"
                          style={{ display: "none" }}
                          defaultValue={
                            '<p style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; color: rgb(35, 40, 45);">Most couples stop thinking critically about their relationship after the<strong style="font-weight: bold; font-family: inherit; font-style: inherit; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;">&nbsp;</strong><a href="https://www.couples-counseling-now.com/relationship-stages/" style="color: rgb(177, 177, 87); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: inherit; font-style: inherit; font-weight: bold; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;">initial</a><strong style="font-weight: bold; font-family: inherit; font-style: inherit; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;"><br></strong><a href="https://www.couples-counseling-now.com/relationship-stages/" style="color: rgb(177, 177, 87); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: inherit; font-style: inherit; font-weight: bold; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;">honeymoon stage</a>. When they start living together or they get married, they just assume that things will work out. Imagine that the co-creators of a new start-up say this to each other: “Well, now that we started the company, we don’t need to talk about it anymore”. And yet, this is what couples often do:&nbsp;<a href="https://www.couples-counseling-now.com/grown-up-love-its-not-what-you-think/" style="color: rgb(177, 177, 87); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: inherit; font-style: inherit; font-weight: bold; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;">They expect the relationship to be stable and flourish</a>, even though they don’t meet regularly to plan problem-solving strategies to meet their goals and review their original vision. As you can imagine, this is untenable.</p><p style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; color: rgb(35, 40, 45);"><strong style="font-weight: bold; font-family: inherit; font-style: inherit; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;"><img draggable="false" role="img" class="emoji" alt="🤔" src="https://s.w.org/images/core/emoji/13.1.0/svg/1f914.svg" style="max-width: 100%; vertical-align: -0.1em !important; height: 1em !important; display: inline !important; border-width: initial !important; border-color: initial !important; border-image: initial !important; box-shadow: none !important; width: 1em !important; margin: 0px 0.07em !important; background: none !important; padding: 0px !important;">&nbsp;So, what are the secrets of today’s successful couples?</strong><br>They schedule meetings regularly to make their own rules, create their own roles, solve some of their problems and discuss their vision.</p><p style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; color: rgb(35, 40, 45);"><strong style="font-weight: bold; font-family: inherit; font-style: inherit; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;">Successful couples have three kinds of meetings:</strong></p><ol style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; padding-left: 1.5em; color: rgb(35, 40, 45);"><li style="font-family: inherit; font-style: inherit; font-weight: inherit; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; margin-bottom: 0.5em;"><strong style="font-weight: bold; font-family: inherit; font-style: inherit; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;">Hang out meetings</strong>: These are just for fun. No serious discussions!</li><li style="font-family: inherit; font-style: inherit; font-weight: inherit; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; margin-bottom: 0.5em;"><strong style="font-weight: bold; font-family: inherit; font-style: inherit; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;">Division of labor and calendar meetings</strong>. The more complicated your life, the more you need them! Come prepared to tweak a routine that is no longer working for you, or have a difficult conversation about&nbsp;<a href="https://www.couples-counseling-now.com/money-talk-for-couples-how-to-discuss-finances/" style="color: rgb(177, 177, 87); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: inherit; font-style: inherit; font-weight: bold; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;">finances.</a>&nbsp;This is also where you plan who does what, when.</li><li style="font-family: inherit; font-style: inherit; font-weight: inherit; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; margin-bottom: 0.5em;"><strong style="font-weight: bold; font-family: inherit; font-style: inherit; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;">State of the relationship meetings</strong>. This is the one where you create your relationship vision by design.</li></ol><p style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; color: rgb(35, 40, 45);">Here is why you need a state of the related meetings.</p><p style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; color: rgb(35, 40, 45);">Not so long ago, relationships between men and women were based on a hierarchy—a pecking order. Men acted as the primary earners and decision-makers, and women served as the caretakers of all tasks related to children and the home. Roles were clearly defined and rarely questioned, and each half of a couple knew how he or she was expected to behave.</p><p style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; color: rgb(35, 40, 45);">Men and women also operated in largely separate spheres following the known rules, obligations, and duties of their gender and their social class. Divorce in the middle class was unheard of and there were dire consequences for women if they fell outside the norms. The happiness of each member of the couple was definitely not the reason for marriage which was actually based on the need to get good in-laws, combine farmlands, or bear children.</p><p style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; color: rgb(35, 40, 45);">Women often had the company of their mothers, sisters, friends, and neighbors and could confide in them when they needed advice on how to handle their men and their children.</p><p style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; color: rgb(35, 40, 45);">Most women didn’t need to rely upon their husbands for emotional support and their sexual longings weren’t even acknowledged. Men spent their days and many nights with male bosses and co-workers, didn’t necessarily have to rely on their wives to meet their sexual needs, and their emotional longings weren’t acknowledged.</p><p style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; color: rgb(35, 40, 45);">Enormous changes have occurred in a relatively short span of Western history. Women entered the workforce in droves, the pill made pregnancy voluntary, and a same-sex sexual orientation emerged from the shadows. Households and neighborhoods are no longer held together by the fibers of three or four generations. Most families cant survive on one income, roles are blurred, and expectations are high.</p><p style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; color: rgb(35, 40, 45);"><br>Most women (not to mention most men!) I know wouldn’t go back to that old, oppressive system for all the chocolate in Belgium. But, we’re still blindly fumbling our way out of the cave, even 50 years later. Today’s couples watched their parents and grandparents play out those predictable scenes and they have no role models for a 21<span style="font-family: inherit; font-size: 13.5px; font-style: inherit; font-weight: inherit; line-height: 0; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; height: 0px; position: relative; vertical-align: baseline; bottom: 1ex;">st</span>&nbsp;century, egalitarian relationship. We know we want equal partnerships, but what exactly does that mean?<br><br>We want our partners to be our best friends, fulfill our sexual fantasies, support our dreams, share our financial burdens, and accept our flaws. Sure, the divorce rate hovers around 50 percent, but given all that pressure, isn’t it remarkable how many couples do hold it together?<br><br>No longer forced to stay in unhappy relationships, couples of all persuasions wrestle with a myriad of questions day in and day out, the answers to which are individually demarcated and personal, and designed by each couple from scratch.<br><br>Take the time to consider what you witnessed growing up. Make conscious decisions about what you want to carry forward and what you want to discard. Some couples can do this on their own,&nbsp;<a href="https://www.couples-counseling-now.com/dont-wait-couples-counselor-why/" style="color: rgb(177, 177, 87); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: inherit; font-style: inherit; font-weight: bold; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;">others need help</a>.<br><br>Create your own relationship vision. Then, be prepared to stretch and reshape those goals, as some of your partners ideas will undoubtedly differ. Through the years, priorities and beliefs will shift, and you may need to return to the negotiating table a number of times. But, if you devote some energy early on to crafting a mutual definition of an equal partnership, you’ll have your own playbook and relationship rules to draw from.<br><br>When couples don’t intentionally think through some of these issues,&nbsp;<a href="https://www.couples-counseling-now.com/fix-unhealthy-relationship/" style="color: rgb(177, 177, 87); background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: inherit; font-style: inherit; font-weight: bold; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word;">confusion, anger, and resentment often take over</a>. Operating unwittingly from an old family playbook, partners push to assert their version as the right version. So, it’s worth the time, effort, and sometimes the struggle, to shed light on the following questions to design your own vision, with your own rules and expectations. It’s never too late to examine your own rules and beliefs, even if you have been together for a long time.</p><p style="margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; font-family: &quot;Open Sans&quot;, sans-serif; font-size: 18px; line-height: inherit; border: 0px; outline: 0px; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; color: rgb(35, 40, 45);"><br style="text-align: left;"></p>'
                          }
                        />
                        <div className="note-editor note-frame card">
                          <div className="note-dropzone">
                            <div className="note-dropzone-message" />
                          </div>
                          <div
                            className="note-toolbar card-header"
                            role="toolbar"
                          >
                            <div className="note-btn-group btn-group note-font">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm note-btn-bold"
                                tabIndex={-1}
                                title
                                aria-label="Bold (CTRL+B)"
                                data-original-title="Bold (CTRL+B)"
                              >
                                <i className="note-icon-bold" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm note-btn-underline"
                                tabIndex={-1}
                                title
                                aria-label="Underline (CTRL+U)"
                                data-original-title="Underline (CTRL+U)"
                              >
                                <i className="note-icon-underline" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm note-btn-italic"
                                tabIndex={-1}
                                title
                                aria-label="Italic (CTRL+I)"
                                data-original-title="Italic (CTRL+I)"
                              >
                                <i className="note-icon-italic" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Remove Font Style (CTRL+\)"
                                data-original-title="Remove Font Style (CTRL+\)"
                              >
                                <i className="note-icon-eraser" />
                              </button>
                            </div>
                            <div className="note-btn-group btn-group note-para">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Unordered list (CTRL+SHIFT+NUM7)"
                                data-original-title="Unordered list (CTRL+SHIFT+NUM7)"
                              >
                                <i className="note-icon-unorderedlist" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Ordered list (CTRL+SHIFT+NUM8)"
                                data-original-title="Ordered list (CTRL+SHIFT+NUM8)"
                              >
                                <i className="note-icon-orderedlist" />
                              </button>
                              <div className="note-btn-group btn-group">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm dropdown-toggle"
                                  tabIndex={-1}
                                  data-toggle="dropdown"
                                  title
                                  aria-label="Paragraph"
                                  data-original-title="Paragraph"
                                >
                                  <i className="note-icon-align-left" />
                                </button>
                                <div
                                  className="note-dropdown-menu dropdown-menu"
                                  role="list"
                                >
                                  <div className="note-btn-group btn-group note-align">
                                    <button
                                      type="button"
                                      className="note-btn btn btn-light btn-sm"
                                      tabIndex={-1}
                                      title
                                      aria-label="Align left (CTRL+SHIFT+L)"
                                      data-original-title="Align left (CTRL+SHIFT+L)"
                                    >
                                      <i className="note-icon-align-left" />
                                    </button>
                                    <button
                                      type="button"
                                      className="note-btn btn btn-light btn-sm"
                                      tabIndex={-1}
                                      title
                                      aria-label="Align center (CTRL+SHIFT+E)"
                                      data-original-title="Align center (CTRL+SHIFT+E)"
                                    >
                                      <i className="note-icon-align-center" />
                                    </button>
                                    <button
                                      type="button"
                                      className="note-btn btn btn-light btn-sm"
                                      tabIndex={-1}
                                      title
                                      aria-label="Align right (CTRL+SHIFT+R)"
                                      data-original-title="Align right (CTRL+SHIFT+R)"
                                    >
                                      <i className="note-icon-align-right" />
                                    </button>
                                    <button
                                      type="button"
                                      className="note-btn btn btn-light btn-sm"
                                      tabIndex={-1}
                                      title
                                      aria-label="Justify full (CTRL+SHIFT+J)"
                                      data-original-title="Justify full (CTRL+SHIFT+J)"
                                    >
                                      <i className="note-icon-align-justify" />
                                    </button>
                                  </div>
                                  <div className="note-btn-group btn-group note-list">
                                    <button
                                      type="button"
                                      className="note-btn btn btn-light btn-sm"
                                      tabIndex={-1}
                                      title
                                      aria-label="Outdent (CTRL+[)"
                                      data-original-title="Outdent (CTRL+[)"
                                    >
                                      <i className="note-icon-align-outdent" />
                                    </button>
                                    <button
                                      type="button"
                                      className="note-btn btn btn-light btn-sm"
                                      tabIndex={-1}
                                      title
                                      aria-label="Indent (CTRL+])"
                                      data-original-title="Indent (CTRL+])"
                                    >
                                      <i className="note-icon-align-indent" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="note-btn-group btn-group note-style">
                              <div className="note-btn-group btn-group">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm dropdown-toggle"
                                  tabIndex={-1}
                                  data-toggle="dropdown"
                                  title
                                  aria-label="Style"
                                  data-original-title="Style"
                                >
                                  <i className="note-icon-magic" />
                                </button>
                                <div
                                  className="note-dropdown-menu dropdown-menu dropdown-style"
                                  role="list"
                                  aria-label="Style"
                                >
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="p"
                                    role="listitem"
                                    aria-label="p"
                                  >
                                    <p>Normal</p>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="blockquote"
                                    role="listitem"
                                    aria-label="blockquote"
                                  >
                                    <blockquote className="blockquote">
                                      Blockquote
                                    </blockquote>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="pre"
                                    role="listitem"
                                    aria-label="pre"
                                  >
                                    <pre>Code</pre>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="h1"
                                    role="listitem"
                                    aria-label="h1"
                                  >
                                    <h1>Header 1</h1>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="h2"
                                    role="listitem"
                                    aria-label="h2"
                                  >
                                    <h2>Header 2</h2>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="h3"
                                    role="listitem"
                                    aria-label="h3"
                                  >
                                    <h3>Header 3</h3>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="h4"
                                    role="listitem"
                                    aria-label="h4"
                                  >
                                    <h4>Header 4</h4>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="h5"
                                    role="listitem"
                                    aria-label="h5"
                                  >
                                    <h5>Header 5</h5>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="h6"
                                    role="listitem"
                                    aria-label="h6"
                                  >
                                    <h6>Header 6</h6>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="note-btn-group btn-group note-color">
                              <div className="note-btn-group btn-group note-color note-color-all">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm note-current-color-button"
                                  tabIndex={-1}
                                  title
                                  aria-label="Recent Color"
                                  data-original-title="Recent Color"
                                  data-backcolor="#FFFF00"
                                  data-forecolor="#000000"
                                >
                                  <i
                                    className="note-icon-font note-recent-color"
                                    style={{
                                      backgroundColor: "rgb(255, 255, 0)",
                                      color: "rgb(0, 0, 0)",
                                    }}
                                  />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm dropdown-toggle"
                                  tabIndex={-1}
                                  data-toggle="dropdown"
                                  title
                                  aria-label="More Color"
                                  data-original-title="More Color"
                                />
                                <div
                                  className="note-dropdown-menu dropdown-menu"
                                  role="list"
                                >
                                  <div className="note-palette">
                                    <div className="note-palette-title">
                                      Background Color
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        className="note-color-reset btn btn-light"
                                        data-event="backColor"
                                        data-value="inherit"
                                      >
                                        Transparent
                                      </button>
                                    </div>
                                    <div
                                      className="note-holder"
                                      data-event="backColor"
                                    >
                                      <div className="note-color-palette">
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#000000",
                                            }}
                                            data-event="backColor"
                                            data-value="#000000"
                                            title
                                            aria-label="Black"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Black"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#424242",
                                            }}
                                            data-event="backColor"
                                            data-value="#424242"
                                            title
                                            aria-label="Tundora"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Tundora"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#636363",
                                            }}
                                            data-event="backColor"
                                            data-value="#636363"
                                            title
                                            aria-label="Dove Gray"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Dove Gray"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#9C9C94",
                                            }}
                                            data-event="backColor"
                                            data-value="#9C9C94"
                                            title
                                            aria-label="Star Dust"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Star Dust"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#CEC6CE",
                                            }}
                                            data-event="backColor"
                                            data-value="#CEC6CE"
                                            title
                                            aria-label="Pale Slate"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Pale Slate"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#EFEFEF",
                                            }}
                                            data-event="backColor"
                                            data-value="#EFEFEF"
                                            title
                                            aria-label="Gallery"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Gallery"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#F7F7F7",
                                            }}
                                            data-event="backColor"
                                            data-value="#F7F7F7"
                                            title
                                            aria-label="Alabaster"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Alabaster"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="White"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="White"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FF0000",
                                            }}
                                            data-event="backColor"
                                            data-value="#FF0000"
                                            title
                                            aria-label="Red"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Red"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FF9C00",
                                            }}
                                            data-event="backColor"
                                            data-value="#FF9C00"
                                            title
                                            aria-label="Orange Peel"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Orange Peel"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFF00",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFF00"
                                            title
                                            aria-label="Yellow"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Yellow"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#00FF00",
                                            }}
                                            data-event="backColor"
                                            data-value="#00FF00"
                                            title
                                            aria-label="Green"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Green"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#00FFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#00FFFF"
                                            title
                                            aria-label="Cyan"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Cyan"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#0000FF",
                                            }}
                                            data-event="backColor"
                                            data-value="#0000FF"
                                            title
                                            aria-label="Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#9C00FF",
                                            }}
                                            data-event="backColor"
                                            data-value="#9C00FF"
                                            title
                                            aria-label="Electric Violet"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Electric Violet"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FF00FF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FF00FF"
                                            title
                                            aria-label="Magenta"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Magenta"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#F7C6CE",
                                            }}
                                            data-event="backColor"
                                            data-value="#F7C6CE"
                                            title
                                            aria-label="Azalea"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Azalea"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFE7CE",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFE7CE"
                                            title
                                            aria-label="Karry"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Karry"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFEFC6",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFEFC6"
                                            title
                                            aria-label="Egg White"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Egg White"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#D6EFD6",
                                            }}
                                            data-event="backColor"
                                            data-value="#D6EFD6"
                                            title
                                            aria-label="Zanah"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Zanah"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#CEDEE7",
                                            }}
                                            data-event="backColor"
                                            data-value="#CEDEE7"
                                            title
                                            aria-label="Botticelli"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Botticelli"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#CEE7F7",
                                            }}
                                            data-event="backColor"
                                            data-value="#CEE7F7"
                                            title
                                            aria-label="Tropical Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Tropical Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#D6D6E7",
                                            }}
                                            data-event="backColor"
                                            data-value="#D6D6E7"
                                            title
                                            aria-label="Mischka"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Mischka"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#E7D6DE",
                                            }}
                                            data-event="backColor"
                                            data-value="#E7D6DE"
                                            title
                                            aria-label="Twilight"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Twilight"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#E79C9C",
                                            }}
                                            data-event="backColor"
                                            data-value="#E79C9C"
                                            title
                                            aria-label="Tonys Pink"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Tonys Pink"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFC69C",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFC69C"
                                            title
                                            aria-label="Peach Orange"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Peach Orange"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFE79C",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFE79C"
                                            title
                                            aria-label="Cream Brulee"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Cream Brulee"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#B5D6A5",
                                            }}
                                            data-event="backColor"
                                            data-value="#B5D6A5"
                                            title
                                            aria-label="Sprout"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Sprout"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#A5C6CE",
                                            }}
                                            data-event="backColor"
                                            data-value="#A5C6CE"
                                            title
                                            aria-label="Casper"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Casper"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#9CC6EF",
                                            }}
                                            data-event="backColor"
                                            data-value="#9CC6EF"
                                            title
                                            aria-label="Perano"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Perano"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#B5A5D6",
                                            }}
                                            data-event="backColor"
                                            data-value="#B5A5D6"
                                            title
                                            aria-label="Cold Purple"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Cold Purple"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#D6A5BD",
                                            }}
                                            data-event="backColor"
                                            data-value="#D6A5BD"
                                            title
                                            aria-label="Careys Pink"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Careys Pink"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#E76363",
                                            }}
                                            data-event="backColor"
                                            data-value="#E76363"
                                            title
                                            aria-label="Mandy"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Mandy"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#F7AD6B",
                                            }}
                                            data-event="backColor"
                                            data-value="#F7AD6B"
                                            title
                                            aria-label="Rajah"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Rajah"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFD663",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFD663"
                                            title
                                            aria-label="Dandelion"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Dandelion"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#94BD7B",
                                            }}
                                            data-event="backColor"
                                            data-value="#94BD7B"
                                            title
                                            aria-label="Olivine"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Olivine"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#73A5AD",
                                            }}
                                            data-event="backColor"
                                            data-value="#73A5AD"
                                            title
                                            aria-label="Gulf Stream"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Gulf Stream"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#6BADDE",
                                            }}
                                            data-event="backColor"
                                            data-value="#6BADDE"
                                            title
                                            aria-label="Viking"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Viking"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#8C7BC6",
                                            }}
                                            data-event="backColor"
                                            data-value="#8C7BC6"
                                            title
                                            aria-label="Blue Marguerite"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Blue Marguerite"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#C67BA5",
                                            }}
                                            data-event="backColor"
                                            data-value="#C67BA5"
                                            title
                                            aria-label="Puce"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Puce"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#CE0000",
                                            }}
                                            data-event="backColor"
                                            data-value="#CE0000"
                                            title
                                            aria-label="Guardsman Red"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Guardsman Red"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#E79439",
                                            }}
                                            data-event="backColor"
                                            data-value="#E79439"
                                            title
                                            aria-label="Fire Bush"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Fire Bush"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#EFC631",
                                            }}
                                            data-event="backColor"
                                            data-value="#EFC631"
                                            title
                                            aria-label="Golden Dream"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Golden Dream"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#6BA54A",
                                            }}
                                            data-event="backColor"
                                            data-value="#6BA54A"
                                            title
                                            aria-label="Chelsea Cucumber"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Chelsea Cucumber"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#4A7B8C",
                                            }}
                                            data-event="backColor"
                                            data-value="#4A7B8C"
                                            title
                                            aria-label="Smalt Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Smalt Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#3984C6",
                                            }}
                                            data-event="backColor"
                                            data-value="#3984C6"
                                            title
                                            aria-label="Boston Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Boston Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#634AA5",
                                            }}
                                            data-event="backColor"
                                            data-value="#634AA5"
                                            title
                                            aria-label="Butterfly Bush"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Butterfly Bush"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#A54A7B",
                                            }}
                                            data-event="backColor"
                                            data-value="#A54A7B"
                                            title
                                            aria-label="Cadillac"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Cadillac"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#9C0000",
                                            }}
                                            data-event="backColor"
                                            data-value="#9C0000"
                                            title
                                            aria-label="Sangria"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Sangria"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#B56308",
                                            }}
                                            data-event="backColor"
                                            data-value="#B56308"
                                            title
                                            aria-label="Mai Tai"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Mai Tai"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#BD9400",
                                            }}
                                            data-event="backColor"
                                            data-value="#BD9400"
                                            title
                                            aria-label="Buddha Gold"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Buddha Gold"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#397B21",
                                            }}
                                            data-event="backColor"
                                            data-value="#397B21"
                                            title
                                            aria-label="Forest Green"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Forest Green"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#104A5A",
                                            }}
                                            data-event="backColor"
                                            data-value="#104A5A"
                                            title
                                            aria-label="Eden"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Eden"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#085294",
                                            }}
                                            data-event="backColor"
                                            data-value="#085294"
                                            title
                                            aria-label="Venice Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Venice Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#311873",
                                            }}
                                            data-event="backColor"
                                            data-value="#311873"
                                            title
                                            aria-label="Meteorite"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Meteorite"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#731842",
                                            }}
                                            data-event="backColor"
                                            data-value="#731842"
                                            title
                                            aria-label="Claret"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Claret"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#630000",
                                            }}
                                            data-event="backColor"
                                            data-value="#630000"
                                            title
                                            aria-label="Rosewood"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Rosewood"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#7B3900",
                                            }}
                                            data-event="backColor"
                                            data-value="#7B3900"
                                            title
                                            aria-label="Cinnamon"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Cinnamon"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#846300",
                                            }}
                                            data-event="backColor"
                                            data-value="#846300"
                                            title
                                            aria-label="Olive"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Olive"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#295218",
                                            }}
                                            data-event="backColor"
                                            data-value="#295218"
                                            title
                                            aria-label="Parsley"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Parsley"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#083139",
                                            }}
                                            data-event="backColor"
                                            data-value="#083139"
                                            title
                                            aria-label="Tiber"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Tiber"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#003163",
                                            }}
                                            data-event="backColor"
                                            data-value="#003163"
                                            title
                                            aria-label="Midnight Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Midnight Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#21104A",
                                            }}
                                            data-event="backColor"
                                            data-value="#21104A"
                                            title
                                            aria-label="Valentino"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Valentino"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#4A1031",
                                            }}
                                            data-event="backColor"
                                            data-value="#4A1031"
                                            title
                                            aria-label="Loulou"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Loulou"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        className="note-color-select btn btn-light"
                                        data-event="openPalette"
                                        data-value="backColorPicker"
                                      >
                                        Select
                                      </button>
                                      <input
                                        type="color"
                                        id="backColorPicker"
                                        className="note-btn note-color-select-btn"
                                        defaultValue="#FFFF00"
                                        data-event="backColorPalette"
                                      />
                                    </div>
                                    <div
                                      className="note-holder-custom"
                                      id="backColorPalette"
                                      data-event="backColor"
                                    >
                                      <div className="note-color-palette">
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="note-palette">
                                    <div className="note-palette-title">
                                      Text Color
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        className="note-color-reset btn btn-light"
                                        data-event="removeFormat"
                                        data-value="foreColor"
                                      >
                                        Reset to default
                                      </button>
                                    </div>
                                    <div
                                      className="note-holder"
                                      data-event="foreColor"
                                    >
                                      <div className="note-color-palette">
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#000000",
                                            }}
                                            data-event="foreColor"
                                            data-value="#000000"
                                            title
                                            aria-label="Black"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Black"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#424242",
                                            }}
                                            data-event="foreColor"
                                            data-value="#424242"
                                            title
                                            aria-label="Tundora"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Tundora"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#636363",
                                            }}
                                            data-event="foreColor"
                                            data-value="#636363"
                                            title
                                            aria-label="Dove Gray"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Dove Gray"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#9C9C94",
                                            }}
                                            data-event="foreColor"
                                            data-value="#9C9C94"
                                            title
                                            aria-label="Star Dust"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Star Dust"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#CEC6CE",
                                            }}
                                            data-event="foreColor"
                                            data-value="#CEC6CE"
                                            title
                                            aria-label="Pale Slate"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Pale Slate"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#EFEFEF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#EFEFEF"
                                            title
                                            aria-label="Gallery"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Gallery"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#F7F7F7",
                                            }}
                                            data-event="foreColor"
                                            data-value="#F7F7F7"
                                            title
                                            aria-label="Alabaster"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Alabaster"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="White"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="White"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FF0000",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FF0000"
                                            title
                                            aria-label="Red"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Red"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FF9C00",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FF9C00"
                                            title
                                            aria-label="Orange Peel"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Orange Peel"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFF00",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFFF00"
                                            title
                                            aria-label="Yellow"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Yellow"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#00FF00",
                                            }}
                                            data-event="foreColor"
                                            data-value="#00FF00"
                                            title
                                            aria-label="Green"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Green"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#00FFFF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#00FFFF"
                                            title
                                            aria-label="Cyan"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Cyan"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#0000FF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#0000FF"
                                            title
                                            aria-label="Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#9C00FF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#9C00FF"
                                            title
                                            aria-label="Electric Violet"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Electric Violet"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FF00FF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FF00FF"
                                            title
                                            aria-label="Magenta"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Magenta"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#F7C6CE",
                                            }}
                                            data-event="foreColor"
                                            data-value="#F7C6CE"
                                            title
                                            aria-label="Azalea"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Azalea"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFE7CE",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFE7CE"
                                            title
                                            aria-label="Karry"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Karry"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFEFC6",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFEFC6"
                                            title
                                            aria-label="Egg White"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Egg White"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#D6EFD6",
                                            }}
                                            data-event="foreColor"
                                            data-value="#D6EFD6"
                                            title
                                            aria-label="Zanah"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Zanah"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#CEDEE7",
                                            }}
                                            data-event="foreColor"
                                            data-value="#CEDEE7"
                                            title
                                            aria-label="Botticelli"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Botticelli"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#CEE7F7",
                                            }}
                                            data-event="foreColor"
                                            data-value="#CEE7F7"
                                            title
                                            aria-label="Tropical Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Tropical Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#D6D6E7",
                                            }}
                                            data-event="foreColor"
                                            data-value="#D6D6E7"
                                            title
                                            aria-label="Mischka"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Mischka"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#E7D6DE",
                                            }}
                                            data-event="foreColor"
                                            data-value="#E7D6DE"
                                            title
                                            aria-label="Twilight"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Twilight"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#E79C9C",
                                            }}
                                            data-event="foreColor"
                                            data-value="#E79C9C"
                                            title
                                            aria-label="Tonys Pink"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Tonys Pink"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFC69C",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFC69C"
                                            title
                                            aria-label="Peach Orange"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Peach Orange"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFE79C",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFE79C"
                                            title
                                            aria-label="Cream Brulee"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Cream Brulee"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#B5D6A5",
                                            }}
                                            data-event="foreColor"
                                            data-value="#B5D6A5"
                                            title
                                            aria-label="Sprout"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Sprout"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#A5C6CE",
                                            }}
                                            data-event="foreColor"
                                            data-value="#A5C6CE"
                                            title
                                            aria-label="Casper"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Casper"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#9CC6EF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#9CC6EF"
                                            title
                                            aria-label="Perano"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Perano"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#B5A5D6",
                                            }}
                                            data-event="foreColor"
                                            data-value="#B5A5D6"
                                            title
                                            aria-label="Cold Purple"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Cold Purple"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#D6A5BD",
                                            }}
                                            data-event="foreColor"
                                            data-value="#D6A5BD"
                                            title
                                            aria-label="Careys Pink"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Careys Pink"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#E76363",
                                            }}
                                            data-event="foreColor"
                                            data-value="#E76363"
                                            title
                                            aria-label="Mandy"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Mandy"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#F7AD6B",
                                            }}
                                            data-event="foreColor"
                                            data-value="#F7AD6B"
                                            title
                                            aria-label="Rajah"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Rajah"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFD663",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFD663"
                                            title
                                            aria-label="Dandelion"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Dandelion"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#94BD7B",
                                            }}
                                            data-event="foreColor"
                                            data-value="#94BD7B"
                                            title
                                            aria-label="Olivine"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Olivine"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#73A5AD",
                                            }}
                                            data-event="foreColor"
                                            data-value="#73A5AD"
                                            title
                                            aria-label="Gulf Stream"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Gulf Stream"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#6BADDE",
                                            }}
                                            data-event="foreColor"
                                            data-value="#6BADDE"
                                            title
                                            aria-label="Viking"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Viking"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#8C7BC6",
                                            }}
                                            data-event="foreColor"
                                            data-value="#8C7BC6"
                                            title
                                            aria-label="Blue Marguerite"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Blue Marguerite"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#C67BA5",
                                            }}
                                            data-event="foreColor"
                                            data-value="#C67BA5"
                                            title
                                            aria-label="Puce"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Puce"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#CE0000",
                                            }}
                                            data-event="foreColor"
                                            data-value="#CE0000"
                                            title
                                            aria-label="Guardsman Red"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Guardsman Red"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#E79439",
                                            }}
                                            data-event="foreColor"
                                            data-value="#E79439"
                                            title
                                            aria-label="Fire Bush"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Fire Bush"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#EFC631",
                                            }}
                                            data-event="foreColor"
                                            data-value="#EFC631"
                                            title
                                            aria-label="Golden Dream"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Golden Dream"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#6BA54A",
                                            }}
                                            data-event="foreColor"
                                            data-value="#6BA54A"
                                            title
                                            aria-label="Chelsea Cucumber"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Chelsea Cucumber"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#4A7B8C",
                                            }}
                                            data-event="foreColor"
                                            data-value="#4A7B8C"
                                            title
                                            aria-label="Smalt Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Smalt Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#3984C6",
                                            }}
                                            data-event="foreColor"
                                            data-value="#3984C6"
                                            title
                                            aria-label="Boston Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Boston Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#634AA5",
                                            }}
                                            data-event="foreColor"
                                            data-value="#634AA5"
                                            title
                                            aria-label="Butterfly Bush"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Butterfly Bush"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#A54A7B",
                                            }}
                                            data-event="foreColor"
                                            data-value="#A54A7B"
                                            title
                                            aria-label="Cadillac"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Cadillac"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#9C0000",
                                            }}
                                            data-event="foreColor"
                                            data-value="#9C0000"
                                            title
                                            aria-label="Sangria"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Sangria"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#B56308",
                                            }}
                                            data-event="foreColor"
                                            data-value="#B56308"
                                            title
                                            aria-label="Mai Tai"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Mai Tai"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#BD9400",
                                            }}
                                            data-event="foreColor"
                                            data-value="#BD9400"
                                            title
                                            aria-label="Buddha Gold"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Buddha Gold"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#397B21",
                                            }}
                                            data-event="foreColor"
                                            data-value="#397B21"
                                            title
                                            aria-label="Forest Green"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Forest Green"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#104A5A",
                                            }}
                                            data-event="foreColor"
                                            data-value="#104A5A"
                                            title
                                            aria-label="Eden"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Eden"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#085294",
                                            }}
                                            data-event="foreColor"
                                            data-value="#085294"
                                            title
                                            aria-label="Venice Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Venice Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#311873",
                                            }}
                                            data-event="foreColor"
                                            data-value="#311873"
                                            title
                                            aria-label="Meteorite"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Meteorite"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#731842",
                                            }}
                                            data-event="foreColor"
                                            data-value="#731842"
                                            title
                                            aria-label="Claret"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Claret"
                                          />
                                        </div>
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#630000",
                                            }}
                                            data-event="foreColor"
                                            data-value="#630000"
                                            title
                                            aria-label="Rosewood"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Rosewood"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#7B3900",
                                            }}
                                            data-event="foreColor"
                                            data-value="#7B3900"
                                            title
                                            aria-label="Cinnamon"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Cinnamon"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#846300",
                                            }}
                                            data-event="foreColor"
                                            data-value="#846300"
                                            title
                                            aria-label="Olive"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Olive"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#295218",
                                            }}
                                            data-event="foreColor"
                                            data-value="#295218"
                                            title
                                            aria-label="Parsley"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Parsley"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#083139",
                                            }}
                                            data-event="foreColor"
                                            data-value="#083139"
                                            title
                                            aria-label="Tiber"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Tiber"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#003163",
                                            }}
                                            data-event="foreColor"
                                            data-value="#003163"
                                            title
                                            aria-label="Midnight Blue"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Midnight Blue"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#21104A",
                                            }}
                                            data-event="foreColor"
                                            data-value="#21104A"
                                            title
                                            aria-label="Valentino"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Valentino"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#4A1031",
                                            }}
                                            data-event="foreColor"
                                            data-value="#4A1031"
                                            title
                                            aria-label="Loulou"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="Loulou"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        className="note-color-select btn btn-light"
                                        data-event="openPalette"
                                        data-value="foreColorPicker"
                                      >
                                        Select
                                      </button>
                                      <input
                                        type="color"
                                        id="foreColorPicker"
                                        className="note-btn note-color-select-btn"
                                        defaultValue="#000000"
                                        data-event="foreColorPalette"
                                      />
                                    </div>
                                    <div
                                      className="note-holder-custom"
                                      id="foreColorPalette"
                                      data-event="foreColor"
                                    >
                                      <div className="note-color-palette">
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="note-btn-group btn-group note-table">
                              <div className="note-btn-group btn-group">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm dropdown-toggle"
                                  tabIndex={-1}
                                  data-toggle="dropdown"
                                  title
                                  aria-label="Table"
                                  data-original-title="Table"
                                >
                                  <i className="note-icon-table" />
                                </button>
                                <div
                                  className="note-dropdown-menu dropdown-menu note-table"
                                  role="list"
                                  aria-label="Table"
                                >
                                  <div className="note-dimension-picker">
                                    <div
                                      className="note-dimension-picker-mousecatcher"
                                      data-event="insertTable"
                                      data-value="1x1"
                                      style={{ width: "10em", height: "10em" }}
                                    />
                                    <div className="note-dimension-picker-highlighted" />
                                    <div className="note-dimension-picker-unhighlighted" />
                                  </div>
                                  <div className="note-dimension-display">
                                    1 x 1
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="note-btn-group btn-group note-insert">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Link (CTRL+K)"
                                data-original-title="Link (CTRL+K)"
                              >
                                <i className="note-icon-link" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Picture"
                                data-original-title="Picture"
                              >
                                <i className="note-icon-picture" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Video"
                                data-original-title="Video"
                              >
                                <i className="note-icon-video" />
                              </button>
                            </div>
                            <div className="note-btn-group btn-group note-view">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm btn-fullscreen"
                                tabIndex={-1}
                                title
                                aria-label="Full Screen"
                                data-original-title="Full Screen"
                              >
                                <i className="note-icon-arrows-alt" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Undo (CTRL+Z)"
                                data-original-title="Undo (CTRL+Z)"
                              >
                                <i className="note-icon-undo" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Redo (CTRL+Y)"
                                data-original-title="Redo (CTRL+Y)"
                              >
                                <i className="note-icon-redo" />
                              </button>
                            </div>
                          </div>
                          <div className="note-editing-area">
                            <div className="note-handle">
                              <div className="note-control-selection">
                                <div className="note-control-selection-bg" />
                                <div className="note-control-holder note-control-nw" />
                                <div className="note-control-holder note-control-ne" />
                                <div className="note-control-holder note-control-sw" />
                                <div className="note-control-sizing note-control-se" />
                                <div className="note-control-selection-info" />
                              </div>
                            </div>
                            <textarea
                              className="note-codable"
                              aria-multiline="true"
                              defaultValue={""}
                            />
                            <div
                              className="note-editable card-block"
                              contentEditable="true"
                              role="textbox"
                              aria-multiline="true"
                              spellCheck="true"
                              autoCorrect="true"
                              style={{ height: 200 }}
                            >
                              <p
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                Most couples stop thinking critically about
                                their relationship after the
                                <strong
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                  }}
                                >
                                  &nbsp;
                                </strong>
                                <a
                                  href="https://www.couples-counseling-now.com/relationship-stages/"
                                  style={{
                                    color: "rgb(177, 177, 87)",
                                    backgroundImage: "initial",
                                    backgroundPosition: "initial",
                                    backgroundSize: "initial",
                                    backgroundRepeat: "initial",
                                    backgroundAttachment: "initial",
                                    backgroundOrigin: "initial",
                                    backgroundClip: "initial",
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    fontWeight: "bold",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                  }}
                                >
                                  initial
                                </a>
                                <strong
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                  }}
                                >
                                  <br />
                                </strong>
                                <a
                                  href="https://www.couples-counseling-now.com/relationship-stages/"
                                  style={{
                                    color: "rgb(177, 177, 87)",
                                    backgroundImage: "initial",
                                    backgroundPosition: "initial",
                                    backgroundSize: "initial",
                                    backgroundRepeat: "initial",
                                    backgroundAttachment: "initial",
                                    backgroundOrigin: "initial",
                                    backgroundClip: "initial",
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    fontWeight: "bold",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                  }}
                                >
                                  honeymoon stage
                                </a>
                                . When they start living together or they get
                                married, they just assume that things will work
                                out. Imagine that the co-creators of a new
                                start-up say this to each other: “Well, now that
                                we started the company, we don’t need to talk
                                about it anymore”. And yet, this is what couples
                                often do:&nbsp;
                                <a
                                  href="https://www.couples-counseling-now.com/grown-up-love-its-not-what-you-think/"
                                  style={{
                                    color: "rgb(177, 177, 87)",
                                    backgroundImage: "initial",
                                    backgroundPosition: "initial",
                                    backgroundSize: "initial",
                                    backgroundRepeat: "initial",
                                    backgroundAttachment: "initial",
                                    backgroundOrigin: "initial",
                                    backgroundClip: "initial",
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    fontWeight: "bold",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                  }}
                                >
                                  They expect the relationship to be stable and
                                  flourish
                                </a>
                                , even though they don’t meet regularly to plan
                                problem-solving strategies to meet their goals
                                and review their original vision. As you can
                                imagine, this is untenable.
                              </p>
                              <p
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                <strong
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                  }}
                                >
                                  <img
                                    draggable="false"
                                    role="img"
                                    className="emoji"
                                    alt="🤔"
                                    src="https://s.w.org/images/core/emoji/13.1.0/svg/1f914.svg"
                                    style={{
                                      maxWidth: "100%",
                                      verticalAlign: "-0.1em !important",
                                      height: "1em !important",
                                      display: "inline !important",
                                      borderWidth: "initial !important",
                                      borderColor: "initial !important",
                                      borderImage: "initial !important",
                                      boxShadow: "none !important",
                                      width: "1em !important",
                                      margin: "0px 0.07em !important",
                                      background: "none !important",
                                      padding: "0px !important",
                                    }}
                                  />
                                  &nbsp;So, what are the secrets of today’s
                                  successful couples?
                                </strong>
                                <br />
                                They schedule meetings regularly to make their
                                own rules, create their own roles, solve some of
                                their problems and discuss their vision.
                              </p>
                              <p
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                <strong
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                  }}
                                >
                                  Successful couples have three kinds of
                                  meetings:
                                </strong>
                              </p>
                              <ol
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  paddingLeft: "1.5em",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                <li
                                  style={{
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    fontWeight: "inherit",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                    marginBottom: "0.5em",
                                  }}
                                >
                                  <strong
                                    style={{
                                      fontWeight: "bold",
                                      fontFamily: "inherit",
                                      fontStyle: "inherit",
                                      lineHeight: "inherit",
                                      border: 0,
                                      outline: 0,
                                      WebkitFontSmoothing: "antialiased",
                                      overflowWrap: "break-word",
                                    }}
                                  >
                                    Hang out meetings
                                  </strong>
                                  : These are just for fun. No serious
                                  discussions!
                                </li>
                                <li
                                  style={{
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    fontWeight: "inherit",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                    marginBottom: "0.5em",
                                  }}
                                >
                                  <strong
                                    style={{
                                      fontWeight: "bold",
                                      fontFamily: "inherit",
                                      fontStyle: "inherit",
                                      lineHeight: "inherit",
                                      border: 0,
                                      outline: 0,
                                      WebkitFontSmoothing: "antialiased",
                                      overflowWrap: "break-word",
                                    }}
                                  >
                                    Division of labor and calendar meetings
                                  </strong>
                                  . The more complicated your life, the more you
                                  need them! Come prepared to tweak a routine
                                  that is no longer working for you, or have a
                                  difficult conversation about&nbsp;
                                  <a
                                    href="https://www.couples-counseling-now.com/money-talk-for-couples-how-to-discuss-finances/"
                                    style={{
                                      color: "rgb(177, 177, 87)",
                                      backgroundImage: "initial",
                                      backgroundPosition: "initial",
                                      backgroundSize: "initial",
                                      backgroundRepeat: "initial",
                                      backgroundAttachment: "initial",
                                      backgroundOrigin: "initial",
                                      backgroundClip: "initial",
                                      fontFamily: "inherit",
                                      fontStyle: "inherit",
                                      fontWeight: "bold",
                                      lineHeight: "inherit",
                                      border: 0,
                                      outline: 0,
                                      WebkitFontSmoothing: "antialiased",
                                      overflowWrap: "break-word",
                                    }}
                                  >
                                    finances.
                                  </a>
                                  &nbsp;This is also where you plan who does
                                  what, when.
                                </li>
                                <li
                                  style={{
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    fontWeight: "inherit",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                    marginBottom: "0.5em",
                                  }}
                                >
                                  <strong
                                    style={{
                                      fontWeight: "bold",
                                      fontFamily: "inherit",
                                      fontStyle: "inherit",
                                      lineHeight: "inherit",
                                      border: 0,
                                      outline: 0,
                                      WebkitFontSmoothing: "antialiased",
                                      overflowWrap: "break-word",
                                    }}
                                  >
                                    State of the relationship meetings
                                  </strong>
                                  . This is the one where you create your
                                  relationship vision by design.
                                </li>
                              </ol>
                              <p
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                Here is why you need a state of the related
                                meetings.
                              </p>
                              <p
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                Not so long ago, relationships between men and
                                women were based on a hierarchy—a pecking order.
                                Men acted as the primary earners and
                                decision-makers, and women served as the
                                caretakers of all tasks related to children and
                                the home. Roles were clearly defined and rarely
                                questioned, and each half of a couple knew how
                                he or she was expected to behave.
                              </p>
                              <p
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                Men and women also operated in largely separate
                                spheres following the known rules, obligations,
                                and duties of their gender and their social
                                class. Divorce in the middle class was unheard
                                of and there were dire consequences for women if
                                they fell outside the norms. The happiness of
                                each member of the couple was definitely not the
                                reason for marriage which was actually based on
                                the need to get good in-laws, combine farmlands,
                                or bear children.
                              </p>
                              <p
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                Women often had the company of their mothers,
                                sisters, friends, and neighbors and could
                                confide in them when they needed advice on how
                                to handle their men and their children.
                              </p>
                              <p
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                Most women didn’t need to rely upon their
                                husbands for emotional support and their sexual
                                longings weren’t even acknowledged. Men spent
                                their days and many nights with male bosses and
                                co-workers, didn’t necessarily have to rely on
                                their wives to meet their sexual needs, and
                                their emotional longings weren’t acknowledged.
                              </p>
                              <p
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                Enormous changes have occurred in a relatively
                                short span of Western history. Women entered the
                                workforce in droves, the pill made pregnancy
                                voluntary, and a same-sex sexual orientation
                                emerged from the shadows. Households and
                                neighborhoods are no longer held together by the
                                fibers of three or four generations. Most
                                families cant survive on one income, roles are
                                blurred, and expectations are high.
                              </p>
                              <p
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                <br />
                                Most women (not to mention most men!) I know
                                wouldn’t go back to that old, oppressive system
                                for all the chocolate in Belgium. But, we’re
                                still blindly fumbling our way out of the cave,
                                even 50 years later. Today’s couples watched
                                their parents and grandparents play out those
                                predictable scenes and they have no role models
                                for a 21
                                <span
                                  style={{
                                    fontFamily: "inherit",
                                    fontSize: "13.5px",
                                    fontStyle: "inherit",
                                    fontWeight: "inherit",
                                    lineHeight: 0,
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                    height: 0,
                                    position: "relative",
                                    verticalAlign: "baseline",
                                    bottom: "1ex",
                                  }}
                                >
                                  st
                                </span>
                                &nbsp;century, egalitarian relationship. We know
                                we want equal partnerships, but what exactly
                                does that mean?
                                <br />
                                <br />
                                We want our partners to be our best friends,
                                fulfill our sexual fantasies, support our
                                dreams, share our financial burdens, and accept
                                our flaws. Sure, the divorce rate hovers around
                                50 percent, but given all that pressure, isn’t
                                it remarkable how many couples do hold it
                                together?
                                <br />
                                <br />
                                No longer forced to stay in unhappy
                                relationships, couples of all persuasions
                                wrestle with a myriad of questions day in and
                                day out, the answers to which are individually
                                demarcated and personal, and designed by each
                                couple from scratch.
                                <br />
                                <br />
                                Take the time to consider what you witnessed
                                growing up. Make conscious decisions about what
                                you want to carry forward and what you want to
                                discard. Some couples can do this on their
                                own,&nbsp;
                                <a
                                  href="https://www.couples-counseling-now.com/dont-wait-couples-counselor-why/"
                                  style={{
                                    color: "rgb(177, 177, 87)",
                                    backgroundImage: "initial",
                                    backgroundPosition: "initial",
                                    backgroundSize: "initial",
                                    backgroundRepeat: "initial",
                                    backgroundAttachment: "initial",
                                    backgroundOrigin: "initial",
                                    backgroundClip: "initial",
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    fontWeight: "bold",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                  }}
                                >
                                  others need help
                                </a>
                                .<br />
                                <br />
                                Create your own relationship vision. Then, be
                                prepared to stretch and reshape those goals, as
                                some of your partners ideas will undoubtedly
                                differ. Through the years, priorities and
                                beliefs will shift, and you may need to return
                                to the negotiating table a number of times. But,
                                if you devote some energy early on to crafting a
                                mutual definition of an equal partnership,
                                you’ll have your own playbook and relationship
                                rules to draw from.
                                <br />
                                <br />
                                When couples don’t intentionally think through
                                some of these issues,&nbsp;
                                <a
                                  href="https://www.couples-counseling-now.com/fix-unhealthy-relationship/"
                                  style={{
                                    color: "rgb(177, 177, 87)",
                                    backgroundImage: "initial",
                                    backgroundPosition: "initial",
                                    backgroundSize: "initial",
                                    backgroundRepeat: "initial",
                                    backgroundAttachment: "initial",
                                    backgroundOrigin: "initial",
                                    backgroundClip: "initial",
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    fontWeight: "bold",
                                    lineHeight: "inherit",
                                    border: 0,
                                    outline: 0,
                                    WebkitFontSmoothing: "antialiased",
                                    overflowWrap: "break-word",
                                  }}
                                >
                                  confusion, anger, and resentment often take
                                  over
                                </a>
                                . Operating unwittingly from an old family
                                playbook, partners push to assert their version
                                as the right version. So, it’s worth the time,
                                effort, and sometimes the struggle, to shed
                                light on the following questions to design your
                                own vision, with your own rules and
                                expectations. It’s never too late to examine
                                your own rules and beliefs, even if you have
                                been together for a long time.
                              </p>
                              <p
                                style={{
                                  marginRight: 0,
                                  marginBottom: "1.5em",
                                  marginLeft: 0,
                                  fontFamily: '"Open Sans", sans-serif',
                                  fontSize: 18,
                                  lineHeight: "inherit",
                                  border: 0,
                                  outline: 0,
                                  WebkitFontSmoothing: "antialiased",
                                  overflowWrap: "break-word",
                                  color: "rgb(35, 40, 45)",
                                }}
                              >
                                <br style={{ textAlign: "left" }} />
                              </p>
                            </div>
                          </div>
                          <output
                            className="note-status-output"
                            role="status"
                            aria-live="polite"
                          />
                          <div className="note-statusbar" role="status">
                            <output
                              className="note-status-output"
                              aria-live="polite"
                            />
                            <div className="note-resizebar" aria-label="Resize">
                              <div className="note-icon-bar" />
                              <div className="note-icon-bar" />
                              <div className="note-icon-bar" />
                            </div>
                          </div>
                          <div
                            className="modal note-modal link-dialog"
                            aria-hidden="false"
                            tabIndex={-1}
                            role="dialog"
                            aria-label="Insert Link"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Insert Link</h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    aria-hidden="true"
                                  >
                                    ×
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="form-group note-form-group">
                                    <label
                                      htmlFor="note-dialog-link-txt-16771435440741"
                                      className="note-form-label"
                                    >
                                      Text to display
                                    </label>
                                    <input
                                      id="note-dialog-link-txt-16771435440741"
                                      className="note-link-text form-control note-form-control note-input"
                                      type="text"
                                    />
                                  </div>
                                  <div className="form-group note-form-group">
                                    <label
                                      htmlFor="note-dialog-link-url-16771435440741"
                                      className="note-form-label"
                                    >
                                      To what URL should this link go?
                                    </label>
                                    <input
                                      id="note-dialog-link-url-16771435440741"
                                      className="note-link-url form-control note-form-control note-input"
                                      type="text"
                                      defaultValue="http://"
                                    />
                                  </div>
                                  <div className="form-check sn-checkbox-open-in-new-window">
                                    <label className="form-check-label">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        defaultChecked
                                        aria-label="Open in new window"
                                        aria-checked="true"
                                      />{" "}
                                      Open in new window
                                    </label>
                                  </div>
                                  <div className="form-check sn-checkbox-use-protocol">
                                    <label className="form-check-label">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        defaultChecked
                                        aria-label="Use default protocol"
                                        aria-checked="true"
                                      />{" "}
                                      Use default protocol
                                    </label>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <input
                                    type="button"
                                    href="#"
                                    className="btn btn-primary note-btn note-btn-primary note-link-btn"
                                    defaultValue="Insert Link"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="note-popover popover in note-link-popover bottom">
                            <div className="arrow" />
                            <div className="popover-content note-children-container">
                              <span>
                                <a target="_blank" />
                                &nbsp;
                              </span>
                              <div className="note-btn-group btn-group note-link">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Edit"
                                  data-original-title="Edit"
                                >
                                  <i className="note-icon-link" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Unlink"
                                  data-original-title="Unlink"
                                >
                                  <i className="note-icon-chain-broken" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="modal note-modal"
                            aria-hidden="false"
                            tabIndex={-1}
                            role="dialog"
                            aria-label="Insert Image"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Insert Image</h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    aria-hidden="true"
                                  >
                                    ×
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="form-group note-form-group note-group-select-from-files">
                                    <label
                                      htmlFor="note-dialog-image-file-16771435440741"
                                      className="note-form-label"
                                    >
                                      Select from files
                                    </label>
                                    <input
                                      id="note-dialog-image-file-16771435440741"
                                      className="note-image-input form-control-file note-form-control note-input"
                                      type="file"
                                      name="files"
                                      accept="image/*"
                                      multiple="multiple"
                                    />
                                  </div>
                                  <div className="form-group note-group-image-url">
                                    <label
                                      htmlFor="note-dialog-image-url-16771435440741"
                                      className="note-form-label"
                                    >
                                      Image URL
                                    </label>
                                    <input
                                      id="note-dialog-image-url-16771435440741"
                                      className="note-image-url form-control note-form-control note-input"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <input
                                    type="button"
                                    href="#"
                                    className="btn btn-primary note-btn note-btn-primary note-image-btn"
                                    defaultValue="Insert Image"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="note-popover popover in note-image-popover bottom">
                            <div className="arrow" />
                            <div className="popover-content note-children-container">
                              <div className="note-btn-group btn-group note-resize">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Resize full"
                                  data-original-title="Resize full"
                                >
                                  <span className="note-fontsize-10">100%</span>
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Resize half"
                                  data-original-title="Resize half"
                                >
                                  <span className="note-fontsize-10">50%</span>
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Resize quarter"
                                  data-original-title="Resize quarter"
                                >
                                  <span className="note-fontsize-10">25%</span>
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Original size"
                                  data-original-title="Original size"
                                >
                                  <i className="note-icon-rollback" />
                                </button>
                              </div>
                              <div className="note-btn-group btn-group note-float">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Float Left"
                                  data-original-title="Float Left"
                                >
                                  <i className="note-icon-float-left" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Float Right"
                                  data-original-title="Float Right"
                                >
                                  <i className="note-icon-float-right" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Remove float"
                                  data-original-title="Remove float"
                                >
                                  <i className="note-icon-rollback" />
                                </button>
                              </div>
                              <div className="note-btn-group btn-group note-remove">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Remove Image"
                                  data-original-title="Remove Image"
                                >
                                  <i className="note-icon-trash" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="note-popover popover in note-table-popover bottom">
                            <div className="arrow" />
                            <div className="popover-content note-children-container">
                              <div className="note-btn-group btn-group note-add">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add row below"
                                  data-original-title="Add row below"
                                >
                                  <i className="note-icon-row-below" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add row above"
                                  data-original-title="Add row above"
                                >
                                  <i className="note-icon-row-above" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add column left"
                                  data-original-title="Add column left"
                                >
                                  <i className="note-icon-col-before" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add column right"
                                  data-original-title="Add column right"
                                >
                                  <i className="note-icon-col-after" />
                                </button>
                              </div>
                              <div className="note-btn-group btn-group note-delete">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Delete row"
                                  data-original-title="Delete row"
                                >
                                  <i className="note-icon-row-remove" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Delete column"
                                  data-original-title="Delete column"
                                >
                                  <i className="note-icon-col-remove" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Delete table"
                                  data-original-title="Delete table"
                                >
                                  <i className="note-icon-trash" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="modal note-modal"
                            aria-hidden="false"
                            tabIndex={-1}
                            role="dialog"
                            aria-label="Insert Video"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Insert Video</h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    aria-hidden="true"
                                  >
                                    ×
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="form-group note-form-group row-fluid">
                                    <label
                                      htmlFor="note-dialog-video-url-16771435440741"
                                      className="note-form-label"
                                    >
                                      Video URL{" "}
                                      <small className="text-muted">
                                        (YouTube, Vimeo, Vine, Instagram,
                                        DailyMotion or Youku)
                                      </small>
                                    </label>
                                    <input
                                      id="note-dialog-video-url-16771435440741"
                                      className="note-video-url form-control note-form-control note-input"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <input
                                    type="button"
                                    href="#"
                                    className="btn btn-primary note-btn note-btn-primary note-video-btn"
                                    defaultValue="Insert Video"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="modal note-modal"
                            aria-hidden="false"
                            tabIndex={-1}
                            role="dialog"
                            aria-label="Help"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Help</h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    aria-hidden="true"
                                  >
                                    ×
                                  </button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{ maxHeight: 300, overflow: "scroll" }}
                                >
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>ENTER</kbd>
                                  </label>
                                  <span>Insert Paragraph</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+Z</kbd>
                                  </label>
                                  <span>Undoes the last command</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+Y</kbd>
                                  </label>
                                  <span>Redoes the last command</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>TAB</kbd>
                                  </label>
                                  <span>Tab</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>SHIFT+TAB</kbd>
                                  </label>
                                  <span>Untab</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+B</kbd>
                                  </label>
                                  <span>Set a bold style</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+I</kbd>
                                  </label>
                                  <span>Set a italic style</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+U</kbd>
                                  </label>
                                  <span>Set a underline style</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+S</kbd>
                                  </label>
                                  <span>Set a strikethrough style</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+BACKSLASH</kbd>
                                  </label>
                                  <span>Clean a style</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+L</kbd>
                                  </label>
                                  <span>Set left align</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+E</kbd>
                                  </label>
                                  <span>Set center align</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+R</kbd>
                                  </label>
                                  <span>Set right align</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+J</kbd>
                                  </label>
                                  <span>Set full align</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+NUM7</kbd>
                                  </label>
                                  <span>Toggle unordered list</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+NUM8</kbd>
                                  </label>
                                  <span>Toggle ordered list</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+LEFTBRACKET</kbd>
                                  </label>
                                  <span>Outdent on current paragraph</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+RIGHTBRACKET</kbd>
                                  </label>
                                  <span>Indent on current paragraph</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM0</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as a
                                    paragraph(P tag)
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM1</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H1
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM2</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H2
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM3</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H3
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM4</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H4
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM5</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H5
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM6</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H6
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+ENTER</kbd>
                                  </label>
                                  <span>Insert horizontal rule</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+K</kbd>
                                  </label>
                                  <span>Show Link Dialog</span>
                                </div>
                                <div className="modal-footer">
                                  <p className="text-center">
                                    <a
                                      href="http://summernote.org/"
                                      target="_blank"
                                    >
                                      Summernote 0.8.16
                                    </a>{" "}
                                    ·{" "}
                                    <a
                                      href="https://github.com/summernote/summernote"
                                      target="_blank"
                                    >
                                      Project
                                    </a>{" "}
                                    ·{" "}
                                    <a
                                      href="https://github.com/summernote/summernote/issues"
                                      target="_blank"
                                    >
                                      Issues
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
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
                          defaultValue="The leaders have a vision for the future and meet regularly to plan how to achieve their goals."
                          placeholder="Meta Title"
                          fdprocessedid="s9ryrg"
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
                        <div
                          className="input-group"
                          data-toggle="aizuploader"
                          data-type="image"
                        >
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary font-weight-medium">
                              Browse
                            </div>
                          </div>
                          <div className="form-control file-amount" onClick={handleShow2}>
                            1 File selected
                          </div>
                          <input
                            type="hidden"
                            name="meta_img"
                            className="selected-files"
                            defaultValue={313}
                          />
                        </div>
                        <Modal show={show2} onHide={handleClose2} dialogClassName='happy-modle'>
                          <Modal.Header closeButton>
                            <div className="uppy-modal-nav">
                              <ul className="nav nav-tabs border-0">
                                <li className="nav-item">
                                  <a className="nav-link font-weight-medium text-dark active" data-toggle="tab" href="#aiz-select-file">Select File</a>
                                </li>
                                <li className="nav-item">
                                  <div class="input-group">
                                    <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                  </div>
                                </li>
                              </ul>
                            </div>

                          </Modal.Header>
                          <Modal.Body>
                            {/* <div className="modal-body"> */}
                            <div className="tab-content h-100">
                              <div className="tab-pane active h-100" id="aiz-select-file">
                                <div className="aiz-uploader-filter pt-1 pb-3 border-bottom mb-4">
                                  <div className="row align-items-center gutters-5 gutters-md-10 position-relative">
                                    <div className="col-xl-2 col-md-3 col-5">
                                      <div className>
                                        {/* Input */}
                                        <select className="form-control form-control-xs aiz-selectpicker" name="aiz-uploader-sort" fdprocessedid="q0h7pa">
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
                                        <input type="text" className="form-control form-control-xs" name="aiz-uploader-search" placeholder="Search your files" fdprocessedid="e4ta" />
                                        <i className="search-icon d-md-none"><span /></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="aiz-uploader-all clearfix c-scrollbar-light"><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-1.png" data-value={313}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/0xjA6CAGcczj5XM17pripJwBsGoH9ayiPV0huWf5.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-1</span><span className="ext">.png</span></h6><p>57 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="1.png" data-value={312}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/uBDARQfJpAEFuUlutaNEZbg6cIU3QabJo32hTh01.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">1</span><span className="ext">.png</span></h6><p>781 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-2.png" data-value={311}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/V8ascFa3sAFZSw3wfZ0iQwdUrT5sJ7XPINsN9eo0.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-2</span><span className="ext">.png</span></h6><p>70 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2.png" data-value={310}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/NbGjsZSmGSEOm25ZAG9RCJv9dYeP94Z2z0Dunwwj.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2</span><span className="ext">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-3.png" data-value={309}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/XhymxhSGSS55vMDaba0QcX6T1ABHK8O3Q9rgQZE9.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-3</span><span className="ext">.png</span></h6><p>60 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="3.png" data-value={308}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/ChVoOrArnZDuuTsd6VUkR7P8L15D4pKMzuiL9TQ0.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">3</span><span className="ext">.png</span></h6><p>832 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-4.png" data-value={307}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/mwGP4G1aqF5DtDxEI111bPP0QGE1xqFkiCkQbDMO.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-4</span><span className="ext">.png</span></h6><p>74 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="4.png" data-value={306}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/tJAsCSW4HdIkyOs6Ny34OntGa8t9NaNgmOlNLPXU.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">4</span><span className="ext">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="M-5.png" data-value={305}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/rxGUYkry7DQzWegMZ9VfYy6UjPiu2gWB7PKpX1P9.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">M-5</span><span className="ext">.png</span></h6><p>69 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="5.png" data-value={304}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/c8Nq9cfMecTVbcBW7K0HxsH7Zqw65choZnCu1pRg.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">5</span><span className="ext">.png</span></h6><p>1010 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="6.png" data-value={303}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/14Q4NZoCYMxIc33sY0ayS9SYH5Kf3fdCCGD59pB1.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">6</span><span className="ext">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress.jpg" data-value={302}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Ha3BoiWkO6b4vENPPTM7D5SeEMP6uImAsu5MBayW.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress</span><span className="ext">.jpg</span></h6><p>411 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="groom-bride-wedding-day.jpg" data-value={301}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/FZtTEKkOiKg6DkHwSnDDhN783QKS3HJgQW2qzZsb.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">groom-bride-wedding-day</span><span className="ext">.jpg</span></h6><p>781 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day.jpg" data-value={300}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/xV2jN72ErCdpYe6aZ5vysEUmBqm2qiouz13Ut0MA.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day</span><span className="ext">.jpg</span></h6><p>315 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="wedding.jpg" data-value={299}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/WmTlHsgN9QazTwnPoAfUlkmqlJEE29i6GZMYyk6H.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">wedding</span><span className="ext">.jpg</span></h6><p>316 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="gorgeous-bride-handsome-groom-touching-by-faces-each-other.jpg" data-value={298}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Ge17HtrhIa4YTojwUa1LGDyJgYLZP1CpNlrDn3av.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">gorgeous-bride-handsome-groom-touching-by-faces-each-other</span><span className="ext">.jpg</span></h6><p>533 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit.jpg" data-value={297}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Z1N1XQGvZUU1BlpprntVmmiMdo80sIy638rnMQLD.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit</span><span className="ext">.jpg</span></h6><p>295 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="wedding-shot-bride-groom-park-romantic-scene-park.jpg" data-value={296}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/yYDTNN7ctub8KHPGXJcOuNM5LpP3xVLeTEEejyZS.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">wedding-shot-bride-groom-park-romantic-scene-park</span><span className="ext">.jpg</span></h6><p>234 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg" data-value={295}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/kfLiYSgqrdD5t8KYrg9HJNZyERclSnbpyZXxJjb5.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation</span><span className="ext">.jpg</span></h6><p>313 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png" data-value={294}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/9xXI1UVwcgC0jB4s8WeAZQM0BHh55jAEfkL6wkkZ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro</span><span className="ext">.png</span></h6><p>19 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png" data-value={287}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/HKb4dap327ArsZtb12KXUNeFVCfbA7mZBqQIGrCw.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro</span><span className="ext">.png</span></h6><p>1 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="nicolas-horn-MTZTGvDsHFY-unsplash.jpg" data-value={286}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/NiLOYq4Y5Lap1Ek7QrZcpgXq6UGwcOGpd5RQoOMA.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">nicolas-horn-MTZTGvDsHFY-unsplash</span><span className="ext">.jpg</span></h6><p>105 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="medicalert-uk-uXB-7la5vqA-unsplash.jpg" data-value={278}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/KA9rZPh3DxXFiKIAWpBqEF35ycIsbF3DLboW2wvI.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">medicalert-uk-uXB-7la5vqA-unsplash</span><span className="ext">.jpg</span></h6><p>112 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="crop-elegant-newlyweds-near-lake.jpg" data-value={277}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/cEOhVAwkzGE51HebB3Ky9CwQU3vLyKnW4DRMQ1mt.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">crop-elegant-newlyweds-near-lake</span><span className="ext">.jpg</span></h6><p>230 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg" data-value={276}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/OkwfK3lo8BgrCkMuOA4NGeORw7g9ldcOp6ykrIeU.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation</span><span className="ext">.jpg</span></h6><p>195 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8070.png" data-value={274}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/mGjZwnY7801CUnPA31gqWcH9FUisUPHpMSlFDXBi.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8070</span><span className="ext">.png</span></h6><p>324 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg" data-value={273}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/M1QyKHaRWLrZa7h2EjTBsAdTLxzefYPRk6FyDbdq.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other</span><span className="ext">.jpg</span></h6><p>130 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg" data-value={272}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Qo4cAGtMHA9feO1ikM81J6pIz0377AgLMUKz5Vx4.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other</span><span className="ext">.jpg</span></h6><p>130 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk.jpg" data-value={271}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/TrEw2nVHuYzHWsE4OWgLxThJNYn3jHCjtswqUdf8.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk</span><span className="ext">.jpg</span></h6><p>158 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="18.png" data-value={265}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/kimX2PnqPaTQt1YJWqudR6ipTmWfhxMrfCb4uTf0.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">18</span><span className="ext">.png</span></h6><p>898 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8176.png" data-value={256}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/ccZXfUBJdeI3nVlTaDjj5XktantwFNh70bYVXTJR.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8176</span><span className="ext">.png</span></h6><p>6 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="christiana-rivers-3_mQjo4Vb6A-unsplash.jpg" data-value={238}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/BvZIgmLAshq3ZyDe12xoIKYTNq1TbdxJyrjgGLin.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">christiana-rivers-3_mQjo4Vb6A-unsplash</span><span className="ext">.jpg</span></h6><p>348 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="sina-rezakhani-oaMLLJ02_D8-unsplash.jpg" data-value={229}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/sirm6XabTxY94S2TGIeocRNys8abWbBB0ad9FDc1.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">sina-rezakhani-oaMLLJ02_D8-unsplash</span><span className="ext">.jpg</span></h6><p>137 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="alexandru-zdrobau--djRG1vB1pw-unsplash.jpg" data-value={228}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Yy47gZu8En7TUvRYra3zKpFJ1GMCJr08LWYUkPB6.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">alexandru-zdrobau--djRG1vB1pw-unsplash</span><span className="ext">.jpg</span></h6><p>401 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="tamara-bellis-2Tv7-O13hgk-unsplash.jpg" data-value={227}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/j1HdWFnVQIla2KMy8GOiXFi6XZ9tO7S8rx7bhKCQ.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">tamara-bellis-2Tv7-O13hgk-unsplash</span><span className="ext">.jpg</span></h6><p>259 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="freestocks-8a95EVm0ovQ-unsplash.jpg" data-value={226}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/kraX7i8EY934OpDokvwUqokiZZZKupmY9Jc89npf.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">freestocks-8a95EVm0ovQ-unsplash</span><span className="ext">.jpg</span></h6><p>266 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="austin-distel-7uoMmzPd2JA-unsplash.jpg" data-value={225}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Jfwa5H7XVPI6A2r5oZdVPkxLJIq8kCM5WMB7JPUZ.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">austin-distel-7uoMmzPd2JA-unsplash</span><span className="ext">.jpg</span></h6><p>273 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="nick-karvounis-JyO_szjGvUw-unsplash.jpg" data-value={224}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/JBNnlxl0aX4iRk2e3qCpjDca3WFBArAi4tSPJjeC.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">nick-karvounis-JyO_szjGvUw-unsplash</span><span className="ext">.jpg</span></h6><p>151 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg" data-value={223}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/ozTCQz5ogBXJa4PMDevIkOcGWGmqhhhwPE7zwR0M.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">jonas-kakaroto-mjRwhvqEC0U-unsplash</span><span className="ext">.jpg</span></h6><p>206 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8177.png" data-value={184}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/N3IeDw37QUFOxBUc8g96V7ya7Z4Rg1WJDLAD1BRO.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8177</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8176.png" data-value={183}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/1dD4w1xIQIViixofGwsq8LdKysEx4BDug5hdpys6.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8176</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8175.png" data-value={182}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/RMTKXAZIB1cN2RA8GLgbhs8DmGl0qj01ACRlEFCG.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8175</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8178.png" data-value={181}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/zzOHNo1lfGayWCnT9xK1xHB8VjkAzOSnb14ibeup.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8178</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8174.png" data-value={180}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/UIOcsIe8TMVx6Rp7Wbx9ig5kw6X2g2rSxKUNsPNQ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8174</span><span className="ext">.png</span></h6><p>5 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8174.png" data-value={179}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/eVmkovaQ5fdbstdKsvLjZrVjYdT4Jem2O3nzQslQ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8174</span><span className="ext">.png</span></h6><p>5 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8173.png" data-value={178}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/uYGlmDARpbT2sjJ4x3YTm1GsFQ5I78GOa8lWgMQq.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8173</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 967.png" data-value={150}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/a1RdLfMfXtNqskauoZwEC94F8xAmbH16mhaGVHWh.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 967</span><span className="ext">.png</span></h6><p>3 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 961.png" data-value={151}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/vr2RFTrdbxEawbPyG8suCNyMVEvr05lGIQ6MX1Nz.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 961</span><span className="ext">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8005.png" data-value={147}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Zk2lj7FFjeGGYOhch3vtEAkxnnom4zPcWq1bV0tr.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8005</span><span className="ext">.png</span></h6><p>401 Bytes</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Page-1.png" data-value={148}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/54adYPz3OC2PKzpgZF0rpnvR3qKeDMTikwOqNsMW.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Page-1</span><span className="ext">.png</span></h6><p>516 Bytes</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8006.png" data-value={149}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/5HxbGcXOowGkctJOQHm5CYETk4wIPutWs5eb3dlL.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8006</span><span className="ext">.png</span></h6><p>250 Bytes</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8168.png" data-value={144}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/bB4GZnLSrquYOKA3lbH0JI5WKWEwznwXNvjbAEEU.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8168</span><span className="ext">.png</span></h6><p>3 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8002.png" data-value={145}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/D8IvIuVZ1XgBEbW8WNygx6JM0G6AVPKohVaHyj7X.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8002</span><span className="ext">.png</span></h6><p>3 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8169.png" data-value={146}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/zxhwmcnXiCd5WUb8V4GBLb7VkvXuEl2DHFUUD2sk.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8169</span><span className="ext">.png</span></h6><p>6 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8170.png" data-value={143}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/UgoHnTw7QRHMYhzI9MaeSRNvcIP8FxR1FaGNyY32.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8170</span><span className="ext">.png</span></h6><p>181 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8169.png" data-value={142}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/MKeWioNRNyyZSPAJoi6Cy99Jk7kJn8gJabqjEBQW.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8169</span><span className="ext">.png</span></h6><p>185 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Group 8168.png" data-value={141}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/SHlh3Cwc7RaNiiSyvNGmexFDLSYoHkRXlMQqvYwo.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Group 8168</span><span className="ext">.png</span></h6><p>144 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="bannon-morrissy-RxiAV5LC-ww-unsplash.jpg" data-value={140}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/LH0T5CcaRM0dYSiFx1sSrNHQWKje7QtvFrngtGHL.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">bannon-morrissy-RxiAV5LC-ww-unsplash</span><span className="ext">.jpg</span></h6><p>133 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="radu-florin-YLr8qZeu6d4-unsplash.jpg" data-value={139}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Yu77XFn8brOtsiEiRzQgcqekDk1fBhEIBUd5WzjM.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">radu-florin-YLr8qZeu6d4-unsplash</span><span className="ext">.jpg</span></h6><p>166 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="everton-vila-AsahNlC0VhQ-unsplash.png" data-value={138}><div className="card-file-thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Zo4yekKwhDtasX6uEl3cKZFei63iYAAvi2550jOr.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">everton-vila-AsahNlC0VhQ-unsplash</span><span className="ext">.png</span></h6><p>957 KB</p></div></div></div></div></div>
                              </div>
                              <div className="tab-pane h-100" id="aiz-upload-new">
                                <div id="aiz-upload-files" className="h-100">
                                  <div className="uppy-Root uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--isInnerWrapVisible" aria-hidden="false" aria-label="File Uploader"><div className="uppy-Dashboard-overlay" tabIndex={-1} /><div className="uppy-Dashboard-inner" style={{ width: 750, height: 550 }}><div className="uppy-Dashboard-innerWrap"><div className="uppy-Dashboard-dropFilesHereHint">Drop your files here</div><div className="uppy-DashboardAddFiles"><input className="uppy-Dashboard-input" hidden aria-hidden="true" tabIndex={-1} type="file" name="files[]" multiple /><div className="uppy-DashboardTabs"><div className="uppy-Dashboard-dropFilesTitle">Drop files here, paste or <button type="button" className="uppy-u-reset uppy-Dashboard-browse">browse</button></div></div><div className="uppy-DashboardAddFiles-info" /></div><span /><span /><span /><div className="uppy-Dashboard-progressindicators"><div className="uppy-StatusBar is-waiting" aria-hidden="true"><div className="uppy-StatusBar-progress
                     " role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} style={{ width: '0%' }} /><div className="uppy-StatusBar-actions" /></div><div className="uppy uppy-Informer" aria-hidden="true"><p role="alert"> </p></div></div></div></div></div></div>
                              </div>
                            </div>
                            {/* </div> */}

                          </Modal.Body>
                          <Modal.Footer className="modal-footer justify-content-between bg-light">

                            {/* <div className="modal-footer justify-content-between bg-light"> */}
                            <div className="flex-grow-1 overflow-hidden d-flex">
                              <div className>
                                <div className="aiz-uploader-selected">1 File selected</div>
                                <button type="button" className="btn-link btn btn-sm p-0 aiz-uploader-selected-clear" fdprocessedid="rw2oth">Clear</button>
                              </div>
                              <div className="mb-0 ml-3">
                                <button type="button" className="btn btn-sm btn-primary mr-2" id="uploader_prev_btn" disabled="disabled">Prev</button>
                                <button type="button" className="btn btn-sm btn-primary" id="uploader_next_btn" fdprocessedid="2oxviv">Next</button>
                              </div>
                            </div>
                            <button type="button" className="btn btn-sm btn-primary" data-toggle="aizUploaderAddSelected" fdprocessedid="cohrl">Add Files</button>
                            {/* </div> */}

                            {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
                          </Modal.Footer>
                        </Modal>
                        <div className="file-preview box sm">
                          <div
                            className="d-flex justify-content-between align-items-center mt-2 file-preview-item"
                            data-id={313}
                            title="M-1.png"
                          >
                            <div className="align-items-center align-self-stretch d-flex justify-content-center thumb">
                              <img
                                src="//weddemoadmin.abaris.in/public/uploads/all/0xjA6CAGcczj5XM17pripJwBsGoH9ayiPV0huWf5.png"
                                className="img-fit"
                              />
                            </div>
                            <div className="col body">
                              <h6 className="d-flex">
                                <span className="text-truncate title">M-1</span>
                                <span className="ext">.png</span>
                              </h6>
                              <p>57 KB</p>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-link remove-attachment"
                                type="button"
                                fdprocessedid="xzrdg"
                              >
                                <i className="la la-close" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">
                        Meta Description
                      </label>
                      <div className="col-md-9">
                        <textarea
                          name="meta_description"
                          rows={5}
                          className="form-control"
                          defaultValue={
                            "The leaders have a vision for the future and meet regularly to plan how to achieve their goals."
                          }
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
                          name="meta_keywords"
                          defaultValue="Matrimonial"
                          placeholder="Meta Keywords"
                          fdprocessedid="q4h8sd"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        fdprocessedid="739sj9"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
EditBlogPost.modules = {
  toolbar:[
    [{header:'1'},{header:'2'}, {header:[3,4,5,6]}, {font:[]}],
    [{size:[]}],
    ['bold','italic','underline','strike','blockquote'],
    [{list:'ordered'},{list:'bullet'}],
    ['link','image','video'],
    ['clean'],
    ['code-block']
  ]
};
EditBlogPost.formats = [
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
export default EditBlogPost;
