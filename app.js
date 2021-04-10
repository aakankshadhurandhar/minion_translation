/*take reference to button and input output text area*/
var btnTranslate = document.querySelector("#btn-translate");
var textData = document.querySelector("#txt-input");
var outputData = document.querySelector("#txt-output");

/*Define api address */
var serverURL = "https://api.funtranslations.com/translate/minion.json";
/*define function for getting text for translating*/
function getTranslatedURL(value) {
    return serverURL + "?text=" + value;
}
/*onclick evet listener */
btnTranslate.addEventListener("click", btnClickHandler);
/*telling to browser what to do/fetch when text is provided*/
function btnClickHandler() {
    var textValue = textData.value;

    fetch(getTranslatedURL(textValue))
        .then(response => response.json())
        .then(json => outputData.innerText = json.contents.translated)
        .catch(errorHandler);
}
/*error handler function*/
function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with the server, try again later.");
}
