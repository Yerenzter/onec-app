// Error catcher.
let ERR1 = "UNEXPECTED_ERROR";

// Initialize variable p for paragraph.
let p = "p";

// Get the dates.
let getMonth = hydra.getClock("mn");
let getDay = hydra.getClock("d");
let getHour = hydra.getClock("h");
let getMinute = hydra.getClock("m");
let getSecond = hydra.getClock("s");
let totalSeconds = hydra.getClock("ts");

// Get ID in every text elements.
let month = hydra.bring(p, "month");
let day = hydra.bring(p, "day");
let hour = hydra.bring(p, "hour");
let minute = hydra.bring(p, "minute");
let meridian = hydra.bring(p, "meridian");
let greeting = hydra.bring(p, "greeting");
let username = hydra.bring(p, "username");
let narrator = hydra.bring(p, "narrator");
let subject = hydra.bring(p, "subject");
let instructor = hydra.bring(p, "instructor");
let locator = hydra.bring(p, "locator");
let locate = hydra.bring(p, "location");
let queue_state = hydra.bring(p, "queue-state");
let queue = hydra.bring(p, "queue");
let username_text = hydra.bring("input", "user-name");
let ry = hydra.bringTag(p);
let yr = ry[6].childNodes[0].length;

// Create and array for all text elements
let meridians = ["AM", "PM"];
let greetings_initial = ["Hi", "Hello"];
let greetings = ["good morning", "good day", "good afternoon", "good evening"];
let subjects = ["GEC 3", "P.E.", "ITCOM 1", "MATH 3", "CPROG 1", "GEC 4", "VACANT", "GEE 9"];
let prefix = ["Sir ", "Mr. ", "Ms. ", "Mrs. "];
let instructors = ["Manglalan", "Plandez", "Lampaza", "Villar", "Marin", "De San Jose", "N/A", "Murallon"];
let rooms = ["NAB 12A", "CONF RM.", "NAB 6A", "NAB 8A", "GS STAGE", "ICT 309", "ICT 302", "CONF RM.", "ICT 106", "N/A"];

// Write them to the text elements.

// For the month
hydra.clock(month, "mn", 0);

// For the day
hydra.clock(day, "d", 0);

// For the hour
hydra.clock(hour, "h", 0);

// For the minute
hydra.clock(minute, "m", 0);

// If the clock value equals to 0 to 11 then set to AM otherwise PM
getHour >= 0 && getHour<= 11 ? meridian.innerHTML = meridians[0] : meridian.innerHTML = meridians[1];

// Create all greetings depends on the time of the day
if(getHour >= 0 && getHour <= 11) {
greeting.innerHTML = "Hello, " + greetings[0];
}
else if(getHour == 12) {
greeting.innerHTML = "Have a " + greetings[1];
}
else if(getHour >= 13 && getHour <= 17) {
greeting.innerHTML = "Hi, " + greetings[2];
}
else {
greeting.innerHTML = "Hi, " + greetings[3];
}

// Get the input of the username entered by an user otherwise we set to default to USER
let get_username = localStorage.username;
let get_fontSize = localStorage.fontSize;

get_username == undefined || get_username == "" ? username.innerHTML = "User" : username.innerHTML = get_username;
username.style.fontSize = get_fontSize;

narrator.innerHTML = "Today's class is";

// Set the function if the day is M-W-F T-Th or Weekend.
let setWeekEnd = () => {
subject.innerHTML = subjects[6];
instructor.innerHTML = instructors[6];
locate.innerHTML = rooms[9];
queue.innerHTML = subjects[6];
};

