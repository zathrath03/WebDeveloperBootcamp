const form = document.querySelector("#tweets");
const list = document.querySelector("#tweet_list");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const tweet = form.elements.tweet;
    const user = form.elements.username;
    newLI = document.createElement("LI");
    newLI.innerHTML = `<b>${user.value}</b> says ${tweet.value}`;
    list.append(newLI);
    tweet.value = "";
    user.value = "";
});