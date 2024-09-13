import React from 'react';
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { ToastContainer } from 'react-toastify';
import { getFooterSocialLinkWidgetD, updateFooterSocialLinkWidgetD } from '../../../api/Api';


function FooterCopyrightWidget() {
    const [isActive, setIsActive] = useState(false);
    const [links, setLinks] = useState(['']);
    const [loading, setLoading] = useState(false);

    const handleSubmitData = async (e) => {
        const payloadData = { is_active: isActive, social_links: links };
        console.log(payloadData);
        e.preventDefault();
        try {
            setLoading(true)
            const res = await updateFooterSocialLinkWidgetD(payloadData);
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
            const res = await getFooterSocialLinkWidgetD();
            setIsActive(res?.data?.is_active);
            setLinks(res?.data?.social_links);
            setLoading(false)
        } catch (error) {
            toastErrorMessage(error?.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    const handleCheckboxChange = (event) => {
        setIsActive(event.target.checked);
    };


    const handleLinkChange = (index, value) => {
        const updatedLinks = [...links];
        updatedLinks[index] = value;
        setLinks(updatedLinks);
    };
    const handleAddLink = () => {
        setLinks([...links, '']); 
    };
    const handleRemoveLink = (index) => {
        const updatedLinks = [...links];
        updatedLinks.splice(index, 1); 
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
                    <h6 className="fw-600 mb-0">Social Link Widget</h6>
                </div>
                <form onSubmit={handleSubmitData}>
                    <div className="card-body">
                        <div className="card shadow-none bg-light">
                            <div className="card-header">
                                <h6 className="mb-0">Social Link Widget</h6>
                            </div>
                            <div className="card-body">

                                <div className="form-group row">
                                    <label className="col-md-2 col-from-label">Show Social Links?</label>
                                    <div className="col-md-9">
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

                                {/* <div className="form-group">
                                    <label>Social Links</label>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="lab la-facebook-f" /></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="http://" name="facebook_link" fdprocessedid="aqqy1t" />
                                    </div>
                                </div> */}

                                {links &&links?.map((link, index) => (
                                    <div className="form-group row" key={index}>
                                        <label className="col-sm-12 col-form-label">Social Links</label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Social Link"
                                                value={link}
                                                onChange={(e) => handleLinkChange(index, e.target.value)}
                                                name={`links-${index}`}
                                            />
                                        </div>
                                        <div className="col-sm-2">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => handleRemoveLink(index)} 
                                                disabled={links.length === 1}
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
                                    onClick={handleAddLink}
                                >
                                    Add More
                                </button>

                            </div>
                        </div>

                        <div className="text-right mt-3 me-4">
                            <button type="submit" className="btn btn-primary" fdprocessedid="x80h">Update</button>
                        </div>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default FooterCopyrightWidget