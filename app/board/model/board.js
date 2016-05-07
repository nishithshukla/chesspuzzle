System.register(["./piece", "./position"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var piece_1, position_1;
    var Board, Square, BoardBuilder;
    return {
        setters:[
            function (piece_1_1) {
                piece_1 = piece_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            }],
        execute: function() {
            Board = (function () {
                function Board() {
                    this.Ranks = ["a", "b", "c", "d", "e", "f", "g", "h"];
                    this.Files = ["1", "2", "3", "4", "5", "6", "7", "8"];
                    this.Squares = BoardBuilder.BuildSquares(this.Ranks, this.Files);
                }
                Board.prototype.LoadInitialPieces = function () {
                    this.Pieces = piece_1.PieceFactory.GetPiecesFromPiecesPosition(position_1.PositionProvider.NewGame);
                    this.Squares = BoardBuilder.BuildPiecesOnBoard(this);
                };
                return Board;
            }());
            exports_1("Board", Board);
            Square = (function () {
                function Square() {
                    this.SquareId = "";
                    this.IsWhite = true;
                    this.Piece = null;
                }
                return Square;
            }());
            exports_1("Square", Square);
            BoardBuilder = (function () {
                function BoardBuilder() {
                }
                BoardBuilder.BuildSquares = function (ranks, files) {
                    var squares;
                    squares = new Array(8);
                    var isWhite = false;
                    for (var i = 1; i <= 8; i++) {
                        squares[i - 1] = new Array(8);
                        for (var j = 1; j <= 8; j++) {
                            squares[i - 1][j - 1] =
                                {
                                    SquareId: ranks[j - 1] + files[i - 1],
                                    IsWhite: isWhite,
                                    Piece: null
                                };
                            isWhite = !isWhite;
                        }
                        isWhite = !isWhite;
                    }
                    return squares;
                };
                ;
                BoardBuilder.BuildPiecesOnBoard = function (board) {
                    var squares = this.BuildSquares(board.Ranks, board.Files);
                    ;
                    board.Pieces.forEach(function (piece) {
                        var square = squares[board.Files.indexOf(piece.SquareFile)][board.Ranks.indexOf(piece.SquareRank)];
                        if (square) {
                            square.Piece = piece;
                        }
                    });
                    return squares;
                };
                return BoardBuilder;
            }());
            exports_1("BoardBuilder", BoardBuilder);
        }
    }
});
//# sourceMappingURL=board.js.map