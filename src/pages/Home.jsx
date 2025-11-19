import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>My Portfolio</h1>
        
    <ProjectCard
  title="CRUD Project"
  description="A full CRUD app built with React and Node.js."
  link="https://student-information-system-five.vercel.app/"
/>

    </div>
  );
}
