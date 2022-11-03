player_1_score = document.querySelector("#player_1_score");
player_2_score = document.querySelector("#player_2_score");
winning_score = document.querySelector("#winning_score");

player_1_button = document.querySelector("#increment_player_1");
player_2_button = document.querySelector("#increment_player_2");
reset_button = document.querySelector("#reset");

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