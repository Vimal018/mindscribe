"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Dummy data for now – can be replaced with real emotion/sentiment stats
type EmotionStats = {
  name: string;
  value: number;
};

const data: EmotionStats[] = [
  { name: "Happy", value: 5 },
  { name: "Sad", value: 3 },
  { name: "Angry", value: 2 },
  { name: "Excited", value: 4 },
  { name: "Calm", value: 6 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA46BE"];

export default function EmotionPieChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Emotion Breakdown</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
