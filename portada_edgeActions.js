
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_cuervo}","click",function(sym,e){sym.$("cuervo").hide();sym.$("cuervoal").show();sym.play(0);sym.$("crow2")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_cuervoal}","click",function(sym,e){sym.$("Text").hide();sym.$("cuervoal").hide();sym.$("cuervo").show();sym.$("crow2")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_el_cuervo}","click",function(sym,e){sym.$("cuervo").show();sym.$("crow2")[0].play();sym.stop(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-728184970");