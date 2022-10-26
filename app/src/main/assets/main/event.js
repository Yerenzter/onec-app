let OnMenu = (x) =>  {
  let menu = hydra.bring("div", "menu");
  let menu_close = hydra.bring("div", "menu-box-close");
  
  menu.style.display = "grid";
  menu.style.animationName = "rise";
  menu.style.animationDuration = "0.21s";
  
  menu_close.style.display = "grid";
  
  x.classList.toggle("drop");
};

let OnCloseMenuIcon = (x) => {
  let menu = hydra.bring("div", "menu");
  let menu_close = hydra.bring("div", "menu-box-close");
  
  menu.style.animationName = "drop";
  menu.style.animationDuration = "0.21s";
  
  menu_close.style.animationName = "drop";
  menu_close.style.animationDuration = "0.21s";
  
  setTimeout(() => {
    menu.style.display = "none";
  },200);
  
  x.classList.toggle("drop");
  
  setTimeout(() => {
    menu_close.style.display = "none";
  },200);
};

let SetName = () => {
  let menu = hydra.bring("div", "menu");
  let menu_close = hydra.bring("div", "menu-box-close");
  let username = hydra.bring("p", "username");
  let username_text = hydra.bring("input", "user-name");
  let utl = username_text.value.length;
  
  localStorage.username = username_text.value;
  
  username.innerHTML = localStorage.username;
  
  if(utl >= 10 && utl <= 15) {
    localStorage.fontSize = "64px";
    username.style.fontSize = localStorage.fontSize;
  }
  else if(utl >= 15 && utl <= 24) {
    localStorage.fontSize = "48px";
    username.style.fontSize = localStorage.fontSize;
  }
  else if(utl >= 25 && utl <= 29) {
    localStorage.fontSize = "40px";
    username.style.fontSize = localStorage.fontSize;
  }
  else if(utl >= 30 && utl <= 39) {
    localStorage.fontSize = "36px";
    username.style.fontSize = localStorage.fontSize;
  }
  else if(utl > 40) {
    localStorage.fontSize = "24px";
    username.style.fontSize = localStorage.fontSize;
  }
  else {
    localStorage.fontSize ="86px";
    username.style.fontSize = localStorage.fontSize;
  }
  
  menu.style.animationName = "drop";
  menu.style.animationDuration = "0.21s";
  
  menu_close.style.animationName = "drop";
  menu_close.style.animationDuration = "0.21s";
  
  setTimeout(() => {
    menu_close.style.display = "none";
  }, 200);
  
  setTimeout(() => {
    menu.style.display = "none";
  }, 200);
};

let OnClear = () => {
  let username_text = hydra.bring("input", "user-name");
  let clear = hydra.bring("input", "clear");
  
  username_text.value = "";
  
  clear.style.visibility = "hidden";
};


let showClearBtn = () => {
    let username_text = hydra.bring("input", "user-name");
    let clearBtn = hydra.bring("input", "clear");
    
    username_text.value == "" ? clearBtn.style.visibility = "hidden" : clearBtn.style.visibility = "visible";
};
let OnSchedule = () => {
  let schedule = hydra.bring("div", "schedule");
  let close_btn = hydra.bring("div", "schedule-box-close");
  
  schedule.style.display = "grid";
  schedule.style.animationName = "popUp";
  schedule.style.animationDuration = "0.21s";
  
  close_btn.style.animationName = "rise";
  close_btn.style.animationName = "0.21s";
  close_btn.style.display = "grid";
};

let OnScheduleClose = (x) => {
  let schedule = hydra.bring("div", "schedule");
  let close_btn = hydra.bring("div", "schedule-box-close");
  
  schedule.style.animationName = "popDown";
  schedule.style.animationDuration = "0.21s";
  
  setTimeout(() => {
    schedule.style.display = "none";
    close_btn.style.display = "none";
  }, 200);
};

let OnAbout = () => {
  let about = hydra.bring("div", "about");
  let close_btn = hydra.bring("div", "about-box-close");
  
  about.style.display = "grid";
  about.style.animationName = "popUp";
  about.style.animationDuration = "0.21s";
  
  close_btn.style.animationName ="rise";
  close_btn.style.animationDuration = "0.21s";
  close_btn.style.display = "grid";
};

let OnAboutClose = () => {
  let about = hydra.bring("div", "about");
  let close_btn = hydra.bring("div", "about-box-close");
  
  about.style.animationName = "popDown";
  about.style.animationDuration = "0.21s";
  
  setTimeout(() => {
    about.style.display = "none";
    close_btn.style.display = "none";
  }, 200);
};