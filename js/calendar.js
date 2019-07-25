// Designed By Ting 2019


// build the Calendar

let theCalendarDate = new Date();
let theYear = theCalendarDate.getFullYear();
let theMonth = theCalendarDate.getMonth();
let theDay = theCalendarDate.getDay();
let theDate = theCalendarDate.getDate();
let selectMonth = true;
let theDateId = "" + theYear + "y" + theMonth + "m" + theDate + "d";

function setCalendar() {
  theYear = theCalendarDate.getFullYear();
  theMonth = theCalendarDate.getMonth();
  theDay = theCalendarDate.getDay();
  theDate = theCalendarDate.getDate();
  theDateId = "" + theYear + "y" + theMonth + "m" + theDate + "d";

}




// reflesh month information
function showMonth() {
  var months = new Array(12);
  months[0] = "Jan";
  months[1] = "Feb";
  months[2] = "Mar";
  months[3] = "Apr";
  months[4] = "May";
  months[5] = "Jun";
  months[6] = "Jul";
  months[7] = "Aug";
  months[8] = "Sep";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dec";
  var monthString = months[theMonth];
  document.getElementById("month").innerHTML = monthString;

  if (selectMonth) {
    document.getElementById("month").style.fontWeight = 700;
    document.getElementById("year").style.fontWeight = 400;
  }

}
showMonth();

// reflesh year information
function showYear() {
  document.getElementById("year").innerHTML = theYear;
  if (!selectMonth) {
    document.getElementById("year").style.fontWeight = 700;
    document.getElementById("month").style.fontWeight = 400;
  }
}

showYear();

function chooseMonth() {
  selectMonth = true;
  showMonth();
  showYear();
}

function chooseYear() {
  selectMonth = false;
  showMonth();
  showYear();
}

// "<"
function minus() {
  if (selectMonth) {
    theCalendarDate.setMonth(theMonth - 1);

  } else {
    theCalendarDate.setYear(theYear - 1);
  }
  setCalendar();
  showMonth();
  showYear();
  showDate();
}

// ">"
function plus() {
  if (selectMonth) {
    theCalendarDate.setMonth(theMonth + 1);

  } else {
    theCalendarDate.setYear(theYear + 1);
  }
  setCalendar();
  showMonth();
  showYear();
  showDate();
}





let dayDiv = document.getElementById("id-dates");

// show date information on calendar
function showDate() {

  let tempCalendarDate = new Date(theYear, theMonth, 1);
  let tempYear = tempCalendarDate.getFullYear();
  let tempDate = tempCalendarDate.getDate();
  let tempDay = tempCalendarDate.getDay();
  let tempMonth = tempCalendarDate.getMonth();

  dayDiv.innerHTML = "<!--innerHTML-->"


  loopWeekDady: for (let i = 0; i < 6; i++) {


    // make there is enough rows for showing weeks.
    // porvide an extra row when the month span 6 weeks
    if (i == 5) {
      document.getElementById("id-dates").style.height = "270px";
      document.getElementById("calendar").style.height = "405px";




    } else {
      document.getElementById("id-dates").style.height = "225px";
      document.getElementById("calendar").style.height = "360px";
    }



    loopDate: for (let j = 0; j < 7; j++) {


      let tempId = "" + tempYear + "y" + tempMonth + "m" + tempDate + "d";


      if (tempDay == j) {
        dayDiv.innerHTML = dayDiv.innerHTML + "<div " + "id=" + tempId + " class= \"small-box\" " + " onclick=\"chooseDate('" + tempId + "')\"" + " data-value=" + "\"" + tempDate + "\" " + ">" + "<p>" + tempDate + "</p" +
          " class= \"date\" " + ">" + "</div>";

        tempCalendarDate.setDate(tempDate + 1);
        tempDay = tempCalendarDate.getDay();
        tempDate = tempCalendarDate.getDate();

      } else {
        dayDiv.innerHTML = dayDiv.innerHTML + "<div class= \"small-box\" >" + "<p>" + " " + "</p>" + "</div>";
      }
      if (tempMonth != tempCalendarDate.getMonth()) {
        tempMonth = tempCalendarDate.getMonth();
        break loopWeekDady;
      }

    }

  }

  document.getElementById(theDateId).style.fontWeight = 700;
}
showDate();

// choose date
function chooseDate(tempid) {
  document.getElementById(theDateId).style.fontWeight = 400;
  theDateId = tempid;
  document.getElementById(theDateId).style.fontWeight = 700;
  theDate = document.getElementById(theDateId).getAttribute('data-value');
  theCalendarDate.setDate(theDate);
  setCalendar();
}





//setup the Calendar location
document.getElementById("calendar").style.position = "absolute";
document.getElementById("calendar").style.top = 590 + "px";
document.getElementById("calendar").style.left = 320 + "px";

// Show Calendar
function showCalendar() {
  if (document.getElementById("calendar").style.display == "none") {
    document.getElementById("calendar").style.display = "block";
  } else {
    document.getElementById("calendar").style.display = "none";
  }
}

//hide calendar
function hideCalendar() {
  document.getElementById("calendar").style.display = "none";
}
hideCalendar();



// ok button
function ok() {
  let birthday = "" + theYear + "-" + (theMonth + 1) + "-" + theDate;
  document.getElementById("GI-Birthday").innerHTML = "<p>" + birthday + "</p>";
  hideCalendar();
}

// cancel button
function cancel() {
  hideCalendar();
}
