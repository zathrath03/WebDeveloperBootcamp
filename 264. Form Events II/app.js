const form = document.querySelector("#tweets");
const tweet = document.querySelector("#tweet");
const user = document.querySelector("#user");
const list = document.querySelector("#tweet_list")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    newLI = document.createElement("LI");
    newLI.innerText = `${user.value} says ${tweet.value}`
    list.append(newLI)
    tweet.value = "";
    user.value = "";
});