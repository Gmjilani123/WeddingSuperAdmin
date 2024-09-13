import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import Tab from "react-bootstrap/Tab";
import EmailTemplateTabSec from "./EmailTemplateTabSec";
import { getAllEmailTemplatesD } from "../../../api/Api";
import { useEffect, useState } from "react";

const tabTitle1 = "Account Opening";
const tabTitle2 = "Member Registration";
const tabTitle3 = "Member Approval";
const tabTitle4 = "Account Opening";
const tabTitle5 = "Package Purchase Successful";
const tabTitle6 = "Payment Approved";
const tabTitle7 = "You have a new Interest request";
const tabTitle8 = "Interest Accepted";
const tabTitle9 = "Password Reset";
const tabTitle10 = "Profile Picture View Request";
const tabTitle11 = "Profile Picture View Request Accepted";
const tabTitle12 = "Gallery Image View Request";
const tabTitle13 = "Gallery Image View Request Accepted.";

function EmailTemplet() {
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState();

  const getData = async (page) => {
    try {
      setLoading(true);
      const res = await getAllEmailTemplatesD();
      console.log('ListEMAIL---', res)
      setLoading(false);
      setListData(res?.data);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);



  return (
    <>
      <div className="aiz-main-content">
        {loading && <div className="preloaderCount">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Email Templates</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="Account Oppening Email"
                    >
                      <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="Account Oppening Email">
                              Account Oppening Email
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Account Opening Email To Admin">
                              Account Opening Email To Admin
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Account Approval Email">
                              Account Approval Email
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Staff Account Opening Email">
                              Staff Account Opening Email
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Package Purchase Email">
                              Package Purchase Email
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Manual Payment Approval Email">
                              Manual Payment Approval Email
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Email On Express Interest">
                              Email On Express Interest
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Email On Accepting Interest">
                              Email On Accepting Interest
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Password Reset Email">
                              Password Reset Email
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Profile Picture View Request Accepted">
                              Profile Picture View Request Email
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Profile Picture View Request Accepted Email">
                              Profile Picture View Request Accepted Email
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Gallery Image View Request Email">
                              Gallery Image View Request Email
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="Gallery Image View Request Accepted Email">
                              Gallery Image View Request Accepted Email
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>

                      <Col sm={9}>
                        <div className="tab-content" id="v-pills-tabContent">
                          <Tab.Content>
                          {listData && listData?.map((item, i) => {
                            return <Tab.Pane eventKey="Account Oppening Email">
                            <EmailTemplateTabSec data={item} />
                          </Tab.Pane>
                           })}
                            {/* <Tab.Pane eventKey="Account Oppening Email">
                              <EmailTemplateTabSec data={tabTitle1} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Account Opening Email To Admin">
                              <EmailTemplateTabSec data={tabTitle2} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Account Approval Email">
                              <EmailTemplateTabSec data={tabTitle3} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Staff Account Opening Email">
                              <EmailTemplateTabSec data={tabTitle4} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Package Purchase Email">
                              <EmailTemplateTabSec data={tabTitle5} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Manual Payment Approval Email">
                              <EmailTemplateTabSec data={tabTitle6} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Email On Express Interest">
                              <EmailTemplateTabSec data={tabTitle7} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Email On Accepting Interest">
                              <EmailTemplateTabSec data={tabTitle8} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Password Reset Email">
                              <EmailTemplateTabSec data={tabTitle9} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Profile Picture View Request Accepted">
                              <EmailTemplateTabSec data={tabTitle10} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Profile Picture View Request Accepted Email">
                              <EmailTemplateTabSec data={tabTitle11} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Gallery Image View Request Email">
                              <EmailTemplateTabSec data={tabTitle12} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Gallery Image View Request Accepted Email">
                              <EmailTemplateTabSec data={tabTitle13} />
                            </Tab.Pane> */}
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
        {/* Footer */}
      </div>
    </>
  );
}
export default EmailTemplet;
