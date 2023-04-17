
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'brazoesq'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.play(0);});
//Edge binding end
})("brazoesq");
//Edge symbol end:'brazoesq'
})(jQuery,AdobeEdge,"EDGE-735704589");