import React from "react";
import { Card, Col } from "react-bootstrap";

export default function WelcomeCard() {
  return (
    <Col md={12} className="mb-4">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Welcome to My Portfolio</Card.Title>
          <Card.Text>
            Hello! This is my final project portfolio for CC106 (AppDev) & ISE101 (Mobile Programming).
            Here you can see my web app, mobile app, and other projects.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

