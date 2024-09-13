import React, { useState } from 'react'
import ReactQuill from 'react-quill'

function EmailTemplateTabSec({ data }) {
    const [body,setBody] = useState("")
 const handleBody = (e) => {
  setBody(e)
 }
    return (
        <>
            <div className="tab-pane fade active show" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-tab-1">
                <form action="https://demo.activeitzone.com/matrimonial/admin/email-templates/update" method="POST">
                    <input type="hidden" name="_token" defaultValue="omgLOCfi3vmA1GxLf0QEOgYkO22DXGNFleeqpcfS" />                                          
                      <input type="hidden" name="identifier" defaultValue="account_oppening_email" />
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
                        <label className="col-md-2 col-form-label">Subject</label>
                        <div className="col-md-10">
                            <input type="text" name="subject" defaultValue={data} className="form-control" placeholder="Subject" required fdprocessedid="sc2kzd" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-2 col-form-label">Email Body</label>
                        <div className="col-md-10">
                        <ReactQuill
    placeholder='write something amazing...'
    modules={EmailTemplateTabSec.modules}
    formats={EmailTemplateTabSec.formats}
    onChange={handleBody}
    value={body}
    />
                            {/* <textarea name="body" className="form-control aiz-text-editor" data-buttons="[[&quot;font&quot;, [&quot;bold&quot;, &quot;underline&quot;, &quot;italic&quot;]],[&quot;para&quot;, [&quot;ul&quot;, &quot;ol&quot;]],[&quot;view&quot;, [&quot;undo&quot;,&quot;redo&quot;]]]" placeholder="Type.." data-min-height={300} required style={{ display: 'none' }} defaultValue={''} />
                            <div className="note-editor note-frame card">
                                <div className="note-dropzone">
                                    <div className="note-dropzone-message" />
                                </div>
                                <div className="note-toolbar card-header" role="toolbar"><div className="note-btn-group btn-group note-font">
                                    <button type="button" className="note-btn btn btn-light btn-sm note-btn-bold" tabIndex={-1} title aria-label="Bold (CTRL+B)" data-original-title="Bold (CTRL+B)"><i className="note-icon-bold" /></button>
                                    <button type="button" className="note-btn btn btn-light btn-sm note-btn-underline" tabIndex={-1} title aria-label="Underline (CTRL+U)" data-original-title="Underline (CTRL+U)"><i className="note-icon-underline" /></button>
                                    <button type="button" className="note-btn btn btn-light btn-sm note-btn-italic" tabIndex={-1} title aria-label="Italic (CTRL+I)" data-original-title="Italic (CTRL+I)"><i className="note-icon-italic" /></button>
                                </div>
                                    <div className="note-btn-group btn-group note-para">
                                        <button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Unordered list (CTRL+SHIFT+NUM7)" data-original-title="Unordered list (CTRL+SHIFT+NUM7)"><i className="note-icon-unorderedlist" /></button>
                                        <button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Ordered list (CTRL+SHIFT+NUM8)" data-original-title="Ordered list (CTRL+SHIFT+NUM8)"><i className="note-icon-orderedlist" /></button>
                                    </div>
                                    <div className="note-btn-group btn-group note-view"><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Undo (CTRL+Z)" data-original-title="Undo (CTRL+Z)"><i className="note-icon-undo" /></button><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Redo (CTRL+Y)" data-original-title="Redo (CTRL+Y)"><i className="note-icon-redo" /></button>
                                    </div>
                                </div>
                                <div className="note-editing-area">
                                    <div className="note-placeholder" style={{ display: 'none' }}>Type..</div>
                                    <div className="note-handle">
                                        <div className="note-control-selection" style={{ display: 'none' }}><div className="note-control-selection-bg" /><div className="note-control-holder note-control-nw" /><div className="note-control-holder note-control-ne" /><div className="note-control-holder note-control-sw" />
                                            <div className="note-control-sizing note-control-se" /><div className="note-control-selection-info" />
                                        </div>
                                    </div>
                                    <textarea className="note-codable" aria-multiline="true" defaultValue={""} />
                                    <div className="note-editable card-block" contentEditable="true" role="textbox" aria-multiline="true" spellCheck="true" autoCorrect="true" style={{ height: 300 }}><p>Hi [[name]],
                                    </p><p>Thank you for registering at our site:&nbsp;[[sitename]].
                                        </p><p>Your account type is : [[account_type]]
                                        </p><p>Email is: [[email]]
                                        </p><p>Password is : [[password]]
                                        </p><p>You will be able to log in from here : [[url]]
                                        </p><p>Please contact the&nbsp;administration&nbsp;team if you have any further questions. Best wishes.
                                        </p><p>Thanks,
                                        </p><p>[[from]]</p>
                                    </div>
                                </div>
                                <output className="note-status-output" role="status" aria-live="polite" />
                                <div className="note-statusbar" role="status">
                                    <output className="note-status-output" aria-live="polite" />
                                    <div className="note-resizebar" aria-label="Resize"><div className="note-icon-bar" /><div className="note-icon-bar" /><div className="note-icon-bar" />
                                    </div>
                                </div>
                            </div>
                            <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small> */}
                        </div>
                    </div>
                    <div className="form-group mb-3 text-right">
                        <button type="submit" className="btn btn-primary" fdprocessedid="jf028">Update Settings</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EmailTemplateTabSec