import React, { useEffect, useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toastErrorMessage, toastSuccessMessage } from '../../common/tostShow/TostShow';
import { AddCurrencyD, getCurrencyById, updateCurrency } from '../../api/Api';

function AddCurrency() {
    const [loading, setLoading] = useState(false);
    const [inputVal, setInputval] = useState({
        name: "",
        symbol: "",
        code: "",
        exchange_rate: "",
    });
    const handleChange = (e) => {
        const inpVal = e.target.value;
        const inpName = e.target.name;
        const cloned = { ...inputVal };
        cloned[inpName] = inpVal;
        setInputval(cloned);
    };

    const params = useParams();
    const navigate = useNavigate();

    const handleSubmitData = async (e) => {
        e.preventDefault();
        if (params?.id) {
            try {
                setLoading(true)
                const res = await updateCurrency({ id: params?.id, data: inputVal });
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../currencies')
                    }, 3000);
                }
                setLoading(false)
            } catch (error) {
                toastErrorMessage(error?.message);
                setLoading(false);
            }
        } else {
            try {
                setLoading(true)
                const res = await AddCurrencyD(inputVal);
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
        }

    };

    const getByIdData = async () => {
        try {
            setLoading(true)
            const res = await getCurrencyById(params?.id);
            setInputval(res?.data);
            setLoading(false)
        } catch (error) {
            setLoading(false);
        }
    };
    useEffect(() => {
        getByIdData();
    }, [params?.id]);

    return (
        <>
            <div className="col-lg-5">
                {loading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}

                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">{params?.id ? 'Update' : 'Add New'} Currency</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitData}>
                            <div className="form-group row">
                                <div className="col-lg-2">
                                    <label className="control-label">Name</label>
                                </div>
                                <div className="col-lg-10">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={inputVal?.name}
                                        onChange={handleChange}
                                        placeholder="Currency Name"
                                        className="form-control "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-2">
                                    <label className="control-label">Symbol</label>
                                </div>
                                <div className="col-lg-10">
                                    <input
                                        type="text"
                                        id="name"
                                        name="symbol"
                                        value={inputVal?.symbol}
                                        onChange={handleChange}
                                        placeholder="Symbol"
                                        className="form-control "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-2">
                                    <label className="control-label">Code</label>
                                </div>
                                <div className="col-lg-10">
                                    <input
                                        type="text"
                                        id="name"
                                        name="code"
                                        value={inputVal?.code}
                                        onChange={handleChange}
                                        placeholder="Currency Code"
                                        className="form-control "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-2">
                                    <label className="control-label">Exchange Rate</label>
                                </div>
                                <div className="col-lg-10">
                                    <input
                                        type="text"
                                        id="name"
                                        name="exchange_rate"
                                        value={inputVal?.exchange_rate}
                                        onChange={handleChange}
                                        placeholder="Exchange Rate"
                                        className="form-control "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary">
                                    {params?.id ? 'Update' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>

    )
}

export default AddCurrency