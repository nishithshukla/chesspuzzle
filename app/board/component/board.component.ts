import { Component, OnInit } from '@angular/core';
import { Board, BoardBuilder } from '../model/board'
import { PieceMover  } from '../component/piecemover';

@Component({
  selector: 'chess-board',
  templateUrl: './app/board/component/board.component.html',
  styleUrls: ['./app/board/component/board.component.css'],
  providers: [PieceMover]
})

export class BoardComponent implements OnInit {
    constructor(private _pieceMover : PieceMover) {}
  
    Board: Board;
    
    ngOnInit() {
      this.Board = BoardBuilder.BuildBoard("NewGame");
      this._pieceMover.MakePiecesMovable(this.Board);
    }
    
    LoadPosition(positionName : string) {
      this.Board = BoardBuilder.BuildBoard(positionName);
      this._pieceMover.MakePiecesMovable(this.Board);
    }
}