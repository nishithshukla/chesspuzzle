System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Board, Square, BoardHelper;
    return {
        setters:[],
        execute: function() {
            Board = (function () {
                function Board() {
                    this.Ranks = ["a", "b", "c", "d", "e", "f", "g", "h"];
                    this.Files = ["1", "2", "3", "4", "5", "6", "7", "8"];
                    this.Squares = BoardHelper.InitSquares(this.Ranks, this.Files);
                }
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
            BoardHelper = (function () {
                function BoardHelper() {
                }
                BoardHelper.InitSquares = function (ranks, files) {
                    var squares;
                    squares = new Array(8);
                    var isWhite = false;
                    for (var i = 1; i <= 8; i++) {
                        squares[i - 1] = new Array(8);
                        for (var j = 1; j <= 8; j++) {
                            squares[i - 1][j - 1] = { SquareId: ranks[j - 1] + files[i - 1], IsWhite: isWhite, Piece: null };
                            isWhite = !isWhite;
                        }
                        isWhite = !isWhite;
                    }
                    return squares;
                };
                ;
                return BoardHelper;
            }());
            exports_1("BoardHelper", BoardHelper);
        }
    }
});
//# sourceMappingURL=board.js.map