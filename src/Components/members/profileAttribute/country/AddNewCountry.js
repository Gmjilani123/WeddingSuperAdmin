import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toastErrorMessage, toastSuccessMessage } from '../../../../common/tostShow/TostShow';
import { ToastContainer } from 'react-toastify';
import { AddCountries, getCountriesById, updateCountries } from '../../../../api/Api';

function AddNewCountry() {
    const [loading, setLoading] = useState(false);
    const [allReligions, setAllReligions] = useState();
    const [inputVal, setInputval] = useState({
        name: "",
        code: "",
        is_active: "",
    });
    const handleChange = (e) => {
        const inpVal = e.target.value;
        const inpName = e.target.name;
        const cloned = { ...inputVal };
        cloned[inpName] = inpVal;
        setInputval(cloned);
    }



    const params = useParams();
    const navigate = useNavigate();

    const handleSubmitData = async (e) => {
        e.preventDefault();
        if (params?.id) {
            try {
                setLoading(true)
                const res = await updateCountries({ id: params?.id, data: inputVal });
                console.log("updateDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../countries')
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
                const res = await AddCountries(inputVal);
                console.log("AddDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../countries')
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
            const res = await getCountriesById(params?.id);
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




    return (
        <>
            {loading && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}

            <div className="col-lg-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">{params?.id ? 'Update Country' : 'Add New Country'}</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitData}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Country Name</label>
                                <input type="text" id="name" name="name" value={inputVal?.name} onChange={handleChange} placeholder="Enter Country Name" className="form-control" required fdprocessedid="bz0c2" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Country Code</label>
                                <input type="text" id="name" name="code" value={inputVal?.code} onChange={handleChange} placeholder="Enter Country Code" className="form-control" required fdprocessedid="bz0c2" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Active</label>
                                <select className="form-select form-control" name='is_active' value={inputVal?.is_active} required aria-label="Default select example" onChange={handleChange}>
                                    <option >Select</option>
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="apybab">{params?.id ? 'Update' : 'Save'}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>

    )
}

export default AddNewCountry