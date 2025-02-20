function square(num) {  
    return num * num;  
}  

function getSquares() {
    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);
    let resultList = document.getElementById("result2");

    resultList.innerHTML = ""; // Clear previous results

    if (!isNaN(start) && !isNaN(end) && start <= end) {
        for (let i = start; i <= end; i++) {
            let listItem = document.createElement("li");
            listItem.textContent = `The square of ${i} is: ${square(i)}`;
            resultList.appendChild(listItem);
        }
    } else {
        resultList.innerHTML = "<li>Please enter valid numbers, and ensure start is less than or equal to end.</li>";
    }
}