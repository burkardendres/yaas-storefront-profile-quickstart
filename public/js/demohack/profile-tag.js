/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */

JSON2=window.JSON;if(typeof _paq!=="object"){_paq=[]}if(typeof window.Piwik!=="object"){window.Piwik=(function(){var n,a={},t={},A=document,f=navigator,R=screen,N=window,g=N.performance||N.mozPerformance||N.msPerformance||N.webkitPerformance,p=N.encodeURIComponent,M=N.decodeURIComponent,i=unescape,C=[],z,d,Y=[];
function l(af){try{return M(af)}catch(ag){return unescape(af)}}function D(ag){var af=typeof ag;return af!=="undefined"}function v(af){return typeof af==="function"}function Q(af){return typeof af==="object"}function s(af){return typeof af==="string"||af instanceof String}function w(ag){if(!ag){return true}var af;var ah=true;for(af in ag){if(Object.prototype.hasOwnProperty.call(ag,af)){ah=false}}return ah}function ab(af){if(console!==undefined&&console&&console.error){console.error(af)}}function X(){var ak,aj,am,ag,af;for(ak=0;ak<arguments.length;ak+=1){af=null;if(arguments[ak]&&arguments[ak].slice){af=arguments[ak].slice()}ag=arguments[ak];am=ag.shift();var al,ah;var ai=s(am)&&am.indexOf("::")>0;if(ai){al=am.split("::");ah=al[0];am=al[1];if("object"===typeof d[ah]&&"function"===typeof d[ah][am]){d[ah][am].apply(d[ah],ag)}else{if(af){Y.push(af)}}}else{for(aj=0;aj<C.length;aj++){if(s(am)){ah=C[aj];var an=am.indexOf(".")>0;if(an){al=am.split(".");if(ah&&"object"===typeof ah[al[0]]){ah=ah[al[0]];
am=al[1]}else{if(af){Y.push(af);break}}}if(ah[am]){ah[am].apply(ah,ag)}else{var ao="The method '"+am+'\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: http://developer.piwik.org/api-reference/tracking-javascript';ab(ao);if(!an){throw new TypeError(ao)}}if(am==="addTracker"){break}if(am==="setTrackerUrl"||am==="setSiteId"){break}}else{am.apply(C[aj],ag)}}}}}function ae(ai,ah,ag,af){if(ai.addEventListener){ai.addEventListener(ah,ag,af);return true}if(ai.attachEvent){return ai.attachEvent("on"+ah,ag)}ai["on"+ah]=ag}function j(af){if(A.readyState==="complete"){af()}else{if(N.addEventListener){N.addEventListener("load",af)}else{if(N.attachEvent){N.attachEvent("onload",af)}}}}function m(ai){var af=false;if(A.attachEvent){af=A.readyState==="complete"}else{af=A.readyState!=="loading"}if(af){ai();return}var ah;if(A.addEventListener){ae(A,"DOMContentLoaded",function ag(){A.removeEventListener("DOMContentLoaded",ag,false);if(!af){af=true;ai()}})}else{if(A.attachEvent){A.attachEvent("onreadystatechange",function ag(){if(A.readyState==="complete"){A.detachEvent("onreadystatechange",ag);
if(!af){af=true;ai()}}});if(A.documentElement.doScroll&&N===N.top){(function ag(){if(!af){try{A.documentElement.doScroll("left")}catch(aj){setTimeout(ag,0);return}af=true;ai()}}())}}}ae(N,"load",function(){if(!af){af=true;ai()}},false)}function U(ag,ak){var af="",ai,ah,aj;for(ai in a){if(Object.prototype.hasOwnProperty.call(a,ai)){ah=a[ai][ag];if(v(ah)){aj=ah(ak);if(aj){af+=aj}}}}return af}function Z(){var af;U("unload");if(n){do{af=new Date()}while(af.getTimeAlias()<n)}}function k(ah,ag){var af=A.createElement("script");af.type="text/javascript";af.src=ah;if(af.readyState){af.onreadystatechange=function(){var ai=this.readyState;if(ai==="loaded"||ai==="complete"){af.onreadystatechange=null;ag()}}}else{af.onload=ag}A.getElementsByTagName("head")[0].appendChild(af)}function E(){var af="";try{af=N.top.document.referrer}catch(ah){if(N.parent){try{af=N.parent.document.referrer}catch(ag){af=""}}}if(af===""){af=A.referrer}return af}function o(af){var ah=new RegExp("^([a-z]+):"),ag=ah.exec(af);
return ag?ag[1]:null}function c(af){var ah=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),ag=ah.exec(af);return ag?ag[1]:af}function P(ah,ag){var af="[\\?&#]"+ag+"=([^&#]*)";var aj=new RegExp(af);var ai=aj.exec(ah);return ai?M(ai[1]):""}function y(af){return unescape(p(af))}function ad(av){var ah=function(aB,aA){return(aB<<aA)|(aB>>>(32-aA))},aw=function(aD){var aB="",aC,aA;for(aC=7;aC>=0;aC--){aA=(aD>>>(aC*4))&15;aB+=aA.toString(16)}return aB},ak,ay,ax,ag=[],ao=1732584193,am=4023233417,al=2562383102,aj=271733878,ai=3285377520,au,at,ar,aq,ap,az,af,an=[];av=y(av);af=av.length;for(ay=0;ay<af-3;ay+=4){ax=av.charCodeAt(ay)<<24|av.charCodeAt(ay+1)<<16|av.charCodeAt(ay+2)<<8|av.charCodeAt(ay+3);an.push(ax)}switch(af&3){case 0:ay=2147483648;break;case 1:ay=av.charCodeAt(af-1)<<24|8388608;break;case 2:ay=av.charCodeAt(af-2)<<24|av.charCodeAt(af-1)<<16|32768;break;case 3:ay=av.charCodeAt(af-3)<<24|av.charCodeAt(af-2)<<16|av.charCodeAt(af-1)<<8|128;break}an.push(ay);while((an.length&15)!==14){an.push(0)
}an.push(af>>>29);an.push((af<<3)&4294967295);for(ak=0;ak<an.length;ak+=16){for(ay=0;ay<16;ay++){ag[ay]=an[ak+ay]}for(ay=16;ay<=79;ay++){ag[ay]=ah(ag[ay-3]^ag[ay-8]^ag[ay-14]^ag[ay-16],1)}au=ao;at=am;ar=al;aq=aj;ap=ai;for(ay=0;ay<=19;ay++){az=(ah(au,5)+((at&ar)|(~at&aq))+ap+ag[ay]+1518500249)&4294967295;ap=aq;aq=ar;ar=ah(at,30);at=au;au=az}for(ay=20;ay<=39;ay++){az=(ah(au,5)+(at^ar^aq)+ap+ag[ay]+1859775393)&4294967295;ap=aq;aq=ar;ar=ah(at,30);at=au;au=az}for(ay=40;ay<=59;ay++){az=(ah(au,5)+((at&ar)|(at&aq)|(ar&aq))+ap+ag[ay]+2400959708)&4294967295;ap=aq;aq=ar;ar=ah(at,30);at=au;au=az}for(ay=60;ay<=79;ay++){az=(ah(au,5)+(at^ar^aq)+ap+ag[ay]+3395469782)&4294967295;ap=aq;aq=ar;ar=ah(at,30);at=au;au=az}ao=(ao+au)&4294967295;am=(am+at)&4294967295;al=(al+ar)&4294967295;aj=(aj+aq)&4294967295;ai=(ai+ap)&4294967295}az=aw(ao)+aw(am)+aw(al)+aw(aj)+aw(ai);return az.toLowerCase()}function T(ah,af,ag){if(!ah){ah=""}if(!af){af=""}if(ah==="translate.googleusercontent.com"){if(ag===""){ag=af}af=P(af,"u");
ah=c(af)}else{if(ah==="cc.bingj.com"||ah==="webcache.googleusercontent.com"||ah.slice(0,5)==="74.6."){af=A.links[0].href;ah=c(af)}}return[ah,af,ag]}function F(ag){var af=ag.length;if(ag.charAt(--af)==="."){ag=ag.slice(0,af)}if(ag.slice(0,2)==="*."){ag=ag.slice(1)}if(ag.indexOf("/")!==-1){ag=ag.substr(0,ag.indexOf("/"))}return ag}function ac(ag){ag=ag&&ag.text?ag.text:ag;if(!s(ag)){var af=A.getElementsByTagName("title");if(af&&D(af[0])){ag=af[0].text}}return ag}function J(af){if(!af){return[]}if(!D(af.children)&&D(af.childNodes)){return af.children}if(D(af.children)){return af.children}return[]}function O(ag,af){if(!ag||!af){return false}if(ag.contains){return ag.contains(af)}if(ag===af){return true}if(ag.compareDocumentPosition){return !!(ag.compareDocumentPosition(af)&16)}return false}function G(ah,ai){if(ah&&ah.indexOf){return ah.indexOf(ai)}if(!D(ah)||ah===null){return -1}if(!ah.length){return -1}var af=ah.length;if(af===0){return -1}var ag=0;while(ag<af){if(ah[ag]===ai){return ag}ag++
}return -1}function aa(ag,af){ag=String(ag);return ag.lastIndexOf(af,0)===0}function L(ag,af){ag=String(ag);return ag.indexOf(af,ag.length-af.length)!==-1}function u(ag,af){ag=String(ag);return ag.indexOf(af)!==-1}function e(ag,af){ag=String(ag);return ag.substr(0,ag.length-af)}function h(ah){if(!ah){return false}function af(aj,ak){if(N.getComputedStyle){return A.defaultView.getComputedStyle(aj,null)[ak]}if(aj.currentStyle){return aj.currentStyle[ak]}}function ai(aj){aj=aj.parentNode;while(aj){if(aj===A){return true}aj=aj.parentNode}return false}function ag(al,ar,aj,ao,am,ap,an){var ak=al.parentNode,aq=1;if(!ai(al)){return false}if(9===ak.nodeType){return true}if("0"===af(al,"opacity")||"none"===af(al,"display")||"hidden"===af(al,"visibility")){return false}if(!D(ar)||!D(aj)||!D(ao)||!D(am)||!D(ap)||!D(an)){ar=al.offsetTop;am=al.offsetLeft;ao=ar+al.offsetHeight;aj=am+al.offsetWidth;ap=al.offsetWidth;an=al.offsetHeight}if(ah===al&&(0===an||0===ap)&&"hidden"===af(al,"overflow")){return false
}if(ak){if(("hidden"===af(ak,"overflow")||"scroll"===af(ak,"overflow"))){if(am+aq>ak.offsetWidth+ak.scrollLeft||am+ap-aq<ak.scrollLeft||ar+aq>ak.offsetHeight+ak.scrollTop||ar+an-aq<ak.scrollTop){return false}}if(al.offsetParent===ak){am+=ak.offsetLeft;ar+=ak.offsetTop}return ag(ak,ar,aj,ao,am,ap,an)}return true}return ag(ah)}var W={htmlCollectionToArray:function(ah){var af=[],ag;if(!ah||!ah.length){return af}for(ag=0;ag<ah.length;ag++){af.push(ah[ag])}return af},find:function(af){if(!document.querySelectorAll||!af){return[]}var ag=document.querySelectorAll(af);return this.htmlCollectionToArray(ag)},findMultiple:function(ah){if(!ah||!ah.length){return[]}var ag,ai;var af=[];for(ag=0;ag<ah.length;ag++){ai=this.find(ah[ag]);af=af.concat(ai)}af=this.makeNodesUnique(af);return af},findNodesByTagName:function(ag,af){if(!ag||!af||!ag.getElementsByTagName){return[]}var ah=ag.getElementsByTagName(af);return this.htmlCollectionToArray(ah)},makeNodesUnique:function(af){var ak=[].concat(af);af.sort(function(am,al){if(am===al){return 0
}var ao=G(ak,am);var an=G(ak,al);if(ao===an){return 0}return ao>an?-1:1});if(af.length<=1){return af}var ag=0;var ai=0;var aj=[];var ah;ah=af[ag++];while(ah){if(ah===af[ag]){ai=aj.push(ag)}ah=af[ag++]||null}while(ai--){af.splice(aj[ai],1)}return af},getAttributeValueFromNode:function(aj,ah){if(!this.hasNodeAttribute(aj,ah)){return}if(aj&&aj.getAttribute){return aj.getAttribute(ah)}if(!aj||!aj.attributes){return}var ai=(typeof aj.attributes[ah]);if("undefined"===ai){return}if(aj.attributes[ah].value){return aj.attributes[ah].value}if(aj.attributes[ah].nodeValue){return aj.attributes[ah].nodeValue}var ag;var af=aj.attributes;if(!af){return}for(ag=0;ag<af.length;ag++){if(af[ag].nodeName===ah){return af[ag].nodeValue}}return null},hasNodeAttributeWithValue:function(ag,af){var ah=this.getAttributeValueFromNode(ag,af);return !!ah},hasNodeAttribute:function(ah,af){if(ah&&ah.hasAttribute){return ah.hasAttribute(af)}if(ah&&ah.attributes){var ag=(typeof ah.attributes[af]);return"undefined"!==ag}return false
},hasNodeCssClass:function(ah,af){if(ah&&af&&ah.className){var ag=typeof ah.className==="string"?ah.className.split(" "):[];if(-1!==G(ag,af)){return true}}return false},findNodesHavingAttribute:function(aj,ah,af){if(!af){af=[]}if(!aj||!ah){return af}var ai=J(aj);if(!ai||!ai.length){return af}var ag,ak;for(ag=0;ag<ai.length;ag++){ak=ai[ag];if(this.hasNodeAttribute(ak,ah)){af.push(ak)}af=this.findNodesHavingAttribute(ak,ah,af)}return af},findFirstNodeHavingAttribute:function(ah,ag){if(!ah||!ag){return}if(this.hasNodeAttribute(ah,ag)){return ah}var af=this.findNodesHavingAttribute(ah,ag);if(af&&af.length){return af[0]}},findFirstNodeHavingAttributeWithValue:function(ai,ah){if(!ai||!ah){return}if(this.hasNodeAttributeWithValue(ai,ah)){return ai}var af=this.findNodesHavingAttribute(ai,ah);if(!af||!af.length){return}var ag;for(ag=0;ag<af.length;ag++){if(this.getAttributeValueFromNode(af[ag],ah)){return af[ag]}}},findNodesHavingCssClass:function(aj,ai,af){if(!af){af=[]}if(!aj||!ai){return af}if(aj.getElementsByClassName){var ak=aj.getElementsByClassName(ai);
return this.htmlCollectionToArray(ak)}var ah=J(aj);if(!ah||!ah.length){return[]}var ag,al;for(ag=0;ag<ah.length;ag++){al=ah[ag];if(this.hasNodeCssClass(al,ai)){af.push(al)}af=this.findNodesHavingCssClass(al,ai,af)}return af},findFirstNodeHavingClass:function(ah,ag){if(!ah||!ag){return}if(this.hasNodeCssClass(ah,ag)){return ah}var af=this.findNodesHavingCssClass(ah,ag);if(af&&af.length){return af[0]}},isLinkElement:function(ag){if(!ag){return false}var af=String(ag.nodeName).toLowerCase();var ai=["a","area"];var ah=G(ai,af);return ah!==-1},setAnyAttribute:function(ag,af,ah){if(!ag||!af){return}if(ag.setAttribute){ag.setAttribute(af,ah)}else{ag[af]=ah}}};var r={CONTENT_ATTR:"data-track-content",CONTENT_CLASS:"piwikTrackContent",CONTENT_NAME_ATTR:"data-content-name",CONTENT_PIECE_ATTR:"data-content-piece",CONTENT_PIECE_CLASS:"piwikContentPiece",CONTENT_TARGET_ATTR:"data-content-target",CONTENT_TARGET_CLASS:"piwikContentTarget",CONTENT_IGNOREINTERACTION_ATTR:"data-content-ignoreinteraction",CONTENT_IGNOREINTERACTION_CLASS:"piwikContentIgnoreInteraction",location:undefined,findContentNodes:function(){var ag="."+this.CONTENT_CLASS;
var af="["+this.CONTENT_ATTR+"]";var ah=W.findMultiple([ag,af]);return ah},findContentNodesWithinNode:function(ai){if(!ai){return[]}var ag=W.findNodesHavingCssClass(ai,this.CONTENT_CLASS);var af=W.findNodesHavingAttribute(ai,this.CONTENT_ATTR);if(af&&af.length){var ah;for(ah=0;ah<af.length;ah++){ag.push(af[ah])}}if(W.hasNodeAttribute(ai,this.CONTENT_ATTR)){ag.push(ai)}else{if(W.hasNodeCssClass(ai,this.CONTENT_CLASS)){ag.push(ai)}}ag=W.makeNodesUnique(ag);return ag},findParentContentNode:function(ag){if(!ag){return}var ah=ag;var af=0;while(ah&&ah!==A&&ah.parentNode){if(W.hasNodeAttribute(ah,this.CONTENT_ATTR)){return ah}if(W.hasNodeCssClass(ah,this.CONTENT_CLASS)){return ah}ah=ah.parentNode;if(af>1000){break}af++}},findPieceNode:function(ag){var af;af=W.findFirstNodeHavingAttribute(ag,this.CONTENT_PIECE_ATTR);if(!af){af=W.findFirstNodeHavingClass(ag,this.CONTENT_PIECE_CLASS)}if(af){return af}return ag},findTargetNodeNoDefault:function(af){if(!af){return}var ag=W.findFirstNodeHavingAttributeWithValue(af,this.CONTENT_TARGET_ATTR);
if(ag){return ag}ag=W.findFirstNodeHavingAttribute(af,this.CONTENT_TARGET_ATTR);if(ag){return ag}ag=W.findFirstNodeHavingClass(af,this.CONTENT_TARGET_CLASS);if(ag){return ag}},findTargetNode:function(af){var ag=this.findTargetNodeNoDefault(af);if(ag){return ag}return af},findContentName:function(ag){if(!ag){return}var aj=W.findFirstNodeHavingAttributeWithValue(ag,this.CONTENT_NAME_ATTR);if(aj){return W.getAttributeValueFromNode(aj,this.CONTENT_NAME_ATTR)}var af=this.findContentPiece(ag);if(af){return this.removeDomainIfIsInLink(af)}if(W.hasNodeAttributeWithValue(ag,"title")){return W.getAttributeValueFromNode(ag,"title")}var ah=this.findPieceNode(ag);if(W.hasNodeAttributeWithValue(ah,"title")){return W.getAttributeValueFromNode(ah,"title")}var ai=this.findTargetNode(ag);if(W.hasNodeAttributeWithValue(ai,"title")){return W.getAttributeValueFromNode(ai,"title")}},findContentPiece:function(ag){if(!ag){return}var ai=W.findFirstNodeHavingAttributeWithValue(ag,this.CONTENT_PIECE_ATTR);if(ai){return W.getAttributeValueFromNode(ai,this.CONTENT_PIECE_ATTR)
}var af=this.findPieceNode(ag);var ah=this.findMediaUrlInNode(af);if(ah){return this.toAbsoluteUrl(ah)}},findContentTarget:function(ah){if(!ah){return}var ai=this.findTargetNode(ah);if(W.hasNodeAttributeWithValue(ai,this.CONTENT_TARGET_ATTR)){return W.getAttributeValueFromNode(ai,this.CONTENT_TARGET_ATTR)}var ag;if(W.hasNodeAttributeWithValue(ai,"href")){ag=W.getAttributeValueFromNode(ai,"href");return this.toAbsoluteUrl(ag)}var af=this.findPieceNode(ah);if(W.hasNodeAttributeWithValue(af,"href")){ag=W.getAttributeValueFromNode(af,"href");return this.toAbsoluteUrl(ag)}},isSameDomain:function(af){if(!af||!af.indexOf){return false}if(0===af.indexOf(this.getLocation().origin)){return true}var ag=af.indexOf(this.getLocation().host);if(8>=ag&&0<=ag){return true}return false},removeDomainIfIsInLink:function(ah){var ag="^https?://[^/]+";var af="^.*//[^/]+";if(ah&&ah.search&&-1!==ah.search(new RegExp(ag))&&this.isSameDomain(ah)){ah=ah.replace(new RegExp(af),"");if(!ah){ah="/"}}return ah},findMediaUrlInNode:function(aj){if(!aj){return
}var ah=["img","embed","video","audio"];var af=aj.nodeName.toLowerCase();if(-1!==G(ah,af)&&W.findFirstNodeHavingAttributeWithValue(aj,"src")){var ai=W.findFirstNodeHavingAttributeWithValue(aj,"src");return W.getAttributeValueFromNode(ai,"src")}if(af==="object"&&W.hasNodeAttributeWithValue(aj,"data")){return W.getAttributeValueFromNode(aj,"data")}if(af==="object"){var ak=W.findNodesByTagName(aj,"param");if(ak&&ak.length){var ag;for(ag=0;ag<ak.length;ag++){if("movie"===W.getAttributeValueFromNode(ak[ag],"name")&&W.hasNodeAttributeWithValue(ak[ag],"value")){return W.getAttributeValueFromNode(ak[ag],"value")}}}var al=W.findNodesByTagName(aj,"embed");if(al&&al.length){return this.findMediaUrlInNode(al[0])}}},trim:function(af){if(af&&String(af)===af){return af.replace(/^\s+|\s+$/g,"")}return af},isOrWasNodeInViewport:function(ak){if(!ak||!ak.getBoundingClientRect||ak.nodeType!==1){return true}var aj=ak.getBoundingClientRect();var ai=A.documentElement||{};var ah=aj.top<0;if(ah&&ak.offsetTop){ah=(ak.offsetTop+aj.height)>0
}var ag=ai.clientWidth;if(N.innerWidth&&ag>N.innerWidth){ag=N.innerWidth}var af=ai.clientHeight;if(N.innerHeight&&af>N.innerHeight){af=N.innerHeight}return((aj.bottom>0||ah)&&aj.right>0&&aj.left<ag&&((aj.top<af)||ah))},isNodeVisible:function(ag){var af=h(ag);var ah=this.isOrWasNodeInViewport(ag);return af&&ah},buildInteractionRequestParams:function(af,ag,ah,ai){var aj="";if(af){aj+="c_i="+p(af)}if(ag){if(aj){aj+="&"}aj+="c_n="+p(ag)}if(ah){if(aj){aj+="&"}aj+="c_p="+p(ah)}if(ai){if(aj){aj+="&"}aj+="c_t="+p(ai)}return aj},buildImpressionRequestParams:function(af,ag,ah){var ai="c_n="+p(af)+"&c_p="+p(ag);if(ah){ai+="&c_t="+p(ah)}return ai},buildContentBlock:function(ah){if(!ah){return}var af=this.findContentName(ah);var ag=this.findContentPiece(ah);var ai=this.findContentTarget(ah);af=this.trim(af);ag=this.trim(ag);ai=this.trim(ai);return{name:af||"Unknown",piece:ag||"Unknown",target:ai||""}},collectContent:function(ai){if(!ai||!ai.length){return[]}var ah=[];var af,ag;for(af=0;af<ai.length;
af++){ag=this.buildContentBlock(ai[af]);if(D(ag)){ah.push(ag)}}return ah},setLocation:function(af){this.location=af},getLocation:function(){var af=this.location||N.location;if(!af.origin){af.origin=af.protocol+"//"+af.hostname+(af.port?":"+af.port:"")}return af},toAbsoluteUrl:function(ag){if((!ag||String(ag)!==ag)&&ag!==""){return ag}if(""===ag){return this.getLocation().href}if(ag.search(/^\/\//)!==-1){return this.getLocation().protocol+ag}if(ag.search(/:\/\//)!==-1){return ag}if(0===ag.indexOf("#")){return this.getLocation().origin+this.getLocation().pathname+ag}if(0===ag.indexOf("?")){return this.getLocation().origin+this.getLocation().pathname+ag}if(0===ag.search("^[a-zA-Z]{2,11}:")){return ag}if(ag.search(/^\//)!==-1){return this.getLocation().origin+ag}var af="(.*/)";var ah=this.getLocation().origin+this.getLocation().pathname.match(new RegExp(af))[0];return ah+ag},isUrlToCurrentDomain:function(ag){var ah=this.toAbsoluteUrl(ag);if(!ah){return false}var af=this.getLocation().origin;
if(af===ah){return true}if(0===String(ah).indexOf(af)){if(":"===String(ah).substr(af.length,1)){return false}return true}return false},setHrefAttribute:function(ag,af){if(!ag||!af){return}W.setAnyAttribute(ag,"href",af)},shouldIgnoreInteraction:function(ah){var ag=W.hasNodeAttribute(ah,this.CONTENT_IGNOREINTERACTION_ATTR);var af=W.hasNodeCssClass(ah,this.CONTENT_IGNOREINTERACTION_CLASS);return ag||af}};function I(ag,aj){if(aj){return aj}if(u(ag,"?")){var ai=ag.indexOf("?");ag=ag.slice(0,ai)}if(L(ag,"piwik.php")){ag=e(ag,"piwik.php".length)}else{if(L(ag,".php")){var af=ag.lastIndexOf("/");var ah=1;ag=ag.slice(0,af+ah)}}if(L(ag,"/js/")){ag=e(ag,"js/".length)}return ag}function H(al){var an="Piwik_Overlay";var ag=new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");var ah=ag.exec(A.referrer);if(ah){var aj=ah[1];if(aj!==String(al)){return false}var ak=ah[2],af=ah[3],ai=ah[4];if(!ai){ai=""}else{if(ai.indexOf("&segment=")===0){ai=ai.substr("&segment=".length)
}}N.name=an+"###"+ak+"###"+af+"###"+ai}var am=N.name.split("###");return am.length===4&&am[0]===an}function S(ag,am,ai){var al=N.name.split("###"),ak=al[1],af=al[2],aj=al[3],ah=I(ag,am);k(ah+"plugins/Overlay/client/client.js?v=1",function(){Piwik_Overlay_Client.initialize(ah,ai,ak,af,aj)})}function q(){var ah;try{ah=N.frameElement}catch(ag){return true}if(D(ah)){return(ah&&String(ah.nodeName).toLowerCase()==="iframe")?true:false}try{return N.self!==N.top}catch(af){return true}}function K(bL,bF){var bB=T(A.domain,N.location.href,E()),ck=F(bB[0]),bl=l(bB[1]),a0=l(bB[2]),ci=false,bP="GET",cw=bP,au="application/x-www-form-urlencoded; charset=UTF-8",b1=au,ap=bL||"",bg="",co="",bD=bF||"",a9="",bm="",aM,aW="",ct=["7z","aac","apk","arc","arj","asf","asx","avi","azw3","bin","csv","deb","dmg","doc","docx","epub","exe","flv","gif","gz","gzip","hqx","ibooks","jar","jpg","jpeg","js","mobi","mp2","mp3","mp4","mpg","mpeg","mov","movie","msi","msp","odb","odf","odg","ods","odt","ogg","ogv","pdf","phps","png","ppt","pptx","qt","qtm","ra","ram","rar","rpm","sea","sit","tar","tbz","tbz2","bz","bz2","tgz","torrent","txt","wav","wma","wmv","wpd","xls","xlsx","xml","z","zip"],al=[ck],ba=[],bj=[],aP=[],bh=500,cb,aN,bp,bn,af,bX=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],bf=["pk_kwd","piwik_kwd","utm_term"],aX="_pk_",cm,a2,aY=false,cg,aU,a6,cc=33955200000,bV=1800000,cs=15768000000,aK=true,bT=0,bo=false,az=false,bI,bt={},bS={},aZ={},a5=200,cp={},cu={},bH=[],bM=false,b5=false,ag=false,cv=false,ax=false,aT=q(),cn=null,bJ,aA,bb,bE=ad,a1;
try{aW=A.title}catch(b3){aW=""}function cz(cJ,cG,cF,cI,cE,cH){if(aY){return}var cD;if(cF){cD=new Date();cD.setTime(cD.getTime()+cF)}A.cookie=cJ+"="+p(cG)+(cF?";expires="+cD.toGMTString():"")+";path="+(cI||"/")+(cE?";domain="+cE:"")+(cH?";secure":"")}function ao(cF){if(aY){return 0}var cD=new RegExp("(^|;)[ ]*"+cF+"=([^;]*)"),cE=cD.exec(A.cookie);return cE?M(cE[2]):0}function bz(cD){var cE;if(bn){cE=new RegExp("#.*");return cD.replace(cE,"")}return cD}function bs(cF,cD){var cG=o(cD),cE;if(cG){return cD}if(cD.slice(0,1)==="/"){return o(cF)+"://"+c(cF)+cD}cF=bz(cF);cE=cF.indexOf("?");if(cE>=0){cF=cF.slice(0,cE)}cE=cF.lastIndexOf("/");if(cE!==cF.length-1){cF=cF.slice(0,cE+1)}return cF+cD}function b9(cF,cD){var cE;cF=String(cF).toLowerCase();cD=String(cD).toLowerCase();if(cF===cD){return true}if(cD.slice(0,1)==="."){if(cF===cD.slice(1)){return true}cE=cF.length-cD.length;if((cE>0)&&(cF.slice(cE)===cD)){return true}}return false}function bR(cD){var cE=document.createElement("a");if(cD.indexOf("//")!==0&&cD.indexOf("http")!==0){if(cD.indexOf("*")===0){cD=cD.substr(1)
}if(cD.indexOf(".")===0){cD=cD.substr(1)}cD="http://"+cD}cE.href=r.toAbsoluteUrl(cD);if(cE.pathname){return cE.pathname}return""}function aL(cE,cD){if(!aa(cD,"/")){cD="/"+cD}if(!aa(cE,"/")){cE="/"+cE}var cF=(cD==="/"||cD==="/*");if(cF){return true}if(cE===cD){return true}cD=String(cD).toLowerCase();cE=String(cE).toLowerCase();if(L(cD,"*")){cD=cD.slice(0,-1);cF=(!cD||cD==="/");if(cF){return true}if(cE===cD){return true}return cE.indexOf(cD)===0}if(!L(cE,"/")){cE+="/"}if(!L(cD,"/")){cD+="/"}return cE.indexOf(cD)===0}function ai(cH,cJ){var cE,cD,cF,cG,cI;for(cE=0;cE<al.length;cE++){cG=F(al[cE]);cI=bR(al[cE]);if(b9(cH,cG)&&aL(cJ,cI)){return true}}return false}function aE(cG){var cE,cD,cF;for(cE=0;cE<al.length;cE++){cD=F(al[cE].toLowerCase());if(cG===cD){return true}if(cD.slice(0,1)==="."){if(cG===cD.slice(1)){return true}cF=cG.length-cD.length;if((cF>0)&&(cG.slice(cF)===cD)){return true}}}return false}function bW(cD,cF){var cE=new Image(1,1);cE.onload=function(){z=0;if(typeof cF==="function"){cF()
}};cD=cD.replace("send_image=0","send_image=1");cE.src=ap+(ap.indexOf("?")<0?"?":"&")+cD}function cr(cE,cH,cD){if(!D(cD)||null===cD){cD=true}try{var cG=N.XMLHttpRequest?new N.XMLHttpRequest():N.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;cG.open("POST",ap,true);cG.onreadystatechange=function(){if(this.readyState===4&&!(this.status>=200&&this.status<300)&&cD){bW(cE,cH)}else{if(this.readyState===4&&(typeof cH==="function")){cH()}}};cG.setRequestHeader("Content-Type",b1);cG.send(cE)}catch(cF){if(cD){bW(cE,cH)}}}function bN(cE){var cD=new Date();var cF=cD.getTime()+cE;if(!n||cF>n){n=cF}}function bU(cD){if(bJ||!aN){return}bJ=setTimeout(function cE(){bJ=null;if(!aT){aT=(!A.hasFocus||A.hasFocus())}if(!aT){bU(aN);return}if(bp()){return}var cF=new Date(),cG=aN-(cF.getTime()-cn);cG=Math.min(aN,cG);bU(cG)},cD||aN)}function bi(){if(!bJ){return}clearTimeout(bJ);bJ=null}function aR(){aT=true;if(bp()){return}bU()}function am(){bi()}function cB(){if(ax||!aN){return}ax=true;ae(N,"focus",aR);
ae(N,"blur",am);bU()}function b6(cH){var cE=new Date();var cD=cE.getTime();cn=cD;if(b5&&cD<b5){var cF=b5-cD;setTimeout(cH,cF);bN(cF+50);b5+=50;return}if(b5===false){var cG=800;b5=cD+cG}cH()}function be(cE,cD,cF){if(!cg&&cE){b6(function(){if(cw==="POST"){cr(cE,cF)}else{bW(cE,cF)}bN(cD)})}if(!ax){cB()}else{bU()}}function bQ(cD){if(cg){return false}return(cD&&cD.length)}function cA(cF,cD){if(!bQ(cF)){return}var cE='{"requests":["?'+cF.join('","?')+'"]}';b6(function(){cr(cE,null,false);bN(cD)})}function aC(cD){return aX+cD+"."+bD+"."+a1}function bC(){if(aY){return"0"}if(!D(f.cookieEnabled)){var cD=aC("testcookie");cz(cD,"1");return ao(cD)==="1"?"1":"0"}return f.cookieEnabled?"1":"0"}function aV(){a1=bE((cm||ck)+(a2||"/")).slice(0,4)}function bu(){var cE=aC("cvar"),cD=ao(cE);if(cD.length){cD=JSON2.parse(cD);if(Q(cD)){return cD}}return{}}function b7(){if(az===false){az=bu()}}function ch(){return bE((f.userAgent||"")+(f.platform||"")+JSON2.stringify(cu)+(new Date()).getTime()+Math.random()).slice(0,16)
}function ce(){var cF=new Date(),cD=Math.round(cF.getTime()/1000),cE=aC("id"),cI=ao(cE),cH,cG;if(cI){cH=cI.split(".");cH.unshift("0");if(bm.length){cH[1]=bm}return cH}if(bm.length){cG=bm}else{if("0"===bC()){cG=""}else{cG=ch()}}cH=["1",cG,cD,0,cD,"",""];return cH}function aG(){var cK=ce(),cG=cK[0],cH=cK[1],cE=cK[2],cD=cK[3],cI=cK[4],cF=cK[5];if(!D(cK[6])){cK[6]=""}var cJ=cK[6];return{newVisitor:cG,uuid:cH,createTs:cE,visitCount:cD,currentVisitTs:cI,lastVisitTs:cF,lastEcommerceOrderTs:cJ}}function at(){var cG=new Date(),cE=cG.getTime(),cH=aG().createTs;var cD=parseInt(cH,10);var cF=(cD*1000)+cc-cE;return cF}function av(cD){if(!bD){return}var cF=new Date(),cE=Math.round(cF.getTime()/1000);if(!D(cD)){cD=aG()}var cG=cD.uuid+"."+cD.createTs+"."+cD.visitCount+"."+cE+"."+cD.lastVisitTs+"."+cD.lastEcommerceOrderTs;cz(aC("id"),cG,at(),a2,cm)}function bk(){var cD=ao(aC("ref"));if(cD.length){try{cD=JSON2.parse(cD);if(Q(cD)){return cD}}catch(cE){}}return["","",0,""]}function bv(cF,cE,cD){cz(cF,"",-86400,cE,cD)
}function a7(cE){var cD="testvalue";cz("test",cD,10000,null,cE);if(ao("test")===cD){bv("test",null,cE);return true}return false}function aq(){var cF=aY;aY=false;var cD=["id","ses","cvar","ref"];var cE,cG;for(cE=0;cE<cD.length;cE++){cG=aC(cD[cE]);if(0!==ao(cG)){bv(cG,a2,cm)}}aY=cF}function bA(cD){bD=cD;av()}function cC(cH){if(!cH||!Q(cH)){return}var cG=[];var cF;for(cF in cH){if(Object.prototype.hasOwnProperty.call(cH,cF)){cG.push(cF)}}var cI={};cG.sort();var cD=cG.length;var cE;for(cE=0;cE<cD;cE++){cI[cG[cE]]=cH[cG[cE]]}return cI}function bK(){cz(aC("ses"),"*",bV,a2,cm)}function bY(cF,c0,c1,cG){var cZ,cE=new Date(),cN=Math.round(cE.getTime()/1000),cK,cY,cH=1024,c6,cO,cW=az,cI=aC("ses"),cU=aC("ref"),cR=aC("cvar"),cS=ao(cI),cX=bk(),c3=aM||bl,cL,cD;if(aY){aq()}if(cg){return""}var cT=aG();if(!D(cG)){cG=""}var cQ=A.characterSet||A.charset;if(!cQ||cQ.toLowerCase()==="utf-8"){cQ=null}cL=cX[0];cD=cX[1];cK=cX[2];cY=cX[3];if(!cS){var c2=bV/1000;if(!cT.lastVisitTs||(cN-cT.lastVisitTs)>c2){cT.visitCount++;
cT.lastVisitTs=cT.currentVisitTs}if(!a6||!cL.length){for(cZ in bX){if(Object.prototype.hasOwnProperty.call(bX,cZ)){cL=P(c3,bX[cZ]);if(cL.length){break}}}for(cZ in bf){if(Object.prototype.hasOwnProperty.call(bf,cZ)){cD=P(c3,bf[cZ]);if(cD.length){break}}}}c6=c(a0);cO=cY.length?c(cY):"";if(c6.length&&!aE(c6)&&(!a6||!cO.length||aE(cO))){cY=a0}if(cY.length||cL.length){cK=cN;cX=[cL,cD,cK,bz(cY.slice(0,cH))];cz(cU,JSON2.stringify(cX),cs,a2,cm)}}cF+="&idsite="+bD+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+cE.getHours()+"&m="+cE.getMinutes()+"&s="+cE.getSeconds()+"&url="+p(bz(c3))+(a0.length?"&urlref="+p(bz(a0)):"")+((a9&&a9.length)?"&uid="+p(a9):"")+"&_id="+cT.uuid+"&_idts="+cT.createTs+"&_idvc="+cT.visitCount+"&_idn="+cT.newVisitor+(cL.length?"&_rcn="+p(cL):"")+(cD.length?"&_rck="+p(cD):"")+"&_refts="+cK+"&_viewts="+cT.lastVisitTs+(String(cT.lastEcommerceOrderTs).length?"&_ects="+cT.lastEcommerceOrderTs:"")+(String(cY).length?"&_ref="+p(bz(cY.slice(0,cH))):"")+(cQ?"&cs="+p(cQ):"")+"&send_image=0";
for(cZ in cu){if(Object.prototype.hasOwnProperty.call(cu,cZ)){cF+="&"+cZ+"="+cu[cZ]}}var c5=[];if(c0){for(cZ in c0){if(Object.prototype.hasOwnProperty.call(c0,cZ)&&/^dimension\d+$/.test(cZ)){var cJ=cZ.replace("dimension","");c5.push(parseInt(cJ,10));c5.push(String(cJ));cF+="&"+cZ+"="+c0[cZ];delete c0[cZ]}}}if(c0&&w(c0)){c0=null}for(cZ in aZ){if(Object.prototype.hasOwnProperty.call(aZ,cZ)){var cP=(-1===G(c5,cZ));if(cP){cF+="&dimension"+cZ+"="+aZ[cZ]}}}if(c0){cF+="&data="+p(JSON2.stringify(c0))}else{if(af){cF+="&data="+p(JSON2.stringify(af))}}function cM(c7,c8){var c9=JSON2.stringify(c7);if(c9.length>2){return"&"+c8+"="+p(c9)}return""}var c4=cC(bt);var cV=cC(bS);cF+=cM(c4,"cvar");cF+=cM(cV,"e_cvar");if(az){cF+=cM(az,"_cvar");for(cZ in cW){if(Object.prototype.hasOwnProperty.call(cW,cZ)){if(az[cZ][0]===""||az[cZ][1]===""){delete az[cZ]}}}if(bo){cz(cR,JSON2.stringify(az),bV,a2,cm)}}if(aK){if(bT){cF+="&gt_ms="+bT}else{if(g&&g.timing&&g.timing.requestStart&&g.timing.responseEnd){cF+="&gt_ms="+(g.timing.responseEnd-g.timing.requestStart)
}}}cT.lastEcommerceOrderTs=D(cG)&&String(cG).length?cG:cT.lastEcommerceOrderTs;av(cT);bK();cF+=U(c1);if(co.length){cF+="&"+co}if(v(bI)){cF=bI(cF)}return cF}bp=function aO(){var cD=new Date();if(cn+aN<=cD.getTime()){var cE=bY("ping=1",null,"ping");be(cE,bh);return true}return false};function a3(cG,cF,cL,cH,cD,cO){var cJ="idgoal=0",cK,cE=new Date(),cM=[],cN,cI=String(cG).length;if(cI){cJ+="&ec_id="+p(cG);cK=Math.round(cE.getTime()/1000)}cJ+="&revenue="+cF;if(String(cL).length){cJ+="&ec_st="+cL}if(String(cH).length){cJ+="&ec_tx="+cH}if(String(cD).length){cJ+="&ec_sh="+cD}if(String(cO).length){cJ+="&ec_dt="+cO}if(cp){for(cN in cp){if(Object.prototype.hasOwnProperty.call(cp,cN)){if(!D(cp[cN][1])){cp[cN][1]=""}if(!D(cp[cN][2])){cp[cN][2]=""}if(!D(cp[cN][3])||String(cp[cN][3]).length===0){cp[cN][3]=0}if(!D(cp[cN][4])||String(cp[cN][4]).length===0){cp[cN][4]=1}cM.push(cp[cN])}}cJ+="&ec_items="+p(JSON2.stringify(cM))}cJ=bY(cJ,af,"ecommerce",cK);be(cJ,bh);if(cI){cp={}}}function bw(cD,cH,cG,cF,cE,cI){if(String(cD).length&&D(cH)){a3(cD,cH,cG,cF,cE,cI)
}}function a4(cD){if(D(cD)){a3("",cD,"","","","")}}function bx(cE,cG,cF){var cD=bY("action_name="+p(ac(cE||aW)),cG,"log");be(cD,bh,cF)}function aI(cF,cE){var cG,cD="(^| )(piwik[_-]"+cE;if(cF){for(cG=0;cG<cF.length;cG++){cD+="|"+cF[cG]}}cD+=")( |$)";return new RegExp(cD)}function aD(cD){return(ap&&cD&&0===String(cD).indexOf(ap))}function bZ(cH,cD,cI,cE){if(aD(cD)){return 0}var cG=aI(bj,"download"),cF=aI(aP,"link"),cJ=new RegExp("\\.("+ct.join("|")+")([?&#]|$)","i");if(cF.test(cH)){return"link"}if(cE||cG.test(cH)||cJ.test(cD)){return"download"}if(cI){return 0}return"link"}function aj(cE){var cD;cD=cE.parentNode;while(cD!==null&&D(cD)){if(W.isLinkElement(cE)){break}cE=cD;cD=cE.parentNode}return cE}function cx(cI){cI=aj(cI);if(!W.hasNodeAttribute(cI,"href")){return}if(!D(cI.href)){return}var cH=W.getAttributeValueFromNode(cI,"href");if(aD(cH)){return}var cE=cI.pathname||bR(cI.href);var cJ=cI.hostname||c(cI.href);var cK=cJ.toLowerCase();var cF=cI.href.replace(cJ,cK);var cG=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):","i");
if(!cG.test(cF)){var cD=bZ(cI.className,cF,ai(cK,cE),W.hasNodeAttribute(cI,"download"));if(cD){return{type:cD,href:cF}}}}function ay(cD,cE,cF,cG){var cH=r.buildInteractionRequestParams(cD,cE,cF,cG);if(!cH){return}return bY(cH,null,"contentInteraction")}function cd(cF,cG,cK,cD,cE){if(!D(cF)){return}if(aD(cF)){return cF}var cI=r.toAbsoluteUrl(cF);var cH="redirecturl="+p(cI)+"&";cH+=ay(cG,cK,cD,(cE||cF));var cJ="&";if(ap.indexOf("?")<0){cJ="?"}return ap+cJ+cH}function aS(cD,cE){if(!cD||!cE){return false}var cF=r.findTargetNode(cD);if(r.shouldIgnoreInteraction(cF)){return false}cF=r.findTargetNodeNoDefault(cD);if(cF&&!O(cF,cE)){return false}return true}function b0(cF,cE,cH){if(!cF){return}var cD=r.findParentContentNode(cF);if(!cD){return}if(!aS(cD,cF)){return}var cG=r.buildContentBlock(cD);if(!cG){return}if(!cG.target&&cH){cG.target=cH}return r.buildInteractionRequestParams(cE,cG.name,cG.piece,cG.target)}function aF(cE){if(!bH||!bH.length){return false}var cD,cF;for(cD=0;cD<bH.length;cD++){cF=bH[cD];
if(cF&&cF.name===cE.name&&cF.piece===cE.piece&&cF.target===cE.target){return true}}return false}function bd(cG){if(!cG){return false}var cJ=r.findTargetNode(cG);if(!cJ||r.shouldIgnoreInteraction(cJ)){return false}var cK=cx(cJ);if(cv&&cK&&cK.type){return false}if(W.isLinkElement(cJ)&&W.hasNodeAttributeWithValue(cJ,"href")){var cD=String(W.getAttributeValueFromNode(cJ,"href"));if(0===cD.indexOf("#")){return false}if(aD(cD)){return true}if(!r.isUrlToCurrentDomain(cD)){return false}var cH=r.buildContentBlock(cG);if(!cH){return}var cF=cH.name;var cL=cH.piece;var cI=cH.target;if(!W.hasNodeAttributeWithValue(cJ,r.CONTENT_TARGET_ATTR)||cJ.wasContentTargetAttrReplaced){cJ.wasContentTargetAttrReplaced=true;cI=r.toAbsoluteUrl(cD);W.setAnyAttribute(cJ,r.CONTENT_TARGET_ATTR,cI)}var cE=cd(cD,"click",cF,cL,cI);r.setHrefAttribute(cJ,cE);return true}return false}function aw(cE){if(!cE||!cE.length){return}var cD;for(cD=0;cD<cE.length;cD++){bd(cE[cD])}}function aH(cD){return function(cE){if(!cD){return}var cH=r.findParentContentNode(cD);
var cI;if(cE){cI=cE.target||cE.srcElement}if(!cI){cI=cD}if(!aS(cH,cI)){return}bN(bh);if(W.isLinkElement(cD)&&W.hasNodeAttributeWithValue(cD,"href")&&W.hasNodeAttributeWithValue(cD,r.CONTENT_TARGET_ATTR)){var cF=W.getAttributeValueFromNode(cD,"href");if(!aD(cF)&&cD.wasContentTargetAttrReplaced){W.setAnyAttribute(cD,r.CONTENT_TARGET_ATTR,"")}}var cM=cx(cD);if(ag&&cM&&cM.type){return cM.type}if(bd(cH)){return"href"}var cJ=r.buildContentBlock(cH);if(!cJ){return}var cG=cJ.name;var cN=cJ.piece;var cL=cJ.target;var cK=ay("click",cG,cN,cL);be(cK,bh);return cK}}function by(cF){if(!cF||!cF.length){return}var cD,cE;for(cD=0;cD<cF.length;cD++){cE=r.findTargetNode(cF[cD]);if(cE&&!cE.contentInteractionTrackingSetupDone){cE.contentInteractionTrackingSetupDone=true;ae(cE,"click",aH(cE))}}}function a8(cF,cG){if(!cF||!cF.length){return[]}var cD,cE;for(cD=0;cD<cF.length;cD++){if(aF(cF[cD])){cF.splice(cD,1);cD--}else{bH.push(cF[cD])}}if(!cF||!cF.length){return[]}aw(cG);by(cG);var cH=[];for(cD=0;cD<cF.length;
cD++){cE=bY(r.buildImpressionRequestParams(cF[cD].name,cF[cD].piece,cF[cD].target),undefined,"contentImpressions");if(cE){cH.push(cE)}}return cH}function b4(cE){var cD=r.collectContent(cE);return a8(cD,cE)}function aQ(cE){if(!cE||!cE.length){return[]}var cD;for(cD=0;cD<cE.length;cD++){if(!r.isNodeVisible(cE[cD])){cE.splice(cD,1);cD--}}if(!cE||!cE.length){return[]}return b4(cE)}function ar(cF,cD,cE){var cG=r.buildImpressionRequestParams(cF,cD,cE);return bY(cG,null,"contentImpression")}function cy(cG,cE){if(!cG){return}var cD=r.findParentContentNode(cG);var cF=r.buildContentBlock(cD);if(!cF){return}if(!cE){cE="Unknown"}return ay(cE,cF.name,cF.piece,cF.target)}function cf(cE,cG,cD,cF){return"e_c="+p(cE)+"&e_a="+p(cG)+(D(cD)?"&e_n="+p(cD):"")+(D(cF)?"&e_v="+p(cF):"")}function ak(cF,cH,cD,cG,cI){if(String(cF).length===0||String(cH).length===0){return false}var cE=bY(cf(cF,cH,cD,cG),cI,"event");be(cE,bh)}function bG(cD,cG,cE,cH){var cF=bY("search="+p(cD)+(cG?"&search_cat="+p(cG):"")+(D(cE)?"&search_count="+cE:""),cH,"sitesearch");
be(cF,bh)}function cj(cD,cG,cF){var cE=bY("idgoal="+cD+(cG?"&revenue="+cG:""),cF,"goal");be(cE,bh)}function cq(cG,cD,cK,cJ,cF){var cI=cD+"="+p(bz(cG));var cE=b0(cF,"click",cG);if(cE){cI+="&"+cE}var cH=bY(cI,cK,"link");be(cH,(cJ?0:bh),cJ)}function bq(cE,cD){if(cE!==""){return cE+cD.charAt(0).toUpperCase()+cD.slice(1)}return cD}function bO(cI){var cH,cD,cG=["","webkit","ms","moz"],cF;if(!aU){for(cD=0;cD<cG.length;cD++){cF=cG[cD];if(Object.prototype.hasOwnProperty.call(A,bq(cF,"hidden"))){if(A[bq(cF,"visibilityState")]==="prerender"){cH=true}break}}}if(cH){ae(A,cF+"visibilitychange",function cE(){A.removeEventListener(cF+"visibilitychange",cE,false);cI()});return}cI()}function ca(cD){var cE=cx(cD);if(cE&&cE.type){cE.href=l(cE.href);cq(cE.href,cE.type,undefined,null,cD)}}function b2(){return A.all&&!A.addEventListener}function cl(cD){var cF=cD.which;var cE=(typeof cD.button);if(!cF&&cE!=="undefined"){if(b2()){if(cD.button&1){cF=1}else{if(cD.button&2){cF=3}else{if(cD.button&4){cF=2}}}}else{if(cD.button===0||cD.button==="0"){cF=1
}else{if(cD.button&1){cF=2}else{if(cD.button&2){cF=3}}}}}return cF}function br(cD){switch(cl(cD)){case 1:return"left";case 2:return"middle";case 3:return"right"}}function aJ(cD){return cD.target||cD.srcElement}function an(cD){return function(cG){cG=cG||N.event;var cF=br(cG);var cH=aJ(cG);if(cG.type==="click"){var cE=false;if(cD&&cF==="middle"){cE=true}if(cH&&!cE){ca(cH)}}else{if(cG.type==="mousedown"){if(cF==="middle"&&cH){aA=cF;bb=cH}else{aA=bb=null}}else{if(cG.type==="mouseup"){if(cF===aA&&cH===bb){ca(cH)}aA=bb=null}else{if(cG.type==="contextmenu"){ca(cH)}}}}}}function ah(cE,cD){ae(cE,"click",an(cD),false);if(cD){ae(cE,"mouseup",an(cD),false);ae(cE,"mousedown",an(cD),false);ae(cE,"contextmenu",an(cD),false)}}function bc(cE){if(!ag){ag=true;var cF,cD=aI(ba,"ignore"),cG=A.links;if(cG){for(cF=0;cF<cG.length;cF++){if(!cD.test(cG[cF].className)){ah(cG[cF],cE)}}}}}function aB(cF,cH,cI){if(bM){return true}bM=true;var cJ=false;var cG,cE;function cD(){cJ=true}j(function(){function cK(cM){setTimeout(function(){if(!bM){return
}cJ=false;cI.trackVisibleContentImpressions();cK(cM)},cM)}function cL(cM){setTimeout(function(){if(!bM){return}if(cJ){cJ=false;cI.trackVisibleContentImpressions()}cL(cM)},cM)}if(cF){cG=["scroll","resize"];for(cE=0;cE<cG.length;cE++){if(A.addEventListener){A.addEventListener(cG[cE],cD)}else{N.attachEvent("on"+cG[cE],cD)}}cL(100)}if(cH&&cH>0){cH=parseInt(cH,10);cK(cH)}})}function b8(){var cE,cG,cH={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};if(!((new RegExp("MSIE")).test(f.userAgent))){if(f.mimeTypes&&f.mimeTypes.length){for(cE in cH){if(Object.prototype.hasOwnProperty.call(cH,cE)){cG=f.mimeTypes[cH[cE]];cu[cE]=(cG&&cG.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&D(f.javaEnabled)&&f.javaEnabled()){cu.java="1"}if(v(N.GearsFactory)){cu.gears="1"
}cu.cookie=bC()}var cF=parseInt(R.width,10);var cD=parseInt(R.height,10);cu.res=parseInt(cF,10)+"x"+parseInt(cD,10)}b8();aV();av();this.getVisitorId=function(){return aG().uuid};this.getVisitorInfo=function(){return ce()};this.getAttributionInfo=function(){return bk()};this.getAttributionCampaignName=function(){return bk()[0]};this.getAttributionCampaignKeyword=function(){return bk()[1]};this.getAttributionReferrerTimestamp=function(){return bk()[2]};this.getAttributionReferrerUrl=function(){return bk()[3]};this.setTrackerUrl=function(cD){ap=cD};this.getTrackerUrl=function(){return ap};this.addTracker=function(cD,cF){if(!cF){throw new Error("A siteId must be given to add a new tracker")}if(!D(cD)||null===cD){cD=this.getTrackerUrl()}var cE=new K(cD,cF);C.push(cE);return cE};this.getSiteId=function(){return bD};this.setSiteId=function(cD){bA(cD)};this.setUserId=function(cD){if(!D(cD)||!cD.length){return}a9=cD;bm=bE(a9).substr(0,16)};this.getUserId=function(){return a9};this.setCustomData=function(cD,cE){if(Q(cD)){af=cD
}else{if(!af){af={}}af[cD]=cE}};this.getCustomData=function(){return af};this.setCustomRequestProcessing=function(cD){bI=cD};this.appendToTrackingUrl=function(cD){co=cD};this.getRequest=function(cD){return bY(cD)};this.addPlugin=function(cD,cE){a[cD]=cE};this.setCustomDimension=function(cD,cE){cD=parseInt(cD,10);if(cD>0){if(!D(cE)){cE=""}if(!s(cE)){cE=String(cE)}aZ[cD]=cE}};this.getCustomDimension=function(cD){cD=parseInt(cD,10);if(cD>0&&Object.prototype.hasOwnProperty.call(aZ,cD)){return aZ[cD]}};this.deleteCustomDimension=function(cD){cD=parseInt(cD,10);if(cD>0){delete aZ[cD]}};this.setCustomVariable=function(cE,cD,cH,cF){var cG;if(!D(cF)){cF="visit"}if(!D(cD)){return}if(!D(cH)){cH=""}if(cE>0){cD=!s(cD)?String(cD):cD;cH=!s(cH)?String(cH):cH;cG=[cD.slice(0,a5),cH.slice(0,a5)];if(cF==="visit"||cF===2){b7();az[cE]=cG}else{if(cF==="page"||cF===3){bt[cE]=cG}else{if(cF==="event"){bS[cE]=cG}}}}};this.getCustomVariable=function(cE,cF){var cD;if(!D(cF)){cF="visit"}if(cF==="page"||cF===3){cD=bt[cE]
}else{if(cF==="event"){cD=bS[cE]}else{if(cF==="visit"||cF===2){b7();cD=az[cE]}}}if(!D(cD)||(cD&&cD[0]==="")){return false}return cD};this.deleteCustomVariable=function(cD,cE){if(this.getCustomVariable(cD,cE)){this.setCustomVariable(cD,"","",cE)}};this.storeCustomVariablesInCookie=function(){bo=true};this.setLinkTrackingTimer=function(cD){bh=cD};this.setDownloadExtensions=function(cD){if(s(cD)){cD=cD.split("|")}ct=cD};this.addDownloadExtensions=function(cE){var cD;if(s(cE)){cE=cE.split("|")}for(cD=0;cD<cE.length;cD++){ct.push(cE[cD])}};this.removeDownloadExtensions=function(cF){var cE,cD=[];if(s(cF)){cF=cF.split("|")}for(cE=0;cE<ct.length;cE++){if(G(cF,ct[cE])===-1){cD.push(ct[cE])}}ct=cD};this.setDomains=function(cD){al=s(cD)?[cD]:cD;var cH=false,cF=0,cE;for(cF;cF<al.length;cF++){cE=String(al[cF]);if(b9(ck,F(cE))){cH=true;break}var cG=bR(cE);if(cG&&cG!=="/"&&cG!=="/*"){cH=true;break}}if(!cH){al.push(ck)}};this.setIgnoreClasses=function(cD){ba=s(cD)?[cD]:cD};this.setRequestMethod=function(cD){cw=cD||bP
};this.setRequestContentType=function(cD){b1=cD||au};this.setReferrerUrl=function(cD){a0=cD};this.setCustomUrl=function(cD){aM=bs(bl,cD)};this.setDocumentTitle=function(cD){aW=cD};this.setAPIUrl=function(cD){bg=cD};this.setDownloadClasses=function(cD){bj=s(cD)?[cD]:cD};this.setLinkClasses=function(cD){aP=s(cD)?[cD]:cD};this.setCampaignNameKey=function(cD){bX=s(cD)?[cD]:cD};this.setCampaignKeywordKey=function(cD){bf=s(cD)?[cD]:cD};this.discardHashTag=function(cD){bn=cD};this.setCookieNamePrefix=function(cD){aX=cD;az=bu()};this.setCookieDomain=function(cD){var cE=F(cD);if(a7(cE)){cm=cE;aV()}};this.setCookiePath=function(cD){a2=cD;aV()};this.setVisitorCookieTimeout=function(cD){cc=cD*1000};this.setSessionCookieTimeout=function(cD){bV=cD*1000};this.setReferralCookieTimeout=function(cD){cs=cD*1000};this.setConversionAttributionFirstReferrer=function(cD){a6=cD};this.disableCookies=function(){aY=true;cu.cookie="0";if(bD){aq()}};this.deleteCookies=function(){aq()};this.setDoNotTrack=function(cE){var cD=f.doNotTrack||f.msDoNotTrack;
cg=cE&&(cD==="yes"||cD==="1");if(cg){this.disableCookies()}};this.addListener=function(cE,cD){ah(cE,cD)};this.enableLinkTracking=function(cD){cv=true;bO(function(){m(function(){bc(cD)})})};this.enableJSErrorTracking=function(){if(ci){return}ci=true;var cD=N.onerror;N.onerror=function(cI,cG,cF,cH,cE){bO(function(){var cJ="JavaScript Errors";var cK=cG+":"+cF;if(cH){cK+=":"+cH}ak(cJ,cK,cI)});if(cD){return cD(cI,cG,cF,cH,cE)}return false}};this.disablePerformanceTracking=function(){aK=false};this.setGenerationTimeMs=function(cD){bT=parseInt(cD,10)};this.enableHeartBeatTimer=function(cD){cD=Math.max(cD,1);aN=(cD||15)*1000;if(cn!==null){cB()}};this.killFrame=function(){if(N.location!==N.top.location){N.top.location=N.location}};this.redirectFile=function(cD){if(N.location.protocol==="file:"){N.location=cD}};this.setCountPreRendered=function(cD){aU=cD};this.trackGoal=function(cD,cF,cE){bO(function(){cj(cD,cF,cE)})};this.trackLink=function(cE,cD,cG,cF){bO(function(){cq(cE,cD,cG,cF)})};this.trackPageView=function(cD,cF,cE){bH=[];
if(H(bD)){bO(function(){S(ap,bg,bD)})}else{bO(function(){bx(cD,cF,cE)})}};this.trackAllContentImpressions=function(){if(H(bD)){return}bO(function(){m(function(){var cD=r.findContentNodes();var cE=b4(cD);cA(cE,bh)})})};this.trackVisibleContentImpressions=function(cD,cE){if(H(bD)){return}if(!D(cD)){cD=true}if(!D(cE)){cE=750}aB(cD,cE,this);bO(function(){j(function(){var cF=r.findContentNodes();var cG=aQ(cF);cA(cG,bh)})})};this.trackContentImpression=function(cF,cD,cE){if(H(bD)){return}if(!cF){return}cD=cD||"Unknown";bO(function(){var cG=ar(cF,cD,cE);be(cG,bh)})};this.trackContentImpressionsWithinNode=function(cD){if(H(bD)||!cD){return}bO(function(){if(bM){j(function(){var cE=r.findContentNodesWithinNode(cD);var cF=aQ(cE);cA(cF,bh)})}else{m(function(){var cE=r.findContentNodesWithinNode(cD);var cF=b4(cE);cA(cF,bh)})}})};this.trackContentInteraction=function(cF,cG,cD,cE){if(H(bD)){return}if(!cF||!cG){return}cD=cD||"Unknown";bO(function(){var cH=ay(cF,cG,cD,cE);be(cH,bh)})};this.trackContentInteractionNode=function(cE,cD){if(H(bD)||!cE){return
}bO(function(){var cF=cy(cE,cD);be(cF,bh)})};this.logAllContentBlocksOnPage=function(){var cE=r.findContentNodes();var cD=r.collectContent(cE);if(console!==undefined&&console&&console.log){console.log(cD)}};this.trackEvent=function(cE,cG,cD,cF,cH){bO(function(){ak(cE,cG,cD,cF,cH)})};this.trackSiteSearch=function(cD,cF,cE,cG){bO(function(){bG(cD,cF,cE,cG)})};this.setEcommerceView=function(cG,cD,cF,cE){if(!D(cF)||!cF.length){cF=""}else{if(cF instanceof Array){cF=JSON2.stringify(cF)}}bt[5]=["_pkc",cF];if(D(cE)&&String(cE).length){bt[2]=["_pkp",cE]}if((!D(cG)||!cG.length)&&(!D(cD)||!cD.length)){return}if(D(cG)&&cG.length){bt[3]=["_pks",cG]}if(!D(cD)||!cD.length){cD=""}bt[4]=["_pkn",cD]};this.addEcommerceItem=function(cH,cD,cF,cE,cG){if(cH.length){cp[cH]=[cH,cD,cF,cE,cG]}};this.trackEcommerceOrder=function(cD,cH,cG,cF,cE,cI){bw(cD,cH,cG,cF,cE,cI)};this.trackEcommerceCartUpdate=function(cD){a4(cD)};this.trackRequest=function(cD,cF,cE){bO(function(){var cG=bY(cD,cF);be(cG,bh,cE)})};d.trigger("TrackerSetup",[this])
}function B(){return{push:X}}function b(ak,aj){var al={};var ah,ai;for(ah=0;ah<aj.length;ah++){var af=aj[ah];al[af]=1;for(ai=0;ai<ak.length;ai++){if(ak[ai]&&ak[ai][0]){var ag=ak[ai][0];if(af===ag){X(ak[ai]);delete ak[ai];if(al[ag]>1){ab("The method "+ag+' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers')}al[ag]++}}}}return ak}var x=["addTracker","disableCookies","setTrackerUrl","setAPIUrl","setCookiePath","setCookieDomain","setDomains","setUserId","setSiteId","enableLinkTracking"];function V(af,ah){var ag=new K(af,ah);C.push(ag);_paq=b(_paq,x);for(z=0;z<_paq.length;z++){if(_paq[z]){X(_paq[z])}}_paq=new B();return ag}ae(N,"beforeunload",Z,false);Date.prototype.getTimeAlias=Date.prototype.getTime;d={initialized:false,DOM:{addEventListener:function(ai,ah,ag,af){var aj=typeof af;if(aj==="undefined"){af=false}ae(ai,ah,ag,af)
},onLoad:j,onReady:m},on:function(ag,af){if(!t[ag]){t[ag]=[]}t[ag].push(af)},off:function(ah,ag){if(!t[ah]){return}var af=0;for(af;af<t[ah].length;af++){if(t[ah][af]===ag){t[ah].splice(af,1)}}},trigger:function(ah,ai,ag){if(!t[ah]){return}var af=0;for(af;af<t[ah].length;af++){t[ah][af].apply(ag||N,ai)}},addPlugin:function(af,ag){a[af]=ag},getTracker:function(af,ag){if(!D(ag)){ag=this.getAsyncTracker().getSiteId()}if(!D(af)){af=this.getAsyncTracker().getTrackerUrl()}return new K(af,ag)},getAsyncTrackers:function(){return C},addTracker:function(af,ag){if(!C.length){V(af,ag)}else{C[0].addTracker(af,ag)}},getAsyncTracker:function(ag,aj){var ai;if(C&&C.length&&C[0]){ai=C[0]}else{return V(ag,aj)}if(!aj&&!ag){return ai}if((!D(aj)||null===aj)&&ai){aj=ai.getSiteId()}if((!D(ag)||null===ag)&&ai){ag=ai.getTrackerUrl()}var ah,af=0;for(af;af<C.length;af++){ah=C[af];if(ah&&String(ah.getSiteId())===String(aj)&&ah.getTrackerUrl()===ag){return ah}}},retryMissedPluginCalls:function(){var ag=Y;Y=[];var af=0;
for(af;af<ag.length;af++){X(ag[af])}}};if(typeof define==="function"&&define.amd){define("piwik",[],function(){return d})}return d}());
/*!!! pluginTrackerHook */
}(function(){function b(){if("object"!==typeof _paq){return false}var c=typeof _paq.length;if("undefined"===c){return false}return !!_paq.length}if(window&&"object"===typeof window.piwikPluginAsyncInit&&window.piwikPluginAsyncInit.length){var a=0;for(a;a<window.piwikPluginAsyncInit.length;a++){if(typeof window.piwikPluginAsyncInit[a]==="function"){window.piwikPluginAsyncInit[a]()}}}if(window&&window.piwikAsyncInit){window.piwikAsyncInit()}if(!window.Piwik.getAsyncTrackers().length){if(b()){window.Piwik.addTracker()}}window.Piwik.trigger("PiwikInitialized",[]);window.Piwik.initialized=true}());(function(){var a=(typeof AnalyticsTracker);if(a==="undefined"){AnalyticsTracker=window.Piwik}}());if(typeof piwik_log!=="function"){piwik_log=function(b,f,d,g){function a(h){try{if(window["piwik_"+h]){return window["piwik_"+h]}}catch(i){}return
}var c,e=window.Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};
/*!! @license-end */
};
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {

  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }
})();

},{}],2:[function(require,module,exports){
"use strict";

//temp polyfill for EC add on
(function () {
  if (typeof window.CustomEvent === "function") return false;
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = exports.env = 'stage';
var baseUrl = exports.baseUrl = 'api.stage.yaas.io';
var strongIdBaseUrl = exports.strongIdBaseUrl = 'profile.yaas.io';

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.strongIdPxUrl = exports.strongIdUrl = exports.optInUrl = exports.baseAuthUrl = exports.basePiwikUrl = exports.redirectUrlConstant = exports.strongIdBaseUrl = exports.baseUrl = exports.env = undefined;
exports.getConfigParameters = getConfigParameters;

var _ENVIRONMENT = require('./ENVIRONMENT');

var environment = _interopRequireWildcard(_ENVIRONMENT);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var env = environment.env,
    baseUrl = environment.baseUrl,
    strongIdBaseUrl = environment.strongIdBaseUrl; // when we build profiletag we overwrite 'ENVIRONMENT.js'

exports.env = env;
exports.baseUrl = baseUrl;
exports.strongIdBaseUrl = strongIdBaseUrl;
var redirectUrlConstant = exports.redirectUrlConstant = 'http://example.com';

var basePiwikUrl = exports.basePiwikUrl = 'https://afd344c85577211e8ab651208c1cd18a-472041436.us-east-1.elb.amazonaws.com/edge/';//'https://' + baseUrl + '/hybris/profile-edge/v1/';
//basePiwikUrl = exports.basePiwikUrl = 'https://' + baseUrl + '/hybris/profile-edge/v1/';
var baseAuthUrl = exports.baseAuthUrl = 'https://' + baseUrl + '/hybris/customerlogin/v1/auth/anonymous/login';

var optInUrl = exports.optInUrl = 'https://' + baseUrl + '/hybris/profile-consent/v1/';
optInUrl = exports.optInUrl = 'https://afd344c85577211e8ab651208c1cd18a-472041436.us-east-1.elb.amazonaws.com/consent-v1/';
//optInUrl = exports.optInUrl = 'https://consent-v1.profile.v2.k8s.stage.yaas.io/';


var strongIdUrl = exports.strongIdUrl = 'https://' + strongIdBaseUrl + '/id/';
var strongIdPxUrl = exports.strongIdPxUrl = 'https://' + strongIdBaseUrl + '/idpx/';

function getConfigParameters() {
    var parameters = window.Y_TRACKING.q[0][0]; // tenant, clientId, gtmId, siteId
    return parameters;
}

},{"./ENVIRONMENT":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readConsentReference = readConsentReference;
exports.readToken = readToken;
exports.writeReferenceAndToken = writeReferenceAndToken;

var _config = require('../config/config');

var config = _interopRequireWildcard(_config);

var _cookie = require('../storage/cookie');

var cookie = _interopRequireWildcard(_cookie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function readConsentReference() {
    var consentReferenceCookieId = getConsentReferenceCookieId();
    var consentReference = cookie.read(consentReferenceCookieId);
    if (consentReference === '') {
        return undefined;
    }
    return consentReference;
}

function readToken() {
    var consentReferenceTokenId = getConsentReferenceTokenId();
    var consentReferenceToken = localStorage.getItem(consentReferenceTokenId);
    if (consentReferenceToken === null) {
        return undefined;
    }
    return consentReferenceToken;
}

function writeReferenceAndToken(consentReference, consentReferenceToken) {
    var consentReferenceCookieId = getConsentReferenceCookieId();
    var consentReferenceTokenId = getConsentReferenceTokenId();
    cookie.write(consentReferenceCookieId, consentReference, consentReferenceDuration);
    localStorage.setItem(consentReferenceTokenId, consentReferenceToken);
}

var defaultConsentReferenceCookieId = 'yaas-consent-reference';
var consentReferenceCookieIdSuffix = '-consentReference';
var defaultConsentReferenceTokenCookieId = 'yaas-consent-reference-token';
var consentReferenceTokenIdSuffix = '-consentReferenceToken';
var consentReferenceDuration = 300 * 24; // 300 days

function getConsentReferenceCookieId() {
    return prepareIdForSite(consentReferenceCookieIdSuffix, defaultConsentReferenceCookieId);
}

function getConsentReferenceTokenId() {
    return prepareIdForSite(consentReferenceTokenIdSuffix, defaultConsentReferenceTokenCookieId);
}

function prepareIdForSite(idSuffix, defaultId) {
    var configParameters = config.getConfigParameters();
    var id = defaultId;
    if (configParameters.siteId) {
        id = '' + configParameters.siteId + idSuffix;
    }
    return id;
}

},{"../config/config":4,"../storage/cookie":20}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDebugEnabled = isDebugEnabled;
exports.enable = enable;
exports.disable = disable;
exports.init = init;
exports.info = info;
exports.warn = warn;
exports.log = log;
exports.error = error;
function isDebugEnabled() {
    return sessionStorage[profileTagDebugFlag] === 'true';
}

function enable() {
    sessionStorage[profileTagDebugFlag] = true;
    prefixMessageAndPrint('info', 'Profile Tag debug mode has been enabled.');
}

function disable() {
    sessionStorage[profileTagDebugFlag] = false;
    prefixMessageAndPrint('info', 'Profile Tag debug mode has been disabled.');
}

function init() {
    if (typeof Storage === 'undefined') {
        return;
    }

    if (urlHasDebugFlag('false')) {
        disable();
    } else if (urlHasDebugFlag('true')) {
        enable();
    }
}

function info() {
    if (isDebugEnabled()) {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        prefixMessageAndPrint.apply(undefined, ['info'].concat(args));
    }
}

function warn() {
    if (isDebugEnabled()) {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        prefixMessageAndPrint.apply(undefined, ['warn'].concat(args));
    }
}

function log() {
    if (isDebugEnabled()) {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        prefixMessageAndPrint.apply(undefined, ['log'].concat(args));
    }
}

function error() {
    if (isDebugEnabled()) {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        prefixMessageAndPrint.apply(undefined, ['error'].concat(args));
    }
}

var profileTagDebugFlag = 'profileTagDebug';

function urlHasDebugFlag(value) {
    return window.location.search.includes(profileTagDebugFlag + '=' + value);
}

function prefixMessageAndPrint(type) {
    var _console;

    for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
    }

    (_console = console)[type].apply(_console, ['[Profile Tag]'].concat(args)); // eslint-disable-line no-console
}

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDataLayerValue = getDataLayerValue;

var _debug = require('../debug/debug');

var debug = _interopRequireWildcard(_debug);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getDataLayerValue(gtmId, key) {
    var gtm = window.google_tag_manager; //
    if (!gtm) {
        debug.warn('google tag manager not active. Please correct configuration');
        return undefined;
    }

    if (!gtmId) {
        debug.warn('Your are accessing tag manager data layer attributes ' + 'but gtmId is undefined. Please correct configuration.');
        return undefined;
    }

    if (key) {
        return gtm[gtmId].dataLayer.get(key);
    }
    return undefined;
}

},{"../debug/debug":6}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleMappings = handleMappings;

var _debug = require('../debug/debug');

var debug = _interopRequireWildcard(_debug);

var _piwikSvc = require('../requests/piwik-svc');

var piwikSvc = _interopRequireWildcard(_piwikSvc);

var _cookie = require('../storage/cookie');

var cookie = _interopRequireWildcard(_cookie);

var _config = require('../config/config');

var config = _interopRequireWildcard(_config);

var _selectors = require('./selectors');

var select = _interopRequireWildcard(_selectors);

var _postProcessing = require('./postProcessing');

var postProcessing = _interopRequireWildcard(_postProcessing);

var _customGtm = require('./customGtm');

var gtm = _interopRequireWildcard(_customGtm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// =========================================================================
// Implementation of the old format
// =========================================================================

// Note: we do not support printing the pageId nor dataCollectionName for these kind of events

function handleMappings(mappings) {
    var configParameters = config.getConfigParameters();
    var mappingsData = piwikSvc.data; // we add properties here

    // iterate through the mappings
    // this for loop fills "mappings" with some data.
    // it ALSO attaches event listeners to some objects (for custom interactions)
    for (var index = 0; index < mappings.length; index += 1) {
        var mapping = mappings[index];
        var t = null;

        try {
            switch (mapping.type) {
                // case 'consent':
                //     t = select.getQuerySelector(mapping);
                //     handleConsent(page, mapping, t);
                //     break;

                case 'cookie':
                    t = cookie.read(mapping.selector);
                    // TODO do empty cookies exist?
                    mappingsData[mapping.key] = postProcessing.applyPostProcessingFunction(t, mapping);
                    break;

                case 'html':
                    t = select.getQuerySelector(mapping);
                    mappingsData[mapping.key] = postProcessing.applyPostProcessingFunction(t.innerHTML, mapping);
                    break;

                case 'text':
                    t = select.getQuerySelector(mapping);
                    mappingsData[mapping.key] = postProcessing.applyPostProcessingFunction(t.innerText, mapping);
                    break;

                case 'js_variable':
                    t = window[mapping.selector];
                    if (t === undefined) {
                        throw select.selectorNotFoundError(mapping);
                    }
                    mappingsData[mapping.key] = postProcessing.applyPostProcessingFunction(t, mapping);
                    break;

                case 'constant':
                    mappingsData[mapping.key] = mapping.selector;
                    break;

                case 'dom':
                    t = select.getQuerySelector(mapping);
                    mappingsData[mapping.key] = postProcessing.applyPostProcessingFunction(t, mapping);
                    break;

                case 'gtm':
                    t = gtm.getDataLayerValue(configParameters.gtmId, mapping.selector);
                    if (t === undefined) {
                        throw select.selectorNotFoundError(mapping);
                    }
                    mappingsData[mapping.key] = postProcessing.applyPostProcessingFunction(t, mapping);
                    break;

                // this one adds event listeners
                case 'custom_interaction':
                    delegateCustomInteraction(mapping, index);
                    break;

                default:
                    debug.warn('Encountered an unknown type. This is most likely because the UI is trying to use a new type');
                    break;
            }
        } catch (e) {
            debug.warn(e);
        }
    }

    // once the mappings object has been filled with data, we determine "what kind of event" we are going to send.
    // in the most cases, it is just a simple PageViewEvent
    // notice that we only send onPageLoad Events here
    // this implies, that OnLoadEvents are one of the following "types"
    // - SiteSearchEvent (searchTerm, productCategory, constant 1)
    // - CommerceEvent (productSku, productName, productCategory, productPrice)
    // - CategoryViewEvent (productCategory)
    // - PageViewEvent
    // this is one place of the logic, what kind of event is being sent

    if (mappingsData.searchTerm) {
        piwikSvc.sendPiwikSiteSearchEvent(mappingsData.searchTerm, mappingsData.productCategory, 1);
    } else if (mappingsData.productSku && mappingsData.productName && mappingsData.productCategory && mappingsData.productPrice) {
        piwikSvc.sendPiwikCommerceEvent(mappingsData.productSku, mappingsData.productName, mappingsData.productCategory, mappingsData.productPrice);
    } else if (mappingsData.productCategory) {
        piwikSvc.sendPiwikCategoryViewEvent(mappingsData.productCategory);
    } else {
        piwikSvc.sendPiwikPageViewEvent();
    }
}

// TODO: refactor this at some point
/* eslint-disable */

var applyCustomMapping = function applyCustomMapping(domObject, customMappings, schema, domElementEvent) {
    var customMappingValues = {};
    customMappingValues.schema = schema;
    customMappingValues.domElementEvent = domElementEvent;

    for (var key in customMappings) {
        if (!customMappings.hasOwnProperty(key)) {
            continue;
        }
        var obj = customMappings[key];
        var attr = domObject.getAttribute(obj);
        if (attr === null || attr === undefined) {
            attr = domObject[obj]; // try to get it from container
        }
        customMappingValues[key] = attr;
    }

    return customMappingValues;
};

function addEvent(element, event, callbackFunction) {
    if (element.addEventListener) {
        element.addEventListener(event, callbackFunction, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + event, callbackFunction);
    }
}

function delegateCustomInteraction(mapping, index) {
    var interactionDetails = mapping.interactionDetails;
    var selector = interactionDetails.domElement;
    var domObject = document.querySelector(selector);
    if (domObject === null) {
        throw Error('DOM Element with selector ' + selector + ' does not exist in document');
    }

    var mappingsData = piwikSvc.data;

    // check if domObject has our PT listner already attached.
    var eventDataAttribute = "data-profiletag-interaction-" + index;
    if (domObject.getAttribute(eventDataAttribute) === "true") {
        return;
    }
    domObject.setAttribute(eventDataAttribute, "true");

    if (interactionDetails.hasOwnProperty("domSrc") && interactionDetails.domSrc.length > 0) {
        addEvent(domObject, interactionDetails.domElementEvent, function (e) {
            var values = applyCustomMapping(domObject, interactionDetails.customMappings, interactionDetails.schema, interactionDetails.domElementEvent);

            interactionDetails.domSrc.forEach(function (domSelectorEntry) {
                var contentAttribute = domSelectorEntry.attribute;
                var contentElement = domSelectorEntry.selector;
                var contentKey = domSelectorEntry.attributeKey;

                var selectedContentElement = document.querySelector(contentElement);

                if (selectedContentElement) {
                    // edge service cannot digest null values yet
                    var assureStringTypeAndPreventEdgeSideNPE = function assureStringTypeAndPreventEdgeSideNPE() {
                        return selectedContentElement.hasAttribute(contentAttribute) && typeof extracteStringValue === 'string';
                    };
                    if (contentAttribute === 'textContent') {
                        values[contentKey] = selectedContentElement.textContent;
                    } else {
                        var extracteStringValue = selectedContentElement.getAttribute(contentAttribute);
                        if (assureStringTypeAndPreventEdgeSideNPE()) {
                            values[contentKey] = extracteStringValue;
                        } else {
                            debug.info("The value of the extracted attribute '" + contentAttribute + "' for attribute key '" + contentKey + "' is not a string or does not exist.");
                        }
                    }

                    if (values[contentKey] && values[contentKey].length > 0) {
                        values[contentKey] = postProcessing.applyPostProcessingFunction(values[contentKey], domSelectorEntry);
                    }
                }

                debug.info("Selected Content: " + values[contentKey]);
            });

            piwikSvc.sendCustomInteraction(interactionDetails.schema, values);
        });
    } else if (interactionDetails.eventType === 'VideoInteraction') {
        addEvent(domObject, interactionDetails.domElementEvent, function (e) {
            var values = applyCustomMapping(domObject, interactionDetails.customMappings, interactionDetails.schema, interactionDetails.domElementEvent);
            piwikSvc.sendCustomInteraction(interactionDetails.schema, values);
        });
    } else if (interactionDetails.eventType === 'Download') {
        addEvent(domObject, interactionDetails.domElementEvent, function (e) {
            var url = this.href;
            var values = applyCustomMapping(domObject, interactionDetails.customMappings, interactionDetails.schema, interactionDetails.domElementEvent);
            piwikSvc.addCustomMappingToDataStructure(interactionDetails.schema, values);
            piwikSvc.sendLinkOrDownloadEvent(url, 'download');
        });
    } else if (interactionDetails.eventType === 'Outlink') {
        addEvent(domObject, interactionDetails.domElementEvent, function (e) {
            var url = this.href;
            var values = applyCustomMapping(domObject, interactionDetails.customMappings, interactionDetails.schema, interactionDetails.domElementEvent);
            piwikSvc.addCustomMappingToDataStructure(interactionDetails.schema, values);
            piwikSvc.sendLinkOrDownloadEvent(url, 'link');
        });
    } else if (interactionDetails.eventType === 'KeywordSearch') {
        addEvent(domObject, interactionDetails.domElementEvent, function (e) {
            if (mappingsData.searchTerm) {
                var values = applyCustomMapping(domObject, interactionDetails.customMappings, interactionDetails.schema, interactionDetails.domElementEvent);
                piwikSvc.addCustomMappingToDataStructure(interactionDetails.schema, values);
                piwikSvc.sendPiwikSiteSearchEvent(mappingsData.searchTerm, mappingsData.productCategory, 1);
            }
        });
    } else if (interactionDetails.eventType === 'AddToCart' || interactionDetails.eventType === 'ChangeQuantityInCart') {
        addEvent(domObject, interactionDetails.domElementEvent, function (e) {
            var qty = 1;

            if (mappingsData.productQty) {
                qty = mappingsData.productQty;
            }
            if (mappingsData.productSku && mappingsData.productName && mappingsData.productCategory && mappingsData.productPrice) {
                var values = applyCustomMapping(domObject, interactionDetails.customMappings, interactionDetails.schema, interactionDetails.domElementEvent);
                piwikSvc.addCustomMappingToDataStructure(interactionDetails.schema, values);
                piwikSvc.sendPiwikCartUpdate(mappingsData.productSku, mappingsData.productName, mappingsData.productCategory, mappingsData.productPrice, qty, mappingsData.cartId);
            }
        });
    } else if (interactionDetails.eventType === 'RemoveFromCart') {
        addEvent(domObject, interactionDetails.domElementEvent, function (e) {
            if (mappingsData.productSku && mappingsData.productName && mappingsData.productCategory && mappingsData.productPrice && mappingsData.cartId) {
                var values = applyCustomMapping(domObject, interactionDetails.customMappings, interactionDetails.schema, interactionDetails.domElementEvent);
                piwikSvc.addCustomMappingToDataStructure(interactionDetails.schema, values);
                piwikSvc.sendPiwikCartUpdate(mappingsData.productSku, mappingsData.productName, mappingsData.productCategory, mappingsData.productPrice, 0, mappingsData.cartId);
            }
        });
    } else {
        addEvent(domObject, interactionDetails.domElementEvent, function (e) {
            var values = applyCustomMapping(domObject, interactionDetails.customMappings, interactionDetails.schema, interactionDetails.domElementEvent);
            piwikSvc.sendCustomInteraction(interactionDetails.schema, values);
        });
    }
}

},{"../config/config":4,"../debug/debug":6,"../requests/piwik-svc":17,"../storage/cookie":20,"./customGtm":7,"./postProcessing":10,"./selectors":12}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.applyMappings = applyMappings;

var _ajax = require('../requests/ajax');

var ajax = _interopRequireWildcard(_ajax);

var _piwikSvc = require('../requests/piwik-svc');

var piwikSvc = _interopRequireWildcard(_piwikSvc);

var _piwikWrapper = require('../requests/piwik-wrapper');

var piwikService = _interopRequireWildcard(_piwikWrapper);

var _debug = require('../debug/debug');

var debug = _interopRequireWildcard(_debug);

var _profileid = require('../profileid/profileid');

var profileid = _interopRequireWildcard(_profileid);

var _config = require('../config/config');

var config = _interopRequireWildcard(_config);

var _consentReference = require('../consentReference/consentReference');

var consentReference = _interopRequireWildcard(_consentReference);

var _selectors = require('./selectors');

var select = _interopRequireWildcard(_selectors);

var _postProcessing = require('./postProcessing');

var postProcessing = _interopRequireWildcard(_postProcessing);

var _deprecatedMappings = require('./deprecatedMappings');

var deprecatedMappings = _interopRequireWildcard(_deprecatedMappings);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// =========================================================================
// Entry method
// =========================================================================

//
// General Workflow:
// 1) (multiple) pages matches
// 2) IF consentReference exist AND strongId exist
//   - work through mappings
// 3) IF "implicit" AND consentReference exist
//   - get strongId
//   - work through mappings
// 4) IF "implicit"
//   - get consentReference and strongId
//   - work through mappings
//
// TODO: don't pass ConfigurationJSON through 3 functions without using or modifying it,
// TODO: instead create a validator function of sorts

function applyMappings(configurationJSON) {
    debug.info('Site ID: ' + configurationJSON.siteId);
    var pages = getMatchingPages(configurationJSON);
    printAppliedPages(pages);
    run(configurationJSON, pages);
}

function printAppliedPages(pages) {
    if (pages.length <= 0) {
        debug.info('No page definition is being applied');
        return;
    }
    debug.info('Applied page definitions:');
    pages.forEach(function (page) {
        debug.info('Page ID: ' + page.pageId + ' (' + page.selectedRegexObject + ' -> ' + page.regexValue + ')');
    });
}

function getMatchingPages(configurationJSON) {
    var pages = configurationJSON.pages.filter(function (page) {
        if (page.selectedRegexObject && page.regexValue) {
            var objectPath = page.selectedRegexObject;
            var objectToMatchRegEx = getObjectFromPath(objectPath, window, 'window');
            var regEx = new RegExp(page.regexValue);
            var isMatchingRegEx = regEx.test(objectToMatchRegEx);
            return isMatchingRegEx;
        }
        return false;
    });
    return pages;
}

function getObjectFromPath(objectPath, baseObject, baseObjectName) {
    var currentObject = baseObject;
    var pathArray = objectPath.split('.');
    for (var i = 0; i < pathArray.length; i += 1) {
        var currentPath = pathArray[i];
        if (currentPath !== baseObjectName) {
            currentObject = currentObject[currentPath];
            if (typeof currentObject === 'function') {
                return '';
            }
            if (currentObject === undefined) {
                return undefined;
            }
        }
    }
    return currentObject;
}

function run(configurationJSON, pages) {
    var consentRef = consentReference.readConsentReference();
    var strongId = profileid.getStrongId();
    var consent = getEffectiveConsent(configurationJSON);

    if (consentRef && strongId) {
        // nothing is missing
        runForEachPage(pages);
    } else if (consentRef) {
        // implicit but strong ID is missing -> get it, and after that, work through mappings
        handleProfileIdAndCall(function () {
            runForEachPage(pages);
        });
    } else if (consent === 'implicit') {
        // everything is missing, but we can get it implicitly
        initializeConsentReference(function (err, cosentRef) {
            if (err) {
                debug.error('Could not get Consent Reference.');
                debug.error(err);
                return;
            }
            debug.info('Created new Consent Reference: ' + cosentRef);
            runForEachPage(pages);
        });
    } else {
        // everything is missing and user grants consent explicitly
        addAllConsentListeners(pages);
    }
}

// TODO: refactor, also in deprecatedMappings...
function addAllConsentListeners(pages) {
    var numberOfTimesCalled = 0;
    pages.forEach(function (page) {
        return addConsentListener(page, function () {
            if (numberOfTimesCalled === 0) {
                runForEachPage(pages);
                numberOfTimesCalled = 1;
            }
        });
    });
}

function addConsentListener(page, callback) {
    if (page.mappings === undefined) {
        debug.info('No selector of type "consent" found');
        return;
    }

    try {
        var consentListenerConfig = getFirstConsentListenerConfig(page.mappings);
        var elementForListener = document.querySelector(consentListenerConfig.selector);
        if (elementForListener === null) {
            throw Error('Could not find element of selector: ' + consentListenerConfig.selector);
        }
        elementForListener.addEventListener('click', function () {
            initializeConsentReference(function (err, cosentRef) {
                if (err) {
                    debug.error('Could not get Consent Reference.');
                    debug.error(err);
                    return;
                }
                debug.info('Created new Consent Reference: ' + cosentRef);
                callback();
            });
        }, false);
    } catch (e) {
        debug.warn(e);
    }
}

function getFirstConsentListenerConfig(mappings) {
    var consentListenerConfig = mappings.filter(function (mapping) {
        return mapping.type === 'consent';
    });
    if (consentListenerConfig.length <= 0) {
        throw Error('No selector of type "consent" found');
    }
    return consentListenerConfig[0];
}

// at this point we have cr and strongId
function runForEachPage(pages) {
    debug.info('Consent Reference: ' + consentReference.readConsentReference());
    pages.forEach(function (page) {
        workThroughMappings(page);
    });
}

function getEffectiveConsent(configurationJSON) {
    return configurationJSON.siteConsent;
}

function initializeConsentReference(callback) {
    var consentRef = consentReference.readConsentReference();
    if (consentRef !== undefined) {
        // if there is already a consent reference, we should not request a new one
        callback(undefined, consentRef);
        return;
    }
    requestConsentReference(function (err, response) {
        if (err) {
            debug.error(err);
            return;
        }
        if (!response.body.id || !response.body.consentReferenceToken) {
            debug.error('Payload does not have "id" or "consentReferenceToken" property');
            return;
        }
        profileid.makeInitialProfileIdRequest([piwikSvc.getVisitorId()], response.body.id, function () {
            var newConsentReference = response.body.id;
            var newConsentRefToken = response.body.consentReferenceToken;
            consentReference.writeReferenceAndToken(newConsentReference, newConsentRefToken);
            // Also get strongID
            handleProfileIdAndCall(function () {
                if (callback) {
                    callback(undefined, newConsentReference);
                }
            });
        });
    });
}

// method that gets a storng ID and then calls callback
function handleProfileIdAndCall(callback) {
    var consentRef = consentReference.readConsentReference();
    profileid.makeProfileIdRequest([piwikSvc.getVisitorId()], consentRef, function (err, sidResponse) {
        if (err) {
            debug.error('Could not get Strong ID');
            debug.error(err);
            return;
        }
        var profileSid = sidResponse.body;
        window.Y_TRACKING.profileid.setProfileIdCookie(profileSid);
        if (callback) {
            callback();
        }
    });
}

// apply OLD behavior on OLD types and NEW behavior on NEW types
function workThroughMappings(page) {
    var pageId = page.pageId,
        mappings = page.mappings;

    // NEW Profiletag behavior

    var customMappings = mappings.filter(function (mapping) {
        return mapping.type === 'custom_mapping';
    });
    handleCustomMappings(customMappings, pageId);

    // OLD Profiletag behavior (deprecated)
    // only if there is at least one mapping defined (otherwise it is useless)
    var otherMappings = mappings.filter(function (mapping) {
        return mapping.type !== 'custom_mapping' && mapping.type !== 'consent';
    });
    if (otherMappings.length > 0) {
        deprecatedMappings.handleMappings(otherMappings, page); // page is needed for consent setting
    }
}

function handleCustomMappings(mappings, pageId) {
    mappings.forEach(function (mapping) {
        handleCustomMapping(mapping, pageId);
    });
}

function handleCustomMapping(mapping, pageId) {
    var debugInformation = {
        pageId: pageId,
        dataCollectionName: mapping.name
    };

    // get a function that fetches the desired data on the fly
    // and also attach schema to payload
    var functionForDataSelection = generateFunctionForDataSelection(mapping);

    // find out when to trigger (onload or if a js event happens)
    applyMappingTrigger(mapping.trigger, mapping.schema, functionForDataSelection, debugInformation);
}

// This function generates the _profile_custom payload later
function generateFunctionForDataSelection(mapping) {
    return function (event) {
        var profileCustom = {};
        profileCustom.schema = mapping.schema;
        mapping.selectors.forEach(function (selector) {
            // Example:
            // key: "productSku", type: "text", postProcessing: Array(2), selector: "#myProductSku", attributeValue: ""
            var myData = selectDataFromSelector(selector, event);
            var transformedData = postProcessing.applyPostProcessingFunction(myData, selector);
            profileCustom[selector.key] = transformedData;
        });
        return profileCustom;
    };
}

function selectDataFromSelector(selector, event) {
    try {
        var javascriptValue = void 0;
        switch (selector.type) {
            case 'cookie':
                return select.cookie(selector);

            case 'html':
                return select.html(selector);

            case 'text':
                return select.text(selector);

            case 'js_variable':
                javascriptValue = getObjectFromPath(selector.selector, window, 'window');
                if (javascriptValue === undefined) {
                    throw select.selectorNotFoundError(selector);
                }
                return javascriptValue;
            case 'constant':
                return select.constant(selector);

            case 'dom':
                return select.dom(selector);

            case 'gtm':
                return select.gtm(selector);

            case 'event_object':
                return getObjectFromPath(selector.selector, event, 'event');

            default:
                throw Error('Selector Type ' + selector.type + ' does not exist: ' + JSON.stringify(selector));
        }
    } catch (e) {
        debug.warn(e);
        return undefined;
    }
}

// decide whether to send data NOW or when a JS event happens
// notice that the type of request depends on the schema (and implicitly it's payload)
function applyMappingTrigger(trigger, schema, selectionFunction, debugInformation) {
    function makeRequestWithSelectionFunction(event) {
        makeRequest(schema, selectionFunction, event, debugInformation);
    }

    if (trigger.type === 'onload') {
        makeRequestWithSelectionFunction();
    } else if (trigger.type === 'interaction') {
        addEventsToSelector(trigger.domElement, trigger.domElementEvent, makeRequestWithSelectionFunction);
    } else {
        debug.warn('unknown trigger type');
    }
}

function makeRequest(schema, selectionFunction, event, debugInformation) {
    // generate the payload we want to send
    var profileCustom = selectionFunction(event);

    // depending on the schema, we must configure the tracker differently
    // sometimes some data inside the payload is necessary
    // if we don't find this data, throw a warning
    // the GUI should prevent this situation though
    try {
        switch (schema) {
            case _schema2.default.KEYWORD_SCHEMA:
                piwikService.sendPiwikSiteSearchEvent(profileCustom, debugInformation);
                break;

            case _schema2.default.PRODUCT_DETAILS_PAGEVIEW_SCHEMA:
                piwikService.sendPiwikCommerceEvent(profileCustom, debugInformation);
                break;

            case _schema2.default.CATEGORY_PAGEVIEW_SCHEMA:
                piwikService.sendPiwikCategoryViewEvent(profileCustom, debugInformation);
                break;

            case _schema2.default.DOWNLOAD_SCHEMA:
                piwikService.sendDownloadEvent(profileCustom, debugInformation);
                break;

            case _schema2.default.ADDTOCART_SCHEMA:
            case _schema2.default.CHANGE_QUANTITY_IN_CART_SCHEMA:
                piwikService.sendAddToCartEvent(profileCustom, debugInformation);
                break;

            case _schema2.default.REMOVE_FROM_CART_SCHEMA:
                piwikService.sendRemoveFromCartEvent(profileCustom, debugInformation);
                break;

            default:
                piwikService.sendPiwikPageViewEvent(profileCustom, debugInformation);
        }
    } catch (e) {
        debug.warn('Could not send event for schema ' + schema + '\n' + e);
    }
}

function addEventsToSelector(selector, jsEvent, callbackFunction) {
    try {
        var elements = document.querySelectorAll(selector);
        if (elements.length === 0) {
            throw Error('Can\'t add selector to event. Selector does not exist: ' + JSON.stringify(selector));
        }
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            element.addEventListener(jsEvent, callbackFunction, false);
        }
    } catch (e) {
        if (e instanceof DOMException) {
            // Invalid Selector
            debug.warn(e); // TODO: use better warnings -> JS Errors
        } else {
            // Selector not found
            debug.warn(e);
        }
    }
}

/**
 * Method used to fetch mappings for this project
 * @param mappingsUrl
 * @param callbackFunction
 */
function requestConsentReference(cb) {
    var configParameters = config.getConfigParameters();
    var tenant = '' + configParameters.tenant;
    ajax.getAccessToken(configParameters.tenant, configParameters.clientId, 'http://example.com', function (err, token) {
        if (err) {
            cb(err);
            return;
        }
        var url = '' + config.optInUrl + configParameters.tenant + '/consentReferences';
        ajax.post({
            url: url,
            body: '{}',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                //,
                //'hybris-client':  tenant + '.test',
                //'hybris-tenant': tenant
            }
        }, function (consentRefErr, response) {
            if (consentRefErr) {
                cb(consentRefErr, undefined);
                return;
            }
            cb(undefined, response);
        });
    });
}

},{"../config/config":4,"../consentReference/consentReference":5,"../debug/debug":6,"../profileid/profileid":14,"../requests/ajax":15,"../requests/piwik-svc":17,"../requests/piwik-wrapper":18,"./deprecatedMappings":8,"./postProcessing":10,"./schema":11,"./selectors":12}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // post processing must make sure that we only return strings.
// otherwise request to edge will fail
// TODO: unit test + refactor


