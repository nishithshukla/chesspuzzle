import {Component} from '@angular/core';
import {BoardComponent} from './board/component/board.component'
import {PieceMover} from './board/component/piecemover'

@Component({
  selector: 'chess-app',
  template: '<chess-board></chess-board>',
  directives: [BoardComponent]
})
export class AppComponent {
  
 }