import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import ReactQuill from 'react-quill';

function EditPages() {
    const [lgShow, setLgShow] = useState(false);
    const [body,setBody] = useState("")
    const handleBody = (e) => {
        setBody(e)
    }
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-xl-10 mx-auto">
                            <h6 className="fw-600">Home Page Settings</h6>
                            <div className="accordion" id="accordionExample">
                                {/* Home Slider */}
                                <div className="card">
                                    <div className="card-header" id="headingHomeSlider" data-toggle="collapse" data-target="#collapseHomeSlider" aria-expanded="true" aria-controls="collapseHomeSlider">
                                        <button className="btn btn-link fs-16 text-reset text-decoration-none" type="button" fdprocessedid="lujvsd">Home Page Slider</button>
                                    </div>
                                    <div id="collapseHomeSlider" className="collapse show" aria-labelledby="headingHomeSlider" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                                <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />                        <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Show Home Page Slider?</label>
                                                    <div className="col-md-8">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="hidden" name="types[]" defaultValue="show_homepage_slider" />
                                                            <input type="checkbox" name="show_homepage_slider" defaultChecked />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Home Page Slider Text</label>
                                                    <div className="col-md-9">
                                                        {/* <input type="hidden" name="types[]" defaultValue="home_slider_text" /> */}
                                                        <ReactQuill
    placeholder='write something amazing...'
    modules={EditPages.modules}
    formats={EditPages.formats}
    onChange={handleBody}
    value={body}
    />
                                                    </div>
                                                   
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Show right side registration form?</label>
                                                    <div className="col-md-8">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="hidden" name="types[]" defaultValue="show_homepage_slider_registration" />
                                                            <input type="checkbox" name="show_homepage_slider_registration" defaultChecked />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Photos</label>
                                                    <div className="home-slider-target">
                                                        <input type="hidden" name="types[]" defaultValue="home_slider_images" />
                                                        <div className="row gutters-5">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <div className="input-group" onClick={() => setLgShow(true)} data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="home_slider_images" />
                                                                        <input type="hidden" name="home_slider_images[]" className="selected-files" defaultValue={277} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={277} title="crop-elegant-newlyweds-near-lake.jpg"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/cEOhVAwkzGE51HebB3Ky9CwQU3vLyKnW4DRMQ1mt.jpg" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">crop-elegant-newlyweds-near-lake</span><span className="ext">.jpg</span></h6><p>230 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="42v2wq"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="s5ukrl">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row gutters-5">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <div className="input-group" onClick={() => setLgShow(true)} data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="home_slider_images" />
                                                                        <input type="hidden" name="home_slider_images[]" className="selected-files" defaultValue={295} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={295} title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/kfLiYSgqrdD5t8KYrg9HJNZyERclSnbpyZXxJjb5.jpg" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation</span><span className="ext">.jpg</span></h6><p>313 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="0k2zqv"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="v759za">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row gutters-5">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <div className="input-group" onClick={() => setLgShow(true)} data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="home_slider_images" />
                                                                        <input type="hidden" name="home_slider_images[]" className="selected-files" defaultValue={300} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={300} title="beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day.jpg"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/xV2jN72ErCdpYe6aZ5vysEUmBqm2qiouz13Ut0MA.jpg" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day</span><span className="ext">.jpg</span></h6><p>315 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="rdacvn"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="qmkisa">
                                                                        <i className="las la-times" />
                                                                    </button>
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
                     " role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} style={{ width: '0%' }} /><div className="uppy-StatusBar-actions" /></div><div className="uppy uppy-Informer" aria-hidden="true"><p role="alert"> </p>
                                                                                    </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                            </div>
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
                                                    <button type="button" className="btn btn-soft-secondary btn-sm" data-toggle="add-more" data-content="
                              <div class=&quot;row gutters-5&quot;>
                              <div class=&quot;col&quot;>
                              <div class=&quot;form-group&quot;>
                              <div class=&quot;input-group&quot; data-toggle=&quot;aizuploader&quot; data-type=&quot;image&quot;>
                              <div class=&quot;input-group-prepend&quot;>
                              <div class=&quot;input-group-text bg-soft-secondary font-weight-medium&quot;>Browse</div>
                              </div>
                              <div class=&quot;form-control file-amount&quot;>Choose file</div>
                              <input type=&quot;hidden&quot; name=&quot;types[]&quot; value=&quot;home_slider_images&quot;>
                              <input type=&quot;hidden&quot; name=&quot;home_slider_images[]&quot; class=&quot;selected-files&quot;>
                              </div>
                              <div class=&quot;file-preview box sm&quot;>
                              </div>
                              </div>
                              </div>
                              <div class=&quot;col-md-auto&quot;>
                              <div class=&quot;form-group&quot;>
                              <button type=&quot;button&quot; class=&quot;mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger&quot; data-toggle=&quot;remove-parent&quot; data-parent=&quot;.row&quot;>
                              <i class=&quot;las la-times&quot;></i>
                              </button>
                              </div>
                              </div>
                              </div>" data-target=".home-slider-target" fdprocessedid="ksk7j">
                                                        Add New
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <button type="button" className="btn btn-primary" fdprocessedid="zo9is">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Premium member Section */}
                                <div className="card">
                                    <div className="card-header collapsed" id="headingPremiumMember" data-toggle="collapse" data-target="#collapsePremiumMember" aria-expanded="true" aria-controls="collapsePremiumMember">
                                        <button className="btn btn-link fs-16 text-reset text-decoration-none" type="button" fdprocessedid="fghv76">Premium Member Section</button>
                                    </div>
                                    <div id="collapsePremiumMember" className="collapse" aria-labelledby="headingPremiumMember" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                                <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />                            <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Show Premium Member Section?</label>
                                                    <div className="col-md-9">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="hidden" name="types[]" defaultValue="show_premium_member_section" />
                                                            <input type="checkbox" name="show_premium_member_section" defaultChecked />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="premium_member_section_title" />
                                                        <input type="text" name="premium_member_section_title" defaultValue="Premium Members" className="form-control" placeholder="Title" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Sub Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="premium_member_section_sub_title" />
                                                        <textarea type="text" name="premium_member_section_sub_title" className="form-control" rows={5} placeholder="Sub Title" defaultValue={"Every Premium member on Active Matrimonial is privileged by our policy & rules so you don’t have to worry about your privacy or security."} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Max Premium Member</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="max_premium_member_homepage" />
                                                        <input type="number" name="max_premium_member_homepage" defaultValue={15} className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <button type="button" className="btn btn-primary">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Home Page Banner 1 */}



                                <div className="card">
                                    <div className="card-header collapsed" id="headingBanner1" data-toggle="collapse" data-target="#collapseBanner1" aria-expanded="true" aria-controls="collapseBanner1">
                                        <button className="btn btn-link fs-16 text-reset text-decoration-none" type="button" fdprocessedid="vb0cx">Home Page Banner 1 (Max 3)</button>
                                    </div>
                                    <div id="collapseBanner1" className="collapse" aria-labelledby="headingBanner1" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                                <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />                            <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Show Banner 1 Section?</label>
                                                    <div className="col-md-9">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="hidden" name="types[]" defaultValue="show_home_banner1_section" />
                                                            <input type="checkbox" name="show_home_banner1_section" defaultChecked />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Banner &amp; Links (Size : 1200x600)</label>
                                                    <div className="home-banner1-target">
                                                        <input type="hidden" name="types[]" defaultValue="home_banner1_images" />
                                                        <input type="hidden" name="types[]" defaultValue="home_banner1_links" />
                                                        <div className="row gutters-5">
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="home_banner1_images" />
                                                                        <input type="hidden" name="home_banner1_images[]" className="selected-files" defaultValue={141} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={141} title="Group 8168.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/SHlh3Cwc7RaNiiSyvNGmexFDLSYoHkRXlMQqvYwo.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Group 8168</span><span className="ext">.png</span></h6><p>144 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="home_banner1_links" />
                                                                    <input type="text" className="form-control" placeholder="http://" name="home_banner1_links[]" defaultValue="#" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row gutters-5">
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="home_banner1_images" />
                                                                        <input type="hidden" name="home_banner1_images[]" className="selected-files" defaultValue={142} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={142} title="Group 8169.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/MKeWioNRNyyZSPAJoi6Cy99Jk7kJn8gJabqjEBQW.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Group 8169</span><span className="ext">.png</span></h6><p>185 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="home_banner1_links" />
                                                                    <input type="text" className="form-control" placeholder="http://" name="home_banner1_links[]" defaultValue="#" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row gutters-5">
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="home_banner1_images" />
                                                                        <input type="hidden" name="home_banner1_images[]" className="selected-files" defaultValue={143} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={143} title="Group 8170.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/UgoHnTw7QRHMYhzI9MaeSRNvcIP8FxR1FaGNyY32.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Group 8170</span><span className="ext">.png</span></h6><p>181 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="home_banner1_links" />
                                                                    <input type="text" className="form-control" placeholder="http://" name="home_banner1_links[]" defaultValue="#" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button" className="btn btn-soft-secondary btn-sm" data-toggle="add-more" data-content="
                              <div class=&quot;row gutters-5&quot;>
                              <div class=&quot;col-md-5&quot;>
                              <div class=&quot;form-group&quot;>
                              <div class=&quot;input-group&quot; data-toggle=&quot;aizuploader&quot; data-type=&quot;image&quot;>
                              <div class=&quot;input-group-prepend&quot;>
                              <div class=&quot;input-group-text bg-soft-secondary font-weight-medium&quot;>Browse</div>
                              </div>
                              <div class=&quot;form-control file-amount&quot;>Choose file</div>
                              <input type=&quot;hidden&quot; name=&quot;types[]&quot; value=&quot;home_banner1_images&quot;>
                              <input type=&quot;hidden&quot; name=&quot;home_banner1_images[]&quot; class=&quot;selected-files&quot;>
                              </div>
                              <div class=&quot;file-preview box sm&quot;>
                              </div>
                              </div>
                              </div>
                              <div class=&quot;col-md&quot;>
                              <div class=&quot;form-group&quot;>
                              <input type=&quot;hidden&quot; name=&quot;types[]&quot; value=&quot;home_banner1_links&quot;>
                              <input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;http://&quot; name=&quot;home_banner1_links[]&quot;>
                              </div>
                              </div>
                              <div class=&quot;col-md-auto&quot;>
                              <div class=&quot;form-group&quot;>
                              <button type=&quot;button&quot; class=&quot;mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger&quot; data-toggle=&quot;remove-parent&quot; data-parent=&quot;.row&quot;>
                              <i class=&quot;las la-times&quot;></i>
                              </button>
                              </div>
                              </div>
                              </div>" data-target=".home-banner1-target">
                                                        Add New
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <button type="button" className="btn btn-primary">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* How it Works Section  */}
                                <div className="card">
                                    <div className="card-header collapsed" id="headingHowItWorks" data-toggle="collapse" data-target="#collapseHowItWorks" aria-expanded="true" aria-controls="collapseOne">
                                        <button className="btn btn-link fs-16 text-reset text-decoration-none" type="button" fdprocessedid="5ezfie">How it Works Section</button>
                                    </div>
                                    <div id="collapseHowItWorks" className="collapse" aria-labelledby="headingHowItWorks" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                                <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />                            <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Show How it Works Section?</label>
                                                    <div className="col-md-9">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="hidden" name="types[]" defaultValue="show_how_it_works_section" />
                                                            <input type="checkbox" name="show_how_it_works_section" defaultChecked />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="how_it_works_title" />
                                                        <input type="text" name="how_it_works_title" defaultValue="How It Works" className="form-control" rows={5} placeholder="Title" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Sub Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="how_it_works_sub_title" />
                                                        <textarea type="text" name="how_it_works_sub_title" className="form-control" rows={5} placeholder="Sub Title" defaultValue={"When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible."} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Steps (Max 4)</label>
                                                    <div className="how_it_works_target">
                                                        <input type="hidden" name="types[]" defaultValue="how_it_works_steps_icons" />
                                                        <input type="hidden" name="types[]" defaultValue="how_it_works_steps_titles" />
                                                        <input type="hidden" name="types[]" defaultValue="how_it_works_steps_sub_titles" />
                                                        <div className="row gutters-5">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="how_it_works_steps_icons" />
                                                                        <input type="hidden" name="how_it_works_steps_icons[]" className="selected-files" defaultValue={145} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={145} title="Group 8002.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/D8IvIuVZ1XgBEbW8WNygx6JM0G6AVPKohVaHyj7X.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Group 8002</span><span className="ext">.png</span></h6><p>3 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="how_it_works_steps_titles" />
                                                                    <input type="text" className="form-control" placeholder="Title" name="how_it_works_steps_titles[]" defaultValue="Sign up" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="how_it_works_steps_sub_titles" />
                                                                    <input type="text" className="form-control" placeholder="Sub Title" name="how_it_works_steps_sub_titles[]" defaultValue="Register for free &  put up your Profile" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row gutters-5">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="how_it_works_steps_icons" />
                                                                        <input type="hidden" name="how_it_works_steps_icons[]" className="selected-files" defaultValue={146} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={146} title="Group 8169.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/zxhwmcnXiCd5WUb8V4GBLb7VkvXuEl2DHFUUD2sk.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Group 8169</span><span className="ext">.png</span></h6><p>6 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="how_it_works_steps_titles" />
                                                                    <input type="text" className="form-control" placeholder="Title" name="how_it_works_steps_titles[]" defaultValue="Connect" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="how_it_works_steps_sub_titles" />
                                                                    <input type="text" className="form-control" placeholder="Sub Title" name="how_it_works_steps_sub_titles[]" defaultValue="Select & Connect with Matches you like" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row gutters-5">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="how_it_works_steps_icons" />
                                                                        <input type="hidden" name="how_it_works_steps_icons[]" className="selected-files" defaultValue={144} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={144} title="Group 8168.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/bB4GZnLSrquYOKA3lbH0JI5WKWEwznwXNvjbAEEU.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Group 8168</span><span className="ext">.png</span></h6><p>3 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="how_it_works_steps_titles" />
                                                                    <input type="text" className="form-control" placeholder="Title" name="how_it_works_steps_titles[]" defaultValue="Interact" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="how_it_works_steps_sub_titles" />
                                                                    <input type="text" className="form-control" placeholder="Sub Title" name="how_it_works_steps_sub_titles[]" defaultValue="Become a Premium Member & Start a Conversation" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button" className="btn btn-soft-secondary btn-sm" data-toggle="add-more" data-content="
                          <div class=&quot;row gutters-5&quot;>
                            <div class=&quot;col-md-3&quot;>
                              <div class=&quot;form-group&quot;>
                                <div class=&quot;input-group&quot; data-toggle=&quot;aizuploader&quot; data-type=&quot;image&quot;>
                                    <div class=&quot;input-group-prepend&quot;>
                                        <div class=&quot;input-group-text bg-soft-secondary font-weight-medium&quot;>Browse</div>
                                    </div>
                                      <div class=&quot;form-control file-amount&quot;>Choose file</div>
                                      <input type=&quot;hidden&quot; name=&quot;types[]&quot; value=&quot;how_it_works_steps_icons&quot;>
                                      <input type=&quot;hidden&quot; name=&quot;how_it_works_steps_icons[]&quot; class=&quot;selected-files&quot; >
                                  </div>
                                  <div class=&quot;file-preview box sm&quot;></div>
                              </div>
                            </div>
                            <div class=&quot;col-md-3&quot;>
                              <div class=&quot;form-group&quot;>
                                <input type=&quot;hidden&quot; name=&quot;types[]&quot; value=&quot;how_it_works_steps_titles&quot;>
                                <input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Title&quot; name=&quot;how_it_works_steps_titles[]&quot; >
                              </div>
                            </div>
                            <div class=&quot;col-md-5&quot;>
                              <div class=&quot;form-group&quot;>
                                <input type=&quot;hidden&quot; name=&quot;types[]&quot; value=&quot;how_it_works_steps_sub_titles&quot;>
                                <input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Sub Title&quot; name=&quot;how_it_works_steps_sub_titles[]&quot;>
                              </div>
                            </div>
                            <div class=&quot;col-md-auto&quot;>
                              <div class=&quot;form-group&quot;>
                                <button type=&quot;button&quot; class=&quot;mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger&quot; data-toggle=&quot;remove-parent&quot; data-parent=&quot;.row&quot;>
                                  <i class=&quot;las la-times&quot;></i>
                                </button>
                              </div>
                            </div>
                          </div>" data-target=".how_it_works_target">
                                                        Add New
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <button type="button" className="btn btn-primary">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Trusted by Millions Section */}
                                <div className="card">
                                    <div className="card-header collapsed" id="headingTrustedByMillions" data-toggle="collapse" data-target="#collapseTrustedByMillions" aria-expanded="true" aria-controls="collapseTrustedByMillions">
                                        <button className="btn btn-link fs-16 text-reset text-decoration-none" type="button" fdprocessedid="rgqi9q">Trusted by Millions Section</button>
                                    </div>
                                    <div id="collapseTrustedByMillions" className="collapse" aria-labelledby="headingTrustedByMillions" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                                <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />                            <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Show Trusted by Millions Section?</label>
                                                    <div className="col-md-9">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="hidden" name="types[]" defaultValue="show_trusted_by_millions_section" />
                                                            <input type="checkbox" name="show_trusted_by_millions_section" defaultChecked />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Background Image</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="trusted_by_millions_background_image" />
                                                        <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                            </div>
                                                            <div className="form-control file-amount">1 File selected</div>
                                                            <input type="hidden" name="trusted_by_millions_background_image" className="selected-files" defaultValue={138} />
                                                        </div>
                                                        <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={138} title="everton-vila-AsahNlC0VhQ-unsplash.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Zo4yekKwhDtasX6uEl3cKZFei63iYAAvi2550jOr.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">everton-vila-AsahNlC0VhQ-unsplash</span><span className="ext">.png</span></h6><p>957 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="trusted_by_millions_title" />
                                                        <input type="text" name="trusted_by_millions_title" defaultValue="Trusted by Millions" className="form-control" rows={5} placeholder="Title" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Sub Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="trusted_by_millions_sub_title" />
                                                        <textarea type="text" name="trusted_by_millions_sub_title" className="form-control" rows={5} placeholder="Sub Title" defaultValue={"\"Love doesn't make the world go around. Love is what makes the ride worthwhile.\" Millions of Active Matrimonial users around the world find their true love and partners from this site. We are always there to help and find you the suitable match for yourself."} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Best Features (Max 4)</label>
                                                    <div className="trusted_by_millions_target">
                                                        <input type="hidden" name="types[]" defaultValue="homepage_best_features_icons" />
                                                        <input type="hidden" name="types[]" defaultValue="homepage_best_features" />
                                                        <div className="row gutters-5">
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="homepage_best_features_icons" />
                                                                        <input type="hidden" name="homepage_best_features_icons[]" className="selected-files" defaultValue={148} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={148} title="Page-1.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/54adYPz3OC2PKzpgZF0rpnvR3qKeDMTikwOqNsMW.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Page-1</span><span className="ext">.png</span></h6><p>516 Bytes</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="homepage_best_features" />
                                                                    <input type="text" className="form-control" placeholder="Feature" name="homepage_best_features[]" defaultValue="Best Matches" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row gutters-5">
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="homepage_best_features_icons" />
                                                                        <input type="hidden" name="homepage_best_features_icons[]" className="selected-files" defaultValue={147} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={147} title="Group 8005.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Zk2lj7FFjeGGYOhch3vtEAkxnnom4zPcWq1bV0tr.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Group 8005</span><span className="ext">.png</span></h6><p>401 Bytes</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="homepage_best_features" />
                                                                    <input type="text" className="form-control" placeholder="Feature" name="homepage_best_features[]" defaultValue="Verified Profiles" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row gutters-5">
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="homepage_best_features_icons" />
                                                                        <input type="hidden" name="homepage_best_features_icons[]" className="selected-files" defaultValue={149} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={149} title="Group 8006.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/5HxbGcXOowGkctJOQHm5CYETk4wIPutWs5eb3dlL.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Group 8006</span><span className="ext">.png</span></h6><p>250 Bytes</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="homepage_best_features" />
                                                                    <input type="text" className="form-control" placeholder="Feature" name="homepage_best_features[]" defaultValue="100% Privacy" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button" className="btn btn-soft-secondary btn-sm" data-toggle="add-more" data-content="
                          <div class=&quot;row gutters-5&quot;>
                            <div class=&quot;col-md-5&quot;>
                              <div class=&quot;form-group&quot;>
                                <div class=&quot;input-group&quot; data-toggle=&quot;aizuploader&quot; data-type=&quot;image&quot;>
                                    <div class=&quot;input-group-prepend&quot;>
                                        <div class=&quot;input-group-text bg-soft-secondary font-weight-medium&quot;>Browse</div>
                                    </div>
                                      <div class=&quot;form-control file-amount&quot;>Choose file</div>
                                      <input type=&quot;hidden&quot; name=&quot;types[]&quot; value=&quot;homepage_best_features_icons&quot;>
                                      <input type=&quot;hidden&quot; name=&quot;homepage_best_features_icons[]&quot; class=&quot;selected-files&quot;>
                                  </div>
                                  <div class=&quot;file-preview box sm&quot;></div>
                              </div>
                            </div>
                            <div class=&quot;col-md&quot;>
                              <div class=&quot;form-group&quot;>
                                <input type=&quot;hidden&quot; name=&quot;types[]&quot; value=&quot;homepage_best_features&quot;>
                                <input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Feature&quot; name=&quot;homepage_best_features[]&quot;>
                              </div>
                            </div>
                            <div class=&quot;col-md-auto&quot;>
                              <div class=&quot;form-group&quot;>
                                <button type=&quot;button&quot; class=&quot;mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger&quot; data-toggle=&quot;remove-parent&quot; data-parent=&quot;.row&quot;>
                                  <i class=&quot;las la-times&quot;></i>
                                </button>
                              </div>
                            </div>
                          </div>" data-target=".trusted_by_millions_target">
                                                        Add New
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <button type="button" className="btn btn-primary">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* New member Section */}
                                <div className="card">
                                    <div className="card-header collapsed" id="headingNewMember" data-toggle="collapse" data-target="#collapseNewMember" aria-expanded="true" aria-controls="collapseNewMember">
                                        <button className="btn btn-link fs-16 text-reset text-decoration-none" type="button" fdprocessedid="vc0vuj">New Member Section</button>
                                    </div>
                                    <div id="collapseNewMember" className="collapse" aria-labelledby="headingNewMember" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                                <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />                            <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Show New Member Section?</label>
                                                    <div className="col-md-9">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="hidden" name="types[]" defaultValue="show_new_member_section" />
                                                            <input type="checkbox" name="show_new_member_section" defaultChecked />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="new_member_section_title" />
                                                        <input type="text" name="new_member_section_title" defaultValue="New Members" className="form-control" placeholder="Title" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Sub Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="new_member_section_sub_title" />
                                                        <textarea type="text" name="new_member_section_sub_title" className="form-control" rows={5} placeholder="Sub Title" defaultValue={"Every user registered on Active Matrimonial is verified via photo and mobile phone so you don’t have to worry how real or fake anyone is.."} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Max New Member</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="max_new_member_show_homepage" />
                                                        <input type="number" name="max_new_member_show_homepage" defaultValue={10} className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <button type="button" className="btn btn-primary">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Happy Story Section */}
                                <div className="card">
                                    <div className="card-header collapsed" id="headingHappyStory" data-toggle="collapse" data-target="#collapseHappyStory" aria-expanded="true" aria-controls="collapseHappyStory">
                                        <button className="btn btn-link fs-16 text-reset text-decoration-none" type="button" fdprocessedid="c2eb1a">Happy Story Section</button>
                                    </div>
                                    <div id="collapseHappyStory" className="collapse" aria-labelledby="headingHappyStory" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                                <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />                            <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Show Happy Story Section?</label>
                                                    <div className="col-md-9">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="hidden" name="types[]" defaultValue="show_happy_story_section" />
                                                            <input type="checkbox" name="show_happy_story_section" defaultChecked />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="happy_story_section_title" />
                                                        <input type="text" name="happy_story_section_title" defaultValue="Happy Stories" className="form-control" placeholder="Title" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Max Happy Story Show</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="max_happy_story_show_homepage" />
                                                        <input type="number" name="max_happy_story_show_homepage" defaultValue={10} className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <button type="button" className="btn btn-primary">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Package Section */}
                                <div className="card">
                                    <div className="card-header collapsed" id="headingPackage" data-toggle="collapse" data-target="#collapsePackage" aria-expanded="true" aria-controls="collapsePackage">
                                        <button className="btn btn-link fs-16 text-reset text-decoration-none" type="button" fdprocessedid="dtk9xf">Package Section</button>
                                    </div>
                                    <div id="collapsePackage" className="collapse" aria-labelledby="headingPackage" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                                <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />                            <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Show Happy Story Section?</label>
                                                    <div className="col-md-9">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="hidden" name="types[]" defaultValue="show_homapege_package_section" />
                                                            <input type="checkbox" name="show_homapege_package_section" defaultChecked />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="homepage_package_section_title" />
                                                        <input type="text" name="homepage_package_section_title" defaultValue="Packages" className="form-control" placeholder="Title" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Sub Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="homepage_package_section_sub_title" />
                                                        <textarea type="text" name="homepage_package_section_sub_title" className="form-control" rows={5} placeholder="Sub Title" defaultValue={"Choose any of our packages as per your need. You'll get your money back anytime if we're unable to satisfy your need."} />
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <button type="button" className="btn btn-primary">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Review Section */}
                                <div className="card">
                                    <div className="card-header collapsed" id="headingReview" data-toggle="collapse" data-target="#collapseReview" aria-expanded="true" aria-controls="collapseReview">
                                        <button className="btn btn-link fs-16 text-reset text-decoration-none" type="button" fdprocessedid="h2u8f">Reviews Section</button>
                                    </div>
                                    <div id="collapseReview" className="collapse" aria-labelledby="headingReview" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                                <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />                            <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Show Review Section?</label>
                                                    <div className="col-md-9">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="hidden" name="types[]" defaultValue="show_homepage_review_section" />
                                                            <input type="checkbox" name="show_homepage_review_section" defaultChecked />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Background Image</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="homepage_review_section_background_image" />
                                                        <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                            </div>
                                                            <div className="form-control file-amount">1 File selected</div>
                                                            <input type="hidden" name="homepage_review_section_background_image" className="selected-files" defaultValue={137} />
                                                        </div>
                                                        <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={137} title="Group 8167.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/LXbZN69RAoSGbxwxt5gk9IyItmqzHlklA03hsPYO.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Group 8167</span><span className="ext">.png</span></h6><p>417 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="homepage_review_section_title" />
                                                        <input type="text" name="homepage_review_section_title" defaultValue className="form-control" rows={5} placeholder="Title" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Reviews</label>
                                                    <div className="trusted_by_millions_target">
                                                        <input type="hidden" name="types[]" defaultValue="homepage_reviewers_images" />
                                                        <input type="hidden" name="types[]" defaultValue="homepage_reviews" />
                                                        <div className="row gutters-5">
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="homepage_reviewers_images" />
                                                                        <input type="hidden" name="homepage_reviewers_images[]" className="selected-files" defaultValue={139} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={139} title="radu-florin-YLr8qZeu6d4-unsplash.jpg"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/Yu77XFn8brOtsiEiRzQgcqekDk1fBhEIBUd5WzjM.jpg" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">radu-florin-YLr8qZeu6d4-unsplash</span><span className="ext">.jpg</span></h6><p>166 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="homepage_reviews" />
                                                                    <textarea type="text" className="form-control" placeholder="Review" name="homepage_reviews[]" defaultValue={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure."} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row gutters-5">
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">1 File selected</div>
                                                                        <input type="hidden" name="types[]" defaultValue="homepage_reviewers_images" />
                                                                        <input type="hidden" name="homepage_reviewers_images[]" className="selected-files" defaultValue={140} />
                                                                    </div>
                                                                    <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={140} title="bannon-morrissy-RxiAV5LC-ww-unsplash.jpg"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/LH0T5CcaRM0dYSiFx1sSrNHQWKje7QtvFrngtGHL.jpg" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">bannon-morrissy-RxiAV5LC-ww-unsplash</span><span className="ext">.jpg</span></h6><p>133 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md">
                                                                <div className="form-group">
                                                                    <input type="hidden" name="types[]" defaultValue="homepage_reviews" />
                                                                    <textarea type="text" className="form-control" placeholder="Review" name="homepage_reviews[]" defaultValue={"Ceck But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure."} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto">
                                                                <div className="form-group">
                                                                    <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row">
                                                                        <i className="las la-times" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button" className="btn btn-soft-secondary btn-sm" data-toggle="add-more" data-content="
                          <div class=&quot;row gutters-5&quot;>
                            <div class=&quot;col-md-5&quot;>
                              <div class=&quot;form-group&quot;>
                                <div class=&quot;input-group&quot; data-toggle=&quot;aizuploader&quot; data-type=&quot;image&quot;>
                                    <div class=&quot;input-group-prepend&quot;>
                                        <div class=&quot;input-group-text bg-soft-secondary font-weight-medium&quot;>Browse</div>
                                    </div>
                                      <div class=&quot;form-control file-amount&quot;>Choose file</div>
                                      <input type=&quot;hidden&quot; name=&quot;types[]&quot; value=&quot;homepage_reviewers_images&quot;>
                                      <input type=&quot;hidden&quot; name=&quot;homepage_reviewers_images[]&quot; class=&quot;selected-files&quot;>
                                  </div>
                                  <div class=&quot;file-preview box sm&quot;></div>
                              </div>
                            </div>
                            <div class=&quot;col-md&quot;>
                              <div class=&quot;form-group&quot;>
                                <input type=&quot;hidden&quot; name=&quot;types[]&quot; value=&quot;homepage_reviews&quot;>
                                <textarea type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Review&quot; name=&quot;homepage_reviews[]&quot;></textarea>
                              </div>
                            </div>
                            <div class=&quot;col-md-auto&quot;>
                              <div class=&quot;form-group&quot;>
                                <button type=&quot;button&quot; class=&quot;mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger&quot; data-toggle=&quot;remove-parent&quot; data-parent=&quot;.row&quot;>
                                  <i class=&quot;las la-times&quot;></i>
                                </button>
                              </div>
                            </div>
                          </div>" data-target=".trusted_by_millions_target">
                                                        Add New
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <button type="button" className="btn btn-primary">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Blog Section */}
                                <div className="card">
                                    <div className="card-header collapsed" id="headingBlogSection" data-toggle="collapse" data-target="#collapseBlogSection" aria-expanded="true" aria-controls="collapseBlogSection">
                                        <button className="btn btn-link fs-16 text-reset text-decoration-none" type="button" fdprocessedid="s5i5t">Blog Section</button>
                                    </div>
                                    <div id="collapseBlogSection" className="collapse" aria-labelledby="headingBlogSection" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                                <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />                            <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Show Blog Section?</label>
                                                    <div className="col-md-9">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="hidden" name="types[]" defaultValue="show_blog_section" />
                                                            <input type="checkbox" name="show_blog_section" defaultChecked />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Title</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="blog_section_title" />
                                                        <input type="text" name="blog_section_title" defaultValue="Blog Section" className="form-control" placeholder="Title" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Max Blog Show on Homepage</label>
                                                    <div className="col-md-9">
                                                        <input type="hidden" name="types[]" defaultValue="max_blog_show_homepage" />
                                                        <input type="number" name="max_blog_show_homepage" defaultValue={6} className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <button type="button" className="btn btn-primary">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditPages