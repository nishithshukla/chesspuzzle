import {Component, OnInit} from '@angular/core';
import {Board, BoardBuilder} from '../model/board'

@Component({
  selector: 'chess-board',
  templateUrl: './app/board/component/board.component.html',
  styleUrls: ['./app/board/component/board.component.css']
})
export class BoardComponent implements OnInit {
    Board: Board;
    
    ngOnInit() {
      this.Board = BoardBuilder.BuildBoard("NewGame");
    }
    
    LoadPosition(positionName : string) {
      this.Board = BoardBuilder.BuildBoard(positionName);
    }
}