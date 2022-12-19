var txtInput= document.querySelector("#input-txt")
var btnTranslate =document.querySelector("#btn-translate")
var outputDiv= document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function errorHandler(){
    console.log("error occured", error)
}

function clickHandler(){
    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click", clickHandler)