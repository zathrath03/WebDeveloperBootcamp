const player1 = {
    score: document.querySelector("#player_1_score"),
    button: document.querySelector("#increment_player_1")
};

const player2 = {
    score: document.querySelector("#player_2_score"),
    button: document.querySelector("#increment_player_2")
};

const winning_score = document.querySelector("#winning_score");
const reset_button = document.querySelector("#reset");

player1.button.addEventListener('click', function () {
    increment_score(player1);
    if (is_winner(player1.score)) {
        disable_player_buttons();
        update_score_colors(player1.score, player2.score);
    }
});

player2.button.addEventListener('click', function () {
    increment_score(player2);
    if (is_winner(player2.score)) {
        disable_player_buttons();
        update_score_colors(player2.score, player1.score);
    }
});

reset_button.addEventListener('click', reset);
winning_score.addEventListener('change', reset);

function increment_score(player) {
    current_score = parseInt(player.score.innerText);
    player.score.innerText = current_score + 1;
}

function update_score_colors(player, opponent) {
    player.classList.add('winner');
    opponent.classList.add('loser');
}

function is_winner(player_score) {
    return player_score.innerText === winning_score.value;
}

function disable_player_buttons() {
    player1.button.disabled = true;
    player2.button.disabled = true;
}

function reset() {
    reset_player(player1);
    reset_player(player2)
}

function reset_player(player) {
    player.score.innerText = "0";
    player.score.classList.remove('winner', 'loser');
    player.button.disabled = false;
}
