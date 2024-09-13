import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import first from "../../assets/img/modalImg/first.png"
import c1 from "../../assets/img/modalImg/c1.png"
import c2 from "../../assets/img/modalImg/c2.png"
import c3 from "../../assets/img/modalImg/c3.png"
import c4 from "../../assets/img/modalImg/c4.png"
import c5 from "../../assets/img/modalImg/c5.png"
import old1 from "../../assets/img/modalImg/old1.png"
import old2 from "../../assets/img/modalImg/old2.png"
import mr1 from "../../assets/img/modalImg/mr1.png"
import mr2 from "../../assets/img/modalImg/mr2.png"
import mr3 from "../../assets/img/modalImg/mr3.png"
import mr4 from "../../assets/img/modalImg/mr4.png"
import mr5 from "../../assets/img/modalImg/mr5.png"
import mr6 from "../../assets/img/modalImg/mr6.png"
import mr7 from "../../assets/img/modalImg/m7.png"
import mr8 from "../../assets/img/modalImg/mr8.png"
import mr9 from "../../assets/img/modalImg/mr9.png"
import mr10 from "../../assets/img/modalImg/mr10.png"
import mr11 from "../../assets/img/modalImg/mr11.png"
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";


function UploadedFiles() {
  const [sidebar, setSidebar] = useState(false);
  const closeSidebar = () => setSidebar(false);
  const showDetails = () => setSidebar(true);

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">All uploaded files</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Link to="create" className="btn btn-primary">
                  <span>Upload New File</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <form id="sort_uploads" >
              <div className="card-header row gutters-5">
                <div className="col-md-3">
                  <h5 className="mb-0 h6">All files</h5>
                </div>
                <div className="col-md-3 ml-auto mr-0">

                  <Form.Select className="dropdown  form-control aiz-">
                    <option>Sort by newest</option>
                    <option value="1">Sort by newest</option>
                    <option value="2">Sort by oldest</option>
                    <option value="3">Sort by smallest</option>
                    <option value="3">Sort by largest</option>
                  </Form.Select>
                  {/* <div className="dropdown bootstrap-select form-control form-control-xs aiz-">
                    <select className="form-control form-control-xs aiz-selectpicker" name="sort" onchange="sort_uploads()" tabIndex={-98}>
                      <option value="newest">Sort by newest</option>
                      <option value="oldest">Sort by oldest</option>
                      <option value="smallest">Sort by smallest</option>
                      <option value="largest">Sort by largest</option>
                    </select>
                    <button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Sort by newest">
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">Sort by newest</div>
                        </div>
                      </div>
                    </button>
                    <div className="dropdown-menu ">
                      <div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}>
                        <ul className="dropdown-menu inner show" role="presentation" />
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control form-control-xs" name="search" placeholder="Search your files" defaultValue />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary">Search</button>
                </div>
              </div>
            </form>
            <div className="card-body">
              <div className="row gutters-5">
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dot_btn">
                          <a className="dropdown-link link_btn" >
                            <i className="la la-ellipsis-v" />
                          </a>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                          <Dropdown.Item href="#/action-1" className="dropdown_hov" onClick={showDetails}>
                            <i className="las la-info-circle mr-2" />
                            Details Info
                          </Dropdown.Item>

                          <Offcanvas show={sidebar} onHide={closeSidebar}>
                            <Offcanvas.Header closeButton>
                              <Offcanvas.Title>File Info</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                              <div>
                                <div className="form-group">
                                  <label>File Name</label>
                                  <input type="text" className="form-control" defaultValue="uploads/all/0xjA6CAGcczj5XM17pripJwBsGoH9ayiPV0huWf5.png" disabled />
                                </div>
                                <div className="form-group">
                                  <label>File Type</label>
                                  <input type="text" className="form-control" defaultValue="image" disabled />
                                </div>
                                <div className="form-group">
                                  <label>File Size</label>
                                  <input type="text" className="form-control" defaultValue="56.64 KB" disabled />
                                </div>
                                <div className="form-group">
                                  <label>Uploaded By</label>
                                  <input type="text" className="form-control" defaultValue disabled />
                                </div>
                                <div className="form-group">
                                  <label>Uploaded At</label>
                                  <input type="text" className="form-control" defaultValue="2022-05-16 22:04:34" disabled />
                                </div>
                                <div className="form-group text-center">
                                  <a className="btn btn-secondary" href="https://demo.activeitzone.com/matrimonial/public/uploads/all/0xjA6CAGcczj5XM17pripJwBsGoH9ayiPV0huWf5.png" target="_blank" download="M-1.png">Download</a>
                                </div>
                              </div>

                            </Offcanvas.Body>
                          </Offcanvas>

                          <Dropdown.Item href="#/action-2" className="dropdown_hov">
                            <i className="la la-download mr-2" />
                            Download
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-clipboard mr-2" />
                            Copy Link
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-trash mr-2" />
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="M-1.png">
                      <div className="card-file-thumb">
                        <img src={first} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">M-1</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>56.64 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dot_btn">
                          <a className="dropdown-link link_btn" >
                            <i className="la la-ellipsis-v" />
                          </a>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                          <Dropdown.Item href="#/action-1" className="dropdown_hov" onClick={showDetails}>
                            <i className="las la-info-circle mr-2" />
                            Details Info
                          </Dropdown.Item>

                          <Dropdown.Item href="#/action-2" className="dropdown_hov">
                            <i className="la la-download mr-2" />
                            Download
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-clipboard mr-2" />
                            Copy Link
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-trash mr-2" />
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="1.png">
                      <div className="card-file-thumb">
                        <img src={c1} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">1</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>780.56 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dot_btn">
                          <a className="dropdown-link link_btn" >
                            <i className="la la-ellipsis-v" />
                          </a>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                          <Dropdown.Item href="#/action-1" className="dropdown_hov" onClick={showDetails}>
                            <i className="las la-info-circle mr-2" />
                            Details Info
                          </Dropdown.Item>

                          <Dropdown.Item href="#/action-2" className="dropdown_hov">
                            <i className="la la-download mr-2" />
                            Download
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-clipboard mr-2" />
                            Copy Link
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-trash mr-2" />
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="M-2.png">
                      <div className="card-file-thumb">
                        <img src={c2} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">M-2</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>70.4 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dot_btn">
                          <a className="dropdown-link link_btn" >
                            <i className="la la-ellipsis-v" />
                          </a>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                          <Dropdown.Item href="#/action-1" className="dropdown_hov" onClick={showDetails}>
                            <i className="las la-info-circle mr-2" />
                            Details Info
                          </Dropdown.Item>

                          <Dropdown.Item href="#/action-2" className="dropdown_hov">
                            <i className="la la-download mr-2" />
                            Download
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-clipboard mr-2" />
                            Copy Link
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-trash mr-2" />
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="2.png">
                      <div className="card-file-thumb">
                        <img src={c3} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">2</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>1.07 MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dot_btn">
                          <a className="dropdown-link link_btn" >
                            <i className="la la-ellipsis-v" />
                          </a>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                          <Dropdown.Item href="#/action-1" className="dropdown_hov" onClick={showDetails}>
                            <i className="las la-info-circle mr-2" />
                            Details Info
                          </Dropdown.Item>

                          <Dropdown.Item href="#/action-2" className="dropdown_hov">
                            <i className="la la-download mr-2" />
                            Download
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-clipboard mr-2" />
                            Copy Link
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-trash mr-2" />
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="M-3.png">
                      <div className="card-file-thumb">
                        <img src={c4} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">M-3</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>59.5 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dot_btn">
                          <a className="dropdown-link link_btn" >
                            <i className="la la-ellipsis-v" />
                          </a>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                          <Dropdown.Item href="#/action-1" className="dropdown_hov" onClick={showDetails}>
                            <i className="las la-info-circle mr-2" />
                            Details Info
                          </Dropdown.Item>

                          <Dropdown.Item href="#/action-2" className="dropdown_hov">
                            <i className="la la-download mr-2" />
                            Download
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-clipboard mr-2" />
                            Copy Link
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-trash mr-2" />
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="3.png">
                      <div className="card-file-thumb">
                        <img src={c5} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">3</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>831.99 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dot_btn">
                          <a className="dropdown-link link_btn" >
                            <i className="la la-ellipsis-v" />
                          </a>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                          <Dropdown.Item href="#/action-1" className="dropdown_hov" onClick={showDetails}>
                            <i className="las la-info-circle mr-2" />
                            Details Info
                          </Dropdown.Item>

                          <Dropdown.Item href="#/action-2" className="dropdown_hov">
                            <i className="la la-download mr-2" />
                            Download
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-clipboard mr-2" />
                            Copy Link
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown_hov">
                            <i className="las la-trash mr-2" />
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="M-4.png">
                      <div className="card-file-thumb">
                        <img src={old1} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">M-4</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>73.87 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={306}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/tJAsCSW4HdIkyOs6Ny34OntGa8t9NaNgmOlNLPXU.png" target="_blank" download="4.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/tJAsCSW4HdIkyOs6Ny34OntGa8t9NaNgmOlNLPXU.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/306" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="4.png">
                      <div className="card-file-thumb">
                        <img src={old2} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">4</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>1.14 MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={305}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/rxGUYkry7DQzWegMZ9VfYy6UjPiu2gWB7PKpX1P9.png" target="_blank" download="M-5.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/rxGUYkry7DQzWegMZ9VfYy6UjPiu2gWB7PKpX1P9.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/305" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="M-5.png">
                      <div className="card-file-thumb">
                        <img src={mr1} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">M-5</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>68.73 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={304}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/c8Nq9cfMecTVbcBW7K0HxsH7Zqw65choZnCu1pRg.png" target="_blank" download="5.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/c8Nq9cfMecTVbcBW7K0HxsH7Zqw65choZnCu1pRg.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/304" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="5.png">
                      <div className="card-file-thumb">
                        <img src={mr2} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">5</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>1010.26 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={303}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/14Q4NZoCYMxIc33sY0ayS9SYH5Kf3fdCCGD59pB1.png" target="_blank" download="6.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/14Q4NZoCYMxIc33sY0ayS9SYH5Kf3fdCCGD59pB1.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/303" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="6.png">
                      <div className="card-file-thumb">
                        <img src={mr3} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">6</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>1.25 MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={302}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/Ha3BoiWkO6b4vENPPTM7D5SeEMP6uImAsu5MBayW.jpg" target="_blank" download="love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/Ha3BoiWkO6b4vENPPTM7D5SeEMP6uImAsu5MBayW.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/302" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress.jpg">
                      <div className="card-file-thumb">
                        <img src={mr4} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>411.14 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={301}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/FZtTEKkOiKg6DkHwSnDDhN783QKS3HJgQW2qzZsb.jpg" target="_blank" download="groom-bride-wedding-day.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/FZtTEKkOiKg6DkHwSnDDhN783QKS3HJgQW2qzZsb.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/301" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="groom-bride-wedding-day.jpg">
                      <div className="card-file-thumb">
                        <img src={mr5} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">groom-bride-wedding-day</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>780.64 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={300}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/xV2jN72ErCdpYe6aZ5vysEUmBqm2qiouz13Ut0MA.jpg" target="_blank" download="beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/xV2jN72ErCdpYe6aZ5vysEUmBqm2qiouz13Ut0MA.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/300" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day.jpg">
                      <div className="card-file-thumb">
                        <img src={mr6} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>315.12 KB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={299}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/WmTlHsgN9QazTwnPoAfUlkmqlJEE29i6GZMYyk6H.jpg" target="_blank" download="wedding.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/WmTlHsgN9QazTwnPoAfUlkmqlJEE29i6GZMYyk6H.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/299" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="wedding.jpg">
                      <div className="card-file-thumb">
                        <img src={mr7} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">wedding</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>315.85 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={298}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/Ge17HtrhIa4YTojwUa1LGDyJgYLZP1CpNlrDn3av.jpg" target="_blank" download="gorgeous-bride-handsome-groom-touching-by-faces-each-other.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/Ge17HtrhIa4YTojwUa1LGDyJgYLZP1CpNlrDn3av.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/298" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="gorgeous-bride-handsome-groom-touching-by-faces-each-other.jpg">
                      <div className="card-file-thumb">
                        <img src={mr8} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">gorgeous-bride-handsome-groom-touching-by-faces-each-other</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>533.11 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={297}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/Z1N1XQGvZUU1BlpprntVmmiMdo80sIy638rnMQLD.jpg" target="_blank" download="hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/Z1N1XQGvZUU1BlpprntVmmiMdo80sIy638rnMQLD.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/297" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit.jpg">
                      <div className="card-file-thumb">
                        <img src={mr9} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>294.73 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={296}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/yYDTNN7ctub8KHPGXJcOuNM5LpP3xVLeTEEejyZS.jpg" target="_blank" download="wedding-shot-bride-groom-park-romantic-scene-park.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/yYDTNN7ctub8KHPGXJcOuNM5LpP3xVLeTEEejyZS.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/296" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="wedding-shot-bride-groom-park-romantic-scene-park.jpg">
                      <div className="card-file-thumb">
                        <img src={mr10} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">wedding-shot-bride-groom-park-romantic-scene-park</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>234.45 KB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={295}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/kfLiYSgqrdD5t8KYrg9HJNZyERclSnbpyZXxJjb5.jpg" target="_blank" download="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/kfLiYSgqrdD5t8KYrg9HJNZyERclSnbpyZXxJjb5.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/295" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg">
                      <div className="card-file-thumb">
                        <img src={mr11} className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>313.14 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={294}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/9xXI1UVwcgC0jB4s8WeAZQM0BHh55jAEfkL6wkkZ.png" target="_blank" download="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/9xXI1UVwcgC0jB4s8WeAZQM0BHh55jAEfkL6wkkZ.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/294" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/9xXI1UVwcgC0jB4s8WeAZQM0BHh55jAEfkL6wkkZ.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>18.93 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={293}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" target="_blank" download="sorin-sirbu-lPpfSOPtbSI-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/293" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="sorin-sirbu-lPpfSOPtbSI-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">sorin-sirbu-lPpfSOPtbSI-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>356.5 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={292}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/qly8Bzs3KT6LJYwbixkIspkk05zFYJ1PtB3k88CV.jpg" target="_blank" download="mohammad-faruque-TwuPHbcQ57w-unsplash (1).jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/qly8Bzs3KT6LJYwbixkIspkk05zFYJ1PtB3k88CV.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/292" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="mohammad-faruque-TwuPHbcQ57w-unsplash (1).jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/qly8Bzs3KT6LJYwbixkIspkk05zFYJ1PtB3k88CV.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">mohammad-faruque-TwuPHbcQ57w-unsplash (1)</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>138.57 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={291}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/8B5Rp5xki7JRriLrmNDenuHunFJh9mU4mI86R5s5.jpg" target="_blank" download="roman-voronin-nIW3xrU6RVk-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/8B5Rp5xki7JRriLrmNDenuHunFJh9mU4mI86R5s5.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/291" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="roman-voronin-nIW3xrU6RVk-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/8B5Rp5xki7JRriLrmNDenuHunFJh9mU4mI86R5s5.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">roman-voronin-nIW3xrU6RVk-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>163.92 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={290}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/43hIUjXlfZVAeKhAbchIYeyRQ6rBU6pwtCIqhsPE.jpg" target="_blank" download="mohammad-faruque-muWowSks60w-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/43hIUjXlfZVAeKhAbchIYeyRQ6rBU6pwtCIqhsPE.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/290" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="mohammad-faruque-muWowSks60w-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/43hIUjXlfZVAeKhAbchIYeyRQ6rBU6pwtCIqhsPE.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">mohammad-faruque-muWowSks60w-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>121.67 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={289}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/SjnA19pXerIYsX5a30GE1cjxaWMuzVJEvp5Xixab.jpg" target="_blank" download="nicolas-horn-MTZTGvDsHFY-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/SjnA19pXerIYsX5a30GE1cjxaWMuzVJEvp5Xixab.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/289" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="nicolas-horn-MTZTGvDsHFY-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/SjnA19pXerIYsX5a30GE1cjxaWMuzVJEvp5Xixab.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">nicolas-horn-MTZTGvDsHFY-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>104.96 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={288}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/ftplN2fgKnlYgX6qMTj8bYldFN50VZd1wDsuoW4I.png" target="_blank" download="20.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/ftplN2fgKnlYgX6qMTj8bYldFN50VZd1wDsuoW4I.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/288" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="20.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/ftplN2fgKnlYgX6qMTj8bYldFN50VZd1wDsuoW4I.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">20</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>858.16 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={287}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/HKb4dap327ArsZtb12KXUNeFVCfbA7mZBqQIGrCw.png" target="_blank" download="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/HKb4dap327ArsZtb12KXUNeFVCfbA7mZBqQIGrCw.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/287" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/HKb4dap327ArsZtb12KXUNeFVCfbA7mZBqQIGrCw.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>1.46 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={286}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/NiLOYq4Y5Lap1Ek7QrZcpgXq6UGwcOGpd5RQoOMA.jpg" target="_blank" download="nicolas-horn-MTZTGvDsHFY-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/NiLOYq4Y5Lap1Ek7QrZcpgXq6UGwcOGpd5RQoOMA.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/286" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="nicolas-horn-MTZTGvDsHFY-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/NiLOYq4Y5Lap1Ek7QrZcpgXq6UGwcOGpd5RQoOMA.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">nicolas-horn-MTZTGvDsHFY-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>104.96 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={285}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/OnMJ1HjOWTgzMDcvQxBGcreDtmqHGXAdFLK0dt5X.jpg" target="_blank" download="ethan-robertson-gWzGqPw2ODY-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/OnMJ1HjOWTgzMDcvQxBGcreDtmqHGXAdFLK0dt5X.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/285" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="ethan-robertson-gWzGqPw2ODY-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/OnMJ1HjOWTgzMDcvQxBGcreDtmqHGXAdFLK0dt5X.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">ethan-robertson-gWzGqPw2ODY-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>216.66 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={284}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/a8iq3dusA3kZ1K7k7aigsW5prAH1yuk4rycbn7o4.jpg" target="_blank" download="silviu-beniamin-tofan--qFc0RuHYHQ-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/a8iq3dusA3kZ1K7k7aigsW5prAH1yuk4rycbn7o4.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/284" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="silviu-beniamin-tofan--qFc0RuHYHQ-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/a8iq3dusA3kZ1K7k7aigsW5prAH1yuk4rycbn7o4.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">silviu-beniamin-tofan--qFc0RuHYHQ-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>142.11 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={283}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/vUItPYhhx4QJby7IFyNcgwOxMC0abDqcTXe6AzPW.jpg" target="_blank" download="silviu-beniamin-tofan-liy0P6AmGPM-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/vUItPYhhx4QJby7IFyNcgwOxMC0abDqcTXe6AzPW.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/283" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="silviu-beniamin-tofan-liy0P6AmGPM-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/vUItPYhhx4QJby7IFyNcgwOxMC0abDqcTXe6AzPW.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">silviu-beniamin-tofan-liy0P6AmGPM-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>111.73 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={282}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/jOUPBja5SARilROexIqUGglReaJlHd3O5yBA7tL5.jpg" target="_blank" download="silviu-beniamin-tofan-wCjdgOQY8iY-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/jOUPBja5SARilROexIqUGglReaJlHd3O5yBA7tL5.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/282" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="silviu-beniamin-tofan-wCjdgOQY8iY-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/jOUPBja5SARilROexIqUGglReaJlHd3O5yBA7tL5.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">silviu-beniamin-tofan-wCjdgOQY8iY-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>143.7 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={281}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/6skx1airyx6XEGZD9lIi8z9qWadlOUWOI0ytQqY6.jpg" target="_blank" download="silviu-beniamin-tofan-liy0P6AmGPM-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/6skx1airyx6XEGZD9lIi8z9qWadlOUWOI0ytQqY6.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/281" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="silviu-beniamin-tofan-liy0P6AmGPM-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/6skx1airyx6XEGZD9lIi8z9qWadlOUWOI0ytQqY6.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">silviu-beniamin-tofan-liy0P6AmGPM-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>111.73 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={280}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/dkw09bT1ySlntuOQKK8oQ6vL9b0eIiwu7Lztcn8f.jpg" target="_blank" download="silviu-beniamin-tofan-FkMa2CXpaUU-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/dkw09bT1ySlntuOQKK8oQ6vL9b0eIiwu7Lztcn8f.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/280" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="silviu-beniamin-tofan-FkMa2CXpaUU-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/dkw09bT1ySlntuOQKK8oQ6vL9b0eIiwu7Lztcn8f.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">silviu-beniamin-tofan-FkMa2CXpaUU-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>149.17 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={279}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/d60ho8ezrvYMxYH7SaU0mF4UmWttV321vSMrZ8yz.png" target="_blank" download="17.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/d60ho8ezrvYMxYH7SaU0mF4UmWttV321vSMrZ8yz.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/279" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="17.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/d60ho8ezrvYMxYH7SaU0mF4UmWttV321vSMrZ8yz.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">17</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>777.95 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={278}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/KA9rZPh3DxXFiKIAWpBqEF35ycIsbF3DLboW2wvI.jpg" target="_blank" download="medicalert-uk-uXB-7la5vqA-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/KA9rZPh3DxXFiKIAWpBqEF35ycIsbF3DLboW2wvI.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/278" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="medicalert-uk-uXB-7la5vqA-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/KA9rZPh3DxXFiKIAWpBqEF35ycIsbF3DLboW2wvI.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">medicalert-uk-uXB-7la5vqA-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>112.01 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={277}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/cEOhVAwkzGE51HebB3Ky9CwQU3vLyKnW4DRMQ1mt.jpg" target="_blank" download="crop-elegant-newlyweds-near-lake.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/cEOhVAwkzGE51HebB3Ky9CwQU3vLyKnW4DRMQ1mt.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/277" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="crop-elegant-newlyweds-near-lake.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/cEOhVAwkzGE51HebB3Ky9CwQU3vLyKnW4DRMQ1mt.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">crop-elegant-newlyweds-near-lake</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>229.93 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={276}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/OkwfK3lo8BgrCkMuOA4NGeORw7g9ldcOp6ykrIeU.jpg" target="_blank" download="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/OkwfK3lo8BgrCkMuOA4NGeORw7g9ldcOp6ykrIeU.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/276" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/OkwfK3lo8BgrCkMuOA4NGeORw7g9ldcOp6ykrIeU.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>194.78 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={275}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/Y8PH5MfCr5LMy1nBBGdLVqRKDvHRI8wWqiiCPnRK.png" target="_blank" download="🧨-SQLSTATE-23000-Integrity-constraint-violation-1048-Column-description-cannot-be-null-SQL-insert-into-`support_tickets`-`subject`-`support_category_id`-`sender_user_id`-`assigned_user_id`-`ticket_id.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/Y8PH5MfCr5LMy1nBBGdLVqRKDvHRI8wWqiiCPnRK.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/275" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="🧨-SQLSTATE-23000-Integrity-constraint-violation-1048-Column-description-cannot-be-null-SQL-insert-into-`support_tickets`-`subject`-`support_category_id`-`sender_user_id`-`assigned_user_id`-`ticket_id.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/Y8PH5MfCr5LMy1nBBGdLVqRKDvHRI8wWqiiCPnRK.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">🧨-SQLSTATE-23000-Integrity-constraint-violation-1048-Column-description-cannot-be-null-SQL-insert-into-`support_tickets`-`subject`-`support_category_id`-`sender_user_id`-`assigned_user_id`-`ticket_id</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>471.52 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={274}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/mGjZwnY7801CUnPA31gqWcH9FUisUPHpMSlFDXBi.png" target="_blank" download="Group 8070.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/mGjZwnY7801CUnPA31gqWcH9FUisUPHpMSlFDXBi.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/274" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="Group 8070.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/mGjZwnY7801CUnPA31gqWcH9FUisUPHpMSlFDXBi.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">Group 8070</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>324.36 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={273}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/M1QyKHaRWLrZa7h2EjTBsAdTLxzefYPRk6FyDbdq.jpg" target="_blank" download="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/M1QyKHaRWLrZa7h2EjTBsAdTLxzefYPRk6FyDbdq.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/273" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/M1QyKHaRWLrZa7h2EjTBsAdTLxzefYPRk6FyDbdq.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>129.8 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={272}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/Qo4cAGtMHA9feO1ikM81J6pIz0377AgLMUKz5Vx4.jpg" target="_blank" download="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/Qo4cAGtMHA9feO1ikM81J6pIz0377AgLMUKz5Vx4.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/272" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/Qo4cAGtMHA9feO1ikM81J6pIz0377AgLMUKz5Vx4.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>129.8 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={271}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/TrEw2nVHuYzHWsE4OWgLxThJNYn3jHCjtswqUdf8.jpg" target="_blank" download="beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/TrEw2nVHuYzHWsE4OWgLxThJNYn3jHCjtswqUdf8.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/271" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/TrEw2nVHuYzHWsE4OWgLxThJNYn3jHCjtswqUdf8.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>157.55 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={270}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/HbCefrFWcM1eZa7TsbyOhltQQd10MTY42HCQ40QP.jpg" target="_blank" download="jonathan-borba-42c1mYABhLc-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/HbCefrFWcM1eZa7TsbyOhltQQd10MTY42HCQ40QP.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/270" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="jonathan-borba-42c1mYABhLc-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/HbCefrFWcM1eZa7TsbyOhltQQd10MTY42HCQ40QP.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">jonathan-borba-42c1mYABhLc-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>212.2 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={269}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/g7VGEX77FL0Dt3B14AbR3t0qS4ewRdhzjgPpxFdM.jpg" target="_blank" download="young-handsome-hipster-man-posing-street-it-businessman-plaid-shirt-sunglasses-europe-city-center.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/g7VGEX77FL0Dt3B14AbR3t0qS4ewRdhzjgPpxFdM.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/269" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="young-handsome-hipster-man-posing-street-it-businessman-plaid-shirt-sunglasses-europe-city-center.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/g7VGEX77FL0Dt3B14AbR3t0qS4ewRdhzjgPpxFdM.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">young-handsome-hipster-man-posing-street-it-businessman-plaid-shirt-sunglasses-europe-city-center</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>169.79 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={268}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/o2nSZVxTueTpHdIq66dQKNtkO2fCIa8szOA3joql.jpg" target="_blank" download="close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/o2nSZVxTueTpHdIq66dQKNtkO2fCIa8szOA3joql.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/268" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/o2nSZVxTueTpHdIq66dQKNtkO2fCIa8szOA3joql.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>158.61 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={267}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/BZddYydRWkEZj3oZhFiGrmIPUCcyHWqxvSghPqE3.jpg" target="_blank" download="close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe (1).jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/BZddYydRWkEZj3oZhFiGrmIPUCcyHWqxvSghPqE3.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/267" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe (1).jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/BZddYydRWkEZj3oZhFiGrmIPUCcyHWqxvSghPqE3.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe (1)</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>77.24 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={266}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/YulUsyJg9Zmch09vaJUCjFgbykaVW3mZh13P9lXt.jpg" target="_blank" download="close-up-bright-portrait-young-handsome-hipster-man-wearing-plaid-shirt-pretty-face-brown-eyes.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/YulUsyJg9Zmch09vaJUCjFgbykaVW3mZh13P9lXt.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/266" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="close-up-bright-portrait-young-handsome-hipster-man-wearing-plaid-shirt-pretty-face-brown-eyes.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/YulUsyJg9Zmch09vaJUCjFgbykaVW3mZh13P9lXt.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">close-up-bright-portrait-young-handsome-hipster-man-wearing-plaid-shirt-pretty-face-brown-eyes</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>171.44 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={265}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/kimX2PnqPaTQt1YJWqudR6ipTmWfhxMrfCb4uTf0.png" target="_blank" download="18.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/kimX2PnqPaTQt1YJWqudR6ipTmWfhxMrfCb4uTf0.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/265" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="18.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/kimX2PnqPaTQt1YJWqudR6ipTmWfhxMrfCb4uTf0.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">18</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>897.64 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={264}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/UZR9qdCaIqm7RLwZOsQo8YPd2PUBlt3aWKH9pU08.png" target="_blank" download="17.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/UZR9qdCaIqm7RLwZOsQo8YPd2PUBlt3aWKH9pU08.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/264" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="17.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/UZR9qdCaIqm7RLwZOsQo8YPd2PUBlt3aWKH9pU08.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">17</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>1.09 MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={263}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/v7t6fMIBFCeasUf3KDfKPpEhuSc4XVabW5yqYni8.jpg" target="_blank" download="milan-popovic-FHvpa4-Fpu8-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/v7t6fMIBFCeasUf3KDfKPpEhuSc4XVabW5yqYni8.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/263" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="milan-popovic-FHvpa4-Fpu8-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/v7t6fMIBFCeasUf3KDfKPpEhuSc4XVabW5yqYni8.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">milan-popovic-FHvpa4-Fpu8-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>168.69 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={262}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/VnXkjr8WzmYtJD3F2K0Jtbw1QD2CHkb249rpY2W8.png" target="_blank" download="16.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/VnXkjr8WzmYtJD3F2K0Jtbw1QD2CHkb249rpY2W8.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/262" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="16.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/VnXkjr8WzmYtJD3F2K0Jtbw1QD2CHkb249rpY2W8.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">16</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>691.59 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={261}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/1x6x8bz3NJHU34FpKlEqrx0STkljGp65gscRBABH.jpg" target="_blank" download="mike-austin-ZioKZy6xc38-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/1x6x8bz3NJHU34FpKlEqrx0STkljGp65gscRBABH.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/261" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="mike-austin-ZioKZy6xc38-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/1x6x8bz3NJHU34FpKlEqrx0STkljGp65gscRBABH.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">mike-austin-ZioKZy6xc38-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>296.15 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={260}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/NzhUXpngwJg0rSmYenZciDQJWKZTqX0RntLOk3ny.jpg" target="_blank" download="mike-austin-oLf7m-p4_is-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/NzhUXpngwJg0rSmYenZciDQJWKZTqX0RntLOk3ny.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/260" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="mike-austin-oLf7m-p4_is-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/NzhUXpngwJg0rSmYenZciDQJWKZTqX0RntLOk3ny.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">mike-austin-oLf7m-p4_is-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>183.83 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={259}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/Ds7Ny2q2fI9ucKUzS2lLNGs35vzabyIkWBUw1MbJ.jpg" target="_blank" download="mike-austin-n1a3hgzVHkY-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/Ds7Ny2q2fI9ucKUzS2lLNGs35vzabyIkWBUw1MbJ.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/259" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="mike-austin-n1a3hgzVHkY-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/Ds7Ny2q2fI9ucKUzS2lLNGs35vzabyIkWBUw1MbJ.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">mike-austin-n1a3hgzVHkY-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>181.95 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={258}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/ZFb4kpCthSZaJ9iE02C7h40Vjl0HBhHyU1oc53px.jpg" target="_blank" download="mike-austin-9Jwq0ezonOI-unsplash.jpg" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/ZFb4kpCthSZaJ9iE02C7h40Vjl0HBhHyU1oc53px.jpg">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/258" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="mike-austin-9Jwq0ezonOI-unsplash.jpg">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/ZFb4kpCthSZaJ9iE02C7h40Vjl0HBhHyU1oc53px.jpg" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">mike-austin-9Jwq0ezonOI-unsplash</span>
                          <span className="ext">.jpg</span>
                        </h6>
                        <p>149.08 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={257}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/MRZJfhB4rQPec6Cs96oYI4tRY131UUXqGmmDIWoA.png" target="_blank" download="15.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/MRZJfhB4rQPec6Cs96oYI4tRY131UUXqGmmDIWoA.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/257" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="15.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/MRZJfhB4rQPec6Cs96oYI4tRY131UUXqGmmDIWoA.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">15</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>892.16 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={256}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/ccZXfUBJdeI3nVlTaDjj5XktantwFNh70bYVXTJR.png" target="_blank" download="Group 8176.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/ccZXfUBJdeI3nVlTaDjj5XktantwFNh70bYVXTJR.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/256" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="Group 8176.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/ccZXfUBJdeI3nVlTaDjj5XktantwFNh70bYVXTJR.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">Group 8176</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>6.4 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={255}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/0d0v5DC1Juc6RwmA6DtnWPx4QXz4mGc6ckr3Oh8L.png" target="_blank" download="14.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/0d0v5DC1Juc6RwmA6DtnWPx4QXz4mGc6ckr3Oh8L.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/255" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="14.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/0d0v5DC1Juc6RwmA6DtnWPx4QXz4mGc6ckr3Oh8L.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">14</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>619.04 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto w-140px w-lg-220px">
                  <div className="aiz-file-box">
                    <div className="dropdown-file">
                      <a className="dropdown-link" data-toggle="dropdown">
                        <i className="la la-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id={254}>
                          <i className="las la-info-circle mr-2" />
                          <span>Details Info</span>
                        </a>
                        <a href="https://weddemoadmin.abaris.in/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" target="_blank" download="13.png" className="dropdown-item">
                          <i className="la la-download mr-2" />
                          <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://weddemoadmin.abaris.in/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png">
                          <i className="las la-clipboard mr-2" />
                          <span>Copy Link</span>
                        </a>
                        <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://weddemoadmin.abaris.in/admin/uploaded-files/destroy/254" data-target="#delete-modal">
                          <i className="las la-trash mr-2" />
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                    <div className="card card-file aiz-uploader-select c-default" title="13.png">
                      <div className="card-file-thumb">
                        <img src="https://weddemoadmin.abaris.in/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" className="img-fit" />
                      </div>
                      <div className="card-body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">13</span>
                          <span className="ext">.png</span>
                        </h6>
                        <p>519.1 KB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aiz-pagination mt-3">
                <nav>
                  <ul className="pagination">
                    <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                      <span className="page-link" aria-hidden="true">‹</span>
                    </li>
                    <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/uploaded-files?page=2">2</a></li>
                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/uploaded-files?page=3">3</a></li>
                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/uploaded-files?page=4">4</a></li>
                    <li className="page-item">
                      <a className="page-link" href="https://weddemoadmin.abaris.in/admin/uploaded-files?page=2" rel="next" aria-label="Next »">›</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default UploadedFiles