import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toastErrorMessage, toastSuccessMessage } from '../../../common/tostShow/TostShow';
import { deletePages, getAllPagesD, searchPages } from '../../../api/Api';

function WebsiteSetupPages() {
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
                const res = await getAllPagesD(page);
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
            const res = await deletePages(itemId);
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
            const res = await searchPages({ page: pageNo, val: inpVal });
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
            <div className="aiz-main-content">
            {loading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col">
                                <h1 className="h3">Website Pages</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h6 className="mb-0 fw-600">All Pages</h6>
                            <Link to="/admin/website/custom-pages/create" className="btn btn-primary">Add New Page</Link>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                        <th style={{ display: 'table-cell' }}>Name</th>
                                        <th data-breakpoints="md" style={{ display: 'table-cell' }}>URL</th>
                                        <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Actions</th>
                                        </tr>
                                </thead>
                                <tbody>
                                {listData && listData?.map((item, i)=>{
                                    return <tr key={i}>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>
                                    {(pageIndex * countToShowInTable) + i + 1}
                                    </td>
                                    <td style={{ display: 'table-cell' }}>
                                        <a href="#" className="text-reset">{item?.title}</a>
                                    </td>
                                    <td style={{ display: 'table-cell' }}>
                                    {item?.link}
                                    </td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <Link to={`edit/${item?._id}`} className="btn btn-icon btn-circle btn-sm btn-soft-primary" title="Edit">
                                            <i className="las la-pen" />
                                        </Link>
                                    </td>
                                </tr>
                                })}
                                    
                                </tbody>
                            </table>
                            <div className="aiz-pagination">
                            <nav>
                                {totalCount && <Pagination onChange={onChangeVal} total={totalCount} />}
                            </nav>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WebsiteSetupPages