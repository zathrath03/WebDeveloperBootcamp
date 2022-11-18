const button = document.querySelector("button")
const jokes = document.querySelector("#jokes")

button.addEventListener("click", replaceJoke)

async function addJoke() {
    const joke = await getJoke()
    const newLI = document.createElement("LI")
    newLI.append(joke)
    jokes.append(newLI)
}

async function replaceJoke() {
    const joke = await getJoke()
    const li = document.querySelector("li")
    li.innerText = joke
}

async function getJoke() {
    const config = { headers: { "Accept": "application/json" } }
    const joke = await axios.get("https://icanhazdadjoke.com/", config)
    return joke.data.joke
}

addJoke()