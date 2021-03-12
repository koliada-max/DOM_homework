
const trafficLights = document.querySelector("div.traffic_light");

const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("green");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (redlight.classList.contains("traffic_red")) {
    redlight.classList.remove("traffic_red");
    yellowlight.classList.add("traffic_yellow");
  } else if (yellowlight.classList.contains("traffic_yellow")) {
    yellowlight.classList.remove("traffic_yellow");
    greenlight.classList.add("traffic_green");
  } else if (greenlight.classList.contains("traffic_green")) {
    greenlight.classList.remove("traffic_green");
    redlight.classList.add("traffic_red");
  }
});

