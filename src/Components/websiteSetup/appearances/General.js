import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { getAllGeneralAppearancesD, updateGeneralAppearancesD } from "../../../api/Api";

function General() {
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const [inputVal, setInputval] = useState({
        website_name: "",
        site_moto: "",
        site_icon: "",
        base_color: "",
        hover_color: "",
        secondary_color: "",
        profile_banner: "",
    });
    const handleChange = (e) => {
        const inpVal = e.target.value;
        const inpName = e.target.name;
        const cloned = { ...inputVal };
        cloned[inpName] = inpVal;
        setInputval(cloned);
    };

    const handleSubmitData = async (e) => {
        const payloadData = { ...inputVal, is_active: isActive };
        console.log(payloadData);
        e.preventDefault();
        try {
            setLoading(true)
            const res = await updateGeneralAppearancesD(payloadData);
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
            const res = await getAllGeneralAppearancesD();
            console.log("GoogleLoginres---", res);
            setInputval(res?.data);
            setLoading(false)
        } catch (error) {
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="card">
                {loading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <div className="card-header">
                    <h6 className="fw-600 mb-0">General</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmitData}>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Frontend Website Name</label>
                            <div className="col-md-8">
                                <input type="text" name="website_name" value={inputVal?.website_name}
                                    onChange={handleChange} className="form-control" placeholder="Website Name" defaultValue="Active Matrimonial CMS" fdprocessedid="3z8u9p" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Site Motto</label>
                            <div className="col-md-8">
                                <input type="text" name="site_moto" className="form-control" value={inputVal?.site_moto}
                                    onChange={handleChange} placeholder="Best Matrimonial Website" defaultValue="Best Matrimonial CMS" fdprocessedid="aoban" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label
                                className="col-md-3 col-form-label"
                                htmlFor="signinSrEmail"
                            >
                                Site Icon
                            </label>
                            <div className="col-md-9">

                                <input
                                    onChange={handleChange}
                                    className="form-control"
                                    type="file"
                                    name="site_icon"
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Website Base Color</label>
                            <div className="col-md-8">
                                <input type="text" name="base_color" value={inputVal?.base_color}
                                        onChange={handleChange} className="form-control" placeholder="#377dff" defaultValue="#FD2C79" fdprocessedid="d7v9ih" />
                                <small className="text-muted">Hex Color Code</small>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Website Base Hover Color</label>
                            <div className="col-md-8">
                                <input type="text" name="hover_color" value={inputVal?.hover_color}
                                        onChange={handleChange} className="form-control" placeholder="#377dff" defaultValue="#FD2C79" fdprocessedid="4764ab" />
                                <small className="text-muted">Hex Color Code</small>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Website Secondary Color</label>
                            <div className="col-md-8">
                                <input type="text" name="secondary_color" value={inputVal?.secondary_color}
                                        onChange={handleChange} className="form-control" placeholder="#377dff" defaultValue="#FD655B" fdprocessedid="jp142s" />
                                <small className="text-muted">Hex Color Code. Gradient color will be generated with base color and secondary color.</small>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label
                                className="col-md-3 col-form-label"
                                htmlFor="signinSrEmail"
                            >
                                Member Public Profile Page Banner
                            </label>
                            <div className="col-md-9">

                                <input
                                    onChange={handleChange}
                                    className="form-control"
                                    type="file"
                                    name="profile_banner"
                                />
                            </div>
                        </div>



                        <div className="text-right">
                            <button type="submit" className="btn btn-primary" fdprocessedid="0aq89c">Update</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default General