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
// Vẽ biểu  đồ biểu đồ Doughnut
const ctxx = document.getElementById("doughnutChart").getContext("2d");

const doughnutChart = new Chart(ctxx, {
  type: "doughnut",
  data: {
    labels: ["Product 1", "Product 2", "Product 4", "Product 5"],
    datasets: [
      {
        data: [50, 12.5, 12.5, 12.5, 12.5], // tổng 100%
        backgroundColor: [
          "#F44336", // đỏ
          "#FF9800", // cam
          "#FBC02D", // vàng
          "#8BC34A", // xanh lá
          "#2196F3", // xanh dương
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%", // độ rộng lỗ ở giữa (60% radius)
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          //   padding: 60,
          font: { size: 14 },
          padding: 30,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});
// Vẽ biểu đồ chart dạng line
const ctxxx = document.getElementById("lineChart").getContext("2d");
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
    labels: [
      "Oct 2021",
      "Nov 2021",
      "Dec 2021",
      "Jan 2022",
      "Feb 2022",
      "Mar 2022",
    ],
    datasets: [
      {
        label: "Achieved",
        data: [5, 6.5, 5.8, 6.5, 5.5, 5],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: gradientRed,
        fill: true,
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointRadius: 5,
        tension: 0.4,
      },
      {
        label: "Target",
        data: [3, 4.8, 2.5, 5, 4, 3],
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
