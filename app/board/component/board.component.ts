import {Component} from '@angular/core';
import {Board} from '../model/board'

@Component({
  selector: 'chess-board',
  templateUrl: './app/board/component/board.component.html',
  styleUrls: ['./app/board/component/board.component.css']
})
export class BoardComponent {
    Board: Board = new Board();
}