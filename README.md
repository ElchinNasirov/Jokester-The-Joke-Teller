# Jokester-The-Joke-Teller

This is a simple training app based on HTML, CSS, JS and 2 APIs - [Joke API](https://sv443.net/jokeapi/v2/) and [Voice RSS Text-To-Speech API](http://www.voicerss.org/api/).
* Upon clicking on a button GET request is sent to the [Joke API](https://sv443.net/jokeapi/v2/) resulting in a received JSON object with a joke string.
* Joke is sent via the POST request to the [Voice RSS Text-To-Speech API](http://www.voicerss.org/api/).
* A response is received as an audio and inserted into the audio HTML element which is hidden.
* Finally the robot is telling user a joke.

## App

## Running this Locally

1. Go to the documentation page for the Voice RSS Text to Speech API page found [here](http://www.voicerss.org/tts/default.aspx)
2. Click on 'Get API Key' on the left nav bar.
3. Create a free account.
4. When your account is created, you need to activate the account by clicking the 'Activate Account' button on the sign up page.
5. Once your account is activated, you can copy your API key and paste it into the script.js file.
