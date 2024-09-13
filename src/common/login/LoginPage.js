import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { toastErrorMessage, toastSuccessMessage } from '../tostShow/TostShow';
import { loginn } from '../../api/Api';
import { ToastContainer } from 'react-toastify';

function LoginPage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const [initialValue, setInitialValue] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState({})

    // console.log(error);


    const validation = (formData) => {
        const errorDta = {}
        if (!formData?.email) {
            errorDta.email = 'Email is Required !'
        }
        if (!formData?.password) {
            errorDta.password = 'Password is Required !'
        }
        setError(errorDta)
        return errorDta
    }

    const changeHandle = (e) => {
        const clone = { ...initialValue };
        const name = e.target.name;
        const value = e.target.value;
        clone[name] = value;
        setInitialValue(clone);
    }

    const submitData = async () => {
        const validateResult = validation(initialValue)
        if (Object.keys(validateResult).length) {
            return
        }

        try {
            setLoading(true);
            const res = await loginn(initialValue);
            setLoading(false);
            console.log('SubmitResponse:', res);
            if (res?.error === false) {
                window.localStorage.setItem('userToken', res?.token)
                toastSuccessMessage(res?.message)
                setTimeout(() => {
                    navigate('/admin')
                }, 2000)
            } else {
                toastErrorMessage(res?.message);
                setLoading(false);
            }
        } catch (error) {
            toastErrorMessage(error?.message);
            setLoading(false);
        }
    }


    return (
        <div className="registrationDetail"
            style={{ backgroundColor: '#9013FE' }}
        >
            {loading && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            <div className="container">
                <div className="registrationInfo">

                    <div className="registerForm">
                        <h4 className="mb-4">Login To Your Account</h4>

                        <form action="">
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="appointmentDate"
                                    className="mb-3"
                                >
                                    <Form.Label>Email <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        // required
                                        name='email'
                                        value={initialValue?.email}
                                        onChange={changeHandle}
                                    />

                                    {error?.email && <p style={{ color: 'red', margin: '0px' }}>
                                        {error?.email}
                                    </p>}

                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="appointmentDate"
                                    className="mb-3"
                                >
                                    <Form.Label>Password <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        name='password'
                                        value={initialValue?.password}
                                        onChange={changeHandle}
                                    />
                                    {error?.password && <p style={{ color: 'red', margin: '0px' }}>
                                        {error?.password}
                                    </p>}
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="appointmentDate"
                                    className="mb-3"
                                >
                                    <Button type="button" onClick={submitData} className="btn btn-primary createAccount">
                                        Login
                                    </Button>
                                </Form.Group>

                            </Row>
                        </form>


                        {/* <div className="joinWith">
                            <span>or login with</span>
                        </div>
                        <div className="connectWith">
                            <ul>
                                <li>
                                    <a href="https://mmslfashions.in/" className="facebook">
                                        <FaFacebookF />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://mmslfashions.in/" className="twitter">
                                        <BsTwitter />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://mmslfashions.in/" className="google">
                                        <AiOutlineGoogle />
                                    </a>
                                </li>
                            </ul>
                        </div> */}

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    )
}

export default LoginPage