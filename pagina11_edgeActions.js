
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_luz}","click",function(sym,e){sym.$("luz").hide();sym.$("switch")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){sym.$("luz").show();sym.$("switch")[0].play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-685850612");