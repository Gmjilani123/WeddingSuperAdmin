import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import image1 from '../../../../assets/img/membersimage/JBNnlxl0aX4iRk2e3qCpjDca3WFBArAi4tSPJjeC.jpg';

const memberDetailModalData = {
    modalHeaderData1: {
        title: "Running Package Information"
    },
    modalBodyData1: [
        { id: '1', title: "Package Name", free: '5' },
        { id: '2', title: "Remaining Photo Gallery", free: '5' },
        { id: '3', title: "Remaining Contact View", free: '2' },
        { id: '4', title: "Remaining Profile Image View", free: '3' },
        { id: '5', title: "Remaining Gallery Image View", free: '4' },
        { id: '6', title: "Auto Profile Match Show", free: '6' },
        { id: '7', title: "validity", free: '5' },
    ]
}

function MembersDetail() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Member Details</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body text-center">
                                    <span className="avatar avatar-xl m-3 center">
                                        <img src={image1} />
                                    </span>
                                    <p>Cairo Carney</p>
                                    <div className="pad-ver btn-groups">
                                        <Link to="#" onClick={handleShow} className="btn btn-info btn-sm add-tooltip me-1">Package</Link>
                                        <Link to="#" onClick={handleShow2} className="btn btn-dark btn-sm add-tooltip">Block</Link>
                                        <br /><br />
                                        <span className="badge badge-inline badge-success">Active Account</span>
                                    </div>
                                </div>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header className="modal-header">
                                        <h5 className="modal-title h6">{memberDetailModalData.modalHeaderData1.title}</h5>
                                        <button type="button" className="close" onClick={handleClose}>
                                        </button>
                                    </Modal.Header>
                                    <Modal.Body className="modal-body">
                                        <table className="table table-bordered">
                                            <tbody>
                                                {memberDetailModalData.modalBodyData1.map((item) => {
                                                    return <tr key={item.id}>
                                                        <th>{item.title}</th>
                                                        <td>{item.free}</td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="modal-footer">
                                            <button className="btn btn-success" onclick="">Upgrade Package</button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>

                                <Modal show={show2} onHide={handleClose2} animation={false}>
                                    <Modal.Header className="modal-header">
                                        <h5 className="modal-title h6">Member Block !</h5>
                                        <button type="button" className="close" onClick={handleClose2} />
                                    </Modal.Header>
                                    <Modal.Body className="modal-body">
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Blocking Reason</label>
                                            <div className="col-md-9">
                                                <textarea type="text" name="blocking_reason" className="form-control" placeholder="Blocking Reason" required defaultValue={""} />
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer className="modal-footer">
                                        <button type="button" className="btn btn-light" onClick={handleClose2}>Close</button>
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {/* Introduction */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Introduction</h5>
                                </div>
                                <div className="card-body">
                                    <p />
                                </div>
                            </div>
                            {/* Basic Information */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Basic Information</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>First Name</th>
                                            <td>Cairo</td>
                                            <th>Last Name</th>
                                            <td>Carney</td>
                                        </tr>
                                            <tr>
                                                <th>Gender</th>
                                                <td>
                                                    Female
                                                </td>
                                                <th>Date Of Birth</th>
                                                <td>1997-09-15</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td />
                                                <th>Phone Number</th>
                                                <td>+1+1 (638) 415-7906</td>
                                            </tr>
                                            <tr>
                                                <th>marital_status</th>
                                                <td />
                                                <th>Number Of Children</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>On Behalf</th>
                                                <td>Sister</td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Present Address */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Present Address</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>City</th>
                                            <td />
                                            <th>State</th>
                                            <td />
                                        </tr>
                                            <tr>
                                                <th>Country</th>
                                                <td />
                                                <th>Postal Code</th>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Education */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Education</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>Degree</th>
                                            <th>Institution</th>
                                            <th>Start</th>
                                            <th>End</th>
                                            <th>Status</th>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Career */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Career</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>designation</th>
                                            <th>company</th>
                                            <th>Start</th>
                                            <th>End</th>
                                            <th>Status</th>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Physical Attributes */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Physical Attributes</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>Height</th>
                                            <td />
                                            <th>Weight</th>
                                            <td />
                                        </tr>
                                            <tr>
                                                <th>Eye Color</th>
                                                <td />
                                                <th>Hair Color</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Complexion</th>
                                                <td />
                                                <th>Blood Group</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Body Type</th>
                                                <td />
                                                <th>Body Art</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Disability</th>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Language */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Language</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>Mother Tangue</th>
                                            <td>
                                            </td>
                                            <th>Known Languages</th>
                                            <td>
                                            </td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Hobbies  */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Hobbies &amp; Interest</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>Hobbies</th>
                                            <td />
                                            <th>Interests</th>
                                            <td />
                                        </tr>
                                            <tr>
                                                <th>Music</th>
                                                <td />
                                                <th>Books</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Movies</th>
                                                <td />
                                                <th>TV Shows</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Sports</th>
                                                <td />
                                                <th>Fitness Activities</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Cuisines</th>
                                                <td />
                                                <th>Dress Styles</th>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Personal Attitude & Behavior */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Personal Attitude &amp; Behavior</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>Affection</th>
                                            <td />
                                            <th>Humor</th>
                                            <td />
                                        </tr>
                                            <tr>
                                                <th>Political Views</th>
                                                <td />
                                                <th>Religious Service</th>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Residency Information */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Residency Information</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>Birth Country</th>
                                            <td>
                                            </td>
                                            <th>Recidency Country</th>
                                            <td>
                                            </td>
                                        </tr>
                                            <tr>
                                                <th>Growup Country</th>
                                                <td>
                                                </td>
                                                <th>Immigration Status</th>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Spiritual & Social Background */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Spiritual &amp; Social Background</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>Religion</th>
                                            <td />
                                            <th>Caste</th>
                                            <td />
                                        </tr>
                                            <tr>
                                                <th>Sub Caste</th>
                                                <td />
                                                <th>Ethnicity</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Personal Value</th>
                                                <td />
                                                <th>Family Value</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Community Value</th>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Life Style */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Life Style</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>Diet</th>
                                            <td />
                                            <th>Drink</th>
                                            <td />
                                        </tr>
                                            <tr>
                                                <th>Smoke</th>
                                                <td />
                                                <th>Living With</th>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Astronomic Information  */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Astronomic Information</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>Sun Sign</th>
                                            <td />
                                            <th>Moon Sign</th>
                                            <td />
                                        </tr>
                                            <tr>
                                                <th>Time Of Birth</th>
                                                <td />
                                                <th>City Of Birth</th>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Permanent Address */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Permanent Address</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>City</th>
                                            <td />
                                            <th>State</th>
                                            <td />
                                        </tr>
                                            <tr>
                                                <th>Country</th>
                                                <td />
                                                <th>Postal Code</th>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Family Information */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Family Information</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>Father</th>
                                            <td />
                                            <th>Mother</th>
                                            <td />
                                        </tr>
                                            <tr>
                                                <th>Sibling</th>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* Partner Expectation */}
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="mb-0 h6">Partner Expectation</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody><tr>
                                            <th>General</th>
                                            <td />
                                            <th>Residence Country</th>
                                            <td>
                                            </td>
                                        </tr>
                                            <tr>
                                                <th>Height</th>
                                                <td />
                                                <th>Weight</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>marital_status</th>
                                                <td />
                                                <th>Children Acceptable</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Religion</th>
                                                <td />
                                                <th>Caste</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Sub Caste</th>
                                                <td />
                                                <th>Language</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Education</th>
                                                <td />
                                                <th>Profession</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Smoking Acceptable</th>
                                                <td />
                                                <th>Drinking Acceptable</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Diet</th>
                                                <td />
                                                <th>Body Type</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Personal Value</th>
                                                <td />
                                                <th>Manglik</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th>Preferred Country</th>
                                                <td>
                                                </td>
                                                <th>preferred_state_id</th>
                                                <td>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Family Value</th>
                                                <td />
                                                <th>Complexion</th>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MembersDetail