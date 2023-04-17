
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Luces}","click",function(sym,e){sym.$("Luces").hide();sym.$("switch")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){sym.$("Luces").show();sym.$("switch")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_fantasma}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'cuervo'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.play(0);});
//Edge binding end
})("cuervo");
//Edge symbol end:'cuervo'

//=========================================================

//=========================================================

//Edge symbol: 'play_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13000,function(sym,e){sym.play(7000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_anim}","mouseover",function(sym,e){sym.play(7000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_anim}","mouseout",function(sym,e){sym.play(0);});
//Edge binding end
})("play_anim");
//Edge symbol end:'play_anim'
})(jQuery,AdobeEdge,"EDGE-36187397");