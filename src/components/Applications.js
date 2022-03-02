import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { KEYS } from "../constants";

// college: "Aryabhatta College. Anand Niketan/202"
// course: "B.Tech"
// date: "01/03/2022"
// dob: "1997-01-29"
// email: "prakhar.agarwal@bluepi.in"
// id: "b9fd9190-6e78-4a2b-b886-4c2797dce70e"
// name: "Prakhar Agarwal"
// phone: 9991119284
// status: "PENDING"
// studentId: "7634a880-d32c-47f8-81d8-48f0ec264eff"
// tenthBoard: "UP Board"
// tenthCollege: "RKSVM Inter college"
// tenthPassoutYear: "2012"
// tenthPercentage: "84"
// twelthBoard: "UP Board"
// twelthCollege: "SM Inter College"
// twelthPassoutYear: "2014"
// twelthPercentage: "75.2"
// university: "Delhi University/101"
const Applications = () => {
  const [myApplications, setMyApplications] = useState([]);

  useEffect(() => {
    const applications = JSON.parse(localStorage.getItem(KEYS.APPLICATIONS));
    const currentUser = JSON.parse(localStorage.getItem(KEYS.CURRENT_USER));

    if (applications && currentUser) {
      const data = applications.filter(
        (app) => app.studentId === currentUser.id
      );

      setMyApplications(data);
    }
  }, []);

  return (
    <Container fluid={false} className="my-5">
      <h5 className="p-2 text-maroon">My Applications</h5>
      <Row className="justify-content-center">
        <Col>
          {myApplications.length ? (
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>University</th>
                  <th>College</th>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {myApplications.map((app, index) => (
                  <tr key={app.id}>
                    <td>{index + 1}</td>
                    <td>{app.name}</td>
                    <td>{app.university.split("/")[0]}</td>
                    <td>{app.college.split("/")[0]}</td>
                    <td>{app.course}</td>
                    <td>{app.date}</td>
                    <td>{app.status}</td>
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

export default Applications;
