var t=Object.defineProperty,e=(e,s,i)=>(((e,s,i)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i})(e,"symbol"!=typeof s?s+"":s,i),i);import{S as s,P as i,a as r,C as n,b as h,R as a,c as l,d as o,E as c,M as u,A as d,e as p,F as f,f as g,g as y,_ as m,u as b}from"./main-XM7eXcqa.js";import{e as x,B as _,a as w,W as v,b as S,c as P,d as D,D as M,T,C,S as E,f as A,U as I,g as R,h as B,G as U,i as z,j as N,E as L,k as F,O,l as V,A as j}from"./ResizePlugin-DAdq-2Y7.js";const k="_snow_hp0qe_1";const q={build(t){const e=t.points;let i,r,n,h,a,l;if(t.type===s.CIRC){const e=t.shape;i=e.x,r=e.y,a=l=e.radius,n=h=0}else if(t.type===s.ELIP){const e=t.shape;i=e.x,r=e.y,a=e.width,l=e.height,n=h=0}else{const e=t.shape,s=e.width/2,o=e.height/2;i=e.x+s,r=e.y+o,a=l=Math.max(0,Math.min(e.radius,Math.min(s,o))),n=s-a,h=o-l}if(!(a>=0&&l>=0&&n>=0&&h>=0))return void(e.length=0);const o=Math.ceil(2.3*Math.sqrt(a+l)),c=8*o+(n?4:0)+(h?4:0);if(e.length=c,0===c)return;if(0===o)return e.length=8,e[0]=e[6]=i+n,e[1]=e[3]=r+h,e[2]=e[4]=i-n,void(e[5]=e[7]=r-h);let u=0,d=4*o+(n?2:0)+2,p=d,f=c;{const t=n+a,s=h,l=i+t,o=i-t,c=r+s;if(e[u++]=l,e[u++]=c,e[--d]=c,e[--d]=o,h){const t=r-s;e[p++]=o,e[p++]=t,e[--f]=t,e[--f]=l}}for(let s=1;s<o;s++){const t=Math.PI/2*(s/o),c=n+Math.cos(t)*a,g=h+Math.sin(t)*l,y=i+c,m=i-c,b=r+g,x=r-g;e[u++]=y,e[u++]=b,e[--d]=b,e[--d]=m,e[p++]=m,e[p++]=x,e[--f]=x,e[--f]=y}{const t=h+l,s=i+n,a=i-n,o=r+t,c=r-t;e[u++]=s,e[u++]=o,e[--f]=c,e[--f]=s,n&&(e[u++]=a,e[u++]=o,e[--f]=c,e[--f]=a)}},triangulate(t,e){const i=t.points,r=e.points,n=e.indices;if(0===i.length)return;let h=r.length/2;const a=h;let l,o;if(t.type!==s.RREC){const e=t.shape;l=e.x,o=e.y}else{const e=t.shape;l=e.x+e.width/2,o=e.y+e.height/2}const c=t.matrix;r.push(t.matrix?c.a*l+c.c*o+c.tx:l,t.matrix?c.b*l+c.d*o+c.ty:o),h++,r.push(i[0],i[1]);for(let s=2;s<i.length;s+=2)r.push(i[s],i[s+1]),n.push(h++,a,h);n.push(a+1,a,h)}};function G(t,e=!1){const s=t.length;if(s<6)return;let i=0;for(let r=0,n=t[s-2],h=t[s-1];r<s;r+=2){const e=t[r],s=t[r+1];i+=(e-n)*(s+h),n=e,h=s}if(!e&&i>0||e&&i<=0){const e=s/2;for(let i=e+e%2;i<s;i+=2){const e=s-i-2,r=s-i-1,n=i,h=i+1;[t[e],t[n]]=[t[n],t[e]],[t[r],t[h]]=[t[h],t[r]]}}}const H={build(t){t.points=t.shape.points.slice()},triangulate(t,e){let s=t.points;const i=t.holes,r=e.points,n=e.indices;if(s.length>=6){G(s,!1);const t=[];for(let r=0;r<i.length;r++){const e=i[r];G(e.points,!0),t.push(s.length/2),s=s.concat(e.points)}const e=x(s,t,2);if(!e)return;const h=r.length/2;for(let s=0;s<e.length;s+=3)n.push(e[s]+h),n.push(e[s+1]+h),n.push(e[s+2]+h);for(let i=0;i<s.length;i++)r.push(s[i])}}},Y={build(t){const e=t.shape,s=e.x,i=e.y,r=e.width,n=e.height,h=t.points;h.length=0,r>=0&&n>=0&&h.push(s,i,s+r,i,s+r,i+n,s,i+n)},triangulate(t,e){const s=t.points,i=e.points;if(0===s.length)return;const r=i.length/2;i.push(s[0],s[1],s[2],s[3],s[6],s[7],s[4],s[5]),e.indices.push(r,r+1,r+2,r+1,r+2,r+3)}},W={build(t){q.build(t)},triangulate(t,e){q.triangulate(t,e)}};var Q=(t=>(t.MITER="miter",t.BEVEL="bevel",t.ROUND="round",t))(Q||{}),X=(t=>(t.BUTT="butt",t.ROUND="round",t.SQUARE="square",t))(X||{});const Z={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount(t,e=20){if(!this.adaptive||!t||isNaN(t))return e;let s=Math.ceil(t/this.maxLength);return s<this.minSegments?s=this.minSegments:s>this.maxSegments&&(s=this.maxSegments),s}};class ${static curveTo(t,e,s,i,r,n){const h=n[n.length-2],a=n[n.length-1]-e,l=h-t,o=i-e,c=s-t,u=Math.abs(a*c-l*o);if(u<1e-8||0===r)return(n[n.length-2]!==t||n[n.length-1]!==e)&&n.push(t,e),null;const d=a*a+l*l,p=o*o+c*c,f=a*o+l*c,g=r*Math.sqrt(d)/u,y=r*Math.sqrt(p)/u,m=g*f/d,b=y*f/p,x=g*c+y*l,_=g*o+y*a,w=l*(y+m),v=a*(y+m),S=c*(g+b),P=o*(g+b);return{cx:x+t,cy:_+e,radius:r,startAngle:Math.atan2(v-_,w-x),endAngle:Math.atan2(P-_,S-x),anticlockwise:l*o>c*a}}static arc(t,e,s,r,n,h,a,l,o){const c=a-h,u=Z._segmentsCount(Math.abs(c)*n,40*Math.ceil(Math.abs(c)/i)),d=c/(2*u),p=2*d,f=Math.cos(d),g=Math.sin(d),y=u-1,m=y%1/y;for(let i=0;i<=y;++i){const t=d+h+p*(i+m*i),e=Math.cos(t),a=-Math.sin(t);o.push((f*e+g*a)*n+s,(f*-a+g*e)*n+r)}}}class J{constructor(){this.reset()}begin(t,e,s){this.reset(),this.style=t,this.start=e,this.attribStart=s}end(t,e){this.attribSize=e-this.attribStart,this.size=t-this.start}reset(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0}}class K{static curveLength(t,e,s,i,r,n,h,a){let l=0,o=0,c=0,u=0,d=0,p=0,f=0,g=0,y=0,m=0,b=0,x=t,_=e;for(let w=1;w<=10;++w)o=w/10,c=o*o,u=c*o,d=1-o,p=d*d,f=p*d,g=f*t+3*p*o*s+3*d*c*r+u*h,y=f*e+3*p*o*i+3*d*c*n+u*a,m=x-g,b=_-y,x=g,_=y,l+=Math.sqrt(m*m+b*b);return l}static curveTo(t,e,s,i,r,n,h){const a=h[h.length-2],l=h[h.length-1];h.length-=2;const o=Z._segmentsCount(K.curveLength(a,l,t,e,s,i,r,n));let c=0,u=0,d=0,p=0,f=0;h.push(a,l);for(let g=1,y=0;g<=o;++g)y=g/o,c=1-y,u=c*c,d=u*c,p=y*y,f=p*y,h.push(d*a+3*u*y*t+3*c*p*s+f*r,d*l+3*u*y*e+3*c*p*i+f*n)}}function tt(t,e,s,i,r,n,h,a){let l,o;h?(l=i,o=-s):(l=-i,o=s);const c=t-s*r+l,u=e-i*r+o,d=t+s*n+l,p=e+i*n+o;return a.push(c,u,d,p),2}function et(t,e,s,i,r,n,h,a){const l=s-t,o=i-e;let c=Math.atan2(l,o),u=Math.atan2(r-t,n-e);a&&c<u?c+=2*Math.PI:!a&&c>u&&(u+=2*Math.PI);let d=c;const p=u-c,f=Math.abs(p),g=Math.sqrt(l*l+o*o),y=1+(15*f*Math.sqrt(g)/Math.PI>>0),m=p/y;if(d+=m,a){h.push(t,e,s,i);for(let s=1,i=d;s<y;s++,i+=m)h.push(t,e,t+Math.sin(i)*g,e+Math.cos(i)*g);h.push(t,e,r,n)}else{h.push(s,i,t,e);for(let s=1,i=d;s<y;s++,i+=m)h.push(t+Math.sin(i)*g,e+Math.cos(i)*g,t,e);h.push(r,n,t,e)}return 2*y}function st(t,e){t.lineStyle.native?function(t,e){let i=0;const r=t.shape,n=t.points||r.points,h=r.type!==s.POLY||r.closeStroke;if(0===n.length)return;const a=e.points,l=e.indices,o=n.length/2,c=a.length/2;let u=c;for(a.push(n[0],n[1]),i=1;i<o;i++)a.push(n[2*i],n[2*i+1]),l.push(u,u+1),u++;h&&l.push(u,c)}(t,e):function(t,e){const i=t.shape;let n=t.points||i.points.slice();const h=e.closePointEps;if(0===n.length)return;const a=t.lineStyle,l=new r(n[0],n[1]),o=new r(n[n.length-2],n[n.length-1]),c=i.type!==s.POLY||i.closeStroke,u=Math.abs(l.x-o.x)<h&&Math.abs(l.y-o.y)<h;if(c){n=n.slice(),u&&(n.pop(),n.pop(),o.set(n[n.length-2],n[n.length-1]));const t=.5*(l.x+o.x),e=.5*(o.y+l.y);n.unshift(t,e),n.push(t,e)}const d=e.points,p=n.length/2;let f=n.length;const g=d.length/2,y=a.width/2,m=y*y,b=a.miterLimit*a.miterLimit;let x=n[0],_=n[1],w=n[2],v=n[3],S=0,P=0,D=-(_-v),M=x-w,T=0,C=0,E=Math.sqrt(D*D+M*M);D/=E,M/=E,D*=y,M*=y;const A=a.alignment,I=2*(1-A),R=2*A;c||(a.cap===X.ROUND?f+=et(x-D*(I-R)*.5,_-M*(I-R)*.5,x-D*I,_-M*I,x+D*R,_+M*R,d,!0)+2:a.cap===X.SQUARE&&(f+=tt(x,_,D,M,I,R,!0,d))),d.push(x-D*I,_-M*I,x+D*R,_+M*R);for(let s=1;s<p-1;++s){x=n[2*(s-1)],_=n[2*(s-1)+1],w=n[2*s],v=n[2*s+1],S=n[2*(s+1)],P=n[2*(s+1)+1],D=-(_-v),M=x-w,E=Math.sqrt(D*D+M*M),D/=E,M/=E,D*=y,M*=y,T=-(v-P),C=w-S,E=Math.sqrt(T*T+C*C),T/=E,C/=E,T*=y,C*=y;const t=w-x,e=_-v,i=w-S,r=P-v,h=t*i+e*r,l=e*i-r*t,o=l<0;if(Math.abs(l)<.001*Math.abs(h)){d.push(w-D*I,v-M*I,w+D*R,v+M*R),h>=0&&(a.join===Q.ROUND?f+=et(w,v,w-D*I,v-M*I,w-T*I,v-C*I,d,!1)+4:f+=2,d.push(w-T*R,v-C*R,w+T*I,v+C*I));continue}const c=(-D+x)*(-M+v)-(-D+w)*(-M+_),u=(-T+S)*(-C+v)-(-T+w)*(-C+P),p=(t*u-i*c)/l,g=(r*c-e*u)/l,A=(p-w)*(p-w)+(g-v)*(g-v),B=w+(p-w)*I,U=v+(g-v)*I,z=w-(p-w)*R,N=v-(g-v)*R,L=o?I:R,F=A<=Math.min(t*t+e*e,i*i+r*r)+L*L*m;let O=a.join;if(O===Q.MITER&&A/m>b&&(O=Q.BEVEL),F)switch(O){case Q.MITER:d.push(B,U,z,N);break;case Q.BEVEL:o?d.push(B,U,w+D*R,v+M*R,B,U,w+T*R,v+C*R):d.push(w-D*I,v-M*I,z,N,w-T*I,v-C*I,z,N),f+=2;break;case Q.ROUND:o?(d.push(B,U,w+D*R,v+M*R),f+=et(w,v,w+D*R,v+M*R,w+T*R,v+C*R,d,!0)+4,d.push(B,U,w+T*R,v+C*R)):(d.push(w-D*I,v-M*I,z,N),f+=et(w,v,w-D*I,v-M*I,w-T*I,v-C*I,d,!1)+4,d.push(w-T*I,v-C*I,z,N))}else{switch(d.push(w-D*I,v-M*I,w+D*R,v+M*R),O){case Q.MITER:o?d.push(z,N,z,N):d.push(B,U,B,U),f+=2;break;case Q.ROUND:f+=o?et(w,v,w+D*R,v+M*R,w+T*R,v+C*R,d,!0)+2:et(w,v,w-D*I,v-M*I,w-T*I,v-C*I,d,!1)+2}d.push(w-T*I,v-C*I,w+T*R,v+C*R),f+=2}}x=n[2*(p-2)],_=n[2*(p-2)+1],w=n[2*(p-1)],v=n[2*(p-1)+1],D=-(_-v),M=x-w,E=Math.sqrt(D*D+M*M),D/=E,M/=E,D*=y,M*=y,d.push(w-D*I,v-M*I,w+D*R,v+M*R),c||(a.cap===X.ROUND?f+=et(w-D*(I-R)*.5,v-M*(I-R)*.5,w-D*I,v-M*I,w+D*R,v+M*R,d,!1)+2:a.cap===X.SQUARE&&(f+=tt(w,v,D,M,I,R,!1,d)));const B=e.indices,U=Z.epsilon*Z.epsilon;for(let s=g;s<f+g-2;++s)x=d[2*s],_=d[2*s+1],w=d[2*(s+1)],v=d[2*(s+1)+1],S=d[2*(s+2)],P=d[2*(s+2)+1],!(Math.abs(x*(v-P)+w*(P-_)+S*(_-v))<U)&&B.push(s,s+1,s+2)}(t,e)}class it{static curveLength(t,e,s,i,r,n){const h=t-2*s+r,a=e-2*i+n,l=2*s-2*t,o=2*i-2*e,c=4*(h*h+a*a),u=4*(h*l+a*o),d=l*l+o*o,p=2*Math.sqrt(c+u+d),f=Math.sqrt(c),g=2*c*f,y=2*Math.sqrt(d),m=u/f;return(g*p+f*u*(p-y)+(4*d*c-u*u)*Math.log((2*f+m+p)/(m+y)))/(4*g)}static curveTo(t,e,s,i,r){const n=r[r.length-2],h=r[r.length-1],a=Z._segmentsCount(it.curveLength(n,h,t,e,s,i));let l=0,o=0;for(let c=1;c<=a;++c){const u=c/a;l=n+(t-n)*u,o=h+(e-h)*u,r.push(l+(t+(s-t)*u-l)*u,o+(e+(i-e)*u-o)*u)}}}const rt={[s.POLY]:H,[s.CIRC]:q,[s.ELIP]:q,[s.RECT]:Y,[s.RREC]:W},nt=[],ht=[];class at{constructor(t,e=null,s=null,i=null){this.points=[],this.holes=[],this.shape=t,this.lineStyle=s,this.fillStyle=e,this.matrix=i,this.type=t.type}clone(){return new at(this.shape,this.fillStyle,this.lineStyle,this.matrix)}destroy(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null}}const lt=new r,ot=class t extends _{constructor(){super(),this.closePointEps=1e-4,this.boundsPadding=0,this.uvsFloat32=null,this.indicesUint16=null,this.batchable=!1,this.points=[],this.colors=[],this.uvs=[],this.indices=[],this.textureIds=[],this.graphicsData=[],this.drawCalls=[],this.batchDirty=-1,this.batches=[],this.dirty=0,this.cacheDirty=-1,this.clearDirty=0,this.shapeIndex=0,this._bounds=new w,this.boundsDirty=-1}get bounds(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds}invalidate(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(let t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),ht.push(this.drawCalls[t]);this.drawCalls.length=0;for(let t=0;t<this.batches.length;t++){const e=this.batches[t];e.reset(),nt.push(e)}this.batches.length=0}clear(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this}drawShape(t,e=null,s=null,i=null){const r=new at(t,e,s,i);return this.graphicsData.push(r),this.dirty++,this}drawHole(t,e=null){if(!this.graphicsData.length)return null;const s=new at(t,null,null,e),i=this.graphicsData[this.graphicsData.length-1];return s.lineStyle=i.lineStyle,i.holes.push(s),this.dirty++,this}destroy(){super.destroy();for(let t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null}containsPoint(t){const e=this.graphicsData;for(let s=0;s<e.length;++s){const i=e[s];if(i.fillStyle.visible&&i.shape&&(i.matrix?i.matrix.applyInverse(t,lt):lt.copyFrom(t),i.shape.contains(lt.x,lt.y))){let t=!1;if(i.holes)for(let e=0;e<i.holes.length;e++)if(i.holes[e].shape.contains(lt.x,lt.y)){t=!0;break}if(!t)return!0}}return!1}updateBatches(){if(!this.graphicsData.length)return void(this.batchable=!0);if(!this.validateBatching())return;this.cacheDirty=this.dirty;const t=this.uvs,e=this.graphicsData;let s=null,i=null;this.batches.length>0&&(s=this.batches[this.batches.length-1],i=s.style);for(let a=this.shapeIndex;a<e.length;a++){this.shapeIndex++;const r=e[a],n=r.fillStyle,h=r.lineStyle;rt[r.type].build(r),r.matrix&&this.transformPoints(r.points,r.matrix),(n.visible||h.visible)&&this.processHoles(r.holes);for(let e=0;e<2;e++){const a=0===e?n:h;if(!a.visible)continue;const l=a.texture.baseTexture,o=this.indices.length,c=this.points.length/2;l.wrapMode=v.REPEAT,0===e?this.processFill(r):this.processLine(r);const u=this.points.length/2-c;0!==u&&(s&&!this._compareStyles(i,a)&&(s.end(o,c),s=null),s||(s=nt.pop()||new J,s.begin(a,o,c),this.batches.push(s),i=a),this.addUvs(this.points,t,a.texture,c,u,a.matrix))}}const r=this.indices.length,n=this.points.length/2;if(s&&s.end(r,n),0===this.batches.length)return void(this.batchable=!0);const h=n>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&h===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=h?new Uint32Array(this.indices):new Uint16Array(this.indices),this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}_compareStyles(t,e){return!(!t||!e||t.texture.baseTexture!==e.texture.baseTexture||t.color+t.alpha!==e.color+e.alpha||!!t.native!=!!e.native)}validateBatching(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(let t=0,e=this.graphicsData.length;t<e;t++){const e=this.graphicsData[t],s=e.fillStyle,i=e.lineStyle;if(s&&!s.texture.baseTexture.valid||i&&!i.texture.baseTexture.valid)return!1}return!0}packBatches(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);const t=this.batches;for(let e=0,s=t.length;e<s;e++){const s=t[e];for(let t=0;t<s.size;t++){const e=s.start+t;this.indicesUint16[e]=this.indicesUint16[e]-s.attribStart}}}isBatchable(){if(this.points.length>131070)return!1;const e=this.batches;for(let t=0;t<e.length;t++)if(e[t].style.native)return!1;return this.points.length<2*t.BATCHABLE_SIZE}buildDrawCalls(){let t=++S._globalBatch;for(let c=0;c<this.drawCalls.length;c++)this.drawCalls[c].texArray.clear(),ht.push(this.drawCalls[c]);this.drawCalls.length=0;const e=this.colors,s=this.textureIds;let i=ht.pop();i||(i=new P,i.texArray=new D),i.texArray.count=0,i.start=0,i.size=0,i.type=M.TRIANGLES;let r=0,n=null,h=0,a=!1,l=M.TRIANGLES,o=0;this.drawCalls.push(i);for(let c=0;c<this.batches.length;c++){const u=this.batches[c],d=8,p=u.style,f=p.texture.baseTexture;a!==!!p.native&&(a=!!p.native,l=a?M.LINES:M.TRIANGLES,n=null,r=d,t++),n!==f&&(n=f,f._batchEnabled!==t&&(r===d&&(t++,r=0,i.size>0&&(i=ht.pop(),i||(i=new P,i.texArray=new D),this.drawCalls.push(i)),i.start=o,i.size=0,i.texArray.count=0,i.type=l),f.touched=1,f._batchEnabled=t,f._batchLocation=r,f.wrapMode=v.REPEAT,i.texArray.elements[i.texArray.count++]=f,r++)),i.size+=u.size,o+=u.size,h=f._batchLocation,this.addColors(e,p.color,p.alpha,u.attribSize,u.attribStart),this.addTextureIds(s,h,u.attribSize,u.attribStart)}S._globalBatch=t,this.packAttributes()}packAttributes(){const t=this.points,e=this.uvs,s=this.colors,i=this.textureIds,r=new ArrayBuffer(3*t.length*4),n=new Float32Array(r),h=new Uint32Array(r);let a=0;for(let l=0;l<t.length/2;l++)n[a++]=t[2*l],n[a++]=t[2*l+1],n[a++]=e[2*l],n[a++]=e[2*l+1],h[a++]=s[l],n[a++]=i[l];this._buffer.update(r),this._indexBuffer.update(this.indicesUint16)}processFill(t){t.holes.length?H.triangulate(t,this):rt[t.type].triangulate(t,this)}processLine(t){st(t,this);for(let e=0;e<t.holes.length;e++)st(t.holes[e],this)}processHoles(t){for(let e=0;e<t.length;e++){const s=t[e];rt[s.type].build(s),s.matrix&&this.transformPoints(s.points,s.matrix)}}calculateBounds(){const t=this._bounds;t.clear(),t.addVertexData(this.points,0,this.points.length),t.pad(this.boundsPadding,this.boundsPadding)}transformPoints(t,e){for(let s=0;s<t.length/2;s++){const i=t[2*s],r=t[2*s+1];t[2*s]=e.a*i+e.c*r+e.tx,t[2*s+1]=e.b*i+e.d*r+e.ty}}addColors(t,e,s,i,r=0){const h=n.shared.setValue(e).toLittleEndianNumber(),a=n.shared.setValue(h).toPremultiplied(s);t.length=Math.max(t.length,r+i);for(let n=0;n<i;n++)t[r+n]=a}addTextureIds(t,e,s,i=0){t.length=Math.max(t.length,i+s);for(let r=0;r<s;r++)t[i+r]=e}addUvs(t,e,s,i,r,n=null){let h=0;const a=e.length,l=s.frame;for(;h<r;){let s=t[2*(i+h)],r=t[2*(i+h)+1];if(n){const t=n.a*s+n.c*r+n.tx;r=n.b*s+n.d*r+n.ty,s=t}h++,e.push(s/l.width,r/l.height)}const o=s.baseTexture;(l.width<o.width||l.height<o.height)&&this.adjustUvs(e,s,a,r)}adjustUvs(t,e,s,i){const r=e.baseTexture,n=1e-6,h=s+2*i,a=e.frame,l=a.width/r.width,o=a.height/r.height;let c=a.x/a.width,u=a.y/a.height,d=Math.floor(t[s]+n),p=Math.floor(t[s+1]+n);for(let f=s+2;f<h;f+=2)d=Math.min(d,Math.floor(t[f]+n)),p=Math.min(p,Math.floor(t[f+1]+n));c-=d,u-=p;for(let f=s;f<h;f+=2)t[f]=(t[f]+c)*l,t[f+1]=(t[f+1]+u)*o}};ot.BATCHABLE_SIZE=100;let ct=ot;class ut{constructor(){this.color=16777215,this.alpha=1,this.texture=T.WHITE,this.matrix=null,this.visible=!1,this.reset()}clone(){const t=new ut;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t}reset(){this.color=16777215,this.alpha=1,this.texture=T.WHITE,this.matrix=null,this.visible=!1}destroy(){this.texture=null,this.matrix=null}}class dt extends ut{constructor(){super(...arguments),this.width=0,this.alignment=.5,this.native=!1,this.cap=X.BUTT,this.join=Q.MITER,this.miterLimit=10}clone(){const t=new dt;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t}reset(){super.reset(),this.color=0,this.alignment=.5,this.width=0,this.native=!1,this.cap=X.BUTT,this.join=Q.MITER,this.miterLimit=10}}const pt={},ft=class t extends C{constructor(t=null){super(),this.shader=null,this.pluginName="batch",this.currentPath=null,this.batches=[],this.batchTint=-1,this.batchDirty=-1,this.vertexData=null,this._fillStyle=new ut,this._lineStyle=new dt,this._matrix=null,this._holeMode=!1,this.state=E.for2d(),this._geometry=t||new ct,this._geometry.refCount++,this._transformID=-1,this._tintColor=new n(16777215),this.blendMode=A.NORMAL}get geometry(){return this._geometry}clone(){return this.finishPoly(),new t(this._geometry)}set blendMode(t){this.state.blendMode=t}get blendMode(){return this.state.blendMode}get tint(){return this._tintColor.value}set tint(t){this._tintColor.setValue(t)}get fill(){return this._fillStyle}get line(){return this._lineStyle}lineStyle(t=null,e=0,s,i=.5,r=!1){return"number"==typeof t&&(t={width:t,color:e,alpha:s,alignment:i,native:r}),this.lineTextureStyle(t)}lineTextureStyle(t){const e={width:0,texture:T.WHITE,color:(null==t?void 0:t.texture)?16777215:0,matrix:null,alignment:.5,native:!1,cap:X.BUTT,join:Q.MITER,miterLimit:10};t=Object.assign(e,t),this.normalizeColor(t),this.currentPath&&this.startPoly();const s=t.width>0&&t.alpha>0;return s?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:s},t)):this._lineStyle.reset(),this}startPoly(){if(this.currentPath){const t=this.currentPath.points,e=this.currentPath.points.length;e>2&&(this.drawShape(this.currentPath),this.currentPath=new h,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[e-2],t[e-1]))}else this.currentPath=new h,this.currentPath.closeStroke=!1}finishPoly(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)}moveTo(t,e){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=e,this}lineTo(t,e){this.currentPath||this.moveTo(0,0);const s=this.currentPath.points,i=s[s.length-2],r=s[s.length-1];return(i!==t||r!==e)&&s.push(t,e),this}_initCurve(t=0,e=0){this.currentPath?0===this.currentPath.points.length&&(this.currentPath.points=[t,e]):this.moveTo(t,e)}quadraticCurveTo(t,e,s,i){this._initCurve();const r=this.currentPath.points;return 0===r.length&&this.moveTo(0,0),it.curveTo(t,e,s,i,r),this}bezierCurveTo(t,e,s,i,r,n){return this._initCurve(),K.curveTo(t,e,s,i,r,n,this.currentPath.points),this}arcTo(t,e,s,i,r){this._initCurve(t,e);const n=this.currentPath.points,h=$.curveTo(t,e,s,i,r,n);if(h){const{cx:t,cy:e,radius:s,startAngle:i,endAngle:r,anticlockwise:n}=h;this.arc(t,e,s,i,r,n)}return this}arc(t,e,s,r,n,h=!1){if(r===n)return this;if(!h&&n<=r?n+=i:h&&r<=n&&(r+=i),n-r==0)return this;const a=t+Math.cos(r)*s,l=e+Math.sin(r)*s,o=this._geometry.closePointEps;let c=this.currentPath?this.currentPath.points:null;if(c){const t=Math.abs(c[c.length-2]-a),e=Math.abs(c[c.length-1]-l);t<o&&e<o||c.push(a,l)}else this.moveTo(a,l),c=this.currentPath.points;return $.arc(a,l,t,e,s,r,n,h,c),this}beginFill(t=0,e){return this.beginTextureFill({texture:T.WHITE,color:t,alpha:e})}normalizeColor(t){const e=n.shared.setValue(t.color??0);t.color=e.toNumber(),t.alpha??(t.alpha=e.alpha)}beginTextureFill(t){const e={texture:T.WHITE,color:16777215,matrix:null};t=Object.assign(e,t),this.normalizeColor(t),this.currentPath&&this.startPoly();const s=t.alpha>0;return s?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._fillStyle,{visible:s},t)):this._fillStyle.reset(),this}endFill(){return this.finishPoly(),this._fillStyle.reset(),this}drawRect(t,e,s,i){return this.drawShape(new a(t,e,s,i))}drawRoundedRect(t,e,s,i,r){return this.drawShape(new l(t,e,s,i,r))}drawCircle(t,e,s){return this.drawShape(new o(t,e,s))}drawEllipse(t,e,s,i){return this.drawShape(new c(t,e,s,i))}drawPolygon(...t){let e,s=!0;const i=t[0];i.points?(s=i.closeStroke,e=i.points):e=Array.isArray(t[0])?t[0]:t;const r=new h(e);return r.closeStroke=s,this.drawShape(r),this}drawShape(t){return this._holeMode?this._geometry.drawHole(t,this._matrix):this._geometry.drawShape(t,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this}clear(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this}isFastRect(){const t=this._geometry.graphicsData;return!(1!==t.length||t[0].shape.type!==s.RECT||t[0].matrix||t[0].holes.length||t[0].lineStyle.visible&&t[0].lineStyle.width)}_render(t){this.finishPoly();const e=this._geometry;e.updateBatches(),e.batchable?(this.batchDirty!==e.batchDirty&&this._populateBatches(),this._renderBatched(t)):(t.batch.flush(),this._renderDirect(t))}_populateBatches(){const t=this._geometry,e=this.blendMode,s=t.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=t.batchDirty,this.batches.length=s,this.vertexData=new Float32Array(t.points);for(let i=0;i<s;i++){const s=t.batches[i],r=s.style.color,h=new Float32Array(this.vertexData.buffer,4*s.attribStart*2,2*s.attribSize),a=new Float32Array(t.uvsFloat32.buffer,4*s.attribStart*2,2*s.attribSize),l={vertexData:h,blendMode:e,indices:new Uint16Array(t.indicesUint16.buffer,2*s.start,s.size),uvs:a,_batchRGB:n.shared.setValue(r).toRgbArray(),_tintRGB:r,_texture:s.style.texture,alpha:s.style.alpha,worldAlpha:1};this.batches[i]=l}}_renderBatched(t){if(this.batches.length){t.batch.setObjectRenderer(t.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(let e=0,s=this.batches.length;e<s;e++){const s=this.batches[e];s.worldAlpha=this.worldAlpha*s.alpha,t.plugins[this.pluginName].render(s)}}}_renderDirect(t){const e=this._resolveDirectShader(t),s=this._geometry,i=this.worldAlpha,r=e.uniforms,h=s.drawCalls;r.translationMatrix=this.transform.worldTransform,n.shared.setValue(this._tintColor).premultiply(i).toArray(r.tint),t.shader.bind(e),t.geometry.bind(s,e),t.state.set(this.state);for(let n=0,a=h.length;n<a;n++)this._renderDrawCallDirect(t,s.drawCalls[n])}_renderDrawCallDirect(t,e){const{texArray:s,type:i,size:r,start:n}=e,h=s.count;for(let a=0;a<h;a++)t.texture.bind(s.elements[a],a);t.geometry.draw(i,r,n)}_resolveDirectShader(t){let e=this.shader;const s=this.pluginName;if(!e){if(!pt[s]){const{maxTextures:e}=t.plugins[s],i=new Int32Array(e);for(let t=0;t<e;t++)i[t]=t;const r={tint:new Float32Array([1,1,1,1]),translationMatrix:new u,default:I.from({uSamplers:i},!0)},n=t.plugins[s]._shader.program;pt[s]=new R(n,r)}e=pt[s]}return e}_calculateBounds(){this.finishPoly();const t=this._geometry;if(!t.graphicsData.length)return;const{minX:e,minY:s,maxX:i,maxY:r}=t.bounds;this._bounds.addFrame(this.transform,e,s,i,r)}containsPoint(e){return this.worldTransform.applyInverse(e,t._TEMP_POINT),this._geometry.containsPoint(t._TEMP_POINT)}calculateTints(){if(this.batchTint!==this.tint){this.batchTint=this._tintColor.toNumber();for(let t=0;t<this.batches.length;t++){const e=this.batches[t];e._tintRGB=n.shared.setValue(this._tintColor).multiply(e._batchRGB).toLittleEndianNumber()}}}calculateVertices(){const t=this.transform._worldID;if(this._transformID===t)return;this._transformID=t;const e=this.transform.worldTransform,s=e.a,i=e.b,r=e.c,n=e.d,h=e.tx,a=e.ty,l=this._geometry.points,o=this.vertexData;let c=0;for(let u=0;u<l.length;u+=2){const t=l[u],e=l[u+1];o[c++]=s*t+r*e+h,o[c++]=n*e+i*t+a}}closePath(){const t=this.currentPath;return t&&(t.closeStroke=!0,this.finishPoly()),this}setMatrix(t){return this._matrix=t,this}beginHole(){return this.finishPoly(),this._holeMode=!0,this}endHole(){return this.finishPoly(),this._holeMode=!1,this}destroy(t){this._geometry.refCount--,0===this._geometry.refCount&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,super.destroy(t)}};ft.curves=Z,ft._TEMP_POINT=new r;let gt=ft;function yt(t,e){return Math.random()*(e-t)+t}const mt=class t extends B{constructor(s){super(t.texture),e(this,"vx"),e(this,"vy"),this.x=s.x,this.y=s.y,this.vx=s.vx,this.vy=s.vy,this.alpha=s.alpha}static getRandomParticle(){return new t({x:yt(0,t.app.renderer.width),y:-5,vx:yt(-2,2),vy:yt(8,10),alpha:yt(0,1)})}static getRandomParticles(e){return Array.from({length:e},((e,s)=>t.getRandomParticle()))}reset(){this.x=yt(0,t.app.renderer.width),this.y=0,this.vx=yt(-3,3)}randomize(){this.vx+=yt(-1,1),this.vy=yt(2,6)}update(e){this.y>0&&(this.x+=this.vx),this.y+=this.vy,Math.random()>.9&&this.randomize();(this.x>t.app.renderer.width||this.x<0||this.y>t.app.renderer.height)&&this.reset()}};e(mt,"graphics",(new gt).beginFill(new d(16777215)).drawCircle(p.snow.size/2,p.snow.size/2,p.snow.size).endFill()),e(mt,"texture"),e(mt,"app");let bt=mt;class xt extends C{constructor(t=1500,e,s=16384,i=!1){super();s>16384&&(s=16384),this._properties=[!1,!0,!1,!1,!1],this._maxSize=t,this._batchSize=s,this._buffers=null,this._bufferUpdateIDs=[],this._updateID=0,this.interactiveChildren=!1,this.blendMode=A.NORMAL,this.autoResize=i,this.roundPixels=!0,this.baseTexture=null,this.setProperties(e),this._tintColor=new n(0),this.tintRgb=new Float32Array(3),this.tint=16777215}setProperties(t){t&&(this._properties[0]="vertices"in t||"scale"in t?!!t.vertices||!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="tint"in t||"alpha"in t?!!t.tint||!!t.alpha:this._properties[4])}updateTransform(){this.displayObjectUpdateTransform()}get tint(){return this._tintColor.value}set tint(t){this._tintColor.setValue(t),this._tintColor.toRgbArray(this.tintRgb)}render(t){!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",(()=>this.onChildrenChange(0)))),t.batch.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))}onChildrenChange(t){const e=Math.floor(t/this._batchSize);for(;this._bufferUpdateIDs.length<e;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[e]=++this._updateID}dispose(){if(this._buffers){for(let t=0;t<this._buffers.length;++t)this._buffers[t].destroy();this._buffers=null}}destroy(t){super.destroy(t),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null}}class _t{constructor(t,e,s){this.geometry=new U,this.indexBuffer=null,this.size=s,this.dynamicProperties=[],this.staticProperties=[];for(let i=0;i<t.length;++i){let s=t[i];s={attributeName:s.attributeName,size:s.size,uploadFunction:s.uploadFunction,type:s.type||z.FLOAT,offset:s.offset},e[i]?this.dynamicProperties.push(s):this.staticProperties.push(s)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}initBuffers(){const t=this.geometry;let e=0;this.indexBuffer=new N(function(t,e=null){const s=6*t;if((e=e||new Uint16Array(s)).length!==s)throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${s}`);for(let i=0,r=0;i<s;i+=6,r+=4)e[i+0]=r+0,e[i+1]=r+1,e[i+2]=r+2,e[i+3]=r+0,e[i+4]=r+2,e[i+5]=r+3;return e}(this.size),!0,!0),t.addIndex(this.indexBuffer),this.dynamicStride=0;for(let n=0;n<this.dynamicProperties.length;++n){const t=this.dynamicProperties[n];t.offset=e,e+=t.size,this.dynamicStride+=t.size}const s=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(s),this.dynamicDataUint32=new Uint32Array(s),this.dynamicBuffer=new N(this.dynamicData,!1,!1);let i=0;this.staticStride=0;for(let n=0;n<this.staticProperties.length;++n){const t=this.staticProperties[n];t.offset=i,i+=t.size,this.staticStride+=t.size}const r=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(r),this.staticDataUint32=new Uint32Array(r),this.staticBuffer=new N(this.staticData,!0,!1);for(let n=0;n<this.dynamicProperties.length;++n){const e=this.dynamicProperties[n];t.addAttribute(e.attributeName,this.dynamicBuffer,0,e.type===z.UNSIGNED_BYTE,e.type,4*this.dynamicStride,4*e.offset)}for(let n=0;n<this.staticProperties.length;++n){const e=this.staticProperties[n];t.addAttribute(e.attributeName,this.staticBuffer,0,e.type===z.UNSIGNED_BYTE,e.type,4*this.staticStride,4*e.offset)}}uploadDynamic(t,e,s){for(let i=0;i<this.dynamicProperties.length;i++){const r=this.dynamicProperties[i];r.uploadFunction(t,e,s,r.type===z.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,r.offset)}this.dynamicBuffer._updateID++}uploadStatic(t,e,s){for(let i=0;i<this.staticProperties.length;i++){const r=this.staticProperties[i];r.uploadFunction(t,e,s,r.type===z.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,r.offset)}this.staticBuffer._updateID++}destroy(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()}}class wt extends O{constructor(t){super(t),this.shader=null,this.properties=null,this.tempMatrix=new u,this.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:this.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:this.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:this.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:this.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:z.UNSIGNED_BYTE,uploadFunction:this.uploadTint,offset:0}],this.shader=R.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n","varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}",{}),this.state=E.for2d()}render(t){const e=t.children,s=t._maxSize,i=t._batchSize,r=this.renderer;let h=e.length;if(0===h)return;h>s&&!t.autoResize&&(h=s);let a=t._buffers;a||(a=t._buffers=this.generateBuffers(t));const l=e[0]._texture.baseTexture,o=l.alphaMode>0;this.state.blendMode=V(t.blendMode,o),r.state.set(this.state);const c=r.gl,u=t.worldTransform.copyTo(this.tempMatrix);u.prepend(r.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=u.toArray(!0),this.shader.uniforms.uColor=n.shared.setValue(t.tintRgb).premultiply(t.worldAlpha,o).toArray(this.shader.uniforms.uColor),this.shader.uniforms.uSampler=l,this.renderer.shader.bind(this.shader);let d=!1;for(let n=0,p=0;n<h;n+=i,p+=1){let s=h-n;s>i&&(s=i),p>=a.length&&a.push(this._generateOneMoreBuffer(t));const l=a[p];l.uploadDynamic(e,n,s);const o=t._bufferUpdateIDs[p]||0;d=d||l._updateID<o,d&&(l._updateID=t._updateID,l.uploadStatic(e,n,s)),r.geometry.bind(l.geometry),c.drawElements(c.TRIANGLES,6*s,c.UNSIGNED_SHORT,0)}}generateBuffers(t){const e=[],s=t._maxSize,i=t._batchSize,r=t._properties;for(let n=0;n<s;n+=i)e.push(new _t(this.properties,r,i));return e}_generateOneMoreBuffer(t){const e=t._batchSize,s=t._properties;return new _t(this.properties,s,e)}uploadVertices(t,e,s,i,r,n){let h=0,a=0,l=0,o=0;for(let c=0;c<s;++c){const s=t[e+c],u=s._texture,d=s.scale.x,p=s.scale.y,f=u.trim,g=u.orig;f?(a=f.x-s.anchor.x*g.width,h=a+f.width,o=f.y-s.anchor.y*g.height,l=o+f.height):(h=g.width*(1-s.anchor.x),a=g.width*-s.anchor.x,l=g.height*(1-s.anchor.y),o=g.height*-s.anchor.y),i[n]=a*d,i[n+1]=o*p,i[n+r]=h*d,i[n+r+1]=o*p,i[n+2*r]=h*d,i[n+2*r+1]=l*p,i[n+3*r]=a*d,i[n+3*r+1]=l*p,n+=4*r}}uploadPosition(t,e,s,i,r,n){for(let h=0;h<s;h++){const s=t[e+h].position;i[n]=s.x,i[n+1]=s.y,i[n+r]=s.x,i[n+r+1]=s.y,i[n+2*r]=s.x,i[n+2*r+1]=s.y,i[n+3*r]=s.x,i[n+3*r+1]=s.y,n+=4*r}}uploadRotation(t,e,s,i,r,n){for(let h=0;h<s;h++){const s=t[e+h].rotation;i[n]=s,i[n+r]=s,i[n+2*r]=s,i[n+3*r]=s,n+=4*r}}uploadUvs(t,e,s,i,r,n){for(let h=0;h<s;++h){const s=t[e+h]._texture._uvs;s?(i[n]=s.x0,i[n+1]=s.y0,i[n+r]=s.x1,i[n+r+1]=s.y1,i[n+2*r]=s.x2,i[n+2*r+1]=s.y2,i[n+3*r]=s.x3,i[n+3*r+1]=s.y3,n+=4*r):(i[n]=0,i[n+1]=0,i[n+r]=0,i[n+r+1]=0,i[n+2*r]=0,i[n+2*r+1]=0,i[n+3*r]=0,i[n+3*r+1]=0,n+=4*r)}}uploadTint(t,e,s,i,r,h){for(let a=0;a<s;++a){const s=t[e+a],l=n.shared.setValue(s._tintRGB).toPremultiplied(s.alpha,s.texture.baseTexture.alphaMode>0);i[h]=l,i[h+r]=l,i[h+2*r]=l,i[h+3*r]=l,h+=4*r}}destroy(){super.destroy(),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null}}function vt(){if(![11,0,1].includes((new Date).getMonth()))return null;const t=f(null),e=g(y);if(e.load(),!e.settings.value.enableSnow)return null;function s(){const e=new j({width:window.innerWidth,height:window.innerHeight,resizeTo:window,view:t.current,backgroundAlpha:0,antialias:!0});bt.texture=e.renderer.generateTexture(bt.graphics),bt.app=e;const s=bt.getRandomParticles(p.snow.amount),i=new xt(p.snow.amount,{scale:!0,position:!0});s.forEach((t=>i.addChild(t))),e.stage.addChild(i),e.ticker.add((t=>s.forEach((e=>e.update(t)))))}return m(s,[]),m(s,[e.settings.value]),b("canvas",{ref:t,className:k})}wt.extension={name:"particle",type:L.RendererPlugin},F.add(wt);export{vt as Snow};
