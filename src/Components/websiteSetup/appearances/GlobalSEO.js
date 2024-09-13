import React from 'react';
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { getAllGlobalSEOD, updateGlobalSEOD } from '../../../api/Api';



function GlobalSEO() {
    const [loading, setLoading] = useState(false);

    const [inputVal, setInputval] = useState({
        meta_title: "",
        meta_description: "",
        keyword: "",
        meta_image: "",
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
            const res = await updateGlobalSEOD(payloadData);
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
            const res = await getAllGlobalSEOD();
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
                    <h6 className="fw-600 mb-0">Global SEO</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmitData}>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Meta Title</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={inputVal?.meta_title}
                                    onChange={handleChange} placeholder="Title" name="meta_title" fdprocessedid="sm5ma" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Meta description</label>
                            <div className="col-md-8">
                                <textarea className="resize-off form-control" placeholder="Description" name="meta_description" value={inputVal?.meta_description}
                                    onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Keywords</label>
                            <div className="col-md-8">
                                <textarea className="resize-off form-control" placeholder="Keyword" name="keyword" value={inputVal?.keyword}
                                    onChange={handleChange} />
                                <small className="text-muted">Separate with coma</small>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label
                                className="col-md-3 col-form-label"
                                htmlFor="signinSrEmail"
                            >
                                Meta Image
                            </label>
                            <div className="col-md-9">
                                <input
                                    onChange={handleChange}
                                    className="form-control"
                                    type="file"
                                    name="meta_image"
                                />
                            </div>
                        </div>

                        <div className="text-right">
                            <button type="submit" className="btn btn-primary" fdprocessedid="tahm5a">Update</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default GlobalSEO