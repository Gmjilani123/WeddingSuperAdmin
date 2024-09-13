import React from 'react';
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { ToastContainer } from 'react-toastify';
import { getFooterContactWidgetD, updateFooterContactWidgetD } from '../../../api/Api';

function ContactsWidget() {
    const [loading, setLoading] = useState(false);
    const [phoneNumbers, setPhoneNumbers] = useState(['']);

    const [inputVal, setInputval] = useState({
        address: "",
        website: "",
        email: "",
    });
    const handleChange = (e) => {
        const inpVal = e.target.value;
        const inpName = e.target.name;
        const cloned = { ...inputVal };
        cloned[inpName] = inpVal;
        setInputval(cloned);
    };
    const handleSubmitData = async (e) => {
        console.log('phoneNumbers---', phoneNumbers)
        const payloadData = { ...inputVal, phone: phoneNumbers };
        console.log(payloadData);
        e.preventDefault();
        try {
            setLoading(true)
            const res = await updateFooterContactWidgetD(payloadData);
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
            const res = await getFooterContactWidgetD();
            console.log("GoogleLoginres---", res);
            setInputval(res?.data);
            setPhoneNumbers(res?.data?.phone);
            setLoading(false)
        } catch (error) {
            toastErrorMessage(error?.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);


    const handlePhoneChange = (index, event) => {
        const updatedPhones = [...phoneNumbers];
        updatedPhones[index] = event.target.value;
        setPhoneNumbers(updatedPhones);
    };

    const handleAddPhone = () => {
        setPhoneNumbers([...phoneNumbers, '']);
    };

    const handleRemovePhone = (index) => {
        const updatedPhones = phoneNumbers.filter((_, idx) => idx !== index);
        setPhoneNumbers(updatedPhones);
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
                    <h6 className="mb-0">Contacts Widget</h6>
                </div>
                <div className="card-body">

                    <form onSubmit={handleSubmitData}>

                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" onChange={handleChange} value={inputVal?.address} placeholder="Address" name="address" fdprocessedid="0zwhlw" />
                        </div>

                        <div className="form-group">
                            <label>Website</label>
                            <input type="text" className="form-control" onChange={handleChange} value={inputVal?.website} placeholder="Website Address" name="website" fdprocessedid="4umxci" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" onChange={handleChange} value={inputVal?.email} placeholder="Email" name="email" fdprocessedid="782s4b" />
                        </div>

                        {/* <div className="form-group">
                            <label>Phone</label>
                            <div className="col">
                                <div className="form-group"> 
                                    <input type="number" className="form-control" onChange={handlePhoneChange} value={inputVal?.phone} placeholder="Phone Number" name="phone" fdprocessedid="tewuq" />
                                </div>
                            </div>
                        </div> */}

                        {phoneNumbers && phoneNumbers?.map((phone, index) => (
                            <div className="form-group row" key={index}>
                                <label className="col-sm-12 col-form-label">Phone</label>
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        className="form-control"
                                        onChange={(event) => handlePhoneChange(index, event)}
                                        value={phone}
                                        placeholder="Phone Number"
                                        name={`phone_${index}`}
                                    />
                                </div>
                                <div className="col-sm-2">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleRemovePhone(index)}
                                        disabled={phoneNumbers.length === 1}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleAddPhone}
                            style={{ marginTop: '10px' }}
                        >
                            Add More
                        </button>


                        <div className="text-right mt-3 me-3">
                            <button type="submit" className="btn btn-primary" fdprocessedid="44ri9h">Update</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default ContactsWidget