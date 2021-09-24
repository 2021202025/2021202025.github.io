function fun1() {
    var d1 = document.getElementById("profileContent");
    var d2 = document.getElementById("workContent");
    var d3 = document.getElementById("projectsContent");
    var d4 = document.getElementById("educationContent");
    d1.style.display = "block";
    d2.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "none";
}

function fun2() {
    var d1 = document.getElementById("profileContent");
    var d2 = document.getElementById("workContent");
    var d3 = document.getElementById("projectsContent");
    var d4 = document.getElementById("educationContent");
    d1.style.display = "none";
    d2.style.display = "block";
    d3.style.display = "none";
    d4.style.display = "none";
}

function fun3() {
    var d1 = document.getElementById("profileContent");
    var d2 = document.getElementById("workContent");
    var d3 = document.getElementById("projectsContent");
    var d4 = document.getElementById("educationContent");
    d1.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "block";
    d4.style.display = "none";
}

function fun4() {
    var d1 = document.getElementById("profileContent");
    var d2 = document.getElementById("workContent");
    var d3 = document.getElementById("projectsContent");
    var d4 = document.getElementById("educationContent");
    d1.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "block";
}

function fun5() {
    console.log("asjfhk")
    var d1 = document.getElementById("timeDiv");
    var dt = Date();
    dt = dt.substring(0, 25);
    console.log(dt);
    d1.innerHTML = "Time: " + dt;
}

setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" +
        min + ":" + sec + " " + am_pm;

    document.getElementById("clock")
        .innerHTML = today + "  " + currentTime;
}
showTime();