exports.applyPostProcessingFunction = applyPostProcessingFunction;

var _string = require('../utility/string.utility');

var stringUtility = _interopRequireWildcard(_string);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function applyPostProcessingFunction(input, mapping) {
    var ret = input;
    var trueRet = '';
    if (input === undefined || input === null) {
        return '';
    }
    try {
        if (mapping.type === 'dom') {
            var attributeValue = getAttributeFromElement(input, mapping.attributeValue);
            ret = stringUtility.isEmptyOrUndefined(attributeValue) ? ret : attributeValue;
        }
        if (ret === undefined) {
            return '';
        } else if ((typeof ret === 'undefined' ? 'undefined' : _typeof(ret)) === 'object') {
            trueRet = JSON.parse(JSON.stringify(ret));
        } else if (typeof ret === 'number' || typeof ret === 'boolean') {
            trueRet = ret.toString();
        } else if (typeof ret === 'string') {
            trueRet = ret;
        } else if (ret.constructor === Array) {
            trueRet = ret.slice();
        } else {
            return 'unsupported type';
        }
        if (_typeof(mapping.postProcessing) === 'object' && mapping.postProcessing.length > 0 && trueRet !== undefined) {
            for (var y = 0; y < mapping.postProcessing.length; y++) {
                var dyn = mapping.postProcessing[y];
                if (dyn.func === 'map_get') {
                    trueRet = JSON.parse(JSON.stringify(trueRet))[dyn.params];
                } else {
                    trueRet = trueRet[dyn.func](dyn.params);
                }
            }
        }
        return (typeof ret === 'undefined' ? 'undefined' : _typeof(ret)) === 'object' ? JSON.parse(JSON.stringify(trueRet)) : trueRet;
    } catch (error) {
        return '';
    }
}

