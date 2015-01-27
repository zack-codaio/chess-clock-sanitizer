/**
 * Created by zackaman on 1/26/15.
 */
var
    chess = require('chess'),
    util = require('util'),
    fs = require('fs'),
    game = chess.create();
//1 12am
game.move('Nf3');
getBoard();
game.move('c5');
getBoard();

//2 1am
game.move('c4');
getBoard();
game.move('Nc6');
getBoard();

//3 2am
game.move('Nc3');
getBoard();
game.move('g6');
getBoard();

//4 3am
game.move('g3');
getBoard();
game.move('Bg7');
getBoard();

//5 4am
game.move('Bg2');
getBoard();
game.move('d6');
getBoard();

//6 5am
game.move('0-0');
getBoard();
game.move('Nf6');
getBoard();

//7 6am
game.move('e3');
getBoard();
game.move('0-0');
getBoard();

//8 7am
game.move('d4');
getBoard();
game.move('Bf5');
getBoard();

//9 8am
game.move('b3');
getBoard();
game.move('cxd4');
getBoard();

//10 9am
game.move('Nxd4');
getBoard();
game.move('Bg4');
getBoard();

//11 10am
game.move('Qd2');
getBoard();
game.move('Qc8');
getBoard();

//12 11am
game.move('Bb2');
getBoard();
game.move('Bh3');
getBoard();

//13 12pm
game.move('Nd5');
getBoard();
game.move('Nxd5');
getBoard();

//14 1pm
game.move('cxd5');
getBoard();
game.move('Bxg2');
getBoard();

//15 2pm
game.move('Kxg2');
getBoard();
game.move('Nxd4');
getBoard();

//16 3pm
game.move('Bxd4');
getBoard();
game.move('Qf5');
getBoard();

//17 4pm
game.move('Bxg7');
getBoard();
game.move('Kxg7');
getBoard();

//18 5pm
game.move('Qd4');
getBoard();
game.move('Qf6');
getBoard();

//19 6pm
game.move('Qb4');
getBoard();
game.move('Qe5');
getBoard();

//20 7pm
game.move('Qxb7');
getBoard();
game.move('Rfb8');
getBoard();

//21 8pm
game.move('Qc6');
getBoard();
game.move('Rc8');
getBoard();

//22 9pm
game.move('Qb7');
getBoard();
game.move('Rcb8');
getBoard();

//23 10pm
game.move('Qc6');
getBoard();
game.move('Rc8');
getBoard();

//24 11pm
game.move('Qb7');
getBoard();
game.move('Rcb8');
getBoard();
fs.writeFile('carlsen_out.txt', "");

//console.log(JSON.stringify(game.getStatus(), 0, 2));
function getBoard(){
    //0 for null
    //p/P
    //r/R
    //n/N
    //b/B
    //q/Q
    //k/K
    var boardstring = "";

    var board = game.getStatus().board.squares;

    //console.log(util.inspect(board, { showHidden: true, depth: null }));
    //console.log(util.inspect(board[33], { showHidden: true, depth: null }))
    for(var i = 0; i < 64; i++){
     square = boardTranslate(board[i]);
        boardstring += square;
    }
    console.log(boardstring);
    fs.appendFile('carlsen_out.txt', boardstring +"\n", function(err){
        if(err){
            console.log('error writing to file');
        }

    });


    function boardTranslate(square){
        //0 for null
        if(square.piece == null){
            //console.log("piece is null");
            return "0";
        }
        //p/P
        else {
            if (square.piece.type == 'pawn') {
                //console.log("piece is pawn");
                if(square.piece.side.name == 'black'){
                    return "P";
                }
                return "p";
            }
            //r/R
            if(square.piece.type == 'rook'){
                //console.log("piece is rook");
                if(square.piece.side.name == 'black'){
                    return "R";
                }
                return "r";
            }
            //n/N
            if(square.piece.type == 'knight'){
                //console.log("piece is knight");
                if(square.piece.side.name == 'black'){
                    return "N";
                }
                return "n";
            }
            //b/B
            if(square.piece.type == 'bishop'){
                //console.log("piece is bishop");
                if(square.piece.side.name == 'black'){
                    return "B";
                }
                return "b";
            }
            //q/Q
            if(square.piece.type == 'queen'){
                //console.log("piece is queen");
                if(square.piece.side.name == 'black'){
                    return "Q";
                }
                return "q";
            }
            //k/K
            if(square.piece.type == 'king'){
                //console.log('piece is king');
                if(square.piece.side.name == 'black'){
                    return "K";
                }
                return "k";
            }
        }

    }
}

