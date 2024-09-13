import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import * as yup from 'yup';

function AddNewStaffs() {
  const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    role: '',
  });

  const [errors, setErrors] = useState({});

  const validationSchema = yup.object().shape({
    first_name: yup.string().required('First Name is required!'),
    last_name: yup.string().required('Laast Name Code is required!'),
    email: yup.string().required('Country Code is required!'),
    phone: yup.string().required('Phone is required!'),
    password: yup.string().required('Password is required!'),
    role: yup.string().required('Role is required!'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      console.log('Form Submitted:', formValues);
      // Submit formValues to the server or handle it as needed
    }
  };

  const handleReset = () => {
    setFormValues({
      lang: '',
      short_code: '',
      country_code: '',
      slug: '',
      role: '',
    });
    setErrors({});
  };

  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="col-lg-8 mx-auto">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Staff Information</h5>
            </div>
            <div className="card-body">
              <Form className='form-horizontal' onSubmit={handleSubmit}>
                <div className="row">

                  <div>
                    <Form.Group controlId="formLang" className="form-group row">
                      <Form.Label className="col-md-2 col-form-label">First Name<span className="text-danger">*</span></Form.Label>
                      <div className="col-md-9">
                        <Form.Control
                          type="text"
                          name="first_name"
                          placeholder="Enter firsrt name"
                          value={formValues.first_name}
                          onChange={handleChange}
                          isInvalid={!!errors.first_name}
                        />
                      </div>
                      <Form.Control.Feedback type="invalid">
                        {errors.first_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div>
                    <Form.Group controlId="formShortCode" className="form-group row">
                      <Form.Label className="col-md-2 col-form-label">Last Name<span className="text-danger">*</span></Form.Label>
                      <div className="col-md-9">
                        <Form.Control
                          type="text"
                          name="last_name"
                          placeholder="Enter last name"
                          value={formValues.last_name}
                          onChange={handleChange}
                          isInvalid={!!errors.last_name}
                        />
                      </div>
                      <Form.Control.Feedback type="invalid">
                        {errors.last_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div>
                    <Form.Group controlId="formCountryCode" className="form-group row">
                      <Form.Label className="col-md-2 col-form-label">Email<span className="text-danger">*</span></Form.Label>
                      <div className="col-md-9">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          value={formValues.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                      </div>
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div>
                    <Form.Group controlId="formSlug" className="form-group row">
                      <Form.Label className="col-md-2 col-form-label">Phone<span className="text-danger">*</span></Form.Label>
                      <div className="col-md-9">
                        <Form.Control
                          type="number"
                          name="phone"
                          placeholder="Enter phone"
                          value={formValues.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                        />
                      </div>
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div>
                    <Form.Group controlId="formSlug" className="form-group row">
                      <Form.Label className="col-md-2 col-form-label">Password<span className="text-danger">*</span></Form.Label>
                      <div className="col-md-9">
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          value={formValues.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                        />
                      </div>
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div>
                    <Form.Group controlId="formSlug" className="form-group row">
                      <Form.Label className="col-md-2 col-form-label">Role<span className="text-danger">*</span></Form.Label>
                      <div className="col-md-9">
                        <Form.Select className='form-control' aria-label="Default select example"
                          name="role"
                          placeholder="Enter role"
                          value={formValues.role}
                          onChange={handleChange}
                          isInvalid={!!errors.role}>
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </div>
                      <Form.Control.Feedback type="invalid">
                        {errors.role}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>


                  <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                    <Button type="submit" className="btn btn-primary" style={{ marginRight: "10px" }}>
                      Save
                    </Button>
                    <Button type="button" className="btn btn-danger" onClick={handleReset}>
                      Reset
                    </Button>
                  </div>
                </div>
              </Form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewStaffs;