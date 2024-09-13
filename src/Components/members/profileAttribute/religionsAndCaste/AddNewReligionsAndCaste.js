import React, { useEffect, useState } from 'react'
import { AddReligion, getReligionById, updateReligion } from '../../../../api/Api';
import { ToastContainer } from 'react-toastify';
import { toastErrorMessage, toastSuccessMessage } from '../../../../common/tostShow/TostShow';
import { useNavigate, useParams } from 'react-router-dom';

function AddNewReligionsAndCaste() {
    const [loading, setLoading] = useState(false);
    const [inputVal, setInputval] = useState({
        religion: "",
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
                const res = await updateReligion({ id: params?.id, data: inputVal });
                console.log("updateDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../religions')
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
                const res = await AddReligion(inputVal);
                console.log("AddDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../religions')
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
            const res = await getReligionById(params?.id);
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
                        <h5 className="mb-0 h6">{params?.id ? 'Update Religion' : 'Add New Religion'}</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitData}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Religion Name</label>
                                <input type="text" id="name" name="religion" value={inputVal?.religion} onChange={handleChange} placeholder="Enter Religion Name" className="form-control" required fdprocessedid="bz0c2" />
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

export default AddNewReligionsAndCaste