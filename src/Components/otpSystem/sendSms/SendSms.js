import { useEffect, useState } from "react";

const userData = [
  { name: "Jeevan" },
  { name: "Manish" },
  { name: "Prince" },
  { name: "Arti" },
  { name: "rahul" },
];

function SendSms() {
  const [value, setValue] = useState(false);
  const showDropdown = () => {
    setValue(!value);
  };

  //   const myFunction = () => {
  //      var element = document.addEventListener("div1").className = "selected";
  //     element.classList.add("selected");
  //  }

  //  const [isActive, setIsActive] = useState(false);

  //   const handleClick = event => {

  //     setIsActive(current => !current);
  //   };
  // const [users, setUser] = useState([]);
  // useEffect(() => {
  //   // axios.get
  //   setUser(userData);
  // }, []);

  // const handleChange = (e) => {
  //   const { name, checked } = e.target;
  //   if (name === "allSelect") {
  //     let tempUser = users.map((user) => {
  //       return { ...user, isChecked : checked };
  //     });
  //     setUser(tempUser)
  //   } else {
  //     let tempUser = users.map((user) =>
  //       user.name === name ? { ...user, isChecked: checked } : user
  //     );
  //     setUser(tempUser);
  //   }
  // };

  const [users, setUsers] = useState([]);
  const [count,setCount] = useState(0)

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
      setCount(count + 1)
    }
    // if (name === "allSelect") {
    //   setCount(count + 1)
    // }else{
    //   setCount(count - 1)
    // }
  };

  return (
    <>
      <form action=""></form>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h3 className="fs-18 mb-0">Send Bulk SMS</h3>
                </div>

                <form
                  className="form-horizontal"
                  action="https://weddemoadmin.abaris.in/admin/bulk-sms-send"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv"
                  />{" "}
                  <div className="card-body">
                    <div className="form-group row">
                      <label className="col-sm-2 control-label" htmlFor="name">
                        Mobile Users
                      </label>
                      <div className="col-sm-10">
                        <div className="dropdown bootstrap-select show-tick form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            name="user_phones[]"
                            multiple
                            data-selected-text-format="count"
                            data-actions-box="true"
                            tabIndex={-98}
                          >
                            <option value={100200300}>
                              Kimberley Lang - 100200300
                            </option>
                            <option value={100200300}>
                              Matthew Ryan - 100200300
                            </option>
                            <option value={100200300}>
                              Liam Noah - 100200300
                            </option>
                            <option value={100200300}>
                              Olivia Emma - 100200300
                            </option>
                            <option value={100200300}>
                              Idona Mccoy - 100200300
                            </option>
                            <option value={100200300}>
                              Tate Kennedy - 100200300
                            </option>
                            <option value="015-76-XXXX">
                              Lakendra J. Lowe - 015-76-XXXX
                            </option>
                            <option value="209-406-1441">
                              Jane R Lamy - 209-406-1441
                            </option>
                            <option value={100200300}>
                              Mark Henry - 100200300
                            </option>
                            <option value="916-310-1896">
                              Mitchell Johnson - 916-310-1896
                            </option>
                            <option value="+">Wilson Arnold - +</option>
                            <option value="+">Robert L. Gardner - +</option>
                            <option value="+">Kathy T. Litton - +</option>
                            <option value="+">Ramona D. Mears - +</option>
                            <option value="+">Nicole Hruby - +</option>
                            <option value="+">Sylvia J. Love - +</option>
                            <option value="239-663-7517">
                              Donna J. Perryman - 239-663-7517
                            </option>
                            <option value="+1 (213) 692-1498">
                              Derrick L. Lavender - +1 (213) 692-1498
                            </option>
                            <option value="424-341-0156">
                              Alex Reynolds - 424-341-0156
                            </option>
                            <option value="605-795-6871">
                              Tammy J. Nelson Nelson - 605-795-6871
                            </option>
                            <option value="863-623-2972">
                              Patrick S. Cloninger Cloninger - 863-623-2972
                            </option>
                            <option value="+1+1 (638) 415-7906">
                              Cairo Carney - +1+1 (638) 415-7906
                            </option>
                          </select>

                          <button
                            type="button"
                            onClick={showDropdown}
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-1"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="8 items selected"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  {count} items selected
                                </div>
                              </div>
                            </div>
                          </button>

                          <div
                            className={`dropdown-menu drop_selec drop_selec-2 ${
                              value && "show"
                            }`}
                            style={{
                              maxHeight: 260,
                              overflow: "hidden",
                              left: "10px",
                            }}
                          >
                            {/* <div className="bs-actionsbox">
                              <div className="btn-group btn-group-sm btn-block">
                                <button
                                  type="button"
                                  className="actions-btn bs-select-all btn btn-light"
                                >
                                  Select All
                                </button>
                                <button
                                  type="button"
                                  className="actions-btn bs-deselect-all btn btn-light"
                                >
                                  Deselect All
                                </button>
                              </div>
                            </div> */}

                            <div>
                              {/* <div className="form-check">
                                <input
                                  type="checkbox"
                                  name="allSelect"
                                  checked={users.filter((user) => user?.isChecked !== true).length < 1}
                                  onChange={handleChange}
                                />
                                <label className="form-check-lebel">
                                  all select
                                </label>
                              </div>
                              {userData.map((user) => {
                                return (
                                  <div
                                    className="form-check"
                                    name={user.name}
                                    checked={user?.isChecked || false}
                                    onChange={handleChange}
                                  >
                                    <input type="checkbox" />
                                    <label className="form-check-lebel">
                                      {user.name}
                                    </label>
                                  </div>
                                );
                              })} */}
                              <form className="form w-100">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="allSelect"
                                    // checked={
                                    //   users.filter((user) => user?.isChecked !== true).length < 1
                                    // }
                                    checked={
                                      !users.some(
                                        (user) => user?.isChecked !== true
                                      )
                                    }
                                    onChange={handleChange}
                                  />
                                  <label className="form-check-label ms-2">
                                    All Select
                                  </label>
                                </div>
                                {users.map((user, index) => (
                                  <div className="form-check form-check-2" key={index}>
                                    <input
                                      type="checkbox"
                                      className="form-check-input form-check-input-2"
                                      name={user.name}
                                      checked={user?.isChecked || false}
                                      onChange={handleChange}
                                    />
                                    <label className="form-check-label ms-2">
                                      {user.name}
                                    </label>
                                  </div>
                                ))}
                              </form>
                            </div>

                            {/* <div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-multiselectable="true" style={{ maxHeight: 185, overflowY: 'auto' }}>
                              <ul className="dropdown-menu inner show" id="selectBox" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}>
                                <li id="div1">
                                  <a role="option" className="dropdown-item" id="bs-select-1-0" tabIndex={0} aria-selected="false" aria-setsize={22} aria-posinset={1}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Kimberley Lang - 100200300</span>
                                  </a>
                                </li>
                                <li>
                                  <a role="option" className="dropdown-item" id="bs-select-1-1 div1" tabIndex={0} aria-selected="false" aria-setsize={22} aria-posinset={2}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Matthew Ryan - 100200300</span>
                                  </a>
                                </li>
                                <li id="div1">
                                  <a role="option" className="dropdown-item" id="bs-select-1-2 div1" tabIndex={0} aria-selected="false" aria-setsize={22} aria-posinset={3}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Liam Noah - 100200300</span>
                                  </a>
                                </li>
                                <li id="div1">
                                  <a role="option" className="dropdown-item" id="bs-select-1-3 div1" tabIndex={0} aria-selected="false" aria-setsize={22} aria-posinset={4}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Olivia Emma - 100200300</span>
                                  </a>
                                </li>
                                <li id="div1">
                                  <a role="option" className="dropdown-item" id="bs-select-1-4 div1" tabIndex={0} aria-selected="false" aria-setsize={22} aria-posinset={5}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Idona Mccoy - 100200300</span>
                                  </a>
                                </li>
                                <li id="div1">
                                  <a role="option" className="dropdown-item" id="bs-select-1-5 div1" tabIndex={0} aria-selected="false" aria-setsize={22} aria-posinset={6}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Tate Kennedy - 100200300</span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a role="option" className="dropdown-item selected" id="bs-select-1-6" tabIndex={0} aria-selected="true" aria-setsize={22} aria-posinset={7}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Lakendra J. Lowe - 015-76-XXXX</span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a role="option" className="dropdown-item selected" id="bs-select-1-7 " tabIndex={0} aria-selected="true" aria-setsize={22} aria-posinset={8}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Jane R Lamy - 209-406-1441</span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a role="option" className="dropdown-item selected" id="bs-select-1-8" tabIndex={0} aria-selected="true" aria-setsize={22} aria-posinset={9}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Mark Henry - 100200300</span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a role="option" className="dropdown-item selected" id="bs-select-1-9" tabIndex={0} aria-selected="true" aria-setsize={22} aria-posinset={10}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Mitchell Johnson - 916-310-1896</span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a role="option" className="dropdown-item selected" id="bs-select-1-10" tabIndex={0} aria-selected="true" aria-setsize={22} aria-posinset={11}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Wilson Arnold - +</span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a role="option" className="dropdown-item selected" id="bs-select-1-11" tabIndex={0} aria-selected="true" aria-setsize={22} aria-posinset={12}>
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">Robert L. Gardner - +</span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a role="option" className="dropdown-item selected" id="bs-select-1-12" tabIndex={0} aria-selected="true" aria-setsize={22} aria-posinset={13}><span className=" bs-ok-default check-mark" /><span className="text">Kathy T. Litton - +</span></a></li><li className="selected"><a role="option" className="dropdown-item selected" id="bs-select-1-13" tabIndex={0} aria-selected="true" aria-setsize={22} aria-posinset={14}><span className=" bs-ok-default check-mark" /><span className="text">Ramona D. Mears - +</span></a></li><li className><a role="option" className="dropdown-item" id="bs-select-1-14" tabIndex={0} aria-selected="false"><span className=" bs-ok-default check-mark" /><span className="text">Nicole Hruby - +</span></a></li><li className><a role="option" className="dropdown-item" id="bs-select-1-15" tabIndex={0} aria-selected="false"><span className=" bs-ok-default check-mark" /><span className="text">Sylvia J. Love - +</span></a></li><li className><a role="option" className="dropdown-item" id="bs-select-1-16" tabIndex={0} aria-selected="false" aria-setsize={22} aria-posinset={17}><span className=" bs-ok-default check-mark" /><span className="text">Donna J. Perryman - 239-663-7517</span></a></li><li className><a role="option" className="dropdown-item" id="bs-select-1-17" tabIndex={0} aria-selected="false"><span className=" bs-ok-default check-mark" /><span className="text">Derrick L. Lavender - +1 (213) 692-1498</span></a></li><li className><a role="option" className="dropdown-item" id="bs-select-1-18" tabIndex={0} aria-selected="false"><span className=" bs-ok-default check-mark" /><span className="text">Alex Reynolds - 424-341-0156</span></a></li><li className><a role="option" className="dropdown-item" id="bs-select-1-19" tabIndex={0} aria-selected="false" aria-setsize={22} aria-posinset={20}><span className=" bs-ok-default check-mark" /><span className="text">Tammy J. Nelson Nelson - 605-795-6871</span></a></li><li className><a role="option" className="dropdown-item" id="bs-select-1-20" tabIndex={0} aria-selected="false"><span className=" bs-ok-default check-mark" /><span className="text">Patrick S. Cloninger Cloninger - 863-623-2972</span></a></li><li className><a role="option" className="dropdown-item" id="bs-select-1-21" tabIndex={0} aria-selected="false"><span className=" bs-ok-default check-mark" /><span className="text">Cairo Carney - +1+1 (638) 415-7906</span></a>
                                </li>
                              </ul>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 control-label" htmlFor="name">
                        SMS content
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          className="form-control"
                          rows={5}
                          name="content"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-2 col-form-label">
                        Template ID
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          name="template_id"
                          className="form-control"
                          placeholder="Template ID"
                        />
                        <small className="form-text text-danger">
                          **N.B : Template ID is Required Only for Fast2SMS DLT
                          Manual **
                        </small>
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button type="submit" className="btn btn-primary">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SendSms;
