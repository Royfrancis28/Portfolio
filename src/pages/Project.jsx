import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Container, Row } from "react-bootstrap";

export default function Project() {
  return (
    <Container className="my-5">
      <h2 className="mb-4">My Projects</h2>
      <Row>
        <ProjectCard
          title="Information Student System"
          github="https://student-information-system-five.vercel.app/"
        />
        {/* Add more ProjectCard components here */}
      </Row>
       <Row>
        <ProjectCard
          title="Mobile App"
          github="https://appetize.io/embed/b_clf3yzcnyyg5af25nlkyh7d7ty?device=pixel9pro&launchUrl=exp%3A%2F%2Fu.expo.dev%2F933fd9c0-1666-11e7-afca-d980795c5824%3Fruntime-version%3Dexposdk%253A54.0.0%26channel-name%3Dproduction%26snack%3D%2540loloy28%252Fcrud%26snack-channel%3DgIehylNiNP&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&appearance=light&deviceColor=black&scale=auto&orientation=portrait&centered=both"
        />
        {/* Add more ProjectCard components here */}
      </Row>

      <Row>
        <ProjectCard
          title="Cross Platform"
          github="https://crossplatform28-git-main-royfrancis-projects.vercel.app/"
        />
        {/* Add more ProjectCard components here */}
      </Row>
    </Container>
  );
}
