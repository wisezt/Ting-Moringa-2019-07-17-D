//Designed By Ting 2019

// setup clients information
allClients = {
  "clients": [{
      "Name": "John Doe",
      "Client": "Parent",
      "Email": "j.doe@outlook.ca",
      "Address": "1180 Portage Ave, Wpg, Mb R3Y 1B1",
      "NextToKin": "Jane Doe",
      "IntakeDate": "05/22/2019",
      "CaseWorker": "Danilelle Barchyn",
      "Alerts": "None",
      "Status": "Active",
      "Precautions": "Do not meet alone",
    },

  ]
}


// load client infomation
function loadClient() {
  document.getElementById("Name").innerHTML = allClients.clients[0].Name;
  document.getElementById("Client").innerHTML = allClients.clients[0]["Client"];
  document.getElementById("Email").innerHTML = allClients.clients[0].Email;
  document.getElementById("Address").innerHTML = allClients.clients[0].Address;
  document.getElementById("NextToKin").innerHTML = allClients.clients[0]["NextToKin"];
  document.getElementById("IntakeDate").innerHTML = allClients.clients[0]["IntakeDate"];
  document.getElementById("CaseWorker").innerHTML = allClients.clients[0]["CaseWorker"];
  document.getElementById("Alerts").innerHTML = allClients.clients[0].Alerts;
  document.getElementById("Status").innerHTML = allClients.clients[0].Status;
  document.getElementById("Precautions").innerHTML = allClients.clients[0].Precautions;


}

loadClient();


// get client infomation
function setInfo(item, value) {

  switch (item) {
    case "Name":
      allClients.clients[0].Name = value;


      break;
    case "Client":
      allClients.clients[0]["Client"] = value;
      break;
    case "Email":
      allClients.clients[0]["Email"] = value;
      break;
    case "Address":
      allClients.clients[0].Address = value;
      break;
    case "NextToKin":
      allClients.clients[0]["NextToKin"] = value;
      break;
    case "IntakeDate":
      allClients.clients[0]["IntakeDate"] = value;
      break;
    case "CaseWorker":
      allClients.clients[0]["CaseWorker"] = value;
      break;
    case "Alerts":
      allClients.clients[0].Alerts = value;
      break;
    case "Status":
      allClients.clients[0].Status = value;
      break;
    case "Precautions":
      allClients.clients[0].Precautions = value;
      break;
    default:
      "Not Find";
  }
}



let theItem;

// Show editing Box
function showeditingBox(item) {
  document.getElementById("editingBox").style.display = "block";
  document.getElementById("oldItem").innerHTML = allClients.clients[0][item];
  document.getElementById("newItem").value = allClients.clients[0][item];
  theItem = item;

}







// set new value for client info
function editClient(item) {
  console.log("before:" + allClients.clients[0][theItem]);
  let value = document.getElementById("newItem").value;
  if (value != null && value != "") {
    console.log("!=null:" + allClients.clients[0][theItem]);
    setInfo(theItem, value);
  }

}




// ok button
function editingBoxOk() {
  editClient(theItem);
  document.getElementById("editingBox").style.display = "none";
  console.log(allClients.clients[0][theItem]);
  loadClient();
}


// cancel button
function editingBoxCancel() {
  document.getElementById("editingBox").style.display = "none";
}
