
(function($,Edge,compId){var _=null,y=true,n=false,or='-webkit-transform-origin',e8='${_hombro3}',x2='3.0.0.322',c='color',x4='rgba(0,0,0,0)',e9='${_cabeza2}',g='image',x5='rgba(192,192,192,0.00)',e15='${_hombro2}',a='Base State',oz='-moz-transform-origin',x12='hidden',e22='${_brazo3}',m='rect',dt='Default Timeline',x1='3.0.0',i='none',e16='${_brazo4}',w='width',on='msTransformOrigin',lf='left',e20='${_brazo2b}',oo='-o-transform-origin',e19='${_brazo2a}',t='transform',o='opacity',e17='${_luz}',e13='${_Rectangle}',e21='${_pierna1}',rz='rotateZ',bg='background-color',x7='@@0@@% @@1@@%',e18='${_brazo1}',om='-ms-transform-origin',r='deg',x14='pointer',x3='both',x10='rgba(255,255,255,1)',tp='top',h='height',ql='linear',ov='overflow',xc='rgba(0,0,0,1)',e11='${_Stage}',x6='stage',s='style';var im='images/';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'preloadAudio':false};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:x3,cg:x3,iS:a,gpu:n,rI:n,cn:{dom:[{id:'fondo',t:g,r:['0','0','512px','768px','auto','auto'],f:[x4,'imagenes/pagina31/pagina31_0010_fondo.png','0px','0px']},{id:'brazo1',t:g,r:['262px','599px','49px','74px','auto','auto'],f:[x4,'imagenes/pagina31/pagina31_0009_brazo1.png','0px','0px'],tf:[[],[],[],[],['72.0748%','69.8201%']]},{id:'pierna1',t:g,r:['136px','611px','91px','87px','auto','auto'],f:[x4,'imagenes/pagina31/pagina31_0008_pierna1.png','0px','0px'],tf:[[],[],[],[],['25.1161%','21.0338%']]},{id:'brazo2a',t:g,r:['197px','418px','45px','76px','auto','auto'],f:[x4,'imagenes/pagina31/pagina31_0005_brazo2a.png','0px','0px'],tf:[[],[],[],[],['21.5952%','87.9667%']]},{id:'hombro2',t:g,r:['195px','500px','58px','81px','auto','auto'],f:[x4,'imagenes/pagina31/pagina31_0006_hombro2.png','0px','0px']},{id:'brazo2b',t:g,r:['233px','507px','101px','64px','auto','auto'],f:[x4,'imagenes/pagina31/pagina31_0007_brazo2a.png','0px','0px'],tf:[[],[],[],[],['12.9051%','61.5521%']]},{id:'cabeza2',t:g,r:['165px','432px','82px','112px','auto','auto'],f:[x4,'imagenes/pagina31/pagina31_0004_cabeza2.png','0px','0px']},{id:'brazo3',t:g,r:['99px','167px','63px','72px','auto','auto'],f:[x4,'imagenes/pagina31/pagina31_0003_brazo3.png','0px','0px'],tf:[[],[],[],[],['50.2375%','84.1524%']]},{id:'hombro3',t:g,r:['89px','157px','85px','109px','auto','auto'],f:[x4,'imagenes/pagina31/pagina31_0002_hombro3.png','0px','0px']},{id:'brazo4',t:g,r:['232px','99px','97px','71px','auto','auto'],f:[x4,'imagenes/pagina31/pagina31_0001_brazo4.png','0px','0px'],tf:[[],[],[],[],['19.7556%','70.3623%']]},{id:'luz',t:g,r:['300px','47px','213px','393px','auto','auto'],f:[x4,'imagenes/pagina31/pagina31_0000_luz.png','0px','0px']},{id:'piano_g',t:'audio',tag:'audio',r:['0','0','320px','45px','auto','auto'],sr:['media/piano_g.ogg']},{id:'Rectangle',t:m,r:['1px','0px','511px','766px','auto','auto'],cu:['pointer'],f:[x5],s:[0,xc,i]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3000,a:n,tt:[{id:"eid11",tr:[function(e,d){this.eMA(e,d);},['play','${_piano_g}',[]],""],p:250}]}}}};var S1=symbols[x6];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e8).P(lf,89).P(tp,157);A1.A(e9).P(lf,165).P(tp,432);A1.A(e11).P(bg,x10,c).P(w,512).P(h,768).P(ov,x12);A1.A(e13).P(tp,0).P(lf,1).P(h,766).P(bg,x5,c).P("cursor",x14).P(w,511);A1.A(e15).P(lf,195).P(tp,500);A1.A(e16).P(or,[19.76,70.36],_,x7).P(oz,[19.76,70.36],_,x7).P(om,[19.76,70.36],_,x7).P(on,[19.76,70.36],_,x7).P(oo,[19.76,70.36],_,x7).P(lf,232).P(tp,99).P(rz,0,t,_,r).T(2,25,0.5,ql).T(2.5,0,0.5);A1.A(e17).P(tp,47).P(lf,300).P(o,0,_,_,"").T(0.25,1,0.1,ql);A1.A(e18).P(tp,599).P(or,[72.07,69.82],_,x7).P(oz,[72.07,69.82],_,x7).P(om,[72.07,69.82],_,x7).P(on,[72.07,69.82],_,x7).P(oo,[72.07,69.82],_,x7).P(lf,262).P(rz,0,t,_,r).T(0,19,0.5,ql).T(0.5,0,0.5);A1.A(e19).P(tp,418).P(or,[21.6,87.97],_,x7).P(oz,[21.6,87.97],_,x7).P(om,[21.6,87.97],_,x7).P(on,[21.6,87.97],_,x7).P(oo,[21.6,87.97],_,x7).P(lf,197).P(rz,0,t,_,r).T(1,31,0.5,ql).T(1.5,0,0.5);A1.A(e20).P(tp,507).P(or,[12.91,61.55],_,x7).P(oz,[12.91,61.55],_,x7).P(om,[12.91,61.55],_,x7).P(on,[12.91,61.55],_,x7).P(oo,[12.91,61.55],_,x7).P(lf,233).P(rz,0,t,_,r).T(1,-40,0.5,ql).T(1.5,0,0.5);A1.A(e21).P(tp,611).P(or,[25.12,21.03],_,x7).P(oz,[25.12,21.03],_,x7).P(om,[25.12,21.03],_,x7).P(on,[25.12,21.03],_,x7).P(oo,[25.12,21.03],_,x7).P(lf,136).P(rz,0,t,_,r).T(0.5,-20,0.5,ql).T(1,0,0.5);A1.A(e22).P(tp,167).P(or,[50.24,84.15],_,x7).P(oz,[50.24,84.15],_,x7).P(om,[50.24,84.15],_,x7).P(on,[50.24,84.15],_,x7).P(oo,[50.24,84.15],_,x7).P(lf,99).P(rz,0,t,_,r).T(1.5,-24,0.5,ql).T(2,0,0.5);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-732658635");