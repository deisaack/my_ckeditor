var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
[],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
"string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
!k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();
;/**/
function errorMessage( title, msg, onClose )
{
  function showDialog( title, msg, onClose ) {
    jQuery( "<div>" + msg + "</div>" ).dialog({
      dialogClass : "alert",
      resizable : false,
      modal : true,
      title : title,
      draggable : true,
      buttons : [{
        "text": "Ok",
        "class": "std-btn-1",
        "click": function(e) {
          jQuery( this ).dialog( "close" );
        }
      }],
      close : onClose
    });
  }

  if ( !jQuery.dialog ) {
    jQuery.getScript( "/themes/ckeditor4/js/jquery-ui-dialog.min.js", function() {
      showDialog( title, msg, onClose );
    });
  }
  else {
    showDialog( title, msg, onClose );
  }
}

function downloadThanks(){
  setTimeout(function(){
    jQuery('#download_thanks').modal({
      width: 500,
      height: 520,
      minWidth: 500,
      minHeight: 520,
      persist: true,
      overlayClose:true,
      zIndex: 1001,
      onOpen : function(dialog){
        dialog.data.show();
        dialog.container.show();
        dialog.overlay.fadeIn(500);
      }
    });
  },1500);
}

jQuery(document).ready(function($) {
  /* Show presets versions compare table in modal box for /download and /builder pages */
  $( '.compare-presets' ).live('click',function(e){
    e.preventDefault();
    $('#presets_table').modal({
      height: parseInt($(window).height()/1.2,10),
      width: parseInt($(window).width()/1.4,10),
      minHeight: parseInt($(window).height()/1.4,10),
      minWidth: parseInt($(window).width()/1.4,10),
      maxHeight: parseInt($(window).height()/1.4,10),
      maxWidth: 960,
      persist: true,
      overlayClose:true,
      zIndex: 1001,
      onOpen : function(dialog){
        dialog.data.show();
        dialog.container.show();
        dialog.overlay.fadeIn(500);
      }
    });
  });

  // Pretty print
  if (typeof window.prettyPrint == 'function') {
    $('#forum-content pre, #add-on-details pre, #section_user_addons pre, #comments .comment-content pre').addClass('prettyprint');
    prettyPrint();
  }

  if ( Drupal.settings && Drupal.settings.error_message ) {
    errorMessage( 'Information', Drupal.settings.error_message );
  }

  // Release table scrolling
  /*
  $( '.releases .wrapper' ).scroll( function() {
    var $notes = $( '.open-note div' );
    if ( $( this ).scrollLeft() > 7 ) {
      $notes.stop().animate( {
        left : ($( this ).scrollLeft()) + 'px'
      }, 200 );
    } else {
      $notes.stop().animate( {
        left : 0
      }, 200 );
    }
  } );
  */

  /* custom input file */
  $( '.under-input' ).click( function() {
    $( this ).parent().prev('input').click();
  } );

  // Analitycs
  $('a.sign-up').click(function(){
    if ( typeof _gaq !== "undefined" && _gaq ){
      _gaq.push(['_trackEvent', 'ckeditor.com', 'sign up', 'topmenu sign up']);
    }
  });

  // Download page
  var downloadChoices = $('.download-choice--middle-buttons');
  if ( downloadChoices.length > 0 ) {
    var builderLink = new RegExp('/builder');
    downloadChoices.find('.download-choice__option a').click(function (e) {
      e.preventDefault();
      var location = $(this).attr('href');
      // Go straight to builder - do not count downloads
      if (builderLink.test(location)) {
        window.location.href = location;
      } else {
        // Analitycs
        if (typeof _gaq !== "undefined" && _gaq) {
          _gaq.push(['_trackEvent', 'ckeditor.com', 'download', 'ckeditor download - regular']);
        }

        setTimeout(function(){
          $('#download_thanks').modal({
            width: 500,
            height: 520,
            minWidth: 500,
            minHeight: 520,
            persist: true,
            overlayClose:true,
            zIndex: 1001,
            onOpen : function(dialog){
              dialog.data.show();
              dialog.container.show();
              dialog.overlay.fadeIn(500);
            }
          });
        }, 1500);

        var locationTimeout = setTimeout(function () {
          window.location.href = location;
        }, 2000);

        ckeditor_downloads_counter(function () {
          clearTimeout(locationTimeout);
          window.location.href = location;
        });
      }
    });

    // Hash handler
    if ( document.location.hash.length > 0 ){
      switch (document.location.hash){
        case '#basic':
        case '#basic-package':
          downloadChoices.find('.download-choice__option').removeClass('download-choice__option--checked');
          downloadChoices.find('.download-choice__option.option-basic').addClass('download-choice__option--checked');
          break;
        case '#standard':
        case '#standard-package':
        default:
          downloadChoices.find('.download-choice__option').removeClass('download-choice__option--checked');
          downloadChoices.find('.download-choice__option.option-standard ').addClass('download-choice__option--checked');
          break;
        case '#full':
        case '#full-package':
          downloadChoices.find('.download-choice__option').removeClass('download-choice__option--checked');
          downloadChoices.find('.download-choice__option.option-full').addClass('download-choice__option--checked');
          break;
      }
    }
  }

  // Add-ons page
  $('.content-block.addon .btn--addon__download, .addon__releases .toggle-download-modal').live( 'click', function(e){
    $('.content-block.addon .addon_download').modal({
      height: 710,
      width: parseInt($(window).width()/1.6,10),
      minHeight: 710,
      minWidth: parseInt($(window).width()/2,10),
      maxHeight: parseInt($(window).height()/1.6,10),
      maxWidth: 960,
      persist: true,
      overlayClose:true,
      zIndex: 1001,
      onOpen : function(dialog){
        dialog.overlay.fadeIn(500, function () {
          dialog.container.fadeIn(400, function () {
            dialog.data.fadeIn(300);
            if ( dialog.data.height() < dialog.wrap.height() ){
              var newHeight = dialog.data.height() + 70 + 'px';
              dialog.wrap.animate({ 'height' : newHeight}, 500);
              dialog.container.animate({ 'height' : newHeight}, 500);
            }
          });
        });
      }
    });
  });

  // View downloads stats
  $('.add-on-description .chart').click(function(){
    var $this = $(this);
    var chart_weekly = $('#chart_weekly');
    var height = (chart_weekly.length > 0)? 620 : 370;

    $('#chart_modal').modal({
      height: height,
      width: 560,
      minHeight: height,
      minWidth: 560,
      maxHeight: height,
      maxWidth: 560,
      persist: true,
      overlayClose:true,
      zIndex: 1001,
      onOpen : function(dialog){
        dialog.overlay.fadeIn(500, function () {
          dialog.container.fadeIn(400, function () {
            dialog.data.fadeIn(300);
            //if ( dialog.data.height() < dialog.wrap.height() ){
            //dialog.wrap.animate({ 'height' : dialog.data.css('height')}, 500);
            //dialog.container.animate({ 'height' : dialog.data.css('height')}, 500);
            var options = {
              scaleShowGridLines : false,
              scaleShowHorizontalLines: false,
              scaleShowVerticalLines: false,
              scaleBeginAtZero: true,
              tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %> downloads"
            };
            var downloadsDaily = new Chart($('#chart_daily').get(0).getContext('2d')).Line({
              labels: $this.data('labelsDaily').split(','),
              datasets: [{
                label: 'Last 30 days',
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                //highlightFill: "rgba(151,187,205,0.75)",
                //highlightStroke: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: $this.data('valuesDaily').split(',')
              }]
            }, options);
            // Show weekly stats only for addons where there are some records
            if ( chart_weekly.length > 0){
              var downloadsWeekly = new Chart(chart_weekly.get(0).getContext('2d')).Bar({
                labels: $this.data('labelsWeekly').split(','),
                datasets: [{
                  label: 'Last 12 months',
                  fillColor: "rgba(151,187,205,0.5)",
                  strokeColor: "rgba(151,187,205,0.8)",
                  highlightFill: "rgba(151,187,205,0.75)",
                  highlightStroke: "rgba(151,187,205,1)",
                  data: $this.data('valuesWeekly').split(',')
                }]
              }, options);
            }
            //}
          });
        });
      }
    });
  });

  $('#edit-field-license-und-cksource-cdl').change(function(){
    if ( $(this).prop('checked') ) {
      $('#cksource_repo_cdl_license_info').remove();
    }
    else {
      $("label[for='edit-field-license-und-cksource-cdl']").append($("<span id='cksource_repo_cdl_license_info'>Please select CDL license (it is not required)</span>"));
    }
  }).trigger('change');

  $('#field-page-add-more-wrapper label[for="edit-field-page-und-0"]').clone().addClass('hidden commercial').text('Product download page').insertAfter($('#field-page-add-more-wrapper label[for="edit-field-page-und-0"]'));
  $('#field-page-add-more-wrapper div.description').clone().addClass('hidden commercial').text('An external website with download URL dedicated to your plugin.').insertAfter($('#field-page-add-more-wrapper div.description'));

  var required_star = '<span title="This field is required." class="form-required">*</span>';
  var commercial_license = $('#field-commercial-license-add-more-wrapper');
  if ( commercial_license.length > 0 ){
    commercial_license.find('label').html( commercial_license.find('label').html().replace(required_star,'')).append(required_star);
  }
  $('#edit-field-license-und-commercial').change(function(){
    if ( $(this).prop('checked') ) {
      $("#edit-field-license-und label").not('[for="edit-field-license-und-commercial"]').addClass('disabled');
      $("#edit-field-license-und input").not(this).prop('disabled',function(i, val){
        return true;
      });
      $('#edit-field-source').hide();
      $('#edit-field-commercial-license').show();
      commercial_license.find('input').prop('required',true);
      $('#field-page-add-more-wrapper label[for="edit-field-page-und-0"], #field-page-add-more-wrapper div.description').not('.commercial').addClass('hidden');
      $('#field-page-add-more-wrapper label[for="edit-field-page-und-0"], #field-page-add-more-wrapper div.description').filter('.commercial').removeClass('hidden');
    }
    else {
      $("#edit-field-license-und label").removeClass('disabled');
      $("#edit-field-license-und input").prop('disabled',function(i, val){
        return false;
      });
      $('#edit-field-source').show();
      $('#edit-field-commercial-license').hide();
      commercial_license.find('input').prop('required',false);
      $('#field-page-add-more-wrapper label[for="edit-field-page-und-0"], #field-page-add-more-wrapper div.description').not('.commercial').removeClass('hidden');
      $('#field-page-add-more-wrapper label[for="edit-field-page-und-0"], #field-page-add-more-wrapper div.description').filter('.commercial').addClass('hidden');
    }
  }).trigger('change');

  $("#edit-field-version-und-0-value").change(function(){
    if ($("#edit-field-version-und-0-value").attr('value') != '' && $('input[name="field_add_on_id\[und\]\[0\]\[value\]"]').attr('value') > 0) {

    //send ajax request
    $.post(Drupal.settings.basePath + 'add-on/ajax/check_version', {
        'nid': $('input[name="field_add_on_id\[und\]\[0\]\[value\]"]').attr('value'),
        'vid': $("#edit-field-version-und-0-value").attr('value')
      }, function(data){
        if (data.validate == false) {
          errorMessage('Error','This version number is already taken. Please choose another one.' );
          $("#edit-submit").prop('disabled', true);
          $("#edit-preview").prop('disabled', true);
          $("#edit-field-version-und-0-value").addClass('error');
        }else {
          $("#edit-field-version-und-0-value").removeClass('error');
          if($('#edit-field-release-file-und-0-upload').val().length >= 0) {
            $("#edit-submit").prop('disabled', false).removeAttr('disabled');
            $("#edit-preview").prop('disabled', false).removeAttr('disabled');
          }
        }
      }, 'json');
    }
  });

  $('#ckeditor_compatibility').toggle(function() {
    $(this).html('Deselect all');
    $('input[name^="field_cke_version"]').attr('checked', true);
    return false;
  }, function() {
    $(this).html('Select all');
    $('input[name^="field_cke_version"]').attr('checked', false);
    return false;
  });

  /* lock submit and preview buttons for addon's release adding page
   * this button will be unlock after upload correct release file
   */
  if ($("#edit-field-release-file-und-0-upload-button").length > 0) {
    $("#edit-submit").prop('disabled', true);
    $("#edit-preview").prop('disabled', true);
    release_file = $("#edit-field-release-file").clone(true);
  }

  //action called after upload release file
  if (typeof Drupal != 'undefined') {
    Drupal.behaviors.cksource_repo = {
      attach: function(context, settings) {
        $(document).ajaxComplete(function(event,request, settings){
          if(window.location.pathname.match(/\/node\/add\/add-on-release\/\d+/)) {
            // Get the form-build-id from the URL
            if (form_build_id = settings.url.match(/file\/ajax\/field_release_file\/und\/\d*\/(.*)$/)) {
              //if (request && request.readyState == 4 && request.status == 200){
                var data = jQuery.parseJSON(request.responseText);
                if (data && data.validate == true){
                  $("#edit-submit").prop('disabled', false).removeAttr('disabled');
                  $("#edit-preview").prop('disabled', false).removeAttr('disabled');
                  $("#release_file_message").remove();
                  if (data.version){
                    set_version_number_field(data.version);
                  }
                }
              //}
            }
          }
        });

        //lock submit button for new release form
        if ($("#edit-field-release-file-und-0-upload-button").length > 0) {
          $("#edit-submit").prop('disabled', true);
          $("#edit-preview").prop('disabled', true);
        }
        el = $("div#edit-field-release-file a", context);
        if (el.length > 0) {
          file_fid = $("input[name='field_release_file\[und\]\[0\]\[fid\]']", context).val();
          addon_id = $("input[name='field_add_on_id\[und\]\[0\]\[value\]']", context).val();
          $('.file-widget').append('<p id="release_file_message">Package is being checked, please wait <img src="http://c.cksource.com/a/1/img/ajax-loader.gif" /></p>');
          $.ajax({
            type: 'POST',
            url: Drupal.settings.cksource_repo.package_check,
            async: false,
            dataType: 'json',
            data: {
              file: file_fid,
              addon_id: addon_id,
              token: Drupal.settings.cksource_repo.ajaxToken
            },
            success: function(data){
              if (data.validate == false) {
                $("#release_file_message").remove();
                errorMessage('Error', data.message);
                $("#edit-field-release-file").replaceWith(release_file);
                release_file = release_file.clone(true);
              }else {
                 $("#edit-submit").prop('disabled', false).removeAttr('disabled');
                 $("#edit-preview").prop('disabled', false).removeAttr('disabled');
                 $("#release_file_message").remove();
              }
            },
            error: function(error){
               errorMessage('Error', 'An error occured, please try later.');
               $("#edit-field-release-file").replaceWith(release_file);
               release_file = release_file.clone(true);
            }
          });
        }
      }
    };
  }

  // CKBuilder
  /*
  var modalCKBuilder = $( '#modal-ckbuilder');
  if (modalCKBuilder.length > 0) {
    modalCKBuilder.find('.next-step').click(function (e) {
      e.preventDefault();
      var preset = $('#presets-opts input:checked').val();
      $.ajax({
        type: "POST",
        url: "/builder/save-preset",
        data: {preset: preset}
      });
      $(this).closest('.step').fadeOut(function () {
        $(this).next('.step').fadeIn();
      });
    });

    // selecting preset in modal window
    modalCKBuilder.find('#presets-opts input').change(function () {
      $('#presets-opts + .description').remove();
      if ($(this).is(':checked')) {
        var $desc = $(this)
          .closest('li')
          .find('.description')
          .clone()
          .addClass($(this).attr('value'));

        $('#presets-opts').after($desc[0]);
      }
    });

    if (modalCKBuilder.find('.plugins-presets, .plugins-chosen, .additional-plugins').length > 0) {
      modalCKBuilder.find('.plugins-presets, .plugins-chosen, .additional-plugins').on('focus', 'input[type="checkbox"]', function () {
        $(this).closest('div').addClass('outline');
      });

      modalCKBuilder.find('.plugins-presets, .plugins-chosen, .additional-plugins').on('blur', 'input[type="checkbox"]', function () {
        $(this).closest('div').removeClass('outline');
      });
    }
  }
  */

  $(".add_to_basket").click(function(){
    add_to_basket($(this));
    return false;
  });

  $(".remove_from_basket").click(function(){
    remove_from_basket($(this));
    return false;
  });

  $("#change_preset a").click(function(e){
    e.preventDefault();
    change_presets_basket($(this).attr('data-value'));
  });

  if ($.fn['fancybox']) {
    $('.fancybox, a[rel="fancybox"]').fancybox({
      openEffect: 'fade',
      closeEffect: 'fade',
      nextEffect: 'fade',
      prevEffect: 'fade'
    });
  }

  $('input , textarea').bind('keyup', function(event) {
    keycode = event.keyCode;
    //stop further events for left and right arrows keyup event
    if(keycode === 39 || keycode === 37) {
      event.stopPropagation();
    }
  });

  //get addon's download stats
  if ($("#downloads_count").length > 0) {
    update_download_stats();
  }

  function getAjaxSubmitUrl() {
    var url = $("#mc-embedded-subscribe-form").attr("action");
    url = url.replace("/post?u=", "/post-json?u=");
    url += "&c=?";
    return url;
  }

  // Newsletter submit
  $("#mc-embedded-subscribe-form").submit(function(e){
    e.preventDefault();
    $(this).ajaxSubmit({
      url: getAjaxSubmitUrl(),
      type: 'GET',
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      success: function(resp){
        var newsletterModal = $('#newsletterModal');
        newsletterModal.removeClass('with-messages');
        $('#mce-success-response').hide();
        $('#mce-error-response').hide();

        // On successful form submission, display a success message and reset the form
        if (resp.result == "success"){
          newsletterModal.addClass('with-messages');
          $('#mce-'+resp.result+'-response').show();
          $('#mce-'+resp.result+'-response').html('<p>' + resp.msg + '</p>');
          $('#mc-embedded-subscribe-form').each(function(){
            this.reset();
          });

          // If the form has errors, display them, inline if possible, or appended to #mce-error-response
        } else {

          // Example errors - Note: You only get one back at a time even if you submit several that are bad.
          // Error structure - number indicates the index of the merge field that was invalid, then details
          // Object {result: "error", msg: "6 - Please enter the date"}
          // Object {result: "error", msg: "4 - Please enter a value"}
          // Object {result: "error", msg: "9 - Please enter a complete address"}

          // Try to parse the error into a field index and a message.
          // On failure, just put the dump thing into in the msg variable.
          var index = -1;
          var msg;
          try {
            var parts = resp.msg.split(' - ', 2);
            if (parts[1] == undefined) {
              msg = resp.msg;
            } else {
              i = parseInt(parts[0]);
              if (i.toString() == parts[0]) {
                index = parts[0];
                msg = parts[1];
              } else {
                index = -1;
                msg = resp.msg;
              }
            }
          } catch (e) {
            index = -1;
            msg = resp.msg;
          }

          try {
            // If index is -1 if means we don't have data on specifically which field was invalid.
            // Just lump the error message into the generic response div.
            if (index == -1) {
              newsletterModal.addClass('with-messages');
              $('#mce-' + resp.result + '-response').show();
              $('#mce-' + resp.result + '-response').html('<p>' + msg + '</p>');

            } else {
              $("input[name*='" + fnames[index] + "']").addClass('error'); // Make sure this exists (they haven't deleted the fnames array lookup)
            }
          } catch (e) {
            newsletterModal.addClass('with-messages');
            $('#mce-' + resp.result + '-response').show();
            $('#mce-' + resp.result + '-response').html('<p>' + msg + '</p>');
          }
        }
      }
    });
  });

});

