import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AddSubCaste, getCasteForSelector, getReligionForSelector, getSubCasteById, updateSubCaste } from '../../../../api/Api';
import { toastErrorMessage, toastSuccessMessage } from '../../../../common/tostShow/TostShow';
import { ToastContainer } from 'react-toastify';

function AddNewSubCaste() {
    const [loading, setLoading] = useState(false);
    const [allReligions, setAllReligions] = useState();
    const [allCastes, setAllCastes] = useState();
    const [inputVal, setInputval] = useState({
        name: "",
        religion_id: "",
        caste_id: "",
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
                const res = await updateSubCaste({ id: params?.id, data: inputVal });
                console.log("updateDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../sub-castes')
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
                const res = await AddSubCaste(inputVal);
                console.log("AddDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../sub-castes')
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
            const res = await getSubCasteById(params?.id);
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
            console.log("getReligionSelector---", res?.data);
            setAllReligions(res?.data);
        } catch (error) {
        }
    };
    const getCasteSelectorData = async () => {
        try {
            const res = await getCasteForSelector();
            console.log("getCasteSelector---", res?.data);
            setAllCastes(res?.data);
        } catch (error) {
        }
    };
    useEffect(() => {
        getSelectorData();
        getCasteSelectorData();
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
                        <h5 className="mb-0 h6">{params?.id ? 'Update Sub Caste' : 'Add New Sub Caste'}</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitData}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Religion</label>
                                <select className="form-select form-control" name='religion_id' value={inputVal?.religion_id} required aria-label="Default select example" onChange={handleChange}>
                                    <option >Select Religion</option>
                                    {allReligions && allReligions?.map((item, i) => {
                                        return <option value={item?._id} key={i}>{item?.religion}</option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Caste</label>
                                <select className="form-select form-control" name='caste_id' value={inputVal?.caste_id} required aria-label="Default select example" onChange={handleChange}>
                                    <option >Select Caste</option>
                                    {allCastes && allCastes?.map((item, i) => {
                                        return <option value={item?._id} key={i}>{item?.caste}</option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Sub Caste Name</label>
                                <input type="text" id="name" name="name" value={inputVal?.name} onChange={handleChange} placeholder="Sub Castes Name" className="form-control" required fdprocessedid="lqduw" />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="07ijkk">
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

export default AddNewSubCaste