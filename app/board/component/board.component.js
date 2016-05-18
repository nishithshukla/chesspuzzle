System.register(['@angular/core', '../model/board', '../component/piecemover'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, board_1, piecemover_1;
    var BoardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (board_1_1) {
                board_1 = board_1_1;
            },
            function (piecemover_1_1) {
                piecemover_1 = piecemover_1_1;
            }],
        execute: function() {
            BoardComponent = (function () {
                function BoardComponent(_pieceMover) {
                    this._pieceMover = _pieceMover;
                }
                BoardComponent.prototype.ngOnInit = function () {
                    this.Board = board_1.BoardBuilder.BuildBoard("NewGame");
                    this._pieceMover.MakePiecesMovable(this.Board);
                };
                BoardComponent.prototype.LoadPosition = function (positionName) {
                    this.Board = board_1.BoardBuilder.BuildBoard(positionName);
                    this._pieceMover.MakePiecesMovable(this.Board);
                };
                BoardComponent = __decorate([
                    core_1.Component({
                        selector: 'chess-board',
                        templateUrl: './app/board/component/board.component.html',
                        styleUrls: ['./app/board/component/board.component.css'],
                        providers: [piecemover_1.PieceMover]
                    }), 
                    __metadata('design:paramtypes', [piecemover_1.PieceMover])
                ], BoardComponent);
                return BoardComponent;
            }());
            exports_1("BoardComponent", BoardComponent);
        }
    }
});
//# sourceMappingURL=board.component.js.map