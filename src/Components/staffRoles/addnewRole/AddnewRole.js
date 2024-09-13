
function AddnewRole() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-md-0 h6">Role Information</h5>
            </div>
            <form className="form-horizontal" action="https://demo.activeitzone.com/matrimonial/admin/roles" method="POST" encType="multipart/form-data">
              <input type="hidden" name="_token" defaultValue="EXRVx84F1wCyzLHQxGs1EQIvFBRiulegs1DcgBVm" />            <div className="card-body">
                <div className="row">
                  <div className="col-8 mx-auto">
                    <div className="form-group row">
                      <label className="col-md-2 col-form-label">Role Name<span className="text-danger">*</span></label>
                      <div className="col-md-9">
                        <input type="text" placeholder="Name" id="name" name="name" className="form-control" required />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-header bord-btm">
                  <h5 className="mb-md-0 h6">Permissions</h5>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Member</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Members</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={12} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Create Member</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={13} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Member</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={14} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Member</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={15} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">View Member Profile</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={16} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Block Member</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={17} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Approve Member</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={18} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Update Member Package</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={19} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Login As Member</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={20} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Bulk Member Add</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={21} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Deleted Member Show</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={22} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Restore Member</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={23} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">View Reported Profile</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={24} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Profile Report</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={25} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Unapproved Profile Picrures</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={150} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Approve Profile Picrures</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={151} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Profile Attributes</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Religions</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={26} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Religion</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={28} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Religion</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={29} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Religion</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={30} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Castes</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={31} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Caste</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={32} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Caste</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={33} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Caste</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={34} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Sub Castes</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={35} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Sub Caste</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={36} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Sub Caste</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={37} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Sub Caste</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={38} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Member Languages</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={39} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Member Language</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={40} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Member Language</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={41} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Member Language</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={42} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Countries</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={43} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Country</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={44} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Country</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={45} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Country</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={46} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show States</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={47} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add State</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={48} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit State</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={49} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete State</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={50} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Cities</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={51} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add City</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={52} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit City</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={53} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete City</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={54} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show On Behalves</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={55} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add On Behalf</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={56} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit On Behalf</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={57} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete On Behalf</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={58} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Family Values</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={59} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Family Value</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={60} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Family Value</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={61} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Family Value</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={62} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Family Status</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={63} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Family Status</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={64} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Family Status</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={65} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Family Status</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={66} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Marital Status</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={67} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Marital Status</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={68} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Marital Status</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={69} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Marital Status</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={70} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Manage Profile Sections</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={71} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Package</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Packages</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={72} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Package</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={73} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Package</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={74} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Package</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={75} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Package Payment</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Package Payments</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={76} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">View Package Payment Invoice</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={77} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Manage Package Manual Payemnts</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={78} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Happy Story</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Happy Stories</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={79} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Approve Happy Story</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={80} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Happy Story</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={81} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">View Details Happy Story</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={82} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Marketing</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Newsletter</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={83} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Support Tickets</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Active Tickets</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={84} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Assign Ticket To Agent</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={85} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show My Tickets</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={86} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Reply To My Ticket</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={87} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Solved Tickets</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={88} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Reply To Solved Tickets</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={89} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Solved Tickets</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={90} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Support Categories</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={91} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Support Category</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={92} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Support Category</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={93} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Support Category</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={94} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Default Ticket Assigned Agent</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={95} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">OTP System</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Manage Sms Templates</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={96} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Manage Otp Credentials</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={97} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Send SMS</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={98} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Website Setup</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Header</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={99} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Footer</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={100} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show All Pages</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={101} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Pages</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={102} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Pages</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={103} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Pages</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={104} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Appearances</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={105} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Settings</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">General Settings</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={106} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Languages</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={107} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Languages</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={108} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Languages</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={109} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Languages</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={110} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Change Default Language</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={111} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Currencies</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={112} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Currencies</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={113} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Currencies</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={114} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Currencies</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={115} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Update Currency Settings</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={116} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Payment Methods</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={117} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">SMTP Settings</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={118} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Email Templates</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={119} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Third Party Settings</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={120} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Social Media Login Settings</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={121} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Translate Languages</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={133} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Staff</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Staffs</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={122} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Staffs</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={123} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Staffs</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={124} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Staffs</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={125} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Staff Roles</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={126} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Staff Roles</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={127} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Staff Roles</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={128} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Staff Roles</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={129} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">System</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Server status</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={131} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Addon Manager</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={132} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">System Update</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={134} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">File Uploader</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Uploaded Files</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={135} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Wallet</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Wallet Transaction History</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={136} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Offline Wallet Recharge Requests</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={137} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Referral System</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Set Referral Commission</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={138} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">View Refferal Users</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={139} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">View Refferal Earnings</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={140} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Manage Wallet Withdraw Requests</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={141} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="bd-example">
                  <ul className="list-group">
                    <li className="list-group-item bg-light" aria-current="true">Blog</li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Blog Categories</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={142} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Blog Category</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={143} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Blog Category</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={144} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Blog Category</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={145} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Show Blogs</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={146} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Add Blog</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={147} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Edit Blog</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={148} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                          <div className="p-2 border mt-1 mb-2">
                            <label className="control-label d-flex">Delete Blog</label>
                            <label className="aiz-switch aiz-switch-success">
                              <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={149} />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="form-group mb-3 mt-3 text-right">
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddnewRole;