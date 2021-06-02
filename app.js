console.log("Hello from B2S!");

let viz;

//to do list:
//1. Select the container in the html
//2. Give the viz options (height and width)
//3. Variable for the dashboard url

const vizContainer = document.getElementById("vizContainer");
const vizUrl =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
const vizOptions = {
  device: "default",
  height: 800,
  width: 1000,
  hideToolbar: true, //does not work on public
};

function initViz() {
  viz = new tableau.Viz(vizContainer, vizUrl, vizOptions);
}

//wait until the page has fully loaded, then show dashboard
document.addEventListener("DOMContentLoaded", initViz);

//Export pdf Button
//Button element in your html
//Link the button to the JS
//creat the tableau function
//add a listerner to carry out the function when clicking the button

const exportPdf = document.getElementById("exportPdf");
function loadPdf() {
  viz.showExportPDFDialog();
  console.log("PDF export window loaded");
}
exportPdf.addEventListener("click", loadPdf);

//Export PPT
const exportPpt = document.getElementById("exportPpt");
function loadPpt() {
  viz.showExportPowerPointDialog();
  console.log("PPT export window loaded");
}
exportPpt.addEventListener("click", loadPpt);
