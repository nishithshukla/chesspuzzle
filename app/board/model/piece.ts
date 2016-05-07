export abstract class Piece {
    Id: string = "";
    IsWhite: boolean;
    SquareRank: string = ""; 
    SquareFile: string = ""; 
}

export class Pawn implements Piece {
    constructor(isWhite : boolean = true, rank: string = "", file: string = "") {
        this.IsWhite = isWhite;
        this.SquareRank = rank; 
        this.SquareFile = file; 
    }

    Id: string = "";
    IsWhite: boolean;
    SquareRank: string = ""; 
    SquareFile: string = ""; 
}

export class Bishop implements Piece {
    constructor(isWhite : boolean = true, rank: string = "", file: string = "") {
        this.IsWhite = isWhite;
        this.SquareRank = rank; 
        this.SquareFile = file; 
    }

    Id: string = "B";
    IsWhite: boolean;
    SquareRank: string = ""; 
    SquareFile: string = ""; 
}

export class Knight implements Piece {
    constructor(isWhite : boolean = true, rank: string = "", file: string = "") {
        this.IsWhite = isWhite;
        this.SquareRank = rank; 
        this.SquareFile = file; 
    }

    Id: string = "N";
    IsWhite: boolean;
    SquareRank: string = ""; 
    SquareFile: string = ""; 
}

export class Rook implements Piece {
    constructor(isWhite : boolean = true, rank: string = "", file: string = "") {
        this.IsWhite = isWhite;
        this.SquareRank = rank; 
        this.SquareFile = file; 
    }

    Id: string = "R";
    IsWhite: boolean;
    SquareRank: string = ""; 
    SquareFile: string = ""; 
}

export class Queen implements Piece {
    constructor(isWhite : boolean = true, rank: string = "", file: string = "") {
        this.IsWhite = isWhite;
        this.SquareRank = rank; 
        this.SquareFile = file; 
    }

    Id: string = "Q";
    IsWhite: boolean;
    SquareRank: string = ""; 
    SquareFile: string = ""; 
}

export class King implements Piece {
    constructor(isWhite : boolean = true, rank: string = "", file: string = "") {
        this.IsWhite = isWhite;
        this.SquareRank = rank; 
        this.SquareFile = file; 
    }

    Id: string = "K";
    IsWhite: boolean;
    SquareRank: string = ""; 
    SquareFile: string = ""; 
}

export class PieceFactory {
    static GetPiece(pieceCode : string, isWhite : boolean, rank : string, file : string) : Piece {
        var piece : Piece;
        
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
    }
    
    static GetPiecesFromPiecesPosition(piecesPosition : string) : Piece[] {
        var pieces = new Array<Piece>();

        var isWhite = true;
        piecesPosition.split(",").forEach(element => {
            if(element == "W") {
                isWhite = true;
            } 
            else if (element == "B") {
                isWhite = false;
            } 
            else {
                if(element.length == 2) {
                    pieces.push(PieceFactory.GetPiece("", isWhite, element[0], element[1]));                    
                }
                else if(element.length == 3) {
                    pieces.push(PieceFactory.GetPiece(element[0], isWhite, element[1], element[2]));                    
                }
            }
        });
        
        return pieces;
    }
}