/**
 * Basic number_format function
 * @param n Number
 * @param n Number of decimal places
 * @param s Separator
 * @returns s formatted number
 */
function number_format(n, d, s ){
  return n.toFixed((d || 0)).replace(/\B(?=(?:\d{3})+(?!\d))/g,(s||' '));
}

function set_version_number_field(number) {
  jQuery("#edit-field-version-und-0-value").val(number);
}

/*
 * Function to handle ajax request for basket
 */
function basket(action, item, category, callbackFn) {
  parts = item.split('_');
  id = parseInt(parts.splice(-1,1),10);
  name = parts.join('_');
  jQuery.ajax({
    type: 'POST',
    url: Drupal.settings.cksource_repo.basket + '/' + action,
    dataType: 'json',
    data: {
      id: id,
      name: name,
      category: category,
      token: Drupal.settings.cksource_repo.ajaxToken
    },
    error: function() {
      if ( callbackFn ) {
        callbackFn();
      }
    },
    success: function(data){
      if ( callbackFn ) {
        callbackFn();
      }

      if (data.error == false) {
        // Change Builder drop-down select button
        jQuery("#change_preset_btn").text(data.data.preset.name.charAt(0).toUpperCase() +  data.data.preset.name.slice(1) + ' preset');
        // Update counts
        var pluginsList = jQuery('.ckbuilder-box ul.plugins-list');
        pluginsList.find('.plugins-list__item--preset').text(data.data.counters.preset_count);
        pluginsList.find('.plugins-list__item--selected').text(data.data.counters.selected_count);
        pluginsList.find('.plugins-list__item--required').text(data.data.counters.required_count);
        jQuery("#skin-link")
          .text(data.data.skins.title)
          .attr('href','/addon/' + data.data.skins.name)
          .attr('title', data.data.skins.title + ' skin page');

        if (data.data.required) {
          // Replace 'Add to my editor' or 'Remove' buttons with 'Required' if those plugins are required for chosen preseet
          jQuery('a.remove_from_basket, a.add_to_basket').each(function(index,value){
            var $elm = jQuery(value);
            if ( $elm.data('name') && data.data.required[$elm.data('name')] ){
              after_required_found($elm);
            }
          });
        }
        if ( !data.data.required ){
          data.data.required = [];
        }
        // Replace 'Required' button if previously required plugins are not longer required (preset changed)
        jQuery('span.required, a.remove_from_basket, a.add_to_basket').each(function(index,value){
          var $elm = jQuery(value);
          if ($elm.length < 1){
            return;
          }
          var rel = $elm.data('rel').split('_');
          if ( $elm.data('name') && !data.data.required[$elm.data('name')] ){
            if ( rel[1] != 'plugins'){
              return;
            }
            if ( data.data[rel[1]][rel[0]] || data.data.preset.plugins[$elm.data('name')] ){
              // Plugin in basket - Remove button
              after_add_to_basket(rel,$elm);
            }
            else {
              // Plugin is not in basket - Add button
              after_remove_from_basket(rel,$elm);
            }
          }
        });

        if ( Drupal.settings.builder ) {
          if ( Drupal.settings.builder.preset ){
            Drupal.settings.builder.preset = data.data.preset;
          }
          if ( Drupal.settings.builder.plugins && Drupal.settings.builder.plugins.basket ){
            Drupal.settings.builder.plugins.basket = [];
            jQuery.each( data.data.plugins, function( idx, val){
              Drupal.settings.builder.plugins.basket.push(val);
            });
          }
        }
      }
    }
  })
}

