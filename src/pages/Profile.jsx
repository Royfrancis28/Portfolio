import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Profile() {
  return (
    <div className="text-center my-5">
      <h2>Profile Page</h2>
      
      {/* First Row */}
      <div className="row justify-content-center">
        <ProjectCard
          title="Certificate ISE-102"
          github="https://www.credly.com/badges/6d3a056a-b4fa-4035-b258-aaea42bcb4aa/public_url"
        />
      </div>

      {/* Second Row */}
      <div className="row justify-content-center mt-4">
        <ProjectCard
          title="Certificate Java Script Essentials 1"
          github="https://www.credly.com/badges/f3e9c47e-7b8e-4d4b-9fcd-9f833802a732/public_url"
        />
      </div>

       {/* Second Row */}
      <div className="row justify-content-center mt-4">
        <ProjectCard
          title="Certificate Java Script Essentials 2"
          github="https://www.credly.com/badges/f3e9c47e-7b8e-4d4b-9fcd-9f833802a732/public_url"
        />
      </div>
    </div>
  );
}

