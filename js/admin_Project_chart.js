let listProject = JSON.parse(localStorage.getItem("listProject")) || [];
let num = listProject.length;
let percent = 100 / num;
// console.log(percent);
let completed = 0;
let onProgress = 0;
let onHold = 0;
let pending = 0;
console.log(listProject);
console.log(num);
listProject.forEach((item) => {
  if (item.status === "On progress") {
    onProgress++;
  } else if (item.status === "On hold") {
    onHold++;
  } else if (item.status === "Completed") {
    completed++;
  } else {
    pending++;
  }
});
console.log(completed, onProgress, onHold, pending);
let percentCompleted = Math.round(completed * percent);
let percentOnProgress = Math.round(onProgress * percent);
let percentOnHold = Math.round(onHold * percent);
let percentPending = Math.round(pending * percent);
console.log(percentCompleted, percentOnProgress, percentOnHold, percentPending);

// Vẽ biểu đồ chart 1
const ctx = document.getElementById("tasksChart").getContext("2d");
const tasksChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Completed", "On Hold", "On Progress", "Pending"],
    datasets: [
      {
        data: [
          percentCompleted,
          percentOnHold,
          percentOnProgress,
          percentPending,
        ],
        backgroundColor: ["#2B8A99", "#625BDF", "#33C3F0", "#E53935"],
        //complete, on-hold, on-progress, pending
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
    labels: ["Apr 2025", "May 2025", "Jun 2025", "Jul 2025", "Aug 2025"],
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
