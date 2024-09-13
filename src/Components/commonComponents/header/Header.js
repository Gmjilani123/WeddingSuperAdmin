import React from 'react'
import logo from '../../../assets/img/logo/abaris-wedding-ai-admin-logo.png'

function Header() {
  const openModal = (event) => {
    document.getElementById("myDIV").className = "aiz-sidebar-wrap open ";
    this.setState({ showModal: true });
  }


  return (
    <>
      <div className="aiz-topbar px-15px px-lg-25px d-flex align-items-stretch justify-content-between">
        <div className="d-xl-none d-flex">
          <div className="aiz-topbar-nav-toggler d-flex align-items-center justify-content-start mr-2 mr-md-3">
            <button className="aiz-mobile-toggler" onClick={openModal}>
              <span />
            </button>
          </div>
          <div className="aiz-topbar-logo-wrap d-flex align-items-center justify-content-start">
            <a href="https://weddemoadmin.abaris.in/admin/dashboard" className="d-block">
              <img src={logo} className="img-fluid" height={45} />
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-stretch flex-grow-xl-1">
          <div className="d-none d-md-flex justify-content-around align-items-center align-items-stretch">
            <div className="d-none d-md-flex justify-content-around align-items-center align-items-stretch">
              <div className="aiz-topbar-item">
                <div className="d-flex align-items-center">
                  <a className="btn btn-icon btn-circle btn-light" href="#" title="Browse Website">
                    <i className="las la-globe" />
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center align-items-stretch ml-3">
              <div className="aiz-topbar-item">
                <div className="d-flex align-items-center">
                  <a className="btn btn-soft-danger btn-sm d-flex align-items-center" href="https://weddemoadmin.abaris.in/admin/cache-cache">
                    <i className="las la-hdd fs-20" />
                    <span className="fw-500 ml-1 mr-0 d-none d-md-block">Clear Cache</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around align-items-center align-items-stretch">
            <div className="aiz-topbar-item ml-2">
              <div className="align-items-stretch d-flex dropdown">
                <a className="dropdown-toggle no-arrow" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                  <span className="btn btn-icon p-1">
                    <span className=" position-relative d-inline-block">
                      <i className="las la-bell la-2x" />
                      <span className="badge badge-circle badge-primary position-absolute absolute-top-right">
                        29
                      </span>
                    </span>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg py-0">
                  <div className="p-3 bg-light border-bottom">
                    <h6 className="mb-0">Notifications</h6>
                  </div>
                  <ul className="list-group c-scrollbar-light overflow-auto" style={{ maxHeight: 300 }}>
                    <li className="list-group-item d-flex justify-content-between align-items-start hov-bg-soft-primary">
                      <a href="https://weddemoadmin.abaris.in/notification-view/137" className="media text-inherit">
                        <span className="avatar avatar-sm mr-3">
                          <img src="https://weddemoadmin.abaris.in/public/assets/img/avatar-place.png" />
                        </span>
                        <div className="media-body">
                          <p className="mb-1">Cairo Carney</p>
                          <small className="text-muted">
                            A new member has been registered to your system. Name: Cairo Carney
                          </small>
                        </div>
                      </a>
                      <button className="btn p-0">
                        <span className="badge badge-md  badge-dot badge-circle badge-primary" />
                      </button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start hov-bg-soft-primary">
                      <a href="https://weddemoadmin.abaris.in/notification-view/60" className="media text-inherit">
                        <span className="avatar avatar-sm mr-3">
                          <img src="https://weddemoadmin.abaris.in/public/uploads/all/frIh1shOagKEHjg33H1CzyljjmGeg18jIjikmqxZ.png" />
                        </span>
                        <div className="media-body">
                          <p className="mb-1">Olivia Emma</p>
                          <small className="text-muted">
                            Olivia Emmahas been purchased a new package. Payment Code: 210629-105148
                          </small>
                        </div>
                      </a>
                      <button className="btn p-0">
                        <span className="badge badge-md  badge-dot badge-circle badge-primary" />
                      </button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start hov-bg-soft-primary">
                      <a href="https://weddemoadmin.abaris.in/notification-view/55" className="media text-inherit">
                        <span className="avatar avatar-sm mr-3">
                          <img src="https://weddemoadmin.abaris.in/public/uploads/all/ftplN2fgKnlYgX6qMTj8bYldFN50VZd1wDsuoW4I.png" />
                        </span>
                        <div className="media-body">
                          <p className="mb-1">Alex Reynolds</p>
                          <small className="text-muted">
                            Alex Reynoldshas been purchased a new package. Payment Code: 210412-120948
                          </small>
                        </div>
                      </a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start hov-bg-soft-primary">
                      <a href="https://weddemoadmin.abaris.in/notification-view/54" className="media text-inherit">
                        <span className="avatar avatar-sm mr-3">
                          <img src="https://weddemoadmin.abaris.in/public/uploads/all/ftplN2fgKnlYgX6qMTj8bYldFN50VZd1wDsuoW4I.png" />
                        </span>
                        <div className="media-body">
                          <p className="mb-1">Alex Reynolds</p>
                          <small className="text-muted">
                            A new member has been registered to your system. Name: Alex Reynolds
                          </small>
                        </div>
                      </a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start hov-bg-soft-primary">
                      <a href="https://weddemoadmin.abaris.in/notification-view/46" className="media text-inherit">
                        <span className="avatar avatar-sm mr-3">
                          <img src="https://weddemoadmin.abaris.in/public/uploads/all/0d0v5DC1Juc6RwmA6DtnWPx4QXz4mGc6ckr3Oh8L.png" />
                        </span>
                        <div className="media-body">
                          <p className="mb-1">Kimberley Lang</p>
                          <small className="text-muted">
                            Kimberley Langhas been purchased a new package. Payment Code: 210412-105526
                          </small>
                        </div>
                      </a>
                      <button className="btn p-0">
                        <span className="badge badge-md  badge-dot badge-circle badge-primary" />
                      </button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start hov-bg-soft-primary">
                      <a href="https://weddemoadmin.abaris.in/notification-view/44" className="media text-inherit">
                        <span className="avatar avatar-sm mr-3">
                          <img src="https://weddemoadmin.abaris.in/public/uploads/all/d60ho8ezrvYMxYH7SaU0mF4UmWttV321vSMrZ8yz.png" />
                        </span>
                        <div className="media-body">
                          <p className="mb-1">Robert L. Gardner</p>
                          <small className="text-muted">
                            Robert L. Gardnerhas been purchased a new package. Payment Code: 210411-111023
                          </small>
                        </div>
                      </a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start hov-bg-soft-primary">
                      <a href="https://weddemoadmin.abaris.in/notification-view/39" className="media text-inherit">
                        <span className="avatar avatar-sm mr-3">
                          <img src="https://weddemoadmin.abaris.in/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" />
                        </span>
                        <div className="media-body">
                          <p className="mb-1">Matthew Ryan</p>
                          <small className="text-muted">
                            Matthew Ryanhas been purchased a new package. Payment Code: 210410-113908
                          </small>
                        </div>
                      </a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start hov-bg-soft-primary">
                      <a href="https://weddemoadmin.abaris.in/notification-view/38" className="media text-inherit">
                        <span className="avatar avatar-sm mr-3">
                          <img src="https://weddemoadmin.abaris.in/public/uploads/all/kimX2PnqPaTQt1YJWqudR6ipTmWfhxMrfCb4uTf0.png" />
                        </span>
                        <div className="media-body">
                          <p className="mb-1">Derrick L. Lavender</p>
                          <small className="text-muted">
                            Derrick L. Lavenderhas been purchased a new package. Payment Code: 210410-093023
                          </small>
                        </div>
                      </a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start hov-bg-soft-primary">
                      <a href="https://weddemoadmin.abaris.in/notification-view/37" className="media text-inherit">
                        <span className="avatar avatar-sm mr-3">
                          <img src="https://weddemoadmin.abaris.in/public/uploads/all/PHOPJbRhA2sirsP6lcQu3hgQdIQVCSzSIH03p83i.png" />
                        </span>
                        <div className="media-body">
                          <p className="mb-1">Jane R Lamy</p>
                          <small className="text-muted">
                            Jane R Lamyhas been purchased a new package. Payment Code: 210408-190946
                          </small>
                        </div>
                      </a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start hov-bg-soft-primary">
                      <a href="https://weddemoadmin.abaris.in/notification-view/35" className="media text-inherit">
                        <span className="avatar avatar-sm mr-3">
                          <img src="https://weddemoadmin.abaris.in/public/uploads/all/VnXkjr8WzmYtJD3F2K0Jtbw1QD2CHkb249rpY2W8.png" />
                        </span>
                        <div className="media-body">
                          <p className="mb-1">Kathy T. Litton</p>
                          <small className="text-muted">
                            Kathy T. Littonhas been purchased a new package. Payment Code: 210408-160414
                          </small>
                        </div>
                      </a>
                      <button className="btn p-0">
                        <span className="badge badge-md  badge-dot badge-circle badge-primary" />
                      </button>
                    </li>
                  </ul>
                  <div className="border-top">
                    <a href="https://weddemoadmin.abaris.in/admin/notifications" className="btn text-reset btn-block">View All Notifications</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="aiz-topbar-item ml-2">
          <div class="align-items-stretch d-flex dropdown " id="lang-change">
              <a class="dropdown-toggle no-arrow" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                  <span class="btn btn-icon">
                      <img src="https://weddemoadmin.abaris.in/public/assets/img/flags/en.png" height="11">
                  </span>
              </a>
              <ul class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-xs">

                                              <li>
                          <a href="javascript:void(0)" data-flag="en" class="dropdown-item  active ">
                              <img src="https://weddemoadmin.abaris.in/public/assets/img/flags/en.png" class="mr-2">
                              <span class="language">English</span>
                          </a>
                      </li>
                                              <li>
                          <a href="javascript:void(0)" data-flag="bd" class="dropdown-item ">
                              <img src="https://weddemoadmin.abaris.in/public/assets/img/flags/bd.png" class="mr-2">
                              <span class="language">Bangla</span>
                          </a>
                      </li>
                                      </ul>
          </div>
      </div> */}
            <div className="aiz-topbar-item ml-2">
              <div className="align-items-stretch d-flex dropdown">
                <a className="dropdown-toggle no-arrow text-dark" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                  <span className="d-flex align-items-center">
                    <span className="mr-md-2">
                      <img src="https://weddemoadmin.abaris.in/public/uploads/all/NiLOYq4Y5Lap1Ek7QrZcpgXq6UGwcOGpd5RQoOMA.jpg" className="size-35px rounded-circle img-fit" height={36} width={36} />
                    </span>
                    <span className="d-none d-md-block">
                      <span className="d-block fw-500">Mr. Admin John Doe</span>
                      <span className="d-block small opacity-60">admin</span>
                    </span>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-md">
                  <a href="https://weddemoadmin.abaris.in/admin/profile" className="dropdown-item">
                    <i className="las la-user-circle" />
                    <span>Manage Profile</span>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="las la-sign-out-alt" />
                    <span>Logout</span>
                    <form id="logout-form" action="https://weddemoadmin.abaris.in/logout" method="POST" style={{ display: 'none' }}>
                      <input type="hidden" name="_token" defaultValue="jBhOe6YloUnLqj4hJUoGKepgkY8oSMgSM2jJIaXh" />                          </form>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header