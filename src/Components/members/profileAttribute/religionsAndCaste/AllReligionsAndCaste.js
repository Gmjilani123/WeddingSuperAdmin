import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toastErrorMessage, toastSuccessMessage } from '../../../../common/tostShow/TostShow';
import { deleteReligion, getReligions, searchReligion } from '../../../../api/Api';
import { Pagination } from 'antd';
import { ToastContainer } from 'react-toastify';

function AllReligionsAndCaste() {
    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState();
    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const [inpVal, setInpval] = useState();
    const [searchStatus, setSeacrhStatus] = useState(false);

    const [show, setShow] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [itemId, setItemId] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [totalCount, setTotalCount] = useState(null);
    const [pageIndex, setPageIndex] = useState(0)
    const [countToShowInTable, setCountToShowInTable] = useState(10)


    const getData = async (page) => {
        if (searchStatus) {
            searchData(page)
        } else {
            try {
                setLoading(true);
                const res = await getReligions(page);
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
        setCurrentPageNumber(e - 1)
        getData(e - 1)
        setPageIndex(e - 1)
    };




    const openDeleteModal = (id) => {
        setItemId(id)
        setSmShow(true)
    };
    const handleDelete = async () => {
        try {
            setLoading(true)
            const res = await deleteReligion(itemId);
            console.log("DeleteResponse---", res);
            setLoading(false);
            toastSuccessMessage("Deleted");
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
            const res = await searchReligion({ page: pageNo, val: inpVal });
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
                            <h5 className="mb-md-0 h6">All Religions</h5>
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
                                    {/* <th style={{ display: 'table-cell' }}>Religion</th> */}
                                    <th className="text-right footable-last-visible" width="20%" style={{ display: 'table-cell' }}>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listData && listData?.map((item, i) => {
                                    return <tr key={i}>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>
                                            {(pageIndex * countToShowInTable) + i + 1}
                                        </td>
                                        {/* <td style={{ display: 'table-cell' }}>{item?.name}</td> */}
                                        <td style={{ display: 'table-cell' }}>{item?.religion}</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to={`edit/${item?._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                <i className="las la-edit" />
                                            </Link>
                                            {/* <Link to={'#'} className="btn btn-soft-primary btn-icon btn-circle btn-sm" onClick={handleShow} title="Edit">
                                                <i className="las la-edit" />
                                            </Link> */}
                                            <button type='button' className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete" onClick={() => openDeleteModal(item?._id)}>
                                                <i className="las la-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                })}
                                {/* <Modal show={show} onHide={handleClose}>
                                    <Modal.Header>
                                        <h5 className="modal-title h6">{data.modalData.title}</h5>
                                        <button type="button" className="close" onClick={handleClose}>
                                        </button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/castes/9" method="POST">
                                                <input name="_method" type="hidden" defaultValue="PATCH" />
                                                <input type="hidden" name="_token" defaultValue="DV6opNN5kN1eIp2BeSIuwMD7o1uf8dvUUYLEEtTq" />
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Religion</label>
                                                    <div>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>Open this select menu</option>
                                                            <option value={1}>Islam</option>
                                                            <option value={2} selected>Judaismm</option>
                                                            <option value={3}>Hinduism</option>
                                                            <option value={4}>Christianity</option>
                                                            <option value={5}>Buddhism</option>
                                                            <option value={6}>Jainism</option>
                                                            <option value={7}>Baha'i</option>
                                                            <option value={8}>Sikhism</option>
                                                            <option value={9}>Confucianism</option>
                                                            <option value={10}>Atheism</option>
                                                            <option value={16}>ertt</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">{data.modalData.casteName}</label>
                                                    <input type="text" id="name" name="name" defaultValue="Vaishyas" className="form-control" required fdprocessedid="usb3b6" />
                                                </div>
                                                <div className="form-group mb-3 text-right">
                                                    <button type="button" className="btn btn-primary" fdprocessedid="n5vbzk">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Modal.Body>
                                </Modal> */}

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
                                            {/* <a id="delete-link" className="btn btn-primary mt-2" href="#">Delete</a> */}
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
            </div >
        </>
    )
}

export default AllReligionsAndCaste