function getAttributeFromElement(element, attribute) {
    if (typeof attribute === 'string' && attribute.length > 0) {
        var attributeValue = element.getAttribute(attribute);
        return attributeValue === null || attributeValue === '' ? '' : attributeValue;
    }
    return '';
}

},{"../utility/string.utility":22}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var schema = Object.freeze({
    SITE_SEARCH_SCHEMA: 'context/commerce/KeywordSearch',
    PRODUCT_DETAILS_PAGEVIEW_SCHEMA: 'context/commerce/ProductView',
    CATEGORY_PAGEVIEW_SCHEMA: 'context/commerce/CategoryView',
    DOWNLOAD_SCHEMA: 'context/core/AssetDownloadStarted',
    KEYWORD_SCHEMA: 'context/commerce/KeywordSearch',
    ADDTOCART_SCHEMA: 'context/commerce/AddedToCart',
    CHANGE_QUANTITY_IN_CART_SCHEMA: 'context/commerce/ModifiedCart',
    REMOVE_FROM_CART_SCHEMA: 'context/commerce/RemovedFromCart'
});
exports.default = schema;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectorNotFoundError = selectorNotFoundError;
exports.getQuerySelector = getQuerySelector;
exports.cookie = cookie;
exports.html = html;
exports.text = text;
exports.jsVariable = jsVariable;
exports.constant = constant;
exports.dom = dom;
exports.gtm = gtm;

