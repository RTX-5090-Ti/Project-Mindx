// Vẽ biểu đồ chart 1
const ctx = document.getElementById("tasksChart").getContext("2d");
const tasksChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Completed", "On Hold", "On Progress", "Pending"],
    datasets: [
      {
        data: [32, 25, 25, 18],
        backgroundColor: ["#2B8A99", "#625BDF", "#33C3F0", "#E53935"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        align: "center",
        labels: {
          usePointStyle: true,
          padding: 20,
          boxWidth: 20,
          font: { size: 14 },
        },
      },
      datalabels: {
        color: "#fff",
        font: { weight: "bold", size: 16 },
        formatter: (value) => value + "%",
      },
      tooltip: { enabled: true },
    },
  },
  plugins: [ChartDataLabels],
});

// Vẽ biểu đồ chart dạng line
const ctxxx = document.getElementById("lineChart-1").getContext("2d");
// Tạo gradient cho bóng mờ
const gradientRed = ctxxx.createLinearGradient(0, 0, 0, 400);
gradientRed.addColorStop(0, "rgba(255, 99, 132, 0.4)");
gradientRed.addColorStop(1, "rgba(255, 99, 132, 0)");

const gradientBlue = ctxxx.createLinearGradient(0, 0, 0, 400);
gradientBlue.addColorStop(0, "rgba(54, 162, 235, 0.4)");
gradientBlue.addColorStop(1, "rgba(54, 162, 235, 0)");

const lineChart = new Chart(ctxxx, {
  type: "line",
  data: {
    labels: ["Oct 2021", "Nov 2021", "Dec 2021", "Jan 2022", "Feb 2022"],
    datasets: [
      {
        label: "Achieved",
        data: [5, 6, 8, 5, 8],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: gradientRed,
        fill: true,
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointRadius: 5,
        tension: 0.4,
      },
      {
        label: "Target",
        data: [3, 8, 5, 5, 4],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: gradientBlue,
        fill: true,
        pointBackgroundColor: "rgba(54,162,235,1)",
        pointRadius: 5,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.parsed.y + " Projects";
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2,
        },
      },
    },
  },
});
