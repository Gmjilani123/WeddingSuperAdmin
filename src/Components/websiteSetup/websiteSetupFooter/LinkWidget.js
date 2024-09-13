import React from 'react';
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { ToastContainer } from 'react-toastify';
import { getFooterLinkWidgetD, updateFooterLinkWidgetD } from '../../../api/Api';

function LinkWidget() {
    const [loading, setLoading] = useState(false);
    const [links, setLinks] = useState(['']);
    const [inputVal, setInputval] = useState({
        title: "",
    });
    const handleChange = (e) => {
        const inpVal = e.target.value;
        const inpName = e.target.name;
        const cloned = { ...inputVal };
        cloned[inpName] = inpVal;
        setInputval(cloned);
    };
    const handleSubmitData = async (e) => {
        const payloadData = { ...inputVal, links: links };
        console.log(payloadData);
        e.preventDefault();
        try {
            setLoading(true)
            const res = await updateFooterLinkWidgetD(payloadData);
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
            const res = await getFooterLinkWidgetD();
            setInputval(res?.data);
            setLinks(res?.data?.links);
            setLoading(false)
        } catch (error) {
            toastErrorMessage(error?.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);


    const handleLinkChange = (index, value) => {
        const updatedLinks = [...links];
        updatedLinks[index] = value; // Update the specific link value
        setLinks(updatedLinks);
    };
    const handleAddLink = () => {
        setLinks([...links, '']); // Add an empty string to create a new input
    };
    const handleRemoveLink = (index) => {
        const updatedLinks = [...links];
        updatedLinks.splice(index, 1); // Remove the link at the specific index
        setLinks(updatedLinks);
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
                    <h6 className="mb-0">Link Widget</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmitData}>

                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" onChange={handleChange} value={inputVal?.address} placeholder="Widget title" name="widget_one_title" fdprocessedid="0i9w28" />
                        </div>

                        {links && links?.map((link, index) => (
                            <div className="form-group row" key={index}>
                                <label className="col-sm-12 col-form-label">Link</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Link"
                                        value={link}
                                        onChange={(e) => handleLinkChange(index, e.target.value)}
                                        name={`links-${index}`} // Unique name for each input
                                    />
                                </div>
                                <div className="col-sm-2">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveLink(index)} // Remove this particular input
                                        disabled={links.length === 1} // Disable remove if only one input
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ marginTop: '10px' }}
                            onClick={handleAddLink} // Add a new input
                        >
                            Add More
                        </button>


                        <div className="text-right mt-3 me-3">
                            <button type="submit" className="btn btn-primary" fdprocessedid="9k03yg">Update</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default LinkWidget