var _cookie = require('../storage/cookie');

var cookieModule = _interopRequireWildcard(_cookie);

var _customGtm = require('./customGtm');

var gtmModule = _interopRequireWildcard(_customGtm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Tries to find the selector defined by the given mapping in the current document.
// If that selector could not be found an exception is thrown.

function selectorNotFoundError(selector) {
    return Error('SelectorNotFound: Selector "' + selector.key + '" of type "' + selector.type + '" with value "' + selector.selector + (selector.attributeValue ? ' (' + selector.attributeValue + ')' : '') + '" could not be found.');
}

function getQuerySelector(selector) {
    var t = document.querySelector(selector.selector);
    if (t === null) {
        throw selectorNotFoundError(selector);
    }
    return t;
}

function cookie(selector) {
    var cookieValue = cookieModule.read(selector.selector);
    if (cookieValue === '') {
        throw selectorNotFoundError(selector);
    }
    return cookieValue;
}

function html(selector) {
    var htmlElement = getQuerySelector(selector);
    return htmlElement.innerHTML;
}

function text(selector) {
    var textElement = getQuerySelector(selector);
    return textElement.innerText;
}

// TODO Redundant to mappings.js->getObjectFromPath()?
function jsVariable(selector) {
    var javascriptValue = window[selector.selector];
    if (javascriptValue === undefined) {
        throw selectorNotFoundError(selector);
    }
    return javascriptValue;
}

function constant(selector) {
    var constantValue = selector.selector;
    if (constantValue === undefined) {
        throw selectorNotFoundError(selector);
    }
    return constantValue;
}

function dom(selector) {
    return getQuerySelector(selector);
}

function gtm(selector) {
    var gtmValue = gtmModule.getDataLayerValue(window.Y_TRACKING.Config.gtmId, selector);
    if (gtmValue === undefined) {
        throw selectorNotFoundError(selector);
    }
    return gtmValue;
}

},{"../storage/cookie":20,"./customGtm":7}],13:[function(require,module,exports){
'use strict';

require('../lib/polyfill/string.includes');

require('../lib/polyfill/window.customEvent');

var _debug = require('./debug/debug');

var debug = _interopRequireWildcard(_debug);

var _ajax = require('./requests/ajax');

var ajax = _interopRequireWildcard(_ajax);

var _mappings = require('./mappings/mappings');

var mappings = _interopRequireWildcard(_mappings);

var _config = require('./config/config');

var config = _interopRequireWildcard(_config);

var _cookie = require('./storage/cookie');

var cookie = _interopRequireWildcard(_cookie);

var _persistentRequest = require('./requests/persistent-request');

var persistentRequest = _interopRequireWildcard(_persistentRequest);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Global object
var Y_TRACKING = window.Y_TRACKING || {};

// yTracking init function
Y_TRACKING.init = function () {
    debug.init();
    Y_TRACKING.enableDebugMode = debug.enable;
    Y_TRACKING.disableDebugMode = debug.disable;

    var configParameters = config.getConfigParameters();
    debug.info('Tenant: ' + configParameters.tenant);
    debug.info('Client ID: ' + configParameters.clientId);

    var profileTrackingPause = cookie.read('profile.tracking.pause');
    if (profileTrackingPause) {
        debug.log('ASM cookie detected, profile tracking disabled.');
        return;
    }
    var profileConsentGiven = cookie.read('profile.consent.given');
    if (profileConsentGiven === 'false') {
        debug.log('Cookie profile.consent.given is set to false, profile tracking disabled.');
        return;
    }

    if (!configParameters.tenant || !configParameters.clientId) {
        debug.error('Tracking not initialized correctly! Please provide tenantId, clientId and redirectUrl to init function.');
        return;
    }
    if (window.location.protocol === 'http:' && !configParameters.allowInsecureCookies) {
        debug.error('Cannot set secure cookie because your site is not running HTTPS. Please provide allowInsecureCookies:true to init function to allow insecure cookies.');
        return;
    }

    // Get access token and apply mappings
    ajax.getAccessToken(configParameters.tenant, configParameters.clientId, config.redirectUrlConstant, function (getAccessTokenErr) {
        if (getAccessTokenErr) {
            debug.error('Could not get access token');
            return;
        }
        ajax.getMappings(configParameters.configUrl, function (getMappingsErr, result) {
            if (getMappingsErr) {
                debug.error('Error while getting configuration.json for this site');
                return;
            }
            // TODO: clarify if loading is interactive is enough, or if we need to wait for complete.
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function () {
                    mappings.applyMappings(result);
                });
            } else {
                mappings.applyMappings(result);
            }
            window.addEventListener('hashchange', function () {
                mappings.applyMappings(result);
            });
        });
        persistentRequest.retryAll();
    });
};

