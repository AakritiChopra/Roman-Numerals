//get the button
var btnTranslate = document.querySelector('#btn-translate');

//get the input
var txtInput = document.querySelector('#txt-input');

//get the output
var outputDiv = document.querySelector('#outputDiv');

//get the Server URL
var serverURL = "https://api.funtranslations.com/translate/roman-numerals.json";


//define translation function
function getTranslationURL(input)
{
    return serverURL + "?" + "text=" + input;

}

//Handle Error
function ErrorHandler(error)
{
    console.log('Error with the server');
    alert('Check the server connection!');
}

//ClickHandler
function clickHandler()
{
    //1. read the input text
var inputText = txtInput.value;
    //2. Go and fetch the URL
fetch(getTranslationURL(inputText)).
    //3. convert url into response.json
                                then(response => response.json()).
                                //4. output it 
                                                    //then(json => console.log(json.contents.translated))
                                                    then(json =>
                                                        {
                                                            var translatedText = json.contents.translated;
                                                            outputDiv.innerText = translatedText;
                                                        })
                                            
                                                         //5.Handle Error
                                                                .catch(ErrorHandler);
}



//Call the button event 
btnTranslate.addEventListener("click" , clickHandler);