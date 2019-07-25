// toggle side bar menu
function showContent(_content) {
  if (_content == "Clients") {
    document.getElementById("client-details").style.display = "block";
    document.getElementById("content").style.display = "none";
  } else {
    let tempContent = _content + "...";
    let contentDiv = "<div class='content-center'> <h1>" + tempContent + "</h1></div>";
    document.getElementById("client-details").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("content").innerHTML = contentDiv;
  }
  document.getElementById("menu-Dashboard").setAttribute("class", "side-bar-menu-contianer");
  document.getElementById("menu-Clients").setAttribute("class", "side-bar-menu-contianer");
  document.getElementById("menu-Users").setAttribute("class", "side-bar-menu-contianer");
  document.getElementById("menu-Logout").setAttribute("class", "side-bar-menu-contianer");
  document.getElementById("menu-Collapse").setAttribute("class", "side-bar-menu-contianer");
  document.getElementById("icon-Dashboard").setAttribute("class", "icon-dashboard vertical-center");
  document.getElementById("icon-Clients").setAttribute("class", "icon-clients vertical-center");
  document.getElementById("icon-Users").setAttribute("class", "icon-users vertical-center");
  document.getElementById("icon-Logout").setAttribute("class", "icon-logout vertical-center");
  document.getElementById("icon-Collapse").setAttribute("class", "icon-collapse vertical-center");
  document.getElementById("menu-" + _content).setAttribute("class", "side-bar-menu-contianer-selected");
  let tempIconId = "icon-" + _content;
  switch (tempIconId) {
    case "icon-Dashboard":
      document.getElementById(tempIconId).setAttribute("class", "icon-dashboard-selected vertical-center");
      break;
    case "icon-Users":
      document.getElementById(tempIconId).setAttribute("class", "icon-users-selected vertical-center");
      break;
    case "icon-Clients":
      document.getElementById(tempIconId).setAttribute("class", "icon-clients-selected vertical-center");
      break;
    case "icon-Logout":
      document.getElementById(tempIconId).setAttribute("class", "icon-logout-selected vertical-center");
      break;
    case "icon-Collapse":
      document.getElementById(tempIconId).setAttribute("class", "icon-collapse-selected vertical-center");
      break;
  }
}

// toggle info menu
function selectedInfoMenu(menuId) {
  document.getElementById("pl").setAttribute("class", "client-information-menu-container float-left bottom-line");
  document.getElementById("gi").setAttribute("class", "client-information-menu-container float-left bottom-line ");
  document.getElementById("fa").setAttribute("class", "client-information-menu-container float-left bottom-line ");
  document.getElementById("as").setAttribute("class", "client-information-menu-container float-left bottom-line ");
  document.getElementById(menuId).setAttribute("class", "client-information-menu-container float-left bottom-line green-bottom");
  document.getElementById("gi-container").style.display = "none";
  document.getElementById("fa-container").style.display = "none";
  document.getElementById("as-container").style.display = "none";
  document.getElementById("pl-container").style.display = "none";
  switch (menuId) {
    case "gi":
      document.getElementById("gi-container").style.display = "block";
      break;
    case "fa":
      document.getElementById("fa-container").style.display = "block";
      break;
    case "as":
      document.getElementById("as-container").style.display = "block";
      break;
    case "pl":
      document.getElementById("pl-container").style.display = "block";
      break;
  }
}
