import telmate from "./index.template"

function main() {
    const container = document.querySelector("#root");
    container.innerHTML = template();

    // const chart = new Chart("#chart");

    // chart.percent = 75;
    // chart.duration = 1000;
    // chart.label = "충전중";

    // chart.render();
}

document.addEventListener("DOMContentLoaded", main);