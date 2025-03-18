var audio_1 = document.getElementById("audio_1");
var audio_2 = document.getElementById("audio_2");
var audio_3 = document.getElementById("audio_3");
var audio_4 = document.getElementById("audio_4");
var audio_5 = document.getElementById("audio_5");
var audio_6 = document.getElementById("audio_6");
var audio_7 = document.getElementById("audio_7");
var audio_8 = document.getElementById("audio_8");

function playAudio1() {
    audio_1.play();
}
function playAudio2() {
    audio_2.play();
}
function playAudio3() {
    audio_3.play();
}
function playAudio4() {
    audio_4.play();
}
function playAudio5() {
    audio_5.play();
}
function playAudio6() {
    audio_6.play();
}
function playAudio7() {
    audio_7.play();
}
function playAudio8() {
    audio_8.play();
}

function textToSpeech() {
    var text = document.getElementById("textToSpeech").value;
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    document.getElementById("textToSpeech").value = "";
}