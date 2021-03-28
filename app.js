var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi..repl.co/translate/yoda.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function clickHandler() {
    // outputDiv.innertext("wsfgdhfj"+txtInput.value);
    var inputText = txtInput.value; //taking input 

    //calling server for processing
    fetch(getTranslationURL(text))
        .then(response => response, json())
        .then(json => console.log(json))
}

btnTranslate.addEventListener("click", clickHandler)