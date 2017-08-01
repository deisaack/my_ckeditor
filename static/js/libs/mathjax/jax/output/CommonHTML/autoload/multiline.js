/*
 *  /MathJax/jax/output/CommonHTML/autoload/multiline.js
 *
 *  Copyright (c) 2009-2017 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Hub.Register.StartupHook("CommonHTML Jax Ready",function(){var e="2.7.2-beta.0";var b=MathJax.ElementJax.mml,a=MathJax.Hub.config,c=MathJax.OutputJax.CommonHTML;var f={newline:0,nobreak:1000000,goodbreak:[-200],badbreak:[+200],auto:[0],toobig:800,nestfactor:400,spacefactor:-100,spaceoffset:2,spacelimit:1,fence:500,close:500};var d={linebreakstyle:"after"};b.mbase.Augment({CHTMLlinebreakPenalty:f,CHTMLmultiline:function(j){var p=this;while(p.inferred||(p.parent&&p.parent.type==="mrow"&&p.parent.isEmbellished())){p=p.parent}var n=((p.type==="math"&&p.Get("display")==="block")||p.type==="mtd");p.isMultiline=true;var q=this.getValues("linebreak","linebreakstyle","lineleading","linebreakmultchar","indentalign","indentshift","indentalignfirst","indentshiftfirst","indentalignlast","indentshiftlast");if(q.linebreakstyle===b.LINEBREAKSTYLE.INFIXLINEBREAKSTYLE){q.linebreakstyle=this.Get("infixlinebreakstyle")}q.lineleading=this.CHTMLlength2em(q.lineleading,0.5);c.BBOX.empty(this.CHTML);var o=c.addElement(j,"mjx-stack");var g={BBOX:this.CHTML,n:0,Y:0,scale:(this.CHTML.scale||1),isTop:n,values:{},VALUES:q},m=this.CHTMLgetAlign(g,{}),i=this.CHTMLgetShift(g,{},m),h=[],k={index:[],penalty:f.nobreak,w:0,W:i,shift:i,scanW:i,nest:0},l=false;while(this.CHTMLbetterBreak(k,g)&&(k.scanW>=c.linebreakWidth||k.penalty===f.newline)){this.CHTMLaddLine(o,h,k.index,g,k.values,l);h=k.index.slice(0);l=true;m=this.CHTMLgetAlign(g,k.values);i=this.CHTMLgetShift(g,k.values,m);k.W=k.shift=k.scanW=i;k.penalty=f.nobreak}g.isLast=true;this.CHTMLaddLine(o,h,[],g,d,l);j.style.width=o.style.width=this.CHTML.pwidth="100%";this.CHTML.mwidth=c.Em(this.CHTML.w);this.CHTML.isMultiline=p.CHTML.isMultiline=true;o.style.verticalAlign=c.Em(g.d-this.CHTML.d);return j},CHTMLbetterBreak:function(j,g){if(this.isToken){return false}if(this.isEmbellished()){j.embellished=this;return this.CoreMO().CHTMLbetterBreak(j,g)}if(this.linebreakContainer){return false}var q=j.index.slice(0),o=j.index.shift(),n=this.data.length,l,r,k,p=(j.index.length>0),h=false;if(o==null){o=-1}if(!p){o++;j.W+=j.w;j.w=0}k=j.scanW=j.W;j.nest++;while(o<n&&j.scanW<1.33*c.linebreakWidth){if(this.data[o]){if(this.data[o].CHTMLbetterBreak(j,g)){h=true;q=[o].concat(j.index);l=j.W;r=j.w;if(j.penalty===f.newline){j.index=q;if(j.nest){j.nest--}return true}}k=(p?j.scanW:this.CHTMLaddWidth(o,j,k))}j.index=[];o++;p=false}if(j.nest){j.nest--}j.index=q;if(h){j.W=l;j.w=r}return h},CHTMLaddWidth:function(g,j,h){if(this.data[g]){var k=this.data[g].CHTML;h+=k.w+(k.L||0)+(k.R||0);j.W=j.scanW=h;j.w=0}return h},CHTMLaddLine:function(r,i,n,g,s,p){var m=c.addElement(r,"mjx-block",{},[["mjx-box"]]),u=m.firstChild;var t=g.bbox=c.BBOX.empty();g.first=p;g.last=true;this.CHTMLmoveLine(i,n,u,g,s);t.clean();var q=this.CHTMLgetAlign(g,s),j=this.CHTMLgetShift(g,s,q,true);var l=0;if(g.n>0){var o=c.FONTDATA.baselineskip;var k=(g.values.lineleading==null?g.VALUES:g.values).lineleading*g.scale;var h=g.Y;g.Y-=Math.max(o,g.d+t.h+k);l=h-g.Y-g.d-t.h}if(j){u.style.margin="0 "+c.Em(-j)+" 0 "+c.Em(j)}if(q!==b.INDENTALIGN.LEFT){m.style.textAlign=q}if(l){m.style.paddingTop=c.Em(l)}g.BBOX.combine(t,j,g.Y);g.d=g.bbox.d;g.values=s;g.n++},CHTMLgetAlign:function(j,g){var k=g,h=j.values,i=j.VALUES,l;if(j.n===0){l=k.indentalignfirst||h.indentalignfirst||i.indentalignfirst}else{if(j.isLast){l=h.indentalignlast||i.indentalignlast}else{l=h.indentalign||i.indentalign}}if(l===b.INDENTALIGN.INDENTALIGN){l=h.indentalign||i.indentalign}if(l===b.INDENTALIGN.AUTO){l=(j.isTop?a.displayAlign:b.INDENTALIGN.LEFT)}return l},CHTMLgetShift:function(g,o,m,k){var n=o,l=g.values,h=g.VALUES,i;if(g.n===0){i=n.indentshiftfirst||l.indentshiftfirst||h.indentshiftfirst}else{if(g.isLast){i=l.indentshiftlast||h.indentshiftlast}else{i=l.indentshift||h.indentshift}}if(i===b.INDENTSHIFT.INDENTSHIFT){i=l.indentshift||h.indentshift}if(i==="auto"||i===""){i="0"}i=this.CHTMLlength2em(i,c.cwidth);if(g.isTop&&a.displayIndent!=="0"){var j=this.CHTMLlength2em(a.displayIndent,c.cwidth);i+=(m===b.INDENTALIGN.RIGHT?-j:j)}return(m===b.INDENTALIGN.RIGHT&&!k?-i:i)},CHTMLmoveLine:function(p,g,n,o,h){var l=p[0],k=g[0];if(l==null){l=-1}if(k==null){k=this.data.length-1}if(l===k&&p.length>1){this.data[l].CHTMLmoveSlice(p.slice(1),g.slice(1),n,o,h,"marginLeft")}else{var m=o.last;o.last=false;while(l<k){if(this.data[l]){if(p.length<=1){this.data[l].CHTMLmoveNode(n,o,h)}else{this.data[l].CHTMLmoveSlice(p.slice(1),[],n,o,h,"marginLeft")}}l++;o.first=false;p=[]}o.last=m;if(this.data[l]){if(g.length<=1){this.data[l].CHTMLmoveNode(n,o,h)}else{this.data[l].CHTMLmoveSlice([],g.slice(1),n,o,h,"marginRight")}}}},CHTMLmoveSlice:function(m,g,i,k,h,j){var l=this.CHTMLcreateSliceNode(i);this.CHTMLmoveLine(m,g,l,k,h);if(l.style[j]){l.style[j]=""}if(this.CHTML.L){if(j!=="marginLeft"){k.bbox.w+=this.CHTML.L}else{l.className=l.className.replace(/ MJXc-space\d/,"")}}if(this.CHTML.R&&j!=="marginRight"){k.bbox.w+=this.CHTML.R}if(g.length===0){i=this.CHTMLnodeElement();if(this.href){i=i.parentNode}i.parentNode.removeChild(i);i.nextMathJaxNode.id=i.id}return l},CHTMLcreateSliceNode:function(i){var h=this.CHTMLnodeElement(),k=0;if(this.href){h=h.parentNode}var g=h;while(g.nextMathJaxNode){g=g.nextMathJaxNode;k++}var j=h.cloneNode(false);g.nextMathJaxNode=j;j.nextMathJaxNode=null;j.id+="-MJX-Continue-"+k;return i.appendChild(j)},CHTMLmoveNode:function(g,j,h){if(!(j.first||j.last)||(j.first&&j.values.linebreakstyle===b.LINEBREAKSTYLE.BEFORE)||(j.last&&h.linebreakstyle===b.LINEBREAKSTYLE.AFTER)){var i=this.CHTMLnodeElement();if(this.href){i=i.parentNode}g.appendChild(i);if(this.CHTML.pwidth&&!g.style.width){g.style.width=this.CHTML.pwidth}if(j.last){i.style.marginRight=""}if(j.first||j.nextIsFirst){i.style.marginLeft="";this.CHTML.L=0;i.className=i.className.replace(/ MJXc-space\d/,"")}if(j.first&&this.CHTML.w===0){j.nextIsFirst=true}else{delete j.nextIsFirst}j.bbox.combine(this.CHTML,j.bbox.w,0)}}});b.mfenced.Augment({CHTMLbetterBreak:function(l,g){var u=l.index.slice(0),s=l.index.shift(),p=this.data.length,o,v,n,t=(l.index.length>0),h=false;if(s==null){s=-1}if(!t){s++;l.W+=l.w;l.w=0}n=l.scanW=l.W;l.nest++;if(!this.dataI){this.dataI=[];if(this.data.open){this.dataI.push("open")}if(p){this.dataI.push(0)}for(var r=1;r<p;r++){if(this.data["sep"+r]){this.dataI.push("sep"+r)}this.dataI.push(r)}if(this.data.close){this.dataI.push("close")}}p=this.dataI.length;while(s<p&&l.scanW<1.33*c.linebreakWidth){var q=this.dataI[s];if(this.data[q]){if(this.data[q].CHTMLbetterBreak(l,g)){h=true;u=[s].concat(l.index);o=l.W;v=l.w;if(l.penalty===f.newline){l.index=u;if(l.nest){l.nest--}return true}}n=(t?l.scanW:this.CHTMLaddWidth(s,l,n))}l.index=[];s++;t=false}if(l.nest){l.nest--}l.index=u;if(h){l.W=o;l.w=v}return h},CHTMLmoveLine:function(h,n,l,g,r){var p=h[0],o=n[0];if(p==null){p=-1}if(o==null){o=this.dataI.length-1}if(p===o&&h.length>1){this.data[this.dataI[p]].CHTMLmoveSlice(h.slice(1),n.slice(1),l,g,r,"marginLeft")}else{var q=g.last;g.last=false;var m=this.dataI[p];while(p<o){if(this.data[m]){if(h.length<=1){this.data[m].CHTMLmoveNode(l,g,r)}else{this.data[m].CHTMLmoveSlice(h.slice(1),[],l,g,r,"marginLeft")}}p++;m=this.dataI[p];g.first=false;h=[]}g.last=q;if(this.data[m]){if(n.length<=1){this.data[m].CHTMLmoveNode(l,g,r)}else{this.data[m].CHTMLmoveSlice([],n.slice(1),l,g,r,"marginRight")}}}}});b.msubsup.Augment({CHTMLbetterBreak:function(j,g){if(!this.data[this.base]){return false}var o=j.index.slice(0),m=j.index.shift(),l,p,k,n=(j.index.length>0),h=false;if(!n){j.W+=j.w;j.w=0}k=j.scanW=j.W;if(m==null){this.CHTML.baseW=this.data[this.base].CHTML.w;this.CHTML.dw=this.CHTML.w-this.CHTML.baseW}if(this.data[this.base].CHTMLbetterBreak(j,g)){h=true;o=[this.base].concat(j.index);l=j.W;p=j.w;if(j.penalty===f.newline){h=n=true}}if(!n){this.CHTMLaddWidth(this.base,j,k)}j.scanW+=this.CHTML.dw;j.W=j.scanW;j.index=[];if(h){j.W=l;j.w=p;j.index=o}return h},CHTMLmoveLine:function(i,m,l,h,q){if(this.data[this.base]){var j=c.addElement(l,"mjx-base");if(i.length>1){this.data[this.base].CHTMLmoveSlice(i.slice(1),m.slice(1),j,h,q,"marginLeft")}else{if(m.length<=1){this.data[this.base].CHTMLmoveNode(j,h,q)}else{this.data[this.base].CHTMLmoveSlice([],m.slice(1),j,h,q,"marginRight")}}}if(m.length===0){var k=this.CHTMLnodeElement(),o=c.getNode(k,"mjx-stack"),n=c.getNode(k,"mjx-sup"),g=c.getNode(k,"mjx-sub");if(o){l.appendChild(o)}else{if(n){l.appendChild(n)}else{if(g){l.appendChild(g)}}}var p=h.bbox.w,r;if(n){r=this.data[this.sup].CHTML;h.bbox.combine(r,p,r.Y)}if(g){r=this.data[this.sub].CHTML;h.bbox.combine(r,p,r.Y)}}}});b.mmultiscripts.Augment({CHTMLbetterBreak:function(k,h){if(!this.data[this.base]){return false}var o=k.index.slice(0);k.index.shift();var m,p,l,n=(k.index.length>0),j=false;if(!n){k.W+=k.w;k.w=0}k.scanW=k.W;var q=this.CHTML,i=this.data[this.base].CHTML;var g=q.w-i.w-q.X;k.scanW+=q.X;l=k.scanW;if(this.data[this.base].CHTMLbetterBreak(k,h)){j=true;o=[this.base].concat(k.index);m=k.W;p=k.w;if(k.penalty===f.newline){j=n=true}}if(!n){this.CHTMLaddWidth(this.base,k,l)}k.scanW+=g;k.W=k.scanW;k.index=[];if(j){k.W=m;k.w=p;k.index=o}return j},CHTMLmoveLine:function(l,o,n,i,u){var m,h=this.CHTMLbbox,t;if(l.length<1){m=this.CHTMLnodeElement();var q=c.getNode(m,"mjx-prestack"),r=c.getNode(m,"mjx-presup"),k=c.getNode(m,"mjx-presub");if(q){n.appendChild(q)}else{if(r){n.appendChild(r)}else{if(k){n.appendChild(k)}}}t=i.bbox.w;if(r){i.bbox.combine(h.presup,t+h.presup.X,h.presup.Y)}if(k){i.bbox.combine(h.presub,t+h.presub.X,h.presub.Y)}}if(this.data[this.base]){var j=c.addElement(n,"mjx-base");if(l.length>1){this.data[this.base].CHTMLmoveSlice(l.slice(1),o.slice(1),j,i,u,"marginLeft")}else{if(o.length<=1){this.data[this.base].CHTMLmoveNode(j,i,u)}else{this.data[this.base].CHTMLmoveSlice([],o.slice(1),j,i,u,"marginRight")}}}if(o.length===0){m=this.CHTMLnodeElement();var s=c.getNode(m,"mjx-stack"),p=c.getNode(m,"mjx-sup"),g=c.getNode(m,"mjx-sub");if(s){n.appendChild(s)}else{if(p){n.appendChild(p)}else{if(g){n.appendChild(g)}}}t=i.bbox.w;if(p){i.bbox.combine(h.sup,t,h.sup.Y)}if(g){i.bbox.combine(h.sub,t,h.sub.Y)}}}});b.mo.Augment({CHTMLbetterBreak:function(i,g){if(i.values&&i.values.id===this.CHTMLnodeID){return false}var o=this.getValues("linebreak","linebreakstyle","lineleading","linebreakmultchar","indentalign","indentshift","indentalignfirst","indentshiftfirst","indentalignlast","indentshiftlast","texClass","fence");if(o.linebreakstyle===b.LINEBREAKSTYLE.INFIXLINEBREAKSTYLE){o.linebreakstyle=this.Get("infixlinebreakstyle")}if(o.texClass===b.TEXCLASS.OPEN){i.nest++}if(o.texClass===b.TEXCLASS.CLOSE&&i.nest){i.nest--}var j=i.scanW;delete i.embellished;var n=this.CHTML.w+(this.CHTML.L||0)+(this.CHTML.R||0);if(o.linebreakstyle===b.LINEBREAKSTYLE.AFTER){j+=n;n=0}if(j-i.shift===0&&o.linebreak!==b.LINEBREAK.NEWLINE){return false}var k=c.linebreakWidth-j;if(g.n===0&&(o.indentshiftfirst!==g.VALUES.indentshiftfirst||o.indentalignfirst!==g.VALUES.indentalignfirst)){var l=this.CHTMLgetAlign(g,o),h=this.CHTMLgetShift(g,o,l);k+=(i.shift-h)}var m=Math.floor(k/c.linebreakWidth*1000);if(m<0){m=f.toobig-3*m}if(o.fence){m+=f.fence}if((o.linebreakstyle===b.LINEBREAKSTYLE.AFTER&&o.texClass===b.TEXCLASS.OPEN)||o.texClass===b.TEXCLASS.CLOSE){m+=f.close}m+=i.nest*f.nestfactor;var p=f[o.linebreak||b.LINEBREAK.AUTO];if(!MathJax.Object.isArray(p)){if(k>=0){m=p*i.nest}}else{m=Math.max(1,m+p[0]*i.nest)}if(m>=i.penalty){return false}i.penalty=m;i.values=o;i.W=j;i.w=n;o.lineleading=this.CHTMLlength2em(o.lineleading,g.VALUES.lineleading);o.id=this.CHTMLnodeID;return true}});b.mspace.Augment({CHTMLbetterBreak:function(h,g){if(h.values&&h.values.id===this.CHTMLnodeID){return false}var n=this.getValues("linebreak");var k=n.linebreak;if(!k||this.hasDimAttr()){k=b.LINEBREAK.AUTO}var i=h.scanW,m=this.CHTML.w+(this.CHTML.L||0)+(this.CHTML.R||0);if(i-h.shift===0){return false}var j=c.linebreakWidth-i;var l=Math.floor(j/c.linebreakWidth*1000);if(l<0){l=f.toobig-3*l}l+=h.nest*f.nestfactor;var o=f[k];if(k===b.LINEBREAK.AUTO&&m>=f.spacelimit&&!this.mathbackground&&!this.background){o=[(m+f.spaceoffset)*f.spacefactor]}if(!MathJax.Object.isArray(o)){if(j>=0){l=o*h.nest}}else{l=Math.max(1,l+o[0]*h.nest)}if(l>=h.penalty){return false}h.penalty=l;h.values=n;h.W=i;h.w=m;n.lineleading=g.VALUES.lineleading;n.linebreakstyle="before";n.id=this.CHTMLnodeID;return true}});MathJax.Hub.Register.StartupHook("TeX mathchoice Ready",function(){b.TeXmathchoice.Augment({CHTMLbetterBreak:function(h,g){return this.Core().CHTMLbetterBreak(h,g)},CHTMLmoveLine:function(k,g,i,j,h){return this.Core().CHTMLmoveSlice(k,g,i,j,h)}})});b.maction.Augment({CHTMLbetterBreak:function(h,g){return this.Core().CHTMLbetterBreak(h,g)},CHTMLmoveLine:function(k,g,i,j,h){return this.Core().CHTMLmoveSlice(k,g,i,j,h)}});b.semantics.Augment({CHTMLbetterBreak:function(h,g){return(this.data[0]?this.data[0].CHTMLbetterBreak(h,g):false)},CHTMLmoveLine:function(k,g,i,j,h){return(this.data[0]?this.data[0].CHTMLmoveSlice(k,g,i,j,h):null)}});MathJax.Hub.Startup.signal.Post("CommonHTML multiline Ready");MathJax.Ajax.loadComplete(c.autoloadDir+"/multiline.js")});
