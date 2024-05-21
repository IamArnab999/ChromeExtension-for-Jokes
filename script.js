const getJokes = async () => {
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        const myJoke = document.querySelector('#jokeElement'); // Changed '#myJoke' to '#jokeElement'
        myJoke.innerHTML = data.value;
    } catch (error) {
        console.error(error); // Added error logging
    }
};

window.addEventListener("load", () => {
    getJokes();
});