/*
 * Function to remove basket item
 */
function basket_remove_item(obj) {
    //get add-on name from clicked link
    var parent = jQuery(obj).parent();
    text = jQuery("span:first", parent).text();
    children = parent.children();
    basket('remove',jQuery(children[0]).attr('class'));
    //get add-on name from body
    title = jQuery("#basket_item h1").text();
    //if add-on name from clicked link is the same as add-on from body
    if (title == text) {
      //enable Drag & Drop for add-on
      jQuery( "#basket_item h1" ).draggable( "enable" );
    }
    parent.remove();
    //check if basket is empty, if yes add placeholder
    if (!jQuery("#basket ol").children().length) {
        jQuery( "<li class='placeholder'>Your basket is empty</li>" ).appendTo( jQuery("#basket ol"));
        jQuery("#basket_build").hide();
        jQuery("#basket_clear").hide();
        jQuery("#basket_store").hide();
    }
    return false;
}

//function to add item to basket
function add_to_basket(obj) {
  var $obj = jQuery(obj);
  var rel = $obj.data('rel').split('_');
  var id = jQuery("#addon_id_" + rel[0] ).text();

  basket('add', id, rel[1]);

  //special case for skins - there can be only one
  if (rel[1] == 'skins') {
    jQuery('.remove_from_basket').each(function(index) {
      jQuery(this).removeClass('remove_from_basket');
      jQuery(this).removeClass('std-btn-5');
      jQuery(this).addClass('add_to_basket');
      jQuery(this).addClass('std-btn-7');
      jQuery(this).text('Add to my editor');
      jQuery(this).attr('title', 'Click to add this skin to your editor');
      jQuery(this).attr('id', jQuery(this).attr('id').replace('remove_from', 'add_to') );
      jQuery(this).unbind('click');
      jQuery(this).bind('click', function(){
        add_to_basket(jQuery(this));
        return false;
      });
    });
  }

  after_add_to_basket(rel,$obj);
}
// Deal with buttons after adding item to basket
function after_add_to_basket(rel,$elm){
  $elm = $elm || jQuery('#add_to_basket_'+ rel[0]);
  var add = jQuery('<a id="remove_from_basket_'+ rel[0] +'" class="btn btn--small std-btn-7 remove_from_basket" title="Remove from my editor" href="#" data-rel="'+ $elm.data('rel') +'" data-name="'+ $elm.data('name') +'">Remove</a>');
  add.bind('click', function(){
    remove_from_basket(jQuery(this));
    return false;
  });
  tooltip = jQuery('.tooltip',$elm.parent());
  tooltip.remove();
  jQuery('.tooltip-clone').text('Remove from your editor');
  $elm.replaceWith(add);
  //jQuery( '.add-on-description .std-btn-5' ).tipTip({ delay: 0, defaultPosition: 'left', edgeOffset: 15, maxWidth: '230px' });

  jQuery( '#already-added').show();
}
//function to remove item from basket
function remove_from_basket(obj) {
  var $obj = jQuery(obj);
  var rel = $obj.data('rel').split('_');
  var id = jQuery("#addon_id_" + rel[0] ).text();

  if ( rel[0] == 128483 ){
    return;
  }

  basket('remove', id, rel[1]);

  after_remove_from_basket(rel,$obj);
}
// Deal with buttons after removing item from basket
function after_remove_from_basket(rel,$elm){
  var type = (rel[1] == 'skins')? 'skin' : 'plugin';
  $elm = $elm || jQuery('#add_to_basket_'+ rel[0]);
  var add = jQuery('<a id="add_to_basket_'+ rel[0] +'" class="btn btn--small std-btn-7 add_to_basket" title="Click to add ' + type +' to your editor" href="#" data-rel="'+ $elm.data('rel') +'" data-name="'+ $elm.data('name') +'">Add to my editor</a>');
  add.bind('click', function(){
    add_to_basket(jQuery(this));
    return false;
  });

  tooltip = jQuery('.tooltip',$elm.parent());
  tooltip.remove();
  jQuery('.tooltip-clone').text('Click to add ' + type + ' to your editor');
  $elm.replaceWith(add);
  //jQuery( '.add-on-description .std-btn-7' ).tipTip({ delay: 0, defaultPosition: 'left', edgeOffset: 15, maxWidth: '230px' });

  // Select default Moono-lisa skin
  // @todo https://github.com/cksource/new-websites/issues/204
  add = jQuery('<a id="remove_from_basket_142751' +'" class="btn btn--small std-btn-7 remove_from_basket" title="Remove from my editor" href="#" data-rel="142751_moono-lisa" data-name="moono-lisa">Remove</a>');
  jQuery('#add_to_basket_142751').replaceWith(add);
  add.bind('click', function(){
    remove_from_basket(jQuery(this));
    return false;
  });

  jQuery( '#already-added').hide();
}

