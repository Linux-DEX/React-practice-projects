import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Home for D3JS</h1>
      <p style={styles.paragraph}>
        this is my sample code for D3JS for practice
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f4f8",
    flexDirection: "column",
    padding: "20px",
  },

  heading: {
    fontSize: "2.5rem",
    color: "#333",
    fontFamily: "Arial, sans-serif",
    marginBottom: "20px",
  },

  paragraph: {
    fontSize: "1.2rem",
    color: "#555",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
};

export default Home;
