const player_1_score = document.querySelector("#player_1_score");
const player_2_score = document.querySelector("#player_2_score");
const winning_score = document.querySelector("#winning_score");

const player_1_button = document.querySelector("#increment_player_1");
const player_2_button = document.querySelector("#increment_player_2");
const reset_button = document.querySelector("#reset");

player_1_button.addEventListener('click', function () {
    current_score = parseInt(player_1_score.innerText);
    player_1_score.innerText = current_score + 1;
    check_winner(player_1_score);
});

player_2_button.addEventListener('click', function () {
    current_score = parseInt(player_2_score.innerText);
    player_2_score.innerText = current_score + 1;
    check_winner(player_2_score);
});

function check_winner(player_score) {
    if (player_score.innerText === winning_score.value) {
        if (player_score === player_1_score) {
            player_1_score.style.color = "green";
            player_2_score.style.color = "red";
        } else {
            player_1_score.style.color = "red";
            player_2_score.style.color = "green";
        }
        player_1_button.disabled = true;
        player_2_button.disabled = true;
    }

}

reset_button.addEventListener('click', function () {
    player_1_score.innerText = "0";
    player_2_score.innerText = "0";
    player_1_score.style.color = "black";
    player_2_score.style.color = "black";
    player_1_button.disabled = false;
    player_2_button.disabled = false;
})