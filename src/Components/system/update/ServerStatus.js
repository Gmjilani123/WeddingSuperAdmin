import React from 'react'

function ServerStatus() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-10 col-xxl-8 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="h6 mb-0">Server information</h3>
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped aiz-table footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th className="footable-first-visible" style={{ display: 'table-cell' }}>Name</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Current Version</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Required Version</th><th className="footable-last-visible" style={{ display: 'table-cell' }}>Status</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>Php versions</td><td style={{ display: 'table-cell' }}>7.4.26</td><td style={{ display: 'table-cell' }}>7.3 or 7.4</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <i className="las la-check text-success" />
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>MySQL</td><td style={{ display: 'table-cell' }}>
                                                    10.1.48-MariaDB
                                                </td><td style={{ display: 'table-cell' }}>5.6+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <i className="las la-check text-success" />
                                                </td></tr></tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="h6 mb-0">php.ini Config</h3>
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped aiz-table footable footable-2 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th className="footable-first-visible" style={{ display: 'table-cell' }}>Config Name</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Current</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Recommended</th><th className="footable-last-visible" style={{ display: 'table-cell' }}>Status</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>file_uploads</td><td style={{ display: 'table-cell' }}>
                                                    On
                                                </td><td style={{ display: 'table-cell' }}>On</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <i className="las la-check text-success" />
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>max_file_uploads</td><td style={{ display: 'table-cell' }}>
                                                    20
                                                </td><td style={{ display: 'table-cell' }}>20+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <i className="las la-check text-success" />
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>upload_max_filesize</td><td style={{ display: 'table-cell' }}>
                                                    128M
                                                </td><td style={{ display: 'table-cell' }}>128M+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <i className="las la-check text-success" />
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>post_max_size</td><td style={{ display: 'table-cell' }}>
                                                    128M
                                                </td><td style={{ display: 'table-cell' }}>128M+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <i className="las la-check text-success" />
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>allow_url_fopen</td><td style={{ display: 'table-cell' }}>
                                                    On
                                                </td><td style={{ display: 'table-cell' }}>On</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <i className="las la-check text-success" />
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>max_execution_time</td><td style={{ display: 'table-cell' }}>
                                                    600
                                                </td><td style={{ display: 'table-cell' }}>120+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <i className="las la-check text-success" />
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>max_input_time</td><td style={{ display: 'table-cell' }}>
                                                    120
                                                </td><td style={{ display: 'table-cell' }}>120+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <i className="las la-check text-success" />
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>max_input_vars</td><td style={{ display: 'table-cell' }}>
                                                    1000
                                                </td><td style={{ display: 'table-cell' }}>1000+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <i className="las la-check text-success" />
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>memory_limit</td><td style={{ display: 'table-cell' }}>
                                                    256M
                                                </td><td style={{ display: 'table-cell' }}>256M+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <i className="las la-check text-success" />
                                                </td></tr></tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="h6 mb-0">Extensions information</h3>
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Extension Name</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>bcmath</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>ctype</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>json</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>mbstring</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>zip</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>zlib</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>openssl</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>tokenizer</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>xml</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>dom</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>curl</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>fileinfo</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>gd</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>pdo_mysql</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="h6 mb-0">Filesystem Permissions</h3>
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>File or Folder</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>.env</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>public</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>app/Providers</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>app/Http/Controllers</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>storage</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>resources/views</td>
                                                <td>
                                                    <i className="las la-check text-success" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServerStatus