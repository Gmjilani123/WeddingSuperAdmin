import React from 'react';
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { getFacebookPixelSettingD, updateFacebookPixelSettingD } from '../../../api/Api';

function ThirdpartyFacbookpixel() {
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const [inputVal, setInputval] = useState({
        is_active: null,
        fb_pixel_id: "",
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
            const res = await updateFacebookPixelSettingD(payloadData);
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
            const res = await getFacebookPixelSettingD();
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
                        <h6 className="fw-600 mb-0">Facebook Pixel</h6>
                    </div>
                    <div className="card-body">
                        <div className="row gutters-10">
                            <div className="col-lg-6">
                                <div className="card shadow-none bg-light">
                                    <div className="card-header">
                                        <h5 className="mb-0 h6">Facebook Pixel Setting</h5>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmitData}>
                                            <div className="form-group row">
                                                <div className="col-lg-3">
                                                    <label className="col-from-label">Facebook Pixel</label>
                                                </div>
                                                <div className="col-md-7">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} 
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
                                                <div className="col-lg-3">
                                                    <label className="col-from-label">Facebook Pixel ID</label>
                                                </div>
                                                <div className="col-md-7">
                                                    <input type="text" className="form-control" name="fb_pixel_id"
                                                    value={inputVal?.fb_pixel_id}
                                                    onChange={handleChange}
                                                      placeholder="Facebook Pixel ID" required fdprocessedid="8b57uj" />
                                                </div>
                                            </div>

                                            <div className="form-group mb-0 text-right">
                                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="xkxl87">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card shadow-none bg-light">
                                    <div className="card-header">
                                        <h5 className="mb-0 h6">Please be carefull when you are configuring Facebook pixel.</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group mar-no">
                                            <li className="list-group-item text-dark">1. Log in to Facebook and go to your Ads Manager account.</li>
                                            <li className="list-group-item text-dark">2. Open the Navigation Bar and select Events Manager.</li>
                                            <li className="list-group-item text-dark">3. Copy your Pixel ID from underneath your Site Name and paste the number into Facebook Pixel ID field.</li>
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

export default ThirdpartyFacbookpixel