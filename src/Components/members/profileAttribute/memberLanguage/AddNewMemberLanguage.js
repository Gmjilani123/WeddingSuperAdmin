import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AddMemberLanguage, getMemberLanguageById, updateMemberLanguage } from '../../../../api/Api';
import { ToastContainer } from 'react-toastify';
import { toastErrorMessage, toastSuccessMessage } from '../../../../common/tostShow/TostShow';

function AddNewMemberLanguage() {
    const [loading, setLoading] = useState(false);
    const [allReligions, setAllReligions] = useState();
    const [allCastes, setAllCastes] = useState();
    const [inputVal, setInputval] = useState({
        name: "",
        slug: "",
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
                const res = await updateMemberLanguage({ id: params?.id, data: inputVal });
                console.log("updateDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../member-languages')
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
                const res = await AddMemberLanguage(inputVal);
                console.log("AddDataResponse---", res);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../member-languages')
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
            const res = await getMemberLanguageById(params?.id);
            console.log("getByIdResponse---", res);
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
                        <h5 className="mb-0 h6">{params?.id ? 'Update Member Language' : 'Add New Member Language'}</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitData}>
                            <input type="hidden" name="_token" defaultValue="p8MERQePbRlFGsiuKSKG8cPScHeUINqH8k4Aaw6Z" />
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" onChange={handleChange} value={inputVal?.name} placeholder="Language Name" className="form-control" required fdprocessedid="q5svgb" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Slug</label>
                                <input type="text" id="name" name="slug" onChange={handleChange} value={inputVal?.slug} placeholder="Slug" className="form-control" required fdprocessedid="q5svgb" />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="jmcmb8">
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

export default AddNewMemberLanguage