if (Y_TRACKING.q && Y_TRACKING.q.length && Y_TRACKING.q.length > 0) {
    Y_TRACKING.init();
}
window.Y_TRACKING = Y_TRACKING; // define your namespace yTracking

},{"../lib/polyfill/string.includes":1,"../lib/polyfill/window.customEvent":2,"./config/config":4,"./debug/debug":6,"./mappings/mappings":9,"./requests/ajax":15,"./requests/persistent-request":16,"./storage/cookie":20}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStrongId = getStrongId;
exports.writeStrongId = writeStrongId;
exports.makeProfileIdRequest = makeProfileIdRequest;
exports.makeInitialProfileIdRequest = makeInitialProfileIdRequest;

var _cookie = require('../storage/cookie');

var cookie = _interopRequireWildcard(_cookie);

var _debug = require('../debug/debug');

var debug = _interopRequireWildcard(_debug);

var _ajax = require('../requests/ajax');

var ajax = _interopRequireWildcard(_ajax);

var _piwikSvc = require('../requests/piwik-svc');

var piwikSvc = _interopRequireWildcard(_piwikSvc);

var _config = require('../config/config');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getStrongId() {
    var strongId = cookie.read(profileIdCookieName);
    if (strongId === '') {
        return undefined;
    }

    // find out the format of the strongId.
    // Old format: JSON string that has "l", "m" and "r" property
    // New format: simple string with value of "m" property
    if (isDeprecatedStrongId(strongId)) {
        strongId = readDeprecatedStrongId(strongId);
        writeStrongId(strongId);
    }

    return strongId;
}

