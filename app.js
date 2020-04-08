const onload = () => {

    const $buttons = $('.box');
    const $player1 = 'x';
    const $player2 = 'o';
    let $playerCounter = 0;
    const moves = {
        x: [],
        o: []
    }

    const resetBoard = () => {
        $playerCounter = 0;
        moves.x = [];
        moves.o = [];

        $('.box').text("");
        $('#result').text("");
    }

    const isThereAWinner = (player) => {
        let thereIsAWinner = false;

        if ((moves[player].indexOf(0) !== -1) && 
            (moves[player].indexOf(1) !== -1) && 
            (moves[player].indexOf(2) !== -1)) {
                $('#result').text(player + ' Wins');
                thereIsAWinner = true;
        } 
        else if (
            (moves[player].indexOf(3) !== -1) && 
            (moves[player].indexOf(4) !== -1) && 
            (moves[player].indexOf(5) !== -1)) {
                $('#result').text(player + ' Wins');
                thereIsAWinner = true;
        } 
        else if (
            (moves[player].indexOf(6) !== -1) && 
            (moves[player].indexOf(7) !== -1) && 
            (moves[player].indexOf(8) !== -1)) {
                $('#result').text(player + ' Wins');
                thereIsAWinner = true;        
        } 
        else if (
            (moves[player].indexOf(0) !== -1) && 
            (moves[player].indexOf(3) !== -1) && 
            (moves[player].indexOf(6) !== -1)) {
                $('#result').text(player + ' Wins');
                thereIsAWinner = true;       
        } 
        else if (
            (moves[player].indexOf(1) !== -1) && 
            (moves[player].indexOf(4) !== -1) && 
            (moves[player].indexOf(7) !== -1)) {
                $('#result').text(player + ' Wins');
                thereIsAWinner = true;
        } 
        else if (
            (moves[player].indexOf(2) !== -1) && 
            (moves[player].indexOf(5) !== -1) && 
            (moves[player].indexOf(8) !== -1)) {
                $('#result').text(player + ' Wins');
                thereIsAWinner = true;
        } 
        else if (
            (moves[player].indexOf(0) !== -1) && 
            (moves[player].indexOf(4) !== -1) && 
            (moves[player].indexOf(8) !== -1)) {
                $('#result').text(player + ' Wins');
                thereIsAWinner = true;
        } 
        else if (
            (moves[player].indexOf(2) !== -1) && 
            (moves[player].indexOf(4) !== -1) && 
            (moves[player].indexOf(6) !== -1)) {
                $('#result').text(player + ' Wins');
                thereIsAWinner = true;
        } 
        else if (
            (moves.x.length + moves.o.length) === 9) {
                $('#result').text('It\'s a Draw');
        }
        return thereIsAWinner;
    };

    const disableButtons = (disabled) => {
        $buttons.each(indexOfButton => {
           $buttons[indexOfButton].disabled = disabled;
         });  
    }

    const buttonsClickHandler = () => {
        $buttons.one('click', event => {
            let isEndOfGame = false;
            if ($playerCounter % 2 === 0) {
                event.target.innerHTML = $player1;
                $playerCounter++;
                moves["x"].push($(event.target).index())
                isEndOfGame = isThereAWinner($player1);
                
            } else if ($playerCounter % 2 === 1) {
                event.target.innerHTML = $player2;
                $playerCounter++;
                moves["o"].push($(event.target).index())
                isEndOfGame = isThereAWinner($player2);
            }
            if (isEndOfGame === true) {
                disableButtons(true);
            }
        })
    }
    buttonsClickHandler();

    const $reset = $('#reset');
    $reset.click(function () {
        resetBoard();
        buttonsClickHandler();
        disableButtons(false);

    })
}
$(onload);