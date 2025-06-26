import { FC } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

interface SentimentChartProps {
  entries: {
    id: string;
    content: string;
    sentiment: string;
    emotions: string[];
    createdAt: string;
    tags: string[];
  }[];
}

const SentimentChart: FC<SentimentChartProps> = ({ entries }) => {
  const chartData = {
    labels: entries.map((entry) => new Date(entry.createdAt).toLocaleDateString()),
    datasets: [
      {
        label: "Sentiment (Positive/Negative)",
        data: entries.map((entry) => {
          // Simplified sentiment conversion to numerical value (1 = positive, -1 = negative, 0 = neutral)
          switch (entry.sentiment) {
            case "positive":
              return 1;
            case "negative":
              return -1;
            default:
              return 0;
          }
        }),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">Sentiment Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default SentimentChart;
