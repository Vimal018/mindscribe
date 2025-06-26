import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [40, 30, 30], // Sample data, you can replace with actual data
        backgroundColor: ["#00C851", "#FFBB33", "#FF4444"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sentiment Distribution</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
