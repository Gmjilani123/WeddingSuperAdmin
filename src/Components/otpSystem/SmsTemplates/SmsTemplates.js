import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { getAllSMSTemplatesD } from '../../../api/Api';


function SmsTemplates() {

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">SMS Templates</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="Mobile Number Verification">
                      <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="Mobile Number Verification">Mobile Number Verification</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="Account Opening By Admin">Account Opening By Admin</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="Account Approval">Account Approval</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Staff Account Opening">Staff Account Opening</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Manual Payment Approval">Manual Payment Approval</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Express Interest">Express Interest</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Accept Interest">Accept Interest</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Password Reset">Password Reset</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Profile Picture View Request">Profile Picture View Request</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Profile Picture View Request Accepted">Profile Picture View Request Accepted</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Gallery Image View Request">Gallery Image View Request</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Gallery Image View Request Accepted">Gallery Image View Request Accepted</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>

                      <Col sm={9}>
                        <div className='tab-content' id="v-pills-tabContent">
                          <Tab.Content>
                            <Tab.Pane eventKey="Mobile Number Verification">
                              <div className="tab-pane fade active show" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Account Opening By Admin">
                              <div className="tab-pane fade active show" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form >
                                  <div className="form-group row">
                                    <div className="col-md-2">
                                      <label className="col-from-label">Activation</label>
                                    </div>
                                    <div className="col-md-10">
                                      <label className="aiz-switch aiz-switch-success mb-0">
                                        <input name="status" type="checkbox" />
                                        <span className="slider round" />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Account Approval">
                              <div className="tab-pane fade active show" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form>
                                  <div className="form-group row">
                                    <div className="col-md-2">
                                      <label className="col-from-label">Activation</label>
                                    </div>
                                    <div className="col-md-10">
                                      <label className="aiz-switch aiz-switch-success mb-0">
                                        <input name="status" type="checkbox" />
                                        <span className="slider round" />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="Staff Account Opening">
                              <div className="tab-pane fade active show" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form action="https://weddemoadmin.abaris.in/admin/sms-templates/4" method="POST">
                                  <input name="_method" type="hidden" defaultValue="PATCH" />
                                  <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />
                                  <div className="form-group row">
                                    <div className="col-md-2">
                                      <label className="col-from-label">Activation</label>
                                    </div>
                                    <div className="col-md-10">
                                      <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Congratulations [[name]], You have been added to&nbsp;[[site_name]] as Staff. Your account role is : [[role_type]]. Password is : [[password]]. Please contact the administration team if you have any further questions. Best wishes. [[url]]"} />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="Manual Payment Approval">
                              <div className="tab-pane fade show active" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form action="https://weddemoadmin.abaris.in/admin/sms-templates/5" method="POST">
                                  <input name="_method" type="hidden" defaultValue="PATCH" />
                                  <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />
                                  <div className="form-group row">
                                    <div className="col-md-2">
                                      <label className="col-from-label">Activation</label>
                                    </div>
                                    <div className="col-md-10">
                                      <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Hi [[name]], Your payment for the package purchase has been accepted. Payment Code is [[payment_code]. [[url]]"} />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>

                            </Tab.Pane>

                            <Tab.Pane eventKey="Express Interest">
                              <div className="tab-pane fade show active" id="v-pills-6" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form action="https://weddemoadmin.abaris.in/admin/sms-templates/6" method="POST">
                                  <input name="_method" type="hidden" defaultValue="PATCH" />
                                  <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                                                                                            <div className="form-group row">
                                    <div className="col-md-2">
                                      <label className="col-from-label">Activation</label>
                                    </div>
                                    <div className="col-md-10">
                                      <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Hi [[name]], [[member_name]] has expressed interest in you. [[url]]"} />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="Accept Interest">
                              <div className="tab-pane fade show active" id="v-pills-6" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form action="https://weddemoadmin.abaris.in/admin/sms-templates/6" method="POST">
                                  <input name="_method" type="hidden" defaultValue="PATCH" />
                                  <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                                                                                            <div className="form-group row">
                                    <div className="col-md-2">
                                      <label className="col-from-label">Activation</label>
                                    </div>
                                    <div className="col-md-10">
                                      <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Hi [[name]], [[member_name]] has expressed interest in you. [[url]]"} />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="Password Reset">
                              <div className="tab-pane fade show active" id="v-pills-8" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form action="https://weddemoadmin.abaris.in/admin/sms-templates/8" method="POST">
                                  <input name="_method" type="hidden" defaultValue="PATCH" />
                                  <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Hi [[name]], Your password reset code is [[code]]. [[url]]"} />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>

                            </Tab.Pane>

                            <Tab.Pane eventKey="Profile Picture View Request">
                              <div className="tab-pane fade show active" id="v-pills-9" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form action="https://weddemoadmin.abaris.in/admin/sms-templates/9" method="POST">
                                  <input name="_method" type="hidden" defaultValue="PATCH" />
                                  <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                                                                                            <div className="form-group row">
                                    <div className="col-md-2">
                                      <label className="col-from-label">Activation</label>
                                    </div>
                                    <div className="col-md-10">
                                      <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Hi [[name]], [[member_name]] has sent you profile picture view request. [[url]]"} />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>

                            </Tab.Pane>

                            <Tab.Pane eventKey="Profile Picture View Request Accepted">
                              <div className="tab-pane fade show active" id="v-pills-10" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form action="https://weddemoadmin.abaris.in/admin/sms-templates/10" method="POST">
                                  <input name="_method" type="hidden" defaultValue="PATCH" />
                                  <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                                                                                            <div className="form-group row">
                                    <div className="col-md-2">
                                      <label className="col-from-label">Activation</label>
                                    </div>
                                    <div className="col-md-10">
                                      <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Hi [[name]], [[member_name]] has accepted your profile picture view request. [[url]]"} />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="Gallery Image View Request">
                              <div className="tab-pane fade show active" id="v-pills-10" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form action="https://weddemoadmin.abaris.in/admin/sms-templates/10" method="POST">
                                  <input name="_method" type="hidden" defaultValue="PATCH" />
                                  <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                                                                                            <div className="form-group row">
                                    <div className="col-md-2">
                                      <label className="col-from-label">Activation</label>
                                    </div>
                                    <div className="col-md-10">
                                      <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Hi [[name]], [[member_name]] has accepted your profile picture view request. [[url]]"} />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="Gallery Image View Request Accepted">
                              <div className="tab-pane fade show active" id="v-pills-10" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                <form action="https://weddemoadmin.abaris.in/admin/sms-templates/10" method="POST">
                                  <input name="_method" type="hidden" defaultValue="PATCH" />
                                  <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                                                                                            <div className="form-group row">
                                    <div className="col-md-2">
                                      <label className="col-from-label">Activation</label>
                                    </div>
                                    <div className="col-md-10">
                                      <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">SMS Body</label>
                                    <div className="col-md-10">
                                      <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Hi [[name]], [[member_name]] has accepted your profile picture view request. [[url]]"} />
                                      <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Template ID</label>
                                    <div className="col-md-10">
                                      <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                      <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS  **</small>
                                    </div>
                                  </div>
                                  <div className="form-group mb-3 text-right">
                                    <button type="submit" className="btn btn-primary">Update Settings</button>
                                  </div>
                                </form>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </Col>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SmsTemplates;