function writeStrongId(strongId) {
    cookie.write(profileIdCookieName, strongId, 300 * 24);
}

// TODO: what is the difference between makeProfileIdRequest and makeInitialProfileIdRequest

function makeProfileIdRequest(ids, consentRef, callback) {
    var strongId = getStrongId();
    if (strongId !== undefined && strongId !== '') {
        // we need to make sure, that this code is only executed on browsers which do not support 3rd party cookies
        callback(undefined, strongId);
    } else {
        var idDigest = '';
        for (var i = 0; i < ids.length; i++) {
            idDigest += '&id=' + ids[i];
        }
        var configParameters = config.getConfigParameters();
        var url = '' + config.strongIdUrl + configParameters.tenant + '/id?cr=' + consentRef + idDigest;
        ajax.get(url, function (err, response) {
            if (err) {
                callback(err, undefined);
                return;
            }
            callback(undefined, response);
        });
    }
}

/**
 * When the user Opts In, this method is called first, even before creating the consent ref cookie
 */
function makeInitialProfileIdRequest(ids, consentRef, callback) {
    var idDigest = '';
    for (var i = 0; i < ids.length; i++) {
        idDigest += '&id=' + ids[i];
    }
    var configParameters = config.getConfigParameters();
    var url = '' + config.strongIdPxUrl + configParameters.tenant + '/id?cr=' + consentRef + idDigest;
    createProfileIdPixel(url, consentRef, function () {
        callback(); // pixel there, cookie set
    });
}

