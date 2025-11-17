import React from "react";
import { Card, Col, Button } from "react-bootstrap";

export default function ProjectCard({ title, github }) {
  return (
    <Col md={4} className="mb-3">
      <Card className="shadow-sm h-100">
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Button
            variant="primary"
            className="mt-auto"
            onClick={() => window.open(github, "_blank")}
          >
            View Project
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
