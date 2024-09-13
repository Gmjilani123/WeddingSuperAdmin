import React, { useEffect, useState } from 'react'
import { toastErrorMessage, toastSuccessMessage } from '../../../../common/tostShow/TostShow';
import { useNavigate, useParams } from 'react-router-dom';
import { AddState, getCountriesForSelector, getStateById, updateState } from '../../../../api/Api';
import { ToastContainer } from 'react-toastify';

function AddNewState() {
    const [loading, setLoading] = useState(false);
    const [allCountries, setAllCountries] = useState();
    const [inputVal, setInputval] = useState({
        name: "",
        country_id: "",
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
                const res = await updateState({ id: params?.id, data: inputVal });
                console.log("updateDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../states')
                    }, 5000);
                }
                setLoading(false)
            } catch (error) {
                toastErrorMessage(error?.message);
                setLoading(false);
            }
        } else {
            try {
                setLoading(true)
                const res = await AddState(inputVal);
                console.log("AddDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../states')
                    }, 5000);
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
            const res = await getStateById(params?.id);
            console.log("getByIdResponse---", res);
            setInputval(res?.data);
            setLoading(false)
        } catch (error) {
            // toastErrorMessage("Error");
            setLoading(false);
        }
    };
    useEffect(() => {
        getByIdData();
    }, [params?.id]);

    const getSelectorData = async () => {
        try {
            const res = await getCountriesForSelector();
            console.log("getSelectorDataResponse---", res?.data);
            setAllCountries(res?.data);
        } catch (error) {
        }
    };
    useEffect(() => {
        getSelectorData();
    }, []);

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
                        <h5 className="mb-0 h6">{params?.id ? 'Update State' : 'Add New State'}</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitData}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Country</label>
                                <select className="form-select form-control" name='country_id' value={inputVal?.country_id} required aria-label="Default select example" onChange={handleChange}>
                                    <option >Select Country</option>
                                    {allCountries && allCountries?.map((item, i) => {
                                        return <option value={item?._id} key={i}>{item?.name}</option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">State Name</label>
                                <input type="text" id="name" name="name" onChange={handleChange} value={inputVal?.name} placeholder="State Name" className="form-control" required fdprocessedid="nnphie" />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="o6q4d8">
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

export default AddNewState