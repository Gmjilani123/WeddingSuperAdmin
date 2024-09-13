import React from 'react';
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { getGoogleAnalyticsSettingD, updateGoogleAnalyticsSettingD } from '../../../api/Api';

function ThirdpartGoogleAnalitics() {
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const [inputVal, setInputval] = useState({
        is_active: null,
        tracking_id: "",
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
            const res = await updateGoogleAnalyticsSettingD(payloadData);
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
            const res = await getGoogleAnalyticsSettingD();
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
                        <h3 className="mb-0 h6">Google Analytics Settings</h3>
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
                                    <label className="control-label">Tracking ID</label>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="tracking_id"
                                        value={inputVal?.tracking_id}
                                        onChange={handleChange}
                                        placeholder="Tracking ID"
                                        required
                                        fdprocessedid="s4pym" />
                                </div>
                            </div>

                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="1r4zjf">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default ThirdpartGoogleAnalitics