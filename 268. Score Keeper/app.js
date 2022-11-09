const player_1_score = document.querySelector("#player_1_score");
const player_2_score = document.querySelector("#player_2_score");
const winning_score = document.querySelector("#winning_score");

const player_1_button = document.querySelector("#increment_player_1");
const player_2_button = document.querySelector("#increment_player_2");
const reset_button = document.querySelector("#reset");

player_1_button.addEventListener('click', function () {
    current_score = parseInt(player_1_score.innerText);
    player_1_score.innerText = current_score + 1;
    if (is_winner(player_1_score)) {
        disable_player_buttons();
        update_score_colors(player_1_score, player_2_score);
    }
});

player_2_button.addEventListener('click', function () {
    current_score = parseInt(player_2_score.innerText);
    player_2_score.innerText = current_score + 1;
    if (is_winner(player_2_score)) {
        disable_player_buttons();
        update_score_colors(player_2_score, player_1_score);
    }
});

reset_button.addEventListener('click', reset);
winning_score.addEventListener('change', reset);

function update_score_colors(player, opponent) {
    player.classList.add('winner');
    opponent.classList.add('loser');
}

function is_winner(player_score) {
    return player_score.innerText === winning_score.value;
}

function disable_player_buttons() {
    player_1_button.disabled = true;
    player_2_button.disabled = true;
}

function reset() {
    player_1_score.innerText = "0";
    player_2_score.innerText = "0";
    player_1_score.classList.remove('winner', 'loser');
    player_2_score.classList.remove('winner', 'loser');
    player_1_button.disabled = false;
    player_2_button.disabled = false;
}