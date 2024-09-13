function Edit() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <h5 className="mb-0 h6">Language Information</h5>
          </div>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">update Language Info</h5>
                </div>
                <div className="card-body p-0">
                  <form
                    className="p-4"
                    action="https://weddemoadmin.abaris.in/admin/languages/1"
                    method="POST"
                  >
                    <input name="_method" type="hidden" defaultValue="PATCH" />
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="V3eUAFlZ4RZMMqWQoLNyu8KJ5Be77CCNc7fweveP"
                    />{" "}
                    <div className="form-group row">
                      <div className="col-lg-3">
                        <label className="control-label">Name</label>
                      </div>
                      <div className="col-lg-9">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          defaultValue="English"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3">
                        <label className="control-label">Code</label>
                      </div>
                      <div className="col-lg-9">
                      <select
                          class="form-select form-control aiz-selectpicker mb-2 mb-md-0"
                          aria-label="Default select example"
                        >
                          <option selected>AD</option>
                          <option value="2">AE</option>
                          <option value="3">AF</option>
                          <option value="2">AG</option>
                          <option value="3">AL</option>
                        </select>
                        {/* <div className="dropdown bootstrap-select form-control aiz- mb-2 mb-md-0">
                          <select
                            className="form-control aiz-selectpicker mb-2 mb-md-0"
                            name="code"
                            data-live-search="true"
                            tabIndex={-98}
                          >
                            <option
                              value="ad"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ad.png' class='mr-2'><span>AD</span></div>"
                            ></option>
                            <option
                              value="ae"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ae.png' class='mr-2'><span>AE</span></div>"
                            ></option>
                            <option
                              value="af"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/af.png' class='mr-2'><span>AF</span></div>"
                            ></option>
                            <option
                              value="ag"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ag.png' class='mr-2'><span>AG</span></div>"
                            ></option>
                            <option
                              value="ai"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ai.png' class='mr-2'><span>AI</span></div>"
                            ></option>
                            <option
                              value="al"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/al.png' class='mr-2'><span>AL</span></div>"
                            ></option>
                            <option
                              value="am"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/am.png' class='mr-2'><span>AM</span></div>"
                            ></option>
                            <option
                              value="an"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/an.png' class='mr-2'><span>AN</span></div>"
                            ></option>
                            <option
                              value="ao"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ao.png' class='mr-2'><span>AO</span></div>"
                            ></option>
                            <option
                              value="ar"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ar.png' class='mr-2'><span>AR</span></div>"
                            ></option>
                            <option
                              value="as"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/as.png' class='mr-2'><span>AS</span></div>"
                            ></option>
                            <option
                              value="at"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/at.png' class='mr-2'><span>AT</span></div>"
                            ></option>
                            <option
                              value="au"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/au.png' class='mr-2'><span>AU</span></div>"
                            ></option>
                            <option
                              value="aw"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/aw.png' class='mr-2'><span>AW</span></div>"
                            ></option>
                            <option
                              value="ax"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ax.png' class='mr-2'><span>AX</span></div>"
                            ></option>
                            <option
                              value="az"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/az.png' class='mr-2'><span>AZ</span></div>"
                            ></option>
                            <option
                              value="ba"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ba.png' class='mr-2'><span>BA</span></div>"
                            ></option>
                            <option
                              value="bb"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bb.png' class='mr-2'><span>BB</span></div>"
                            ></option>
                            <option
                              value="be"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/be.png' class='mr-2'><span>BE</span></div>"
                            ></option>
                            <option
                              value="bf"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bf.png' class='mr-2'><span>BF</span></div>"
                            ></option>
                            <option
                              value="bg"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bg.png' class='mr-2'><span>BG</span></div>"
                            ></option>
                            <option
                              value="bh"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bh.png' class='mr-2'><span>BH</span></div>"
                            ></option>
                            <option
                              value="bi"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bi.png' class='mr-2'><span>BI</span></div>"
                            ></option>
                            <option
                              value="bj"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bj.png' class='mr-2'><span>BJ</span></div>"
                            ></option>
                            <option
                              value="bm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bm.png' class='mr-2'><span>BM</span></div>"
                            ></option>
                            <option
                              value="bn"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bn.png' class='mr-2'><span>BN</span></div>"
                            ></option>
                            <option
                              value="bo"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bo.png' class='mr-2'><span>BO</span></div>"
                            ></option>
                            <option
                              value="br"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/br.png' class='mr-2'><span>BR</span></div>"
                            ></option>
                            <option
                              value="bs"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bs.png' class='mr-2'><span>BS</span></div>"
                            ></option>
                            <option
                              value="bt"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bt.png' class='mr-2'><span>BT</span></div>"
                            ></option>
                            <option
                              value="bv"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bv.png' class='mr-2'><span>BV</span></div>"
                            ></option>
                            <option
                              value="bw"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bw.png' class='mr-2'><span>BW</span></div>"
                            ></option>
                            <option
                              value="by"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/by.png' class='mr-2'><span>BY</span></div>"
                            ></option>
                            <option
                              value="bz"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/bz.png' class='mr-2'><span>BZ</span></div>"
                            ></option>
                            <option
                              value="ca"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ca.png' class='mr-2'><span>CA</span></div>"
                            ></option>
                            <option
                              value="catalonia"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/catalonia.png' class='mr-2'><span>CATALONIA</span></div>"
                            ></option>
                            <option
                              value="cc"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cc.png' class='mr-2'><span>CC</span></div>"
                            ></option>
                            <option
                              value="cd"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cd.png' class='mr-2'><span>CD</span></div>"
                            ></option>
                            <option
                              value="cf"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cf.png' class='mr-2'><span>CF</span></div>"
                            ></option>
                            <option
                              value="cg"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cg.png' class='mr-2'><span>CG</span></div>"
                            ></option>
                            <option
                              value="ch"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ch.png' class='mr-2'><span>CH</span></div>"
                            ></option>
                            <option
                              value="ci"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ci.png' class='mr-2'><span>CI</span></div>"
                            ></option>
                            <option
                              value="ck"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ck.png' class='mr-2'><span>CK</span></div>"
                            ></option>
                            <option
                              value="cl"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cl.png' class='mr-2'><span>CL</span></div>"
                            ></option>
                            <option
                              value="cm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cm.png' class='mr-2'><span>CM</span></div>"
                            ></option>
                            <option
                              value="cn"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cn.png' class='mr-2'><span>CN</span></div>"
                            ></option>
                            <option
                              value="co"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/co.png' class='mr-2'><span>CO</span></div>"
                            ></option>
                            <option
                              value="cr"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cr.png' class='mr-2'><span>CR</span></div>"
                            ></option>
                            <option
                              value="cs"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cs.png' class='mr-2'><span>CS</span></div>"
                            ></option>
                            <option
                              value="cu"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cu.png' class='mr-2'><span>CU</span></div>"
                            ></option>
                            <option
                              value="cv"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cv.png' class='mr-2'><span>CV</span></div>"
                            ></option>
                            <option
                              value="cx"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cx.png' class='mr-2'><span>CX</span></div>"
                            ></option>
                            <option
                              value="cy"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cy.png' class='mr-2'><span>CY</span></div>"
                            ></option>
                            <option
                              value="cz"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/cz.png' class='mr-2'><span>CZ</span></div>"
                            ></option>
                            <option
                              value="de"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/de.png' class='mr-2'><span>DE</span></div>"
                            ></option>
                            <option
                              value="dj"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/dj.png' class='mr-2'><span>DJ</span></div>"
                            ></option>
                            <option
                              value="dk"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/dk.png' class='mr-2'><span>DK</span></div>"
                            ></option>
                            <option
                              value="dm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/dm.png' class='mr-2'><span>DM</span></div>"
                            ></option>
                            <option
                              value="do"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/do.png' class='mr-2'><span>DO</span></div>"
                            ></option>
                            <option
                              value="dz"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/dz.png' class='mr-2'><span>DZ</span></div>"
                            ></option>
                            <option
                              value="ec"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ec.png' class='mr-2'><span>EC</span></div>"
                            ></option>
                            <option
                              value="ee"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ee.png' class='mr-2'><span>EE</span></div>"
                            ></option>
                            <option
                              value="eg"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/eg.png' class='mr-2'><span>EG</span></div>"
                            ></option>
                            <option
                              value="eh"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/eh.png' class='mr-2'><span>EH</span></div>"
                            ></option>
                            <option
                              value="en"
                              selected
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/en.png' class='mr-2'><span>EN</span></div>"
                            ></option>
                            <option
                              value="england"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/england.png' class='mr-2'><span>ENGLAND</span></div>"
                            ></option>
                            <option
                              value="er"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/er.png' class='mr-2'><span>ER</span></div>"
                            ></option>
                            <option
                              value="es"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/es.png' class='mr-2'><span>ES</span></div>"
                            ></option>
                            <option
                              value="et"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/et.png' class='mr-2'><span>ET</span></div>"
                            ></option>
                            <option
                              value="europeanunion"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/europeanunion.png' class='mr-2'><span>EUROPEANUNION</span></div>"
                            ></option>
                            <option
                              value="fam"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/fam.png' class='mr-2'><span>FAM</span></div>"
                            ></option>
                            <option
                              value="fi"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/fi.png' class='mr-2'><span>FI</span></div>"
                            ></option>
                            <option
                              value="fj"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/fj.png' class='mr-2'><span>FJ</span></div>"
                            ></option>
                            <option
                              value="fk"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/fk.png' class='mr-2'><span>FK</span></div>"
                            ></option>
                            <option
                              value="fm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/fm.png' class='mr-2'><span>FM</span></div>"
                            ></option>
                            <option
                              value="fo"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/fo.png' class='mr-2'><span>FO</span></div>"
                            ></option>
                            <option
                              value="fr"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/fr.png' class='mr-2'><span>FR</span></div>"
                            ></option>
                            <option
                              value="ga"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ga.png' class='mr-2'><span>GA</span></div>"
                            ></option>
                            <option
                              value="gb"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gb.png' class='mr-2'><span>GB</span></div>"
                            ></option>
                            <option
                              value="gd"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gd.png' class='mr-2'><span>GD</span></div>"
                            ></option>
                            <option
                              value="ge"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ge.png' class='mr-2'><span>GE</span></div>"
                            ></option>
                            <option
                              value="gf"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gf.png' class='mr-2'><span>GF</span></div>"
                            ></option>
                            <option
                              value="gh"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gh.png' class='mr-2'><span>GH</span></div>"
                            ></option>
                            <option
                              value="gi"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gi.png' class='mr-2'><span>GI</span></div>"
                            ></option>
                            <option
                              value="gl"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gl.png' class='mr-2'><span>GL</span></div>"
                            ></option>
                            <option
                              value="gm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gm.png' class='mr-2'><span>GM</span></div>"
                            ></option>
                            <option
                              value="gn"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gn.png' class='mr-2'><span>GN</span></div>"
                            ></option>
                            <option
                              value="gp"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gp.png' class='mr-2'><span>GP</span></div>"
                            ></option>
                            <option
                              value="gq"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gq.png' class='mr-2'><span>GQ</span></div>"
                            ></option>
                            <option
                              value="gr"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gr.png' class='mr-2'><span>GR</span></div>"
                            ></option>
                            <option
                              value="gs"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gs.png' class='mr-2'><span>GS</span></div>"
                            ></option>
                            <option
                              value="gt"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gt.png' class='mr-2'><span>GT</span></div>"
                            ></option>
                            <option
                              value="gu"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gu.png' class='mr-2'><span>GU</span></div>"
                            ></option>
                            <option
                              value="gw"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gw.png' class='mr-2'><span>GW</span></div>"
                            ></option>
                            <option
                              value="gy"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/gy.png' class='mr-2'><span>GY</span></div>"
                            ></option>
                            <option
                              value="hk"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/hk.png' class='mr-2'><span>HK</span></div>"
                            ></option>
                            <option
                              value="hm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/hm.png' class='mr-2'><span>HM</span></div>"
                            ></option>
                            <option
                              value="hn"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/hn.png' class='mr-2'><span>HN</span></div>"
                            ></option>
                            <option
                              value="hr"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/hr.png' class='mr-2'><span>HR</span></div>"
                            ></option>
                            <option
                              value="ht"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ht.png' class='mr-2'><span>HT</span></div>"
                            ></option>
                            <option
                              value="hu"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/hu.png' class='mr-2'><span>HU</span></div>"
                            ></option>
                            <option
                              value="id"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/id.png' class='mr-2'><span>ID</span></div>"
                            ></option>
                            <option
                              value="ie"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ie.png' class='mr-2'><span>IE</span></div>"
                            ></option>
                            <option
                              value="il"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/il.png' class='mr-2'><span>IL</span></div>"
                            ></option>
                            <option
                              value="in"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/in.png' class='mr-2'><span>IN</span></div>"
                            ></option>
                            <option
                              value="io"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/io.png' class='mr-2'><span>IO</span></div>"
                            ></option>
                            <option
                              value="iq"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/iq.png' class='mr-2'><span>IQ</span></div>"
                            ></option>
                            <option
                              value="ir"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ir.png' class='mr-2'><span>IR</span></div>"
                            ></option>
                            <option
                              value="is"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/is.png' class='mr-2'><span>IS</span></div>"
                            ></option>
                            <option
                              value="it"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/it.png' class='mr-2'><span>IT</span></div>"
                            ></option>
                            <option
                              value="jm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/jm.png' class='mr-2'><span>JM</span></div>"
                            ></option>
                            <option
                              value="jo"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/jo.png' class='mr-2'><span>JO</span></div>"
                            ></option>
                            <option
                              value="jp"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/jp.png' class='mr-2'><span>JP</span></div>"
                            ></option>
                            <option
                              value="ke"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ke.png' class='mr-2'><span>KE</span></div>"
                            ></option>
                            <option
                              value="kg"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/kg.png' class='mr-2'><span>KG</span></div>"
                            ></option>
                            <option
                              value="kh"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/kh.png' class='mr-2'><span>KH</span></div>"
                            ></option>
                            <option
                              value="ki"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ki.png' class='mr-2'><span>KI</span></div>"
                            ></option>
                            <option
                              value="km"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/km.png' class='mr-2'><span>KM</span></div>"
                            ></option>
                            <option
                              value="kn"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/kn.png' class='mr-2'><span>KN</span></div>"
                            ></option>
                            <option
                              value="kp"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/kp.png' class='mr-2'><span>KP</span></div>"
                            ></option>
                            <option
                              value="kr"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/kr.png' class='mr-2'><span>KR</span></div>"
                            ></option>
                            <option
                              value="kw"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/kw.png' class='mr-2'><span>KW</span></div>"
                            ></option>
                            <option
                              value="ky"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ky.png' class='mr-2'><span>KY</span></div>"
                            ></option>
                            <option
                              value="kz"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/kz.png' class='mr-2'><span>KZ</span></div>"
                            ></option>
                            <option
                              value="la"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/la.png' class='mr-2'><span>LA</span></div>"
                            ></option>
                            <option
                              value="lb"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/lb.png' class='mr-2'><span>LB</span></div>"
                            ></option>
                            <option
                              value="lc"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/lc.png' class='mr-2'><span>LC</span></div>"
                            ></option>
                            <option
                              value="li"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/li.png' class='mr-2'><span>LI</span></div>"
                            ></option>
                            <option
                              value="lk"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/lk.png' class='mr-2'><span>LK</span></div>"
                            ></option>
                            <option
                              value="lr"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/lr.png' class='mr-2'><span>LR</span></div>"
                            ></option>
                            <option
                              value="ls"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ls.png' class='mr-2'><span>LS</span></div>"
                            ></option>
                            <option
                              value="lt"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/lt.png' class='mr-2'><span>LT</span></div>"
                            ></option>
                            <option
                              value="lu"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/lu.png' class='mr-2'><span>LU</span></div>"
                            ></option>
                            <option
                              value="lv"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/lv.png' class='mr-2'><span>LV</span></div>"
                            ></option>
                            <option
                              value="ly"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ly.png' class='mr-2'><span>LY</span></div>"
                            ></option>
                            <option
                              value="ma"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ma.png' class='mr-2'><span>MA</span></div>"
                            ></option>
                            <option
                              value="mc"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mc.png' class='mr-2'><span>MC</span></div>"
                            ></option>
                            <option
                              value="md"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/md.png' class='mr-2'><span>MD</span></div>"
                            ></option>
                            <option
                              value="me"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/me.png' class='mr-2'><span>ME</span></div>"
                            ></option>
                            <option
                              value="mg"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mg.png' class='mr-2'><span>MG</span></div>"
                            ></option>
                            <option
                              value="mh"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mh.png' class='mr-2'><span>MH</span></div>"
                            ></option>
                            <option
                              value="mk"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mk.png' class='mr-2'><span>MK</span></div>"
                            ></option>
                            <option
                              value="ml"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ml.png' class='mr-2'><span>ML</span></div>"
                            ></option>
                            <option
                              value="mm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mm.png' class='mr-2'><span>MM</span></div>"
                            ></option>
                            <option
                              value="mn"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mn.png' class='mr-2'><span>MN</span></div>"
                            ></option>
                            <option
                              value="mo"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mo.png' class='mr-2'><span>MO</span></div>"
                            ></option>
                            <option
                              value="mp"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mp.png' class='mr-2'><span>MP</span></div>"
                            ></option>
                            <option
                              value="mq"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mq.png' class='mr-2'><span>MQ</span></div>"
                            ></option>
                            <option
                              value="mr"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mr.png' class='mr-2'><span>MR</span></div>"
                            ></option>
                            <option
                              value="ms"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ms.png' class='mr-2'><span>MS</span></div>"
                            ></option>
                            <option
                              value="mt"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mt.png' class='mr-2'><span>MT</span></div>"
                            ></option>
                            <option
                              value="mu"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mu.png' class='mr-2'><span>MU</span></div>"
                            ></option>
                            <option
                              value="mv"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mv.png' class='mr-2'><span>MV</span></div>"
                            ></option>
                            <option
                              value="mw"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mw.png' class='mr-2'><span>MW</span></div>"
                            ></option>
                            <option
                              value="mx"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mx.png' class='mr-2'><span>MX</span></div>"
                            ></option>
                            <option
                              value="my"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/my.png' class='mr-2'><span>MY</span></div>"
                            ></option>
                            <option
                              value="mz"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/mz.png' class='mr-2'><span>MZ</span></div>"
                            ></option>
                            <option
                              value="na"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/na.png' class='mr-2'><span>NA</span></div>"
                            ></option>
                            <option
                              value="nc"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/nc.png' class='mr-2'><span>NC</span></div>"
                            ></option>
                            <option
                              value="ne"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ne.png' class='mr-2'><span>NE</span></div>"
                            ></option>
                            <option
                              value="nf"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/nf.png' class='mr-2'><span>NF</span></div>"
                            ></option>
                            <option
                              value="ng"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ng.png' class='mr-2'><span>NG</span></div>"
                            ></option>
                            <option
                              value="ni"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ni.png' class='mr-2'><span>NI</span></div>"
                            ></option>
                            <option
                              value="nl"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/nl.png' class='mr-2'><span>NL</span></div>"
                            ></option>
                            <option
                              value="no"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/no.png' class='mr-2'><span>NO</span></div>"
                            ></option>
                            <option
                              value="np"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/np.png' class='mr-2'><span>NP</span></div>"
                            ></option>
                            <option
                              value="nr"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/nr.png' class='mr-2'><span>NR</span></div>"
                            ></option>
                            <option
                              value="nu"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/nu.png' class='mr-2'><span>NU</span></div>"
                            ></option>
                            <option
                              value="nz"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/nz.png' class='mr-2'><span>NZ</span></div>"
                            ></option>
                            <option
                              value="om"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/om.png' class='mr-2'><span>OM</span></div>"
                            ></option>
                            <option
                              value="pa"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/pa.png' class='mr-2'><span>PA</span></div>"
                            ></option>
                            <option
                              value="pe"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/pe.png' class='mr-2'><span>PE</span></div>"
                            ></option>
                            <option
                              value="pf"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/pf.png' class='mr-2'><span>PF</span></div>"
                            ></option>
                            <option
                              value="pg"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/pg.png' class='mr-2'><span>PG</span></div>"
                            ></option>
                            <option
                              value="ph"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ph.png' class='mr-2'><span>PH</span></div>"
                            ></option>
                            <option
                              value="pk"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/pk.png' class='mr-2'><span>PK</span></div>"
                            ></option>
                            <option
                              value="pl"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/pl.png' class='mr-2'><span>PL</span></div>"
                            ></option>
                            <option
                              value="pm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/pm.png' class='mr-2'><span>PM</span></div>"
                            ></option>
                            <option
                              value="pn"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/pn.png' class='mr-2'><span>PN</span></div>"
                            ></option>
                            <option
                              value="pr"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/pr.png' class='mr-2'><span>PR</span></div>"
                            ></option>
                            <option
                              value="ps"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ps.png' class='mr-2'><span>PS</span></div>"
                            ></option>
                            <option
                              value="pt"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/pt.png' class='mr-2'><span>PT</span></div>"
                            ></option>
                            <option
                              value="pw"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/pw.png' class='mr-2'><span>PW</span></div>"
                            ></option>
                            <option
                              value="py"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/py.png' class='mr-2'><span>PY</span></div>"
                            ></option>
                            <option
                              value="qa"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/qa.png' class='mr-2'><span>QA</span></div>"
                            ></option>
                            <option
                              value="re"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/re.png' class='mr-2'><span>RE</span></div>"
                            ></option>
                            <option
                              value="ro"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ro.png' class='mr-2'><span>RO</span></div>"
                            ></option>
                            <option
                              value="rs"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/rs.png' class='mr-2'><span>RS</span></div>"
                            ></option>
                            <option
                              value="ru"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ru.png' class='mr-2'><span>RU</span></div>"
                            ></option>
                            <option
                              value="rw"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/rw.png' class='mr-2'><span>RW</span></div>"
                            ></option>
                            <option
                              value="sa"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sa.png' class='mr-2'><span>SA</span></div>"
                            ></option>
                            <option
                              value="sb"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sb.png' class='mr-2'><span>SB</span></div>"
                            ></option>
                            <option
                              value="sc"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sc.png' class='mr-2'><span>SC</span></div>"
                            ></option>
                            <option
                              value="scotland"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/scotland.png' class='mr-2'><span>SCOTLAND</span></div>"
                            ></option>
                            <option
                              value="sd"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sd.png' class='mr-2'><span>SD</span></div>"
                            ></option>
                            <option
                              value="se"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/se.png' class='mr-2'><span>SE</span></div>"
                            ></option>
                            <option
                              value="sg"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sg.png' class='mr-2'><span>SG</span></div>"
                            ></option>
                            <option
                              value="sh"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sh.png' class='mr-2'><span>SH</span></div>"
                            ></option>
                            <option
                              value="si"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/si.png' class='mr-2'><span>SI</span></div>"
                            ></option>
                            <option
                              value="sj"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sj.png' class='mr-2'><span>SJ</span></div>"
                            ></option>
                            <option
                              value="sk"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sk.png' class='mr-2'><span>SK</span></div>"
                            ></option>
                            <option
                              value="sl"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sl.png' class='mr-2'><span>SL</span></div>"
                            ></option>
                            <option
                              value="sm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sm.png' class='mr-2'><span>SM</span></div>"
                            ></option>
                            <option
                              value="sn"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sn.png' class='mr-2'><span>SN</span></div>"
                            ></option>
                            <option
                              value="so"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/so.png' class='mr-2'><span>SO</span></div>"
                            ></option>
                            <option
                              value="sr"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sr.png' class='mr-2'><span>SR</span></div>"
                            ></option>
                            <option
                              value="st"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/st.png' class='mr-2'><span>ST</span></div>"
                            ></option>
                            <option
                              value="sv"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sv.png' class='mr-2'><span>SV</span></div>"
                            ></option>
                            <option
                              value="sy"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sy.png' class='mr-2'><span>SY</span></div>"
                            ></option>
                            <option
                              value="sz"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/sz.png' class='mr-2'><span>SZ</span></div>"
                            ></option>
                            <option
                              value="tc"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tc.png' class='mr-2'><span>TC</span></div>"
                            ></option>
                            <option
                              value="td"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/td.png' class='mr-2'><span>TD</span></div>"
                            ></option>
                            <option
                              value="tf"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tf.png' class='mr-2'><span>TF</span></div>"
                            ></option>
                            <option
                              value="tg"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tg.png' class='mr-2'><span>TG</span></div>"
                            ></option>
                            <option
                              value="th"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/th.png' class='mr-2'><span>TH</span></div>"
                            ></option>
                            <option
                              value="tj"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tj.png' class='mr-2'><span>TJ</span></div>"
                            ></option>
                            <option
                              value="tk"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tk.png' class='mr-2'><span>TK</span></div>"
                            ></option>
                            <option
                              value="tl"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tl.png' class='mr-2'><span>TL</span></div>"
                            ></option>
                            <option
                              value="tm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tm.png' class='mr-2'><span>TM</span></div>"
                            ></option>
                            <option
                              value="tn"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tn.png' class='mr-2'><span>TN</span></div>"
                            ></option>
                            <option
                              value="to"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/to.png' class='mr-2'><span>TO</span></div>"
                            ></option>
                            <option
                              value="tr"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tr.png' class='mr-2'><span>TR</span></div>"
                            ></option>
                            <option
                              value="tt"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tt.png' class='mr-2'><span>TT</span></div>"
                            ></option>
                            <option
                              value="tv"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tv.png' class='mr-2'><span>TV</span></div>"
                            ></option>
                            <option
                              value="tw"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tw.png' class='mr-2'><span>TW</span></div>"
                            ></option>
                            <option
                              value="tz"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/tz.png' class='mr-2'><span>TZ</span></div>"
                            ></option>
                            <option
                              value="ua"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ua.png' class='mr-2'><span>UA</span></div>"
                            ></option>
                            <option
                              value="ug"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ug.png' class='mr-2'><span>UG</span></div>"
                            ></option>
                            <option
                              value="um"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/um.png' class='mr-2'><span>UM</span></div>"
                            ></option>
                            <option
                              value="uy"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/uy.png' class='mr-2'><span>UY</span></div>"
                            ></option>
                            <option
                              value="uz"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/uz.png' class='mr-2'><span>UZ</span></div>"
                            ></option>
                            <option
                              value="va"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/va.png' class='mr-2'><span>VA</span></div>"
                            ></option>
                            <option
                              value="vc"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/vc.png' class='mr-2'><span>VC</span></div>"
                            ></option>
                            <option
                              value="ve"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ve.png' class='mr-2'><span>VE</span></div>"
                            ></option>
                            <option
                              value="vg"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/vg.png' class='mr-2'><span>VG</span></div>"
                            ></option>
                            <option
                              value="vi"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/vi.png' class='mr-2'><span>VI</span></div>"
                            ></option>
                            <option
                              value="vn"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/vn.png' class='mr-2'><span>VN</span></div>"
                            ></option>
                            <option
                              value="vu"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/vu.png' class='mr-2'><span>VU</span></div>"
                            ></option>
                            <option
                              value="wales"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/wales.png' class='mr-2'><span>WALES</span></div>"
                            ></option>
                            <option
                              value="wf"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/wf.png' class='mr-2'><span>WF</span></div>"
                            ></option>
                            <option
                              value="ws"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ws.png' class='mr-2'><span>WS</span></div>"
                            ></option>
                            <option
                              value="ye"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/ye.png' class='mr-2'><span>YE</span></div>"
                            ></option>
                            <option
                              value="yt"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/yt.png' class='mr-2'><span>YT</span></div>"
                            ></option>
                            <option
                              value="za"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/za.png' class='mr-2'><span>ZA</span></div>"
                            ></option>
                            <option
                              value="zm"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/zm.png' class='mr-2'><span>ZM</span></div>"
                            ></option>
                            <option
                              value="zw"
                              data-content="<div class=''><img src='https://weddemoadmin.abaris.in/public/assets/img/flags/zw.png' class='mr-2'><span>ZW</span></div>"
                            ></option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-1"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="EN"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  <div className>
                                    <img
                                      src="https://weddemoadmin.abaris.in/public/assets/img/flags/en.png"
                                      className="mr-2"
                                    />
                                    <span>EN</span>
                                  </div>
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div className="bs-searchbox">
                              <input
                                type="search"
                                className="form-control"
                                autoComplete="off"
                                role="combobox"
                                aria-label="Search"
                                aria-controls="bs-select-1"
                                aria-autocomplete="list"
                              />
                            </div>
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-1"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button type="submit" className="btn btn-sm btn-primary">
                        Save
                      </button>
                    </div>
                  </form>
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
export default Edit;
