import React, { useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { Card, Col, Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { KEYS, ROLES } from "../constants";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

toast.configure();
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userRole: ROLES.STUDENT,
  });

  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required("The field is mandatory")
      .min(3, "Name must be at-least 3 characters long"),
    email: Yup.string().required("Invalid email address"),
    password: Yup.string()
      .required("The field is mandatory")
      .min(6, "Password must be greater than 6 characters"),
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

  const onSubmit = (values, setSubmitting) => {
    try {
      const student = { ...values, id: uuidv4() };

      delete student.confirmPassword;

      const users = JSON.parse(localStorage.getItem(KEYS.AVAILABLE_USERS));

      if (!users)
        localStorage.setItem(KEYS.AVAILABLE_USERS, JSON.stringify([student]));
      else {
        const isAlreadyExist = users.some(
          (user) => user.email === student.email
        );

        if (isAlreadyExist) {
          setSubmitting(false);

          return toast.error(
            "A User already exist with the same email address. ",
            { autoClose: 3000 }
          );
        }

        localStorage.setItem(
          KEYS.AVAILABLE_USERS,
          JSON.stringify([...users, student])
        );
      }

      const { id, name, email, userRole } = student;

      localStorage.setItem(
        KEYS.CURRENT_USER,
        JSON.stringify({ id, name, email, userRole })
      );
      setSubmitting(false);
      navigate("/");
    } catch (err) {
      setSubmitting(false);
      toast.error(err.message, { autoClose: 3000 });
    }
  };

  return (
    <Container fluid={false} className="my-5 h-100">
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5}>
          <Card>
            <Card.Body className="p-4 ">
              <div>
                <h4 className="f22">Signup</h4>
                <Formik
                  initialValues={formData}
                  validationSchema={SignupSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    onSubmit(values, setSubmitting);
                  }}
                >
                  {({ touched, errors, handleChange, isSubmitting }) => (
                    <Form>
                      <div className="form-group p-2"></div>
                      <div className="form-group p-2">
                        <label htmlFor="name" className="f14">
                          Full Name*
                        </label>
                        <Field
                          name="name"
                          value={formData.name}
                          placeholder="Enter your full name"
                          onChange={(e) => {
                            handleChange(e);
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            });
                          }}
                          className={`f14 form-control ${
                            touched.name && errors.name ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="name"
                          className="invalid-feedback text-end"
                        />
                      </div>
                      <div className="form-group p-2">
                        <label htmlFor="email" className="f14">
                          Email Address*
                        </label>
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
                          className={`f14 form-control ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback text-end"
                        />
                      </div>
                      <Row className="form-group p-2">
                        <Col className="form-group p-2">
                          <label htmlFor="password">Password*</label>
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
                            className="invalid-feedback text-end"
                          />
                        </Col>
                        <Col className="form-group p-2">
                          <label htmlFor="confirmPassword" className="f14">
                            Confirm Password*
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
                            className="invalid-feedback text-end"
                          />
                        </Col>
                      </Row>
                      <div className="text-center p-2 ">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 btn-block"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Please wait..." : "Signup"}
                        </button>
                      </div>
                      <div className="text-center p-2 ">
                        <label className="f14">Have an account?</label>{" "}
                        <Link to="/login">Login</Link>
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

export default SignUp;
