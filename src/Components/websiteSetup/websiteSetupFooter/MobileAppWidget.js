import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { toastErrorMessage, toastSuccessMessage } from "../../../common/tostShow/TostShow";
import { getFooterMobileAppWidgetD, updateFooterMobileAppWidgetD } from "../../../api/Api";

function MobileAppWidget() {
    const [loading, setLoading] = useState(false);

    const [inputVal, setInputval] = useState({
        title: "",
        play_store_img: '',
    });
    const handleChange = (e) => {
        const inpVal = e.target.value;
        const inpName = e.target.name;
        const cloned = { ...inputVal };
        cloned[inpName] = inpVal;
        setInputval(cloned);
    };

    const handleSubmitData = async (e) => {
        const payloadData = { ...inputVal };
        console.log(payloadData);
        e.preventDefault();
        try {
            setLoading(true)
            const res = await updateFooterMobileAppWidgetD(payloadData);
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
            const res = await getFooterMobileAppWidgetD();
            setInputval(res?.data);
            setLoading(false)
        } catch (error) {
            toastErrorMessage(error?.message);
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
                    <h6 className="mb-0">Mobile app Widget</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmitData}>

                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" value={inputVal?.title}
                                onChange={handleChange} placeholder="Widget title" name="title" fdprocessedid="fzzfi" />
                        </div>

                        <div className="form-group">
                            <label>PlayStore Image Link</label>
                            <input type="text" className="form-control" value={inputVal?.play_store_img}
                                onChange={handleChange} placeholder="Widget title" name="play_store_img" fdprocessedid="fzzfi" />
                        </div>


                        <div className="text-right">
                            <button type="submit" className="btn btn-primary" fdprocessedid="9ldghp">Update</button>
                        </div>

                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default MobileAppWidget