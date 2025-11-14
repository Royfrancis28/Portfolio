import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>My Portfolio</h1>
        
     <ProjectCard
  title="Student Management System"
  description="Fullstack: Django REST API, ReactJS frontend, React Native mobile app"
  github="https://github.com/Royfrancis28/final-project-CC106-ISE101"
  live="https://your-frontend.vercel.app"
  mobile="https://expo.dev/@YOUR_USERNAME/student-management"
/>

    </div>
  );
}
