// HydraJS.
// v1.10.24.rc1
// Created by Yerenzter (Yer Umiten).
// HydraJS is a variation and minimal edition of FlanxQuikkerJS (a.k.a FQJS) which an application development engine for 1C App to develop basic UI-components, manipulating HTML DOM and CSS3 selectors.

class Hydra {
  bring(layout, id, classes=false) {
    return !classes ? document.querySelector(layout+"#"+id) : document.querySelector(layout+"#"+id+"."+classes);
  }
  
  bringTag(tag) {
    return document.getElementsByTagName(tag);
  }
  
  getClock(type) {
      let date = new Date();
      let s = date.getSeconds();
      let m = date.getMinutes();
      let h = date.getHours();
      let d = date.getDay();
      let mn = date.getMonth();
      let y = date.getYear();
      let ts = (h * 60) * 60 + (m * 60);
      
      switch(type) {
        case "s":
          return s;
        case "m":
          return m;
        case "h":
          return h;
        case "d":
          return d;
        case "mn":
          return mn;
        case "y":
          return y;
        case "ts":
          return ts;
      }
  }
  
  int(value) {
    return value - [];
  }
  
  clock(selector, type, interval, getType) {
    setInterval(() => {
      let date = new Date();
      let s = date.getSeconds();
      let m = date.getMinutes();
      let h = date.getHours();
      let d = date.getDate();
      let mn = date.getMonth();
      let y = date.getYear();
      
      let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      
      switch(type) {
        case "s":
          selector.innerHTML = s;
        break;
        case "m":
          m < 10 ? selector.innerHTML = "0" + m : selector.innerHTML = m;
        break;
        case "h":
          h == 0 ? selector.innerHTML = h + 12 : h >= 22 && h <= 23 ? selector.innerHTML = h-12 : h >= 13 && h <= 21 ? selector.innerHTML = "0" + (h-12) : h >= 10 && h <= 12 ? selector.innerHTML = h : selector.innerHTML = "0" + h;
        break;
        case "d":
          selector.innerHTML = d;
        break;
        case "mn":
          selector.innerHTML = months[mn];
        break;
        case "y":
          selector.innerHTML = y;
        break;
      }
    }, interval);
  }
  
  getTotalSeconds (hour, minute) {
    return ((hour * 60) * 60) + minute * 60;
  }
  
  loadJSON (file, define) {
    let init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default'
    };
    
    let parseJSON = new Request(file, init);
    
    fetch(parseJSON).then((r) => {
      return r.json();
    }).then(define);
  }
  
  str(value) {
    return value + [];
  }
  
  toggle(value, param) {
    return param.classList.toggle(value);
  }
  
  update(code) {
    setInterval(code, 0);
  }
}
let hydraApp = new Hydra();
let hydra = hydraApp;