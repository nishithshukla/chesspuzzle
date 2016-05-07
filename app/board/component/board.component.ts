import {Component, OnInit} from '@angular/core';
import {Board} from '../model/board'

@Component({
  selector: 'chess-board',
  templateUrl: './app/board/component/board.component.html',
  styleUrls: ['./app/board/component/board.component.css']
})
export class BoardComponent implements OnInit {
    Board: Board = new Board();
    
    ngOnInit() {
      this.Board.LoadInitialPieces();
    }
}