
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){sym.play(0);var fuegosym=sym.getSymbol("fuego");fuegosym.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'fuego'
(function(symbolName){})("fuego");
//Edge symbol end:'fuego'
})(jQuery,AdobeEdge,"EDGE-686902124");