import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Pagination } from "antd";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { deletePackagePayment, getAllPackagePayments, getAllPremiumPackages, searchPackagePayment } from "../../api/Api";
import { toastErrorMessage, toastSuccessMessage } from "../../common/tostShow/TostShow";

function PackagePayments() {
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
        const res = await getAllPackagePayments(page);
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
      const res = await deletePackagePayment(itemId);
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
      const res = await searchPackagePayment({ page: pageNo, val: inpVal });
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
          <div className="aiz-titlebar mt-2 mb-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">Package Payment List</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">All Payments</h5>
                </div>
                <div className="card-body">
                  <table className="table aiz-table mb-0 footable footable-1 breakpoint-lg" style={{}}>
                    <thead>
                      <tr className="footable-header">
                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Member Name</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Package</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Payment Method</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Amount</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Payment Status</th><th style={{ display: 'table-cell' }}>Payment Code</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Purchase Date</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                    </thead>
                    <tbody>
                      {listData && listData?.map((item, i) => {
                        return <tr key={i}>
                          <td className="footable-first-visible" style={{ display: 'table-cell' }}>
                            {(pageIndex * countToShowInTable) + i + 1}
                          </td>
                          <td style={{ display: 'table-cell' }}>
                            Olivia Emma
                          </td>
                          <td style={{ display: 'table-cell' }}>
                            Platinum Package
                          </td>
                          <td style={{ display: 'table-cell' }}>
                            Stripe
                          </td>
                          <td style={{ display: 'table-cell' }}>200$</td>
                          <td style={{ display: 'table-cell' }}>
                            <span className="badge badge-inline badge-success text-center">Paid</span>
                          </td>
                          <td style={{ display: 'table-cell' }}>210629-105148</td>
                          <td style={{ display: 'table-cell' }}>2021-06-29 00:51:48</td>
                          <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                            <Link to="invoice" target="_blank" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="invoice">
                              <i className="las la-file-invoice" />
                            </Link>
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
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>

    </>
  )
}
export default PackagePayments;