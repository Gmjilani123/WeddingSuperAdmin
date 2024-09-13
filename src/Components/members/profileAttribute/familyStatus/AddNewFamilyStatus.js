import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toastErrorMessage, toastSuccessMessage } from '../../../../common/tostShow/TostShow';
import { AddFamilyStatus, AddOnBehalf, getFamilyStatusById, getOnBehalfById, updateFamilyStatus, updateOnBehalf } from '../../../../api/Api';
import { ToastContainer } from 'react-toastify';

function AddNewFamilyStatus() {
    const [loading, setLoading] = useState(false);
    const [inputVal, setInputval] = useState({
        name: "",
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
                const res = await updateFamilyStatus({ id: params?.id, data: inputVal });
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../family-status')
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
                const res = await AddFamilyStatus(inputVal);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../family-status')
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
            const res = await getFamilyStatusById(params?.id);
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
                        <h5 className="mb-0 h6">{params?.id ? 'Update Family Status' : 'Add New Family Status'}</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitData}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" value={inputVal?.name} onChange={handleChange} placeholder={"Family Status"} className="form-control" required fdprocessedid="pniqgn" />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="6o487s">
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

export default AddNewFamilyStatus