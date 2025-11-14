import React from "react";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1>My Portfolio</h1>
      <h1>Roy Francis Enriquez BSIS-3A</h1>
    </header>
  );
}

const styles = {
  header: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#2314eeff",
    color: "#fff",
    borderBottom: "2px solid #0bcceeff",
  },
};
