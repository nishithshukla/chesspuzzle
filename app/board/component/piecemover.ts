import { Injectable } from '@angular/core';
import { Board, BoardBuilder } from '../model/board'


@Injectable()
export class PieceMover {

    MakePiecesMovable(board : Board) {
      setTimeout(() => {
        $('.draggable-piece').draggable({ cursor: "move", revert: "invalid"});
        $('.droppable-square').droppable(
            { 
              accept: function(dropPiece) { 
                var isPiece = $(dropPiece).hasClass("draggable-piece");
                //todo: check other business logic if piece is allowed to be dropped here....
                return isPiece;
              }, 
              
              drop: function(event, ui) {
                    $(this).removeClass("border").removeClass("over");
                    var dropped = ui.draggable;
                    var droppedOn = $(this);
                    $(dropped).detach().css({top: 10,left: 10}).appendTo(droppedOn);
            },
             
            over: function(event, elem) {
                    $(this).addClass("over");
            },
            
            out: function(event, elem) {
                  $(this).removeClass("over");
            }
        });
        }, 0);
    }   
}