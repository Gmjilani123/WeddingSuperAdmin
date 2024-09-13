import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toastErrorMessage, toastSuccessMessage } from '../../../../common/tostShow/TostShow';
import { AddLanguageD, getLanguageById, updateLanguage } from '../../../../api/Api';
import { ToastContainer } from 'react-toastify';

function AddLanguage() {
    const [loading, setLoading] = useState(false);
    const [inputVal, setInputval] = useState({
        name: "",
        code: "",
        slug: "",
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
                const res = await updateLanguage({ id: params?.id, data: inputVal });
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        navigate('../languages')
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
                const res = await AddLanguageD(inputVal);
                if (res?.error === false) {
                    toastSuccessMessage(res?.message);
                    setTimeout(() => {
                        // navigate('../languages')
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
            const res = await getLanguageById(params?.id);
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
        <div className="col-lg-5">
            {loading && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}

            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">{params?.id ? 'Update' : 'Add New'} Language</h5>
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
                                    placeholder="Language Name"
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
                                {/* <select
                                    className="form-select form-control aiz-selectpicker mb-2 mb-md-0"
                                    aria-label="Default select example" name='code' value={inputVal?.code}
                                    onChange={handleChange}
                                >
                                    <option>AD</option>
                                    <option value="2">AE</option>
                                    <option value="3">AF</option>
                                    <option value="2">AG</option>
                                    <option value="3">AL</option>
                                </select> */}
                                <input
                                    type="text"
                                    id="name"
                                    name="code"
                                    value={inputVal?.code}
                                    onChange={handleChange}
                                    placeholder="Language Code"
                                    className="form-control "
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-2">
                                <label className="control-label">Slug</label>
                            </div>
                            <div className="col-lg-10">
                                <input
                                    type="text"
                                    id="name"
                                    name="slug"
                                    value={inputVal?.slug}
                                    onChange={handleChange}
                                    placeholder="Slug"
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
    )
}

export default AddLanguage