System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Piece, Pawn, Bishop, Knight, Rook, Queen, King, PieceFactory;
    return {
        setters:[],
        execute: function() {
            Piece = (function () {
                function Piece() {
                    this.Id = "";
                    this.SquareRank = "";
                    this.SquareFile = "";
                }
                return Piece;
            }());
            exports_1("Piece", Piece);
            Pawn = (function () {
                function Pawn(isWhite, rank, file) {
                    if (isWhite === void 0) { isWhite = true; }
                    if (rank === void 0) { rank = ""; }
                    if (file === void 0) { file = ""; }
                    this.Id = "";
                    this.SquareRank = "";
                    this.SquareFile = "";
                    this.IsWhite = isWhite;
                    this.SquareRank = rank;
                    this.SquareFile = file;
                }
                return Pawn;
            }());
            exports_1("Pawn", Pawn);
            Bishop = (function () {
                function Bishop(isWhite, rank, file) {
                    if (isWhite === void 0) { isWhite = true; }
                    if (rank === void 0) { rank = ""; }
                    if (file === void 0) { file = ""; }
                    this.Id = "B";
                    this.SquareRank = "";
                    this.SquareFile = "";
                    this.IsWhite = isWhite;
                    this.SquareRank = rank;
                    this.SquareFile = file;
                }
                return Bishop;
            }());
            exports_1("Bishop", Bishop);
            Knight = (function () {
                function Knight(isWhite, rank, file) {
                    if (isWhite === void 0) { isWhite = true; }
                    if (rank === void 0) { rank = ""; }
                    if (file === void 0) { file = ""; }
                    this.Id = "N";
                    this.SquareRank = "";
                    this.SquareFile = "";
                    this.IsWhite = isWhite;
                    this.SquareRank = rank;
                    this.SquareFile = file;
                }
                return Knight;
            }());
            exports_1("Knight", Knight);
            Rook = (function () {
                function Rook(isWhite, rank, file) {
                    if (isWhite === void 0) { isWhite = true; }
                    if (rank === void 0) { rank = ""; }
                    if (file === void 0) { file = ""; }
                    this.Id = "R";
                    this.SquareRank = "";
                    this.SquareFile = "";
                    this.IsWhite = isWhite;
                    this.SquareRank = rank;
                    this.SquareFile = file;
                }
                return Rook;
            }());
            exports_1("Rook", Rook);
            Queen = (function () {
                function Queen(isWhite, rank, file) {
                    if (isWhite === void 0) { isWhite = true; }
                    if (rank === void 0) { rank = ""; }
                    if (file === void 0) { file = ""; }
                    this.Id = "Q";
                    this.SquareRank = "";
                    this.SquareFile = "";
                    this.IsWhite = isWhite;
                    this.SquareRank = rank;
                    this.SquareFile = file;
                }
                return Queen;
            }());
            exports_1("Queen", Queen);
            King = (function () {
                function King(isWhite, rank, file) {
                    if (isWhite === void 0) { isWhite = true; }
                    if (rank === void 0) { rank = ""; }
                    if (file === void 0) { file = ""; }
                    this.Id = "K";
                    this.SquareRank = "";
                    this.SquareFile = "";
                    this.IsWhite = isWhite;
                    this.SquareRank = rank;
                    this.SquareFile = file;
                }
                return King;
            }());
            exports_1("King", King);
            PieceFactory = (function () {
                function PieceFactory() {
                }
                PieceFactory.GetPiece = function (pieceCode, isWhite, rank, file) {
                    var piece;
                    switch (pieceCode) {
                        case "K":
                            piece = new King(isWhite, rank, file);
                            break;
                        case "Q":
                            piece = new Queen(isWhite, rank, file);
                            break;
                        case "R":
                            piece = new Rook(isWhite, rank, file);
                            break;
                        case "B":
                            piece = new Bishop(isWhite, rank, file);
                            break;
                        case "N":
                            piece = new Knight(isWhite, rank, file);
                            break;
                        default:
                            piece = new Pawn(isWhite, rank, file);
                            break;
                    }
                    return piece;
                };
                PieceFactory.GetPiecesFromPiecesPosition = function (piecesPosition) {
                    var pieces = new Array();
                    var isWhite = true;
                    piecesPosition.split(",").forEach(function (element) {
                        if (element == "W") {
                            isWhite = true;
                        }
                        else if (element == "B") {
                            isWhite = false;
                        }
                        else {
                            if (element.length == 2) {
                                pieces.push(PieceFactory.GetPiece("", isWhite, element[0], element[1]));
                            }
                            else if (element.length == 3) {
                                pieces.push(PieceFactory.GetPiece(element[0], isWhite, element[1], element[2]));
                            }
                        }
                    });
                    return pieces;
                };
                return PieceFactory;
            }());
            exports_1("PieceFactory", PieceFactory);
        }
    }
});
//# sourceMappingURL=piece.js.map