function speak() {
    let inputText = document.getElementById("input").value
    if (inputText.trim() === ""  ){
        alert("Enter Some Thing First")
        return; 
    } 
    let utterance = new SpeechSynthesisUtterance(inputText)
    utterance.lang = "en-us"
    speechSynthesis.cancel()
    speechSynthesis.speak(utterance)

}
