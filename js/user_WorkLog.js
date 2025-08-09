const taskDescriptions = [
  "Make an Automatic Payment System that enable the design",
  "Make an Automatic Payment System that enable the design",
  "Make an Automatic Payment System that enable the design",
  "Make an Automatic Payment System that enable the design",
  "Make an Automatic Payment System that enable the design",
];

const ctx = document.getElementById("workLogChart").getContext("2d");

const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "02 Nov 2022",
      "03 Nov 2022",
      "04 Nov 2022",
      "05 Nov 2022",
      "05 Nov 2022",
    ],
    datasets: [
      {
        label: "Progress",
        data: [20, 40, 100, 60, 80],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderRadius: 5,
        barThickness: 50,
      },
    ],
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        max: 100,
        title: {
          display: true,
          text: "Progress (%)",
        },
      },
    },
  },
  plugins: [
    {
      id: "taskDescriptions",
      afterDatasetsDraw(chart, args, pluginOptions) {
        const {
          ctx,
          chartArea: { top },
        } = chart;
        chart.getDatasetMeta(0).data.forEach((bar, index) => {
          ctx.save();
          ctx.font = "14px sans-serif";
          ctx.fillStyle = "gray";
          ctx.textBaseline = "top";
          ctx.fillText(
            taskDescriptions[index],
            chart.chartArea.left + 5,
            bar.y + bar.height - 10
          );

          ctx.restore();
        });
      },
    },
  ],
});
