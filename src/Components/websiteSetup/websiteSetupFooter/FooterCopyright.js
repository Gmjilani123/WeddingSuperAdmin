import React from 'react';
import ReactQuill from 'react-quill';
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { ToastContainer } from 'react-toastify';
import { getFooterCopyrightD, updateFooterCopyrightD } from '../../../api/Api';

function FooterCopyright() {
    const [body, setBody] = useState("")
    const handleBody = (e) => {
        setBody(e)
    };


    const [loading, setLoading] = useState(false);
    const handleSubmitData = async (e) => {
        const payloadData = { copyright_text: body };
        console.log(payloadData);
        e.preventDefault();
        try {
            setLoading(true)
            const res = await updateFooterCopyrightD(payloadData);
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
            const res = await getFooterCopyrightD();
            console.log("GoogleLoginres---", res);
            setBody(res?.data?.copyright_text);
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
                    <h6 className="fw-600 mb-0">Footer Copyright</h6>
                </div>
                <form onSubmit={handleSubmitData}>
                    <div className="card-body">
                        <div className="card shadow-none bg-light">
                            <div className="card-header">
                                <h6 className="mb-0">Copyright Widget </h6>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Copyright Text</label>
                                    <ReactQuill
                                        placeholder='write something amazing...'
                                        modules={FooterCopyright.modules}
                                        formats={FooterCopyright.formats}
                                        onChange={handleBody}
                                        value={body && body}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-primary" fdprocessedid="x80h">Update</button>
                        </div>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default FooterCopyright