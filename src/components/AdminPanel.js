import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { KEYS } from "../constants";
import Select from "./StatusSelect";

const AdminPanel = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(KEYS.APPLICATIONS));

    if (data) {
      setApplications(data);
    }
  }, []);

  const handleChange = (status, id) => {
    const applicationsList = JSON.parse(
      localStorage.getItem(KEYS.APPLICATIONS)
    );

    const application = applicationsList.find((app) => app.id === id);

    if (!application) return;

    const updatedApplications = applicationsList.map((each) =>
      each.id === id ? { ...each, status } : each
    );

    localStorage.setItem(
      KEYS.APPLICATIONS,
      JSON.stringify(updatedApplications)
    );
  };

  return (
    <Container fluid={false} className="my-5">
      <h5 className="p-2 text-maroon">Applications</h5>
      <Row className="justify-content-center">
        <Col>
          {applications.length ? (
            <Table responsive striped bordered hover className="apps">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>D.O.B.</th>
                  <th>Phone</th>
                  <th>10th Board</th>
                  <th>10th College</th>
                  <th>10th Percentage</th>
                  <th>10th Passing Year</th>
                  <th>12th Board</th>
                  <th>12th College</th>
                  <th>12th Percentage</th>
                  <th>12th Passing Year</th>
                  <th>University</th>
                  <th>Applied College</th>
                  <th>Applied Course</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <tr key={app.id}>
                    <td>{index + 1}</td>
                    <td>{app.name}</td>
                    <td>{app.email}</td>
                    <td>{app.dob || "-"}</td>
                    <td>{app.phone || "-"}</td>
                    <td>{app.tenthBoard}</td>
                    <td>{app.tenthCollege}</td>
                    <td>{`${app.tenthPercentage}%`}</td>
                    <td>{app.tenthPassoutYear}</td>
                    <td>{app.twelthBoard}</td>
                    <td>{app.twelthCollege}</td>
                    <td>{`${app.twelthPercentage}%`}</td>
                    <td>{app.twelthPassoutYear}</td>
                    <td>{app.university.split("/")[0]}</td>
                    <td>{app.college.split("/")[0]}</td>
                    <td>{app.course}</td>
                    <td>{app.date}</td>
                    <td>
                      <Select
                        value={app.status}
                        handleStatusChange={(status) =>
                          handleChange(status, app.id)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Card className="text-center">
              <Card.Body>
                <h5>No Applications</h5>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
