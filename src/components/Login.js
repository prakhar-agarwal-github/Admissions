import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
import * as Yup from "yup";
import { KEYS } from "../constants";

toast.configure();

const Login = () => {
  const [invalid, setInvalid] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  const onSubmit = async (values, setSubmitting) => {
    const { email, password } = values;
    const users = JSON.parse(localStorage.getItem(KEYS.AVAILABLE_USERS));

    if (!users) {
      setInvalid(true);
      return setSubmitting(false);
    }

    const user = users.find(
      (each) => each.email === email && each.password === password
    );

    if (!user) {
      setInvalid(true);
      return setSubmitting(false);
    }

    setInvalid(false);

    const { id, name, userRole } = user;

    localStorage.setItem(
      KEYS.CURRENT_USER,
      JSON.stringify({ id, name, email, userRole })
    );

    setSubmitting(false);
    navigate("/");
  };

  return (
    <Container fluid={true} className="my-5 h-100">
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5}>
          <Card className="shadow-2-strong login-card">
            <Card.Body className="p-4">
              <div>
                <h4>Login</h4>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={LoginSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    onSubmit(values, setSubmitting);
                  }}
                >
                  {({ touched, errors, handleChange, isSubmitting }) => (
                    <Form>
                      <div className="form-group p-2">
                        <label htmlFor="email">Email address</label>
                        <Field
                          type="email"
                          name="email"
                          aria-describedby="emailHelp"
                          value={formData.email}
                          placeholder="Enter your email"
                          onChange={(e) => {
                            handleChange(e);
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            });
                          }}
                          className={`form-control ${
                            (touched.email && errors.email) || invalid
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                      </div>

                      <div className="form-group p-2">
                        <div className="row">
                          <div className="col-6">
                            <label htmlFor="password">Password</label>
                          </div>
                        </div>

                        <Field
                          type="password"
                          name="password"
                          value={formData.password}
                          placeholder="Enter your password"
                          onChange={(e) => {
                            handleChange(e);
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            });
                          }}
                          className={`f14 form-control ${
                            (touched.password && errors.password) || invalid
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {invalid && (
                          <p style={{ color: "red" }}>
                            Incorrect email address or password.
                          </p>
                        )}
                      </div>
                      <div className="text-center p-2">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 btn-block"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Please wait..." : "Login"}
                        </button>
                      </div>

                      <div className="p-2 text-center">
                        <Link to="/forgotpassword">Forgot your password?</Link>
                      </div>
                      <div className="text-center p-2">
                        <label className="f14">New to Admissions? </label>{" "}
                        <Link to="/signup">Create an account</Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
