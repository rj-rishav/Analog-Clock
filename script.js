// num = document.getElementById("num-12");
// num.style.transform = "translate(-15px,-200px)";
// let num = document.getElementById("num-1");
// num.style.transform = "translate(170px,-100px)";
// num = document.getElementById("num-2");
// num.style.transform = "translate(170px,-100px)";
// num = document.getElementById("num-3");
// num.style.transform = "translate(170px,-100px)";
// num = document.getElementById("num-4");
// num.style.transform = "translate(170px,-100px)";
// num = document.getElementById("num-5");
// num.style.transform = "translate(170px,-100px)";
// num = document.getElementById("num-6");
// num.style.transform = "translate(-15px,180px)";
// num = document.getElementById("num-7");
// num.style.transform = "translate(170px,-100px)";
// num = document.getElementById("num-8");
// num.style.transform = "translate(170px,-100px)";
// num = document.getElementById("num-9");
// num.style.transform = "translate(170px,-100px)";
// num = document.getElementById("num-10");
// num.style.transform = "translate(170px,-100px)";
// num = document.getElementById("num-11");
// num.style.transform = "translate(170px,-100px)";

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourHand = document.getElementById("hours-hand");
    const minuteHand = document.getElementById("minutes-hand");
    const secondHand = document.getElementById("seconds-hand");
    const hourRotation = (hours % 12) * 30 + minutes * 0.5; // Each hour is 30 degrees, and additional rotation based on minutes
    const minuteRotation = minutes * 6; // Each minute is 6 degrees
    const secondRotation = seconds * 6; // Each second is 6 degrees
    
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}
      
// Update the clock every second
setInterval(updateClock, 1000);
