import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Universities, Colleges } from "../data";
import { KEYS, STATUS } from "../constants";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

toast.configure();
const NewApplication = () => {
  const [formData, setFormData] = useState({
    // Personal Details
    name: "",
    email: "",
    phone: "",
    dob: "",

    // Acedemic Details
    // 10th
    tenthBoard: "",
    tenthCollege: "",
    tenthPercentage: "",
    tenthPassoutYear: "",

    // 12th
    twelthBoard: "",
    twelthCollege: "",
    twelthPercentage: "",
    twelthPassoutYear: "",
    //   Admission Details
    university: "",
    college: "",
    course: "",
  });

  const [colleges, setColleges] = useState([]);
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    //* Personal
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Invalid email address"),
    //* Academic
    // 10th
    tenthBoard: Yup.string().required("Board is required"),
    tenthCollege: Yup.string().required("College is required"),
    tenthPercentage: Yup.string().required("Percentage is required"),

    // 12th
    twelthBoard: Yup.string().required("Board is required"),
    twelthCollege: Yup.string().required("College is required"),
    twelthPercentage: Yup.string().required("Percentage is required"),
    //* Admission
    university: Yup.string().required("University is required"),
    college: Yup.string().required("College is required"),
    course: Yup.string().required("Course is required"),
  });

  const re = /^[0-9]*\.?[0-9]*$/; //regex to allow only numeric values

  const handleSubmit = (values, setSubmitting) => {
    const currentUser = JSON.parse(localStorage.getItem(KEYS.CURRENT_USER));

    const application = {
      ...values,
      id: uuidv4(),
      studentId: currentUser.id,
      status: STATUS.PENDING,
      date: new Date().toLocaleDateString(),
    };

    const applications = JSON.parse(localStorage.getItem(KEYS.APPLICATIONS));

    localStorage.setItem(
      KEYS.APPLICATIONS,
      applications
        ? JSON.stringify([...applications, application])
        : JSON.stringify([application])
    );

    setSubmitting(false);
    toast.success("Application is submitted successfully!", {
      autoClose: 3000,
    });
    navigate("/applications");
  };

  return (
    <Container fluid={true} className="my-5 p-82">
      <h5 className="p-2 text-maroon">Apply for a new application</h5>
      <Row className="justify-content-center">
        <Col>
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values, setSubmitting);
            }}
          >
            {({
              touched,
              errors,
              handleChange,
              isSubmitting,
              setFieldValue,
              setFieldTouched,
            }) => (
              <Form>
                <Card>
                  <Card.Body className="p-4">
                    <Card.Header>Personal or basic info</Card.Header>
                    <Row>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="name" className="p-2">
                            Full Name*
                          </label>
                          <Field
                            name="name"
                            value={formData.name}
                            placeholder="Enter full name"
                            onChange={(e) => {
                              handleChange(e);
                              setFormData({
                                ...formData,
                                name: e.target.value,
                              });
                            }}
                            className={`form-control ${
                              touched.name && errors.name ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="name"
                            className="invalid-feedback text-end"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="email" className="p-2">
                            Email*
                          </label>
                          <Field
                            type="email"
                            name="email"
                            aria-describedby="emailHelp"
                            value={formData.email}
                            placeholder="Enter email"
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
                      </Col>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="phone" className="p-2">
                            Phone
                          </label>
                          <Field
                            name="phone"
                            value={formData.phone}
                            type="number"
                            placeholder="Enter phone no."
                            onChange={(e) => {
                              handleChange(e);
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              });
                            }}
                            className="form-control"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="dob" className="p-2">
                            D.O.B.
                          </label>
                          <Field
                            name="dob"
                            value={formData.dob}
                            placeholder="Enter date of birth"
                            type="date"
                            onChange={(e) => {
                              handleChange(e);
                              setFormData({
                                ...formData,
                                dob: e.target.value,
                              });
                            }}
                            className="form-control"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                {/* Academic details */}
                <Card className="mt-3">
                  <Card.Body className="p-4">
                    <Card.Header>Academic details</Card.Header>
                    <Row>
                      <h6 className="p-12-rt form-group">10th</h6>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="tenthBoard" className="p-2">
                            Board
                          </label>
                          <Field
                            name="tenthBoard"
                            value={formData.tenthBoard}
                            placeholder="Enter board name"
                            onChange={(e) => {
                              handleChange(e);
                              setFormData({
                                ...formData,
                                tenthBoard: e.target.value,
                              });
                            }}
                            className={`form-control ${
                              touched.tenthBoard && errors.tenthBoard
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="tenthBoard"
                            className="invalid-feedback text-end"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="tenthCollege" className="p-2">
                            College
                          </label>
                          <Field
                            name="tenthCollege"
                            value={formData.tenthCollege}
                            placeholder="Enter college name"
                            onChange={(e) => {
                              handleChange(e);
                              setFormData({
                                ...formData,
                                tenthCollege: e.target.value,
                              });
                            }}
                            className={`f14 form-control ${
                              touched.tenthCollege && errors.tenthCollege
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="tenthCollege"
                            className="invalid-feedback text-end"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="tenthPercentage" className="p-2">
                            Percentage
                          </label>
                          <Field
                            name="tenthPercentage"
                            value={formData.tenthPercentage}
                            placeholder="Enter percentage"
                            onChange={(e) => {
                              if (
                                e.target.value !== "" &&
                                !re.test(e.target.value)
                              )
                                return;
                              handleChange(e);
                              setFormData({
                                ...formData,
                                tenthPercentage: e.target.value,
                              });
                            }}
                            className={`form-control ${
                              touched.tenthPercentage && errors.tenthPercentage
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="tenthPercentage"
                            className="invalid-feedback text-end"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="tenthPassoutYear" className="p-2">
                            Passing year
                          </label>
                          <Field
                            name="tenthPassoutYear"
                            value={formData.tenthPassoutYear}
                            type="number"
                            placeholder="Enter passing year"
                            onChange={(e) => {
                              handleChange(e);
                              setFormData({
                                ...formData,
                                tenthPassoutYear: e.target.value,
                              });
                            }}
                            className="form-control"
                          />
                        </div>
                      </Col>
                    </Row>
                    {/* 12th */}
                    <Row>
                      <h6 className="p-12-rt form-group">12th</h6>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="twelthBoard" className="p-2">
                            Board
                          </label>
                          <Field
                            name="twelthBoard"
                            value={formData.twelthBoard}
                            placeholder="Enter board name"
                            onChange={(e) => {
                              handleChange(e);
                              setFormData({
                                ...formData,
                                twelthBoard: e.target.value,
                              });
                            }}
                            className={`form-control ${
                              touched.twelthBoard && errors.twelthBoard
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="twelthBoard"
                            className="invalid-feedback text-end"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="twelthCollege" className="p-2">
                            College
                          </label>
                          <Field
                            name="twelthCollege"
                            value={formData.twelthCollege}
                            placeholder="Enter college name"
                            onChange={(e) => {
                              handleChange(e);
                              setFormData({
                                ...formData,
                                twelthCollege: e.target.value,
                              });
                            }}
                            className={`form-control ${
                              touched.twelthCollege && errors.twelthCollege
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="twelthCollege"
                            className="invalid-feedback text-end"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="twelthPercentage" className="p-2">
                            Percentage
                          </label>
                          <Field
                            name="twelthPercentage"
                            value={formData.twelthPercentage}
                            placeholder="Enter percentage"
                            onChange={(e) => {
                              if (
                                e.target.value !== "" &&
                                !re.test(e.target.value)
                              )
                                return;
                              handleChange(e);
                              setFormData({
                                ...formData,
                                twelthPercentage: e.target.value,
                              });
                            }}
                            className={`form-control ${
                              touched.twelthPercentage &&
                              errors.twelthPercentage
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="twelthPercentage"
                            className="invalid-feedback text-end"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="twelthPassoutYear" className="p-2">
                            Passing year
                          </label>
                          <Field
                            name="twelthPassoutYear"
                            value={formData.twelthPassoutYear}
                            placeholder="Enter passing year"
                            type="number"
                            onChange={(e) => {
                              handleChange(e);
                              setFormData({
                                ...formData,
                                twelthPassoutYear: e.target.value,
                              });
                            }}
                            className="form-control"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                {/* Admission Details */}
                <Card className="mt-3">
                  <Card.Body className="p-4">
                    <Card.Header>Admission Details</Card.Header>
                    <Row>
                      <Col>
                        {/* University */}
                        <div className="form-group p-2">
                          <label htmlFor="university" className="p-2">
                            University*
                          </label>
                          <select
                            name="university"
                            value={formData.university}
                            onChange={(e) => {
                              handleChange(e);
                              setFieldValue("college", "");
                              setFieldValue("course", "");
                              setTimeout(() =>
                                setFieldTouched("college", true)
                              );
                              setTimeout(() => setFieldTouched("course", true));
                              setFormData({
                                ...formData,
                                college: "",
                                course: "",
                                university: e.target.value,
                              });

                              setColleges(
                                Colleges.filter(
                                  (each) =>
                                    `${each.uniCode}` ===
                                    e.target.value.split("/")[1]
                                )
                              );

                              setCourses([]);
                            }}
                            className={` form-select form-control ${
                              touched.university && errors.university
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option value="">Select University</option>
                            {Universities.map((u) => (
                              <option
                                key={u.code}
                                value={`${u.name}/${u.code}`}
                              >
                                {u.name}
                              </option>
                            ))}
                          </select>
                          <ErrorMessage
                            component="div"
                            name="university"
                            className="invalid-feedback"
                          />
                        </div>
                      </Col>
                      {/* College */}
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="college" className="p-2">
                            College*
                          </label>
                          <select
                            name="college"
                            value={formData.college}
                            onChange={(e) => {
                              handleChange(e);
                              setFieldValue("course", "");
                              setTimeout(() => setFieldTouched("course", true));
                              setFormData({
                                ...formData,
                                course: "",
                                college: e.target.value,
                              });

                              const clg = Colleges.find(
                                (clg) =>
                                  `${clg.code}` === e.target.value.split("/")[1]
                              );

                              if (clg) {
                                setCourses(clg.courses);
                              }
                            }}
                            className={`form-select form-control ${
                              touched.college && errors.college
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option value="">Select College</option>
                            {colleges.map((c) => (
                              <option
                                key={c.code}
                                value={`${c.name}/${c.code}`}
                              >
                                {c.name}
                              </option>
                            ))}
                          </select>
                          <ErrorMessage
                            component="div"
                            name="college"
                            className="invalid-feedback"
                          />
                        </div>
                      </Col>
                      {/* Courses */}
                      <Col>
                        <div className="form-group p-2">
                          <label htmlFor="course" className="p-2">
                            Course*
                          </label>
                          <select
                            name="course"
                            value={formData.course}
                            onChange={(e) => {
                              handleChange(e);
                              setFormData({
                                ...formData,
                                course: e.target.value,
                              });
                            }}
                            className={`form-select form-control ${
                              touched.course && errors.course
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option value="">Select Course</option>
                            {courses.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                          <ErrorMessage
                            component="div"
                            name="course"
                            className="invalid-feedback"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Row>
                  <Col className="form-group p-3 text-end">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : "Submit"}
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default NewApplication;
