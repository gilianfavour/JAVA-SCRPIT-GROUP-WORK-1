
function reverseASentence(){
    let sentence = document.getElementById('reverse').value;
    let reversedSentence = sentence.split('').reverse().join('');
    document.getElementById('result7').innerText = `Reversed sentence: ${reversedSentence}`;
}