function after_required_found($elm){
  var add = jQuery('<span class="btn btn--small std-btn-7 required" title="This plugin is required in chosen preset" data-name="'+ $elm.data('name') +'" data-rel="'+ $elm.data('rel')+'">Required</span>');
  tooltip = jQuery('.tooltip',$elm.parent());
  tooltip.remove();
  jQuery('.tooltip-clone').text('This plugin is required for chosen preset');
  $elm.replaceWith(add);
  //jQuery( '.add-on-description .std-btn-6' ).tipTip({ delay: 0, defaultPosition: 'left', edgeOffset: 15, maxWidth: '230px' });

  jQuery( '#already-added').show();
}

function change_presets_basket(val, useBasketPreset, callbackFn ){
  var id = ( useBasketPreset == -1 ) ? -1 : ( useBasketPreset ? 1 : 0);
  basket('switch', val+'_'+id, null, callbackFn );
}
/*
 * Function to check current downloads stats
 */
function update_download_stats() {
  jQuery.ajax({
    type: 'POST',
    url: Drupal.settings.basePath + 'downloads/get_stats',
    dataType: 'json',
    data: {
        token: Drupal.settings.cksource_repo.ajaxToken
    },
    success: function(data){
      Drupal.settings.downloads_stats = data;
      id = jQuery("#addon_machine_name").text();
      if (typeof Drupal.settings.downloads_stats != 'undefined' && Drupal.settings.downloads_stats != null &&  typeof Drupal.settings.downloads_stats[id] != 'undefined') {
        jQuery(".downloads-info").show();
        jQuery("#downloads_count").text(parseInt(jQuery("#downloads_count_start").text()) + parseInt(Drupal.settings.downloads_stats[id]));
      }
    }
  })
}

function ckeditor_downloads_counter(callback){
  jQuery.ajax({
    type: 'POST',
    url: Drupal.settings.basePath + 'download_counter/count',
    dataType: 'json',
    data: {
      token: Drupal.settings.cksource_repo.ajaxToken
    },
    success: function(data){
      callback();
    }
  })
}
;/**/