// we cannot deprecate this yet because we load 'window.Y_TRACKING.profileid.ypsid'
// from the https://profile.yaas.io/sid/ service and execute this function later
window.Y_TRACKING = window.Y_TRACKING || {};
window.Y_TRACKING.profileid = window.Y_TRACKING.profileid || {};
window.Y_TRACKING.profileid.setProfileIdCookie = function (strongId) {
    if (strongId) {
        cookie.write(profileIdCookieName, strongId.m, 300 * 24);
        piwikSvc.data.sid = strongId.m;
    }
};

var profileIdCookieName = '__sid';

/**
 * Creates a new <script> element with src = https://profile.yaas.io/sid/{tenant}/sid?cr={consent}
 * the referenced script defines the following function called 'window.Y_TRACKING.profileid.ypsid'
 *
 *
 *  window.Y_TRACKING.profileid.ypsid = function() {
 *       var __sid = {"l":"sCdwNHNdZWqa/nzrjtvcUg==","m":"3gGI94owlOlBEyNo+qmBAX8rae0paOIyat+Q65F2NMTnvEUF0jj4RKw5Fa2do6vB","r":"r8Fuv8AoMnWJtfBDOBvnWT9PGmSq7XDERL3NWG2nJ7A="};
 *       window.Y_TRACKING.profileid.setProfileIdCookie(__sid);
 *  };
 *
 *
 * the method 'window.Y_TRACKING.profileid.ypsid' is called in the onload event of the tracking pixel (<img>)
 *
 * @param src  https://profile.yaas.io/sid/{tenant}/sid?cr={consent}
 * @param callback
 */
function loadPersonalizedStrongId(src, callback) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onreadystatechange = function () {
        var state = s.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    s.onload = s.onreadystatechange;
    document.getElementsByTagName('head')[0].appendChild(s);

    debug.info('loadPersonalizedStrongId() finished');
}

/**
 * Creates an img element (tracking pixel)
 * the 'onload' event of this element executes the method window.Y_TRACKING.profileid.ypsid loaded previously to set the strong id cookie
 */
function createProfileIdPixel(url, consentRef, callback) {
    var configParameters = config.getConfigParameters();
    loadPersonalizedStrongId('https://' + config.strongIdBaseUrl + '/sid/' + configParameters.tenant + '/sid?cr=' + consentRef, function () {
        var img = document.createElement('img');
        img.setAttribute('src', url);
        img.setAttribute('id', '__sid_px_');
        img.onload = function () {
            debug.info('re-setting __sid cookie');
            window.Y_TRACKING.profileid.ypsid();
            callback();
        };
        document.body.appendChild(img);
    });
}

function isDeprecatedStrongId(strongId) {
    return strongId[0] === '{';
}

function readDeprecatedStrongId(strongId) {
    var strongIdJSON = JSON.parse(strongId);
    return strongIdJSON.m; // we only use "m" and not "l" or "r"
}

},{"../config/config":4,"../debug/debug":6,"../requests/ajax":15,"../requests/piwik-svc":17,"../storage/cookie":20}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = get;
exports.post = post;
exports.getAccessToken = getAccessToken;
exports.getMappings = getMappings;

var _localCache = require('../storage/local-cache');

var localCache = _interopRequireWildcard(_localCache);

var _config = require('../config/config');

var config = _interopRequireWildcard(_config);

var _requestHelper = require('./request-helper');

var requestHelper = _interopRequireWildcard(_requestHelper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function get(url, cb) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE || http.readyState === 4) {
            if (http.status >= 200 && http.status < 300) {
                cb(null, requestHelper.mapResponse(http), http);
            } else {
                cb(requestHelper.mapErrorResponse(http));
            }
        }
    };
    http.open('GET', url, true);
    requestHelper.enableTracing(http, url);
    http.send();
}

function post(obj, cb) {
    var http = new XMLHttpRequest();
    http.open('POST', obj.url, true);
    requestHelper.preparePostHeaders(http, obj);
    http.onreadystatechange = function () {
        return requestHelper.statusReadyListener(http, cb);
    };
    http.send(obj.body);
}

function getAccessToken(tenantId, clientId, redirectUrl, callBack) {
    var authTokenName = 'yaas-token';
    // Try to find token in cache
    var token = localCache.get(authTokenName);
    if (token) {
        callBack(null, token);
        return;
    }
    // If token not in cache go and fetch a new one
    // ToDo Demo hack hard coded JWT token
	var accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjRkZWJhNzg2LTQyZGEtMTFlOC04NDJmLTBlZDVmODlmNzE4YiJ9.eyJzdWIiOiJwcm9maWxlLnNjaXByb3ZpZGVyIiwidmVyIjoiMSIsImlzcyI6InByb2ZpbGUtYXV0aG9yaXphdGlvbi1zZXJ2aWNlIiwiZXhwIjoxNTYyNzUxMjkxLCJpYXQiOjE1MzEyMTUyOTEsInVzZXIiOiJQMDAwMDEwIiwidGVuYW50Ijoib3Jrc2JlYXQifQ.l0Eks3s0EnyMpX7yxxJNTK8Kk3hwMQ7I3AV31CqdReg1Okdxvdbn8zkrej5gpzwjQ2TYPK5xOwtFFbIPEqLzCcaJrFmAMzEHG3UrNP1cJLzKvRXMrdoIdoJsA93zTAtu5ZscCHiSRZmOYywo8ihqFChLFBJEzX79ge7fZwBZEAODyNEzVzt2jGH0JJ-ydc_BsCi394bTR0z2DCWVTcVUyuUz61fuqQdNV3dsV52bkniExEr3rBJKNdunGUyOb3dUDOIsgElZoUVJjFa0c8qCn3tTF_V_-BoW8hap3zDfWq0waEnCyc1IQtvk3DoZge8kkR9iVX148XOjiUw1X7wWOA';
	var expirationDate = getExpirationDateFromResponse();
	localCache.setCacheItem(authTokenName, accessToken, expirationDate);
	callBack(null, accessToken);
}


function getMappings(url, callBack) {
    get(url, function (err, response) {
        if (err) {
            callBack(err, null);
            return;
        }
        var mappingsJSON = response.body;
        callBack(null, mappingsJSON);
    });
}

function getExpirationDateFromResponse(response) {
    var lagTimeInSeconds = 3 * 60;
    var expireInSeconds = 360000000 - lagTimeInSeconds;
    var expireInMiliSeconds = expireInSeconds * 1000;
    var expirationDate = new Date();
    expirationDate.setMilliseconds(expirationDate.getMilliseconds() + expireInMiliSeconds);
    return expirationDate;
}

},{"../config/config":4,"../storage/local-cache":21,"./request-helper":19}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestsCacheKey = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.post = post;
exports.retryAll = retryAll;
exports.getAllRequests = getAllRequests;

var _requestHelper = require('./request-helper');

var requestHelper = _interopRequireWildcard(_requestHelper);

var _debug = require('../debug/debug');

var debug = _interopRequireWildcard(_debug);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var requestsCacheKey = exports.requestsCacheKey = 'profiletag_requests';

function post(obj, cb) {
    var http = new XMLHttpRequest();
    http.open('POST', obj.url, true);
    requestHelper.preparePostHeaders(http, obj);
    var key = cacheRequest(obj);
    http.onreadystatechange = function () {
        return handleCacheRequestReadyStateChange(http, key, cb);
    };
    http.send(obj.body);
}

function retryAll() {
    var unexpiredRequests = getUnexpiredRequests();
    cacheAllRequests(unexpiredRequests);
    Object.keys(unexpiredRequests).forEach(function retry(key) {
        retryPostRequest(unexpiredRequests[key], key);
    });
}
function getAllRequests() {
    var requests = window.localStorage.getItem(requestsCacheKey);
    return requests === null || requests === undefined ? {} : JSON.parse(requests);
}
function getUnexpiredRequests() {
    var requests = getAllRequests();
    return filterObject(requests, isUnexpired(Date.now()));
}
function isUnexpired(now) {
    return function useSameExpirationForComparison(expirationDate) {
        return isGreaterThan(expirationDate, now);
    };
}
function isGreaterThan(value1, value2) {
    return value1 > value2;
}
function uncacheRequest(key) {
    var requests = getAllRequests();
    if (typeof requests === 'undefined' || _typeof(requests[key]) !== 'object') {
        throw new Error('Key not found for request');
    }
    delete requests[key];
    cacheAllRequests(requests);
}
function retryPostRequest(request, key) {
    var http = new XMLHttpRequest();
    http.open('POST', request.url, true);
    requestHelper.preparePostHeaders(http, request);
    http.onreadystatechange = function () {
        return handleCacheRequestReadyStateChange(http, key, function () {
            return logPersistentRequest(http);
        });
    };
    http.send(request.body);
}
function logPersistentRequest(http) {
    try {
        var tracingId = requestHelper.getTracingId(http);
        debug.log('Sent persistent request. Tracing ID: ' + tracingId);
    } catch (e) {
        debug.warn(e);
    }
}

function cacheRequest(request) {
    var expirationDate = getRequestRetryPeriod();
    var requests = getAllRequests();
    if ((typeof requests === 'undefined' ? 'undefined' : _typeof(requests)) !== 'object') {
        requests = {};
    }
    requests[expirationDate] = request;
    cacheAllRequests(requests);
    return expirationDate;
}

function cacheAllRequests(requests) {
    if (Object.keys(requests).length > 0) {
        window.localStorage.setItem(requestsCacheKey, JSON.stringify(requests));
    } else {
        window.localStorage.removeItem(requestsCacheKey);
    }
}

function filterObject(obj, predicate) {
    return Object.keys(obj).filter(function keyMatchespredicate(key) {
        return predicate(key);
    }).reduce(function reduceArrayBackToObject(accumulator, currentValue) {
        accumulator[currentValue] = obj[currentValue];
        return accumulator;
    }, {});
}

function requestMadeItToEdge(http) {
    return http.readyState === XMLHttpRequest.HEADERS_RECEIVED;
}
function handleCacheRequestReadyStateChange(http, key, cb) {
    cacheListener(http, key);
    requestHelper.statusReadyListener(http, cb);
}

function cacheListener(http, key) {
    if (requestMadeItToEdge(http)) {
        uncacheRequest(key);
    }
}
function getRequestRetryPeriod() {
    var expirationDate = Date.now();
    return expirationDate + 1000 * 60 * 15;
}

},{"../debug/debug":6,"./request-helper":19}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.data = undefined;
exports.prepare = prepare;
exports.restore = restore;
exports.tracker = tracker;
exports.sendPiwikCommerceEvent = sendPiwikCommerceEvent;
exports.sendPiwikPageViewEvent = sendPiwikPageViewEvent;
exports.sendPiwikSiteSearchEvent = sendPiwikSiteSearchEvent;
exports.sendPiwikCategoryViewEvent = sendPiwikCategoryViewEvent;
exports.sendDownloadEvent = sendDownloadEvent;
exports.sendOutlinkEvent = sendOutlinkEvent;
exports.sendLinkOrDownloadEvent = sendLinkOrDownloadEvent;
exports.sendPiwikCartUpdate = sendPiwikCartUpdate;
exports.addCustomMappingToDataStructure = addCustomMappingToDataStructure;
exports.sendCustomInteraction = sendCustomInteraction;
exports.getVisitorId = getVisitorId;

