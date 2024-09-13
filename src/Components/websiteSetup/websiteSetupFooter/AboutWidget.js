import React from 'react';
import ReactQuill from 'react-quill';
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { ToastContainer } from 'react-toastify';
import { getFooterAboutWidgetD, updateFooterAboutWidgetD } from '../../../api/Api';

function AboutWidget() {
    const [body, setBody] = useState("")
    const handleBody = (e) => {
        setBody(e)
    };

    const [loading, setLoading] = useState(false);
    const [inputVal, setInputval] = useState({
        footer_logo: "",
        description: "",
    });
    const handleChange = (e) => {
        const inpVal = e.target.value;
        const inpName = e.target.name;
        const cloned = { ...inputVal };
        cloned[inpName] = inpVal;
        setInputval(cloned);
    };

    const handleSubmitData = async (e) => {
        const payloadData = { ...inputVal, description: body };
        console.log(payloadData);
        e.preventDefault();
        try {
            setLoading(true)
            const res = await updateFooterAboutWidgetD(payloadData);
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
            const res = await getFooterAboutWidgetD();
            console.log("GoogleLoginres---", res);
            setInputval(res?.data);
            setBody(res?.data?.description);
            setLoading(false)
        } catch (error) {
            toastErrorMessage(error?.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    


    return (
        <>
            <div className="card">
            {loading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <div className="card-header">
                    <h6 className="mb-0">About Widget</h6>
                </div>
                <div className="card-body">

                    <form onSubmit={handleSubmitData}>

                        {/* <div className="form-group">
                            <label className="form-label" htmlFor="signinSrEmail">Footer Logo</label>
                            <div className="input-group" data-type="image">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                </div>
                                <div className="form-control file-amount">1 File selected</div>
                                <input type="hidden" name="types[]" defaultValue="footer_logo" />
                                <input type="hidden" name="footer_logo" className="selected-files" defaultValue={135} />

                            </div>
                            <div className="file-preview">
                                <div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={135} title="logo-light.png">
                                    <div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="//weddemoadmin.abaris.in/public/uploads/all/xWzDeQ7woGheOebgv9gVfaAWtMd2U8cC05eDaYYw.png" className="img-fit" /></div>
                                    <div className="col body">
                                        <h6 className="d-flex"><span className="text-truncate title">logo-light</span><span className="ext">.png</span></h6>
                                        <p>8 KB</p>
                                    </div>
                                    <div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="os8h7j"><i className="la la-close" /></button></div>
                                </div>
                            </div>
                        </div> */}

                        <div className="form-group row">
                            <label
                                className="col-md-2 col-form-label"
                                htmlFor="signinSrEmail"
                            >
                                Footer Logo
                            </label>
                            <div className="col-md-10">
                                <input
                                    onChange={handleChange}
                                    className="form-control"
                                    type="file"
                                    name="footer_logo"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>About description</label>
                            <ReactQuill
                                placeholder='write something amazing...'
                                modules={AboutWidget.modules}
                                formats={AboutWidget.formats}
                                onChange={handleBody}
                                value={body && body}
                            />
                        </div>

                        <div className="text-right">
                            <button type="submit" className="btn btn-primary" fdprocessedid="2zm7v">Update</button>
                        </div>
                    </form>
                        <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default AboutWidget