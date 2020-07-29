(function(window) {
    var speakWord = "HELLO";
    var helloSpeaker = function (name) {
        console.log(speakWord + " " + name);
    }

    window.helloSpeaker = helloSpeaker;

}) (window);