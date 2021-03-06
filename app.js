var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
};

function errorHandling(error) {
    console.log("error occured!", error);
    alert("something went wrong")
};

function translateAction() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandling)
};

btnTranslate.addEventListener("click", translateAction);

  