import React from 'react'

function Dashboard() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row gutters-10">
                        <div className="col-xl-3 col-md-6">
                            <div className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                <div className="px-3 pt-3">
                                    <div className="opacity-50">
                                        <span className="fs-12 d-block">Total</span>
                                        Members
                                    </div>
                                    <div className="h3 fw-700 mb-3">20</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                    <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden">
                                <div className="px-3 pt-3">
                                    <div className="opacity-50">
                                        <span className="fs-12 d-block">Premium</span>
                                        Members
                                    </div>
                                    <div className="h3 fw-700 mb-3">18</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                    <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                                <div className="px-3 pt-3">
                                    <div className="opacity-50">
                                        <span className="fs-12 d-block">Free</span>
                                        Members
                                    </div>
                                    <div className="h3 fw-700 mb-3">2</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                    <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="bg-grad-4 text-white rounded-lg mb-4 overflow-hidden">
                                <div className="px-3 pt-3">
                                    <div className="opacity-50">
                                        <span className="fs-12 d-block">Blocked</span>
                                        Members
                                    </div>
                                    <div className="h3 fw-700 mb-3">2</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                    <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters-10">
                        <div className="col-xxl-8 col-xl-7">
                            <div className="card shadow-sm">
                                <div className="card-header">
                                    <h6 className="mb-0 fs-14">This year earnings</h6>
                                </div>
                                <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                                    <canvas id="chart-1" className="w-100 chartjs-render-monitor" height={375} width={931} style={{ display: 'block', height: 300, width: 745 }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5">
                            <div className="h-100 row gutters-10">
                                <div className="col-6 mb-3">
                                    <div className="bg-white h-100 px-3 py-4 rounded shadow-sm d-flex flex-column justify-content-center">
                                        <span className="opacity-50 fs-16 mb-2">Total Earnings</span>
                                        <div className="h2">221,436Rs</div>
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <div className="bg-white h-100 px-3 py-4 rounded shadow-sm d-flex flex-column justify-content-center">
                                        <span className="opacity-50 fs-16 mb-2">Last Month Earnings</span>
                                        <div className="h2">0Rs</div>
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <div className="bg-white h-100 px-3 py-4 rounded shadow-sm d-flex flex-column justify-content-center">
                                        <span className="opacity-50 fs-16 mb-2">Last 6 Months Earnings</span>
                                        <div className="h2">0Rs</div>
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <div className="bg-white h-100 px-3 py-4 rounded shadow-sm d-flex flex-column justify-content-center">
                                        <span className="opacity-50 fs-16 mb-2">Last 12 Months Earnings</span>
                                        <div className="h2">0Rs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters-10">
                        <div className="col-xxl-8 col-xl-7">
                            <div className="card shadow-sm">
                                <div className="card-header">
                                    <h6 className="mb-0 fs-14">Happy Stories</h6>
                                </div>
                                <div className="card-body">
                                    <div className="aiz-carousel gutters-10 slick-initialized slick-slider" data-items={4} data-xl-items={3} data-lg-items={4} data-md-items={3} data-sm-items={2} data-xs-items={1}><div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 1536, transform: 'translate3d(0px, 0px, 0px)' }}><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 192 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card overflow-hidden mb-4">
                                            <a href="https://weddemoadmin.abaris.in/story_details/14" className="text-reset d-block position-relative" tabIndex={0}>
                                                <img src="https://weddemoadmin.abaris.in/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" className="img-fit h-150px mw-100" />
                                            </a>
                                            <div className="p-3">
                                                <div className="fw-600 text-truncate mb-2">Alex &amp; Dolorita&nbsp;&nbsp;Prieto</div>
                                                <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-2">
                                                    <a href="https://weddemoadmin.abaris.in/story_details/14" className="text-reset d-block" tabIndex={0}>
                                                        If I had a flower every time I thought of you, I could walk in my garden forever.
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div></div></div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{ width: 192 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card overflow-hidden mb-4">
                                            <a href="https://weddemoadmin.abaris.in/story_details/13" className="text-reset d-block position-relative" tabIndex={0}>
                                                <img src="https://weddemoadmin.abaris.in/public/uploads/all/OnMJ1HjOWTgzMDcvQxBGcreDtmqHGXAdFLK0dt5X.jpg" className="img-fit h-150px mw-100" />
                                            </a>
                                            <div className="p-3">
                                                <div className="fw-600 text-truncate mb-2">Robert &amp; Dolorita&nbsp;&nbsp;Prieto</div>
                                                <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-2">
                                                    <a href="https://weddemoadmin.abaris.in/story_details/13" className="text-reset d-block" tabIndex={0}>
                                                        Relationship are always stronger when you are best friends first, and a couple second.
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div></div></div><div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{ width: 192 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card overflow-hidden mb-4">
                                            <a href="https://weddemoadmin.abaris.in/story_details/12" className="text-reset d-block position-relative" tabIndex={0}>
                                                <img src="https://weddemoadmin.abaris.in/public/uploads/all/HbCefrFWcM1eZa7TsbyOhltQQd10MTY42HCQ40QP.jpg" className="img-fit h-150px mw-100" />
                                            </a>
                                            <div className="p-3">
                                                <div className="fw-600 text-truncate mb-2">Derrick &amp; Gregory&nbsp;J&nbsp;Luton</div>
                                                <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-2">
                                                    <a href="https://weddemoadmin.abaris.in/story_details/12" className="text-reset d-block" tabIndex={0}>
                                                        Sometimes I look at you and I woder hoe i got to be so damn lucky.
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div></div></div><div className="slick-slide slick-active" data-slick-index={3} aria-hidden="false" style={{ width: 192 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card overflow-hidden mb-4">
                                            <a href="https://weddemoadmin.abaris.in/story_details/11" className="text-reset d-block position-relative" tabIndex={0}>
                                                <img src="https://weddemoadmin.abaris.in/public/uploads/all/v7t6fMIBFCeasUf3KDfKPpEhuSc4XVabW5yqYni8.jpg" className="img-fit h-150px mw-100" />
                                            </a>
                                            <div className="p-3">
                                                <div className="fw-600 text-truncate mb-2">Kathy &amp; Kimberley Lang</div>
                                                <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-2">
                                                    <a href="https://weddemoadmin.abaris.in/story_details/11" className="text-reset d-block" tabIndex={0}>
                                                        Me &amp; You we could make the whole world jealous.
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div></div></div><div className="slick-slide" data-slick-index={4} aria-hidden="true" style={{ width: 192 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card overflow-hidden mb-4">
                                            <a href="https://weddemoadmin.abaris.in/story_details/10" className="text-reset d-block position-relative" tabIndex={-1}>
                                                <img src="https://weddemoadmin.abaris.in/public/uploads/all/QU1tnyXoXhslOG1RJ0acDpZ8CeDotoTodk7vcBYC.jpg" className="img-fit h-150px mw-100" />
                                            </a>
                                            <div className="p-3">
                                                <div className="fw-600 text-truncate mb-2">Sylvia &amp; Kimberley Lang</div>
                                                <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-2">
                                                    <a href="https://weddemoadmin.abaris.in/story_details/10" className="text-reset d-block" tabIndex={-1}>
                                                        Life has become more beautiful from the day you enter in my life.
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div></div></div><div className="slick-slide" data-slick-index={5} aria-hidden="true" style={{ width: 192 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card overflow-hidden mb-4">
                                            <a href="https://weddemoadmin.abaris.in/story_details/9" className="text-reset d-block position-relative" tabIndex={-1}>
                                                <img src="https://weddemoadmin.abaris.in/public/uploads/all/KKAjbpd6nEFmOu8ULpdVb2nibGIll2phdSFreg0k.jpg" className="img-fit h-150px mw-100" />
                                            </a>
                                            <div className="p-3">
                                                <div className="fw-600 text-truncate mb-2">Nicole &amp; Dolorita&nbsp;&nbsp;Prieto</div>
                                                <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-2">
                                                    <a href="https://weddemoadmin.abaris.in/story_details/9" className="text-reset d-block" tabIndex={-1}>
                                                        You are my faborite place to go to when my mind searches for place.
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div></div></div><div className="slick-slide" data-slick-index={6} aria-hidden="true" style={{ width: 192 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card overflow-hidden mb-4">
                                            <a href="https://weddemoadmin.abaris.in/story_details/8" className="text-reset d-block position-relative" tabIndex={-1}>
                                                <img src="https://weddemoadmin.abaris.in/public/uploads/all/WmgVsQxylbGHstOU69Vm75Ufb7XtuNu2o6Qn6zSO.jpg" className="img-fit h-150px mw-100" />
                                            </a>
                                            <div className="p-3">
                                                <div className="fw-600 text-truncate mb-2">Ramona &amp; Gregory&nbsp;J&nbsp;Luton</div>
                                                <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-2">
                                                    <a href="https://weddemoadmin.abaris.in/story_details/8" className="text-reset d-block" tabIndex={-1}>
                                                        I don't care how many people are in this world I want you end Of story.
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div></div></div><div className="slick-slide" data-slick-index={7} aria-hidden="true" style={{ width: 192 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card overflow-hidden mb-4">
                                            <a href="https://weddemoadmin.abaris.in/story_details/7" className="text-reset d-block position-relative" tabIndex={-1}>
                                                <img src="https://weddemoadmin.abaris.in/public/uploads/all/BvZIgmLAshq3ZyDe12xoIKYTNq1TbdxJyrjgGLin.jpg" className="img-fit h-150px mw-100" />
                                            </a>
                                            <div className="p-3">
                                                <div className="fw-600 text-truncate mb-2">Donna &amp; Gregory&nbsp;J&nbsp;Luton</div>
                                                <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-2">
                                                    <a href="https://weddemoadmin.abaris.in/story_details/7" className="text-reset d-block" tabIndex={-1}>
                                                        A love story Could begin Anywhere.
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div></div></div></div></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5">
                            <div className="card shadow-sm">
                                <div className="card-header">
                                    <h6 className="mb-0 fs-14">Happy Stories</h6>
                                </div>
                                <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                                    <canvas id="pie-1" className="w-100 chartjs-render-monitor" height={343} style={{ display: 'block', height: 275, width: 336 }} width={420} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard