// Sample data - replace with your actual results
const datasets = {
    "Dataset 1": {
        largestClique: { chiba: 5, tomita: 5, els: 5 },
        totalCliques: { chiba: 12, tomita: 12, els: 12 },
        execTime: { chiba: 0.5, tomita: 0.3, els: 0.7 }, // in seconds
        sizeDist: {
            chiba: [2, 4, 3, 2, 1], // e.g., [2 cliques of size 1, 4 of size 2, etc.]
            tomita: [2, 4, 3, 2, 1],
            els: [2, 4, 3, 2, 1]
        }
    }
    // Add more datasets here
};

// Populate text
document.getElementById("ds1-largest").innerText = 
    `Chiba: ${datasets["Dataset 1"].largestClique.chiba}, Tomita: ${datasets["Dataset 1"].largestClique.tomita}, ELS: ${datasets["Dataset 1"].largestClique.els}`;
document.getElementById("ds1-total").innerText = 
    `Chiba: ${datasets["Dataset 1"].totalCliques.chiba}, Tomita: ${datasets["Dataset 1"].totalCliques.tomita}, ELS: ${datasets["Dataset 1"].totalCliques.els}`;

// Execution Time Chart
const timeCtx = document.getElementById("ds1-time-chart").getContext("2d");
new Chart(timeCtx, {
    type: "bar",
    data: {
        labels: ["Chiba", "Tomita", "ELS"],
        datasets: [{
            label: "Execution Time (s)",
            data: [
                datasets["Dataset 1"].execTime.chiba,
                datasets["Dataset 1"].execTime.tomita,
                datasets["Dataset 1"].execTime.els
            ],
            backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"]
        }]
    },
    options: { scales: { y: { beginAtZero: true } } }
});

// Clique Size Distribution Chart
const sizeCtx = document.getElementById("ds1-size-chart").getContext("2d");
new Chart(sizeCtx, {
    type: "bar",
    data: {
        labels: [1, 2, 3, 4, 5], // Adjust based on your max clique size
        datasets: [
            { label: "Chiba", data: datasets["Dataset 1"].sizeDist.chiba, backgroundColor: "#ff6384" },
            { label: "Tomita", data: datasets["Dataset 1"].sizeDist.tomita, backgroundColor: "#36a2eb" },
            { label: "ELS", data: datasets["Dataset 1"].sizeDist.els, backgroundColor: "#ffce56" }
        ]
    },
    options: { scales: { y: { beginAtZero: true } } }
});
