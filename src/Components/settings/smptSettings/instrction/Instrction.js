

function Instruction() {
    return (
        <>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Instruction</h5>
          </div>
          <div className="card-body">
            <p className="text-danger">Please be carefull when you are configuring SMTP. For incorrect configuration you will get error at the time of order place, new registration, sending newsletter.</p>
            <h6 className="text-muted">For Non-SSL</h6>
            <ul className="list-group">
              <li className="list-group-item text-dark">Select sendmail for Mail Driver if you face any issue after configuring smtp as Mail Driver </li>
              <li className="list-group-item text-dark">Set Mail Host according to your server Mail Client Manual Settings</li>
              <li className="list-group-item text-dark">Set Mail port as 587</li>
              <li className="list-group-item text-dark">Set Mail Encryption as ssl if you face issue with tls</li>
            </ul>
            <br />
            <h6 className="text-muted">For SSL</h6>
            <ul className="list-group mar-no">
              <li className="list-group-item text-dark">Select sendmail for Mail Driver if you face any issue after configuring smtp as Mail Driver</li>
              <li className="list-group-item text-dark">Set Mail Host according to your server Mail Client Manual Settings</li>
              <li className="list-group-item text-dark">Set Mail port as 465</li>
              <li className="list-group-item text-dark">Set Mail Encryption as ssl</li>
            </ul>
          </div>
        </div>
        </>
    )
}
export default Instruction