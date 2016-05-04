import {Component} from '@angular/core';
import {Board} from '../model/board'

@Component({
  selector: 'chess-board',
  templateUrl: './app/board/component/board.html'
})
export class BoardComponent {
    Board: Board = new Board();
}