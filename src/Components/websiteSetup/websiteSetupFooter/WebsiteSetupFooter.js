import React from 'react';
import AboutWidget from './AboutWidget';
import ContactsWidget from './ContactsWidget';
import LinkWidget from './LinkWidget';
import MobileAppWidget from './MobileAppWidget';
import FooterCopyrightWidget from './FooterCopyrightWidget';
import FooterCopyright from './FooterCopyright';

function WebsiteSetupFooter() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <div className="aiz-titlebar text-left mt-2 mb-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h1 className="h3">Website Footer</h1>
                                    </div>
                                </div>s
                            </div>
                            <AboutWidget />
                            <ContactsWidget />
                            <LinkWidget />
                            <MobileAppWidget />
                            <FooterCopyright />
                            <FooterCopyrightWidget />
                            
                            {/* <div className="card">
                                <div className="card-header">
                                    <h6 className="mb-0">Link Widget Two</h6>
                                </div>
                                <div className="card-body">
                                    <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                        <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="hidden" name="types[]" defaultValue="widget_two_title" />
                                            <input type="text" className="form-control" placeholder="Widget title" name="widget_two_title" defaultValue="Quick Search" fdprocessedid="n00ir7" />
                                        </div>
                                        <div className="form-group">
                                            <label>Links</label>
                                            <div className="w2-links-target">
                                                <input type="hidden" name="types[]" defaultValue="widget_two_labels" />
                                                <input type="hidden" name="types[]" defaultValue="widget_two_links" />
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="widget_two_labels[]" defaultValue="All Members" fdprocessedid="pbcaum" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="http://" name="widget_two_links[]" defaultValue="http://weddemoadmin.abaris.in/" fdprocessedid="n35khj" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="5bfa1r">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="widget_two_labels[]" defaultValue="Premium Members" fdprocessedid="jrzafs" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="http://" name="widget_two_links[]" defaultValue="http://weddemoadmin.abaris.in/" fdprocessedid="4rcnv" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="ziv3x">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="widget_two_labels[]" defaultValue="Free Members" fdprocessedid="hngmhe" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="http://" name="widget_two_links[]" defaultValue="http://weddemoadmin.abaris.in/" fdprocessedid="dqwey9" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="pczevo">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="widget_two_labels[]" defaultValue="Search" fdprocessedid="hyz4z" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="http://" name="widget_two_links[]" defaultValue="http://weddemoadmin.abaris.in/" fdprocessedid="bikpgm" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="veqpc7j">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-soft-secondary btn-sm" data-toggle="add-more" data-content="<div class=&quot;row gutters-5&quot;>
                     <div class=&quot;col-4&quot;>
                     <div class=&quot;form-group&quot;>
                     <input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Label&quot; name=&quot;widget_two_labels[]&quot;>
                     </div>
                     </div>
                     <div class=&quot;col&quot;>
                     <div class=&quot;form-group&quot;>
                     <input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;http://&quot; name=&quot;widget_two_links[]&quot;>
                     </div>
                     </div>
                     <div class=&quot;col-auto&quot;>
                     <button type=&quot;button&quot; class=&quot;mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger&quot; data-toggle=&quot;remove-parent&quot; data-parent=&quot;.row&quot;>
                     <i class=&quot;las la-times&quot;></i>
                     </button>
                     </div>
                     </div>" data-target=".w2-links-target" fdprocessedid="gp67we">
                                                Add New
                                            </button>
                                        </div>
                                        <div className="text-right">
                                            <button type="button" className="btn btn-primary" fdprocessedid="kj00gr">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                            {/* <div className="card">
                                <div className="card-header">
                                    <h6 className="mb-0">Link Widget Three</h6>
                                </div>
                                <div className="card-body">
                                    <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                                        <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="hidden" name="types[]" defaultValue="widget_three_title" />
                                            <input type="text" className="form-control" placeholder="Widget title" name="widget_three_title" defaultValue="USEFUL LINKS" fdprocessedid="g41zs" />
                                        </div>
                                        <div className="form-group">
                                            <label>Links</label>
                                            <div className="w3-links-target">
                                                <input type="hidden" name="types[]" defaultValue="widget_three_labels" />
                                                <input type="hidden" name="types[]" defaultValue="widget_three_links" />
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="widget_three_labels[]" defaultValue="FAQ" fdprocessedid="o5x6bu" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="http://" name="widget_three_links[]" defaultValue="http://weddemoadmin.abaris.in/" fdprocessedid="tjeyxh" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="24e0sa">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="widget_three_labels[]" defaultValue="Terms & Conditions" fdprocessedid="6pumzn" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="http://" name="widget_three_links[]" defaultValue="http://weddemoadmin.abaris.in/" fdprocessedid="xa2iup" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="lpzz9">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="widget_three_labels[]" defaultValue="Privacy Policy" fdprocessedid="kjfob3" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="http://" name="widget_three_links[]" defaultValue="http://weddemoadmin.abaris.in/" fdprocessedid="uavyyi" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="2hscvf">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="widget_three_labels[]" defaultValue="Request a Refund" fdprocessedid="hipfjr" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="http://" name="widget_three_links[]" defaultValue="http://weddemoadmin.abaris.in/" fdprocessedid="3vmep4" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="cn3wgr">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-soft-secondary btn-sm" data-toggle="add-more" data-content="<div class=&quot;row gutters-5&quot;>
                     <div class=&quot;col-4&quot;>
                     <div class=&quot;form-group&quot;>
                     <input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Label&quot; name=&quot;widget_three_labels[]&quot;>
                     </div>
                     </div>
                     <div class=&quot;col&quot;>
                     <div class=&quot;form-group&quot;>
                     <input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;http://&quot; name=&quot;widget_three_links[]&quot;>
                     </div>
                     </div>
                     <div class=&quot;col-auto&quot;>
                     <button type=&quot;button&quot; class=&quot;mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger&quot; data-toggle=&quot;remove-parent&quot; data-parent=&quot;.row&quot;>
                     <i class=&quot;las la-times&quot;></i>
                     </button>
                     </div>
                     </div>" data-target=".w3-links-target" fdprocessedid="1kfbz">
                                                Add New
                                            </button>
                                        </div>
                                        <div className="text-right">
                                            <button type="button" className="btn btn-primary" fdprocessedid="f0h1y6">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebsiteSetupFooter