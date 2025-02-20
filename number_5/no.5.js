function countWords() {
    
    const sentence = document.getElementById("sentenceInput").value.trim();

    // Split the sentence into words using spaces and filter out empty strings
    const words = sentence.split(/\s+/).filter(word => word.length > 0);

    
    const wordCount = words.length;

    
    document.getElementById("wordCountResult").textContent = `The sentence has ${wordCount} word(s).`;
}
