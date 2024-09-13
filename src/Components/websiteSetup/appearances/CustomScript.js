import React from 'react';
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { getAllCustomScriptD, updateCustomScriptD } from '../../../api/Api';

function CustomScript() {
    const [loading, setLoading] = useState(false);

    const [inputVal, setInputval] = useState({
        header_custom_script: "",
        footer_custom_script: "",
    });
    const handleChange = (e) => {
        const inpVal = e.target.value;
        const inpName = e.target.name;
        const cloned = { ...inputVal };
        cloned[inpName] = inpVal;
        setInputval(cloned);
    };

    const handleSubmitData = async (e) => {
        const payloadData = { ...inputVal };
        console.log(payloadData);
        e.preventDefault();
        try {
            setLoading(true)
            const res = await updateCustomScriptD(payloadData);
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
            const res = await getAllCustomScriptD();
            console.log("GoogleLoginres---", res);
            setInputval(res?.data);
            setLoading(false)
        } catch (error) {
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
                    <h6 className="fw-600 mb-0">Custom Script</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmitData}>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Header custom script - before &lt;/head&gt;</label>
                            <div className="col-md-8">
                                <textarea name="header_custom_script" value={inputVal?.header_custom_script}
                                        onChange={handleChange} rows={4} className="form-control" placeholder='Header custom script' />
                                {/* <small>Write script with &lt;script&gt; tag</small> */}
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Footer custom script - before &lt;/body&gt;</label>
                            <div className="col-md-8">
                                <textarea name="footer_custom_script" value={inputVal?.footer_custom_script}
                                        onChange={handleChange} rows={4} className="form-control" placeholder='Footer custom script' />
                                {/* <small>Write script with &lt;script&gt; tag</small> */}
                            </div>
                        </div>

                        <div className="text-right">
                            <button type="submit" className="btn btn-primary" fdprocessedid="n04c6">Update</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default CustomScript