let setMWF = () => {
// 7:30 - 8:30 -> GEC 3
if(totalSeconds >= 27000 && totalSeconds <= 30600) {
subject.innerHTML = subjects[0];
instructor.innerHTML = prefix[2] + instructors[0];
locate.innerHTML = rooms[0];
queue.innerHTML =  subjects[6];
}
// 8:30 - 9:30 -> VACANT
else if(totalSeconds >= 30600 && totalSeconds <= 32580) {
subject.innerHTML = subjects[6];
instructor.innerHTML = instructors[6];
locate.innerHTML = rooms[9];
queue.innerHTML = subjects[2];
}
// 9:30 - 10:30 -> ITCOM 1
else if(totalSeconds >= 32580 && totalSeconds <= 37800) {
subject.innerHTML = subjects[2];
instructor.innerHTML = prefix[2] + instructors[2];
locate.innerHTML = rooms[1];
queue.innerHTML = subjects[6];
}
// 10-30 - 11:30 VACANT
else if(totalSeconds >= 37800 && totalSeconds <= 41400) {
subject.innerHTML = subjects[6];
instructor.innerHTML = instructors[6];
locate.innerHTML = rooms[9];
queue.innerHTML = subjects[3];
}
// 11:30 - 12:30 MATH 3
else if(totalSeconds >= 41400 && totalSeconds <= 45000) {
subject.innerHTML = subjects[3];
instructor.innerHTML = prefix[0] + instructors[3];
locate.innerHTML = rooms[2];
queue.innerHTML = subjects[5];
}
// 1:00 - 2:00 -> GEC 4
else if(totalSeconds >= 46800 && totalSeconds <= 50400)  {
subject.innerHTML = subjects [5];
instructor.innerHTML = prefix[3] + instructors[5];
locate.innerHTML = rooms[3];
queue.innerHTML = subjects[6];
}
// THE REST IS VACANT
else {
subject.innerHTML = subjects[6];
instructor.innerHTML = instructors[6];
locate.innerHTML = rooms[9];
queue.innerHTML = subjects[6];
}
};

let setTTh = () => {
// ??? - 9:00 -> VACANT
if(totalSeconds >= 0 && totalSeconds <= 32400) {
subject.innerHTML = subjects[6];
instructor.innerHTML = instructors[6];
locate.innerHTML = rooms[9];
queue.innerHTML = subjects[1];
}
// 9:00 - 10:00 -> P.E.
else if(totalSeconds >= 32400 && totalSeconds <= 36000) {
subject.innerHTML = subjects[1];
instructor.innerHTML = prefix[3] + instructors[1];
locate.innerHTML = rooms[4];
queue.innerHTML = subjects[6];
}
// 10:00 - 11:00 -> VACANT
else if(totalSeconds >= 36000 && totalSeconds <= 39600) {
subject.innerHTML = subjects[6];
instructor.innerHTML = instructors[6];
locate.innerHTML = rooms[9];
queue.innerHTML = subjects[4];
}
// 11:00 - 12:00 -> CPROG 1
else if(totalSeconds >= 39600 && totalSeconds <= 43200) {
subject.innerHTML = subjects[4];
instructor.innerHTML = prefix[2] + instructors[4];
locate.innerHTML = rooms[5];
queue.innerHTML = subjects[6];
}
// 12:00 - 1:30 -> VACANT
else if(totalSeconds >= 43200 && totalSeconds <= 48600) {
subject.innerHTML = subjects[6];
instructor.innerHTML = instructors[6];
locate.innerHTML = rooms[9];
queue.innerHTML = subjects[4];
}
// 1:30 - 2:30 -> CPROG 1
else if(totalSeconds >= 48600 && totalSeconds <= 52200) {
subject.innerHTML = subjects[4];
instructor.innerHTML = prefix[2] + instructors[4];
locate.innerHTML = rooms[5];
queue.innerHTML = subjects[6];
}
// 2:30 - 3:30 -> VACANT
else if (totalSeconds >= 52200 && totalSeconds <= 55800) {
subject.innerHTML = subjects[6];
instructor.innerHTML = instructors[6];
locate.innerHTML = rooms[9];
queue.innerHTML = subjects[2];
}
// 3:30 - 4:30 -> ITCOM 1
else if(totalSeconds >= 55800 && totalSeconds <= 59400) {
subject.innerHTML = subjects[2];
instructor.innerHTML = prefix[2] + instructors[2];
locate.innerHTML = rooms[1];
queue.innerHTML = subjects[2];
}
// 4:30 5:30 -> GEE 9
else if(totalSeconds >= 59400 && totalSeconds <= 63000) {
subject.innerHTML = subjects[7];
instructor.innerHTML = prefix[2] + instructors[7];
locate.innerHTML = rooms[8];
queue.innerHTML = subjects[6];
}
// THE REST OF REMAINING TIME
else {
subject.innerHTML = subjects[6];
instructor.innerHTML = instructors[6];
locate.innerHTML = rooms[9];
queue.innerHTML = subjects[6];
}
};

hydra.update(() => {
// We used Odd or Even system to to get and exact value of the day with the same schedule
getDay == 0 || getDay == 6 ? setWeekEnd() : getDay % 2 != 0 ? setMWF() : setTTh();
});

locator.innerHTML = "AT";

queue_state.innerHTML = "NEXT";
