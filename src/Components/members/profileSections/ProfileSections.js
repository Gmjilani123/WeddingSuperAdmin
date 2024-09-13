import React from 'react'

function ProfileSections() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Member Profile Sections Configuration</h5>
                                </div>
                                <div className="card-body offset-lg-3">
                                    <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_present_address_section" />
                                                <input type="checkbox" name="member_present_address_section" className="custom-control-input" id="present_address" defaultChecked />
                                                <label className="custom-control-label" htmlFor="present_address">Present Address</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_education_section" />
                                                <input type="checkbox" name="member_education_section" className="custom-control-input" id="education" defaultChecked />
                                                <label className="custom-control-label" htmlFor="education">Education</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_career_section" />
                                                <input type="checkbox" name="member_career_section" className="custom-control-input" id="career" defaultChecked />
                                                <label className="custom-control-label" htmlFor="career">Career</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_physical_attributes_section" />
                                                <input type="checkbox" name="member_physical_attributes_section" className="custom-control-input" id="physical_attributes" defaultChecked />
                                                <label className="custom-control-label" htmlFor="physical_attributes">Physical Attributes</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_language_section" />
                                                <input type="checkbox" name="member_language_section" className="custom-control-input" id="language" defaultChecked />
                                                <label className="custom-control-label" htmlFor="language">Language</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_hobbies_and_interests_section" />
                                                <input type="checkbox" name="member_hobbies_and_interests_section" className="custom-control-input" id="hobbies_and_interests" defaultChecked />
                                                <label className="custom-control-label" htmlFor="hobbies_and_interests">Hobbies And Interests</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_personal_attitude_and_behavior_section" />
                                                <input type="checkbox" name="member_personal_attitude_and_behavior_section" className="custom-control-input" id="personal_attitude_and_behavior" defaultChecked />
                                                <label className="custom-control-label" htmlFor="personal_attitude_and_behavior">Personal Attitude And Behavior</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_residency_information_section" />
                                                <input type="checkbox" name="member_residency_information_section" className="custom-control-input" id="residency_information" defaultChecked />
                                                <label className="custom-control-label" htmlFor="residency_information">Residency Information</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_spiritual_and_social_background_section" />
                                                <input type="checkbox" name="member_spiritual_and_social_background_section" className="custom-control-input" id="spiritual_and_social_background" defaultChecked />
                                                <label className="custom-control-label" htmlFor="spiritual_and_social_background">Spiritual And Social Background</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_life_style_section" />
                                                <input type="checkbox" name="member_life_style_section" className="custom-control-input" id="life_style" defaultChecked />
                                                <label className="custom-control-label" htmlFor="life_style">Life Style</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_astronomic_information_section" />
                                                <input type="checkbox" name="member_astronomic_information_section" className="custom-control-input" id="astronomic_information" defaultChecked />
                                                <label className="custom-control-label" htmlFor="astronomic_information">Astronomic Information</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_permanent_address_section" />
                                                <input type="checkbox" name="member_permanent_address_section" className="custom-control-input" id="permanent_address" defaultChecked />
                                                <label className="custom-control-label" htmlFor="permanent_address">Permanent Address</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_family_information_section" />
                                                <input type="checkbox" name="member_family_information_section" className="custom-control-input" id="family_information" defaultChecked />
                                                <label className="custom-control-label" htmlFor="family_information">Family Information</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="hidden" name="types[]" defaultValue="member_partner_expectation_section" />
                                                <input type="checkbox" name="member_partner_expectation_section" className="custom-control-input" id="partner_expectation" defaultChecked />
                                                <label className="custom-control-label" htmlFor="partner_expectation">Partner Expectation</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3 text-right">
                                            <button type="button" className="btn btn-primary">Update Settings</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileSections