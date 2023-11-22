
function minutesToSeconds(minutes) {
      return minutes * 60;
}


function convert() {
    let minutesInput = document.getElementById("minutes").value;
    let minutes = parseFloat(minutesInput);

    if (isNaN(minutes)) {
        alert("Valid Minutes Required");
        return;
    }
    let seconds = minutesToSeconds(minutes);
    let resultElement = document.getElementById("result");
    resultElement.innerText = minutes + " minutes = " + seconds + " seconds.";
} 
let converBtn =document.getElementById('convertBtn');
converBtn.addEventListener('click',convert);

document.getElementById('clearBtn').addEventListener('click',function () {
    document.getElementById('minutes').value = "";
    document.getElementById("result").innerHTML = "";
});









