import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { KEYS } from "../constants";

toast.configure();
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const emailSchema = Yup.object().shape({
    email: Yup.string().required("Invalid email address"),
  });

  const passwordSchema = Yup.object().shape({
    password: Yup.string().min(6).required("The field is mandatory"),
    confirmPassword: Yup.string()
      .required("The field is mandatory")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both passwords are different"
        ),
      }),
  });

  const users = JSON.parse(localStorage.getItem(KEYS.AVAILABLE_USERS));

  const onEmailSubmit = ({ email }, setSubmitting) => {
    if (!users) {
      setSubmitting(false);
      return setInvalid(true);
    }

    const isExist = users.some((user) => user.email === email);

    if (!isExist) {
      setSubmitting(false);
      return setInvalid(true);
    }

    setSubmitting(false);
    setIsEmailAvailable(true);
  };

  const onPasswordSubmit = (values, setSubmitting) => {
    console.log("password change");

    const newUsers = users.map((user) =>
      user.email === email ? { ...user, password: formData.password } : user
    );

    localStorage.setItem(KEYS.AVAILABLE_USERS, JSON.stringify(newUsers));
    setSubmitting(false);
    toast.success("Password is changed successfully!", { autoClose: 3000 });

    navigate("/login");
  };

  return (
    <Container fluid={true} className="my-5">
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5}>
          <Card>
            <Card.Body className="p-4">
              {!isEmailAvailable ? (
                <Formik
                  initialValues={{ email }}
                  validationSchema={emailSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    onEmailSubmit(values, setSubmitting);
                  }}
                >
                  {({ touched, errors, handleChange, isSubmitting }) => (
                    <Form>
                      <div className="form-group p-2">
                        <label htmlFor="email" className="f14 p-2">
                          Email address
                        </label>
                        <Field
                          type="email"
                          name="email"
                          aria-describedby="emailHelp"
                          value={email}
                          placeholder="Enter your email"
                          onChange={(e) => {
                            handleChange(e);
                            setEmail(e.target.value);
                          }}
                          className={`form-control ${
                            (touched.email && errors.email) || invalid
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {invalid && (
                          <p style={{ color: "red" }}>
                            No account was found for this email addres.
                          </p>
                        )}
                      </div>

                      <div className="form-group p-2 text-end">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Please wait..." : "Submit"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              ) : (
                <Formik
                  initialValues={formData}
                  validationSchema={passwordSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    onPasswordSubmit(values, setSubmitting);
                  }}
                >
                  {({ touched, errors, handleChange, isSubmitting }) => (
                    <Form>
                      <div className="form-group p-2">
                        <label htmlFor="password">New password</label>
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
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group p-2">
                        <label htmlFor="confirmPassword">
                          Confirm new password
                        </label>
                        <Field
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          placeholder="Enter your password"
                          onChange={(e) => {
                            handleChange(e);
                            setFormData({
                              ...formData,
                              confirmPassword: e.target.value,
                            });
                          }}
                          className={`f14 form-control ${
                            touched.confirmPassword && errors.confirmPassword
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="confirmPassword"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group p-2 text-end">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={
                            isSubmitting ||
                            !formData.password ||
                            formData.password !== formData.confirmPassword
                          }
                        >
                          {isSubmitting ? "Please wait..." : "Submit"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
