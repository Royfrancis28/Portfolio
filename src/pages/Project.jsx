import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Container, Row } from "react-bootstrap";

export default function Project() {
  return (
    <Container className="my-5">
      <h2 className="mb-4">My Projects</h2>
      <Row>
        <ProjectCard
          title="Student Management System"
          description="Django REST API, ReactJS Web App, React Native Mobile App"
          github="https://github.com/YOUR_USERNAME/final-project-CC106-ISE101"
          live="https://your-frontend.vercel.app"
          mobile="https://expo.dev/@YOUR_USERNAME/student-management"
        />
        {/* Add more ProjectCard components here */}
      </Row>
    </Container>
  );
}