var _ajax = require('../requests/ajax');

var ajax = _interopRequireWildcard(_ajax);

var _persistentRequest = require('../requests/persistent-request');

var persistentRequest = _interopRequireWildcard(_persistentRequest);

var _profileid = require('../profileid/profileid');

var profileid = _interopRequireWildcard(_profileid);

var _debug = require('../debug/debug');

var debug = _interopRequireWildcard(_debug);

var _config = require('../config/config');

var config = _interopRequireWildcard(_config);

var _consentReference = require('../consentReference/consentReference');

var consentReference = _interopRequireWildcard(_consentReference);

var _requestHelper = require('../requests/request-helper');

var requestHelper = _interopRequireWildcard(_requestHelper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// TODO: refactor to make side effect free (!)
// we use data to set our payload we want to send.
// prepare and restore are responsible for setting these
var data = exports.data = {};
var debugInformation = {
    pageId: undefined,
    dataCollectionName: undefined
};

// due to these side effects, we need a convenient way to set and restore "temporary" values of data
var backupData = void 0;
function prepare(newData, newDebugInformation) {
    backupData = data;
    exports.data = data = newData;
    debugInformation = newDebugInformation;
}
function restore() {
    exports.data = data = backupData;
    debugInformation = {
        pageId: undefined,
        dataCollectionName: undefined
    };
}

var trackerObject = void 0;
function tracker() {
    if (trackerObject === undefined) {
        var configParameters = config.getConfigParameters();
        var trackerName = configParameters.siteId || configParameters.tenant; // use tenant as a backup
        trackerObject = window.Piwik.getTracker(config.basePiwikUrl, trackerName);
        trackerObject.setCustomRequestProcessing(processPiwikRequest);
        trackerObject.setSiteId(trackerName);
        trackerObject.setTrackerUrl(config.basePiwikUrl);
        trackerObject.setDocumentTitle('PageViewEvent');
        debug.info('Piwik ID: ' + getVisitorId());
    }

    return trackerObject;
}

function sendPiwikCommerceEvent(productSku, productName, productCategory, productPrice) {
    tracker().setEcommerceView(productSku, productName, productCategory, productPrice);
    tracker().trackPageView('ProductDetailPageViewEvent');
}

function sendPiwikPageViewEvent() {
    tracker().trackPageView('PageViewEvent');
}

function sendPiwikSiteSearchEvent(keyword, category, numResults) {
    tracker().trackSiteSearch(keyword, category, numResults);
    tracker().setCustomData('categoryName', category);
}

function sendPiwikCategoryViewEvent(categoryPage) {
    tracker().setEcommerceView(false, false, categoryPage);
    tracker().trackPageView('CategoryPageViewEvent');
}

function sendDownloadEvent(url) {
    tracker().trackLink(url, 'download');
}

function sendOutlinkEvent(url) {
    tracker().trackLink(url, 'link');
}

function sendLinkOrDownloadEvent(url, linkType) {
    tracker().trackLink(url, linkType);
    tracker().trackPageView('PageViewEvent'); // TODO: why do we always send two events? Looks like a bug
}

function sendPiwikCartUpdate(productSku, qty, cartId) {
    tracker().setEcommerceView(productSku, undefined, undefined, undefined);
    tracker().addEcommerceItem(productSku, undefined, undefined, undefined, '' + qty);
    tracker().setCustomVariable(1, 'ec_id', cartId, 'page');
    tracker().trackEcommerceCartUpdate('0');
}

function addCustomMappingToDataStructure(schema, customMappings) {
    Object.keys(customMappings).forEach(function (key) {
        data[key] = customMappings[key];
    });
}

function sendCustomInteraction(schema, customMappings) {
    addCustomMappingToDataStructure(schema, customMappings);
    tracker().trackPageView('PageViewEvent');
}

function getVisitorId() {
    return tracker().getVisitorId();
}

function processPiwikRequest(e) {
    var _debugInformation = debugInformation,
        pageId = _debugInformation.pageId,
        dataCollectionName = _debugInformation.dataCollectionName;


    var obj = getPiwikQueryParameters(e);
    obj._profile_custom = data; // eslint-disable-line no-underscore-dangle

    // at this point we always should have the consent reference
    var consentRef = consentReference.readConsentReference();
    handleProfileIdAndMakePiwikRequest(consentRef, obj, pageId, dataCollectionName);
}

function getPiwikQueryParameters(hash) {
    var split = hash.split('&');
    var obj = {};
    for (var i = 0; i < split.length; i = i + 1) {
        var kv = split[i].split('=');
        obj[kv[0]] = decodeURIComponent(kv[1] ? kv[1].replace(/\+/g, ' ') : kv[1]);
    }

    // Set date for this request to current datetime when request processed. Needed from CDM for order of events.
    obj.date = new Date().getTime();

    // if action_name undefined
    if (!obj.action_name) {
        obj.action_name = getActionName(obj);
    }
    return obj;
}

function getActionName(obj) {
    if (obj.ec_items) {
        // ec_items "[["productSku"", ""productName"", ""productCategory"", ""productPrice"", ""productQty"]]"
        if (obj.ec_items.split(',')[4].includes('"0"')) {
            return 'RemoveFromCart';
        }
        return 'AddToCartEvent';
    }
    return 'PageViewEvent';
}

function makePiwikRequest(obj, pageId, dataCollectionName) {
    // TODO: use exceptions and errors here as well as for getStrongId()
    var sid = profileid.getStrongId();
    if (sid) {
        obj._profile_custom.sid = sid;
    }
    var configParameters = config.getConfigParameters();
    ajax.getAccessToken(configParameters.tenant, configParameters.clientId, config.redirectUrlConstant, function (err, token) {
        var req = {
            url: config.basePiwikUrl + 'events',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'consent-reference': consentReference.readConsentReference(),
                'hybris-tenant': configParameters.tenant,
                'event-type': 'piwik'
            },
            body: JSON.stringify(obj)
        };
        persistentRequest.post(req, function (eventsErr, eventsResponse, eventsHttpResponse) {
            try {
                var tracingId = requestHelper.getTracingId(eventsHttpResponse);
                debug.log('[' + pageId + '] [' + dataCollectionName + '] Tracing ID: ' + tracingId);
            } catch (e) {
                debug.warn(e);
            }
        });
    });
}

function handleProfileIdAndMakePiwikRequest(_consentRef, obj, pageId, dataCollectionName) {
    profileid.makeProfileIdRequest([getVisitorId()], _consentRef, function (err, sidResponse) {
        if (err) {
            debug.error('Could not get Strong ID');
            debug.error(err);
            return;
        }
        var profileSid = sidResponse.body;
        window.Y_TRACKING.profileid.setProfileIdCookie(profileSid);
        makePiwikRequest(obj, pageId, dataCollectionName); // Make post request to service
    });
}

},{"../config/config":4,"../consentReference/consentReference":5,"../debug/debug":6,"../profileid/profileid":14,"../requests/ajax":15,"../requests/persistent-request":16,"../requests/request-helper":19}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendPiwikSiteSearchEvent = sendPiwikSiteSearchEvent;
exports.sendPiwikCommerceEvent = sendPiwikCommerceEvent;
exports.sendPiwikCategoryViewEvent = sendPiwikCategoryViewEvent;
exports.sendPiwikPageViewEvent = sendPiwikPageViewEvent;
exports.sendDownloadEvent = sendDownloadEvent;
exports.sendOutlinkEvent = sendOutlinkEvent;
exports.sendAddToCartEvent = sendAddToCartEvent;
exports.sendRemoveFromCartEvent = sendRemoveFromCartEvent;

var _piwikSvc = require('./piwik-svc');

var piwikSvc = _interopRequireWildcard(_piwikSvc);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// helper method to resolve side effects in the piwikSvc class
// piwikSvc was not desiged to get called multiple times as it
// relies on the global object "window.Y_TRACKING.mappings.data"
// throws exception if some required attribute is missing
// TODO: refactor the whole piwik-svc.js file to make it side effect free

function sendPiwikSiteSearchEvent(profileCustom, debugInformation) {
    validateProfileCustomPayload(profileCustom, ['searchTerm', 'productCategory', 'numResults']);
    piwikSvc.prepare(profileCustom, debugInformation);
    piwikSvc.sendPiwikSiteSearchEvent(profileCustom.searchTerm, profileCustom.productCategory, profileCustom.numResults);
    piwikSvc.restore();
}

function sendPiwikCommerceEvent(profileCustom, debugInformation) {
    validateProfileCustomPayload(profileCustom, ['productSku', 'productName', 'productCategory', 'productPrice']);
    piwikSvc.prepare(profileCustom, debugInformation);
    piwikSvc.sendPiwikCommerceEvent(profileCustom.productSku, profileCustom.productName, profileCustom.productCategory, profileCustom.productPrice);
    piwikSvc.restore();
}

function sendPiwikCategoryViewEvent(profileCustom, debugInformation) {
    validateProfileCustomPayload(profileCustom, ['productCategory']);
    piwikSvc.prepare(profileCustom, debugInformation);
    piwikSvc.sendPiwikCategoryViewEvent(profileCustom.productCategory);
    piwikSvc.restore();
}

function sendPiwikPageViewEvent(profileCustom, debugInformation) {
    piwikSvc.prepare(profileCustom, debugInformation);
    piwikSvc.sendPiwikPageViewEvent();
    piwikSvc.restore();
}

function sendDownloadEvent(profileCustom, debugInformation) {
    // TODO: check if trigger is a link (has href attribute), etc...
    // TODO: maybe it is better to configure it explicitly? let the user decide where the url comes from
    // TODO: user needs to set a "downloadUrl" attribute
    // TODO: that way we don't need trigger and everything is more consistent.
    // TODO: maybe we even want to send downloads by opening a page via an onload event.
    // TODO: then the old logic does not work as well
    // TODO: or maybe the url comes from somewhere else (or we want to use a constant, js_object, ...)
    // var downloadElement = document.querySelector(trigger.domElement);
    // if (downloadElement === null) {
    //     throw "Selector does not exist"; // TODO: align with exceptions OR what about we just use strings?
    // }
    // var url = downloadElement.href;
    // if (url === undefined) {
    //     throw "Element does not have href attribute"; // TODO:
    // }
    validateProfileCustomPayload(profileCustom, ['downloadUrl']);
    piwikSvc.prepare(profileCustom, debugInformation);
    piwikSvc.sendDownloadEvent(profileCustom.downloadUrl);
    piwikSvc.restore();
}

function sendOutlinkEvent(profileCustom, debugInformation) {
    // TODO: see DOWNLOAD_SCHEMA
    validateProfileCustomPayload(profileCustom, ['outlinkUrl']);
    piwikSvc.prepare(profileCustom, debugInformation);
    piwikSvc.sendOutlinkEvent(profileCustom.outlinkUrl);
    piwikSvc.restore();
}

function sendAddToCartEvent(profileCustom, debugInformation) {
    // TODO: before productQty had default to one if it wasn't found
    // TODO: I propose to set it to 1 via a constant selector by default in the GUI
    validateProfileCustomPayload(profileCustom, ['productQty', 'productSku', 'cartId']);
    piwikSvc.prepare(profileCustom, debugInformation);
    piwikSvc.sendPiwikCartUpdate(profileCustom.productSku, profileCustom.productQty, profileCustom.cartId);
    piwikSvc.restore();
}

function sendRemoveFromCartEvent(profileCustom, debugInformation) {
    validateProfileCustomPayload(profileCustom, ['productSku', 'cartId']);
    piwikSvc.prepare(profileCustom, debugInformation);
    var productQty = 0; // since we removed the item, set qty to 0
    piwikSvc.sendPiwikCartUpdate(profileCustom.productSku, productQty, profileCustom.cartId);
    piwikSvc.restore();
}

// check if necessary attributes are in _profile_custom
// if not, throw exception!
var has = Object.prototype.hasOwnProperty;
function validateProfileCustomPayload(profileCustom, attributes) {
    var attributesMissing = [];
    attributes.forEach(function (attribute) {
        if (!has.call(profileCustom, attribute)) {
            attributesMissing.push(attribute);
        }
    });
    if (attributesMissing.length > 0) {
        // TODO: refactor to JS Error
        throw Error('Following attributes are missing in _profile_custom: ' + attributesMissing.join(', '));
    }
}

},{"./piwik-svc":17}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.statusReadyListener = statusReadyListener;
exports.statusIsAvailable = statusIsAvailable;
exports.handleStatusAndCallback = handleStatusAndCallback;
exports.preparePostHeaders = preparePostHeaders;
exports.mapResponse = mapResponse;
exports.mapErrorResponse = mapErrorResponse;
exports.enableTracing = enableTracing;
exports.getTracingId = getTracingId;

var _debug = require('../debug/debug');

var debug = _interopRequireWildcard(_debug);

var _config = require('../config/config');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function statusReadyListener(http, cb) {
    if (statusIsAvailable(http)) {
        handleStatusAndCallback(http, cb);
    }
}

function statusIsAvailable(http) {
    return http.readyState === XMLHttpRequest.DONE || http.readyState === 4;
}

// TODO: this method knows too much about the callback. When we start using async await and promises, lets refactor
function handleStatusAndCallback(http, cb) {
    if (http.status >= 200 && http.status < 300) {
        cb(null, mapResponse(http), http);
    } else {
        cb(mapErrorResponse(http));
    }
}

function preparePostHeaders(http, obj) {
    enableTracing(http, obj.url);

    // Send the proper header information along with the request
    // http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var headerNames = Object.keys(obj.headers);
    headerNames.forEach(function (headerName) {
        http.setRequestHeader(headerName, obj.headers[headerName]);
    });
}
function mapResponse(response) {
    var returnObj = {};
    returnObj.status = response.status;
    try {
        returnObj.body = {};
        if (response.response !== '') {
            returnObj.body = JSON.parse(response.response);
        }
    } catch (e) {
        debug.warn(e);
    }
    return returnObj;
}

function mapErrorResponse(err) {
    var returnObj = {};
    returnObj.status = err.status;
    try {
        returnObj.message = err.response;
    } catch (e) {
        debug.warn(e);
    }
    return returnObj;
}

function enableTracing(httpRequest, url) {
    var isEdgeUrl = url.indexOf(config.basePiwikUrl) > -1;
    if (debug.isDebugEnabled() && isEdgeUrl) {
        httpRequest.setRequestHeader('X-B3-Sampled', '1');
    }
}

function getTracingId(http) {
    var tracingId = http.getResponseHeader('Hybris-Context-Trace-Id');
    if (tracingId === null) {
        throw Error('Tracing ID does not exist for given response');
    }
    return tracingId;
}

},{"../config/config":4,"../debug/debug":6}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.write = write;
exports.read = read;
function write(name, value, hours, domain) {
    var path = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '/';

    var expires = hoursToDateString(hours);
    var cookieValue = name + '=' + value + '; expires=' + expires + '; path=' + path;
    if (domain) {
        cookieValue += '; domain=' + domain;
    }
    if (window.location.protocol === 'https:') {
        cookieValue += '; secure';
    }
    document.cookie = cookieValue;
}

function read(name) {
    // see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    var searchRegex = new RegExp('(?:(?:^|.*;\\s*)' + name + '\\s*\\=\\s*([^;]*).*$)|^.*$');
    var cookieValue = decodeURI(document.cookie.replace(searchRegex, '$1'));
    return cookieValue;
}

function hoursToDateString() {
    var hours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 720;

    var date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    return date.toGMTString();
}

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = get;
exports.setCacheItem = setCacheItem;
function get(key) {
    if (typeof Storage !== 'undefined') {
        return getCacheItem(key);
    }
    return undefined;
}
function setCacheItem(key, value, expirationDate) {
    window.localStorage.setItem(key, value);
    setExpiration(key, expirationDate);
}

function getExpiration(key) {
    var expireDate = window.localStorage.getItem(key + '_expireDate');
    if (expireDate) {
        return new Date(expireDate);
    }
    return null;
}

function setExpiration(key, expireDate) {
    window.localStorage.setItem(key + '_expireDate', expireDate.toString());
}

function removeCacheItem(key) {
    window.localStorage.removeItem(key);
    window.localStorage.removeItem(key + '_expireDate');
}

function getCacheItem(key) {
    if (!window.localStorage.getItem(key)) {
        return null;
    }

    var now = new Date();
    var expireDate = getExpiration(key);

    if (expireDate && now <= expireDate) {
        return window.localStorage.getItem(key);
    }
    removeCacheItem(key);
    return null;
}

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isEmptyOrUndefined = isEmptyOrUndefined;
exports.isWhiteSpaceOrEmpty = isWhiteSpaceOrEmpty;
function isEmptyOrUndefined(string) {
    if (string === undefined || string === null) {
        return true;
    }
    if (typeof string !== 'string') {
        throw new Error('string expected, instead recieved ' + (typeof string === 'undefined' ? 'undefined' : _typeof(string)));
    }
    return string === '';
}
function isWhiteSpaceOrEmpty(string) {
    return isEmptyOrUndefined(string) || string.trim().length === 0;
}

},{}]},{},[13]);
