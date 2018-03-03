var periods = [];

function loadPeriods () {
  for(var i = 1; i <= 6; i ++) {
    periods.push(document.getElementById('p' + i));
  }
}

var day = 1;
var dayText = document.getElementById('dayText');

var timetable = [
  ["English", "Free", "Free", "Maths Ext1", "Free", "Free", "Physics"],
  ["Free", "Free", "Maths Ext1", "Free", "Free", "Physics", "English"],
  ["Free", "Free", "Free", "Free", "Physics", "English", "Free"],
  ["Free", "Free", "Free", "Physics", "English", "Free", "Free"],
  ["Free", "Free", "Physics", "English", "Free", "Free", "Free"],
  ["Free", "Physics", "English", "Free", "Free", "Free", "Free"],
  ["Physics", "English", "Free", "Free", "Maths Ext1", "Free", "Free"],
]



function loadDay () {
  SetPeriods(timetable[day-1]);
  dayText.innerHTML = "Day " + day;
}

function nextDay () {
  day ++;
  if(day >= 8) {
    day = 1;
  }
  loadDay();
}

function prevDay () {
  day --;
  if(day <= 0) {
    day = 7;
  }
  loadDay();
}

function SetPeriods (array) {
  for(var i = 0; i < periods.length; i ++) {
    if(array[i] == 'Free') {
      periods[i].classList.remove('class');
      periods[i].classList.remove('free');
      periods[i].classList.add('free');
    } else {
      periods[i].classList.remove('class');
      periods[i].classList.remove('free');
      periods[i].classList.add('class');
    }
    periods[i].children[0].children[0].innerHTML = array[i];
  }
}

loadPeriods();
loadDay();
