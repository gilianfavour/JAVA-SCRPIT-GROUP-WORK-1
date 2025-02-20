
 // Function to calculate the sum of two numbers
 function calculateSum() {
    // Get the values from the input fields
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter valid numbers in both fields.";
    } else {
        // Calculate the sum
        const sum = num1 + num2;

        // Display the result
        
        document.getElementById("result").textContent = `The sum is: ${sum}`;

        }
    }