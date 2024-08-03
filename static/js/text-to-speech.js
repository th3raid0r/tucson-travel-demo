function readText() {
    const text = document.querySelector('.content').textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}