const form = document.querySelector("#tweets");
const list = document.querySelector("#tweet_list");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const tweet = form.elements.tweet.value;
    const user = form.elements.username.value;
    newLI = document.createElement("LI");
    newLI.innerText = `${user} says ${tweet}`
    list.append(newLI)
    tweet.value = "";
    user.value = "";
});