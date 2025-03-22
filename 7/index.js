function c_to_f() {
    document.getElementById("output1").innerHTML = "";
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output3").innerHTML = "";

    let c_value = document.getElementById("c_input").value;
    let f = c_value * (9 / 5) + 32;
    document.getElementById("output1").innerHTML = f.toFixed(2) + "°F";

    if (c_value <= 0) {
        document.getElementById("output2").innerHTML = '<img src="./images/cold.gif"/>';
        document.getElementById("output3").innerHTML = '<audio src="./audio/cold.mp3" controls autoplay></audio>';
    } else if (c_value >= 30) {
        document.getElementById("output2").innerHTML = '<img src="./images/hot.gif"/>';
        document.getElementById("output3").innerHTML = '<audio src="./audio/hot.mp3" controls autoplay></audio>';
    }
}

function f_to_c() {
    document.getElementById("output4").innerHTML = "";
    document.getElementById("output5").innerHTML = "";
    document.getElementById("output6").innerHTML = "";
        
    let f_value = document.getElementById("f_input").value;
    let c = (f_value - 32) * (5 / 9);
    document.getElementById("output4").innerHTML = c.toFixed(2) + "°C";
        
    if (f_value <= 32) {
        document.getElementById("output5").innerHTML = '<img src="./images/cold.gif"/>';
        document.getElementById("output6").innerHTML = '<audio src="./audio/cold.mp3" controls autoplay></audio>';
    } else if (f_value >= 86) { 
        document.getElementById("output5").innerHTML = '<img src="./images/hot.gif"/>';
        document.getElementById("output6").innerHTML = '<audio src="./audio/hot.mp3" controls autoplay></audio>';
    }
}

