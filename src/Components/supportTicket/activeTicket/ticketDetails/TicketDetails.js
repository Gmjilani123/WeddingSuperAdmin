function TicketDetails() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h1 className="mb-0 h6">Ticket Details</h1>
        </div>
        <div className="card-body">
          <div className="form-group mb-3">
            <label htmlFor="subject">
              <b>Subject</b>
            </label>
            <input
              type="text"
              disabled
              className="form-control"
              defaultValue="Cupiditate"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="commission_type">
              <b>Details</b>
            </label>
            <p />
            <p>
              <span
                style={{
                  fontFamily: '"Open Sans", Arial, sans-serif',
                  fontSize: 14,
                  textAlign: "justify",
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </span>
              <br />
            </p>
            <p />
          </div>
        </div>
      </div>
    </>
  );
}
export default TicketDetails;
