import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toastErrorMessage, toastSuccessMessage } from "../../../common/tostShow/TostShow";
import { deleteBlogPost, getAllBlogPosts, searchBlogPost } from "../../../api/Api";
import { Pagination } from "antd";

function AllPost() {
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
        const res = await getAllBlogPosts(page);
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
      const res = await deleteBlogPost(itemId);
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

  const handleToggleChange = (status) => {
    console.log('statusToggle-', !status)
  };

  const handleSearchChange = (e) => {
    setInpval(e.target?.value)
  };

  const searchData = async (pageNo) => {
    console.log('inpVal--', inpVal)
    try {
      setLoading(true);
      const res = await searchBlogPost({ page: pageNo, val: inpVal });
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
              <div className="col-auto">
                <h1 className="h3">All Posts</h1>
              </div>
              <div className="col text-right">
                <Link
                  to="/admin/blog-all-Post/create"
                  className="btn btn-circle btn-primary"
                >
                  <span>Add New Post</span>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <div className="card">
            <form id="sort_blogs">
              <div className="card-header row gutters-5">
                <div className="col-lg-4 text-center text-md-left">
                  <h5 className="mb-md-0 h6">All blog posts</h5>
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
            </form>
            <div className="card-body">
              <table
                className="table mb-0 aiz-table footable footable-1 breakpoint-xl"
                style={{}}
              >
                <thead>
                  <tr className="footable-header">
                    <th
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      #
                    </th>
                    <th style={{ display: "table-cell" }}>Title</th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Category
                    </th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Short Description
                    </th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Status
                    </th>
                    <th
                      className="text-right footable-last-visible"
                      width="10%"
                      style={{ display: "table-cell" }}
                    >
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listData && listData?.map((item, i) => {
                    return <tr key={i}>
                      <td
                        className="footable-first-visible"
                        style={{ display: "table-cell" }}
                      >
                        {(pageIndex * countToShowInTable) + i + 1}
                      </td>
                      <td style={{ display: "table-cell" }}>
                        {item?.title}
                      </td>
                      <td style={{ display: "table-cell" }}>{item?.category_id}</td>
                      <td style={{ display: "table-cell" }}>
                        {item?.short_description}
                      </td>
                      <td style={{ display: "table-cell" }}>
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            type="checkbox"
                            onChange={handleToggleChange}
                            defaultValue={6}
                            checked={item?.is_active}
                          />
                          <span />
                        </label>
                      </td>
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
                </tbody>



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
              </table>
              <div className="aiz-pagination">
                <nav>
                  {totalCount && <Pagination onChange={onChangeVal} total={totalCount} />}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
export default AllPost;
