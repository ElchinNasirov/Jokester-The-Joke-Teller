const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/enable button
const toggleButton = () => {
    button.disabled = !button.disabled;
}

// Passing a joke to voicerss api
const readTheJoke = (joke) => {
    console.log(joke)
    VoiceRSS.speech({
        key: '9586d3f683a54ec6881c63e3f3fc9d65',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

//  Getting jokes from joke api
const getJokes = async () => {
    let joke = "";
    const apiUrl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist";
    try {
        const res = await fetch(apiUrl)
        const data = await res.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        // text to speech
        readTheJoke(joke);

        // Disable button comp
        toggleButton();
    } catch (error) {
        console.log("Error", error)
    }
}

// adding event listener
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);
