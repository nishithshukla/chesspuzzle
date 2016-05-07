import {Piece, PieceFactory} from "./piece";
import {PositionProvider} from "./position";

export class Board {
    Ranks = ["a", "b", "c", "d", "e", "f", "g", "h"];
    Files = ["1", "2", "3", "4", "5", "6", "7", "8"];

    Squares: Square[][] = BoardBuilder.BuildSquares(this.Ranks, this.Files);
    Pieces: Piece[];
    
    LoadInitialPieces() {
         this.Pieces = PieceFactory.GetPiecesFromPiecesPosition(PositionProvider.NewGame);
         this.Squares = BoardBuilder.BuildPiecesOnBoard(this);
    }
}

export class Square {
    SquareId : string = "";
    IsWhite: boolean = true;
    Piece: any = null;
}

export class BoardBuilder {
    static BuildSquares(ranks : string[], files: string []) {
        var squares: Square[][]; 
        squares = new Array<Square[]>(8);
        var isWhite = false;
        for(var i=1; i<=8; i++)
        {
            squares[i-1]= new Array<Square>(8);
            for(var j=1; j<=8; j++)
            {
                squares[i-1][j-1] = 
                {
                    SquareId: ranks[j-1] + files[i-1], 
                    IsWhite: isWhite, 
                    Piece: null 
                };
                isWhite = !isWhite;    
            }
            isWhite = !isWhite;    
        }
        return squares; 
    };  
    
    static BuildPiecesOnBoard(board : Board) : Square[][] {
        var squares = this.BuildSquares(board.Ranks, board.Files);;
        
        board.Pieces.forEach(piece => {
            var square =  squares[board.Files.indexOf(piece.SquareFile)][board.Ranks.indexOf(piece.SquareRank)];

            if(square) { 
                square.Piece = piece; 
            }
        });
        
        return squares;
    }
}