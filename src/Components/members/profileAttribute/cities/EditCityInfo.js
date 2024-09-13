import React from 'react'

function EditCityInfo() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Edit City Info</h5>
                                </div>
                                <div className="card-body">
                                    <form action="https://weddemoadmin.abaris.in/admin/cities/1" method="POST">
                                        <input name="_method" type="hidden" defaultValue="PATCH" />
                                        <input type="hidden" name="_token" defaultValue="cPIRXzSvxbL64b3stO03NULzK4ie7fIhzzG4YNVj" />                        <div className="form-group mb-3">
                                            <label htmlFor="name">Country</label>
                                            <div>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>India</option>
                                                    <option value={1}>Afghanistan</option>
                                                    <option value={2}>Albania</option>
                                                    <option value={3}>Algeria</option>
                                                    <option value={4}>American Samoa</option>
                                                    <option value={5}>Andorra</option>
                                                    <option value={6}>Angola</option>
                                                    <option value={7}>Anguilla</option>
                                                    <option value={8}>Antarctica</option>
                                                    <option value={9}>Antigua And Barbuda</option>
                                                    <option value={10}>Argentina</option>
                                                    <option value={11}>Armenia</option>
                                                    <option value={12}>Aruba</option>
                                                    <option value={13}>Australia</option>
                                                    <option value={14}>Austria</option>
                                                    <option value={15}>Azerbaijan</option>
                                                    <option value={16}>Bahamas The</option>
                                                    <option value={17}>Bahrain</option>
                                                    <option value={18}>Bangladesh</option>
                                                    <option value={19}>Barbados</option>
                                                    <option value={20}>Belarus</option>
                                                    <option value={21}>Belgium</option>
                                                    <option value={22}>Belize</option>
                                                    <option value={23}>Benin</option>
                                                    <option value={24}>Bermuda</option>
                                                    <option value={25}>Bhutan</option>
                                                    <option value={26}>Bolivia</option>
                                                    <option value={27}>Bosnia and Herzegovina</option>
                                                    <option value={28}>Botswana</option>
                                                    <option value={29}>Bouvet Island</option>
                                                    <option value={30}>Brazil</option>
                                                    <option value={31}>British Indian Ocean Territory</option>
                                                    <option value={32}>Brunei</option>
                                                    <option value={33}>Bulgaria</option>
                                                    <option value={34}>Burkina Faso</option>
                                                    <option value={35}>Burundi</option>
                                                    <option value={36}>Cambodia</option>
                                                    <option value={37}>Cameroon</option>
                                                    <option value={38}>Canada</option>
                                                    <option value={39}>Cape Verde</option>
                                                    <option value={40}>Cayman Islands</option>
                                                    <option value={41}>Central African Republic</option>
                                                    <option value={42}>Chad</option>
                                                    <option value={43}>Chile</option>
                                                    <option value={44}>China</option>
                                                    <option value={45}>Christmas Island</option>
                                                    <option value={46}>Cocos (Keeling) Islands</option>
                                                    <option value={47}>Colombia</option>
                                                    <option value={48}>Comoros</option>
                                                    <option value={49}>Republic Of The Congo</option>
                                                    <option value={50}>Democratic Republic Of The Congo</option>
                                                    <option value={51}>Cook Islands</option>
                                                    <option value={52}>Costa Rica</option>
                                                    <option value={53}>Cote D'Ivoire (Ivory Coast)</option>
                                                    <option value={54}>Croatia (Hrvatska)</option>
                                                    <option value={55}>Cuba</option>
                                                    <option value={56}>Cyprus</option>
                                                    <option value={57}>Czech Republic</option>
                                                    <option value={58}>Denmark</option>
                                                    <option value={59}>Djibouti</option>
                                                    <option value={60}>Dominica</option>
                                                    <option value={61}>Dominican Republic</option>
                                                    <option value={62}>East Timor</option>
                                                    <option value={63}>Ecuador</option>
                                                    <option value={64}>Egypt</option>
                                                    <option value={65}>El Salvador</option>
                                                    <option value={66}>Equatorial Guinea</option>
                                                    <option value={67}>Eritrea</option>
                                                    <option value={68}>Estonia</option>
                                                    <option value={69}>Ethiopia</option>
                                                    <option value={70}>External Territories of Australia</option>
                                                    <option value={71}>Falkland Islands</option>
                                                    <option value={72}>Faroe Islands</option>
                                                    <option value={73}>Fiji Islands</option>
                                                    <option value={74}>Finland</option>
                                                    <option value={75}>France</option>
                                                    <option value={76}>French Guiana</option>
                                                    <option value={77}>French Polynesia</option>
                                                    <option value={78}>French Southern Territories</option>
                                                    <option value={79}>Gabon</option>
                                                    <option value={80}>Gambia The</option>
                                                    <option value={81}>Georgia</option>
                                                    <option value={82}>Germany</option>
                                                    <option value={83}>Ghana</option>
                                                    <option value={84}>Gibraltar</option>
                                                    <option value={85}>Greece</option>
                                                    <option value={86}>Greenland</option>
                                                    <option value={87}>Grenada</option>
                                                    <option value={88}>Guadeloupe</option>
                                                    <option value={89}>Guam</option>
                                                    <option value={90}>Guatemala</option>
                                                    <option value={91}>Guernsey and Alderney</option>
                                                    <option value={92}>Guinea</option>
                                                    <option value={93}>Guinea-Bissau</option>
                                                    <option value={94}>Guyana</option>
                                                    <option value={95}>Haiti</option>
                                                    <option value={96}>Heard and McDonald Islands</option>
                                                    <option value={97}>Honduras</option>
                                                    <option value={98}>Hong Kong S.A.R.</option>
                                                    <option value={99}>Hungary</option>
                                                    <option value={100}>Iceland</option>
                                                    <option value={101}>India</option>
                                                    <option value={102}>Indonesia</option>
                                                    <option value={103}>Iran</option>
                                                    <option value={104}>Iraq</option>
                                                    <option value={105}>Ireland</option>
                                                    <option value={106}>Israel</option>
                                                    <option value={107}>Italy</option>
                                                    <option value={108}>Jamaica</option>
                                                    <option value={109}>Japan</option>
                                                    <option value={110}>Jersey</option>
                                                    <option value={111}>Jordan</option>
                                                    <option value={112}>Kazakhstan</option>
                                                    <option value={113}>Kenya</option>
                                                    <option value={114}>Kiribati</option>
                                                    <option value={115}>Korea North</option>
                                                    <option value={116}>Korea South</option>
                                                    <option value={117}>Kuwait</option>
                                                    <option value={118}>Kyrgyzstan</option>
                                                    <option value={119}>Laos</option>
                                                    <option value={120}>Latvia</option>
                                                    <option value={121}>Lebanon</option>
                                                    <option value={122}>Lesotho</option>
                                                    <option value={123}>Liberia</option>
                                                    <option value={124}>Libya</option>
                                                    <option value={125}>Liechtenstein</option>
                                                    <option value={126}>Lithuania</option>
                                                    <option value={127}>Luxembourg</option>
                                                    <option value={128}>Macau S.A.R.</option>
                                                    <option value={129}>Macedonia</option>
                                                    <option value={130}>Madagascar</option>
                                                    <option value={131}>Malawi</option>
                                                    <option value={132}>Malaysia</option>
                                                    <option value={133}>Maldives</option>
                                                    <option value={134}>Mali</option>
                                                    <option value={135}>Malta</option>
                                                    <option value={136}>Man (Isle of)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="name">State</label>
                                            <div>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Delhi</option>
                                                    <option value={10}>jharkhand</option>
                                                    <option value={11}>Bengal</option>
                                                    <option value={12}>Assam</option>
                                                    <option value={13}>Australia</option>
                                                    <option value={14}>Austria</option>
                                                    <option value={15}>Azerbaijan</option>
                                                    <option value={16}>Bahamas The</option>
                                                    <option value={17}>Bahrain</option>
                                                    <option value={18}>Bangladesh</option>
                                                    <option value={19}>Barbados</option>
                                                    <option value={20}>Belarus</option>
                                                    <option value={21}>Belgium</option>
                                                    <option value={22}>Belize</option>
                                                    <option value={23}>Benin</option>
                                                    <option value={24}>Bermuda</option>
                                                    <option value={25}>Bhutan</option>
                                                    <option value={26}>Bolivia</option>
                                                    <option value={27}>Bosnia and Herzegovina</option>
                                                    <option value={28}>Botswana</option>
                                                    <option value={29}>Bouvet Island</option>
                                                    <option value={30}>Brazil</option>
                                                    <option value={31}>British Indian Ocean Territory</option>
                                                    <option value={32}>Brunei</option>
                                                    <option value={33}>Bulgaria</option>
                                                    <option value={34}>Burkina Faso</option>
                                                    <option value={35}>Burundi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="name">City Name</label>
                                            <input type="text" id="name" name="name" defaultValue="Bombuflat" className="form-control" required fdprocessedid="x2pys" />
                                        </div>
                                        <div className="form-group mb-3 text-right">
                                            <button type="submit" className="btn btn-primary" fdprocessedid="cg44ri">Update</button>
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

export default EditCityInfo