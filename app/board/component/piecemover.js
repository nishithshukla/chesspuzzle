System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var PieceMover;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PieceMover = (function () {
                function PieceMover() {
                }
                PieceMover.prototype.MakePiecesMovable = function (board) {
                    setTimeout(function () {
                        $('.draggable-piece').draggable({ cursor: "move", revert: "invalid" });
                        $('.droppable-square').droppable({
                            accept: function (dropPiece) {
                                var isPiece = $(dropPiece).hasClass("draggable-piece");
                                //todo: check other business logic if piece is allowed to be dropped here....
                                return isPiece;
                            },
                            drop: function (event, ui) {
                                $(this).removeClass("border").removeClass("over");
                                var dropped = ui.draggable;
                                var droppedOn = $(this);
                                $(dropped).detach().css({ top: 10, left: 10 }).appendTo(droppedOn);
                            },
                            over: function (event, elem) {
                                $(this).addClass("over");
                            },
                            out: function (event, elem) {
                                $(this).removeClass("over");
                            }
                        });
                    }, 0);
                };
                PieceMover = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PieceMover);
                return PieceMover;
            }());
            exports_1("PieceMover", PieceMover);
        }
    }
});
//# sourceMappingURL=piecemover.js.map