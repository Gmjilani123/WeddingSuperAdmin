import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AddCaste, AddReligion, getCasteById, getReligionById, getReligionForSelector, updateCaste, updateReligion } from '../../../../api/Api';
import { toastErrorMessage, toastSuccessMessage } from '../../../../common/tostShow/TostShow';
import { ToastContainer } from 'react-toastify';

function AddNewCaste() {
    const [loading, setLoading] = useState(false);
    const [allReligions, setAllReligions] = useState();
    const [inputVal, setInputval] = useState({
        caste: "",
        religion_id: "",
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
                const res = await updateCaste({ id: params?.id, data: inputVal });
                console.log("updateDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../castes')
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
                const res = await AddCaste(inputVal);
                console.log("AddDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../castes')
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
            const res = await getCasteById(params?.id);
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
            const res = await getReligionForSelector();
            console.log("getSelectorDataResponse---", res?.data);
            setAllReligions(res?.data);
        } catch (error) {
        }
    };
    useEffect(() => {
        getSelectorData();
    }, []);







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
                        <h5 className="mb-0 h6">{params?.id ? 'Update Caste' : 'Add New Caste'}</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitData}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Caste Name</label>
                                <input type="text" id="name" name="caste" value={inputVal?.caste} onChange={handleChange} placeholder="Enter Caste Name" className="form-control" required fdprocessedid="bz0c2" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Religion Name</label>
                                <select className="form-select form-control" name='religion_id' value={inputVal?.religion_id} required aria-label="Default select example" onChange={handleChange}>
                                    <option >Select Religion</option>
                                    {allReligions && allReligions?.map((item, i) => {
                                        return <option value={item?._id} key={i}>{item?.religion}</option>
                                    })}
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

export default AddNewCaste