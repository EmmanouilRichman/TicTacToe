var squares = document.querySelectorAll("td");
var button = document.querySelector("button")
var playerOneLabel = document.querySelector("#score1");
var playerTwoLabel = document.querySelector("#score2");
var playerOneScore = 0;
var playerTwoScore = 0;
var p1 = $("#p1");
var p2 = $("#p2")
var player1 = "X";
var player2 = "O";
var indiciesOfCorrect = [];
var isPlayerOne = true;
var turns = 0;
var playing = true;
var winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    

    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            if(isPlayerOne){
                if(this.textContent === ""){
                    this.textContent = player1;
                    isPlayerOne = !isPlayerOne;
                    turns++;
                   checkForWinner("X");
                }
            }
            else{
                if(this.textContent === ""){
                    this.textContent = player2;
                    isPlayerOne = !isPlayerOne;
                    turns++;
                    
                    checkForWinner("O");
                    
                }
            }
        
        });
    }

    button.addEventListener("click", function(){
        for(var i = 0; i < squares.length; i++){
            squares[i].textContent = "";
        }
        isPlayerOne = true;
        playerOneLabel.textContent = 0;
        playerTwoLabel.textContent = 0;
        playerOneScore = 0;
        playerTwoScore = 0;

    });
    
        function reset(winner){
            for(var i = 0; i < squares.length; i++){
                squares[i].textContent = "";
            }

            isPlayerOne = true;
            if(winner === player1){

                playerOneScore++;
                playerOneLabel.textContent = playerOneScore;
            }
            else{
                playerTwoScore++;
                playerTwoLabel.textContent = playerTwoScore;
            }
        }



        
    function checkForWinner(curPlayer){
        winCombos.forEach(function(subArr){
          var counter = 0;
          subArr.forEach(function(elem){
            if(squares[elem].innerHTML === curPlayer){
              counter++;
              if(counter == 3 ){
                winner = curPlayer;
                reset(winner);
              }
            }
          });
        });
    }

    function changeLabelColor(){
        if(isPlayerOne){
            p2.removeClass("highlight")
            p1.addClass("highlight");
        }
        else{
            p1.removeClass("highlight")
            p2.addClass("highlight");
        }
    }