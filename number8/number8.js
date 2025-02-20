
function evenOrOdd(){
    let number = document.getElementById('evenorodd').value
    let result = (number % 2 === 0) ? "Even" : "Odd";
    document.getElementById('result8').innerText = `The number is ${result}.`;
}