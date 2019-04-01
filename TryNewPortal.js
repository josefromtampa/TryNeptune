document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" crossorigin="anonymous">');

let popHtml =   "" +
  "<div  class='alert alert-danger tryPopup' role='alert' >" +
  "<span id='alertRightText' style='padding-left:20px;padding-right:20px;display:none;'>Try the new <a href='https://neptuneflood.com/agent-hub'>Agent Portal</a>!</span>" +
  "<span id='alertLeftText'></span>" +
  "<i id='alertRight' style='display:none;padding-left:10px;' class='fas fa-caret-right closer' onClick='closeAlert()'></i>" +
  "<span id='alertLeft' class='fas fa-caret-left opener' onClick='openAlert()'></span></div>" +
    "<style>" +
    "  .tryPopup {" +
  "     position: fixed !important; " +
  "     top: 12px !important; " +
  "     right: 2px !important; " +
  "     padding-left:2px !important;" +
  "     padding-right: 2px !important;" +
  "     z-index: 10000;" +
  "  }" +
  " .closer {" +
  "    padding-left:10px;" +
  "    cursor: pointer;" +
  "    height: 100%;" +
  "}" +
  " .opener {" +
  "    padding-left:0px;" +
  "    cursor: pointer;" +
  "    height: 100%;" +
  "    width: 10px;" +
  "}" +
  " .alert {" +
  "      background-color:#f5c6cb;" +
  "      padding:12px;" +
  "      border-radius: 2px;" +
  "}" +
"</style>";

 

ShowTryNewPortal();

setTimeout(function () {
  openAlert();
}, 5000);
setTimeout(function () {
  closeAlert();
}, 10000);

function ShowTryNewPortal() {
  console.log(popHtml);
  document.body.innerHTML += popHtml;
}

function closeAlert() {
  document.getElementById("alertRight").style.display = "none";
  document.getElementById("alertRightText").style.display = "none";
  document.getElementById("alertLeft").style.display = "";
  document.getElementById("alertLeftText").style.display = "";
}
function openAlert() {
  document.getElementById("alertLeft").style.display = "none";
  document.getElementById("alertLeftText").style.display = "none";
  document.getElementById("alertRight").style.display = "";
  document.getElementById("alertRightText").style.display = "";
}

