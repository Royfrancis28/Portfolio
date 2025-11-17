import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Container, Row } from "react-bootstrap";

export default function Project() {
  return (
    <Container className="my-5">
      <h2 className="mb-4">My Projects</h2>
      <Row>
      <ProjectCard
  title="CRUD Project"
  description="A full CRUD app built with React and Node.js."
  link="https://student-information-system-five.vercel.app/"
/>

        {/* Add more ProjectCard components here */}
      </Row>
    </Container>
  );
}
