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
    current_score = parseInt(player1.score.innerText);
    player1.score.innerText = current_score + 1;
    if (is_winner(player1.score)) {
        disable_player_buttons();
        update_score_colors(player1.score, player2.score);
    }
});

player2.button.addEventListener('click', function () {
    current_score = parseInt(player2.score.innerText);
    player2.score.innerText = current_score + 1;
    if (is_winner(player2.score)) {
        disable_player_buttons();
        update_score_colors(player2.score, player1.score);
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
    player1.button.disabled = true;
    player2.button.disabled = true;
}

function reset() {
    player1.score.innerText = "0";
    player2.score.innerText = "0";
    player1.score.classList.remove('winner', 'loser');
    player2.score.classList.remove('winner', 'loser');
    player1.button.disabled = false;
    player2.button.disabled = false;
}