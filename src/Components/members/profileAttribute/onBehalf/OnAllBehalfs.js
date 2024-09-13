import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Pagination } from 'antd';
import { toastErrorMessage, toastSuccessMessage } from '../../../../common/tostShow/TostShow';
import { ToastContainer } from 'react-toastify';
import { deleteOnBehalf, getOnBehalfs, searchOnBehalf } from '../../../../api/Api';


function OnAllBehalfs() {
    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState();
    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const [itemId, setItemId] = useState();
    const [inpVal, setInpval] = useState();
    const [searchStatus, setSeacrhStatus] = useState(false);

    const [totalCount, setTotalCount] = useState(null);
    const [pageIndex, setPageIndex] = useState(0)
    const [countToShowInTable, setCountToShowInTable] = useState(10)

    const [show, setShow] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getData = async (page) => {
        if (searchStatus) {
            searchData(page)
        } else {
            try {
                setLoading(true);
                const res = await getOnBehalfs(page);
                console.log('ListApiResponse---', res)
                setLoading(false);
                setListData(res?.data);
                setTotalCount(res?.totalCount);
            } catch (error) {
                setLoading(false);
            }
        }
    };
    useEffect(() => {
        getData(0);
    }, []);
    const onChangeVal = (e) => {
        console.log('e', e - 1)
        setCurrentPageNumber(e - 1)
        getData(e - 1)
        setPageIndex(e - 1)
    };


    const openDeleteModal = (id) => {
        setItemId(id)
        setSmShow(true)
    };
    const handleDelete = async () => {
        console.log("id", itemId)
        try {
            setLoading(true)
            const res = await deleteOnBehalf(itemId);
            console.log("ReligionRes---", res);
            setLoading(false)
            toastSuccessMessage("Deleted")
        } catch (error) {
            toastErrorMessage("Not Deleted");
            setLoading(false);
        }
        setSmShow(false);
        getData(currentPageNumber);
    };

    const handleSearchChange = (e) => {
        setInpval(e.target?.value)
    };

    const searchData = async (pageNo) => {
        console.log('inpVal--', inpVal)
        try {
            setLoading(true);
            const res = await searchOnBehalf({ page: pageNo, val: inpVal });
            console.log('ListApiResponse---', res)
            setLoading(false);
            setListData(res?.data);
            setTotalCount(res?.totalCount);
            setSeacrhStatus(true);
        } catch (error) {
            setLoading(false);
        }
    };


    return (
        <>
            <div className=" col-lg-7 ">
                {loading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col-lg-4 text-center text-md-left">
                            <h5 className="mb-md-0 h6">All On Behalves</h5>
                        </div>
                        <div className="col-md-6">
                            <div className='row' style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='col-lg-8'>
                                    <form>
                                        <div className="input-group input-group-sm">
                                            <input type="text" className="form-control" id="search" onChange={handleSearchChange} name="search" placeholder="Type name & Enter" fdprocessedid="tywkpk" />
                                        </div>
                                    </form>
                                </div>
                                <div className='col-lg-4'>
                                    <button className='btn btn-primary pt-2 pb-2' type='button' onClick={() => searchData(0)}>Search</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                    <th style={{ display: 'table-cell' }}>Name</th>
                                    <th className="text-right footable-last-visible" width="20%" style={{ display: 'table-cell' }}>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listData && listData?.map((item, i) => {
                                    return <tr key={i}>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>
                                            {(pageIndex * countToShowInTable) + i + 1}
                                        </td>
                                        <td style={{ display: 'table-cell' }}>{item.name}</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to={`edit/${item?._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                <i className="las la-edit" />
                                            </Link>
                                            <button type='button' className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete" onClick={() => openDeleteModal(item?._id)}>
                                                <i className="las la-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                })}


                                <Modal
                                    size="sm"
                                    show={smShow}
                                    onHide={() => setSmShow(false)}
                                    aria-labelledby="example-modal-sizes-title-sm"
                                >
                                    <Modal.Header>
                                        <h4 class="modal-title h6">Delete Confirmation</h4>
                                        <button type="button" class="close" onClick={() => setSmShow(false)} aria-hidden="true"></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="text-center">
                                            <p className="mt-1">Are you sure to delete this?</p>
                                            <button type="button" className="btn btn-light mt-2" onClick={() => setSmShow(false)}>Cancel</button>
                                            <button type="button" className="btn btn-primary mt-2" onClick={handleDelete}>Delete</button>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </tbody>
                        </table>
                        <div className="aiz-pagination">
                            <nav>
                                {totalCount && <Pagination onChange={onChangeVal} total={totalCount} />}
                            </nav>
                        </div>

                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default OnAllBehalfs