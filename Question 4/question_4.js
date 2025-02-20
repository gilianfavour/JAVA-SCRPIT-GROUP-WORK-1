function convertTo24Hour(time) {
    let [timePart, modifier] = time.split(" ");
    let [hours, minutes] = timePart.split(":").map(Number);

    if (modifier.toUpperCase() === "PM" && hours !== 12) {
        hours += 12;
    } else if (modifier.toUpperCase() === "AM" && hours === 12) {
        hours = 0;
    }

    // Format hours and minutes with leading zero if needed
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

// Function to get input and display result
function convertTime() {
    let timeInput = document.getElementById("timeInput").value.trim();
    let resultDisplay = document.getElementById("result4");

    let convertedTime = convertTo24Hour(timeInput);
    resultDisplay.textContent = `24-hour format: ${convertedTime}`;
}