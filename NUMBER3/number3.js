// Number 3
 // Function to get the maximum of three numbers
 function getMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Function to handle input and display result
function findMax() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let resultDisplay = document.getElementById("result3");

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        let maxNumber = getMax(num1, num2, num3);
        resultDisplay.textContent = `The maximum number is: ${maxNumber}`;
    } else {
        resultDisplay.textContent = "Please enter valid numbers.";
    }
}