export class Board {
    Ranks = ["a", "b", "c", "d", "e", "f", "g", "h"];
    Files = ["1", "2", "3", "4", "5", "6", "7", "8"];
    
    Squares: Square[][] = BoardHelper.InitSquares(this.Ranks, this.Files);
}

export class Square {
    SquareId : string = "";
    IsWhite: boolean = true;
    Piece: any = null;
}

export class BoardHelper {
    static InitSquares(ranks : string[], files: string []) {
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
}