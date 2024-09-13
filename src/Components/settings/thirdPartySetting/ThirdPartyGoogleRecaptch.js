import React from 'react';
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { getGoogleRecaptchaSettingD, updateGoogleRecaptchaSettingD } from '../../../api/Api';

function ThirdPartyGoogleRecaptch() {
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const [inputVal, setInputval] = useState({
        is_active: null,
        site_key: "",
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
            const res = await updateGoogleRecaptchaSettingD(payloadData);
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
            const res = await getGoogleRecaptchaSettingD();
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
            <div className="col-md-6">
                {loading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-0 h6">Google reCAPTCHA Setting</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitData}>
                            <div className="form-group row">
                                <div className="col-md-3">
                                    <label className="control-label">Activation</label>
                                </div>
                                <div className="col-md-9">
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
                                    <label className="control-label">Site KEY</label>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="site_key" value={inputVal?.site_key}
                                        onChange={handleChange} placeholder="Site Key" required fdprocessedid="ezmxx8" />
                                </div>
                            </div>

                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="uibf4e">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>

    )
}

export default ThirdPartyGoogleRecaptch