import React from 'react';
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { getFacebookChatSettingD, updateFacebookChatSettingD } from '../../../api/Api';

function ThirdpartyFacebookchat() {
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const [inputVal, setInputval] = useState({
        is_active: null,
        fb_page_id: "",
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
            const res = await updateFacebookChatSettingD(payloadData);
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
            const res = await getFacebookChatSettingD();
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
            <div className="col-md-12">
                {loading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <div className="card">
                    <div className="card-header">
                        <h6 className="fw-600 mb-0">Facebook Chat</h6>
                    </div>
                    <div className="card-body">
                        <div className="row gutters-10">
                            <div className="col-lg-6">
                                <div className="card shadow-none bg-light">
                                    <div className="card-header">
                                        <h5 className="mb-0 h6">Facebook Chat Setting</h5>
                                    </div>
                                    <div className="card-body">

                                        <form onSubmit={handleSubmitData}>
                                            <div className="form-group row">
                                                <div className="col-md-3">
                                                    <label className="col-from-label">Facebook Chat</label>
                                                </div>
                                                <div className="col-md-7">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input
                                                            name="is_active"
                                                            type="checkbox"
                                                            onChange={handleCheckboxChange}
                                                            checked={isActive}
                                                        />
                                                        <span className="slider round" />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-md-3">
                                                    <label className="col-from-label">Facebook Page ID</label>
                                                </div>
                                                <div className="col-md-7">
                                                    <input type="text" className="form-control" name="fb_page_id"
                                                        value={inputVal?.fb_page_id}
                                                        onChange={handleChange}
                                                        placeholder="Facebook Page ID"
                                                        required
                                                        fdprocessedid="l90kj" />
                                                </div>
                                            </div>

                                            <div className="form-group mb-0 text-right">
                                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="6sp9c">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card shadow-none bg-light">
                                    <div className="card-header">
                                        <h5 className="mb-0 h6">Please be carefull when you are configuring Facebook chat. For incorrect configuration you will not get messenger icon on your user-end site.</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group mar-no">
                                            <li className="list-group-item text-dark">1. Login into your facebook page</li>
                                            <li className="list-group-item text-dark">2. Find the About option of your facebook page.</li>
                                            <li className="list-group-item text-dark">3. At the very bottom, you can find the \“Facebook Page ID\”.</li>
                                            <li className="list-group-item text-dark">4. Go to Settings of your page and find the option of \"Advance Messaging\".</li>
                                            <li className="list-group-item text-dark">5. Scroll down that page and you will get \"white listed domain\".</li>
                                            <li className="list-group-item text-dark">6. Set your website domain name.</li>
                                        </ul>
                                    </div>
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

export default ThirdpartyFacebookchat