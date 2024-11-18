import { useState } from "react";
import LinePlot from "../Components/LinePlot";
import PieChart from "../Components/PieChart";
import ProgressBar from "../Components/ProgressBar";
import BarChart from "../Components/BarChart";
import ScatterPlot from "../Components/ScatterPlot";
import AreaChart from "../Components/AreaChart";
import BubbleChart from "../Components/BubbleChart";
import DonutChart from "../Components/DonetChart";

const Dashboard = () => {
  const line_plot_data = [10, 20, 15, 30, 25, 40, 35];
  const pie_chart_data = [
    { label: "A part", value: 30 },
    { label: "B part", value: 70 },
    { label: "C part", value: 45 },
    { label: "D part", value: 50 },
  ];
  const [progress, setProgress] = useState(0);

  const incrementProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const barChartData = [
    { label: "A", value: 30 },
    { label: "B", value: 80 },
    { label: "C", value: 45 },
    { label: "D", value: 60 },
  ];

  const scatterData = [
    { x: 10, y: 20, text: "onepiece" },
    { x: 15, y: 35, text: "naruto" },
    { x: 20, y: 25, text: "bleach" },
    { x: 30, y: 40, text: "death note" },
  ];

  const areaData = [10, 20, 30, 25, 35, 40, 60];

  const bubbleData = [
    { x: 10, y: 20, size: 15 },
    { x: 15, y: 35, size: 25 },
    { x: 20, y: 25, size: 20 },
    { x: 30, y: 40, size: 30 },
  ];

  const donutData = [
    { label: "A part", value: 30 },
    { label: "B part", value: 70 },
    { label: "C part", value: 45 },
    { label: "D part", value: 50 },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard Page</h1>

      <div style={styles.sections}>
        <h2>Line Plot</h2>
        <LinePlot data={line_plot_data} />
      </div>

      <div style={styles.sections}>
        <h2>Pie Chart</h2>
        <PieChart data={pie_chart_data} />
      </div>

      <div style={styles.sections}>
        <h2>Progress Bar Example</h2>
        <ProgressBar
          progress={progress}
          width={400}
          height={30}
          color="green"
        />
        <button onClick={incrementProgress} style={styles.button}>
          Increase Progress
        </button>
      </div>

      <div style={styles.sections}>
        <h2>Bar Chart</h2>
        <BarChart data={barChartData} />
      </div>

      <div style={styles.sections}>
        <h2>Scatter Plot</h2>
        <ScatterPlot data={scatterData} />
      </div>

      <div style={styles.sections}>
        <h2>Area Chart</h2>
        <AreaChart data={areaData} />
      </div>

      <div style={styles.sections}>
        <h2>Bubble Chart</h2>
        <BubbleChart data={bubbleData} />
      </div>

      <div style={styles.sections}>
        <h2>Donut Chart</h2>
        <DonutChart data={donutData} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "20px",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  sections: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80vw",
    height: "80vh",
    marginBottom: "20px",
    padding: "4rem",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default Dashboard;
