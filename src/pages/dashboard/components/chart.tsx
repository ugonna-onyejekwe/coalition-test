import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export const Chart = ({ user }: { user: usersType }) => {
  const filteredLabel = user.diagnosis_history.slice(0, 5).map((i) => {
    return `${i.month.slice(0, 3)},${i.year}`;
  });

  const filteredDiastolicData = user.diagnosis_history.slice(0, 5).map((i) => {
    return i.blood_pressure.diastolic.value;
  });
  const filteredsystolicData = user.diagnosis_history.slice(0, 5).map((i) => {
    return i.blood_pressure.systolic.value;
  });

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  const data = {
    labels: [...filteredLabel],
    datasets: [
      {
        label: "diastolic",
        data: [...filteredDiastolicData],
        borderColor: "#8C6FE6",
        tension: "0.4",
        borderWidth: "2",
        fill: false,
        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#8C6FE6",
        pointBorderWidth: "5",
      },
      {
        label: "systolic",
        data: [...filteredsystolicData],
        borderColor: "#C26EB4",
        borderWidth: "2",
        fill: false,
        tension: "0.4",
        pointBackgroundColor: "#C26EB4",
        pointBorderColor: "#C26EB4",
        pointBorderWidth: "5",
      },
    ],
  };

  return (
    <div className="chart_body">
      <Line options={options} data={data} className="chart" />
    </div>
  );
};
