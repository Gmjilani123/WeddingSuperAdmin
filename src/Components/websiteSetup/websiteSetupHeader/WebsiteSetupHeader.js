import React from 'react';
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { getAllWebHeaderD, updateWebHeaderD } from '../../../api/Api';

function WebsiteSetupHeader() {
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const [inputVal, setInputval] = useState({
        is_active: null,
        header_logo: "",
        quick_link: "",
        helpline_number: "",
    });
    const handleChange = (e) => {
        const inpVal = e.target.value;
        const inpName = e.target.name;
        const cloned = { ...inputVal };
        cloned[inpName] = inpVal;
        setInputval(cloned);
    };

    const handleSubmitData = async (e) => {
        const payloadData = { ...inputVal, is_active: isActive };
        console.log(payloadData);
        e.preventDefault();
        try {
            setLoading(true)
            const res = await updateWebHeaderD(payloadData);
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
            const res = await getAllWebHeaderD();
            console.log("GoogleLoginres---", res);
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
                                <h1 className="h3">Website Header</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="mb-0">Header Setting</h6>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmitData}>

                                        {/* <div className="form-group row">
                                            <label className="col-md-3 col-from-label">Header Logo</label>
                                            <div className="col-md-8">
                                                <div className=" input-group " data-type="image" onClick={() => setLgShow(true)}>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                    </div>
                                                    <div className="form-control file-amount">1 File selected</div>
                                                    <input type="hidden" name="types[]" defaultValue="header_logo" />
                                                    <input type="hidden" name="header_logo" className="selected-files" defaultValue={134} />
                                                </div>
                                                <div className="file-preview"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={134} title="logo.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">logo</span><span className="ext">.png</span></h6><p>19 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="27j73"><i className="la la-close" /></button></div>
                                                </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="form-group row">
                                            <label
                                                className="col-md-3 col-form-label"
                                                htmlFor="signinSrEmail"
                                            >
                                                Header Logo
                                            </label>
                                            <div className="col-md-9">
                                                <input
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    type="file"
                                                    name="banner_image"
                                                />
                                            </div>
                                        </div>


                                        <div className="form-group row">
                                            <label className="col-md-3 col-from-label">Header Left Quick Link</label>
                                            {/* <div className="col-md-3">
                                                <input type="hidden" name="types[]" defaultValue="header_left_quick_link1_text" />
                                                <input type="text" name="header_left_quick_link1_text" className="form-control" placeholder="Text" defaultValue="Welcome to Active Matrimonial CMS" fdprocessedid="atibur" />
                                            </div> */}
                                            <div className="col-md-9">
                                                <input type="text" name="quick_link" value={inputVal?.quick_link}
                                        onChange={handleChange} className="form-control" placeholder="Link" fdprocessedid="4czkwr" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-from-label">Helpline Number</label>
                                            <div className="col-md-9">
                                                <input type="text" name="helpline_number" value={inputVal?.helpline_number}
                                        onChange={handleChange} className="form-control" placeholder="Help Line Number" fdprocessedid="qp90h" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-from-label">Enable Sticky header?</label>
                                            <div className="col-md-9">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input
                                                         name="is_active"
                                                         type="checkbox"
                                                         onChange={handleCheckboxChange}
                                                         checked={isActive}
                                                    />
                                                    <span />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary" fdprocessedid="d50u1p">Update</button>
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
export default WebsiteSetupHeader