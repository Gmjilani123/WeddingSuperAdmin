import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ReportedMembers() {
    const [show, setShow] = useState(false);
    const [smShow, setSmShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Profile Reports</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-md-0 h6">Profile Reports</h5>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Member Name</th><th style={{ display: 'table-cell' }}>Reported By</th><th style={{ display: 'table-cell' }}>Report Reason</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>option</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                        <td style={{ display: 'table-cell' }}>Robert L. Gardner</td>
                                        <td style={{ display: 'table-cell' }}>Donna J. Perryman</td>
                                        <td style={{ display: 'table-cell' }}>reported_members</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="#" onClick={handleShow} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Block">
                                                <i className="las la-ban" />
                                            </Link>

                                            <Link to="#" onClick={() => setSmShow(true)} data-href="https://weddemoadmin.abaris.in/admin/reported/destroy/12" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete">
                                                <i className="las la-trash" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                        <td style={{ display: 'table-cell' }}>Robert L. Gardner</td>
                                        <td style={{ display: 'table-cell' }}>Donna J. Perryman</td>
                                        <td style={{ display: 'table-cell' }}>reported_members</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="#" onClick={handleShow} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Block">
                                                <i className="las la-ban" />
                                            </Link>

                                            <Link to="#" onClick={() => setSmShow(true)} data-href="https://weddemoadmin.abaris.in/admin/reported/destroy/12" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete">
                                                <i className="las la-trash" />
                                            </Link>


                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                        <td style={{ display: 'table-cell' }}>Robert L. Gardner</td>
                                        <td style={{ display: 'table-cell' }}>Donna J. Perryman</td>
                                        <td style={{ display: 'table-cell' }}>reported_members</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="#" onClick={handleShow} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Block">
                                                <i className="las la-ban" />
                                            </Link>

                                            <Link to="#" onClick={() => setSmShow(true)} data-href="https://weddemoadmin.abaris.in/admin/reported/destroy/12" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete">
                                                <i className="las la-trash" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                        <td style={{ display: 'table-cell' }}>Robert L. Gardner</td>
                                        <td style={{ display: 'table-cell' }}>Donna J. Perryman</td>
                                        <td style={{ display: 'table-cell' }}>reported_members</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="#" onClick={handleShow} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Block">
                                                <i className="las la-ban" />
                                            </Link>

                                            <Link to="#" onClick={() => setSmShow(true)} data-href="https://weddemoadmin.abaris.in/admin/reported/destroy/12" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete">
                                                <i className="las la-trash" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                        <td style={{ display: 'table-cell' }}>Robert L. Gardner</td>
                                        <td style={{ display: 'table-cell' }}>Donna J. Perryman</td>
                                        <td style={{ display: 'table-cell' }}>reported_members</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="#" onClick={handleShow} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Block">
                                                <i className="las la-ban" />
                                            </Link>

                                            <Link to="#" onClick={() => setSmShow(true)} data-href="https://weddemoadmin.abaris.in/admin/reported/destroy/12" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete">
                                                <i className="las la-trash" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                        <td style={{ display: 'table-cell' }}>Robert L. Gardner</td>
                                        <td style={{ display: 'table-cell' }}>Donna J. Perryman</td>
                                        <td style={{ display: 'table-cell' }}>reported_members</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="#" onClick={handleShow} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Block">
                                                <i className="las la-ban" />
                                            </Link>

                                            <Link to="#" onClick={() => setSmShow(true)} data-href="https://weddemoadmin.abaris.in/admin/reported/destroy/12" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete">
                                                <i className="las la-trash" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header>
                                            <div>
                                                <h5 className="modal-title h6">Member Block !</h5>
                                                <button type="button" className="close" onclick="{handleClose}" />
                                            </div>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="form-group row">
                                                <label className="col-md-3 col-form-label">Blocking Reason</label>
                                                <div className="col-md-9">
                                                    <textarea type="text" name="blocking_reason" className="form-control" placeholder="Blocking Reason" required defaultValue={""} />
                                                </div>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Submit
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

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
                                                <a id="delete-link" className="btn btn-primary mt-2" href="https://weddemoadmin.abaris.in/admin/reported/destroy/12">Delete</a>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </tbody>
                            </table>
                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReportedMembers