import React from 'react';
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import ReactQuill from 'react-quill'
import { getAllCookiesAgreementD, updateCookiesAgreementD } from '../../../api/Api';

function CookiesAgreement() {
    const [body, setBody] = useState("")
    const handleBody = (e) => {
        setBody(e)
    };

    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleSubmitData = async (e) => {
        const payloadData = {cookies_aggrement: body , is_active: isActive };
        console.log(payloadData);
        e.preventDefault();
        try {
            setLoading(true)
            const res = await updateCookiesAgreementD(payloadData);
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
            const res = await getAllCookiesAgreementD();
            console.log("GoogleLoginres---", res);
            setBody(res?.data?.cookies_aggrement);
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
            <div className="card">
            {loading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <div className="card-header">
                    <h6 className="fw-600 mb-0">Cookies Agreement</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmitData}>     
                            <div className="form-group row">
                            <label className="col-md-3 col-from-label">Cookies Agreement Text</label>
                            <div className="col-md-8">
                                <ReactQuill
                                    placeholder='write something amazing...'
                                    modules={CookiesAgreement.modules}
                                    formats={CookiesAgreement.formats}
                                    onChange={handleBody}
                                    value={body}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Show Cookies Agreement?</label>
                            <div className="col-md-8">
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
                            <button type="submit" className="btn btn-primary" fdprocessedid="a3ofm9a">Update</button>
                        </div>

                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default CookiesAgreement