(()=>{var Ec="170";var af=0,wh=1,of=2;var Fu=1,Ac=2,$i=3,gn=0,Be=1,Oe=2,Ui=0,pn=1,ps=2,Th=3,Eh=4,lf=5,Dn=100,cf=101,hf=102,uf=103,df=104,ff=200,pf=201,mf=202,gf=203,Qo=204,tl=205,xf=206,vf=207,yf=208,_f=209,bf=210,Mf=211,Sf=212,wf=213,Tf=214,el=0,il=1,nl=2,ms=3,sl=4,rl=5,al=6,ol=7,Rc=0,Ef=1,Af=2,mn=0,Cc=1,Pc=2,Ic=3,lr=4,Rf=5,Lc=6,Dc=7;var Ou=300,gs=301,xs=302,ll=303,cl=304,Ra=306,xn=1e3,Nn=1001,hl=1002,ci=1003,Cf=1004;var br=1005;var Di=1006,xo=1007;var Fn=1008;var Zi=1009,Bu=1010,zu=1011,tr=1012,kc=1013,On=1014,ki=1015,hi=1016,Uc=1017,Nc=1018,vs=1020,Hu=35902,Vu=1021,Gu=1022,Ei=1023,Wu=1024,Xu=1025,us=1026,ys=1027,Fc=1028,Oc=1029,$u=1030,Bc=1031;var zc=1033,Kr=33776,Zr=33777,Jr=33778,jr=33779,ul=35840,dl=35841,fl=35842,pl=35843,ml=36196,gl=37492,xl=37496,vl=37808,yl=37809,_l=37810,bl=37811,Ml=37812,Sl=37813,wl=37814,Tl=37815,El=37816,Al=37817,Rl=37818,Cl=37819,Pl=37820,Il=37821,Qr=36492,Ll=36494,Dl=36495,qu=36283,kl=36284,Ul=36285,Nl=36286;var ta=2300,Fl=2301,vo=2302,Ah=2400,Rh=2401,Ch=2402;var Pf=3200,If=3201;var Hc=0,Lf=1,fn="",we="srgb",Es="srgb-linear",Ca="linear",oe="srgb";var Kn=7680;var Ph=519,Df=512,kf=513,Uf=514,Yu=515,Nf=516,Ff=517,Of=518,Bf=519,Ih=35044;var Lh="300 es",Yi=2e3,ea=2001,vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yo=Math.PI/180,Ol=180/Math.PI;function cr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function He(n,t,e){return Math.max(t,Math.min(e,n))}function zf(n,t){return(n%t+t)%t}function _o(n,t,e){return(1-e)*n+e*t}function zs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var st=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class n{constructor(t,e,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],y=s[1],w=s[4],b=s[7],D=s[2],E=s[5],R=s[8];return r[0]=a*x+o*y+l*D,r[3]=a*m+o*w+l*E,r[6]=a*p+o*b+l*R,r[1]=c*x+h*y+u*D,r[4]=c*m+h*w+u*E,r[7]=c*p+h*b+u*R,r[2]=d*x+f*y+g*D,r[5]=d*m+f*w+g*E,r[8]=d*p+f*b+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(bo.makeScale(t,e)),this}rotate(t){return this.premultiply(bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bo=new Bt;function Ku(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hf(){let n=ia("canvas");return n.style.display="block",n}var Dh={};function Ks(n){n in Dh||(Dh[n]=!0,console.warn(n))}function Vf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Gf(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wf(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $t={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(n.r=Ki(n.r),n.g=Ki(n.g),n.b=Ki(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(n.r=ds(n.r),n.g=ds(n.g),n.b=ds(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===fn?Ca:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var kh=[.64,.33,.3,.6,.15,.06],Uh=[.2126,.7152,.0722],Nh=[.3127,.329],Fh=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Es]:{primaries:kh,whitePoint:Nh,transfer:Ca,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:Uh,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:kh,whitePoint:Nh,transfer:oe,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:Uh,outputColorSpaceConfig:{drawingBufferColorSpace:we}}});var Zn,Bl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=ia("canvas")),Zn.width=t.width,Zn.height=t.height;let i=Zn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ia("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ki(e[i]/255)*255):e[i]=Ki(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xf=0,na=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=cr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mo(s[a].image)):r.push(Mo(s[a]))}else r=Mo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $f=0,ei=class n extends vn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Nn,s=Nn,r=Di,a=Fn,o=Ei,l=Zi,c=n.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=cr(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xn:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xn:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Ou;ei.DEFAULT_ANISOTROPY=1;var he=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,b=(f+1)/2,D=(p+1)/2,E=(h+d)/4,R=(u+x)/4,P=(g+m)/4;return w>b&&w>D?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=R/i):b>D?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=P/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=R/r,s=P/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zl=class extends vn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ei(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new na(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ve=class extends zl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},sa=class extends ei{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hl=class extends ei{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,y=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let D=Math.sqrt(w),E=Math.atan2(D,p*y);m=Math.sin(m*E)/D,o=Math.sin(o*E)/D}let b=o*y;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+x*b,m===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return So.copy(this).projectOnVector(t),this.sub(So)}reflect(t){return this.sub(So.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},So=new A,Bh=new vi,Ji=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Si):Si.fromBufferAttribute(r,a),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mr.copy(i.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Sr.subVectors(this.max,Hs),Jn.subVectors(t.a,Hs),jn.subVectors(t.b,Hs),Qn.subVectors(t.c,Hs),on.subVectors(jn,Jn),ln.subVectors(Qn,jn),En.subVectors(Jn,Qn);let e=[0,-on.z,on.y,0,-ln.z,ln.y,0,-En.z,En.y,on.z,0,-on.x,ln.z,0,-ln.x,En.z,0,-En.x,-on.y,on.x,0,-ln.y,ln.x,0,-En.y,En.x,0];return!wo(e,Jn,jn,Qn,Sr)||(e=[1,0,0,0,1,0,0,0,1],!wo(e,Jn,jn,Qn,Sr))?!1:(wr.crossVectors(on,ln),e=[wr.x,wr.y,wr.z],wo(e,Jn,jn,Qn,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Hi=[new A,new A,new A,new A,new A,new A,new A,new A],Si=new A,Mr=new Ji,Jn=new A,jn=new A,Qn=new A,on=new A,ln=new A,En=new A,Hs=new A,Sr=new A,wr=new A,An=new A;function wo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){An.fromArray(n,r);let o=s.x*Math.abs(An.x)+s.y*Math.abs(An.y)+s.z*Math.abs(An.z),l=t.dot(An),c=e.dot(An),h=i.dot(An);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qf=new Ji,Vs=new A,To=new A,ji=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):qf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Vs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(To)),this.expandByPoint(Vs.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vi=new A,Eo=new A,Tr=new A,cn=new A,Ao=new A,Er=new A,Ro=new A,er=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,e),Vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Eo.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),cn.copy(this.origin).sub(Eo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Tr),o=cn.dot(this.direction),l=-cn.dot(Tr),c=cn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Eo).addScaledVector(Tr,d),f}intersectSphere(t,e){Vi.subVectors(t.center,this.origin);let i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,e,i,s,r){Ao.subVectors(e,t),Er.subVectors(i,t),Ro.crossVectors(Ao,Er);let a=this.direction.dot(Ro),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cn.subVectors(this.origin,t);let l=o*this.direction.dot(Er.crossVectors(cn,Er));if(l<0)return null;let c=o*this.direction.dot(Ao.cross(cn));if(c<0||l+c>a)return null;let h=-o*cn.dot(Ro);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class n{constructor(t,e,i,s,r,a,o,l,c,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,i,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yf,t,Kf)}lookAt(t,e,i){let s=this.elements;return oi.subVectors(t,e),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),hn.crossVectors(i,oi),hn.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),hn.crossVectors(i,oi)),hn.normalize(),Ar.crossVectors(oi,hn),s[0]=hn.x,s[4]=Ar.x,s[8]=oi.x,s[1]=hn.y,s[5]=Ar.y,s[9]=oi.y,s[2]=hn.z,s[6]=Ar.z,s[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],w=i[7],b=i[11],D=i[15],E=s[0],R=s[4],P=s[8],S=s[12],M=s[1],C=s[5],V=s[9],B=s[13],G=s[2],J=s[6],$=s[10],et=s[14],X=s[3],ot=s[7],pt=s[11],Et=s[15];return r[0]=a*E+o*M+l*G+c*X,r[4]=a*R+o*C+l*J+c*ot,r[8]=a*P+o*V+l*$+c*pt,r[12]=a*S+o*B+l*et+c*Et,r[1]=h*E+u*M+d*G+f*X,r[5]=h*R+u*C+d*J+f*ot,r[9]=h*P+u*V+d*$+f*pt,r[13]=h*S+u*B+d*et+f*Et,r[2]=g*E+x*M+m*G+p*X,r[6]=g*R+x*C+m*J+p*ot,r[10]=g*P+x*V+m*$+p*pt,r[14]=g*S+x*B+m*et+p*Et,r[3]=y*E+w*M+b*G+D*X,r[7]=y*R+w*C+b*J+D*ot,r[11]=y*P+w*V+b*$+D*pt,r[15]=y*S+w*B+b*et+D*Et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+x*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,w=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,b=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,D=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,E=e*y+i*w+s*b+r*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return t[0]=y*R,t[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*R,t[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*p+i*l*p)*R,t[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*R,t[4]=w*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*R,t[8]=b*R,t[9]=(g*u*r-h*x*r-g*i*f+e*x*f+h*i*p-e*u*p)*R,t[10]=(a*x*r-g*o*r+g*i*c-e*x*c-a*i*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*f-e*o*f)*R,t[12]=D*R,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*m+e*u*m)*R,t[14]=(g*o*s-a*x*s-g*i*l+e*x*l+a*i*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*d+e*o*d)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,w=l*h,b=l*u,D=i.x,E=i.y,R=i.z;return s[0]=(1-(x+p))*D,s[1]=(f+b)*D,s[2]=(g-w)*D,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(d+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+w)*R,s[9]=(m-y)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=ts.set(s[0],s[1],s[2]).length(),a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wi.copy(this);let c=1/r,h=1/a,u=1/o;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=u,wi.elements[9]*=u,wi.elements[10]*=u,e.setFromRotationMatrix(wi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Yi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(o===Yi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ea)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Yi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(a-r),d=(e+t)*c,f=(i+s)*h,g,x;if(o===Yi)g=(a+r)*u,x=-2*u;else if(o===ea)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ts=new A,wi=new ie,Yf=new A(0,0,0),Kf=new A(1,1,1),hn=new A,Ar=new A,oi=new A,zh=new ie,Hh=new vi,Ai=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";var ra=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zf=0,Vh=new A,es=new vi,Gi=new ie,Rr=new A,Gs=new A,Jf=new A,jf=new vi,Gh=new A(1,0,0),Wh=new A(0,1,0),Xh=new A(0,0,1),$h={type:"added"},Qf={type:"removed"},is={type:"childadded",child:null},Co={type:"childremoved",child:null},Ge=class n extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new A,e=new Ai,i=new vi,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Bt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Gh,t)}rotateY(t){return this.rotateOnAxis(Wh,t)}rotateZ(t){return this.rotateOnAxis(Xh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gh,t)}translateY(t){return this.translateOnAxis(Wh,t)}translateZ(t){return this.translateOnAxis(Xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Rr.copy(t):Rr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Gs,Rr,this.up):Gi.lookAt(Rr,Gs,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Gi),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($h),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),Co.child=t,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($h),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,Jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ge.DEFAULT_UP=new A(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=new A,Wi=new A,Po=new A,Xi=new A,ns=new A,ss=new A,qh=new A,Io=new A,Lo=new A,Do=new A,ko=new he,Uo=new he,No=new he,kn=class n{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ti.subVectors(t,e),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ti.subVectors(s,e),Wi.subVectors(i,e),Po.subVectors(t,e);let a=Ti.dot(Ti),o=Ti.dot(Wi),l=Ti.dot(Po),c=Wi.dot(Wi),h=Wi.dot(Po),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ko.setScalar(0),Uo.setScalar(0),No.setScalar(0),ko.fromBufferAttribute(t,e),Uo.fromBufferAttribute(t,i),No.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(Uo,r.y),a.addScaledVector(No,r.z),a}static isFrontFacing(t,e,i,s){return Ti.subVectors(i,e),Wi.subVectors(t,e),Ti.cross(Wi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),Ti.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ns.subVectors(s,i),ss.subVectors(r,i),Io.subVectors(t,i);let l=ns.dot(Io),c=ss.dot(Io);if(l<=0&&c<=0)return e.copy(i);Lo.subVectors(t,s);let h=ns.dot(Lo),u=ss.dot(Lo);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ns,a);Do.subVectors(t,r);let f=ns.dot(Do),g=ss.dot(Do);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ss,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return qh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(qh,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(i).addScaledVector(ns,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Fo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ct=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=$t.workingColorSpace){if(t=zf(t,1),e=He(e,0,1),i=He(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Fo(a,r,t+1/3),this.g=Fo(a,r,t),this.b=Fo(a,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=we){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let i=Zu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return $t.fromWorkingColorSpace(qe.copy(this),t),Math.round(He(qe.r*255,0,255))*65536+Math.round(He(qe.g*255,0,255))*256+Math.round(He(qe.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(qe.copy(this),e);let i=qe.r,s=qe.g,r=qe.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=we){$t.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,s=qe.b;return t!==we?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(Cr);let i=_o(un.h,Cr.h,e),s=_o(un.s,Cr.s,e),r=_o(un.l,Cr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Ct;Ct.NAMES=Zu;var tp=0,Ni=class extends vn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=cr(),this.name="",this.blending=pn,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=tl,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pn&&(i.blending=this.blending),this.side!==gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qo&&(i.blendSrc=this.blendSrc),this.blendDst!==tl&&(i.blendDst=this.blendDst),this.blendEquation!==Dn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ae=class extends Ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new A,Pr=new st,ke=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ih,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),i=ti(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),i=ti(i,this.array),s=ti(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),i=ti(i,this.array),s=ti(s,this.array),r=ti(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ih&&(t.usage=this.usage),t}};var aa=class extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var oa=class extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ne=class extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}},ep=0,gi=new ie,Oo=new Ge,rs=new A,li=new Ji,Ws=new Ji,Fe=new A,Ie=class n extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ku(t)?oa:aa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,i){return gi.makeTranslation(t,e,i),this.applyMatrix4(gi),this}scale(t,e,i){return gi.makeScale(t,e,i),this.applyMatrix4(gi),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];li.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(li.min,Ws.min),li.expandByPoint(Fe),Fe.addVectors(li.max,Ws.max),li.expandByPoint(Fe)):(li.expandByPoint(Ws.min),li.expandByPoint(Ws.max))}li.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(t,c),Fe.add(rs)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new A,l[P]=new A;let c=new A,h=new A,u=new A,d=new st,f=new st,g=new st,x=new A,m=new A;function p(P,S,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(x),o[S].add(x),o[M].add(x),l[P].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,S=y.length;P<S;++P){let M=y[P],C=M.start,V=M.count;for(let B=C,G=C+V;B<G;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let w=new A,b=new A,D=new A,E=new A;function R(P){D.fromBufferAttribute(s,P),E.copy(D);let S=o[P];w.copy(S),w.sub(D.multiplyScalar(D.dot(S))).normalize(),b.crossVectors(E,S);let C=b.dot(l[P])<0?-1:1;a.setXYZW(P,w.x,w.y,w.z,C)}for(let P=0,S=y.length;P<S;++P){let M=y[P],C=M.start,V=M.count;for(let B=C,G=C+V;B<G;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yh=new ie,Rn=new er,Ir=new ji,Kh=new A,Lr=new A,Dr=new A,kr=new A,Bo=new A,Ur=new A,Zh=new A,Nr=new A,Tt=class extends Ge{constructor(t=new Ie,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Bo.fromBufferAttribute(u,t),a?Ur.addScaledVector(Bo,h):Ur.addScaledVector(Bo.sub(e),h))}e.add(Ur)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(r),Rn.copy(t.ray).recast(t.near),!(Ir.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(Ir,Kh)===null||Rn.origin.distanceToSquared(Kh)>(t.far-t.near)**2))&&(Yh.copy(r).invert(),Rn.copy(t.ray).applyMatrix4(Yh),!(i.boundingBox!==null&&Rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,D=w;b<D;b+=3){let E=o.getX(b),R=o.getX(b+1),P=o.getX(b+2);s=Fr(this,p,t,i,c,h,u,E,R,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);s=Fr(this,a,t,i,c,h,u,y,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,D=w;b<D;b+=3){let E=b,R=b+1,P=b+2;s=Fr(this,p,t,i,c,h,u,E,R,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,w=m+1,b=m+2;s=Fr(this,a,t,i,c,h,u,y,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ip(n,t,e,i,s,r,a,o){let l;if(t.side===Be?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===gn,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Nr);return c<e.near||c>e.far?null:{distance:c,point:Nr.clone(),object:n}}function Fr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Lr),n.getVertexPosition(l,Dr),n.getVertexPosition(c,kr);let h=ip(n,t,e,i,Lr,Dr,kr,Zh);if(h){let u=new A;kn.getBarycoord(Zh,Lr,Dr,kr,u),s&&(h.uv=kn.getInterpolatedAttribute(s,o,l,c,u,new st)),r&&(h.uv1=kn.getInterpolatedAttribute(r,o,l,c,u,new st)),a&&(h.normal=kn.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};kn.getNormal(Lr,Dr,kr,d.normal),h.face=d,h.barycoord=u}return h}var Ke=class n extends Ie{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(x,m,p,y,w,b,D,E,R,P,S){let M=b/R,C=D/P,V=b/2,B=D/2,G=E/2,J=R+1,$=P+1,et=0,X=0,ot=new A;for(let pt=0;pt<$;pt++){let Et=pt*C-B;for(let Wt=0;Wt<J;Wt++){let ue=Wt*M-V;ot[x]=ue*y,ot[m]=Et*w,ot[p]=G,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[p]=E>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Wt/R),u.push(1-pt/P),et+=1}}for(let pt=0;pt<P;pt++)for(let Et=0;Et<R;Et++){let Wt=d+Et+J*pt,ue=d+Et+J*(pt+1),Y=d+(Et+1)+J*(pt+1),nt=d+(Et+1)+J*pt;l.push(Wt,ue,nt),l.push(ue,Y,nt),X+=6}o.addGroup(f,X,S),f+=X,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Je(n){let t={};for(let e=0;e<n.length;e++){let i=_s(n[e]);for(let s in i)t[s]=i[s]}return t}function np(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ju(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var yn={clone:_s,merge:Je},sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Re=class extends Ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},la=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dn=new A,Jh=new st,jh=new st,Ye=class extends la{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ol*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dn.x,dn.y).multiplyScalar(-t/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dn.x,dn.y).multiplyScalar(-t/dn.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,jh),e.subVectors(jh,Jh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(yo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},as=-90,os=1,Vl=class extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(as,os,t,e);s.layers=this.layers,this.add(s);let r=new Ye(as,os,t,e);r.layers=this.layers,this.add(r);let a=new Ye(as,os,t,e);a.layers=this.layers,this.add(a);let o=new Ye(as,os,t,e);o.layers=this.layers,this.add(o);let l=new Ye(as,os,t,e);l.layers=this.layers,this.add(l);let c=new Ye(as,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ca=class extends ei{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gl=class extends Ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ca(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Di}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ke(5,5,5),r=new Re({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:Ui});r.uniforms.tEquirect.value=e;let a=new Tt(s,r),o=e.minFilter;return e.minFilter===Fn&&(e.minFilter=Di),new Vl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},zo=new A,ap=new A,op=new Bt,qi=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=zo.subVectors(i,e).cross(ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(zo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||op.getNormalMatrix(t),s=this.coplanarPoint(zo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cn=new ji,Or=new A,ir=class{constructor(t=new qi,e=new qi,i=new qi,s=new qi,r=new qi,a=new qi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yi){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],w=s[14],b=s[15];if(i[0].setComponents(l-r,d-c,m-f,b-p).normalize(),i[1].setComponents(l+r,d+c,m+f,b+p).normalize(),i[2].setComponents(l+a,d+h,m+g,b+y).normalize(),i[3].setComponents(l-a,d-h,m-g,b-y).normalize(),i[4].setComponents(l-o,d-u,m-x,b-w).normalize(),e===Yi)i[5].setComponents(l+o,d+u,m+x,b+w).normalize();else if(e===ea)i[5].setComponents(o,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Or.x=s.normal.x>0?t.max.x:t.min.x,Or.y=s.normal.y>0?t.max.y:t.min.y,Or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ju(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function lp(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ii=class n extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let w=0;w<c;w++){let b=w*u-r;g.push(b,-y,0),x.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let w=y+c*p,b=y+c*(p+1),D=y+1+c*(p+1),E=y+1+c*p;f.push(w,b,E),f.push(b,D,E)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,om=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Im=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:cp,alphahash_pars_fragment:hp,alphamap_fragment:up,alphamap_pars_fragment:dp,alphatest_fragment:fp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:xp,batching_vertex:vp,begin_vertex:yp,beginnormal_vertex:_p,bsdfs:bp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Ap,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Ip,common:Lp,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:kp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:Bp,colorspace_pars_fragment:zp,envmap_fragment:Hp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Gp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:em,envmap_vertex:Xp,fog_vertex:$p,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:Kp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Jp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:tm,lights_toon_fragment:im,lights_toon_pars_fragment:nm,lights_phong_fragment:sm,lights_phong_pars_fragment:rm,lights_physical_fragment:am,lights_physical_pars_fragment:om,lights_fragment_begin:lm,lights_fragment_maps:cm,lights_fragment_end:hm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:xm,map_particle_pars_fragment:vm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:_m,morphinstance_vertex:bm,morphcolor_vertex:Mm,morphnormal_vertex:Sm,morphtarget_pars_vertex:wm,morphtarget_vertex:Tm,normal_fragment_begin:Em,normal_fragment_maps:Am,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Pm,normalmap_pars_fragment:Im,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:Bm,dithering_fragment:zm,dithering_pars_fragment:Hm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Xm,shadowmap_vertex:$m,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:Km,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:jm,specularmap_pars_fragment:Qm,tonemapping_fragment:t0,tonemapping_pars_fragment:e0,transmission_fragment:i0,transmission_pars_fragment:n0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:a0,worldpos_vertex:o0,background_vert:l0,background_frag:c0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distanceRGBA_vert:g0,distanceRGBA_frag:x0,equirect_vert:v0,equirect_frag:y0,linedashed_vert:_0,linedashed_frag:b0,meshbasic_vert:M0,meshbasic_frag:S0,meshlambert_vert:w0,meshlambert_frag:T0,meshmatcap_vert:E0,meshmatcap_frag:A0,meshnormal_vert:R0,meshnormal_frag:C0,meshphong_vert:P0,meshphong_frag:I0,meshphysical_vert:L0,meshphysical_frag:D0,meshtoon_vert:k0,meshtoon_frag:U0,points_vert:N0,points_frag:F0,shadow_vert:O0,shadow_frag:B0,sprite_vert:z0,sprite_frag:H0},rt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Li={basic:{uniforms:Je([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Je([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Je([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Je([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Je([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Je([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Je([rt.points,rt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Je([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Je([rt.common,rt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Je([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Je([rt.sprite,rt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Je([rt.common,rt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Je([rt.lights,rt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Li.physical={uniforms:Je([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Br={r:0,b:0,g:0},Pn=new Ai,V0=new ie;function G0(n,t,e,i,s,r,a){let o=new Ct(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let w=y.isScene===!0?y.background:null;return w&&w.isTexture&&(w=(y.backgroundBlurriness>0?e:t).get(w)),w}function x(y){let w=!1,b=g(y);b===null?p(o,l):b&&b.isColor&&(p(b,1),w=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,w){let b=g(w);b&&(b.isCubeTexture||b.mapping===Ra)?(h===void 0&&(h=new Tt(new Ke(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:_s(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Pn.copy(w.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(Pn)),h.material.toneMapped=$t.getTransfer(b.colorSpace)!==oe,(u!==b||d!==b.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Tt(new ii(2,2),new Re({name:"BackgroundMaterial",uniforms:_s(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=$t.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,w){y.getRGB(Br,Ju(n)),i.buffers.color.setClear(Br.r,Br.g,Br.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),l=w,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m}}function W0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(M,C,V,B,G){let J=!1,$=u(B,V,C);r!==$&&(r=$,c(r.object)),J=f(M,B,V,G),J&&g(M,B,V,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,b(M,C,V,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,C,V){let B=V.wireframe===!0,G=i[M.id];G===void 0&&(G={},i[M.id]=G);let J=G[C.id];J===void 0&&(J={},G[C.id]=J);let $=J[B];return $===void 0&&($=d(l()),J[B]=$),$}function d(M){let C=[],V=[],B=[];for(let G=0;G<e;G++)C[G]=0,V[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,C,V,B){let G=r.attributes,J=C.attributes,$=0,et=V.getAttributes();for(let X in et)if(et[X].location>=0){let pt=G[X],Et=J[X];if(Et===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),pt===void 0||pt.attribute!==Et||Et&&pt.data!==Et.data)return!0;$++}return r.attributesNum!==$||r.index!==B}function g(M,C,V,B){let G={},J=C.attributes,$=0,et=V.getAttributes();for(let X in et)if(et[X].location>=0){let pt=J[X];pt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor));let Et={};Et.attribute=pt,pt&&pt.data&&(Et.data=pt.data),G[X]=Et,$++}r.attributes=G,r.attributesNum=$,r.index=B}function x(){let M=r.newAttributes;for(let C=0,V=M.length;C<V;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){let V=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;V[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),G[M]!==C&&(n.vertexAttribDivisor(M,C),G[M]=C)}function y(){let M=r.newAttributes,C=r.enabledAttributes;for(let V=0,B=C.length;V<B;V++)C[V]!==M[V]&&(n.disableVertexAttribArray(V),C[V]=0)}function w(M,C,V,B,G,J,$){$===!0?n.vertexAttribIPointer(M,C,V,G,J):n.vertexAttribPointer(M,C,V,B,G,J)}function b(M,C,V,B){x();let G=B.attributes,J=V.getAttributes(),$=C.defaultAttributeValues;for(let et in J){let X=J[et];if(X.location>=0){let ot=G[et];if(ot===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){let pt=ot.normalized,Et=ot.itemSize,Wt=t.get(ot);if(Wt===void 0)continue;let ue=Wt.buffer,Y=Wt.type,nt=Wt.bytesPerElement,Mt=Y===n.INT||Y===n.UNSIGNED_INT||ot.gpuType===kc;if(ot.isInterleavedBufferAttribute){let lt=ot.data,Dt=lt.stride,Nt=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<X.locationSize;Xt++)p(X.location+Xt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Xt=0;Xt<X.locationSize;Xt++)m(X.location+Xt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let Xt=0;Xt<X.locationSize;Xt++)w(X.location+Xt,Et/X.locationSize,Y,pt,Dt*nt,(Nt+Et/X.locationSize*Xt)*nt,Mt)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)p(X.location+lt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let lt=0;lt<X.locationSize;lt++)w(X.location+lt,Et/X.locationSize,Y,pt,Et*nt,Et/X.locationSize*lt*nt,Mt)}}else if($!==void 0){let pt=$[et];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(X.location,pt);break;case 3:n.vertexAttrib3fv(X.location,pt);break;case 4:n.vertexAttrib4fv(X.location,pt);break;default:n.vertexAttrib1fv(X.location,pt)}}}}y()}function D(){P();for(let M in i){let C=i[M];for(let V in C){let B=C[V];for(let G in B)h(B[G].object),delete B[G];delete C[V]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;let C=i[M.id];for(let V in C){let B=C[V];for(let G in B)h(B[G].object),delete B[G];delete C[V]}delete i[M.id]}function R(M){for(let C in i){let V=i[C];if(V[M.id]===void 0)continue;let B=V[M.id];for(let G in B)h(B[G].object),delete B[G];delete V[M.id]}}function P(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function X0(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ei&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let P=R===hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Zi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ki&&!P)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:D,maxSamples:E}}function q0(n){let t=this,e=null,i=0,s=!1,r=!1,a=new qi,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,w=y*4,b=p.clippingState||null;l.value=b,b=h(g,d,w,f);for(let D=0;D!==w;++D)b[D]=e[D];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=f;w!==x;++w,b+=4)a.copy(u[w]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Y0(n){let t=new WeakMap;function e(a,o){return o===ll?a.mapping=gs:o===cl&&(a.mapping=xs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===ll||o===cl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Gl(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var bs=class extends la{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hs=4,Qh=[.125,.215,.35,.446,.526,.582],Un=20,Ho=new bs,tu=new Ct,Vo=null,Go=0,Wo=0,Xo=!1,Ln=(1+Math.sqrt(5))/2,ls=1/Ln,eu=[new A(-Ln,ls,0),new A(Ln,ls,0),new A(-ls,0,Ln),new A(ls,0,Ln),new A(0,Ln,-ls),new A(0,Ln,ls),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Ms=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vo,Go,Wo),this._renderer.xr.enabled=Xo,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:hi,format:Ei,colorSpace:Es,depthBuffer:!1},s=iu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K0(r)),this._blurMaterial=Z0(r,t,e)}return s}_compileMaterial(t){let e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,Ho)}_sceneToCubeUV(t,e,i,s){let o=new Ye(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(tu),h.toneMapping=mn,h.autoClear=!1;let f=new Ae({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Tt(new Ke,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(tu),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let w=this._cubeSize;zr(s,y*w,p>2?w:0,w,w),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===gs||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;zr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ho)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eu[(s-r-1)%eu.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Tt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Un-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Un;m>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Un}`);let p=[],y=0;for(let R=0;R<Un;++R){let P=R/x,S=Math.exp(-P*P/2);p.push(S),R===0?y+=S:R<m&&(y+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;let b=this._sizeLods[s],D=3*b*(s>w-hs?s-w+hs:0),E=4*(this._cubeSize-b);zr(e,D,E,3*b,2*b),l.setRenderTarget(e),l.render(u,Ho)}};function K0(n){let t=[],e=[],i=[],s=n,r=n-hs+1+Qh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-hs?l=Qh[a-n+hs-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),w=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,P=E>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(S,x*g*E),w.set(d,m*g*E);let M=[E,E,E,E,E,E];b.set(M,p*g*E)}let D=new Ie;D.setAttribute("position",new ke(y,x)),D.setAttribute("uv",new ke(w,m)),D.setAttribute("faceIndex",new ke(b,p)),t.push(D),s>hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function iu(n,t,e){let i=new Ve(n,t,e);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Z0(n,t,e){let i=new Float32Array(Un),s=new A(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function nu(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function su(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===ll||l===cl,h=l===gs||l===xs;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ms(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ms(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function j0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ks("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Q0(n,t,e,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let w=0,b=y.length;w<b;w+=3){let D=y[w+0],E=y[w+1],R=y[w+2];d.push(D,E,E,R,R,D)}}else if(g!==void 0){let y=g.array;x=g.version;for(let w=0,b=y.length/3-1;w<b;w+=3){let D=w+0,E=w+1,R=w+2;d.push(D,E,E,R,R,D)}}else return;let m=new(Ku(d)?oa:aa)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function tg(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*a,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function eg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ig(n,t,e){let i=new WeakMap,s=new he;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let b=o.attributes.position.count*w,D=1;b>t.maxTextureSize&&(D=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*D*4*u),R=new sa(E,b,D,u);R.type=ki,R.needsUpdate=!0;let P=w*4;for(let M=0;M<u;M++){let C=m[M],V=p[M],B=y[M],G=b*D*4*M;for(let J=0;J<C.count;J++){let $=J*P;f===!0&&(s.fromBufferAttribute(C,J),E[G+$+0]=s.x,E[G+$+1]=s.y,E[G+$+2]=s.z,E[G+$+3]=0),g===!0&&(s.fromBufferAttribute(V,J),E[G+$+4]=s.x,E[G+$+5]=s.y,E[G+$+6]=s.z,E[G+$+7]=0),x===!0&&(s.fromBufferAttribute(B,J),E[G+$+8]=s.x,E[G+$+9]=s.y,E[G+$+10]=s.z,E[G+$+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new st(b,D)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ng(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ha=class extends ei{constructor(t,e,i,s,r,a,o,l,c,h=us){if(h!==us&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===us&&(i=On),i===void 0&&h===ys&&(i=vs),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ci,this.minFilter=l!==void 0?l:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qu=new ei,ru=new ha(1,1),td=new sa,ed=new Hl,id=new ca,au=[],ou=[],lu=new Float32Array(16),cu=new Float32Array(9),hu=new Float32Array(4);function As(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ne(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Pa(n,t){let e=ou[t];e===void 0&&(e=new Int32Array(t),ou[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Ne(e,t)}}function ag(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Ne(e,t)}}function og(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Ne(e,t)}}function lg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;hu.set(i),n.uniformMatrix2fv(this.addr,!1,hu),Ne(e,i)}}function cg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;cu.set(i),n.uniformMatrix3fv(this.addr,!1,cu),Ne(e,i)}}function hg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;lu.set(i),n.uniformMatrix4fv(this.addr,!1,lu),Ne(e,i)}}function ug(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Ne(e,t)}}function fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Ne(e,t)}}function pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Ne(e,t)}}function mg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Ne(e,t)}}function xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Ne(e,t)}}function vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Ne(e,t)}}function yg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ru.compareFunction=Yu,r=ru):r=Qu,e.setTexture2D(t||r,s)}function _g(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ed,s)}function bg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||id,s)}function Mg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||td,s)}function Sg(n){switch(n){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Mg}}function wg(n,t){n.uniform1fv(this.addr,t)}function Tg(n,t){let e=As(t,this.size,2);n.uniform2fv(this.addr,e)}function Eg(n,t){let e=As(t,this.size,3);n.uniform3fv(this.addr,e)}function Ag(n,t){let e=As(t,this.size,4);n.uniform4fv(this.addr,e)}function Rg(n,t){let e=As(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cg(n,t){let e=As(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Pg(n,t){let e=As(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ig(n,t){n.uniform1iv(this.addr,t)}function Lg(n,t){n.uniform2iv(this.addr,t)}function Dg(n,t){n.uniform3iv(this.addr,t)}function kg(n,t){n.uniform4iv(this.addr,t)}function Ug(n,t){n.uniform1uiv(this.addr,t)}function Ng(n,t){n.uniform2uiv(this.addr,t)}function Fg(n,t){n.uniform3uiv(this.addr,t)}function Og(n,t){n.uniform4uiv(this.addr,t)}function Bg(n,t,e){let i=this.cache,s=t.length,r=Pa(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Qu,r[a])}function zg(n,t,e){let i=this.cache,s=t.length,r=Pa(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ed,r[a])}function Hg(n,t,e){let i=this.cache,s=t.length,r=Pa(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||id,r[a])}function Vg(n,t,e){let i=this.cache,s=t.length,r=Pa(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||td,r[a])}function Gg(n){switch(n){case 5126:return wg;case 35664:return Tg;case 35665:return Eg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return kg;case 5125:return Ug;case 36294:return Ng;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}var Wl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Sg(e.type)}},Xl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gg(e.type)}},$l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},$o=/(\w+)(\])?(\[|\.)?/g;function uu(n,t){n.seq.push(t),n.map[t.id]=t}function Wg(n,t,e){let i=n.name,s=i.length;for($o.lastIndex=0;;){let r=$o.exec(i),a=$o.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){uu(e,c===void 0?new Wl(o,n,t):new Xl(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new $l(o),uu(e,u)),e=u}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Wg(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function du(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Xg=37297,$g=0;function qg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var fu=new Bt;function Yg(n){$t._getMatrix(fu,$t.workingColorSpace,n);let t=`mat3( ${fu.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(n)){case Ca:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+qg(n.getShaderSource(t),a)}else return s}function Kg(n,t){let e=Yg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zg(n,t){let e;switch(t){case Cc:e="Linear";break;case Pc:e="Reinhard";break;case Ic:e="Cineon";break;case lr:e="ACESFilmic";break;case Lc:e="AgX";break;case Dc:e="Neutral";break;case Rf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hr=new A;function Jg(){$t.getLuminanceCoefficients(Hr);let n=Hr.x.toFixed(4),t=Hr.y.toFixed(4),e=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function Qg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Zs(n){return n!==""}function mu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace(ex,nx)}var ix=new Map;function nx(n,t){let e=Ht[t];if(e===void 0){let i=ix.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ql(e)}var sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(n){return n.replace(sx,rx)}function rx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ax(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function ox(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gs:case xs:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function cx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ef:t="ENVMAP_BLENDING_MIX";break;case Af:t="ENVMAP_BLENDING_ADD";break}return t}function hx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ux(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ax(e),c=ox(e),h=lx(e),u=cx(e),d=hx(e),f=jg(e),g=Qg(r),x=s.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(m=[vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==mn?Zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Kg("linearToOutputTexel",e.outputColorSpace),Jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),a=ql(a),a=mu(a,e),a=gu(a,e),o=ql(o),o=mu(o,e),o=gu(o,e),a=xu(a),o=xu(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=y+m+a,b=y+p+o,D=du(s,s.VERTEX_SHADER,w),E=du(s,s.FRAGMENT_SHADER,b);s.attachShader(x,D),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(C){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(E).trim(),J=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,D,E);else{let et=pu(s,D,"vertex"),X=pu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+et+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||G==="")&&($=!1);$&&(C.diagnostics={runnable:J,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(D),s.deleteShader(E),P=new fs(s,x),S=tx(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Xg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$g++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=E,this}var dx=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Kl(t),e.set(t,i)),i}},Kl=class{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}};function fx(n,t,e,i,s,r,a){let o=new ra,l=new Yl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,C,V,B){let G=V.fog,J=B.geometry,$=S.isMeshStandardMaterial?V.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||$),X=et&&et.mapping===Ra?et.image.height:null,ot=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let pt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Et=pt!==void 0?pt.length:0,Wt=0;J.morphAttributes.position!==void 0&&(Wt=1),J.morphAttributes.normal!==void 0&&(Wt=2),J.morphAttributes.color!==void 0&&(Wt=3);let ue,Y,nt,Mt;if(ot){let le=Li[ot];ue=le.vertexShader,Y=le.fragmentShader}else ue=S.vertexShader,Y=S.fragmentShader,l.update(S),nt=l.getVertexShaderID(S),Mt=l.getFragmentShaderID(S);let lt=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),Nt=B.isInstancedMesh===!0,Xt=B.isBatchedMesh===!0,Se=!!S.map,Qt=!!S.matcap,Pe=!!et,U=!!S.aoMap,pi=!!S.lightMap,qt=!!S.bumpMap,Yt=!!S.normalMap,It=!!S.displacementMap,xe=!!S.emissiveMap,Rt=!!S.metalnessMap,T=!!S.roughnessMap,v=S.anisotropy>0,O=S.clearcoat>0,K=S.dispersion>0,Q=S.iridescence>0,q=S.sheen>0,St=S.transmission>0,ct=v&&!!S.anisotropyMap,mt=O&&!!S.clearcoatMap,te=O&&!!S.clearcoatNormalMap,tt=O&&!!S.clearcoatRoughnessMap,gt=Q&&!!S.iridescenceMap,Lt=Q&&!!S.iridescenceThicknessMap,kt=q&&!!S.sheenColorMap,xt=q&&!!S.sheenRoughnessMap,Kt=!!S.specularMap,zt=!!S.specularColorMap,fe=!!S.specularIntensityMap,I=St&&!!S.transmissionMap,at=St&&!!S.thicknessMap,W=!!S.gradientMap,Z=!!S.alphaMap,dt=S.alphaTest>0,ht=!!S.alphaHash,Ft=!!S.extensions,Ee=mn;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ee=n.toneMapping);let Xe={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:ue,fragmentShader:Y,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&B._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&B.instanceColor!==null,instancingMorph:Nt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Es,alphaToCoverage:!!S.alphaToCoverage,map:Se,matcap:Qt,envMap:Pe,envMapMode:Pe&&et.mapping,envMapCubeUVHeight:X,aoMap:U,lightMap:pi,bumpMap:qt,normalMap:Yt,displacementMap:d&&It,emissiveMap:xe,normalMapObjectSpace:Yt&&S.normalMapType===Lf,normalMapTangentSpace:Yt&&S.normalMapType===Hc,metalnessMap:Rt,roughnessMap:T,anisotropy:v,anisotropyMap:ct,clearcoat:O,clearcoatMap:mt,clearcoatNormalMap:te,clearcoatRoughnessMap:tt,dispersion:K,iridescence:Q,iridescenceMap:gt,iridescenceThicknessMap:Lt,sheen:q,sheenColorMap:kt,sheenRoughnessMap:xt,specularMap:Kt,specularColorMap:zt,specularIntensityMap:fe,transmission:St,transmissionMap:I,thicknessMap:at,gradientMap:W,opaque:S.transparent===!1&&S.blending===pn&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:dt,alphaHash:ht,combine:S.combine,mapUv:Se&&x(S.map.channel),aoMapUv:U&&x(S.aoMap.channel),lightMapUv:pi&&x(S.lightMap.channel),bumpMapUv:qt&&x(S.bumpMap.channel),normalMapUv:Yt&&x(S.normalMap.channel),displacementMapUv:It&&x(S.displacementMap.channel),emissiveMapUv:xe&&x(S.emissiveMap.channel),metalnessMapUv:Rt&&x(S.metalnessMap.channel),roughnessMapUv:T&&x(S.roughnessMap.channel),anisotropyMapUv:ct&&x(S.anisotropyMap.channel),clearcoatMapUv:mt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:xt&&x(S.sheenRoughnessMap.channel),specularMapUv:Kt&&x(S.specularMap.channel),specularColorMapUv:zt&&x(S.specularColorMap.channel),specularIntensityMapUv:fe&&x(S.specularIntensityMap.channel),transmissionMapUv:I&&x(S.transmissionMap.channel),thicknessMapUv:at&&x(S.thicknessMap.channel),alphaMapUv:Z&&x(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Yt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(Se||Z),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===oe,decodeVideoTextureEmissive:xe&&S.emissiveMap.isVideoTexture===!0&&$t.getTransfer(S.emissiveMap.colorSpace)===oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Oe,flipSided:S.side===Be,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(y(M,S),w(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){let M=g[S.type],C;if(M){let V=Li[M];C=yn.clone(V.uniforms)}else C=S.uniforms;return C}function D(S,M){let C;for(let V=0,B=h.length;V<B;V++){let G=h[V];if(G.cacheKey===M){C=G,++C.usedTimes;break}}return C===void 0&&(C=new ux(n,M,S,r),h.push(C)),C}function E(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:D,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:P}}function px(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function mx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function yu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _u(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,f,g,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||mx),i.length>1&&i.sort(d||yu),s.length>1&&s.sort(d||yu)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function gx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new _u,n.set(i,[a])):s>=r.length?(a=new _u,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function xx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Ct};break;case"SpotLight":e={position:new A,direction:new A,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function vx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var yx=0;function _x(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function bx(n){let t=new xx,e=vx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let s=new A,r=new ie,a=new ie;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,w=0,b=0,D=0,E=0,R=0;c.sort(_x);for(let S=0,M=c.length;S<M;S++){let C=c[S],V=C.color,B=C.intensity,G=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=V.r*B,u+=V.g*B,d+=V.b*B;else if(C.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(C.sh.coefficients[$],B);R++}else if(C.isDirectionalLight){let $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let et=C.shadow,X=e.get(C);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=C.shadow.matrix,y++}i.directional[f]=$,f++}else if(C.isSpotLight){let $=t.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(V).multiplyScalar(B),$.distance=G,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,i.spot[x]=$;let et=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,et.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[x]=et.matrix,C.castShadow){let X=e.get(C);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=J,b++}x++}else if(C.isRectAreaLight){let $=t.get(C);$.color.copy(V).multiplyScalar(B),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=$,m++}else if(C.isPointLight){let $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){let et=C.shadow,X=e.get(C);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,X.shadowCameraNear=et.camera.near,X.shadowCameraFar=et.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=$,g++}else if(C.isHemisphereLight){let $=t.get(C);$.skyColor.copy(C.color).multiplyScalar(B),$.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==w||P.numSpotShadows!==b||P.numSpotMaps!==D||P.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+D-E,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=w,P.numSpotShadows=b,P.numSpotMaps=D,P.numLightProbes=R,i.version=yx++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let w=c[p];if(w.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(w.isSpotLight){let b=i.spot[f];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let b=i.hemi[x];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function bu(n){let t=new bx(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Mx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new bu(n),t.set(s,[o])):r>=a.length?(o=new bu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Zl=class extends Ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jl=class extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tx(n,t,e){let i=new ir,s=new st,r=new st,a=new he,o=new Zl({depthPacking:If}),l=new Jl,c={},h=e.maxTextureSize,u={[gn]:Be,[Be]:gn,[Oe]:Oe},d=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Sx,fragmentShader:wx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let p=this.type;this.render=function(E,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ui),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let B=p!==$i&&this.type===$i,G=p===$i&&this.type!==$i;for(let J=0,$=E.length;J<$;J++){let et=E[J],X=et.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ot=X.getFrameExtents();if(s.multiply(ot),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,X.mapSize.y=r.y)),X.map===null||B===!0||G===!0){let Et=this.type!==$i?{minFilter:ci,magFilter:ci}:{};X.map!==null&&X.map.dispose(),X.map=new Ve(s.x,s.y,Et),X.map.texture.name=et.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let pt=X.getViewportCount();for(let Et=0;Et<pt;Et++){let Wt=X.getViewport(Et);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),V.viewport(a),X.updateMatrices(et,Et),i=X.getFrustum(),b(R,P,X.camera,et,this.type)}X.isPointLightShadow!==!0&&this.type===$i&&y(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,C)};function y(E,R){let P=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ve(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,P,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,P,f,x,null)}function w(E,R,P,S){let M=null,C=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let V=M.uuid,B=R.uuid,G=c[V];G===void 0&&(G={},c[V]=G);let J=G[B];J===void 0&&(J=M.clone(),G[B]=J,R.addEventListener("dispose",D)),M=J}if(M.visible=R.visible,M.wireframe=R.wireframe,S===$i?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let V=n.properties.get(M);V.light=P}return M}function b(E,R,P,S,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===$i)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let B=t.update(E),G=E.material;if(Array.isArray(G)){let J=B.groups;for(let $=0,et=J.length;$<et;$++){let X=J[$],ot=G[X.materialIndex];if(ot&&ot.visible){let pt=w(E,ot,S,M);E.onBeforeShadow(n,E,R,P,B,pt,X),n.renderBufferDirect(P,null,B,pt,E,X),E.onAfterShadow(n,E,R,P,B,pt,X)}}}else if(G.visible){let J=w(E,G,S,M);E.onBeforeShadow(n,E,R,P,B,J,null),n.renderBufferDirect(P,null,B,J,E,null),E.onAfterShadow(n,E,R,P,B,J,null)}}let V=E.children;for(let B=0,G=V.length;B<G;B++)b(V[B],R,P,S,M)}function D(E){E.target.removeEventListener("dispose",D);for(let P in c){let S=c[P],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Ex={[el]:il,[nl]:al,[sl]:ol,[ms]:rl,[il]:el,[al]:nl,[ol]:sl,[rl]:ms};function Ax(n,t){function e(){let I=!1,at=new he,W=null,Z=new he(0,0,0,0);return{setMask:function(dt){W!==dt&&!I&&(n.colorMask(dt,dt,dt,dt),W=dt)},setLocked:function(dt){I=dt},setClear:function(dt,ht,Ft,Ee,Xe){Xe===!0&&(dt*=Ee,ht*=Ee,Ft*=Ee),at.set(dt,ht,Ft,Ee),Z.equals(at)===!1&&(n.clearColor(dt,ht,Ft,Ee),Z.copy(at))},reset:function(){I=!1,W=null,Z.set(-1,0,0,0)}}}function i(){let I=!1,at=!1,W=null,Z=null,dt=null;return{setReversed:function(ht){if(at!==ht){let Ft=t.get("EXT_clip_control");at?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let Ee=dt;dt=null,this.setClear(Ee)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?lt(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(ht){W!==ht&&!I&&(n.depthMask(ht),W=ht)},setFunc:function(ht){if(at&&(ht=Ex[ht]),Z!==ht){switch(ht){case el:n.depthFunc(n.NEVER);break;case il:n.depthFunc(n.ALWAYS);break;case nl:n.depthFunc(n.LESS);break;case ms:n.depthFunc(n.LEQUAL);break;case sl:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case al:n.depthFunc(n.GREATER);break;case ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ht}},setLocked:function(ht){I=ht},setClear:function(ht){dt!==ht&&(at&&(ht=1-ht),n.clearDepth(ht),dt=ht)},reset:function(){I=!1,W=null,Z=null,dt=null,at=!1}}}function s(){let I=!1,at=null,W=null,Z=null,dt=null,ht=null,Ft=null,Ee=null,Xe=null;return{setTest:function(le){I||(le?lt(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(le){at!==le&&!I&&(n.stencilMask(le),at=le)},setFunc:function(le,bi,Bi){(W!==le||Z!==bi||dt!==Bi)&&(n.stencilFunc(le,bi,Bi),W=le,Z=bi,dt=Bi)},setOp:function(le,bi,Bi){(ht!==le||Ft!==bi||Ee!==Bi)&&(n.stencilOp(le,bi,Bi),ht=le,Ft=bi,Ee=Bi)},setLocked:function(le){I=le},setClear:function(le){Xe!==le&&(n.clearStencil(le),Xe=le)},reset:function(){I=!1,at=null,W=null,Z=null,dt=null,ht=null,Ft=null,Ee=null,Xe=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,w=null,b=null,D=null,E=null,R=new Ct(0,0,0),P=0,S=!1,M=null,C=null,V=null,B=null,G=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,et=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=et>=2);let ot=null,pt={},Et=n.getParameter(n.SCISSOR_BOX),Wt=n.getParameter(n.VIEWPORT),ue=new he().fromArray(Et),Y=new he().fromArray(Wt);function nt(I,at,W,Z){let dt=new Uint8Array(4),ht=n.createTexture();n.bindTexture(I,ht),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<W;Ft++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(at+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return ht}let Mt={};Mt[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),Mt[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Mt[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(n.DEPTH_TEST),a.setFunc(ms),qt(!1),Yt(wh),lt(n.CULL_FACE),U(Ui);function lt(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Dt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Nt(I,at){return u[I]!==at?(n.bindFramebuffer(I,at),u[I]=at,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=at),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=at),!0):!1}function Xt(I,at){let W=f,Z=!1;if(I){W=d.get(at),W===void 0&&(W=[],d.set(at,W));let dt=I.textures;if(W.length!==dt.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Ft=dt.length;ht<Ft;ht++)W[ht]=n.COLOR_ATTACHMENT0+ht;W.length=dt.length,Z=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,Z=!0);Z&&n.drawBuffers(W)}function Se(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let Qt={[Dn]:n.FUNC_ADD,[cf]:n.FUNC_SUBTRACT,[hf]:n.FUNC_REVERSE_SUBTRACT};Qt[uf]=n.MIN,Qt[df]=n.MAX;let Pe={[ff]:n.ZERO,[pf]:n.ONE,[mf]:n.SRC_COLOR,[Qo]:n.SRC_ALPHA,[bf]:n.SRC_ALPHA_SATURATE,[yf]:n.DST_COLOR,[xf]:n.DST_ALPHA,[gf]:n.ONE_MINUS_SRC_COLOR,[tl]:n.ONE_MINUS_SRC_ALPHA,[_f]:n.ONE_MINUS_DST_COLOR,[vf]:n.ONE_MINUS_DST_ALPHA,[Mf]:n.CONSTANT_COLOR,[Sf]:n.ONE_MINUS_CONSTANT_COLOR,[wf]:n.CONSTANT_ALPHA,[Tf]:n.ONE_MINUS_CONSTANT_ALPHA};function U(I,at,W,Z,dt,ht,Ft,Ee,Xe,le){if(I===Ui){x===!0&&(Dt(n.BLEND),x=!1);return}if(x===!1&&(lt(n.BLEND),x=!0),I!==lf){if(I!==m||le!==S){if((p!==Dn||b!==Dn)&&(n.blendEquation(n.FUNC_ADD),p=Dn,b=Dn),le)switch(I){case pn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ps:n.blendFunc(n.ONE,n.ONE);break;case Th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case pn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ps:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,w=null,D=null,E=null,R.set(0,0,0),P=0,m=I,S=le}return}dt=dt||at,ht=ht||W,Ft=Ft||Z,(at!==p||dt!==b)&&(n.blendEquationSeparate(Qt[at],Qt[dt]),p=at,b=dt),(W!==y||Z!==w||ht!==D||Ft!==E)&&(n.blendFuncSeparate(Pe[W],Pe[Z],Pe[ht],Pe[Ft]),y=W,w=Z,D=ht,E=Ft),(Ee.equals(R)===!1||Xe!==P)&&(n.blendColor(Ee.r,Ee.g,Ee.b,Xe),R.copy(Ee),P=Xe),m=I,S=!1}function pi(I,at){I.side===Oe?Dt(n.CULL_FACE):lt(n.CULL_FACE);let W=I.side===Be;at&&(W=!W),qt(W),I.blending===pn&&I.transparent===!1?U(Ui):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function qt(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Yt(I){I!==af?(lt(n.CULL_FACE),I!==C&&(I===wh?n.cullFace(n.BACK):I===of?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),C=I}function It(I){I!==V&&($&&n.lineWidth(I),V=I)}function xe(I,at,W){I?(lt(n.POLYGON_OFFSET_FILL),(B!==at||G!==W)&&(n.polygonOffset(at,W),B=at,G=W)):Dt(n.POLYGON_OFFSET_FILL)}function Rt(I){I?lt(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function T(I){I===void 0&&(I=n.TEXTURE0+J-1),ot!==I&&(n.activeTexture(I),ot=I)}function v(I,at,W){W===void 0&&(ot===null?W=n.TEXTURE0+J-1:W=ot);let Z=pt[W];Z===void 0&&(Z={type:void 0,texture:void 0},pt[W]=Z),(Z.type!==I||Z.texture!==at)&&(ot!==W&&(n.activeTexture(W),ot=W),n.bindTexture(I,at||Mt[I]),Z.type=I,Z.texture=at)}function O(){let I=pt[ot];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(I){ue.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ue.copy(I))}function xt(I){Y.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Kt(I,at){let W=c.get(at);W===void 0&&(W=new WeakMap,c.set(at,W));let Z=W.get(I);Z===void 0&&(Z=n.getUniformBlockIndex(at,I.name),W.set(I,Z))}function zt(I,at){let Z=c.get(at).get(I);l.get(at)!==Z&&(n.uniformBlockBinding(at,Z,I.__bindingPointIndex),l.set(at,Z))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ot=null,pt={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,w=null,b=null,D=null,E=null,R=new Ct(0,0,0),P=0,S=!1,M=null,C=null,V=null,B=null,G=null,ue.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Dt,bindFramebuffer:Nt,drawBuffers:Xt,useProgram:Se,setBlending:U,setMaterial:pi,setFlipSided:qt,setCullFace:Yt,setLineWidth:It,setPolygonOffset:xe,setScissorTest:Rt,activeTexture:T,bindTexture:v,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:gt,texImage3D:Lt,updateUBOMapping:Kt,uniformBlockBinding:zt,texStorage2D:te,texStorage3D:tt,texSubImage2D:q,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:kt,viewport:xt,reset:fe}}function Mu(n,t,e,i){let s=Rx(i);switch(e){case Vu:return n*t;case Wu:return n*t;case Xu:return n*t*2;case Fc:return n*t/s.components*s.byteLength;case Oc:return n*t/s.components*s.byteLength;case $u:return n*t*2/s.components*s.byteLength;case Bc:return n*t*2/s.components*s.byteLength;case Gu:return n*t*3/s.components*s.byteLength;case Ei:return n*t*4/s.components*s.byteLength;case zc:return n*t*4/s.components*s.byteLength;case Kr:case Zr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Jr:case jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:case pl:return Math.max(n,16)*Math.max(t,8)/4;case ul:case fl:return Math.max(n,8)*Math.max(t,8)/2;case ml:case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qr:case Ll:case Dl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case qu:case kl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ul:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rx(n){switch(n){case Zi:case Bu:return{byteLength:1,components:1};case tr:case zu:case hi:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case On:case kc:case ki:return{byteLength:4,components:1};case Hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Cx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):ia("canvas")}function x(T,v,O){let K=1,Q=Rt(T);if((Q.width>O||Q.height>O)&&(K=O/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let q=Math.floor(K*Q.width),St=Math.floor(K*Q.height);u===void 0&&(u=g(q,St));let ct=v?g(q,St):u;return ct.width=q,ct.height=St,ct.getContext("2d").drawImage(T,0,0,q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+St+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(T,v,O,K,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=v;if(v===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),v===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),v===n.RGBA){let St=Q?Ca:$t.getTransfer(K);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=St===oe?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function b(T,v){let O;return T?v===null||v===On||v===vs?O=n.DEPTH24_STENCIL8:v===ki?O=n.DEPTH32F_STENCIL8:v===tr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===On||v===vs?O=n.DEPTH_COMPONENT24:v===ki?O=n.DEPTH_COMPONENT32F:v===tr&&(O=n.DEPTH_COMPONENT16),O}function D(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ci&&T.minFilter!==Di?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function E(T){let v=T.target;v.removeEventListener("dispose",E),P(v),v.isVideoTexture&&h.delete(v)}function R(T){let v=T.target;v.removeEventListener("dispose",R),M(v)}function P(T){let v=i.get(T);if(v.__webglInit===void 0)return;let O=T.source,K=d.get(O);if(K){let Q=K[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(T),Object.keys(K).length===0&&d.delete(O)}i.remove(T)}function S(T){let v=i.get(T);n.deleteTexture(v.__webglTexture);let O=T.source,K=d.get(O);delete K[v.__cacheKey],a.memory.textures--}function M(T){let v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let Q=0;Q<v.__webglFramebuffer[K].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[K][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=T.textures;for(let K=0,Q=O.length;K<Q;K++){let q=i.get(O[K]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[K])}i.remove(T)}let C=0;function V(){C=0}function B(){let T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function G(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function J(T,v){let O=i.get(T);if(T.isVideoTexture&&It(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){let K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,v);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function $(T,v){let O=i.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function et(T,v){let O=i.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function X(T,v){let O=i.get(T);if(T.version>0&&O.__version!==T.version){nt(O,T,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let ot={[xn]:n.REPEAT,[Nn]:n.CLAMP_TO_EDGE,[hl]:n.MIRRORED_REPEAT},pt={[ci]:n.NEAREST,[Cf]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[Di]:n.LINEAR,[xo]:n.LINEAR_MIPMAP_NEAREST,[Fn]:n.LINEAR_MIPMAP_LINEAR},Et={[Df]:n.NEVER,[Bf]:n.ALWAYS,[kf]:n.LESS,[Yu]:n.LEQUAL,[Uf]:n.EQUAL,[Of]:n.GEQUAL,[Nf]:n.GREATER,[Ff]:n.NOTEQUAL};function Wt(T,v){if(v.type===ki&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Di||v.magFilter===xo||v.magFilter===br||v.magFilter===Fn||v.minFilter===Di||v.minFilter===xo||v.minFilter===br||v.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ot[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ot[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ot[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,pt[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,pt[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ci||v.minFilter!==br&&v.minFilter!==Fn||v.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ue(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",E));let K=v.source,Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));let q=G(v);if(q!==T.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[q].usedTimes++;let St=Q[T.__cacheKey];St!==void 0&&(Q[T.__cacheKey].usedTimes--,St.usedTimes===0&&S(v)),T.__cacheKey=q,T.__webglTexture=Q[q].texture}return O}function Y(T,v,O){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);let Q=ue(T,v),q=v.source;e.bindTexture(K,T.__webglTexture,n.TEXTURE0+O);let St=i.get(q);if(q.version!==St.__version||Q===!0){e.activeTexture(n.TEXTURE0+O);let ct=$t.getPrimaries($t.workingColorSpace),mt=v.colorSpace===fn?null:$t.getPrimaries(v.colorSpace),te=v.colorSpace===fn||ct===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let tt=x(v.image,!1,s.maxTextureSize);tt=xe(v,tt);let gt=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type),kt=w(v.internalFormat,gt,Lt,v.colorSpace,v.isVideoTexture);Wt(K,v);let xt,Kt=v.mipmaps,zt=v.isVideoTexture!==!0,fe=St.__version===void 0||Q===!0,I=q.dataReady,at=D(v,tt);if(v.isDepthTexture)kt=b(v.format===ys,v.type),fe&&(zt?e.texStorage2D(n.TEXTURE_2D,1,kt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,kt,tt.width,tt.height,0,gt,Lt,null));else if(v.isDataTexture)if(Kt.length>0){zt&&fe&&e.texStorage2D(n.TEXTURE_2D,at,kt,Kt[0].width,Kt[0].height);for(let W=0,Z=Kt.length;W<Z;W++)xt=Kt[W],zt?I&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,xt.width,xt.height,gt,Lt,xt.data):e.texImage2D(n.TEXTURE_2D,W,kt,xt.width,xt.height,0,gt,Lt,xt.data);v.generateMipmaps=!1}else zt?(fe&&e.texStorage2D(n.TEXTURE_2D,at,kt,tt.width,tt.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,gt,Lt,tt.data)):e.texImage2D(n.TEXTURE_2D,0,kt,tt.width,tt.height,0,gt,Lt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,kt,Kt[0].width,Kt[0].height,tt.depth);for(let W=0,Z=Kt.length;W<Z;W++)if(xt=Kt[W],v.format!==Ei)if(gt!==null)if(zt){if(I)if(v.layerUpdates.size>0){let dt=Mu(xt.width,xt.height,v.format,v.type);for(let ht of v.layerUpdates){let Ft=xt.data.subarray(ht*dt/xt.data.BYTES_PER_ELEMENT,(ht+1)*dt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ht,xt.width,xt.height,1,gt,Ft)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,tt.depth,gt,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,kt,xt.width,xt.height,tt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,tt.depth,gt,Lt,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,W,kt,xt.width,xt.height,tt.depth,0,gt,Lt,xt.data)}else{zt&&fe&&e.texStorage2D(n.TEXTURE_2D,at,kt,Kt[0].width,Kt[0].height);for(let W=0,Z=Kt.length;W<Z;W++)xt=Kt[W],v.format!==Ei?gt!==null?zt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,W,kt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?I&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,xt.width,xt.height,gt,Lt,xt.data):e.texImage2D(n.TEXTURE_2D,W,kt,xt.width,xt.height,0,gt,Lt,xt.data)}else if(v.isDataArrayTexture)if(zt){if(fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,kt,tt.width,tt.height,tt.depth),I)if(v.layerUpdates.size>0){let W=Mu(tt.width,tt.height,v.format,v.type);for(let Z of v.layerUpdates){let dt=tt.data.subarray(Z*W/tt.data.BYTES_PER_ELEMENT,(Z+1)*W/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,gt,Lt,dt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,gt,Lt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,kt,tt.width,tt.height,tt.depth,0,gt,Lt,tt.data);else if(v.isData3DTexture)zt?(fe&&e.texStorage3D(n.TEXTURE_3D,at,kt,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,gt,Lt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,kt,tt.width,tt.height,tt.depth,0,gt,Lt,tt.data);else if(v.isFramebufferTexture){if(fe)if(zt)e.texStorage2D(n.TEXTURE_2D,at,kt,tt.width,tt.height);else{let W=tt.width,Z=tt.height;for(let dt=0;dt<at;dt++)e.texImage2D(n.TEXTURE_2D,dt,kt,W,Z,0,gt,Lt,null),W>>=1,Z>>=1}}else if(Kt.length>0){if(zt&&fe){let W=Rt(Kt[0]);e.texStorage2D(n.TEXTURE_2D,at,kt,W.width,W.height)}for(let W=0,Z=Kt.length;W<Z;W++)xt=Kt[W],zt?I&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,gt,Lt,xt):e.texImage2D(n.TEXTURE_2D,W,kt,gt,Lt,xt);v.generateMipmaps=!1}else if(zt){if(fe){let W=Rt(tt);e.texStorage2D(n.TEXTURE_2D,at,kt,W.width,W.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Lt,tt)}else e.texImage2D(n.TEXTURE_2D,0,kt,gt,Lt,tt);m(v)&&p(K),St.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function nt(T,v,O){if(v.image.length!==6)return;let K=ue(T,v),Q=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);let q=i.get(Q);if(Q.version!==q.__version||K===!0){e.activeTexture(n.TEXTURE0+O);let St=$t.getPrimaries($t.workingColorSpace),ct=v.colorSpace===fn?null:$t.getPrimaries(v.colorSpace),mt=v.colorSpace===fn||St===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let te=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!te&&!tt?gt[Z]=x(v.image[Z],!0,s.maxCubemapSize):gt[Z]=tt?v.image[Z].image:v.image[Z],gt[Z]=xe(v,gt[Z]);let Lt=gt[0],kt=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),Kt=w(v.internalFormat,kt,xt,v.colorSpace),zt=v.isVideoTexture!==!0,fe=q.__version===void 0||K===!0,I=Q.dataReady,at=D(v,Lt);Wt(n.TEXTURE_CUBE_MAP,v);let W;if(te){zt&&fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Kt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){W=gt[Z].mipmaps;for(let dt=0;dt<W.length;dt++){let ht=W[dt];v.format!==Ei?kt!==null?zt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,0,0,ht.width,ht.height,kt,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,Kt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,0,0,ht.width,ht.height,kt,xt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,Kt,ht.width,ht.height,0,kt,xt,ht.data)}}}else{if(W=v.mipmaps,zt&&fe){W.length>0&&at++;let Z=Rt(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,kt,xt,gt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Kt,gt[Z].width,gt[Z].height,0,kt,xt,gt[Z].data);for(let dt=0;dt<W.length;dt++){let Ft=W[dt].image[Z].image;zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,0,0,Ft.width,Ft.height,kt,xt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,Kt,Ft.width,Ft.height,0,kt,xt,Ft.data)}}else{zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,kt,xt,gt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Kt,kt,xt,gt[Z]);for(let dt=0;dt<W.length;dt++){let ht=W[dt];zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,0,0,kt,xt,ht.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,Kt,kt,xt,ht.image[Z])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),q.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Mt(T,v,O,K,Q,q){let St=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),mt=w(O.internalFormat,St,ct,O.colorSpace),te=i.get(v),tt=i.get(O);if(tt.__renderTarget=v,!te.__hasExternalTextures){let gt=Math.max(1,v.width>>q),Lt=Math.max(1,v.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,mt,gt,Lt,v.depth,0,St,ct,null):e.texImage2D(Q,q,mt,gt,Lt,0,St,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Yt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Q,tt.__webglTexture,0,qt(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Q,tt.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(T,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){let K=v.depthTexture,Q=K&&K.isDepthTexture?K.type:null,q=b(v.stencilBuffer,Q),St=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=qt(v);Yt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,q,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,T)}else{let K=v.textures;for(let Q=0;Q<K.length;Q++){let q=K[Q],St=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),mt=w(q.internalFormat,St,ct,q.colorSpace),te=qt(v);O&&Yt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,mt,v.width,v.height):Yt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,mt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,mt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);let Q=K.__webglTexture,q=qt(v);if(v.depthTexture.format===us)Yt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===ys)Yt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Nt(T){let v=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let K=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=K}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Dt(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=n.createRenderbuffer(),lt(v.__webglDepthbuffer[K],T,!1);else{let Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),lt(v.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(T,v,O){let K=i.get(T);v!==void 0&&Mt(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Nt(T)}function Se(T){let v=T.texture,O=i.get(T),K=i.get(v);T.addEventListener("dispose",R);let Q=T.textures,q=T.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let mt=0;mt<v.mipmaps.length;mt++)O.__webglFramebuffer[ct][mt]=n.createFramebuffer()}else O.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)O.__webglFramebuffer[ct]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(St)for(let ct=0,mt=Q.length;ct<mt;ct++){let te=i.get(Q[ct]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Yt(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){let mt=Q[ct];O.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);let te=r.convert(mt.format,mt.colorSpace),tt=r.convert(mt.type),gt=w(mt.internalFormat,te,tt,mt.colorSpace,T.isXRRenderTarget===!0),Lt=qt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,gt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Wt(n.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)Mt(O.__webglFramebuffer[ct][mt],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else Mt(O.__webglFramebuffer[ct],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,mt=Q.length;ct<mt;ct++){let te=Q[ct],tt=i.get(te);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),Wt(n.TEXTURE_2D,te),Mt(O.__webglFramebuffer,T,te,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(te)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,K.__webglTexture),Wt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)Mt(O.__webglFramebuffer[mt],T,v,n.COLOR_ATTACHMENT0,ct,mt);else Mt(O.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,ct,0);m(v)&&p(ct),e.unbindTexture()}T.depthBuffer&&Nt(T)}function Qt(T){let v=T.textures;for(let O=0,K=v.length;O<K;O++){let Q=v[O];if(m(Q)){let q=y(T),St=i.get(Q).__webglTexture;e.bindTexture(q,St),p(q),e.unbindTexture()}}}let Pe=[],U=[];function pi(T){if(T.samples>0){if(Yt(T)===!1){let v=T.textures,O=T.width,K=T.height,Q=n.COLOR_BUFFER_BIT,q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(T),ct=v.length>1;if(ct)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);let te=i.get(v[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,Q,n.NEAREST),l===!0&&(Pe.length=0,U.length=0,Pe.push(n.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Pe.push(q),U.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);let te=i.get(v[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,te,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function qt(T){return Math.min(s.maxSamples,T.samples)}function Yt(T){let v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function It(T){let v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function xe(T,v){let O=T.colorSpace,K=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Es&&O!==fn&&($t.getTransfer(O)===oe?(K!==Ei||Q!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=et,this.setTextureCube=X,this.rebindTextures=Xt,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=pi,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Yt}function Px(n,t){function e(i,s=fn){let r,a=$t.getTransfer(s);if(i===Zi)return n.UNSIGNED_BYTE;if(i===Uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bu)return n.BYTE;if(i===zu)return n.SHORT;if(i===tr)return n.UNSIGNED_SHORT;if(i===kc)return n.INT;if(i===On)return n.UNSIGNED_INT;if(i===ki)return n.FLOAT;if(i===hi)return n.HALF_FLOAT;if(i===Vu)return n.ALPHA;if(i===Gu)return n.RGB;if(i===Ei)return n.RGBA;if(i===Wu)return n.LUMINANCE;if(i===Xu)return n.LUMINANCE_ALPHA;if(i===us)return n.DEPTH_COMPONENT;if(i===ys)return n.DEPTH_STENCIL;if(i===Fc)return n.RED;if(i===Oc)return n.RED_INTEGER;if(i===$u)return n.RG;if(i===Bc)return n.RG_INTEGER;if(i===zc)return n.RGBA_INTEGER;if(i===Kr||i===Zr||i===Jr||i===jr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ul||i===dl||i===fl||i===pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ml||i===gl||i===xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ml||i===gl)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vl||i===yl||i===_l||i===bl||i===Ml||i===Sl||i===wl||i===Tl||i===El||i===Al||i===Rl||i===Cl||i===Pl||i===Il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_l)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===El)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Al)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qr||i===Ll||i===Dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Qr)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qu||i===kl||i===Ul||i===Nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var jl=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xi=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ix={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new xi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new ei,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Re({vertexShader:Lx,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tc=class extends vn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Ql,m=e.getContextAttributes(),p=null,y=null,w=[],b=[],D=new st,E=null,R=new Ye;R.viewport=new he;let P=new Ye;P.viewport=new he;let S=[R,P],M=new jl,C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=w[Y];return nt===void 0&&(nt=new Js,w[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=w[Y];return nt===void 0&&(nt=new Js,w[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=w[Y];return nt===void 0&&(nt=new Js,w[Y]=nt),nt.getHandSpace()};function B(Y){let nt=b.indexOf(Y.inputSource);if(nt===-1)return;let Mt=w[nt];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let Y=0;Y<w.length;Y++){let nt=b[Y];nt!==null&&(b[Y]=null,w[Y].disconnect(nt))}C=null,V=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,ue.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ve(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,Mt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?ys:us,Mt=m.stencil?vs:On);let Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ve(d.textureWidth,d.textureHeight,{format:Ei,type:Zi,depthTexture:new ha(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(Y){for(let nt=0;nt<Y.removed.length;nt++){let Mt=Y.removed[nt],lt=b.indexOf(Mt);lt>=0&&(b[lt]=null,w[lt].disconnect(Mt))}for(let nt=0;nt<Y.added.length;nt++){let Mt=Y.added[nt],lt=b.indexOf(Mt);if(lt===-1){for(let Nt=0;Nt<w.length;Nt++)if(Nt>=b.length){b.push(Mt),lt=Nt;break}else if(b[Nt]===null){b[Nt]=Mt,lt=Nt;break}if(lt===-1)break}let Dt=w[lt];Dt&&Dt.connect(Mt)}}let $=new A,et=new A;function X(Y,nt,Mt){$.setFromMatrixPosition(nt.matrixWorld),et.setFromMatrixPosition(Mt.matrixWorld);let lt=$.distanceTo(et),Dt=nt.projectionMatrix.elements,Nt=Mt.projectionMatrix.elements,Xt=Dt[14]/(Dt[10]-1),Se=Dt[14]/(Dt[10]+1),Qt=(Dt[9]+1)/Dt[5],Pe=(Dt[9]-1)/Dt[5],U=(Dt[8]-1)/Dt[0],pi=(Nt[8]+1)/Nt[0],qt=Xt*U,Yt=Xt*pi,It=lt/(-U+pi),xe=It*-U;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xe),Y.translateZ(It),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Dt[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Rt=Xt+It,T=Se+It,v=qt-xe,O=Yt+(lt-xe),K=Qt*Se/T*Rt,Q=Pe*Se/T*Rt;Y.projectionMatrix.makePerspective(v,O,K,Q,Rt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ot(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,Mt=Y.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),M.near=P.near=R.near=nt,M.far=P.far=R.far=Mt,(C!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,V=M.far),R.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,M.layers.mask=R.layers.mask|P.layers.mask;let lt=Y.parent,Dt=M.cameras;ot(M,lt);for(let Nt=0;Nt<Dt.length;Nt++)ot(Dt[Nt],lt);Dt.length===2?X(M,R,P):M.projectionMatrix.copy(R.projectionMatrix),pt(Y,M,lt)};function pt(Y,nt,Mt){Mt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ol*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Et=null;function Wt(Y,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let lt=!1;Mt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Nt=0;Nt<Mt.length;Nt++){let Xt=Mt[Nt],Se=null;if(f!==null)Se=f.getViewport(Xt);else{let Pe=u.getViewSubImage(d,Xt);Se=Pe.viewport,Nt===0&&(t.setRenderTargetTextures(y,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),t.setRenderTarget(y))}let Qt=S[Nt];Qt===void 0&&(Qt=new Ye,Qt.layers.enable(Nt),Qt.viewport=new he,S[Nt]=Qt),Qt.matrix.fromArray(Xt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Xt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Se.x,Se.y,Se.width,Se.height),Nt===0&&(M.matrix.copy(Qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(Qt)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let Nt=u.getDepthInformation(Mt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let Mt=0;Mt<w.length;Mt++){let lt=b[Mt],Dt=w[Mt];lt!==null&&Dt!==void 0&&Dt.update(lt,nt,c||a)}Et&&Et(Y,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}let ue=new ju;ue.setAnimationLoop(Wt),this.setAnimationLoop=function(Y){Et=Y},this.dispose=function(){}}},In=new Ai,kx=new ie;function Ux(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ju(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,w,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),w=y.envMap,b=y.envMapRotation;w&&(m.envMap.value=w,In.copy(b),In.x*=-1,In.y*=-1,In.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),m.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(In)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Nx(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let b=w.program;i.uniformBlockBinding(y,b)}function c(y,w){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));let D=w.program;i.updateUBOMapping(y,D);let E=t.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){let w=u();y.__bindingPointIndex=w;let b=n.createBuffer(),D=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,D,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let w=s[y.id],b=y.uniforms,D=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,R=b.length;E<R;E++){let P=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,M=P.length;S<M;S++){let C=P[S];if(f(C,E,S,D)===!0){let V=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],G=0;for(let J=0;J<B.length;J++){let $=B[J],et=x($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,V+G,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,G),G+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,w,b,D){let E=y.value,R=w+"_"+b;if(D[R]===void 0)return typeof E=="number"||typeof E=="boolean"?D[R]=E:D[R]=E.clone(),!0;{let P=D[R];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return D[R]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(y){let w=y.uniforms,b=0,D=16;for(let R=0,P=w.length;R<P;R++){let S=Array.isArray(w[R])?w[R]:[w[R]];for(let M=0,C=S.length;M<C;M++){let V=S[M],B=Array.isArray(V.value)?V.value:[V.value];for(let G=0,J=B.length;G<J;G++){let $=B[G],et=x($),X=b%D,ot=X%et.boundary,pt=X+ot;b+=ot,pt!==0&&D-pt<et.storage&&(b+=D-pt),V.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=et.storage}}}let E=b%D;return E>0&&(b+=D-E),y.__size=b,y.__cache={},this}function x(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),w}function m(y){let w=y.target;w.removeEventListener("dispose",m);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ua=class{constructor(t={}){let{canvas:e=Hf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this.toneMapping=mn,this.toneMappingExposure=1;let b=this,D=!1,E=0,R=0,P=null,S=-1,M=null,C=new he,V=new he,B=null,G=new Ct(0),J=0,$=e.width,et=e.height,X=1,ot=null,pt=null,Et=new he(0,0,$,et),Wt=new he(0,0,$,et),ue=!1,Y=new ir,nt=!1,Mt=!1,lt=new ie,Dt=new ie,Nt=new A,Xt=new he,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function Pe(){return P===null?X:1}let U=i;function pi(_,L){return e.getContext(_,L)}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ec}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){let L="webgl2";if(U=pi(L,_),U===null)throw pi(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let qt,Yt,It,xe,Rt,T,v,O,K,Q,q,St,ct,mt,te,tt,gt,Lt,kt,xt,Kt,zt,fe,I;function at(){qt=new j0(U),qt.init(),zt=new Px(U,qt),Yt=new $0(U,qt,t,zt),It=new Ax(U,qt),Yt.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),xe=new eg(U),Rt=new px,T=new Cx(U,qt,It,Rt,Yt,zt,xe),v=new Y0(b),O=new J0(b),K=new lp(U),fe=new W0(U,K),Q=new Q0(U,K,xe,fe),q=new ng(U,Q,K,xe),kt=new ig(U,Yt,T),tt=new q0(Rt),St=new fx(b,v,O,qt,Yt,fe,tt),ct=new Ux(b,Rt),mt=new gx,te=new Mx(qt),Lt=new G0(b,v,O,It,q,f,l),gt=new Tx(b,q,Yt),I=new Nx(U,xe,Yt,It),xt=new X0(U,qt,xe),Kt=new tg(U,qt,xe),xe.programs=St.programs,b.capabilities=Yt,b.extensions=qt,b.properties=Rt,b.renderLists=mt,b.shadowMap=gt,b.state=It,b.info=xe}at();let W=new tc(b,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let _=qt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=qt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(_){_!==void 0&&(X=_,this.setSize($,et,!1))},this.getSize=function(_){return _.set($,et)},this.setSize=function(_,L,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=_,et=L,e.width=Math.floor(_*X),e.height=Math.floor(L*X),z===!0&&(e.style.width=_+"px",e.style.height=L+"px"),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set($*X,et*X).floor()},this.setDrawingBufferSize=function(_,L,z){$=_,et=L,X=z,e.width=Math.floor(_*z),e.height=Math.floor(L*z),this.setViewport(0,0,_,L)},this.getCurrentViewport=function(_){return _.copy(C)},this.getViewport=function(_){return _.copy(Et)},this.setViewport=function(_,L,z,H){_.isVector4?Et.set(_.x,_.y,_.z,_.w):Et.set(_,L,z,H),It.viewport(C.copy(Et).multiplyScalar(X).round())},this.getScissor=function(_){return _.copy(Wt)},this.setScissor=function(_,L,z,H){_.isVector4?Wt.set(_.x,_.y,_.z,_.w):Wt.set(_,L,z,H),It.scissor(V.copy(Wt).multiplyScalar(X).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(_){It.setScissorTest(ue=_)},this.setOpaqueSort=function(_){ot=_},this.setTransparentSort=function(_){pt=_},this.getClearColor=function(_){return _.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(_=!0,L=!0,z=!0){let H=0;if(_){let k=!1;if(P!==null){let it=P.texture.format;k=it===zc||it===Bc||it===Oc}if(k){let it=P.texture.type,ut=it===Zi||it===On||it===tr||it===vs||it===Uc||it===Nc,yt=Lt.getClearColor(),_t=Lt.getClearAlpha(),Ut=yt.r,Ot=yt.g,bt=yt.b;ut?(g[0]=Ut,g[1]=Ot,g[2]=bt,g[3]=_t,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Ut,x[1]=Ot,x[2]=bt,x[3]=_t,U.clearBufferiv(U.COLOR,0,x))}else H|=U.COLOR_BUFFER_BIT}L&&(H|=U.DEPTH_BUFFER_BIT),z&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),mt.dispose(),te.dispose(),Rt.dispose(),v.dispose(),O.dispose(),q.dispose(),fe.dispose(),I.dispose(),St.dispose(),W.dispose(),W.removeEventListener("sessionstart",gh),W.removeEventListener("sessionend",xh),Tn.stop()};function Z(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let _=xe.autoReset,L=gt.enabled,z=gt.autoUpdate,H=gt.needsUpdate,k=gt.type;at(),xe.autoReset=_,gt.enabled=L,gt.autoUpdate=z,gt.needsUpdate=H,gt.type=k}function ht(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ft(_){let L=_.target;L.removeEventListener("dispose",Ft),Ee(L)}function Ee(_){Xe(_),Rt.remove(_)}function Xe(_){let L=Rt.get(_).programs;L!==void 0&&(L.forEach(function(z){St.releaseProgram(z)}),_.isShaderMaterial&&St.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,z,H,k,it){L===null&&(L=Se);let ut=k.isMesh&&k.matrixWorld.determinant()<0,yt=nf(_,L,z,H,k);It.setMaterial(H,ut);let _t=z.index,Ut=1;if(H.wireframe===!0){if(_t=Q.getWireframeAttribute(z),_t===void 0)return;Ut=2}let Ot=z.drawRange,bt=z.attributes.position,ee=Ot.start*Ut,pe=(Ot.start+Ot.count)*Ut;it!==null&&(ee=Math.max(ee,it.start*Ut),pe=Math.min(pe,(it.start+it.count)*Ut)),_t!==null?(ee=Math.max(ee,0),pe=Math.min(pe,_t.count)):bt!=null&&(ee=Math.max(ee,0),pe=Math.min(pe,bt.count));let ve=pe-ee;if(ve<0||ve===1/0)return;fe.setup(k,H,yt,z,_t);let Qe,re=xt;if(_t!==null&&(Qe=K.get(_t),re=Kt,re.setIndex(Qe)),k.isMesh)H.wireframe===!0?(It.setLineWidth(H.wireframeLinewidth*Pe()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if(k.isLine){let wt=H.linewidth;wt===void 0&&(wt=1),It.setLineWidth(wt*Pe()),k.isLineSegments?re.setMode(U.LINES):k.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else k.isPoints?re.setMode(U.POINTS):k.isSprite&&re.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)re.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let wt=k._multiDrawStarts,zi=k._multiDrawCounts,ae=k._multiDrawCount,Mi=_t?K.get(_t).bytesPerElement:1,Yn=Rt.get(H).currentProgram.getUniforms();for(let ai=0;ai<ae;ai++)Yn.setValue(U,"_gl_DrawID",ai),re.render(wt[ai]/Mi,zi[ai])}else if(k.isInstancedMesh)re.renderInstances(ee,ve,k.count);else if(z.isInstancedBufferGeometry){let wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,zi=Math.min(z.instanceCount,wt);re.renderInstances(ee,ve,zi)}else re.render(ee,ve)};function le(_,L,z){_.transparent===!0&&_.side===Oe&&_.forceSinglePass===!1?(_.side=Be,_.needsUpdate=!0,_r(_,L,z),_.side=gn,_.needsUpdate=!0,_r(_,L,z),_.side=Oe):_r(_,L,z)}this.compile=function(_,L,z=null){z===null&&(z=_),p=te.get(z),p.init(L),w.push(p),z.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),_!==z&&_.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let H=new Set;return _.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let it=k.material;if(it)if(Array.isArray(it))for(let ut=0;ut<it.length;ut++){let yt=it[ut];le(yt,z,k),H.add(yt)}else le(it,z,k),H.add(it)}),w.pop(),p=null,H},this.compileAsync=function(_,L,z=null){let H=this.compile(_,L,z);return new Promise(k=>{function it(){if(H.forEach(function(ut){Rt.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){k(_);return}setTimeout(it,10)}qt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let bi=null;function Bi(_){bi&&bi(_)}function gh(){Tn.stop()}function xh(){Tn.start()}let Tn=new ju;Tn.setAnimationLoop(Bi),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(_){bi=_,W.setAnimationLoop(_),_===null?Tn.stop():Tn.start()},W.addEventListener("sessionstart",gh),W.addEventListener("sessionend",xh),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),_.isScene===!0&&_.onBeforeRender(b,_,L,P),p=te.get(_,w.length),p.init(L),w.push(p),Dt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Dt),Mt=this.localClippingEnabled,nt=tt.init(this.clippingPlanes,Mt),m=mt.get(_,y.length),m.init(),y.push(m),W.enabled===!0&&W.isPresenting===!0){let it=b.xr.getDepthSensingMesh();it!==null&&go(it,L,-1/0,b.sortObjects)}go(_,L,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ot,pt),Qt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Qt&&Lt.addToRenderList(m,_),this.info.render.frame++,nt===!0&&tt.beginShadows();let z=p.state.shadowsArray;gt.render(z,_,L),nt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,k=m.transmissive;if(p.setupLights(),L.isArrayCamera){let it=L.cameras;if(k.length>0)for(let ut=0,yt=it.length;ut<yt;ut++){let _t=it[ut];yh(H,k,_,_t)}Qt&&Lt.render(_);for(let ut=0,yt=it.length;ut<yt;ut++){let _t=it[ut];vh(m,_,_t,_t.viewport)}}else k.length>0&&yh(H,k,_,L),Qt&&Lt.render(_),vh(m,_,L);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),_.isScene===!0&&_.onAfterRender(b,_,L),fe.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],nt===!0&&tt.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function go(_,L,z,H){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Y.intersectsSprite(_)){H&&Xt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Dt);let ut=q.update(_),yt=_.material;yt.visible&&m.push(_,ut,yt,z,Xt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Y.intersectsObject(_))){let ut=q.update(_),yt=_.material;if(H&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Xt.copy(_.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Xt.copy(ut.boundingSphere.center)),Xt.applyMatrix4(_.matrixWorld).applyMatrix4(Dt)),Array.isArray(yt)){let _t=ut.groups;for(let Ut=0,Ot=_t.length;Ut<Ot;Ut++){let bt=_t[Ut],ee=yt[bt.materialIndex];ee&&ee.visible&&m.push(_,ut,ee,z,Xt.z,bt)}}else yt.visible&&m.push(_,ut,yt,z,Xt.z,null)}}let it=_.children;for(let ut=0,yt=it.length;ut<yt;ut++)go(it[ut],L,z,H)}function vh(_,L,z,H){let k=_.opaque,it=_.transmissive,ut=_.transparent;p.setupLightsView(z),nt===!0&&tt.setGlobalState(b.clippingPlanes,z),H&&It.viewport(C.copy(H)),k.length>0&&yr(k,L,z),it.length>0&&yr(it,L,z),ut.length>0&&yr(ut,L,z),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function yh(_,L,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Ve(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?hi:Zi,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));let it=p.state.transmissionRenderTarget[H.id],ut=H.viewport||C;it.setSize(ut.z,ut.w);let yt=b.getRenderTarget();b.setRenderTarget(it),b.getClearColor(G),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),Qt&&Lt.render(z);let _t=b.toneMapping;b.toneMapping=mn;let Ut=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),nt===!0&&tt.setGlobalState(b.clippingPlanes,H),yr(_,z,H),T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let bt=0,ee=L.length;bt<ee;bt++){let pe=L[bt],ve=pe.object,Qe=pe.geometry,re=pe.material,wt=pe.group;if(re.side===Oe&&ve.layers.test(H.layers)){let zi=re.side;re.side=Be,re.needsUpdate=!0,_h(ve,z,H,Qe,re,wt),re.side=zi,re.needsUpdate=!0,Ot=!0}}Ot===!0&&(T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it))}b.setRenderTarget(yt),b.setClearColor(G,J),Ut!==void 0&&(H.viewport=Ut),b.toneMapping=_t}function yr(_,L,z){let H=L.isScene===!0?L.overrideMaterial:null;for(let k=0,it=_.length;k<it;k++){let ut=_[k],yt=ut.object,_t=ut.geometry,Ut=H===null?ut.material:H,Ot=ut.group;yt.layers.test(z.layers)&&_h(yt,L,z,_t,Ut,Ot)}}function _h(_,L,z,H,k,it){_.onBeforeRender(b,L,z,H,k,it),_.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),k.onBeforeRender(b,L,z,H,_,it),k.transparent===!0&&k.side===Oe&&k.forceSinglePass===!1?(k.side=Be,k.needsUpdate=!0,b.renderBufferDirect(z,L,H,k,_,it),k.side=gn,k.needsUpdate=!0,b.renderBufferDirect(z,L,H,k,_,it),k.side=Oe):b.renderBufferDirect(z,L,H,k,_,it),_.onAfterRender(b,L,z,H,k,it)}function _r(_,L,z){L.isScene!==!0&&(L=Se);let H=Rt.get(_),k=p.state.lights,it=p.state.shadowsArray,ut=k.state.version,yt=St.getParameters(_,k.state,it,L,z),_t=St.getProgramCacheKey(yt),Ut=H.programs;H.environment=_.isMeshStandardMaterial?L.environment:null,H.fog=L.fog,H.envMap=(_.isMeshStandardMaterial?O:v).get(_.envMap||H.environment),H.envMapRotation=H.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Ut===void 0&&(_.addEventListener("dispose",Ft),Ut=new Map,H.programs=Ut);let Ot=Ut.get(_t);if(Ot!==void 0){if(H.currentProgram===Ot&&H.lightsStateVersion===ut)return Mh(_,yt),Ot}else yt.uniforms=St.getUniforms(_),_.onBeforeCompile(yt,b),Ot=St.acquireProgram(yt,_t),Ut.set(_t,Ot),H.uniforms=yt.uniforms;let bt=H.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(bt.clippingPlanes=tt.uniform),Mh(_,yt),H.needsLights=rf(_),H.lightsStateVersion=ut,H.needsLights&&(bt.ambientLightColor.value=k.state.ambient,bt.lightProbe.value=k.state.probe,bt.directionalLights.value=k.state.directional,bt.directionalLightShadows.value=k.state.directionalShadow,bt.spotLights.value=k.state.spot,bt.spotLightShadows.value=k.state.spotShadow,bt.rectAreaLights.value=k.state.rectArea,bt.ltc_1.value=k.state.rectAreaLTC1,bt.ltc_2.value=k.state.rectAreaLTC2,bt.pointLights.value=k.state.point,bt.pointLightShadows.value=k.state.pointShadow,bt.hemisphereLights.value=k.state.hemi,bt.directionalShadowMap.value=k.state.directionalShadowMap,bt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,bt.spotShadowMap.value=k.state.spotShadowMap,bt.spotLightMatrix.value=k.state.spotLightMatrix,bt.spotLightMap.value=k.state.spotLightMap,bt.pointShadowMap.value=k.state.pointShadowMap,bt.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Ot,H.uniformsList=null,Ot}function bh(_){if(_.uniformsList===null){let L=_.currentProgram.getUniforms();_.uniformsList=fs.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function Mh(_,L){let z=Rt.get(_);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function nf(_,L,z,H,k){L.isScene!==!0&&(L=Se),T.resetTextureUnits();let it=L.fog,ut=H.isMeshStandardMaterial?L.environment:null,yt=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Es,_t=(H.isMeshStandardMaterial?O:v).get(H.envMap||ut),Ut=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ot=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!z.morphAttributes.position,ee=!!z.morphAttributes.normal,pe=!!z.morphAttributes.color,ve=mn;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=b.toneMapping);let Qe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=Qe!==void 0?Qe.length:0,wt=Rt.get(H),zi=p.state.lights;if(nt===!0&&(Mt===!0||_!==M)){let mi=_===M&&H.id===S;tt.setState(H,_,mi)}let ae=!1;H.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==zi.state.version||wt.outputColorSpace!==yt||k.isBatchedMesh&&wt.batching===!1||!k.isBatchedMesh&&wt.batching===!0||k.isBatchedMesh&&wt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&wt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&wt.instancing===!1||!k.isInstancedMesh&&wt.instancing===!0||k.isSkinnedMesh&&wt.skinning===!1||!k.isSkinnedMesh&&wt.skinning===!0||k.isInstancedMesh&&wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&wt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&wt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&wt.instancingMorph===!1&&k.morphTexture!==null||wt.envMap!==_t||H.fog===!0&&wt.fog!==it||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==tt.numPlanes||wt.numIntersection!==tt.numIntersection)||wt.vertexAlphas!==Ut||wt.vertexTangents!==Ot||wt.morphTargets!==bt||wt.morphNormals!==ee||wt.morphColors!==pe||wt.toneMapping!==ve||wt.morphTargetsCount!==re)&&(ae=!0):(ae=!0,wt.__version=H.version);let Mi=wt.currentProgram;ae===!0&&(Mi=_r(H,L,k));let Yn=!1,ai=!1,Os=!1,ye=Mi.getUniforms(),Ii=wt.uniforms;if(It.useProgram(Mi.program)&&(Yn=!0,ai=!0,Os=!0),H.id!==S&&(S=H.id,ai=!0),Yn||M!==_){It.buffers.depth.getReversed()?(lt.copy(_.projectionMatrix),Gf(lt),Wf(lt),ye.setValue(U,"projectionMatrix",lt)):ye.setValue(U,"projectionMatrix",_.projectionMatrix),ye.setValue(U,"viewMatrix",_.matrixWorldInverse);let rn=ye.map.cameraPosition;rn!==void 0&&rn.setValue(U,Nt.setFromMatrixPosition(_.matrixWorld)),Yt.logarithmicDepthBuffer&&ye.setValue(U,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ye.setValue(U,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,ai=!0,Os=!0)}if(k.isSkinnedMesh){ye.setOptional(U,k,"bindMatrix"),ye.setOptional(U,k,"bindMatrixInverse");let mi=k.skeleton;mi&&(mi.boneTexture===null&&mi.computeBoneTexture(),ye.setValue(U,"boneTexture",mi.boneTexture,T))}k.isBatchedMesh&&(ye.setOptional(U,k,"batchingTexture"),ye.setValue(U,"batchingTexture",k._matricesTexture,T),ye.setOptional(U,k,"batchingIdTexture"),ye.setValue(U,"batchingIdTexture",k._indirectTexture,T),ye.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&ye.setValue(U,"batchingColorTexture",k._colorsTexture,T));let Bs=z.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0)&&kt.update(k,z,Mi),(ai||wt.receiveShadow!==k.receiveShadow)&&(wt.receiveShadow=k.receiveShadow,ye.setValue(U,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ii.envMap.value=_t,Ii.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&L.environment!==null&&(Ii.envMapIntensity.value=L.environmentIntensity),ai&&(ye.setValue(U,"toneMappingExposure",b.toneMappingExposure),wt.needsLights&&sf(Ii,Os),it&&H.fog===!0&&ct.refreshFogUniforms(Ii,it),ct.refreshMaterialUniforms(Ii,H,X,et,p.state.transmissionRenderTarget[_.id]),fs.upload(U,bh(wt),Ii,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(fs.upload(U,bh(wt),Ii,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ye.setValue(U,"center",k.center),ye.setValue(U,"modelViewMatrix",k.modelViewMatrix),ye.setValue(U,"normalMatrix",k.normalMatrix),ye.setValue(U,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let mi=H.uniformsGroups;for(let rn=0,an=mi.length;rn<an;rn++){let Sh=mi[rn];I.update(Sh,Mi),I.bind(Sh,Mi)}}return Mi}function sf(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function rf(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(_,L,z){Rt.get(_.texture).__webglTexture=L,Rt.get(_.depthTexture).__webglTexture=z;let H=Rt.get(_);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,L){let z=Rt.get(_);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(_,L=0,z=0){P=_,E=L,R=z;let H=!0,k=null,it=!1,ut=!1;if(_){let _t=Rt.get(_);if(_t.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(_t.__webglFramebuffer===void 0)T.setupRenderTarget(_);else if(_t.__hasExternalTextures)T.rebindTextures(_,Rt.get(_.texture).__webglTexture,Rt.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let bt=_.depthTexture;if(_t.__boundDepthTexture!==bt){if(bt!==null&&Rt.has(bt)&&(_.width!==bt.image.width||_.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(_)}}let Ut=_.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ut=!0);let Ot=Rt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ot[L])?k=Ot[L][z]:k=Ot[L],it=!0):_.samples>0&&T.useMultisampledRTT(_)===!1?k=Rt.get(_).__webglMultisampledFramebuffer:Array.isArray(Ot)?k=Ot[z]:k=Ot,C.copy(_.viewport),V.copy(_.scissor),B=_.scissorTest}else C.copy(Et).multiplyScalar(X).floor(),V.copy(Wt).multiplyScalar(X).floor(),B=ue;if(It.bindFramebuffer(U.FRAMEBUFFER,k)&&H&&It.drawBuffers(_,k),It.viewport(C),It.scissor(V),It.setScissorTest(B),it){let _t=Rt.get(_.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,_t.__webglTexture,z)}else if(ut){let _t=Rt.get(_.texture),Ut=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_t.__webglTexture,z||0,Ut)}S=-1},this.readRenderTargetPixels=function(_,L,z,H,k,it,ut){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Rt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){It.bindFramebuffer(U.FRAMEBUFFER,yt);try{let _t=_.texture,Ut=_t.format,Ot=_t.type;if(!Yt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-H&&z>=0&&z<=_.height-k&&U.readPixels(L,z,H,k,zt.convert(Ut),zt.convert(Ot),it)}finally{let _t=P!==null?Rt.get(P).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(_,L,z,H,k,it,ut){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Rt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){let _t=_.texture,Ut=_t.format,Ot=_t.type;if(!Yt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=_.width-H&&z>=0&&z<=_.height-k){It.bindFramebuffer(U.FRAMEBUFFER,yt);let bt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.bufferData(U.PIXEL_PACK_BUFFER,it.byteLength,U.STREAM_READ),U.readPixels(L,z,H,k,zt.convert(Ut),zt.convert(Ot),0);let ee=P!==null?Rt.get(P).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,ee);let pe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Vf(U,pe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,it),U.deleteBuffer(bt),U.deleteSync(pe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,L=null,z=0){_.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,_=arguments[1]);let H=Math.pow(2,-z),k=Math.floor(_.image.width*H),it=Math.floor(_.image.height*H),ut=L!==null?L.x:0,yt=L!==null?L.y:0;T.setTexture2D(_,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,ut,yt,k,it),It.unbindTexture()},this.copyTextureToTexture=function(_,L,z=null,H=null,k=0){_.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,_=arguments[1],L=arguments[2],k=arguments[3]||0,z=null);let it,ut,yt,_t,Ut,Ot,bt,ee,pe,ve=_.isCompressedTexture?_.mipmaps[k]:_.image;z!==null?(it=z.max.x-z.min.x,ut=z.max.y-z.min.y,yt=z.isBox3?z.max.z-z.min.z:1,_t=z.min.x,Ut=z.min.y,Ot=z.isBox3?z.min.z:0):(it=ve.width,ut=ve.height,yt=ve.depth||1,_t=0,Ut=0,Ot=0),H!==null?(bt=H.x,ee=H.y,pe=H.z):(bt=0,ee=0,pe=0);let Qe=zt.convert(L.format),re=zt.convert(L.type),wt;L.isData3DTexture?(T.setTexture3D(L,0),wt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),wt=U.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),wt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let zi=U.getParameter(U.UNPACK_ROW_LENGTH),ae=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Mi=U.getParameter(U.UNPACK_SKIP_PIXELS),Yn=U.getParameter(U.UNPACK_SKIP_ROWS),ai=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ve.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_t),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ot);let Os=_.isDataArrayTexture||_.isData3DTexture,ye=L.isDataArrayTexture||L.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let Ii=Rt.get(_),Bs=Rt.get(L),mi=Rt.get(Ii.__renderTarget),rn=Rt.get(Bs.__renderTarget);It.bindFramebuffer(U.READ_FRAMEBUFFER,mi.__webglFramebuffer),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let an=0;an<yt;an++)Os&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(_).__webglTexture,k,Ot+an),_.isDepthTexture?(ye&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(L).__webglTexture,k,pe+an),U.blitFramebuffer(_t,Ut,it,ut,bt,ee,it,ut,U.DEPTH_BUFFER_BIT,U.NEAREST)):ye?U.copyTexSubImage3D(wt,k,bt,ee,pe+an,_t,Ut,it,ut):U.copyTexSubImage2D(wt,k,bt,ee,pe+an,_t,Ut,it,ut);It.bindFramebuffer(U.READ_FRAMEBUFFER,null),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ye?_.isDataTexture||_.isData3DTexture?U.texSubImage3D(wt,k,bt,ee,pe,it,ut,yt,Qe,re,ve.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(wt,k,bt,ee,pe,it,ut,yt,Qe,ve.data):U.texSubImage3D(wt,k,bt,ee,pe,it,ut,yt,Qe,re,ve):_.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,bt,ee,it,ut,Qe,re,ve.data):_.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,bt,ee,ve.width,ve.height,Qe,ve.data):U.texSubImage2D(U.TEXTURE_2D,k,bt,ee,it,ut,Qe,re,ve);U.pixelStorei(U.UNPACK_ROW_LENGTH,zi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Yn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ai),k===0&&L.generateMipmaps&&U.generateMipmap(wt),It.unbindTexture()},this.copyTextureToTexture3D=function(_,L,z=null,H=null,k=0){return _.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,_=arguments[2],L=arguments[3],k=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,L,z,H,k)},this.initRenderTarget=function(_){Rt.get(_).__webglFramebuffer===void 0&&T.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?T.setTextureCube(_,0):_.isData3DTexture?T.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?T.setTexture2DArray(_,0):T.setTexture2D(_,0),It.unbindTexture()},this.resetState=function(){E=0,R=0,P=null,It.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var da=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ss=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ec=class extends ei{constructor(t=null,e=1,i=1,s,r,a,o,l,c=ci,h=ci,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fa=class extends ke{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cs=new ie,Su=new ie,Vr=[],wu=new Ji,Fx=new ie,Xs=new Tt,$s=new ji,Bn=class extends Tt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Fx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),wu.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(wu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),$s.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(i),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),Su.multiplyMatrices(i,cs),Xs.matrixWorld=Su,Xs.raycast(t,Vr);for(let a=0,o=Vr.length;a<o;a++){let l=Vr[a];l.instanceId=r,l.object=this,e.push(l)}Vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ec(new Float32Array(s*this.count),s,this.count,Fc,ki));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ic=class extends Ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pa=new A,ma=new A,Tu=new ie,qs=new er,Gr=new ji,qo=new A,Eu=new A,nc=class extends Ge{constructor(t=new Ie,e=new ic){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)pa.fromBufferAttribute(e,s-1),ma.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=pa.distanceTo(ma);t.setAttribute("lineDistance",new ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;Tu.copy(s).invert(),qs.copy(t.ray).applyMatrix4(Tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),y=h.getX(x+1),w=Wr(this,t,qs,l,p,y);w&&e.push(w)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Wr(this,t,qs,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=Wr(this,t,qs,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=Wr(this,t,qs,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wr(n,t,e,i,s,r){let a=n.geometry.attributes.position;if(pa.fromBufferAttribute(a,s),ma.fromBufferAttribute(a,r),e.distanceSqToSegment(pa,ma,qo,Eu)>i)return;qo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(qo);if(!(l<t.near||l>t.far))return{distance:l,point:Eu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Au=new A,Ru=new A,ga=class extends nc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Au.fromBufferAttribute(e,s),Ru.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Au.distanceTo(Ru);t.setAttribute("lineDistance",new ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sc=class extends Ni{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cu=new ie,rc=new er,Xr=new ji,$r=new A,xa=class extends Ge{constructor(t=new Ie,e=new sc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;Cu.copy(s).invert(),rc.copy(t.ray).applyMatrix4(Cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);$r.fromBufferAttribute(u,m),Pu($r,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)$r.fromBufferAttribute(u,g),Pu($r,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pu(n,t,e,i,s,r,a){let o=rc.distanceSqToPoint(n);if(o<e){let l=new A;rc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ni=class extends ei{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new A,s=[],r=[],a=[],o=new A,l=new ie;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(He(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(He(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},nr=class extends yi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ac=class extends nr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var qr=new A,Yo=new Gc,Ko=new Gc,Zo=new Gc,oc=class extends yi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new A){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qr.subVectors(s[0],s[1]).add(s[0]),c=qr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Yo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Ko.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Zo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Yo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ko.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Zo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Yo.calc(l),Ko.calc(l),Zo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Iu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Ox(n,t){let e=1-n;return e*e*t}function Bx(n,t){return 2*(1-n)*n*t}function zx(n,t){return n*n*t}function js(n,t,e,i){return Ox(n,t)+Bx(n,e)+zx(n,i)}function Hx(n,t){let e=1-n;return e*e*e*t}function Vx(n,t){let e=1-n;return 3*e*e*n*t}function Gx(n,t){return 3*(1-n)*n*n*t}function Wx(n,t){return n*n*n*t}function Qs(n,t,e,i,s){return Hx(n,t)+Vx(n,e)+Gx(n,i)+Wx(n,s)}var va=class extends yi{constructor(t=new st,e=new st,i=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qs(t,s.x,r.x,a.x,o.x),Qs(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lc=class extends yi{constructor(t=new A,e=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qs(t,s.x,r.x,a.x,o.x),Qs(t,s.y,r.y,a.y,o.y),Qs(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ya=class extends yi{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cc=class extends yi{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends yi{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hc=class extends yi{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y),js(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ba=class extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Iu(o,l.x,c.x,h.x,u.x),Iu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},Lu=Object.freeze({__proto__:null,ArcCurve:ac,CatmullRomCurve3:oc,CubicBezierCurve:va,CubicBezierCurve3:lc,EllipseCurve:nr,LineCurve:ya,LineCurve3:cc,QuadraticBezierCurve:_a,QuadraticBezierCurve3:hc,SplineCurve:ba}),uc=class extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Lu[s.type]().fromJSON(s))}return this}},dc=class extends uc{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ya(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new _a(this.currentPoint.clone(),new st(t,e),new st(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new va(this.currentPoint.clone(),new st(t,e),new st(i,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ba(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new nr(t,e,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},fc=class n extends Ie{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new A,d=new st,f=new A,g=new A,x=new A,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let w=i+y*h*s,b=Math.sin(w),D=Math.cos(w);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*b,u.y=t[E].y,u.z=t[E].x*D,a.push(u.x,u.y,u.z),d.x=y/e,d.y=E/(t.length-1),o.push(d.x,d.y);let R=l[3*E+0]*b,P=l[3*E+1],S=l[3*E+0]*D;c.push(R,P,S)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){let b=w+y*t.length,D=b,E=b+t.length,R=b+t.length+1,P=b+1;r.push(D,E,P),r.push(R,P,E)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},zn=class n extends fc{constructor(t=1,e=1,i=4,s=8){let r=new dc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},ws=class n extends Ie{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new A,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},si=class n extends Ie{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;y(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function y(){let b=new A,D=new A,E=0,R=(e-t)/i;for(let P=0;P<=r;P++){let S=[],M=P/r,C=M*(e-t)+t;for(let V=0;V<=s;V++){let B=V/s,G=B*l+o,J=Math.sin(G),$=Math.cos(G);D.x=C*J,D.y=-M*i+m,D.z=C*$,u.push(D.x,D.y,D.z),b.set(J,R,$).normalize(),d.push(b.x,b.y,b.z),f.push(B,1-M),S.push(g++)}x.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let M=x[S][P],C=x[S+1][P],V=x[S+1][P+1],B=x[S][P+1];(t>0||S!==0)&&(h.push(M,C,B),E+=3),(e>0||S!==r-1)&&(h.push(C,V,B),E+=3)}c.addGroup(p,E,0),p+=E}function w(b){let D=g,E=new st,R=new A,P=0,S=b===!0?t:e,M=b===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let C=g;for(let V=0;V<=s;V++){let G=V/s*l+o,J=Math.cos(G),$=Math.sin(G);R.x=S*$,R.y=m*M,R.z=S*J,u.push(R.x,R.y,R.z),d.push(0,M,0),E.x=J*.5+.5,E.y=$*.5*M+.5,f.push(E.x,E.y),g++}for(let V=0;V<s;V++){let B=D+V,G=C+V;b===!0?h.push(G,G+1,B):h.push(G+1,G,B),P+=3}c.addGroup(p,P,b===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var sr=class n extends Ie{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new A,g=new st;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let y=p+m,w=y,b=y+i+1,D=y+i+2,E=y+1;o.push(w,b,E),o.push(b,D,E)}}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Qi=class n extends Ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],w=p/i,b=0;p===0&&a===0?b=.5/e:p===i&&l===Math.PI&&(b=-.5/e);for(let D=0;D<=e;D++){let E=D/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+w*o),u.y=t*Math.cos(a+w*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+w*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(E+b,1-w),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let w=h[p][y+1],b=h[p][y],D=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(w,b,E),(p!==i-1||l<Math.PI)&&f.push(b,D,E)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ma=class extends Re{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},me=class extends Ni{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var rr=class extends Ni{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Yr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Xx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ts=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pc=class extends Ts{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rh:r=t,o=2*e-i;break;case Ch:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rh:a=t,l=2*i-e;break;case Ch:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let D=0;D!==o;++D)r[D]=p*a[h+D]+y*a[c+D]+w*a[l+D]+b*a[u+D];return r}},mc=class extends Ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},gc=class extends Ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ri=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yr(e,this.TimeBufferType),this.values=Yr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Yr(t.times,Array),values:Yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ta:e=this.InterpolantFactoryMethodDiscrete;break;case Fl:e=this.InterpolantFactoryMethodLinear;break;case vo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return Fl;case this.InterpolantFactoryMethodSmooth:return vo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Xx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===vo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Fl;var Hn=class extends Ri{constructor(t,e,i){super(t,e,i)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=ta;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends Ri{};xc.prototype.ValueTypeName="color";var vc=class extends Ri{};vc.prototype.ValueTypeName="number";var yc=class extends Ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)vi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Sa=class extends Ri{InterpolantFactoryMethodLinear(t){return new yc(this.times,this.values,this.getValueSize(),t)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends Ri{constructor(t,e,i){super(t,e,i)}};Vn.prototype.ValueTypeName="string";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=ta;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends Ri{};_c.prototype.ValueTypeName="vector";var bc=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},$x=new bc,Mc=class{constructor(t){this.manager=t!==void 0?t:$x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},wa=class extends ar{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Jo=new ie,Du=new A,ku=new A,Ta=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Du.setFromMatrixPosition(t.matrixWorld),e.position.copy(Du),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),Jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Uu=new ie,Ys=new A,jo=new A,Sc=class extends Ta{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ys.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ys),jo.copy(i.position),jo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(jo),i.updateMatrixWorld(),s.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Uu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu)}},Ea=class extends ar{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Sc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},wc=class extends Ta{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new wc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Aa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Nu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Nu(){return performance.now()}var Wc="\\[\\]\\.:\\/",qx=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",Yx="[^"+Wc.replace("\\.","")+"]",Kx=/((?:WC+[\/:])*)/.source.replace("WC",Xc),Zx=/(WCOD+)?/.source.replace("WCOD",Yx),Jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),Qx=new RegExp("^"+Kx+Zx+Jx+jx+"$"),tv=["material","materials","bones","map"],Tc=class{constructor(t,e,i){let s=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qx,"")}static parseTrackName(t){let e=Qx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);tv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Tc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);var nd=`/* Layout: the 3D ground fills the window; broadcast graphics sit over it. Menus hang off the left edge so the match stays visible. */
:root {
  --ink: #05090d;                      /* night-match black, page ground */
  --panel: rgba(8, 13, 19, .86);
  --line: rgba(255, 255, 255, .13);
  --chalk: #f4f7ef;                    /* line-marking white */
  --dim: rgba(244, 247, 239, .64);
  --gold: #ffd23c;                     /* touch-judge flag yellow: the one accent */
  --red: #ff5a4f;
  --display: "Barlow Condensed", "Arial Narrow", "Bahnschrift", Arial, sans-serif;
  --body: "Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, sans-serif;
  color-scheme: dark;
}
html, body { height: 100%; margin: 0; overflow: hidden; background: var(--ink); }
[hidden] { display: none !important; }
#st-app { position: fixed; inset: 0; overflow: hidden; background: var(--ink); color: var(--chalk); font: 15px/1.4 var(--body); user-select: none; -webkit-user-select: none; cursor: default; }
#st-stage, #st-hud, #st-menu, #st-fade { position: absolute; inset: 0; }
#st-stage canvas { display: block; width: 100%; height: 100%; }
#st-hud { pointer-events: none; font-family: var(--display); }
#st-fade { background: var(--ink); pointer-events: none; transition: opacity 1s; }
#st-fade.clear { opacity: 0; }
kbd { display: inline-block; min-width: 1.4em; padding: 0 6px; margin: 0 2px; border: 1px solid rgba(255, 255, 255, .42); border-bottom-width: 2px; border-radius: 4px; background: rgba(255, 255, 255, .09); color: var(--chalk); font: 700 12px/1.6 var(--display); letter-spacing: .05em; text-align: center; text-transform: uppercase; }

/* ------------------------------------------------------------------ menus */
#st-menu { display: flex; overflow-y: auto; background: linear-gradient(90deg, rgba(5, 9, 13, .94) 0, rgba(5, 9, 13, .78) 34%, rgba(5, 9, 13, 0) 68%); padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)); }
#st-menu[data-screen="half"], #st-menu[data-screen="post"], #st-menu[data-screen="kickDone"], #st-menu[data-screen="season"], #st-menu[data-screen="cup"], #st-menu[data-screen="controls"], #st-menu[data-screen="teams"] { background: rgba(5, 9, 13, .8); }
#st-menu[data-screen="title"] { background: linear-gradient(0deg, rgba(5, 9, 13, .9) 0, rgba(5, 9, 13, .1) 60%); }
.panel { display: flex; flex-direction: column; gap: 14px; min-width: 0; box-sizing: border-box; padding-block: clamp(18px, 5vh, 54px); }
.panel.left { width: min(470px, 100%); min-height: 100%; padding-left: clamp(4px, 4vw, 64px); }
.panel.wide { width: min(1000px, 100%); margin: auto; }
.panel.full { width: min(1180px, 100%); margin: auto; }
.panel.centre { width: min(760px, 100%); margin: auto; background: var(--panel); padding: 26px clamp(16px, 3vw, 38px) 22px; border-top: 4px solid var(--gold); }
.logo, .title h1 { font: italic 800 62px/.82 var(--display); text-transform: uppercase; letter-spacing: -.01em; margin: 0; }
.logo em, .title h1 em { display: block; color: var(--gold); font-style: inherit; }
h2 { margin: 0; font: italic 800 clamp(34px, 4.4vw, 50px)/1 var(--display); text-transform: uppercase; text-wrap: balance; }
h2 small { display: block; margin-top: 6px; font: 700 14px/1.2 var(--display); letter-spacing: .18em; color: var(--gold); font-style: normal; }
h3 { margin: 0 0 6px; font: 700 13px/1.2 var(--display); letter-spacing: .18em; text-transform: uppercase; color: var(--gold); }
.list { display: flex; flex-direction: column; gap: 3px; }
.gap { height: 10px; }
.row { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 6px 16px 7px 12px; border-left: 4px solid transparent; color: var(--dim); font: italic 700 27px/1 var(--display); text-transform: uppercase; letter-spacing: .015em; cursor: pointer; transition: padding .12s, background .12s; }
.row b { display: flex; align-items: center; gap: 10px; color: var(--chalk); font: 700 20px/1 var(--display); font-style: normal; text-align: right; }
.row .ar { font-style: normal; font-size: 11px; opacity: .45; padding: 4px; }
.row.focus { background: var(--gold); color: var(--ink); padding-left: 22px; border-left-color: var(--chalk); }
.row.focus b { color: var(--ink); } .row.focus .ar { opacity: 1; }
.row.minor { font-size: 20px; } .row.go { color: var(--gold); } .row.go.focus { color: var(--ink); }
.list.tight .row { font-size: 21px; padding-block: 6px; }
.list.row3 { flex-direction: row; flex-wrap: wrap; } .list.row3 .row { flex: 1 1 200px; }
.blurb { margin: 0; min-height: 4.2em; max-width: 38ch; color: var(--dim); font: 400 15px/1.45 var(--body); }
.foot { margin-top: auto; padding-top: 10px; color: var(--dim); font: 600 13px/1.8 var(--display); letter-spacing: .1em; text-transform: uppercase; }
.title { margin: auto auto clamp(30px, 9vh, 110px) clamp(4px, 5vw, 90px); }
.title h1 { font-size: clamp(76px, 15vw, 220px); }
.t-eyebrow { margin-bottom: 12px; font: 700 clamp(13px, 1.5vw, 20px)/1 var(--display); letter-spacing: .32em; text-transform: uppercase; color: var(--gold); }
.t-press { margin-top: 26px; font: 600 19px/1 var(--display); letter-spacing: .16em; text-transform: uppercase; animation: st-pulse 1.5s ease-in-out infinite; }
@keyframes st-pulse { 50% { opacity: .35; } }

.cards { display: flex; flex-wrap: wrap; gap: 16px; align-items: stretch; }
.vs { align-self: center; font: italic 800 42px/1 var(--display); color: var(--gold); }
.tcard { flex: 1 1 280px; min-width: 0; padding: 12px 18px 14px; border-top: 5px solid var(--tc); background: linear-gradient(165deg, color-mix(in srgb, var(--tc) 48%, #05090d) 0, rgba(8, 13, 19, .92) 62%); }
.tc-tag { font: 700 12px/1.4 var(--display); letter-spacing: .2em; text-transform: uppercase; color: var(--gold); }
.tc-top { display: flex; justify-content: space-between; align-items: center; height: 118px; }
.tc-crest { height: 112px; } .tc-kit { height: 104px; }
.tc-city { font: 600 14px/1.2 var(--display); letter-spacing: .16em; text-transform: uppercase; color: var(--dim); }
.tc-name { font: italic 800 40px/.95 var(--display); text-transform: uppercase; }
.tc-ground { margin-bottom: 8px; color: var(--dim); font-size: 13px; }
.stat { display: grid; grid-template-columns: 74px 1fr 26px; gap: 8px; align-items: center; margin-top: 4px; font: 600 13px/1.3 var(--display); letter-spacing: .1em; text-transform: uppercase; color: var(--dim); }
.stat div { height: 6px; background: rgba(255, 255, 255, .15); } .stat i { display: block; height: 100%; background: var(--gold); }
.stat b { color: var(--chalk); text-align: right; font-variant-numeric: tabular-nums; }
.tc-ovr { display: flex; justify-content: space-between; align-items: baseline; margin-top: 8px; padding-top: 6px; border-top: 1px solid var(--line); font: 700 13px/1 var(--display); letter-spacing: .16em; text-transform: uppercase; color: var(--dim); }
.tc-ovr b { color: var(--chalk); font-size: 30px; }

.cols { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: 28px; }
.side { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
.scroll { max-height: 64vh; overflow-y: auto; }
.help p { margin: 0 0 12px; color: var(--dim); font: 400 14px/1.5 var(--body); max-width: 60ch; } .help b { color: var(--chalk); }
.stats { width: 100%; border-collapse: collapse; font-family: var(--display); }
.stats td { width: 26%; padding: 3px 4px; text-align: center; font: 700 24px/1.2 var(--display); font-variant-numeric: tabular-nums; }
.stats th { color: var(--dim); font: 600 13px/1.2 var(--display); letter-spacing: .14em; text-transform: uppercase; }
.stats tr + tr td, .stats tr + tr th { border-top: 1px solid var(--line); }
.final { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); align-items: center; gap: 16px; margin-block: 4px; }
.f-team { display: flex; flex-direction: column; align-items: center; gap: 2px; text-align: center; min-width: 0; }
.f-team img { height: 86px; } .f-team span { font: italic 800 26px/1 var(--display); text-transform: uppercase; }
.f-team em { min-height: 1.3em; color: var(--dim); font: 400 12px/1.3 var(--body); }
.f-score { display: flex; align-items: center; gap: 12px; font: 800 88px/1 var(--display); font-variant-numeric: tabular-nums; }
.f-score i { color: var(--dim); font-style: normal; font-size: 40px; }
.ladder { width: 100%; border-collapse: collapse; font: 600 16px/1.3 var(--display); }
.ladder th { padding: 4px 6px; color: var(--dim); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; }
.ladder td { padding: 4px 6px; text-align: center; font-variant-numeric: tabular-nums; border-top: 1px solid var(--line); }
.ladder .l { text-align: left; } .ladder td.l img { height: 22px; margin-right: 8px; vertical-align: middle; }
.ladder tr.me td { background: rgba(255, 210, 60, .15); color: var(--gold); }
.ladder tr.cut td { border-bottom: 2px dashed rgba(255, 210, 60, .55); }
.fx { display: flex; align-items: center; justify-content: space-between; gap: 10px; font: italic 800 24px/1 var(--display); text-transform: uppercase; text-align: center; }
.fx img { height: 64px; } .fx i { margin: 0 8px; color: var(--dim); font-size: 15px; }
.next p { margin: 0; color: var(--dim); }
.results div { display: grid; grid-template-columns: 1fr auto 1fr; gap: 10px; padding: 1px 0; color: var(--dim); font: 600 15px/1.4 var(--display); }
.results div span:first-child { text-align: right; } .results b { font-variant-numeric: tabular-nums; } .results .me { color: var(--chalk); }
.bracket { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
.bcol { display: flex; flex-direction: column; gap: 10px; justify-content: space-around; }
.tie { background: rgba(255, 255, 255, .06); border-left: 3px solid rgba(255, 255, 255, .22); } .tie.me { border-left-color: var(--gold); }
.tie > div { display: flex; align-items: center; gap: 8px; padding: 5px 10px; color: var(--dim); font: 600 16px/1.2 var(--display); }
.tie img { height: 22px; } .tie span { flex: 1; min-width: 0; } .tie .won { color: var(--chalk); } .tie b { font-variant-numeric: tabular-nums; }
.blurb.show { min-height: 0; max-width: 62ch; }
.kicks { display: flex; gap: 8px; justify-content: center; margin: 16px 0; }
.kicks i { width: 26px; height: 26px; border-radius: 50%; border: 2px solid var(--dim); box-sizing: border-box; } .kicks .good { background: var(--gold); border-color: var(--gold); }

/* -------------------------------------------------------------------- HUD */
.bug { position: absolute; left: 26px; top: 22px; display: grid; grid-template-columns: auto auto auto; filter: drop-shadow(0 4px 14px rgba(0, 0, 0, .5)); transition: opacity .3s; }
.bug-team { position: relative; display: flex; align-items: center; gap: 8px; height: 46px; padding: 0 12px; background: var(--tc); color: var(--tk); }
.bug-team .crest { height: 36px; } .bug-team .abbr { font: 800 22px/1 var(--display); letter-spacing: .04em; }
.bug-team .pts { min-width: 1.25em; font: 800 36px/1 var(--display); text-align: center; font-variant-numeric: tabular-nums; }
.bug-team.has::after { content: ""; position: absolute; left: 0; right: 0; bottom: -5px; height: 4px; background: var(--gold); }
.bug-clock { display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 78px; padding: 0 12px; background: #0a0e13; }
.bug-clock b { font: 800 24px/1 var(--display); font-variant-numeric: tabular-nums; } .bug-clock span { margin-top: 2px; font: 700 10px/1 var(--display); letter-spacing: .14em; color: var(--gold); white-space: nowrap; }
.count { grid-column: 1 / -1; display: flex; align-items: center; gap: 10px; width: max-content; margin-top: 9px; padding: 4px 12px; background: rgba(10, 14, 19, .84); border-left: 4px solid var(--tc); }
.count .lbl { min-width: 6.4em; font: 800 15px/1.2 var(--display); letter-spacing: .1em; text-transform: uppercase; }
.pips { display: flex; gap: 4px; } .pips i { width: 14px; height: 8px; background: rgba(255, 255, 255, .22); transform: skewX(-18deg); } .pips i.on { background: var(--chalk); }
.count.last { background: var(--gold); color: var(--ink); } .count.last .pips i.on { background: var(--ink); }
.card { position: absolute; left: 26px; bottom: 58px; display: flex; align-items: center; gap: 10px; padding: 6px 14px 6px 4px; background: rgba(10, 14, 19, .84); border-left: 4px solid var(--tc); transition: opacity .3s; }
.card .num { width: 48px; font: 800 36px/1 var(--display); text-align: center; }
.who { display: flex; flex-direction: column; min-width: 150px; } .pname { font: 800 20px/1 var(--display); text-transform: uppercase; }
.prole { font: 600 12px/1.3 var(--display); letter-spacing: .14em; text-transform: uppercase; color: var(--dim); }
.stam { height: 5px; margin-top: 5px; background: rgba(255, 255, 255, .2); } .stam i { display: block; height: 100%; background: var(--gold); transform-origin: left; } .stam.tired i { background: var(--red); }
.hints { position: absolute; left: 26px; bottom: 20px; right: 290px; display: flex; flex-wrap: wrap; gap: 4px 14px; color: var(--dim); font: 600 13px/1.6 var(--display); letter-spacing: .08em; text-transform: uppercase; transition: opacity .3s; }
.hints span { white-space: nowrap; }
.radar { position: absolute; right: 22px; bottom: 20px; width: 240px; height: 140px; transition: opacity .3s; }
.banner { position: absolute; left: 50%; top: 21%; width: max-content; max-width: 92vw; transform: translateX(-50%) skewX(-8deg); text-align: center; opacity: 0; transition: opacity .2s; }
.banner.on { opacity: 1; }
.b-main { display: inline-block; padding: 5px 28px 8px; background: var(--bc); color: var(--bk); font: italic 800 clamp(34px, 5vw, 66px)/1 var(--display); text-transform: uppercase; }
.b-sub { margin-top: 5px; font: 700 clamp(13px, 1.6vw, 20px)/1.2 var(--display); letter-spacing: .16em; text-transform: uppercase; text-shadow: 0 2px 8px rgba(0, 0, 0, .9); }
.banner.big .b-main { padding: 2px 46px 12px; font-size: clamp(64px, 11vw, 160px); }
.banner.small .b-main { padding: 4px 20px 6px; font-size: clamp(22px, 2.8vw, 36px); }
.banner.go .b-main { animation: st-wipe .32s cubic-bezier(.2, .9, .2, 1); }
@keyframes st-wipe { from { clip-path: inset(0 100% 0 0); transform: translateX(-36px); } to { clip-path: inset(0); transform: none; } }
.ticker { position: absolute; left: 50%; bottom: 96px; width: max-content; max-width: 92vw; box-sizing: border-box; transform: translateX(-50%); padding: 5px 16px 6px; background: rgba(10, 14, 19, .84); border-left: 4px solid var(--gold); font: italic 700 21px/1.2 var(--display); white-space: nowrap; opacity: 0; transition: opacity .25s; }
.ticker.on { opacity: 1; }
.prompt { position: absolute; left: 50%; bottom: 150px; width: max-content; max-width: 92vw; transform: translateX(-50%); padding: 5px 16px; background: rgba(10, 14, 19, .84); font: 700 16px/1.6 var(--display); letter-spacing: .1em; text-transform: uppercase; opacity: 0; transition: opacity .25s; }
.prompt.on { opacity: 1; }
.cine .prompt { bottom: calc(9vh + 14px); }
.tag { position: absolute; left: 0; top: 0; display: none; min-width: 16px; height: 26px; margin: -13px 0 0 -14px; padding: 0 6px; border-radius: 4px; background: var(--chalk); color: var(--ink); box-shadow: 0 3px 0 rgba(0, 0, 0, .55); font: 800 17px/26px var(--display); text-align: center; will-change: transform; }
.pin { position: absolute; left: 0; top: 0; display: none; will-change: transform; }
.pin i { display: block; width: 0; height: 0; margin: -12px 0 0 -8px; border: 8px solid transparent; border-top: 11px solid var(--tc); border-bottom: 0; filter: drop-shadow(0 2px 2px rgba(0, 0, 0, .7)); }
.pin span { position: absolute; left: -14px; top: -30px; width: 28px; color: var(--tc); font: 800 14px/1 var(--display); text-align: center; text-shadow: 0 1px 3px #000; }
.kbar { position: absolute; left: 0; top: 0; display: none; width: 68px; height: 9px; margin-left: -34px; background: rgba(10, 14, 19, .85); border: 1px solid var(--chalk); will-change: transform; }
.kbar i { display: block; height: 100%; background: var(--gold); transform-origin: left; } .kbar.max i { background: var(--red); }
.meter { position: absolute; left: 50%; bottom: 36px; width: min(470px, 84vw); transform: translateX(-50%); padding: 12px 18px 14px; box-sizing: border-box; background: rgba(10, 14, 19, .88); border-top: 4px solid var(--gold); }
.m-title { margin-bottom: 8px; font: 700 16px/1.5 var(--display); letter-spacing: .07em; text-transform: uppercase; text-align: center; }
.m-row { display: grid; grid-template-columns: 82px 1fr; align-items: center; gap: 10px; margin-top: 7px; color: var(--dim); font: 700 12px/1 var(--display); letter-spacing: .15em; text-transform: uppercase; opacity: .32; }
.meter[data-stage="1"] .m-row:nth-of-type(2), .meter[data-stage="2"] .m-row:nth-of-type(3) { opacity: 1; }
.m-bar { position: relative; height: 16px; background: rgba(255, 255, 255, .15); }
.power .fill { position: absolute; inset: 0; background: linear-gradient(90deg, var(--chalk), var(--gold)); transform-origin: left; }
.power .sweet { position: absolute; left: 62%; width: 28%; top: -3px; bottom: -3px; border-inline: 2px solid var(--chalk); z-index: 1; }
.acc .zone { position: absolute; left: 43%; width: 14%; top: 0; bottom: 0; background: var(--gold); }
.acc .needle { position: absolute; top: -4px; bottom: -4px; width: 4px; margin-left: -2px; background: var(--chalk); }
.m-wind { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 11px; color: var(--dim); font: 700 12px/1 var(--display); letter-spacing: .15em; text-transform: uppercase; }
.m-wind b { color: var(--chalk); } .arrow { position: relative; display: inline-block; width: 28px; height: 2px; background: var(--chalk); }
.arrow::after { content: ""; position: absolute; right: -3px; top: -4px; border: 5px solid transparent; border-left: 8px solid var(--chalk); border-right: 0; }
.bars::before, .bars::after { content: ""; position: absolute; left: 0; right: 0; height: 0; background: #000; transition: height .35s; }
.bars::before { top: 0; } .bars::after { bottom: 0; }
.cine .bars::before, .cine .bars::after { height: 9vh; }
.cine .bug, .cine .card, .cine .hints, .cine .radar { opacity: 0; }
.replay { position: absolute; right: 30px; top: calc(9vh + 16px); font: italic 800 28px/1 var(--display); letter-spacing: .1em; text-transform: uppercase; }
.replay span::before { content: ""; display: inline-block; width: 12px; height: 12px; margin-right: 10px; border-radius: 50%; background: #ff3b30; animation: st-pulse 1s infinite; }
.versus { position: absolute; inset: 0; display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); align-items: center; gap: 2vw; padding: 0 5vw; }
.v-side { display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; animation: st-in-l .6s cubic-bezier(.2, .9, .2, 1) both; }
.v-side.away { animation-name: st-in-r; }
.v-side img { height: min(30vh, 250px); filter: drop-shadow(0 12px 30px rgba(0, 0, 0, .65)); }
.v-side b { font: italic 800 clamp(34px, 6vw, 86px)/.9 var(--display); text-transform: uppercase; text-shadow: 0 4px 0 rgba(0, 0, 0, .45); }
.v-side span { padding: 2px 14px; background: rgba(10, 14, 19, .8); border-bottom: 3px solid var(--tc); font: 700 clamp(12px, 1.4vw, 18px)/1.5 var(--display); letter-spacing: .22em; text-transform: uppercase; }
.v-mid { display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center; }
.v-mid em { font: 700 16px/1 var(--display); letter-spacing: .22em; text-transform: uppercase; color: var(--gold); font-style: normal; }
.v-mid b { font: italic 800 clamp(48px, 8vw, 110px)/1 var(--display); color: var(--gold); }
.v-mid span { font: 600 13px/1.3 var(--display); letter-spacing: .14em; text-transform: uppercase; color: var(--dim); }
@keyframes st-in-l { from { opacity: 0; transform: translateX(-80px); } } @keyframes st-in-r { from { opacity: 0; transform: translateX(80px); } }

@media (max-width: 820px) {
  .cols, .bracket { grid-template-columns: minmax(0, 1fr); }
  .hints { display: none; } .radar { width: 150px; height: 88px; }
  .row { font-size: 22px; } .f-score { font-size: 56px; } .tc-name { font-size: 30px; }
  .bug { left: 12px; top: 12px; transform-origin: left top; transform: scale(.8); } .card { left: 12px; }
}
@media (prefers-reduced-motion: reduce) { .t-press, .replay span::before, .banner.go .b-main, .v-side { animation: none; } }
`;var sd="data:font/woff2;base64,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";var rd="data:font/woff2;base64,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";var ad="data:font/woff2;base64,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";var od="data:font/woff2;base64,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";var ld="data:font/woff2;base64,d09GMgABAAAAAFzkABEAAAAA2lQAAFx/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoE6G6oyHIl2BmAAhQ4IgSAJnBURCAqCvBSCjBILhCIAATYCJAOIQAQgBYRaB4h2DIFWG/6+B/DmidbSm1UlGOFfFjMbUYPz6MenOMg44cZww8YxQLDyWfz/n5GcyBjgY9v+a2YFSzvMWZXOzqIZWDsK0yiYVu7ubnRNnJ1IMgKLetFMeVmF9bR8W9yoQBuLbvl56N43apylB6Tepw2Tqf01Vp4dpoTxNp0zYEpUTjG7sEVQ8vPd2BwwzMFms01hI3SMMf/EpBZ1qFRVvEgrw/q5Qj6D/T8eJmMjOA5c5KE/ubyKryjxdFiEvsetAmPXQ9RYderleb611/tm/yYlZAXsWMiyUBWW2KHG46uq2CFaIJvMz/Pb/HPue0QL1sR6IkZjZHxXSRhYYMUi4i8i/fu6dBWuOmR4mtMnd++dR05iJBATLAKBoEkICVAsQtCAByhdqUENSsWo/Zb6xGg7l07sy7Yv7cS00277dthchQAq2qlWamYS6krXq7nrj993i7tUH8P/X8+5j5AVHiVAheior7DBhegkFquwCI3i/f0rp/57V+m6q6dklcitSghKVIa59wNe4+lNqzUF2Biigsug2J9h7jVrP/ykRIooM5mcuKxxWyB4qKr6jfwNDuAmcHHNhPVzbo7wgbEDTA+hHKs307e7Z+a93b2D/8QdABrrQAfctwfQyKDwZQ4LGnAZUSeXoVbWZEpSKhKDUKkPFSuI/Y/N9f8noaiQhAwiIqggCPY6Y2zTmvN6Wb3V4r7dr5ttrbvvf9pSLio7qMBTfvhmN0CGDeko4fWF9IOSb31FfUWZUVc9yQzP436/nelX3J9eRG0jEkrwCI1aoHDbj4lYTTEdPI915Eu8ZFqPFnSn8C+g8w06tYCAoYBt/k00VmASkppdP9d7sR/wqMTKtMIFyjC+dtfuTt0mm/uE4wvCtcIEXm7eB07nUoT/31R723cHgARQP3A2RfBHarO+Uyvpx1i6c+U6zrz3BjNv3gzSABASKRIUvSRIBYBKBKU1BoB0QJB/D4O0IWR9p0QCEleEVqu00oaoXcccu9Q0v3VVumhd5rJ1Xfq4cmV4vt+bs3l7uJR+U6raiaQKiUIyX65R0a0cHlU9SnM7UUwcXa5QDE51TZcIiUNJiP86kTdgBxjAc03p9WMwQDehSmfSSk1LeFOCRgKQXYSdrG+hz69z0hOru329vSQ99pjXa5AgIQQJrkgQEXt/ln0srRYFTbo3FgLIzutKP8ZW/889uSwTY0MkagZEbv+f9tO+wWhKey1GBREQKUKXlL3PAw1sIy9exGRZe9izEmAWwACoCx8BCgISkcD/uXdD40MilpA1BlLwgvyEQGHCoAiJUIpUKEMOlGcgNFgRVKYcMqiB6tRBDZqhFqMQt9xC3HEHuuc+9NBD6J13UJcuVAADVGjkAAWBfsLUIZs/y+oBDj+2NRUgRgOqCQVRWOzuQUFjH/2hqgJCDvwvezn4un/Lna6KgrPIJAbfVkCwh5/UT71C4KC5xNgFILiQUQLUixCXioonJQfdOJBBT+809Po6oDY6vdrfJX1rdlG9/JXPDWCQRjZykY9ClAAbtFtBux6060C7ArSLQDsHYutSbcRCNrDjRrRjB1ZNEQ2roasLCDpv/enlAE2+hND9EvpO1vzm/iH0BfS5BZ4wH2bMe5O+29Fz6PVaDKwCq9Ar246hh9C9sN2cxfgMuiqUg/7l6AjaV9Bpxok1HRMRNLDmlqPFaCFqrzYjqkUVIDMp8gLkf8hvh4j8CFYh3yCfIR8gbyGvIP9E/oY8gzwGPGjeDezWsP8Mci1ySmxR7ACwG22NonvB3JT0rUNWIuOS78QQ0gukzLar1ngKg876upEwUr2ysjd4IN9VBlah2kL0cpbNgIBIEKJAHBH9Bzf6XAR5hVmMifBbPuTV/E+6140udabjHWxPr4A2cysMX/9kbGWLmwvMYHNtvUnQo2MBJjAW3hDChkQVKGGw5UOW256F0NNNBOLxGysuRIs/CkvcP8bvIi+00QMCZ4XDCycsH804F4STVgQMPyMRtlu2nXN4iahlhfvAKSoXQPYFvjNWDoTIgnZ8XSbY5YdBg9H7fDuRlDzCVYipeVT3/OfcBs7OYmkcMlBvIdf0o7w0E/aeLqgzeINchdnzMVJPyCtAC0tjz/TXC/IqaMWP0ZyOKY/P+QSu7hrpNcbPQqdKdpca3NZ55pntcgcL8fGcN3mlDDqTp6Ocw8a41QV1By9q1fnXGcixBAwX+mReKZnZABzMkKPEGx9CCSeGLHrSm4Ejg+bIrK36HFH4eywp4kQI4sudgt17xaz6Wli95DnvQfa7o4AM45naRCSlpb9Ot/weLHfWgPehdzhkvi4eBYVAhp82pAT9WKeBVQTSOo44RjtWOl4JjZNw5uaLhxwguOj+ivbQFRMjcUeDsizVOCxALN340PbE9LUzEES5SeJOMLy7Fwai+Jdjf8sKqL+nEKBXbdJKGidc5HBsLL3yx5+YrdbzP9MpG5z8Zosdt75y2KJawvxMvpP+iaadL//i9GUb8Onwo4Z+2aK6DodccMllN9xEtLBfgEf4Pb+MiJhkSRkpKzLWooSDKOYosjH9HArOiajknuvJi4Q3ooyvKKESzfg/eRQqDBEhEiVaNFqMJHwpcrDkvkSRvPlpgwwmoFaMRa/EsFJEWpkoUC4KVYgyhvlFjGpI1arD1aBpZc0saW64EURGirROkeVnKze4BPARbB0icUhkuyBSLom0y5zVngFE0hqvxa8eDSJm0sOQqhpfGCeOwg+RYjvXhPLD0uJFIh2eS+jjjGdlGRf2UGEBtYixCPN2jx2tmbzIxFf9xMGCroIiU5ImlbsHCFzUPGvxDf3ocQZnSmnHtj/Rao4EuYsWI1aceAkSJU/KRuly5flHvv4xa6ymoaVToFBR2DqydHJqiFM2aPzSSJ1+1g9CWAguGboURCvxrDNj06n4WqBlZK3Capg3x3fbhHpMifXRLFwuWWRbGn9CPZZQJHGUkUvXeX8FD/cEBmVUXbiMHZfN8BTDa+viK6yPWomJHRKBkS3cU1r5tnKsuVR1g4ZF8SLbb+GA/C/7O5wiAKlEc4ErbWfusojnmhANTQ7IO/UU5ScrN74zLjRUp8lkr4XqGh9BIxA/M248X+Uh9zN0SKrJ2FzzQVcE7Dbx+Y+CWJvfZaRkcOykDkwgG8VaUR1VZiDLrZoqsnJUqL0jRWyyA6Bvfu4F3NTtNs6iWxVY39FulCPjrAH2vs2mXNixZSQsfbn8lOWUnrRoVHZNTi33VFsL76nNE3RfPDBJPHgNeDHvOFnjBvSCXI3xU2alq8/mQ/vGV7bIKHS4xT6fClsbEQRNyz+VbuUVJwPKl+zA6GySIsFM/jwOFPv3SbKyIRucTZzhggKH9gS1k/xInuOnvfNgXNwOIHOIObJgbHK4ZMFgsg3jAunRTwmXlHcEFFQoXSaZZoIek/SYoMcUc5dOOzuBKZzdFOgz7cQcbh/wz3ZhGqPDzCAaqUOmCy2CJXIatFzJMJ8YvVTQX9+j0JCUG1WUiSZKU3FOIlRpFynS+zO4zBStaU3HrUqCVSd6yAQTZawEzXbkfINpdyW0OTfNnJqQfkBGHebFp8kiFJkTDTu02sjzanMhxUfOL7h4+IR13+7+IWVNyYUrN+48efPhSyVCrgpG9Zp3z18UxynMJL9pGJkTheOvwKuUuZRRqYs06TJkypIth5qGlk6BQkWKR/mMzu0dXd5fxMXd7mqhO7q2YwkbBxcPn6AX1j9E9SlxJCZSyJizYMkq1lHvsAPMkIJzlIe4iCs37jx5xVt8535jVJuJ3o2UnUhFmnQZMmXJljNyN5E3GINGDCZqaGjpFChUlGKiD1NCSofK5uVDFVMMmzDuSyWqVKtZa/eobtQPNGxpRFOabYYPM0L9yN1oW1v79dD26twBP5mh8C2xhQJrgHuMRCwUqWMvqaiguwfCYzsv0x2+jTspGqpRulscu92RCKGuKmvKG3Vky5WVsC3igGq3d6lIwEJuXI411inaJEBv3c8MddR+u2y13krzzTJLf3OcEZrU0BggH5IaZ7wJJppksimmmmaV1dbbYKNWhzxGjF9oisc/nwJ0LBizZGgpeysg1DoPagUMClUphuPGkXUPHdoqVgmq3OKtKbuCFbEquD8e/bHp1IeyK859dDP2hm+TGXM/ju9ROeLj/BslX/94wujx4mY25sV9pu7L4utcHBLWHLnwESw6J3tmvexAyVuQKJD1McTL9px5CRQJX6MJWbCj4ClAxOVrFAFztpx48Bd+eYbgk5FzcVclDOS8FX1dyoYbP6Ef8xbOxX2Y6caV73sk5ru+3IiHz0vo+xvKsePN/z/sCuH2JfWjvkiNmxcN2jJcy3IWModpS2nCz7XlVThq59frLWEL9P68THVnACFCCAcWBAqEhl3ENutBASsX94NhXcqdZ9ugv7hpNX0tINlhYL5JjFyhcsNIQkFstDHHkSyw0CKLLbHUMsutsLLcUJpSNPWQrl5jrXWjepVNNn/MFcmgRNamAxH7YB5Wq2KkHksPvpTkzIB8oZG0My2j6MtI6Y3n983wDUUM0ILINwIl1wDDD/NVZZgODdTmDaj5tl77Cl91Lj6XYtdvs27x6eYDXW2FK34KyXYCDho+VCousBILwG5ZmbjKZsjo1iL6+8zbOnQ1CxYyi4OJONY0syvLKT9cLgc5hyZxbOjV0QATkQXN/BocSizhUTOeeyvMwV9mOCiuqIFmS34xwrG5+X3R2fhgVAXl+PVZKTMZzqs+Afk8p/Ttgrft9pWy95uEvjASTHuf+mJhoLM83BTAC4DSkg5gSpUc8NUjUFCkSxNft6V9Z5MDA/kJN4wJ6ySu447frbvzQIqmeJTzFAtGzjgwCsaVCWQimCS7FcUKmcLShAADMVQiLM8/8dtr0AZUQ3Ffbc50Y+zeP4AJ5+iKgYR9LVXxzdm72QR1tV2kKwA93+0K+PyXRX95sMQK7c/P7126dxYQYBWw2y2Qy833LuasTzKnm+WHa2O3Gw66572PbjriqAMea9epzSE77PTScy/s9QFNSERCyoq1bmw4cMRwoqDkzZcfFX8BQoUJFyHKCYed9NbZhBAtWYo0GekZ1jebA+4C+qQMN97x+iT2/3vsmF+Oe+O2Pe544K6HfvscAXwx2hWvnfI1Ivjula22xYV3PtkXD7YY46rt/vO/DlwsbHwcPAJilmTMWbAnZ8uOGWfuXLjy5OYpDyECBQkWyUeFeDFiJYqTIEmqHJmyZOujh556STdEAQ2tIjrPFKpRqUq1RiWaeCn21x9dYcMll51zwUXnvRtjyI/gngOlNf1dmH23Q1YAmvYFXAIoO8Y78UHO+saDnE8EjrUDlPvHAqjp5Oh+3MMTmX4siFH3fqnL68XfVt5fUNr4F+M9P1Tg/Qmwu/dUH356jndYfwszpPdeiSOepmVO+qnsGmsJHxH2MiiAhMFVRGDQzCpiiBVbUQK6fWn1zILrM0uE4DJe7bscT+6J+XUOEidmP3aUb+cFT0wwOFbGS3aXW9ja4u4SBjniSlazBskzEp79nhZbMV0k50jJHD1KTmQrcE/WoAP/11IuP0tdKYfTIdUjbymFTn75mbhJH+6h59sHJjxhztuD8zdFBt2xYz0qXZJJ6Ot9dPS/dTBDetcOkMYCrwcIutYWpmgaD6oTTYiDhFPCqyfcHZhlNROFcn75Ip5wmaLt50SRTrWLSpSqYiA9HrQpTisqwBCUI3Zgiq1nyh3T7oy1kz1NRVXqEqLM5lTnAIMXbZhF4H/jVJq2m0q1midPpOD/7zRzfzqmXHZ8aE2cqBe1CooHj7pRjjKj3VVMgRn2CmBto/S6GXcCwrFEJO5mRH2cqbomMwDPuYzTE1k6pXwmRaPACoPdw2komRXh0N215oN0uzkZhFQCpYhdlCNwq1PUopN5GDy9rGWwQyG3OKWwGQNK46GThFj1ApStEcPL2ts+XZLJo9ZbI1bvWtrMQMYTR/zW3F2RY9UASYPvppHbuDuVcBe8cr5q6EzqiWz2ihNZ+hS1PGNA+tKOuDuJj93E+68+y8NAr5OOMq+Yxfsd//5LX8jY1ZFtbyGD2f+mmXUBUet4lrqwLA6XjTPwzYjWBZTi0LMU8ymHS++MejevVqZ9HYZBQliuyLVPaXC8SEGWSuisEk3uMwMMlwERCRcFqV4OOoeFDPjoq6fpDkMyd6ROxSAFZvEjAlF77GwufgjQXMHq0Cw/RjiIbM21+HPuXNOKNjLkeh3KCwg5AkYFQUKuICNPUFBRUFFJSKGykEa+kOlsQfRRl2rz/qsX1ERfziMt1W2Yhbbzb+nOwsT573MgwAKNXDYV2HmIjzYhv6sEoUVWtdgSq1ndGtY0zbGnCzT2i3q5gU6Dvgx5f4U1dOpdEw72YdFy1Wr/OTIAMIZ2MxI3JM5XjqYbFaAhPWYymzkywEYc1Kzo2tDfV1GNkZQqR+wZA0/475hgAYxxxDhFlByVHWwK9gEANr+QjTzWnMCfI1OgwViIOGGfpeVLaYb6XFNxPiJIJMtTmy+QsazfQJ2ShMh56r5N7058LBF+1wThzd2VuaK19bshdwmCzfwVkuOFQMczkeGMOnt7qetAk+awnFUENdEgVd6HI430L0PM5uLO78u2Gpg6W1ZddYF3QCNShBeU0TalSu/VQ/CjSWoGmaETKoxdlkehaFAPga8kZiIKPPWKjOKGEWocJTBLI6tpA2pdABNZDzpJKBGrkrBJymUuQjCpVgJrEUNNL/9aIQxSVCkgLs2GYuG5RQ1JGwGmjdfSf4FAlkTVLfFLvPkajVjjO+ngzpThQmpwo95uZaguy9q8sma6G371hh8/taaHcqfkwn2ajguIGatSqvaep2/NRD0arXNfrZ5l2e37T0w79o5AxXj3eQ8uk27hAVxlCqyxtB1M8xE5VFmzH9HRAttKjaL+eCTZqATwbUNBg1o2mOReImtT4Sa3u2F/VIxtGQuGo9ldG9kw1mqiVrlFV52w7KmGXXPSHrXSKCKpkoAbI+f84QJ+rq2J7ml9U2777pABjUKcoXZvZIsGPcwF9lBQY5SiVmXhR5h1iA+DnCcoaZGOE0QEULQFEBOC4qJ0AgkBlGwBpITkprEvCQkyDlB2ESDnCMqfICkUHKDiIkDJEb3MGI6ECq5QtQVQE4LqonQKDQHUbAG0hPA2d3Do6OAd7wIMoOcI7wMMYOCADwEGMHJk7RhZhh75pCvE4OKcQkifyZ5UENbmzyaIaOHCsXSBVitkkoa104SN0+RbQO6wU+5o7wIdXLDjtdCCk9OCs9OCi9OCqwLQzQW6u2APWBiApzMAL2cA3s4AfBSAvi7Qz0XPH8W/0T12pvHFUWzgxRqr6nr07KfNaOcp+6u3siGE1UQCyBBAmQIyCGDy3wRm/gs6h0D5D1b+8wP0xFJ/5yAoSEACOMQR2DrVQxGRFkTdlccj7RJsT6WQpYlB/ilGVwn7sOzsXZQDyx/woZg1o78ApWLSinRvj8P46m8bFyUUpApRE//QYYqvMlWxCNLYsHNSxetjsNaT/GvSBA1ysCOrlcq30vrX/TVIKnG1hVagtHtt8qDcqi5avNLNdxPzrMfFzqE+9XlML0pBvtksxSG/WpHI7B1jvltXjWGDtwnnJJ/v8X1RaZtG1+hzGvGqGfLqajFr5lutICYn2WlLGjlOCLc7lJuMm6YzOvabLve7ltXPmswbX3X7xvL7eWuYNY3CbNdddMxKk5GBwxlljBDWIaTNrtOUGUVvNvOLnHODEkIotW07xxg7NtH3evcvrGOMiUEcxw6dLuOEkQ/4FWPxybasTtYIWbHDCKWUc87IGS8wEvGYuPydTkWDGG+pNkBw3QSjNFucmcshJjRKm0w0nwIql3UeB2CpO8vSfRK168uyYBFlZr2pvUBfA62PwF29RCdVz4UbNdD68j4ffaxj7v+byFxg8qJdC2XIAAXkYR/eSaPsVVX64I3tGaUY1CBZu2EDJ+mstgxdn78EML8jV6+ImNX6uvcRu654wJ2VouLoIsj881wiMZkV8DfyQ3FG55wQqnSPoR6GWgklKTbzeQHATD2BS04JyFEV1fkeEOcY76hV81wlkPxBrU+OX1jttnHls5fYoaoiy5Iu8sC9kWG8BkwP3Q9ycwkhNt7/FeoUflKK04I7gh0yLt1XQlamhZK2W3iz6tCYDq+AmGBPGmqVvs3rv6Y4ijQosn5oBpKhirsJFmFsepXpUjKPXrF86Dhl9tgM6LD0hhQ/3FjMCKM2qmOzBCRko1JsWrwC6jyxKXHBL8ntBrwmJK+ahlK5pSMYAOzawxCloypT11g3/FdjtdVvAOYKr0dah1YEPlsXwkatrmNGA5EtF0vaqIrXuEfV8FZ88NefQ02fqWs8ElsYsBGNSvzoi83a6VKh4zclucI2x1lNyKhiTSju21ox7DJAqVMMxbkowGsV3eZPS5bnH1OP//qqKoZ0K9eNI5GFYELJpnDZuuKAYWzYKp0ZkTUX0BFok8xB7Fpz+53o0wA3K45OOywPUFj98m3vI7ZOn9sYsKIr8Rb6mT5IIUD25uOX2LYB5pfEm3jLXgGF165hdszO1CF3lEh7YhhF6ia8il8nRsf2tso40kTzKjZhVk+kttAPdnGDgXlKB2vqrZw9Dpuu6n3CoCY6v9iHNVCOVOXbJ7CO3Wyxg2kmxWdLxWvFEfU0pqfcOB4XPdQqEZUgb4v0pB58Ol3Sa/0oSmRtX5I7yVaTLJlF95UqA4w7oyRCJs+aaW7SVvPwNIBeAZiuedWcwId1srmzplNnUU9nlRGA+BoYXkxQ9UuDdYwm546Bg6TIzUvlSJoLkDF76hhv39tp+XxeleBygg+EwVreM2CbhE/BXXVgDOKDiO/FCKoD5tbJqHaQtg7TiQWBfmeQkhf4V5K81jWpquDb8nZjMpF0p630vZ3XkJsfWOsWCX6K7DtwOfbaUgg7Ms/P2UpQW9oZiz47wRT4EmSN66zXjsiVmwtJVCorWSZBpYJ1DW7eJu19n3cL4I22hlNsnLW404aB3oN3VS7aCeA6hLVhLw31CjlDOg2Nt2piELBcgztH/RaKijvaqmzLdB2NM5EoRX3+fvz3FaNeTRNophg01mC48XWQlgouGIJ8deD5TYQUrygtm7KEmxhu6pnotdYsy9YJdBCovpWs04VIGzNKvD15o9Echc/LgIx33RDUsTdGqa1/g/l+FsZOilGJaGYQMyEs2MLA8lyXWWpfPHIBc326Q24tdNQo3fgdelrGsPXJ/hE0gu1aWFte4j0iqb+OEvVEIM4/p2enTHnjp4aOD6OS7wcYnfz0KR5qmtTiQNmgEr8uwABJRfXVK5/Cr2Tk3ZKkc4n4Zaa/tA7tlPgxVbuHRxVuwNSSrlQK8BKy9AA5q86CVdhhH+Vk0waeRDHicb4ysZfmINKeGCq4MOGGye/KmZiVr2TybRDkkQm5zVHH02XGbtg0pBPnMjxx+FhaZOiY0rDWFNJqdpPWgNxX/44VVGg1/C2ACoPhUiesV5aB1lADtX4MTZOey2a7yD62GyVOtRqCa5SNdNRJsT7sNCyTtwFbFDTq7GcKu2Tc9hhcg2OsfaljZ7E1fpKp6OgZ9I0PGuGt4o4aKoKsLfNXpUO+nnaOkmp1EGBESZmWXpK2fRdt/ItE+uZCzSRZ7Cpa7OiWuJ4aqxXTXk67WHE8ZrDX2JRlEjVXFdI6yUgsw2JSnd7YXbakLsvvqORlmsJ1N91VpeW805S0PYg/ZlGsI5NaaUyKEXQU0jLlWv31eORvaVThr084YnSU4VhK8KNPZdO7VmR+fgQYclBNTY3CSQQyVaYxgkEV96cl3TgL3yBjebGaX3gCE2jSzD2DjiKRk4Q4QyzbYNkvjKDXTMkzVd4jmZrVM1N4YmK9c+d2r1RGtjpogtH7J2YTjEPn5ZeVzBhfODlFJo0jCH5LvSMZi8Gymr/DGR/XI2a9EZtqY4QTQWVnNZbS8hBzJkFlqi0WXC0bbRVF6LUq+SAgrHbwhmsAQ2uL+7iy5Kpv3A9rLcV0LMUWPtYo5KWlk3lZ0l7RxojdnqlSooTc14aBPqomXYei4xGYkxq1ZaoB07cLBZUTFwrAfRLufE4k6DVNMWV8GkVvdPFwP8iReI/TFJh3bivFMwJTURmQAuqXalpauMiaXy9U8rma+QCceQNEaCRmTR9W/B7yYzp6q0jNQorFmTKSflIMfi1UUhCJBBZUNvnOJBjp4NhvrRCxcDyGJridodiqQ11zNmPqOg2sTWYW7V6dPjPZhwfFiaYRsbyZnuWnmadS1rrvXsxSIXa8w1bAGq9JHPMUKZFEg0QkZak16trPIWyf8PYC1H/naXE0jduvOKNultgU1wmwksHRuanTjsKCEBC+mVVfZbuxqNM3aOwd9MhtC6bE05GWwwAtMuPMZUOhxNd2KgttqwZA1h/1ja52ETThPnCYwfD2CgkwK/+Cwq+qGTCsUSSnKqOjkomL3Otbf2l1hsyKTSqhnH7Yxqn1mtkM63duTlNCv4Di5ATSihyPBLelbCT9lT6BaLkhoVBfpAsPiZ2MDpSM7ObVYIFfAigqc2RsZ2+D/c/1uy5zdNEiYgKlpSJTnbpWvvmVUzV1gxQvSS7dyEzv+7U3igBP8aoxXNTJ/tSdm2VaJB65eOClyxEZtJverBq5qZfpbkGgPAZz8WF/4/2i5ETM+iqzJSKrdLv2NBI1FgheytgTgf6r7g7VasVpr7ZpPj+Mn4zdP5jvUEC7+d3H2YUIfyX+zlahCluJFx+M5C40ohW+QY2tHtyfJYLBGnFZ8ntQMnLC2TzZ4nhmlBCdsi7gFGwmBBgHnPKEXoXi0UiITqUr3ysjlmoNej2THoyR+BbrH3rs/aqrl4N5k+em23w+GnZMiAv1pncJmPF5ntmpjDE8NnGy6+woMkoBLLaK4QeulTHTaEWd5ao+XF8+ffvWREYJJ1VwYH1kRlet+qiByqVkwbBqlDk8gsXjEZmt5gpeffVTtXog/dS21ZKYBsRPaiK0Hztr8lHUcAoaIhjNMlIDHUsGBL/TBRnNr5Y1SnqG27Cps2Yu3OTDMUeNR1svfKuoCf0Wf3gT+b4uHqFpXn4AbARWJH2pVrQ2ICpVWBX4fqBlLZcH3xh9MA1bt/bZ3tuEtzV6A7uhYJy0k/zMaVSYnlzlKTzTgp88ucq2Ku/yu614TdLHcLSoxcEoiSpBDQQrhLU4SqAITwcGGPOCdyp29DeM/BSpV0VnE8o1CltFUB2XlLswWrSlvJVw3jWz5qZ9YD4sIlFOZfiXHkYdyRJE8apIGKGEjiaFLwelK4x3JxvUDl6uVfGK16pda+WFHIPyY5QNwEoMarPG/KWkkZFodBY+HTrs3FO7/siZCGXrrModPQkpmXY0u/9eN9jtyINsR89nJf0xLuobnCwz7Rufu/Kox7QuJsoP65QSaZeL6ict8tP29sh+tPUBtQp/l7bvUYhvDrf0bvdq02z9HjenZAOGbCGge49A4sRkI/W/17lCEqkaj53SZvftRsSSRkuXmwL4BIlf8Xym+mB5JnZbKuvrRW7UmaW0VpJFTh535DOk6azKqDvGj8HyXgx19fW+E9xyl88lXx9SN7uC4Sq2cbxQMbuXVxCvkJRLnASLqV49WPu8EYDM1GsGVQ0E5KY4J4UVlmzcTMpKiMIQxc3c3jH2Druu6p+Zm3kyShlh7Aa18FnkxwrLn76syOCa9Zb5X/FMr8uNkxIXN2Jn3cS6GSn1bSYIQufFRaZEModdklFinSOm5ygm5c2+R5d4yo6LRACMpry4SkLlX2KWeqNVAwYYCMCIordbdhQ35LSebqb5cEqc+MShqMlSdaojA74aczVXYNNQldryQFi9K4Y6YorTVgnTikQRjhIMcQ1R2ngTNsUs0S7pJkBBdzL235bhYh8qfFTLJi1qFZXGrYSVojqjNqCZT51M3Hvxb7gpxSX5e5VqyspaEBnOyMa7c3G+NXKRERZ6vrFVOw5K5YYB7mptoO2uHiVnslSvKxpuM0OTsMLqfj7bLyQ/Lc18Y0kRktQfKcwZ39fMws8XtX6mMHJ8DgXBMQiT9wjYw/ejB39LAaau+bOjk3LZh2Kuk0cpphuFowCvHUjWVdYFS3Fd0xpidZSFIAO7s86dVeWO5aj+rs7ZoG100KKUyINMYFCectL7mMr3lpz0tQxduoRS9MHuz9AghNjHAPAVHxcRvw/G9UxJBj4LBMkcBJMwBSQzkNhy9owtAvYsTLN0e2hUO4Q7Ud7Z6acP4zZL+gy6E5wVD1E8/ccrTABBewkJcGsvbR7MbMl0P0ff+uNLIANv68m0tik0dH8wP2Sci1PyFzOCZF7AOF2+PXufioPXBgtyVstzIWSPClhO2Sze39NGyy0eKr35it7kQHcrpSRABu6DNF2uKOf5K632JrmT52+15Ce09yc6o6J6Z6d6J9/4YhT1zySiuWe8Tory7HabcvCeCp1m/aLzDThEInxCCTUfxK+taQ/Q7yDPyhfzwjySGuxqIXmLm+qcnex75OxB7PrAj2uDBpCqST4bCK7jlpPnlac3U7x51rnJ9KMwBcwFAkZ2fUQdyEBKQL0YHvVR7l+AUE8K2RDKdkOgRhqiAgJ/Tpj8ulf9tVgzonga+NQ8kKYZybROKxlt6aASbaMOwTGLD3Q2k3JbiOzaPNGbHOwamWHow4qQQinLX2Oz1VKCT8bfYZsXsNnmMBNwBt7XHoLiEbJrdnnvusT9M3CBZuJLAGXxHnUQgghTfd/FCSxgU6odSuf533oFPtDVRPB4AGJPeIjkLDLuNnnV5dsXUvkLlZpd3pOY5sXRfAgAt+3TeuoI7vPdZcni0OhaFIzCRVrl/xIBXIJHFI/Vo3S4a4JaAfuLee9iQL10nt7D8a9C8e1ogItvLEVQW/FGDkWL7zjNupeMlh82mdKH9Zvu50hvfTgDr6TUJT1oANi7EH1jgqdo6essjULU3p1DzOEDvTFabi6g+2an+tqH0jFKbimg+rZM9VkPPlFuqQCEvJSXP+mwVlCKMt6rmjnB4xA150c55MMCsjqs4kCWC9nMi95Q0UxnQT2HvOwkST+59NyqPne/m7eat4Vqi558DiXlUU7+pN9a4WiVd4foJc4Xz8BnIZTOQThJM5IZkIErhuktEFgWsZCnRyGomy11WQMOS0sxpTQXzPrTMa/T9TrrRkW2h+U3zdP38b2XO/af7xpKqLR035o18Zrwdrn//TPwJWN+vDD3OqUGQu4YBFrXppLO4bhKS/WvWZuohlAybTlB8TrQfF40+OwOK7MxyB4TsOzy9c/2DcRVGmMOEWkcO2HgyXgjtX92cqH7XO3llNKYQw9snu7JYJSglPLX2qxBSrDJ2GuVRQypJ1AgMdNvbRebOwfjKu2Yp3O5jBMVGhGGPmQoEGQHIdDktuXlXKvUVG7A+1L1JFsIZuAemrGSvFXK36nmP77vCGuuLwr6R0dLA7H+7iaStynR7qOukOdx/A3Z8s+2Oc3f2Aie6to00bXmv/+U95CNEIa00IfkLgbWufZcJwzb8L7+mFJT/rH17+YnSrDK+IO2qp+wCio+pvtn1/bYzeTJHm6HviUxc4KmsUMggI4cctKLTOU7S076tHYH7VI8qUMMjdSjEEnUO+nVNI3XIwBtq6foA0z+v9Rs1q+3QzVpd1KzDmCz3NqEIJ1NrtTkAOnQnQEQjZxpIA/gwwziC0zR+0m1fgm4kIYlB71ft0/E5P4CE0uAoo+Q2fK3AUQb324kF7FSy+NLMGPOf1YmAk0ByUZQJvplEeGQR1KL9JiLRX/9hQV79H8TscMOi+W/yze/UcP/ovoB4HIr125TWBSPym/fWTmFulBnzZoOnrsewaU/iiVRnr+ef12yPI23upYpNFt8oXZF0AlhFU+w4r6mbHofQtPippnOmCW8zuiZaG7pagvLcNkCmIEvQ2hkL0uZomXFycBOAkagpGkkFiuJ6JNc1lm1scbqA+UQVvOfS6WdXPU7z77CpiHQyZ/Q6HN/fZTZJtgUjwq37yq7hXWhJkPev+ofiAjd6/W4H8BkHzKyqInvkLS0P8odq/GepjqSVTxKNq/p60n0tIRwVp7vCnNllyXSTo6/nnkiyubCL5KFLP3LwEm2ruruPXV3FLoJHoq11zIx07xdMXxFFPwcfkE97TmhBJoL8Suron7q13S84n4BNjGhLtbvV32r/yrullX/aHc0h7nylRS5RAdRQ1e/qZo7ScZWdfcle8WTRv/Ai/laY3mFmt9YA6L+GxpoYvWEehlCLc4F0XNneISkt5OCSJQVjSIGWZR1EerqZ4TPZbJxTjLH/SaVdZgkcyVLb8/Al4FQwH8uVb/kpHfgMAUlifF4b1KKTypMsNItj13TyVULmB8IhQgu/Ui8ugqkANVN2SIIi7bKSUap7YUwG/bPmo3BKjLeG+q4ACN8RkMGTseJWFGRPX41+98Sr94we0DmvlsjnoHTgYFQ4WrgMpaWrd0utygelt++s2IWcSG2mqkOjrtWRvu5ln9NujTP+MMBwepok+6Pta0OEPpsWdRiC9vM3l9AELSd97o3eTYa8sbshj31pROOAx6H8D0GIyg5KvwQdPGzngWPuR7Tjf5nDsk6bAfpjNRVfAn/E/5LMm7puKJopWj16PNIE11S3g7L7EZdXNt8J3mQxFDz1nuNaFthkICD6NZ8Lp7FYenWyzRGcYa/DHma2S1YHa0qWKIWJdiLjCFt714pK7U0qsi/GEnEzQ64m68UIaDkbF2vRFV8w3T+q9HYF8OfFG/3LmXKfinJyXnN8PxzuPzpqzKLu7rC8xrFk4k3j2LbU1P37luD95rfYi1r0r3JXvzs+bat7knrD3WYuOsI2Y8SWQfPX8dflnrfBp3XiMALJsSjMyndgq94myfqCUFg6uGQv9tYYsojMDcEULN5e6jB++Rdsh8l0nFuKl1G+net+Oq3MvAVCCv5z2XZ9/mpnTiMwNxzDzSuFqFscFlybgVNw16Td1mie4YFkvm907gUEd+N632rgLv+xbxOrhLGN6jcRfJxZpvc6u22tUwtwIwCctYbvK6zr3999jiQvfphZqs8FOL4jLho9oeXTuy+Fc0X96JIJEIy6jJPY045mz143oPLWOFfG2LLxf1jOZSkqXaV7YDzxpcp9lP5Waue0p3r6yY1qJ772dewAk831oix7A/bvz8ibFgq5aSyH/+Af1UFyqQ4ueyKjnhzZ2stwWbTW2AKELqPJKxdykffXIqWl7Wt609f9UEKlP2DmVq3IZ1Mp5aRPNUVdNR6Ur1qLT206YpRnJFMQ6OJFB0linIG9MAHmHENVNxiUeAyNlbtbftfyILBqQz0QKh+lWKZS6AYmzO/LmL1ETqjEkJdcJpFjxgR8Uo4A3fwcmsBz/CUQ7Ys+ShavB25U1tcW1FD8PkT1iyEj5MxbattXE2WfofQzEmKFv2GYGj1b07qhEhcefc3fvpq4wid961m5h00nfW7QaTmd4qZZhCqBfTo9+O+VcRULn3tpHczNHgVBWjpq056qwP1+RZ+4JCWSwgl6RM0oexR+Ap66qnj+DNcgh++rTDHKZWyDwVIYV8ZfVwn+YuGmdKQ3sterPIXhBYfo+gsTG1IJXRSR0XiyvNZ59uypmFzFxbOSgHpNth1zYssik4XCnlzIAPd8H4Cnjqb2U8z0vpq1ZZbot+aZ+wQFCpRL4z6HjjjyJgdWcC1b4EaqZdwkbGeQOcHYM6UhlhcyULQiRiRXoevZ/tKrybqYsK+8HuXC2JSwBh3AqGQkdTegAKWrjrSQKgNdGhtYJ980ykf8T2GQ56l/xQ0ZjfuMToXbIsFeQrvrADt2STs/xpusXT3ubpF4jzNOoqRo/Vvb8xjk/9/JSlV38d+jMEE9WMVe14jXoftoJwlkfQCK74jXfeKDwhigr6dkm3xU60ITMGrGku8vp/ySaB5H2RgG0ggqIvN19p2ecTY5gZHiJitYigB4yV5FJApDu+egb/AFEjD1sE037R65PoCBpPMxpdVVfruz6fg2my0obxS3nWpxEzm3EMzP4Cuu5mTL0TWjP5fSRRUzNDp/hilfC0bvmltdyzdF1NqRr9L/ZvWdBsPzfutQUAJv0q5eYctiJICIfUunScO6eOYAhII6lGaoibIxaZs7StHUPSZ16lDnKUZyUbQVVM7tmLtH0HE4NDJNssbn9kB27exmDQ+N9rZ3NPdRMlHnV1HiaaW2wfPUn4ywDSu6U3EBuJhMZbl9egFmqLNpPCLVJapJQJym5JFJbKiBIokKpeZURDetqUOu4kyrNOHHve5Acusny2BN3qafR9cCqaAr6zWQ8hdOXcpcKiIo6OH1fxtexrIo1ip/MSoBQtBSLUjuqn246vvvOO/7g1U63R3V6I7ntBo6H0kgdFWrWFDYRXO06JfpJqTjeR+mALuq9ywioj/VfwahOwB1MX2F1UGG8MUf/DO/3kydGxdd1eyN4HEFHZLkIivH+xqTieiBJtqj7+DlH5CSTvN9CCW6LXXhFsjHHHOFBb9IpbWedZ2oL9IpT7vfHmp/F21BYsDwR1g0pLfzMEPzgyQbKr6QOugFmtXTARfOTunp5Qtkw9lgtXVHYEvwnq1tj1qTYa8n56YzaH5RPsNo/7qyg7fJ/uMtRfrfIeP61Uk/6lYEvH0QAXBvyoR+4LaBrFdgn4mEUdr+6CFFz4TS+vD/iPd64e6WnoT9QRbuwDRTsrqdZmpfsTFVjir65qvOImbTVCxdd3dsd7WVlWBNXD188WeYVsR/6tEGq21V8Eq5GfJ7sP0oCE2oPrm1/alhgfi1GeCnK1r+22H3od+R79C/n6SurvL83PPk9eDqQGIR3bI7QJ1QLpBvfZYmP9+jSGvvk/yw69YzfFMazwz7q8w1unkdbzwIgxByf0wY4mX2D7aG+/vbiaH53ff3bRyogw5P4k2fBfYMV+CfeBrUuZWypJqpnFTur1rLA2bZLyG3kdRlAWDUUF4OLiiuNzCdvJE2W4vBKbKRjOCJfZvMfDoefiuG5q7HBwSNxDoa2yWu1LA/jifPqTh7mg7hkWsp7rqECMSKKIcDgno+96i5eX9dqZtfVc6NRDLapOsR0SRUGwy8ccDxQ69TF4mSA92dzUhz1Wf4N/+hvlN8AViRNg/oS62hlMFIy1RdOGtyxW2bJ6JbexOdwy0xXNzgSVAxOeG+mKD8QaC9drjMN4vFR4xMZNvcLgOKcLi57w6ZzZXwvK7g253k5gP91+02rm+9HdqC3aFTfID8j94DfejtoE8suzE8tBHfz1sIvjh1F8ng6FQ736JUYNEvr4uMvJd8OeHDxhZfDr0zHJ/oKbHB+7WEezUBtPY0kECUBLIWWTsrvgKICbUrFUm2z3kKRdngxJWtmsUximdErVz3M3J6ie65gbTsaFEA4vXLqXV1CBDPCBuo/pbeWu9BOcK1H4j07axp699oKVVzWrNgTN/OxHMi9bgQgnPn/CG3WFRHbft19MeMSa/Z7wxUupecEkx4Z6JZXU+vuspieJxnDqAk0+JlY/japmnfomIwxQo2n9Da7+lFIILXbsRegeuEe0fr8NTj1/VQLoIeh9OPpFtQT5Ux86G8jL3fDHOV+dcVv+YQm838GgHnGNBW5P348QeW3W6rtTrudfJJK7DbqYIJncrRd1RACpNDFSyxO5aCExEIJwnGmRRtIdmiCCcgS9284fVSd5kcLRomcvm51KAiIirGSCQyTlI7bcVATtIM+NqfugDB5XESuXxFyxYDoQNYAa2wBRogEDsvrzDPRAtKS2+0Y1SGrqFghiGsFK2WMXm4CgrozsmMAmEtN/P6m/yD6EXbROERBSLt2abZx0M9ui/d4SmIiWl3gEPIcYVTwYbKnyuxTwaGPn5uqIZDSQ2Qfz27DEstEplPuSk4KSdx5SCVNwmAssMKLERl9beqS2Vby2xYHYIrSADK/wLf4tFb+AFfmuWIzvKHHSi5rXXPcxYNW9G2S9s1o41lbwECy492BTyFkaqOdt/pJ9YrfEjtTKd6KF0V0uWJqWWyuqDKhlxOyW9Vi5j7fUYL2Hr6yu/L6kvL3Vty6MBd0NbIQ2JCUDelj0e2P8WZJvnHDQUFynypqI+n2dQhGM6+ZNDm08peQQvxIBUK5cQt5AxkCtGiQ34/6vK34VnMWB67WyU6nqdxI/5nWoSH88rUuRBrsci8vj3jWQ8lxvJf9+U81GO2nDJvA/J23ssL/9buOOXsrR+66STLb0/vQ+Md2nofYwmfBfIwHHyxwWDc8yh36PPm7BbLj3LdW2wGffW3RvtfX+Y8Kvs19WdNLPA0JE7bUc+SQHbaOHd5Xiuop5X/VhBUcxeCDsAuiU0MF4SaB/obaH4Xsme11770Z5TLk3Evtj4JHxllznX+s8pzxeMbbTwKYLnSQ70tJBy928XniKcgXvPEcOHg7UehyNca7e5AyGP3V5X67Dmntuv1aeGeNigKQh9V4tQbCRqDYWe2931p+LtnmnWgODWzENr/xWPxT91o5j1TyKAD9eZE6E/hyBqtgfM20LtrBslIiADQ1VDR2ZgBQb5ZgFaywSJReXh3JmfhnaZn7sOopVXboMlhqYJs4sgqk939iEeJHf9HlnIamRT0VNLgNipaTh8ZJUOzLZexWxWxFq81EDuxVr7dlAL/EGSohdI9aElFLbD5utI3Z2yRrbd5h/P+WnvrSliD15a4mlvek4yi4eKk5r9ioAIBUm4N1f7szW6/fbSsdzLe2/yUdCbeTuWPSvZjIengpp9gD9JPMk9up1XnfNIcNULOrwK3K1hJuinj1Mx5V83Laut7M0e8cyxSbkP7ewxeuAfodBNEVLJnbLHeAlMJu3Juip+E3gvf9HOnUKPw0k3e8zDyRySeiUPuSW48q86vPJndufVXL+LiqteiBeiV1ECr72T/G8Qv2wNYkRi1whY9b37TWP2MZPy/hevBsKRgqD6KR6tZ6ZJ5hveymby4SfSWi+hMrymKX+JXquKByBLlzzG/2+KPPRwz2aaYfYHbSULXor4+i40kCNMZfCCk95+Lp2+4KA4T35NZkcOfv7wKnqY0QaiT6UxSOU3T2FM/Fp8L4+fL7X0G+NYf9Dt47+eQUl6irR7r4aYqevqemol7vOlr0YQ39U3iCBWmL8YfQoASujNllytMy1/wjj1zVCKWXk8GF3kQgrSFxlmG5Nnuwhm4OCzLKJALDiy/crQRc39F8kCVgedL4FpmNER52/4bvrk5puS7wUBCNPMFEVTdXywubSuhOAVj841pb5/niGioVbRGiYC3B+hqHd/CaZJrNxkLAsZAQz3LfNCaKrkgr+OPCMuQ7DcC6BpWaF+BOEqI/+yLdwkGHxBL4ol0k0jEHLese/hABuuDjc1kXpqLREWXm/wRm/TmdbUUobb9JZb7aHrVneOhCQxUKT8BBugmfWoq8jfUvqDxLC2jrURzgWmPKjvS+gg1G+pTlYR/zWx7rxj15G8G3Y8PJM8RWSyraG5s7uVVrZBUARTYBbOwEIgyLqMye+o35TDVHrtFR1NnUlRI0LesE+GkAx7LyPOts5DuIWpnG2glkMoE7ABrFR+oIFchsEt8lvFV355EPs2rJDtaZMN6nDWZ1W9gBXRjHgFg2eJwXlm+cxMd3OqBybpG3ZLECLbpM0yHYl6CDajPtpmINSPz64znk9f1QVBMv1KiqyQB8GKp0KwF0K6vxyS2gkQ9udgME/ArogvCBGCMzAJsXAXStGLZLbwNgrQpred9OFakc0yeaae2ox3sLx3lj232q3MtT9WGUOe2QnXwP4UYkR+csUXuR0Ea9t1P7mgMY447wwcMy9eCUC4J2EUIgljn9McTSBIIs8c6k4kUNRbGWUh9Jpe4TXhzTUGshAHwASF2GsnwloDa9D8e436l25k80S3PVCnNRj0mjqNwaiLsFlImS3bSe54Lx6PPx9fSzI/K2xdKHlumJJsVO2cPYftKj5xN87bUkfTbME4lbjiYdDCYBavFbBfg8s/GhqLnvgmr/bGesr40cbpcOG0P56qLZIz2tCN47Tm3old9Z6Z+qdiwTxXvqVUfv1cA7maUtfNAYqeoknF3xGANPzdT690OL5obZhcbnbzwt2dk5L3f9XyaAwzN18z2xyrcruSMXdReQ+V9ds8hWOzGDDddzZKd5YY5DzDwgXMnOPTGOSWpU976Y3YNtHqbo8VjY07E4JBi9o8CvN/lU7lXb2+OrS6Ke8e1cj6qdbay6FX/r7gedNO5Ezt1i+iut88ust1mOCkEky+fSnAKUtYzV1P7tK3pLtbQpsj3XN8y0lreVFro9VpGLnBA4AlJyxC8eGu0v7oqqqa6dait9ST22+5r39g3Suilm/3tqC4XGCyWr59HcWU8l+LKBRNwuOU71c02OxIJfuaGkn5fHUn6xYeT2UTLJmcGUvFhrubGusH3/CYLJsFr/nnZPfxdMWursLGa73c3buejctzB1TkzANGd9sOOcdLrOeurDU+ackP8J4CneL2exOK899nYWrdnm8gMGKwUTqPuuR+6Loj0FefrWWGN8521w08398akmAGXRw01AGZbI9MeC73FnRrQmn21Zf+FDJd+L1tXNYx4q5pG4jXEToavMf9GxJllTJZR6790ikmdZnpy79fmNYD9p1nzeX+rhFXdf3JJ2cNODtxtVS46wCL4nSD4nPqXRzf39J0sCfbTg+tvOHWnuGegy3N+zqVNmZs5Znb0iPtXfN18VmiWasK+jPj/nDjfDi2nmgwC2H/+Fh5OHvgvzUaShfSrxY6GRsFQQYeYSgCEAsk+RjBnYAsS71I4iADF2my+XL3fMNzrfl5zR6WmKzpGyjxtw4MtZLyseruAa9f2t7eugXS3mCgxBm22yLO0ppQSe/in13weZSmc0n1CREnQoxIAmSgFqYAfyPIwGrVeWUjBgQHBBR+K4bgG/AVtVO+ar1EP2TLgZArQq8LM0AngsB/0zKq2sj1SF9zmlE9j7o4psQg2o24UNWLRYQP5eADpO0mBCDrQ8cutiYCxZ7ORLG7pi1RU9Kj9sNyTOzXqZ9SaW7PVV9QluHno5bBdxJ3Mj/4Tp5m9BgG0DAEMjsfiViR0Igeuo5QwtYUwGpdq6224yrP1hx19vXRe6jqQhTSfghmMobvoegFmmYuoLjFBKnOu6Bv9pTKaP1x3mizWppRkukkUtXDPAJG4ArKlj+svyqIAVN4OEqtIDHo7RhOkR1WSYXgbpjIHidLPRPlA8ocjNFs/qiTHC0cz3/PZbfWBm1WV+t2WA7batUm35OzdazwDwXbLiurD/5r+M2jOP/Dj/fZUf8v7SXy6699uHzXvV6AdQZ6Nb7roilApsAMDP2e0hEq9e8+p1e6J79pv+2gFsEfJei8D8IQ9TSHUeg9nGfO+92qGxld3zW29W/me0RjOmedXZ8x2DqsVsP91OvOe2IzSjT7fS/A6Sai/de2fHhLVLPemqhJAaqjwDVI3/Oz+wAUaJBuRJxnJ9ch2D4AXTk4iIA7uxTWT9C4o0qNGRpSFoWUtSFlVbVRIwsb/MNmNEowAfCkKjzkXrtCyYRQsi6UbA/l6Aau0vIaYMWkCGB9BPB/BLCxRhDTx6JvanhYDLgOwXErjMyEwQBO6VKYOkHjeDK6iNopgiPXjZkSGYyn+7sIr6BDkDuoK+YdE+xfCMDNWwOeGtDfJ+7kVe2IwlAzJtRMD/XoJKy0vBqt0IWR0WFkWhiZSMN9xCG4jkw0F7r5ucUAbO46eNLN4QLOqbf+QopUO4ts0cTiugRiaV0miuWxwpXZVbOJgE6uU2/xf05hNTBdq9NAY1FLQW5iSUsOrD1RN1/5fdoEk59vctPdy5OxbdPz84S2iTZfxtt6ucKX5a4hOoGiPTO8uD3PVzOvy/O6FZ/qgjNorp68NcDkk/+a6pH38VsD44zY40kRl51ZJn40oqavw2Q+7JaZ33xeyZqQ7aDgU6dR6Eva/fnDVdbLfeuDL9n5EWn4GYDJq4zh/KSPHt9eUH+CPH1UJ67XV+9p5uOJzx7PB389RpGI7ah9G9nJtdHci+YxkbMdVsY1O9iPjUdXI3sfl8iKozizL9hJQqW2nkgRgeXVT1wHXsO5ewjRh4rE06xghw1Z50ihdtMg40j1bH4B1XZGmKL+IHs/Pr8AZExzCu22g3HGVGXNfcWh00bmaYDOtfHCuwAXfsgVlOl9M8oTJLH7jq7DIy7eu19YKqMcdmlSbL2h8WkkI8KaN+YkqBjwShGPSFTFx9yPzCXmCbgPLa15HjwieXWyxEec1GbVD1yc3R3hBB6iUE8zspnFhP3WC4Jh42fy3LoXy9cFNxrGzu2y0o9tnr2WbbH51RqJUdqaTohewEusmJVl7eoMCiu7rje3Xk5IOl5+LlD0fSj5EpKyhMSLyvR1JAJz5xF6AGd45vmk/qGSxPE33umeGmxe1ZGJQ+TmshYWbrEL4aI3BFKO9CaSgdQm35q/azNGIIXH89Phx1TEHWBPzs5I+0S2ff9sa9AeLUJDAHiEdDfKRuQy6wAK5Gc6R68W5Bnz3R/eXWvGr+rbhVxfKMQR5aEhhApqhwLhRewASI3I+W4EMx953Jftem/CXHTQiYzqgMiJqbiw7eAhb74DG0eQd6NKBEYAznksEmywLjJIgssQTau+PBqYc3jyO/bkrogAycUxbuZvkVAD2NVgFtueiBWXkohRQ97SbZDbbnOsIpgCdGjPARv5tFqSh4uMYvsmADKinommXRSUdg6KqSalRzVE+DbuD21KPoicrZ22ttkRUcfZJODhr26PRSX5SGiru1UPrJ5W+0SGvKYwk92IdQ0SR+h53TLkvVYtat3LEPmhOJTILDa42yhi5lqVM7ak/rTAaqlrihwZ8SkVLjeqBZHthoKgrgVD6B0RoWNOzeePG0yqvfKMrEZtueTgLmUSKvBJyVQEPL1lsz4foxPp1ZJIbRTqAOYanvyOPLmrTxSJMUFXD98Bu011IKUVn5JIkHci2ualFGEowJxZ4SDnfFbtFVlVGOCQgBh6bQHWtYRK83sTcFk9uRpc3aRXwutHq/7iw+/MF7FNgYacFkxLmqyubVvMVkxKogBxywLbpr4IogABfs65rp89FEN3YQKHarYjpWW9PrJKQfd++5rSFsOZwgYVO1VqehxxczawiJes4uCCoVb1r9mtKFCZ+foQkcZCwfsB2fc9Gq5UBecqmLG2LrTym0CnScC8YEanAzmDl5OqF2fIxGJNY51LmJb6KMxoIFqk/gi1H+me9dVl3yIrtR35fyKegsiPFKSB10SH4poyOohbDNPwOywyKg0Z7w9NclUEsJLdPKq1psy8diGsM4khbAdF4celoh0Dt4oaZRk1kSVoilL/WTy1aykODoNoEQDdHTULIEfs20gjh2RSTfsdAk62T/wzyZPL8Z6SMy8x/Ep4DB7mbwIBoEDD+CM46xPwR4IMElKmVADOHDi3HlLZHPGyQwRgPEdXhY9MAu1hFo/rGtOrXlp/4Svwg+SMrWU62CIid2wC7hz5BFJ3MJGnpEo4D/aU4nBSY36z27GsBmmv5HA7DYhodZdHejuSomoAL5CD5W8UxM9Zp2QBI0jJMjdW0GulEWZuGbF6N/jM2FsLrYRDycuZPuW5bYxbNylkTM7GoU5dnHUeNSIJzZkYRk1XE1esLsdynQa1mXFsJ9Wiy76Tg3pmOef3WwlkEeoLBlDELQctzqRl6JcJUUDeHATJRjG0J5vjkeg8bBrHCRU+RYbdUA556vjR6MEW7qgNwMbNr5JEhIIHR4K71ZgNpItphVe0NrSFUlDH1xIERoCENUz1R0/bUD4eqpBsmJ6jriHQh9QGTFDjBtBhJETTCCVrC7MmrKOUct3SUM4rIZtCOP4ZZhXs71ozut1JImKOf0WibXCmfZaltzfA2+O3zz/56Pnx5ho+ZDASc0ha4Jtqf9hpYkzhdm6JhhdELN7WDVTCTKSoso25u9SQCGwrotpVkwigVM+miJw6KYL73RsKJCGVgkP2oZNKK+Mzy6HlHKUJsFxVtSRSL9teOi3nSJszu3Rykr3f4EIpHsIFVq2ogLLIMKkPLGuy11unBdXKMaYWlZJpLVz+8kY3S6efnVSQnlRLXrFcG+Xb/VLrSjzjLbLelxxuFy0I9UQtYNwmrzGnvQmnvoQ2/6Xb437UF4Ve9eWjV4TqpMJh0xgwSI0JAAd2UhORgzGIZyZFQ/sEMAhVDo+3PNpSGdmw+sQhhgi8qt1VLHhg4YyfAaTaJM37EbWvJwZ0K1Ju7kFbInBepdBMQ9XUKGORLFekUNuggqmSQhS20UeKfqvqGARVYTzGAGuCiEd8hALFVze6LJm0qmxxS8cS0BvA3N1YoU8R1NChBhgRAelGtwBaNAvgPDZTK9XtpEg0ox/4Me6XozL8CC0AmRTY9BK7L/QGrB3RUR3NnmRTuOyGTv+2nkJkq5hy4COzR4WMQhqlknAThI1ArRxDEvE35ADh+eOeE/CUJOMwcD8CII/mfaRTErQrCb0c1nhD+s/5bCvYzi8sJOrUGMaXedKjy3sSLb/VTbzXIjWU5HiHMvb3CLQJrEqQNos6hmQRKVfWAs6BsAudGAXSpUppUBNxGsKOh1UCggk0rG1VBk2XFOjZC6+zK79/I5Mbebm5SbriUQzh0VTX8vXxbpXLF/Fo1wAle95zC0KZahowW41YVtc8Qef9qIK/UR2K5RUPSVEMaqA6HBFuJSJQuVS524nlvK0zgdvPqFi60Ppoh85v7Pj6c2Zw3A+Xg4RKPO/dN1scXRs2XmZw3qVZc4Ukn1e+xCjHylRbLfMejL79lgAusdPUUs5Re+wqdYgdK3XaORL90jZLs3txd3mMG4wDiyFaQlc3m0rrDA5PNaNekBXKtMmkJ6rjwtwJPDQBgag19XblexR1vVcQ/HFhogE37Y0h84fU9y46nwFo+cYD+8Q8mLCyzoqYbjGcTDmJCCe1I6yFqioCK+IdSDJjMreYUTOAV6U7h0RpeI9g8MUbdThlSM+jDMAAhNw0AKZdE8WTWTZURQHwh9bToJKcHS2ijzC9Anb7Ksgy83mIAMeYaRvpDTcBKDWsAEePKW6H3FoyhUg6TxstUYHFBZcsCigxE4IEd4+TF2rMSS5lSF6Fiw+h+f6MNTwyiT0tEi3grl8CxT3eGgC51lWyPMRKCsusaNqR+FHZQIQ2kqPXDZEfRPrGjl6b6MQ0130jd25rlr2obtQWWhj8a60QmOBY6WcUWFRvMP+rbKyF7m4yiSwjvFhmIzapO7u3ifYLN4uWmP/Bm9lA7kKkmwcqEsK2/pGzE4weg71q45OPxXxKC0NSOu5Y9v4JHySXPY+7RT0ZaGuHtJo2DpD+Vq+smynLuzHlFPtmWtuFSWfa8LK31HGu6VJWVY8YRyNVRjso2gDcU1P6iqfCEoaSp/XTh++//eyT998eH26udmK1aJsiA+afPWcz6Vahv7ncbBQUHDZRFLlubinYH6kYkRg1+HVBlDC8waNP3397fry52m0xk5RXo7muDkQKDbVlqnis2pWG6TdnMuSi0fAL6FRedbzt3jeAqopR8IqQpcxKnUFhIhHPTocP9OlDQL59ATbPEL2RMQaO/P7cFHGXf4bOGxnIanm5VtOrofA6jTGljFOI2Of+caHEKybnmcPbW8Ct3H54erk6QsPFrGvylMXnk727hR7KzJ5Ys1LuwhpipPQ5GbEc7IWLmpcrPopeSQIOKu5LUEGPSSLoGiKJV0nFSxpir448qItlF6iviS99WxUcgsuy15kf2B4ldB6fJLvrNCcOLeRnJ7/Tn9wVc3v5SNmTjRGAhKaRFL+nafoV9yJ7Q1GWxQZFUY4oi/JxEosB7qBs3pJvEyLcTknguHO+Ku/lrWtIm1bJIcZlZ0nkHACwQU3AEunGBo/wDdxjRHg87jQd8AgOZmD6Bw+oeGad69cPnA3B971oxjFZiF1sSDOZhKo3OoOSANK+BJIgU9AxnoDaImpwjXKnHUBLnrWIMwkni9A/eMsSl81lX82L1GosrSpMc+U1QXXzsEO387/wLpT4lsc2iwILsBwBHaNFd5uc2iWXJ5tq+82C1aVAK/NC4Mic1ZrHAI9lPIoiKOYeY4+LoONNuow+6qVWt2rhLSFOsDMDEQbuydjG8j3cJgs3C1b+AFLJUj7i0zyZX+pMfpbvNKXxDSn1dKlln6TjeepFjrFgHZtV+0Xy0o7KjhJ+Y42msGyNF5ubvB7m4Y1kkWJmyeSJKbGa9tlJbwlmSDgvswWE0RT/fJY8IBg43mFT40fDaZ7SWjJE/lLLgUVZDzdd1VTWw6XdsKIjIIE1LRrdeLm52pz3LSS5Cu2Rb2Kaoo+lGbcewKpa0fNKY8iZ76nGo2KsNo0eT2WfpCNorJd2P/vbTpPTiHvcDaWndkIt7AGlcJaWkxKyqFyLpaX96SoOT4fFiVfMlVnYHo7LSj4PASPtQPGAe13hOk1mao1InpRazYiPkvC+dJ9bDdkuIYfzRCfpU/7fBqmvr1GPaQhpmXto92V279H3/9mabUuUhqEKEgfG2RAIx/8JXKIMlTVIa9Fh+U5U5rDcgtqBotfXlCkWMLi6qFNV0e5HMNyU7ePdff/h7rBbzFr0C+h99OtR2ywb/h7uey2BRbZXcm1VVXwOetu2DDZ1crutSgB2onVC0PEetLOQYBkuI1X8UZzP7UzCW+ZyXbrkr8nzhUq8/Q9209zsSiPdKajFA4XN+Idr8mFqdLmyG7B1KNOCYeMNfsa9saXYgVwTI01iRt13nC0BJ9gAQI486Qyxr7Df9KJJMQ1aQn3s+bZfI4cNQ2U3r8BnDUEQ26p/dB+LWPoNemNABOW+4O42tTxFYAuaXU4jFZ0wRXKkKIIQEI7ZV+3KqctbENsZl6GUt6Cel8GYQ594Wo93hCNve3O9fR0kSuZL2jSOpHgLIad2ntVzAHfMBtU0aZdQ/rRRNG1THwJ+1qsQRpGYDwgCufz6hqCJDa8B+1Wtp055QeMSi6EiOzVMUytr2GRw5hj8jekoNhiNtjare9deqyhI/6XZEW45Mk0JxNFIM41Ldc3O74jk0dihZaBpNraZ7nJlE70l3dJGT5WgcjRMSqvgg9X/B1fna6wwy5I8g95z4XvSIi7oL1h6U/q11XFMazH27w54zYuuX2gAwMDENVP1urX89wZ5PYjYMJZIzwE+BkDROdra8/+B0DNywTM1SRkLcECPwPOsgbVRSe6iXEGPmTa2SEh77XEsMOkEQBe7CfszCDrH7iJDQLxmJ2q1F9Nay5CFnn7GutfeKgDk621JlzD437VFGQhjZLOJsguIAXbRz3CPGi1rY2XYrRyh4iy/cKTVYgHRiCTFgCFyagAyPXialXBtSx6Il43UDFzVq75YgGo2uu7PQ0AhGuSuzdGPTP5MPhI26QLkRudaAf55716g0eDGhHd/55mw6agdT1u6x34Ekpzt53jcqtnLxXSVUMHrVM0H0Snz5S9XwzCgoHJfzns32KVXj8eqO44PgurkM6TidWggX3fr09pmHgHkhAY3yvWCiIEzW+2UhBQo013GIZu4a6tn3Sci9IOdIr93RWRk7dh4UV712owg3d0nuxrW3KC+vNie4VGowrJYMwi0oRGvMEKrk1yczl60zPgUSatj02HrA5gyHi/8k2Ppi2O0TobG6vIcAsIigAs9k/lqEFjwS6qBTpkubMwoDWmYiiwyO+qGLj7tFZuUWhZ4TVGdO2Odku5BbdfGgmf1xa7wMpSNkt1elk3CWLUqnv9epaUrb/GRa0biar2lDPa789uJSiYrmENgSD9A3lWPctug19kzsEEH5RXddnE8hnVxfIQGn5j0VGoylbpJF9gwfHOYsIb0lEvesCFVNKcdOWXRQkkqMtCtFanp0qTgmF/Vkngxq7IJ64Y20Z9mik6VWj44QjRO8N8QrfXQq4yHSvEcspO4PJuvBhQqiLTt5FfWGiP/lYd7n3P0X4Wbm8NyXPCJ8ZnSdmjGXicmyIYbA8pPB3ThEwRgvMTvdQcm3X57eljMrJ0mtkebn/Y0bHUFezw75apityPIH5MxyGGAOUbtjQzhFg0ClGE32AIYT5KodY6yBewVvTQWQR4O9mI8gC/jJA+Fzuqkz05j2RS7/Afu0x2Amj2nccRLmtx2GlGH7Io75Jz0fIhHNaXbBajGkFKC7fR02CIcAPiEz2+dHh+uL+MIAR30xFb0XFJfIdLNcSoLLcUElFSMQ/rWC1ODLy6xbbEZtfY7YS3B0VedpSwGYAWGxsxLijGn4nG8J4LsI+u89ihoLtuNxFv1VCDqAnhm/eCQ5NA9ecPedTwqBYQfIb+TV2nqi9QqDHzThDTPZfBQNBRBw2vc79vAG8n+H7XpBqSNJt+wpYHxb73MSI4u7BwZFc0oa2HbMXSPmtT3Wuvy8h3d050Qv+rwjXxBZKtU2EzUEdr/0+Qtu4BXnCAKloudfkLYbKqa+VV04fn/W9+rAV6u3RpJmwVfg/45pDaEMEUqeuC2FG/4DYCFjSA4Az1ODEEq2biF/DnJI7VaMIiZGDBs/8YEJKKBH3VlTwFUCHIBJTaNhOrWy9zQEqXLcTc0wqZaiWOK+2LlM2DoIYbhthoLo85kb+xleUmHKWwTRkWmSLy3oij5m72/sIbsgVGWVreEjqH72uNetr/a4J4hnQnSH2WDq7xeEtGc37LM99eTwHxnvrtYZ2M21E9+6gsWr/f1LI1YMIP37jMAb8Z/+BzbcrYl+Iry+MuXka3Jp/KKqB5InAv8JenoLBAqojEIpatsmltyEsnxhpRz2rwKbTU55aeh3hjDvoV4Bd9spqL/wBWahxELkFTKyvbh8qB8OvKRKHzwAeCDtx/8+NUX8GW+NFpH7HPgq62g2V82pw12cGcsYfwARzcBq4Iy/eh6jGq7jgH66wRakB6V/P+rK78E7XVOax4u4C03/6ATsxB9Ox433WHVj1v49iTPVyXKXTwqa1JQ88Mkq2/jkD5WKnvuuv0QJE9u8ZT9pd1uAxk+9u5VqBDhI2VvjNJPk1pyWxzcJTsjBr0Z7SsZrwYhecjDKZxOgNOr03effgzPeLo87+pNMP8cuVxWOybSqgqFZh33FagekcYUkaPILQDYoQZHFB4NucvSctk0YaRtNl7jdiNZPktiPcYd7ila8idDRFgXtk2gfrN+en64vtxulmP9ZHMb/TPJYlarqmc56n/1eIVDcTxzVM/aQU2mnObFS8Sc1iGUqHDJFHRL3jS6AWj8ysE2kPBs95DNEjhcOzzf3mwv5kMurMgKTwdiclYtZ8xsbg5ppCFeGhINNfROon6cXXA/GazuktHo7mjAbmMxcuafiYebs85IdjHQSa7R8xdcS231p/YBx2TWkGkNTD9/WVxnWAgxYqjTJrliMKtC5uXvOBJ6gqXH8MwOVHaXD4yItwGjdq2Zw5HTLYRj2f0fjZnthykj01d2GC2yiYM912sjb3/WUurWVknZYQ591ScTUslSVhGr1U53KajEJwGHUN/QT8caDJ3KI6ygEaVVlgMNt9XV04IAoNff/h8b/3hsHP/HbP+EBABev/bnSvLYX+dceMaul/bsyRvBQQACfrhXqPmcoP/l6cRmT70Zkmt+Lqbx4PETlR/72fA+1L+dJ8lJ9hd20Xzkr7h3OwnA0k/JaXa9SuJJdw4S/qFVknXtij1+fhH4wBfYJ3+pX8lz16deJIL+Yxx6efRjvZu816R0iTPs6yvdb4v8bsPc1fPyqTF3up0sO999Z4mjLC+trIAo2KPbWPdgv51rD0b9j+C5wckHpoEHKNt3Y3PcoWlH8FzFcY+gLMBTE/jAO1klHx8nz906+6Mr2rGwPSyLqG0JSTrbFFx7pCR6HxV2Y5+gp/azLYsvWTGRCVz7z9f7nSFpOODyQMHlDrHsVtw4scjMuvNsyhHeg6i0Mu9borSR9wCbTgvqHvImJH7nB5SALbiB1BUEvSDw4FVRwLaYVaTpZ91Ylg/Smkz2dOD6MRsG7PCAEz54xCjMA3YQihQecAIvCAV35hlCGngdv1SX15+s53rPc30ohHrCwo39yEmQd6A8Y5GaX3nde0pwaN+ZwbcCivpFHl677ppczJCySb02jfE4Y0UDz8e7KDu0zn017bp57FJOq3ELD482N2d4tLn1MP8Uk7xwIdOMeDvEq8mQDb3H6fzE4R3+Fdf+4H/YYOjb+9N6zKnjIEeGWQFssOdU5uvzU04t8eixxfdI3j3kcGmWh0BQj8DygV9nBJ1SUgMkHwUuHaJyZF+An3E8PBn0Pg/qRKCa6Sz8gb4ggn5wRxrA49mWbFqMxFok098jMzmVzix+PskaMGCZO32evUKmqcC5dy3RaKCPQhTs8ACcT8O8FgVV+FpCGMVrKT2cey0twZTXsshVvZYtRhATv/vBITXdZhTBL1FNO2B6y2qM6KualW3McGJF0fBcKbIkUFtWpkS9xLWtgk4BVA/X8ZGsQU2WUEv4sLIDS7dMvffrafVKeZU91v9oGf58BVEJO8Zi8I0xo5j7YsOfDiP1kC9BX5Gubcx290mkKaPG5vKips/OCKDiLxSjh4eCEvYsTwmDErhWlYhXu/HibrBqG3Dvnll9nyqilyVqacS0OSs/8ZJ+XtWP5tgpcj0QUH9Wt9YuQPXNniEgBQiKUqcTNLbQ2moGF6503LzkrsBJp5zmwZMXb2ecdc55PvZ1rDB/5V9wUZHLZtqmVaC3ggQLESrMFVcVuyZchEhRXouWRKJExcmXe9qNNEj1ShrjI/jGq5QuQ6Ys19WoUx8FtbKjIUduLMjzjwb5GjVr0WSFof7T3Ts/um+KiXrrY5gRRhqur376G+CNPQY66FBs5CAXeciHJZYyZ8HSMo8a2v3fWjQKUYRilKBZ2HDhI0QeRZRRRZ3saKJNTnKjiz6GGGOKOZZYY4s9jjiTp8MXX30jJWHPwSa0VRRWOmI8ETaZWAJCgwwRI45Z+bb7X4KjjmnTboedNthovwNY+PFJoTH24cTPWHNTEXvvg10YThzNtppafP64nPFMMM5kk0wxui/Q4NVJL7JNCT5KKcNPORVUUkU1NbrunhumSXTLXTc7qWdWFk/vu2JKW9YjP5NTW6FXedpRW6Ez1HDTB2f4rpgoUvMLBxcO1s9xlK3iFg0uKVx6nfNNNvLWZdiGioIiXFO/iHM95+Wgc8LPk8zS1210QrW+gYS8xwlxtsetVaHfD+cdFIesZNyTTmNhOF9EnCfSYNGNsQhEdA4RXR+LQIVDUWLoNAZDIaLghoLBkIZCRcFQcEMebYfrp79zeZzeu/wIy8Y3/tMdY3BG7yhdI+wCbx+J5/UGeOp+50gJFpzfYPvj0xcX/Vk74wid7L3eckZjrEpdZ+8v1/DU2mk8q2xgNt0ufpA1+jJdt2W3GjcYStUaw+49Qp2hJnA+rh8BMov7D/44+fD3iL/eJDLcavLl95Af/YHBHFQcTs/bzyZ5tIeN8/647YeoljRI+tJv29P6gOvN33303/xjmzb0CHQIzUThwYjS9BcMOHyv8tOn/nfi/4cL0Quhnv5bGnkeDuL9vlau8490C7o59s3X5Xh40II862N/0Z7Uiy4mT/+g//+I/qvfS5X/U3nh1eouAAA=";var At=(n,t,e)=>n<t?t:n>e?e:n,Ia=(n,t,e)=>n+(t-n)*e,j=(n=1,t)=>t===void 0?Math.random()*n:n+Math.random()*(t-n);var La=n=>n[Math.random()*n.length|0],_e=(n,t)=>Math.hypot(n.x-t.x,n.z-t.z),Da=(n,t)=>{let e=n-t;return Math.atan2(Math.sin(e),Math.cos(e))},_n=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-e*i)),cd=n=>n*n*(3-2*n);function hd(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Vt=n=>"#"+n.toString(16).padStart(6,"0"),Ce={get(n,t){try{let e=localStorage.getItem("sixthtackle."+n);return e===null?t:JSON.parse(e)}catch{return t}},set(n,t){try{localStorage.setItem("sixthtackle."+n,JSON.stringify(t))}catch{}},del(n){try{localStorage.removeItem("sixthtackle."+n)}catch{}}},ka=[{name:"Rookie",cpuSpeed:.975,cpuTackle:-.06,react:.45,marker:1.2,chasers:2,smart:.45,fool:.85,humanTackle:.08},{name:"Pro",cpuSpeed:1,cpuTackle:0,react:.32,marker:.85,chasers:2,smart:.7,fool:.6,humanTackle:.05},{name:"Legend",cpuSpeed:1.03,cpuTackle:.06,react:.18,marker:.55,chasers:3,smart:.9,fool:.35,humanTackle:0}],ud=[2,3,5,8],dd=["day","dusk","night"],fd=["low","medium","high","ultra"],vt=Object.assign({quality:"high",camera:"endon",half:3,difficulty:1,time:"night",weather:"clear",sfx:.8,music:.45,crowd:.7,hints:!0,autoSwitch:!0,shake:!0,replays:!0},Ce.get("settings",{})),pd=()=>Ce.set("settings",vt);var ge=[{id:"koo",city:"Harbour City",name:"Kookaburras",abbr:"KOO",c1:1409960,c2:15906347,c3:16777215,pattern:"vee",emblem:"wings",ground:"Harbour Stadium",att:84,def:80,spd:82,kck:78},{id:"iro",city:"Redgum",name:"Ironbarks",abbr:"IRO",c1:11740702,c2:1973018,c3:16777215,pattern:"hoops",emblem:"tree",ground:"The Timberyard",att:80,def:88,spd:74,kck:76},{id:"cyc",city:"Northern",name:"Cyclones",abbr:"CYC",c1:5974685,c2:13225686,c3:16777215,pattern:"sash",emblem:"spiral",ground:"Monsoon Park",att:88,def:76,spd:86,kck:80},{id:"ray",city:"Coral Coast",name:"Stingrays",abbr:"RAY",c1:1026459,c2:16738908,c3:731699,pattern:"band",emblem:"ray",ground:"Reef Arena",att:82,def:78,spd:90,kck:74},{id:"din",city:"Outback",name:"Dingoes",abbr:"DIN",c1:13067546,c2:1447446,c3:16115400,pattern:"yoke",emblem:"paw",ground:"Red Centre Oval",att:78,def:84,spd:80,kck:72},{id:"lyr",city:"Capital",name:"Lyrebirds",abbr:"LYR",c1:1319743,c2:10474810,c3:16777215,pattern:"stripes",emblem:"lyre",ground:"Parliament Park",att:86,def:82,spd:80,kck:88},{id:"min",city:"Goldfields",name:"Miners",abbr:"MIN",c1:1184274,c2:14856199,c3:16777215,pattern:"halves",emblem:"picks",ground:"The Pit",att:76,def:90,spd:72,kck:78},{id:"stk",city:"Snowy River",name:"Stockmen",abbr:"STK",c1:2059066,c2:15985362,c3:8003359,pattern:"hoops",emblem:"horseshoe",ground:"High Country Ground",att:80,def:80,spd:78,kck:84},{id:"vip",city:"Sunset Coast",name:"Vipers",abbr:"VIP",c1:15759891,c2:2757189,c3:16777215,pattern:"vee",emblem:"snake",ground:"Sunset Bowl",att:90,def:72,spd:88,kck:76},{id:"kea",city:"Southern Alps",name:"Kea",abbr:"KEA",c1:3955242,c2:14833451,c3:15790310,pattern:"sash",emblem:"peaks",ground:"Glacier Field",att:82,def:86,spd:82,kck:82},{id:"cas",city:"Highlands",name:"Cassowaries",abbr:"CAS",c1:1052692,c2:14032678,c3:16240919,pattern:"band",emblem:"casque",ground:"Rainforest Park",att:86,def:80,spd:88,kck:70},{id:"rav",city:"Pennine",name:"Ravens",abbr:"RAV",c1:15921906,c2:1382172,c3:4891615,pattern:"yoke",emblem:"raven",ground:"Moorside",att:78,def:84,spd:76,kck:90}],Le=n=>ge.find(t=>t.id===n)||ge[0],vd=n=>Math.round((n.att+n.def+n.spd+n.kck)/4),Ua=n=>(.299*(n>>16&255)+.587*(n>>8&255)+.114*(n&255))/255,yd=(n,t)=>Math.hypot((n>>16&255)-(t>>16&255),(n>>8&255)-(t>>8&255),(n&255)-(t&255)),ze=n=>Ua(n)>.55?1053206:16777215;function Cs(n,t=0){return t?Ua(n.c1)>.7?{c1:n.c2,c2:n.c1,c3:n.c3,pattern:n.pattern}:{c1:15856108,c2:n.c1,c3:Ua(n.c2)>.8?n.c1:n.c2,pattern:n.pattern}:{c1:n.c1,c2:n.c2,c3:n.c3,pattern:n.pattern}}function _d(n,t){return[0,yd(Cs(n,0).c1,Cs(t,0).c1)<120?1:0]}var md=["Jack","Tane","Lachlan","Sione","Cooper","Mitch","Kalani","Eli","Josh","Manu","Riley","Tevita","Harry","Nate","Kobe","Isaac","Viliami","Ben","Zac","Luca","Aiden","Jarrah","Mosese","Tom","Billy","Hemi","Ryan","Connor","Dane","Ari","Semisi","Will","Kai","Matt","Jonah","Reece","Tyrone","Finn","Marcus","Wiremu"],gd=["Walker","Tuala","Marsh","Faleolo","Barrett","Ngata","Sullivan","Vaka","Hodge","Tamati","Fraser","Lolohea","Doyle","Parata","Keane","Mafi","Brennan","Whaanga","Coates","Havili","Reid","Taufa","Mercer","Rangi","Dawson","Piutau","Hartley","Leota","Quinn","Amato","Stone","Kepa","Burns","Seumalo","Nash","Toala","Wright","Paki","Flynn","Matagi"],ov={FB:[82,68,70,84],W:[92,62,62,76],C:[85,74,74,78],FE:[80,66,68,88],HB:[82,62,66,90],P:[62,92,86,68],HK:[74,72,84,82],SR:[72,86,84,72],L:[74,82,86,76]},bd={FB:"Fullback",W:"Wing",C:"Centre",FE:"Five-eighth",HB:"Halfback",P:"Prop",HK:"Hooker",SR:"Second row",L:"Lock"},xd={13:[["W",2],["C",3],["SR",11],["FE",6],["P",8],["HK",9],["L",13],["P",10],["HB",7],["SR",12],["C",4],["W",5]],9:[["W",2],["C",3],["P",8],["HK",9],["HB",7],["P",10],["C",4],["W",5]]};function Md(n,t){let e=hd(n.id.charCodeAt(0)*7919+n.id.charCodeAt(1)*131+n.id.charCodeAt(2)+t),i=xd[t]||xd[13],s=[],r=new Set,a=t===13?31:29,o=(l,c,h,u)=>{let d=ov[l],f=()=>(e()-.5)*8,g;do g=md[e()*md.length|0]+" "+gd[e()*gd.length|0];while(r.has(g));return r.add(g),{role:l,num:c,name:g,lane:h,fb:u,wing:l==="W",fwd:"P HK SR L".includes(l),spd:At(d[0]+(n.spd-80)*.5+f(),50,99),str:At(d[1]+(n.att-80)*.4+f(),50,99),tkl:At(d[2]+(n.def-80)*.6+f(),50,99),hnd:At(d[3]+(n.att-80)*.3+f(),50,99),kck:At(n.kck+(l==="HB"||l==="FE"?6:l==="FB"?2:-8)+f(),40,99),skin:e()*6|0,hair:e()*5|0,build:l==="P"?1.16:l==="SR"||l==="L"?1.08:l==="W"||l==="HB"?.93:1,tall:.96+e()*.09}};return i.forEach(([l,c],h)=>s.push(o(l,c,-a+2*a*h/(i.length-1),!1))),s.push(o("FB",1,0,!0)),s}function $c(n,t,e,i,s){let r=Vt(i.c1),a=Vt(i.c2),o=Vt(i.c3);n.fillStyle=r,n.fillRect(0,0,t,e);let l=[.25,.75];switch(i.pattern){case"hoops":n.fillStyle=a;for(let c=0;c<4;c++)n.fillRect(0,e*(.16+c*.22),t,e*.1);break;case"vee":for(let c of l)n.lineJoin="miter",n.strokeStyle=a,n.lineWidth=e*.12,n.beginPath(),n.moveTo((c-.25)*t,e*.02),n.lineTo(c*t,e*.5),n.lineTo((c+.25)*t,e*.02),n.stroke(),n.strokeStyle=o,n.lineWidth=e*.035,n.beginPath(),n.moveTo((c-.25)*t,e*.17),n.lineTo(c*t,e*.65),n.lineTo((c+.25)*t,e*.17),n.stroke();break;case"sash":for(let c of l)n.fillStyle=a,n.beginPath(),n.moveTo((c-.25)*t,0),n.lineTo((c-.1)*t,0),n.lineTo((c+.25)*t,e),n.lineTo((c+.1)*t,e),n.closePath(),n.fill();break;case"halves":n.fillStyle=a,n.fillRect(t*.25,0,t*.5,e);break;case"stripes":n.fillStyle=a;for(let c=0;c<12;c++)n.fillRect((c/12+.012)*t,0,t*.035,e);break;case"yoke":n.fillStyle=a,n.fillRect(0,0,t,e*.3),n.fillStyle=o,n.fillRect(0,e*.3,t,e*.035);break;case"band":n.fillStyle=o,n.fillRect(0,e*.27,t,e*.26),n.fillStyle=a,n.fillRect(0,e*.3,t,e*.2);break;default:n.fillStyle=a,n.fillRect(0,0,t*.04,e),n.fillRect(t*.48,0,t*.08,e),n.fillRect(t*.96,0,t*.04,e)}if(n.fillStyle=a,n.fillRect(0,e*.955,t,e*.045),s!==void 0){let c=i.pattern==="halves"?i.c2:(i.pattern==="yoke",i.c1),h=Vt(ze(c)),u=Vt(ze(ze(c)));n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.font=`800 ${e*.46}px "Barlow Condensed","Arial Narrow",Arial,sans-serif`,n.lineWidth=e*.05,n.strokeStyle=u,n.strokeText(String(s),t*.75,e*.58),n.fillStyle=h,n.fillText(String(s),t*.75,e*.58),n.font=`800 ${e*.17}px "Barlow Condensed","Arial Narrow",Arial,sans-serif`,n.lineWidth=e*.025,n.strokeText(String(s),t*.31,e*.2),n.fillText(String(s),t*.31,e*.2)}}var lv={wings(n){for(let t of[-1,1])for(let e=0;e<3;e++)n.beginPath(),n.moveTo(0,.45-e*.3),n.quadraticCurveTo(t*.5,-.25-e*.3,t*(.95-e*.12),-.05-e*.32),n.quadraticCurveTo(t*.45,.02-e*.3,0,.72-e*.3),n.fill()},tree(n){n.fillRect(-.09,.1,.18,.75);for(let[t,e,i]of[[0,-.42,.42],[-.38,-.08,.34],[.38,-.08,.34],[0,.05,.3]])n.beginPath(),n.arc(t,e,i,0,7),n.fill()},spiral(n){n.lineWidth=.2,n.lineCap="round";for(let t=0;t<3;t++)n.beginPath(),n.arc(0,0,.3+t*.22,t*2.1,t*2.1+3.2),n.stroke();n.beginPath(),n.arc(0,0,.12,0,7),n.fill()},ray(n){n.beginPath(),n.moveTo(0,-.8),n.quadraticCurveTo(.95,-.25,.85,.05),n.quadraticCurveTo(.3,.1,0,.35),n.quadraticCurveTo(-.3,.1,-.85,.05),n.quadraticCurveTo(-.95,-.25,0,-.8),n.fill(),n.lineWidth=.09,n.beginPath(),n.moveTo(0,.3),n.quadraticCurveTo(.12,.6,-.1,.9),n.stroke()},paw(n){n.beginPath(),n.ellipse(0,.3,.46,.38,0,0,7),n.fill();for(let[t,e]of[[-.55,-.2],[-.2,-.55],[.2,-.55],[.55,-.2]])n.beginPath(),n.ellipse(t,e,.17,.22,t*.5,0,7),n.fill()},lyre(n){n.lineWidth=.15,n.lineCap="round";for(let t of[-1,1])n.beginPath(),n.moveTo(t*.12,.8),n.bezierCurveTo(t*.9,.3,t*.2,-.3,t*.75,-.8),n.stroke();n.lineWidth=.05;for(let t=-1;t<=1;t++)n.beginPath(),n.moveTo(t*.14,.7),n.lineTo(t*.2,-.55),n.stroke()},picks(n){n.lineWidth=.12,n.lineCap="round";for(let t of[-1,1])n.beginPath(),n.moveTo(t*.6,.8),n.lineTo(-t*.45,-.55),n.stroke(),n.beginPath(),n.arc(-t*.1,-.2,.62,t>0?Math.PI*.95:-.5,t>0?Math.PI*1.5:-.02+.05),n.stroke()},horseshoe(n){n.lineWidth=.3,n.lineCap="butt",n.beginPath(),n.arc(0,-.05,.6,Math.PI*.72,Math.PI*.28,!1),n.stroke()},snake(n){n.lineWidth=.24,n.lineCap="round",n.beginPath(),n.moveTo(.5,-.65),n.bezierCurveTo(-1.1,-.75,1.1,.35,-.45,.72),n.stroke(),n.beginPath(),n.arc(.58,-.66,.2,0,7),n.fill()},peaks(n){n.beginPath(),n.moveTo(-.95,.7),n.lineTo(-.3,-.5),n.lineTo(.05,.1),n.lineTo(.4,-.75),n.lineTo(.95,.7),n.closePath(),n.fill()},casque(n){n.beginPath(),n.moveTo(0,-.9),n.bezierCurveTo(.75,-.3,.7,.45,0,.85),n.bezierCurveTo(-.7,.45,-.3,-.1,0,-.9),n.fill()},raven(n){n.beginPath(),n.moveTo(-.95,-.55),n.lineTo(.1,-.35),n.lineTo(.95,-.7),n.lineTo(.45,.05),n.lineTo(.6,.75),n.lineTo(-.05,.2),n.lineTo(-.55,.5),n.lineTo(-.35,-.1),n.closePath(),n.fill()}};function hr(n,t,e,i,s){let r=Vt(t.c1),a=Vt(t.c2),o=Vt(t.c3),l=u=>{n.beginPath(),n.moveTo(e-s*.42*u,i-s*.46*u),n.lineTo(e+s*.42*u,i-s*.46*u),n.lineTo(e+s*.42*u,i+s*.08*u),n.quadraticCurveTo(e+s*.4*u,i+s*.36*u,e,i+s*.5*u),n.quadraticCurveTo(e-s*.4*u,i+s*.36*u,e-s*.42*u,i+s*.08*u),n.closePath()};n.save(),l(1),n.fillStyle=Ua(t.c1)>.75?a:o,n.fill(),l(.9);let c=n.createLinearGradient(e,i-s*.45,e,i+s*.5);c.addColorStop(0,r),c.addColorStop(1,Vt(ur(t.c1,.6))),n.fillStyle=c,n.fill(),n.save(),l(.9),n.clip(),n.fillStyle=a,n.fillRect(e-s*.5,i+s*.14,s,s*.5),n.restore();let h=yd(t.c2,t.c1)>150?a:o;n.save(),n.translate(e,i-s*.15),n.scale(s*.25,s*.25),n.fillStyle=h,n.strokeStyle=h,lv[t.emblem](n),n.restore(),n.fillStyle=Vt(ze(t.c2)),n.textAlign="center",n.textBaseline="middle",n.font=`800 ${s*.17}px "Barlow Condensed","Arial Narrow",Arial,sans-serif`,n.fillText(t.abbr,e,i+s*.27),n.restore()}function ur(n,t){return(n>>16&255)*t<<16|(n>>8&255)*t<<8|(n&255)*t}var Gn=new Map;function Ci(n,t=160){let e=n.id+t;if(!Gn.has(e)){let i=document.createElement("canvas");i.width=i.height=t,hr(i.getContext("2d"),n,t/2,t/2,t*.96),Gn.set(e,i.toDataURL())}return Gn.get(e)}function Sd(n,t=0){let e=n.id+"kit"+t;if(Gn.has(e))return Gn.get(e);let i=Cs(n,t),s=180,r=190,a=document.createElement("canvas");a.width=256,a.height=128,$c(a.getContext("2d"),256,128,i);let o=document.createElement("canvas");o.width=s,o.height=r;let l=o.getContext("2d");return l.beginPath(),l.moveTo(58,12),l.quadraticCurveTo(90,30,122,12),l.lineTo(172,40),l.lineTo(156,84),l.lineTo(134,74),l.lineTo(134,180),l.lineTo(46,180),l.lineTo(46,74),l.lineTo(24,84),l.lineTo(8,40),l.closePath(),l.save(),l.clip(),l.fillStyle=Vt(i.c1),l.fillRect(0,0,s,r),l.drawImage(a,0,0,128,128,46,8,88,172),l.fillStyle=Vt(i.pattern==="yoke"?i.c2:i.c1),l.fillRect(0,0,46,100),l.fillRect(134,0,46,100),l.fillStyle=Vt(i.c2),l.fillRect(0,76,46,10),l.fillRect(134,76,46,10),l.restore(),l.lineWidth=3,l.strokeStyle="rgba(255,255,255,.35)",l.stroke(),Gn.set(e,o.toDataURL()),Gn.get(e)}var Fa=[["up","Move up"],["down","Move down"],["left","Move left"],["right","Move right"],["sprint","Sprint"],["passL","Pass left / switch player"],["passR","Pass right / next player"],["step","Sidestep / tackle"],["fend","Fend / big hit"],["dummy","Dummy pass"],["kick","Punt (hold for power)"],["bomb","Bomb"],["grubber","Grubber"],["drop","Field goal"]],qc={up:["KeyW","ArrowUp"],down:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],passL:["KeyQ"],passR:["KeyE"],step:["Space"],fend:["KeyF"],dummy:["KeyC"],kick:["KeyK","KeyR"],bomb:["KeyI","KeyT"],grubber:["KeyL","KeyG"],drop:["KeyJ","KeyV"]},cv=[{up:["KeyW"],down:["KeyS"],left:["KeyA"],right:["KeyD"],sprint:["ShiftLeft"],passL:["KeyQ"],passR:["KeyE"],step:["Space"],fend:["KeyF"],dummy:["KeyC"],kick:["KeyR"],bomb:["KeyT"],grubber:["KeyG"],drop:["KeyV"]},{up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],sprint:["ShiftRight"],passL:["Comma"],passR:["Period"],step:["Enter"],fend:["Slash"],dummy:["KeyM"],kick:["KeyK"],bomb:["KeyI"],grubber:["KeyL"],drop:["KeyJ"]}],wd={step:0,fend:1,kick:2,bomb:3,passL:4,passR:5,grubber:6,sprint:7,dummy:10,drop:11},Yc={step:"A",fend:"B",kick:"X",bomb:"Y",passL:"LB",passR:"RB",grubber:"LT",sprint:"RT",dummy:"L3",drop:"R3"};function Kc(n){return n?n.startsWith("Key")?n.slice(3):n.startsWith("Digit")?n.slice(5):n.startsWith("Numpad")?"Num "+n.slice(6):{Space:"Space",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",AltLeft:"L-Alt",AltRight:"R-Alt",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Enter:"Enter",Comma:",",Period:".",Slash:"/",Semicolon:";",Quote:"'",BracketLeft:"[",BracketRight:"]",Backslash:"\\",Minus:"-",Equal:"=",Backquote:"`",Tab:"Tab",CapsLock:"Caps"}[n]||n:"?"}var Na=class{constructor(){this.mx=0,this.my=0,this.held={},this.pressed={},this.released={},this.holdT={},this.usingPad=!1}clear(){this.mx=this.my=0;for(let[t]of Fa)this.held[t]=this.pressed[t]=this.released[t]=!1,this.holdT[t]=0}},Oa=new Set,Zt={pads:[new Na,new Na],duo:!1,binds:Object.assign(JSON.parse(JSON.stringify(qc)),Ce.get("binds",{})),any:!1,anyQueued:!1,pauseQueued:!1,pause:!1,menuHandler:null,capture:null,_gpPrev:[{},{}],_navT:[0,0],profile(n){return this.duo?cv[n]:n===0?this.binds:null},label(n,t){if(this.pads[n].usingPad&&Yc[t])return Yc[t];let i=this.profile(n);return i?Kc(i[t][0]):Yc[t]||""},rebind(n,t){for(let e of Object.keys(this.binds))this.binds[e]=this.binds[e].filter(i=>i!==t);this.binds[n]=[t,...this.binds[n].filter((e,i)=>i>0)];for(let e of Object.keys(this.binds))this.binds[e].length||(this.binds[e]=[qc[e][0]]);Ce.set("binds",this.binds)},resetBinds(){this.binds=JSON.parse(JSON.stringify(qc)),Ce.del("binds")},update(n){this.any=this.anyQueued,this.anyQueued=!1,this.pause=this.pauseQueued,this.pauseQueued=!1;let t=[];try{t=(navigator.getGamepads?Array.from(navigator.getGamepads()):[]).filter(e=>e&&e.connected)}catch{t=[]}for(let e=0;e<2;e++){let i=this.pads[e],s=this.profile(e),r=t[e],a=this._gpPrev[e],o=d=>!!s&&s[d].some(f=>Oa.has(f)),l=d=>!!r&&r.buttons[d]&&(r.buttons[d].pressed||r.buttons[d].value>.4),c=(o("right")?1:0)-(o("left")?1:0),h=(o("up")?1:0)-(o("down")?1:0);if((c||h)&&(i.usingPad=!1),r){let d=r.axes[0]||0,f=-(r.axes[1]||0);l(14)&&(d=-1),l(15)&&(d=1),l(12)&&(f=1),l(13)&&(f=-1),Math.hypot(d,f)>.25&&(c=d,h=f,i.usingPad=!0)}let u=Math.hypot(c,h);u>1&&(c/=u,h/=u),i.mx=c,i.my=h;for(let[d]of Fa){if(d==="up"||d==="down"||d==="left"||d==="right")continue;let f=wd[d]!==void 0&&l(wd[d]);f&&(i.usingPad=!0);let g=o(d)||f;i.pressed[d]=g&&!i.held[d],i.released[d]=!g&&i.held[d],i.holdT[d]=g?i.held[d]?i.holdT[d]+n:0:i.holdT[d],i.held[d]=g}if(r){let d=m=>{let p=l(m),y=p&&!a[m];return a[m]=p,y},f=r.axes[0]||0,g=r.axes[1]||0;this._navT[e]-=n;let x=null;d(12)||g<-.6&&this._navT[e]<=0?x="up":d(13)||g>.6&&this._navT[e]<=0?x="down":d(14)||f<-.6&&this._navT[e]<=0?x="left":(d(15)||f>.6&&this._navT[e]<=0)&&(x="right"),x&&(this._navT[e]=.22),Math.abs(f)<.3&&Math.abs(g)<.3&&(this._navT[e]=0),d(0)&&(x="ok",this.any=!0),d(1)&&(x="back"),d(9)&&(this.pause=!0,this.any=!0),x&&this.menuHandler&&this.menuHandler(x,e)}}}};for(let n of Zt.pads)n.clear();var dr={ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",Enter:"ok",Space:"ok",NumpadEnter:"ok",Escape:"back",Backspace:"back",Tab:"tab"};window.addEventListener("keydown",n=>{if(!(n.metaKey||n.ctrlKey||n.altKey)){if(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Slash","Quote","Backspace"].includes(n.code)&&n.preventDefault(),n.repeat){Zt.menuHandler&&dr[n.code]&&!["ok","back","tab"].includes(dr[n.code])&&Zt.menuHandler(dr[n.code],0);return}if(Zt.capture){let t=Zt.capture;Zt.capture=null,t(n.code);return}Oa.add(n.code),Zt.anyQueued=!0,(n.code==="Escape"||n.code==="KeyP")&&(Zt.pauseQueued=!0),Zt.menuHandler&&dr[n.code]&&Zt.menuHandler(dr[n.code],0)}});window.addEventListener("keyup",n=>Oa.delete(n.code));window.addEventListener("blur",()=>Oa.clear());var Jt=null,fr,pr,Ps,Fi,Ba,Td,Zc,hv={excite:0,base:.3,musicOn:!1,_next:0,_step:0,init(){if(Jt){Jt.state==="suspended"&&Jt.resume();return}try{Jt=new(window.AudioContext||window.webkitAudioContext)}catch{Jt=null;return}fr=Jt.createDynamicsCompressor(),fr.threshold.value=-14,fr.ratio.value=5,fr.connect(Jt.destination),pr=Jt.createGain(),Ps=Jt.createGain(),Fi=Jt.createGain();for(let a of[pr,Ps,Fi])a.connect(fr);let n=Jt.sampleRate*3;Ba=Jt.createBuffer(1,n,Jt.sampleRate);let t=Ba.getChannelData(0),e=0,i=0,s=0;for(let a=0;a<n;a++){let o=Math.random()*2-1;e=.99765*e+o*.099046,i=.963*i+o*.2965164,s=.57*s+o*1.0526913,t[a]=(e+i+s+o*.1848)*.16}let r=(a,o)=>{let l=Jt.createBufferSource();l.buffer=Ba,l.loop=!0,l.playbackRate.value=.8+Math.random()*.4;let c=Jt.createBiquadFilter();c.type="bandpass",c.frequency.value=a,c.Q.value=o;let h=Jt.createGain();return h.gain.value=0,l.connect(c).connect(h).connect(Ps),l.start(),{g:h,f:c}};Td=r(420,.5),Zc=r(1150,.7),this.volumes()},volumes(){Jt&&(pr.gain.value=vt.sfx,Ps.gain.value=vt.crowd*1.4,Fi.gain.value=vt.music*.55)},get t(){return Jt?Jt.currentTime:0},tone(n,t,{type:e="sine",vol:i=.2,slide:s=0,delay:r=0,bus:a=pr,attack:o=.004}={}){if(!Jt)return;let l=Jt.currentTime+r,c=Jt.createOscillator(),h=Jt.createGain();c.type=e,c.frequency.setValueAtTime(n,l),s&&c.frequency.exponentialRampToValueAtTime(Math.max(25,n+s),l+t),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(i,l+o),h.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h).connect(a),c.start(l),c.stop(l+t+.05)},noise(n,{vol:t=.2,freq:e=1e3,q:i=.7,type:s="bandpass",slide:r=0,delay:a=0,bus:o=pr,attack:l=.005}={}){if(!Jt)return;let c=Jt.currentTime+a,h=Jt.createBufferSource(),u=Jt.createBiquadFilter(),d=Jt.createGain();h.buffer=Ba,h.loop=!0,h.playbackRate.value=.7+Math.random()*.6,u.type=s,u.Q.value=i,u.frequency.setValueAtTime(e,c),r&&u.frequency.exponentialRampToValueAtTime(Math.max(40,e+r),c+n),d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(t*4,c+l),d.gain.exponentialRampToValueAtTime(1e-4,c+n),h.connect(u).connect(d).connect(o),h.start(c,Math.random()*2),h.stop(c+n+.05)},sfx(n,t=1){if(Jt)switch(n){case"whistle":for(let e of[2320,2470])this.tone(e,.32*t,{type:"square",vol:.045});break;case"whistleLong":for(let e of[2320,2470])this.tone(e,.9,{type:"square",vol:.045}),this.tone(e,.22,{type:"square",vol:.045,delay:1});break;case"siren":this.tone(392,1.6,{type:"sawtooth",vol:.09,attack:.05}),this.tone(494,1.6,{type:"sawtooth",vol:.07,attack:.05});break;case"hit":this.tone(120,.16,{vol:.5*t,slide:-75}),this.noise(.1,{vol:.16*t,freq:500,type:"lowpass"});break;case"bighit":this.tone(95,.3,{vol:.8,slide:-60}),this.noise(.18,{vol:.3,freq:700,type:"lowpass"}),this.sfx("ooh");break;case"kick":this.tone(190,.11,{type:"triangle",vol:.5,slide:-130}),this.noise(.03,{vol:.12,freq:2500});break;case"pass":this.noise(.09,{vol:.045,freq:2200,type:"highpass"});break;case"catch":this.tone(260,.05,{vol:.12,slide:-120}),this.noise(.04,{vol:.05,freq:900});break;case"step":this.noise(.12,{vol:.06,freq:3e3,slide:-2e3});break;case"bounce":this.tone(150,.07,{vol:.18*t,slide:-60});break;case"post":this.tone(880,.5,{type:"triangle",vol:.2}),this.tone(1320,.4,{type:"sine",vol:.1});break;case"ooh":this.noise(.9,{vol:.2,freq:950,slide:-500,q:1.2,bus:Ps,attack:.08});break;case"boo":this.noise(1.4,{vol:.16,freq:330,q:1.5,bus:Ps,attack:.2});break;case"pop":this.noise(.25,{vol:.2,freq:1800,slide:-1500}),this.tone(90,.2,{vol:.25,slide:-50});break;case"move":this.tone(620,.045,{type:"triangle",vol:.09});break;case"ok":this.tone(520,.07,{type:"triangle",vol:.12}),this.tone(780,.11,{type:"triangle",vol:.12,delay:.06});break;case"back":this.tone(520,.07,{type:"triangle",vol:.1}),this.tone(390,.1,{type:"triangle",vol:.1,delay:.06});break;case"tick":this.tone(1200,.03,{type:"square",vol:.04});break;case"good":[523,659,784,1047].forEach((e,i)=>this.tone(e,.22,{type:"triangle",vol:.13,delay:i*.08}));break;case"bad":this.tone(220,.3,{type:"sawtooth",vol:.07,slide:-90});break;case"sting":[196,247,294,392,494].forEach((e,i)=>this.tone(e,.5,{type:"sawtooth",vol:.05,delay:i*.07,attack:.02})),this.tone(98,.9,{vol:.3});break}},cheer(n=1){this.excite=At(Math.max(this.excite,n),0,1.4)},update(n){if(!Jt)return;this.excite=Math.max(0,this.excite-n*.28);let t=Jt.currentTime,e=.85+.15*Math.sin(t*.7)*Math.sin(t*1.9+1),i=At(this.base+this.excite,0,1.5);if(Td.g.gain.setTargetAtTime((.1+.16*i)*e,t,.15),Zc.g.gain.setTargetAtTime(.26*i*i,t,.12),Zc.f.frequency.setTargetAtTime(950+500*i,t,.2),this.musicOn)for(;this._next<t+.12;)this._seq(this._step,this._next),this._next+=60/112/4,this._step=(this._step+1)%128},music(n){n!==this.musicOn&&(this.musicOn=n,n&&Jt&&(this._next=Jt.currentTime+.1,this._step=0))},_seq(n,t){let e=(n>>4)%8,i=n&15,s=[45,45,41,41,48,48,43,43],r=s[e],a=h=>440*Math.pow(2,(h-69)/12),o=Math.max(0,t-Jt.currentTime),l=e<2,c=l?[0,3,7,12]:[0,4,7,12];if(i%4===0&&this.tone(118,.16,{vol:.5,slide:-80,delay:o,bus:Fi}),(i===4||i===12)&&this.noise(.12,{vol:.09,freq:1800,q:.8,delay:o,bus:Fi}),i%2===0&&this.noise(.03,{vol:i%4===2?.035:.018,freq:8e3,type:"highpass",delay:o,bus:Fi}),i%2===0&&i!==4&&this.tone(a(r-12+(i===14?7:0)),.16,{type:"sawtooth",vol:.11,delay:o,bus:Fi}),[0,3,6,8,11,14].includes(i)&&this.tone(a(r+24+c[(i+e)%4]),.14,{type:"square",vol:.028,delay:o,bus:Fi}),i===0)for(let h of c.slice(0,3))this.tone(a(r+12+h),1.9,{type:"sawtooth",vol:.018,delay:o,bus:Fi,attack:.3});e===7&&i>=12&&this.noise(.05,{vol:.05+(i-12)*.02,freq:1400,delay:o,bus:Fi})}},Pt=hv;var za={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ui=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},uv=new bs(-1,1,1,-1,0,1),Jc=class extends Ie{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}},dv=new Jc,bn=class{constructor(t){this._mesh=new Tt(dv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,uv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Is=class extends ui{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=yn.clone(t.uniforms),this.material=new Re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new bn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var mr=class extends ui{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ha=class extends ui{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Va=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new st);this._width=i.width,this._height=i.height,e=new Ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Is(za),this.copyPass.material.blending=Ui,this.clock=new Aa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}mr!==void 0&&(a instanceof mr?i=!0:a instanceof Ha&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ga=class extends ui{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Ed={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ls=class n extends ui{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new Ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ve(r,a,{type:hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ve(r,a,{type:hi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ve(r,a,{type:hi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Ed;this.highPassUniforms=yn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Re({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new st(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=za;this.copyUniforms=yn.clone(h.uniforms),this.blendMaterial=new Re({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ps,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ct,this.oldClearAlpha=1,this.basic=new Ae,this.fsQuad=new bn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Re({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ls.BlurDirectionX=new st(1,0);Ls.BlurDirectionY=new st(0,1);var Ad={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Wa=class extends ui{constructor(){super();let t=Ad;this.uniforms=yn.clone(t.uniforms),this.material=new Ma({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new bn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ic?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===lr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Dc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jc={low:{ratio:1,shadow:0,bloom:!1,samples:0,crowd:.3},medium:{ratio:1.25,shadow:1024,bloom:!1,samples:2,crowd:.55},high:{ratio:1.5,shadow:2048,bloom:!0,samples:4,crowd:.8},ultra:{ratio:2,shadow:4096,bloom:!0,samples:4,crowd:1}},fv={uniforms:{tDiffuse:{value:null},uVig:{value:.35},uSat:{value:1.1},uTint:{value:new A(1,1,1)},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uVig; uniform float uSat; uniform vec3 uTint; uniform float uFlash; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = mix(vec3(l), c.rgb, uSat) * uTint;
      vec2 d = (vUv - 0.5) * vec2(1.0, 0.82);
      c.rgb *= mix(1.0 - uVig, 1.0, smoothstep(0.82, 0.28, length(d)));
      c.rgb += uFlash;
      gl_FragColor = c;
    }`};function Rd(n,t,e){let i=new ua({antialias:!1,powerPreference:"high-performance",stencil:!1});i.shadowMap.enabled=!0,i.shadowMap.type=Ac,i.toneMapping=lr,i.outputColorSpace=we,n.appendChild(i.domElement);let s={renderer:i,composer:null,bloom:null,grade:null,q:jc.high,name:"high",w:1,h:1};return s.build=()=>{let{w:r,h:a,q:o}=s,l=Math.min(window.devicePixelRatio||1,o.ratio);i.setPixelRatio(l),i.setSize(r,a,!1),s.composer&&s.composer.dispose();let c=new Ve(Math.floor(r*l),Math.floor(a*l),{type:hi,samples:o.samples}),h=new Va(i,c);h.setPixelRatio(l),h.setSize(r,a),h.addPass(new Ga(t,e));let u=s.bloom?s.bloom.strength:.5;s.bloom=new Ls(new st(r,a),u,.5,1.08),s.bloom.enabled=o.bloom,h.addPass(s.bloom);let d=s.grade;if(s.grade=new Is(fv),d)for(let f of["uVig","uSat","uFlash"])s.grade.uniforms[f].value=d.uniforms[f].value;h.addPass(s.grade),h.addPass(new Wa),s.composer=h},s.setQuality=r=>{s.name=jc[r]?r:"high",s.q=jc[s.name],s.build()},s.resize=()=>{s.w=Math.max(320,n.clientWidth||window.innerWidth),s.h=Math.max(200,n.clientHeight||window.innerHeight),e.aspect=s.w/s.h,e.updateProjectionMatrix(),s.build()},s.render=r=>s.composer.render(r),s}var Xa=class extends Ss{constructor(){super();let t=new Ke;t.deleteAttribute("uv");let e=new me({side:Be}),i=new me,s=new Ea(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Tt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Tt(t,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new Tt(t,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new Tt(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Tt(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Tt(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Tt(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Tt(t,Ds(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Tt(t,Ds(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Tt(t,Ds(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new Tt(t,Ds(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new Tt(t,Ds(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Tt(t,Ds(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ds(n){let t=new Ae;return t.color.setScalar(n),t}var tn='"Barlow Condensed","Arial Narrow",Arial,sans-serif',Qc=["BANKSIA BANK","REDGUM HARDWARE","WOMBAT WIRELESS","MAGPIE MOTORS","SIXTH TACKLE","BOOMERANG FREIGHT","WATTLE ENERGY","GALAH AIR"],$a={day:{sky:["#1b5cb8","#62a8e8","#d3e8f6"],sun:[16773852,3.3,[-.45,.82,.42]],hemi:[13624575,5995068,1.2],fog:[12572908,260,950],exposure:.95,bloom:.2,lamps:.25,glow:1,env:.5},dusk:{sky:["#182456","#b6577a","#f7b267"],sun:[16754793,2.9,[-.86,.34,.22]],hemi:[10130134,4214844,.8],fog:[9399688,220,850],exposure:.98,bloom:.38,lamps:2.2,glow:1.5,env:.4},night:{sky:["#03060d","#081022","#16233f"],sun:[15397375,2.5,[-.22,.92,.3]],hemi:[9677531,2441515,.62],fog:[660258,210,760],exposure:.98,bloom:.5,lamps:3.4,glow:1.9,env:.3}};function qa(n,t,e,i=!0){let s=document.createElement("canvas");s.width=n,s.height=t,e(s.getContext("2d"),n,t);let r=new ni(s);return i&&(r.colorSpace=we),r.anisotropy=8,r}var Mn=class{constructor(){this.p=[],this.u=[]}quad(t,e,i,s,r=0,a=1,o=0,l=1){this.p.push(...t,...e,...i,...t,...i,...s),this.u.push(r,o,a,o,a,l,r,o,a,l,r,l)}mesh(t){let e=new Ie;return e.setAttribute("position",new ne(this.p,3)),e.setAttribute("uv",new ne(this.u,2)),e.computeVertexNormals(),new Tt(e,t)}},en=[[-58,-46],[58,-46],[72,-32],[72,32],[58,46],[-58,46],[-72,32],[-72,-32]],Ka=en.map((n,t)=>{let e=en[(t+1)%8],i=e[0]-n[0],s=e[1]-n[1],r=Math.hypot(i,s);return[s/r,-i/r]}),Cd=en.map((n,t)=>{let e=Ka[(t+7)%8],i=Ka[t],s=1+e[0]*i[0]+e[1]*i[1];return[(e[0]+i[0])/s,(e[1]+i[1])/s]}),Ya=(n,t)=>{let e=n%8;return[en[e][0]+Cd[e][0]*t,en[e][1]+Cd[e][1]*t]},Wn={t0:0,t1:20,y0:1.6,y1:13.6,rows:24},ks={t0:20,t1:38,y0:16.6,y1:30.6,rows:20},Za=class{constructor(t,e){this.scene=t,this.renderer=e,this.group=new xi,t.add(this.group),this.u={time:{value:0},excite:{value:0}},this.cond=$a.night,this.wet=!1,this.home=null,this.away=null,this.seats=[],this.focus=new A;let i=new Ms(e);t.environment=i.fromScene(new Xa,.04).texture,i.dispose(),this._lights(),this._sky(),this._pitch(),this._furniture(),this._bowl()}_lights(){this.hemi=new wa(16777215,3359795,1),this.scene.add(this.hemi);let t=this.sun=new or(16777215,3);t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let e=t.shadow.camera;e.left=-42,e.right=42,e.top=42,e.bottom=-42,e.near=20,e.far=260,t.shadow.bias=-6e-4,t.shadow.normalBias=.03,t.shadow.radius=2.5,this.scene.add(t,t.target),this.fill=new or(16777215,.5),this.scene.add(this.fill)}setShadowQuality(t){this.sun.castShadow=t>0,t>0&&this.sun.shadow.mapSize.x!==t&&(this.sun.shadow.mapSize.set(t,t),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null))}_sky(){this.skyCanvas=document.createElement("canvas"),this.skyCanvas.width=1024,this.skyCanvas.height=512,this.skyTex=new ni(this.skyCanvas),this.skyTex.colorSpace=we;let t=new Tt(new Qi(900,32,16),new Ae({map:this.skyTex,side:Be,fog:!1,depthWrite:!1}));t.renderOrder=-10,this.group.add(t),this.dome=t}_paintSky(t,e){let i=this.skyCanvas.getContext("2d"),s=1024,r=512,a=$a[t].sky,o=i.createLinearGradient(0,0,0,r/2);if(e&&t!=="night"?(o.addColorStop(0,"#4a5560"),o.addColorStop(.6,"#77828c"),o.addColorStop(1,"#a2abb1")):(o.addColorStop(0,a[0]),o.addColorStop(.62,a[1]),o.addColorStop(1,a[2])),i.fillStyle=o,i.fillRect(0,0,s,r/2),i.fillStyle=e&&t!=="night"?"#a2abb1":a[2],i.fillRect(0,r/2,s,r/2),t==="night"&&!e)for(let c=0;c<500;c++)i.fillStyle=`rgba(255,255,255,${j(.2,.9)})`,i.fillRect(j(s),j(r*.42),j(.6,1.8),j(.6,1.8));if(t==="dusk"&&!e){let c=i.createRadialGradient(170,250,4,170,250,200);c.addColorStop(0,"rgba(255,236,190,.95)"),c.addColorStop(.2,"rgba(255,170,90,.5)"),c.addColorStop(1,"rgba(255,140,80,0)"),i.fillStyle=c,i.fillRect(0,40,400,220)}let l=t==="night"?0:e?40:16;for(let c=0;c<l;c++){let h=j(s),u=j(60,235),d=j(60,190),f=t==="dusk"?"255,196,170":e?"70,78,86":"255,255,255";for(let g=0;g<6;g++){let x=h+j(-d,d)*.6,m=u+j(-10,10),p=j(18,46),y=i.createRadialGradient(x,m,2,x,m,p*1.6);y.addColorStop(0,`rgba(${f},${e?.35:.22})`),y.addColorStop(1,`rgba(${f},0)`),i.fillStyle=y,i.fillRect(x-p*2,m-p,p*4,p*2)}}this.skyTex.needsUpdate=!0}_pitch(){this.PPM=24,this.PW=150,this.PH=96,this.pitchCanvas=document.createElement("canvas"),this.pitchCanvas.width=this.PW*this.PPM,this.pitchCanvas.height=this.PH*this.PPM,this.pitchTex=new ni(this.pitchCanvas),this.pitchTex.colorSpace=we,this.pitchTex.anisotropy=16;let t=qa(256,256,r=>{r.fillStyle="#808080",r.fillRect(0,0,256,256);for(let a=0;a<9e3;a++){let o=j(60,200)|0;r.fillStyle=`rgb(${o},${o},${o})`,r.fillRect(j(256),j(256),1.4,j(2,7))}},!1);t.wrapS=t.wrapT=xn;let e=this.pitchMat=new me({map:this.pitchTex,roughness:.93,metalness:0});e.onBeforeCompile=r=>{r.uniforms.uDetail={value:t},r.fragmentShader=`uniform sampler2D uDetail;
`+r.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
 float gd = texture2D(uDetail, vMapUv * vec2(96.0, 61.0)).r; float gd2 = texture2D(uDetail, vMapUv * vec2(17.0, 11.0)).r; diffuseColor.rgb *= 0.74 + gd * 0.36 + gd2 * 0.16;`)};let i=new Tt(new ii(this.PW,this.PH),e);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,this.group.add(i);let s=new Tt(new ii(1200,1200),new me({color:2303787,roughness:1}));s.rotation.x=-Math.PI/2,s.position.y=-.06,this.group.add(s)}_paintPitch(){let t=this.pitchCanvas.getContext("2d"),e=this.PPM,i=this.PW,s=this.PH,r=this.home,a=this.away,o=this.wet,l=u=>(u+i/2)*e,c=u=>(u+s/2)*e;t.globalAlpha=1,t.fillStyle=o?"#1f5527":"#2a6a30",t.fillRect(0,0,i*e,s*e);for(let u=-10;u<10;u++)t.fillStyle=u&1?o?"#2a7133":"#39903f":o?"#256a2e":"#31833a",t.fillRect(l(u*5),c(-34),5*e,34*2*e);for(let u=0;u<8;u++)u&1&&(t.fillStyle="rgba(255,255,255,.035)",t.fillRect(l(-50),c(-34+u*8.5),50*2*e,8.5*e));for(let[u,d]of[[-58,r],[50,a]])t.fillStyle=Vt(ur(d.c1,.8)),t.globalAlpha=.9,t.fillRect(l(u),c(-34),8*e,34*2*e),t.globalAlpha=1,t.save(),t.translate(l(u+8/2),c(0)),t.rotate(u<0?-Math.PI/2:Math.PI/2),t.font=`italic 800 ${e*5.4}px ${tn}`,t.textAlign="center",t.textBaseline="middle",t.fillStyle=Vt(ze(ur(d.c1,.8))===16777215?d.c2===1447446||d.c2===1973018||d.c2===1382172?16777215:d.c2:1053206),t.fillText(d.name.toUpperCase(),0,e*.3),t.restore();t.save(),t.globalAlpha=.9,hr(t,r,l(0),c(0),e*15),t.restore(),t.font=`italic 800 ${e*3.4}px ${tn}`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(255,255,255,.13)",t.font=`italic 800 ${e*2.6}px ${tn}`,t.fillText(Qc[0],l(-25),c(0)),t.fillText(Qc[4],l(25),c(0)),t.strokeStyle="#e4e8df",t.fillStyle="#e4e8df";let h=(u,d)=>{t.lineWidth=d,t.beginPath(),t.moveTo(l(u),c(-34)),t.lineTo(l(u),c(34)),t.stroke()};t.lineWidth=e*.13,t.strokeRect(l(-58),c(-34),58*2*e,34*2*e);for(let u=-50;u<=50;u+=10)h(u,Math.abs(u)===50?e*.18:e*.11);t.fillStyle="#d43c30";for(let u of[-1,1])for(let d of[-10,10])t.fillRect(l(d)-e*.055,c(u*34)-(u>0?e*1.5:0),e*.11,e*1.5);t.fillStyle="#e4e8df";for(let u=-40;u<50;u+=10)for(let d of[-24,-14,14,24])t.fillRect(l(u)-e*.6,c(d)-e*.05,e*1.2,e*.1);t.font=`800 ${e*3.1}px ${tn}`;for(let u=-40;u<50;u+=10){let d=String(50-Math.abs(u));for(let f of[-28.5,28.5])t.save(),t.translate(l(u),c(f)),t.fillText(d[0],-e*1.25,0),t.fillText(d[1],e*1.25,0),t.restore()}t.fillStyle="rgba(0,0,0,.2)",t.fillRect(0,0,i*e,c(-38)),t.fillRect(0,c(38),i*e,s*e),this.pitchTex.needsUpdate=!0}_furniture(){let t=new me({color:16119280,roughness:.4,emissive:16777215,emissiveIntensity:.05});this.padMats=[new me({roughness:.6}),new me({roughness:.6})];for(let r of[-1,1]){for(let o of[-2.75,2.75]){let l=new Tt(new si(.1,.13,16,10),t);l.position.set(r*50,8,o),l.castShadow=!0,this.group.add(l);let c=new Tt(new Ke(.5,2,.5),this.padMats[r<0?0:1]);c.position.set(r*50,1,o),c.castShadow=!0,this.group.add(c)}let a=new Tt(new si(.09,.09,5.5,10),t);a.rotation.x=Math.PI/2,a.position.set(r*50,3,0),a.castShadow=!0,this.group.add(a)}this.flags=[];let e=new Ae({color:16765500,side:Oe});for(let r of[-50,50])for(let a of[-34,34]){let o=new Tt(new si(.03,.03,1.5,6),t);o.position.set(r,.75,a),this.group.add(o);let l=new Tt(new ii(.45,.3),e);l.position.set(r+.24,1.33,a),this.group.add(l),this.flags.push(l)}this.boardTex=qa(2048,64,(r,a,o)=>{r.fillStyle="#05080c",r.fillRect(0,0,a,o),r.font=`italic 800 44px ${tn}`,r.textBaseline="middle";let l=["#ffd23c","#ffffff","#5fd0ff","#ff6a5c","#9fe870","#ffffff","#ffb347","#c9a6ff"],c=20;Qc.forEach((h,u)=>{r.fillStyle=l[u],r.fillText(h,c,34),c+=r.measureText(h).width+70})}),this.boardTex.wrapS=xn,this.boardMat=new Ae({map:this.boardTex,color:16777215});let i=new me({color:1316893,roughness:.8}),s=(r,a,o,l,c)=>{let h=new ii(o,1.05);h.attributes.uv.array.forEach((f,g,x)=>{g%2===0&&(x[g]=f*c)});let u=new Tt(h,this.boardMat);u.position.set(r,.62,a),u.rotation.y=l,this.group.add(u);let d=new Tt(new Ke(o,1.15,.25),i);d.position.set(r-Math.sin(l)*.14,.6,a-Math.cos(l)*.14),d.rotation.y=l,this.group.add(d)};s(0,-40.5,124,0,5),s(0,40.5,124,Math.PI,5),s(-64.5,0,78,Math.PI/2,3.2),s(64.5,0,78,-Math.PI/2,3.2),this.screenCanvas=document.createElement("canvas"),this.screenCanvas.width=768,this.screenCanvas.height=256,this.screenTex=new ni(this.screenCanvas),this.screenTex.colorSpace=we,this.screenMat=new Ae({map:this.screenTex});for(let r of[-1,1]){let a=new Tt(new ii(30,10),this.screenMat);a.position.set(r*84.5,29.5,0),a.rotation.y=-r*Math.PI/2,this.group.add(a);let o=new Tt(new Ke(.6,11,31),i);o.position.set(r*85,29.5,0),this.group.add(o)}}_bowl(){let t=new me({color:2765112,roughness:.95,side:Oe}),e=qa(8,32,d=>{d.fillStyle="#39424b",d.fillRect(0,0,8,32),d.fillStyle="#20262c",d.fillRect(0,0,8,9)});e.wrapS=e.wrapT=xn,this.seatMat=new me({map:e,roughness:.9,side:Oe});let i=new me({color:4871261,roughness:.7,metalness:.2,side:Oe});this.lampMat=new Ae({color:16777215}),this.ribbonTex=qa(1024,32,(d,f,g)=>{d.fillStyle="#111",d.fillRect(0,0,f,g)}),this.ribbonTex.wrapS=xn,this.ribbonMat=new Ae({map:this.ribbonTex,side:Oe});let s=new Mn,r=new Mn,a=new Mn,o=new Mn,l=new Mn,c=new Mn,h=0;for(let d=0;d<8;d++){let f=(m,p)=>{let y=Ya(d,m),w=Ya(d+1,m);return[[y[0],p,y[1]],[w[0],p,w[1]]]},g=(m,p,y,w,b,D=0,E=1,R=1)=>{let[P,S]=f(p,y),[M,C]=f(w,b);m.quad(P,S,C,M,D,E,0,R)},x=Math.hypot(en[(d+1)%8][0]-en[d][0],en[(d+1)%8][1]-en[d][1]);g(s,0,0,0,Wn.y0),g(r,Wn.t0,Wn.y0,Wn.t1,Wn.y1,0,1,Wn.rows),g(c,20,13.6,20,16.6,h/40,(h+x)/40),g(a,ks.t0,ks.y0,ks.t1,ks.y1,0,1,ks.rows),g(s,38,30.6,38,41),g(s,41,0,41,42),g(o,41,42,9,36.5),g(l,9.2,36.3,9.2,35.1),h+=x}this.group.add(s.mesh(t),r.mesh(this.seatMat),a.mesh(this.seatMat),o.mesh(i),l.mesh(this.lampMat),c.mesh(this.ribbonMat));let u=new me({color:5858155,roughness:.6,metalness:.5});this.mastPos=[];for(let[d,f]of[[-96,-70],[96,-70],[-96,70],[96,70]]){let g=new Tt(new si(.7,1.1,58,8),u);g.position.set(d,29,f),this.group.add(g);let x=new xi;x.position.set(d,60,f),x.lookAt(0,0,0),this.group.add(x);let m=new Tt(new Ke(11,7,.5),u);x.add(m);for(let p=0;p<4;p++)for(let y=0;y<6;y++){let w=new Tt(new ws(.62,10),this.lampMat);w.position.set(-4.4+y*1.76,-2.5+p*1.66,.3),x.add(w)}this.mastPos.push([d,f])}this._crowdMats(),this.setCrowd(.8)}_crowdMats(){let t=e=>(e.onBeforeCompile=i=>{i.uniforms.uTime=this.u.time,i.uniforms.uExcite=this.u.excite,i.vertexShader=`uniform float uTime; uniform float uExcite;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
          float cph = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898, 78.233))) * 43758.5453);
          float cj = max(0.0, sin(uTime * (6.0 + cph * 5.0) + cph * 6.283));
          transformed.y += (cj * cj * uExcite * (0.3 + cph * 0.5) + sin(uTime * 1.3 + cph * 40.0) * 0.02) / max(0.2, length(instanceMatrix[1].xyz));
          #endif`)},e);this.bodyMat=t(new rr({color:16777215})),this.headMat=t(new rr({color:16777215}))}setCrowd(t){if(this.density===t)return;this.density=t;for(let g of[this.bodies,this.heads])g&&(this.group.remove(g),g.geometry.dispose(),g.dispose());let e=.64/t,i=[];for(let g of[Wn,ks])for(let x=0;x<g.rows;x++){let m=g.t0+.8+x/g.rows*(g.t1-g.t0-.9),p=g.y0+(m-g.t0)/(g.t1-g.t0)*(g.y1-g.y0);for(let y=0;y<8;y++){let w=Ya(y,m),b=Ya(y+1,m),D=Math.hypot(b[0]-w[0],b[1]-w[1]),E=Math.floor(D/e);for(let R=0;R<E;R++){if(Math.random()<.07)continue;let P=(R+.5+j(-.2,.2))/E;i.push(w[0]+(b[0]-w[0])*P,p,w[1]+(b[1]-w[1])*P,y)}}}let s=i.length/4;this.seats=i,this.seatN=s,this.fan=new Float32Array(s);let r=new Ke(.46,.62,.34);r.translate(0,.42,0);let a=new Ke(.23,.25,.23);a.translate(0,.88,0),this.bodies=new Bn(r,this.bodyMat,s),this.heads=new Bn(a,this.headMat,s);let o=new ie,l=new vi,c=new A,h=new A,u=new A(0,1,0),d=new Ct,f=[14857356,13012578,9263675,15780260,11039050,7226672];for(let g=0;g<s;g++){let x=i[g*4+3],m=j(.9,1.15);l.setFromAxisAngle(u,Math.atan2(Ka[x][0],Ka[x][1])+j(-.3,.3)),h.set(i[g*4],i[g*4+1],i[g*4+2]),c.set(m,m,m),o.compose(h,l,c),this.bodies.setMatrixAt(g,o),this.heads.setMatrixAt(g,o),this.heads.setColorAt(g,d.setHex(f[Math.random()*f.length|0])),this.fan[g]=Math.random()}this.bodies.frustumCulled=this.heads.frustumCulled=!1,this.group.add(this.bodies,this.heads),this.home&&this._dressCrowd()}_dressCrowd(){let t=new Ct,e=this.home,i=this.away,s=[2831426,14278114,5594987,9072474,2106926,12174543,3951196],r=a=>ze(a)===16777215&&(a&255)+(a>>8&255)+(a>>16)<90?2763312:a;for(let a=0;a<this.seatN;a++){let o=this.fan[a],l=this.seats[a*4]<0,c;o<.46?c=r(e.c1):o<.58?c=r(e.c2):o<.7&&!l?c=r(i.c1):o<.74?c=r(i.c2):c=s[(o*977|0)%s.length],this.bodies.setColorAt(a,t.setHex(c).multiplyScalar(.75+o*131%1*.4))}this.bodies.instanceColor.needsUpdate=!0,this.heads.instanceColor.needsUpdate=!0}randomSeat(t){let e=(Math.random()*this.seatN|0)*4;return t.set(this.seats[e],this.seats[e+1]+1.1,this.seats[e+2])}setTeams(t,e){this.home=t,this.away=e,this.padMats[0].color.setHex(t.c1),this.padMats[1].color.setHex(e.c1),this.seatMat.color.setHex(16777215).lerp(new Ct(t.c1),.35);let i=ze(t.c1)!==16777215,s=i?ze(t.c2)===16777215?t.c2:1316893:t.c1,r=this.ribbonTex.image.getContext("2d");r.fillStyle=Vt(ur(s,.8)),r.fillRect(0,0,1024,32),r.font=`italic 800 26px ${tn}`,r.textBaseline="middle",r.textAlign="left";for(let a=0;a<4;a++)r.fillStyle=i?Vt(t.c1):Vt(a&1||ze(t.c2)===16777215?t.c3:t.c2),r.fillText(a&1?t.ground.toUpperCase():`${t.city} ${t.name}`.toUpperCase(),a*256+12,17);this.ribbonTex.needsUpdate=!0,this._paintPitch(),this._dressCrowd()}setConditions(t,e){let i=this.cond=$a[t]||$a.night,s=e==="rain";return this.wet=s,this.time=t,this._paintSky(t,s),this.sun.color.setHex(i.sun[0]),this.sun.intensity=i.sun[1]*(s?.62:1),this.sunDir=new A(...i.sun[2]).normalize(),this.fill.color.setHex(i.hemi[0]),this.fill.intensity=t==="night"?.9:.35,this.fill.position.set(-this.sunDir.x*50,40,-this.sunDir.z*50-30),this.hemi.color.setHex(i.hemi[0]),this.hemi.groundColor.setHex(i.hemi[1]),this.hemi.intensity=i.hemi[2]*(s?1.1:1),this.scene.fog=new da(s&&t!=="night"?10134699:i.fog[0],i.fog[1]*(s?.55:1),i.fog[2]*(s?.6:1)),this.scene.environmentIntensity=i.env*(s?1.5:1),this.renderer.toneMappingExposure=i.exposure,this.lampMat.color.setRGB(i.lamps,i.lamps,i.lamps*.94),this.boardMat.color.setScalar(i.glow),this.ribbonMat.color.setScalar(Math.min(1.25,i.glow*.7)),this.screenMat.color.setScalar(Math.min(1.05,i.glow*.6)),this.pitchMat.roughness=s?.42:.93,this.pitchMat.envMapIntensity=s?1.4:.4,this.home&&this._paintPitch(),i}setScreen(t,e,i,s,r){let a=this.screenCanvas.getContext("2d"),o=768,l=256;a.fillStyle="#06090d",a.fillRect(0,0,o,l),a.fillStyle=Vt(t.c1),a.fillRect(0,0,o/2-60,170),a.fillStyle=Vt(e.c1),a.fillRect(o/2+60,0,o/2-60,170),hr(a,t,90,86,140),hr(a,e,o-90,86,140),a.textAlign="center",a.textBaseline="middle",a.font=`800 150px ${tn}`,a.fillStyle=Vt(ze(t.c1)),a.fillText(String(i),245,92),a.fillStyle=Vt(ze(e.c1)),a.fillText(String(s),o-245,92),a.fillStyle="#ffd23c",a.font=`800 40px ${tn}`,a.fillText("V",o/2,90),a.fillStyle="#fff",a.font=`italic 800 54px ${tn}`,a.fillText(r,o/2,214),this.screenTex.needsUpdate=!0}update(t,e,i,s){this.u.time.value=e,this.u.excite.value+=(i-this.u.excite.value)*Math.min(1,t*3),this.boardTex.offset.x=e*.012%1,this.ribbonTex.offset.x=e*.02%1;let r=Math.round(s.x/2)*2,a=Math.round(s.z/2)*2;this.sun.target.position.set(r,0,a),this.sun.position.set(r+this.sunDir.x*130,this.sunDir.y*130,a+this.sunDir.z*130);for(let o=0;o<this.flags.length;o++)this.flags[o].rotation.y=Math.sin(e*3+o)*.5;this.dome.position.set(s.x*.2,0,0)}};var fi=10,jt={NONE:0,PASS:1,KICK:2,LUNGE:3,PRONE:4,SUPINE:5,TRYDIVE:6,CELEBRATE:7,DEJECTED:8,CATCH:9,SETKICK:10,STEP:11,GETUP:12},nn={BALL:1,FEND:2,SPRINT:8,READY:16},Ld=[15251864,13605486,9723967,15912878,11565136,7358255],Pd=["#1c1410","#3a2716","#6b4a2a","#c9a567","#111111"],N={HIPY:0,PITCH:1,ROLL:2,LEAN:3,TWIST:4,HEAD:5,SHL:6,SHR:7,ABL:8,ABR:9,ELL:10,ELR:11,HPL:12,HPR:13,KNL:14,KNR:15,YOFF:16,N:17},di={pelvis:new si(.17,.185,.24,12).scale(.72,1,1),shortLeg:new si(.092,.084,.2,10),thigh:new zn(.074,.3,4,10),shin:new zn(.056,.3,4,10),sock:new si(.064,.054,.22,10),boot:new Ke(.25,.085,.1),torso:new si(.225,.165,.5,20,1).scale(.68,1,1),shoulder:new Qi(.095,10,8),upper:new zn(.056,.19,4,8),fore:new zn(.045,.19,4,8),hand:new Qi(.052,8,6),neck:new si(.052,.06,.1,8),head:new Qi(.118,18,14).scale(1,1.13,.94)},Id=Ld.map(n=>new me({color:n,roughness:.62})),pv=new me({color:1381914,roughness:.5}),th=new Map;function mv(n,t){let e=n*10+t;if(th.has(e))return th.get(e);let i=document.createElement("canvas");i.width=128,i.height=128;let s=i.getContext("2d");s.fillStyle=Vt(Ld[n]),s.fillRect(0,0,128,128),s.fillStyle=Pd[t],s.fillRect(0,0,128,t===4?30:38),s.fillRect(0,0,38,78),s.fillRect(90,0,38,78),t===2&&s.fillRect(0,0,128,44),s.fillStyle="rgba(30,18,12,.9)",s.fillRect(52,52,6,5),s.fillRect(70,52,6,5),s.fillRect(50,46,10,2.5),s.fillRect(68,46,10,2.5),s.fillStyle="rgba(90,40,30,.55)",s.fillRect(58,76,12,2.5),s.fillStyle="rgba(0,0,0,.12)",s.fillRect(62,56,4,12),(t===1||t===4)&&(s.fillStyle=Pd[t],s.globalAlpha=.55,s.fillRect(46,72,36,22),s.globalAlpha=1);let r=new ni(i);r.colorSpace=we;let a=new me({map:r,roughness:.65});return th.set(e,a),a}function Dd(n){return{sleeve:new me({color:n.pattern==="yoke"?n.c2:n.c1,roughness:.7}),shorts:new me({color:n.pattern==="halves"||n.pattern==="yoke"?n.c2:ze(n.c1)===16777215?n.c1:n.c2,roughness:.75}),socks:new me({color:n.c1===15856108?n.c2:n.c1,roughness:.8})}}var Ja=class{constructor(t){let e=(r,a,o,l=0,c=0,h=0)=>{let u=new Tt(a,o);return u.position.set(l,c,h),u.castShadow=!0,r.add(u),u},i=(r,a,o,l)=>{let c=new xi;return c.position.set(a,o,l),r.add(c),c};this.root=new xi,t.add(this.root),this.hips=i(this.root,0,.96,0),this.spine=i(this.hips,0,.1,0),this.jerseyCanvas=document.createElement("canvas"),this.jerseyCanvas.width=256,this.jerseyCanvas.height=128,this.jerseyTex=new ni(this.jerseyCanvas),this.jerseyTex.colorSpace=we,this.jerseyTex.anisotropy=4,this.jerseyMat=new me({map:this.jerseyTex,roughness:.68});let s=Id[0];this.kitMeshes={sleeve:[],shorts:[],socks:[]},this.skinMeshes=[],this.kitMeshes.shorts.push(e(this.hips,di.pelvis,s,0,0,0)),e(this.spine,di.torso,this.jerseyMat,0,.27,0),this.skinMeshes.push(e(this.spine,di.neck,s,0,.56,0)),this.headG=i(this.spine,0,.6,0),this.headMesh=e(this.headG,di.head,s,.01,.13,0),this.ballAnchor=i(this.spine,.2,.2,.16),this.sh=[],this.el=[],this.hp=[],this.kn=[];for(let r of[-1,1]){this.kitMeshes.sleeve.push(e(this.spine,di.shoulder,s,0,.47,r*.235));let a=i(this.spine,0,.47,r*.27);this.kitMeshes.sleeve.push(e(a,di.upper,s,0,-.13,0));let o=i(a,0,-.27,0);this.skinMeshes.push(e(o,di.fore,s,0,-.13,0),e(o,di.hand,s,0,-.28,0));let l=i(this.hips,0,-.06,r*.1);this.skinMeshes.push(e(l,di.thigh,s,0,-.22,0)),this.kitMeshes.shorts.push(e(l,di.shortLeg,s,0,-.1,0));let c=i(l,0,-.45,0);this.skinMeshes.push(e(c,di.shin,s,0,-.2,0)),this.kitMeshes.socks.push(e(c,di.sock,s,0,-.3,0)),e(c,di.boot,pv,.055,-.43,0),this.sh.push(a),this.el.push(o),this.hp.push(l),this.kn.push(c)}this.cur=new Float32Array(N.N),this.tgt=new Float32Array(N.N),this.cur[N.HIPY]=.96,this.base=1.16,this.sx=1,this.sy=1}setKit(t,e,i){$c(this.jerseyCanvas.getContext("2d"),256,128,t,i.num),this.jerseyTex.needsUpdate=!0;for(let s of["sleeve","shorts","socks"])for(let r of this.kitMeshes[s])r.material=e[s];for(let s of this.skinMeshes)s.material=Id[i.skin];this.headMesh.material=mv(i.skin,i.hair),this.sx=this.base*i.build,this.sy=this.base*i.tall,this.root.scale.set(this.sx,this.sy,this.sx)}setVisible(t){this.root.visible=t}apply(t,e,i,s,r){let a=this.tgt,o=t[e+3],l=t[e+4],c=t[e+5],h=t[e+6],u=t[e+7],d=t[e+8],f=At(Math.abs(o)/7.4,0,1.25),g=o>=0?1:-1,x=Math.sin(l),m=Math.cos(l),p=1-Math.min(1,f*3),y=u&nn.READY?p:0,w=Math.sin(s*1.7+r)*.012,b=26;a[N.HIPY]=.96-.05*f+Math.abs(x)*.035*f-y*.09+w,a[N.PITCH]=0,a[N.ROLL]=0,a[N.YOFF]=t[e+9],a[N.LEAN]=g>0?-(.05+.27*f)-y*.28:.07,a[N.TWIST]=x*.15*f,a[N.HEAD]=.12*f+y*.2,a[N.HPL]=x*.98*f*g+.08*f+y*.36,a[N.HPR]=-x*.98*f*g+.08*f+y*.36,a[N.KNL]=.06+(.16+1.4*Math.max(0,m*g))*f+y*.6,a[N.KNR]=.06+(.16+1.4*Math.max(0,-m*g))*f+y*.6,a[N.SHL]=-x*.8*f+y*.5+p*.04,a[N.SHR]=x*.8*f+y*.5+p*.04,a[N.ELL]=a[N.ELR]=.3+1.2*Math.min(1,f)+y*.6,a[N.ABL]=a[N.ABR]=.1+y*.25,u&nn.BALL&&(a[N.SHR]=.5+x*.12*f,a[N.ELR]=1.8,a[N.ABR]=-.28,u&nn.FEND&&(a[N.SHL]=1.5,a[N.ELL]=.05,a[N.ABL]=.2)),u&nn.SPRINT&&(a[N.LEAN]-=.08);let D=Math.sin(Math.PI*At(h,0,1));switch(c){case jt.PASS:a[N.SHL]=a[N.SHR]=.95,a[N.ELL]=a[N.ELR]=.55-.35*D,a[N.ABR]=d*.95*D,a[N.ABL]=-d*.8*D,a[N.TWIST]=-d*.65*D,b=22;break;case jt.KICK:{let P=h<.4,S=P?h/.4:At((h-.4)/.22,0,1);a[N.HPR]=P?-.95*S:Ia(-.95,1.65,S),a[N.KNR]=P?1.35*S:1.35*(1-S),a[N.HPL]=.12,a[N.KNL]=.22,a[N.LEAN]=.16,a[N.ABL]=.95,a[N.SHL]=-.35,a[N.SHR]=.45,a[N.ELL]=.3,a[N.HIPY]=.95,b=30;break}case jt.LUNGE:a[N.PITCH]=-1.25,a[N.HIPY]=Ia(.62,.34,h),a[N.SHL]=a[N.SHR]=2.75,a[N.ELL]=a[N.ELR]=.15,a[N.ABL]=a[N.ABR]=.3,a[N.HPL]=-.35,a[N.HPR]=-.15,a[N.KNL]=.3,a[N.KNR]=.5,a[N.LEAN]=-.1,b=24;break;case jt.PRONE:a[N.PITCH]=-1.5,a[N.HIPY]=.2,a[N.SHL]=2.5,a[N.SHR]=2.2,a[N.ELL]=.7,a[N.ELR]=.5,a[N.ABL]=a[N.ABR]=.55,a[N.HPL]=.08,a[N.HPR]=-.18,a[N.KNL]=.2,a[N.KNR]=.45,a[N.LEAN]=0,a[N.HEAD]=-.3,b=15;break;case jt.SUPINE:a[N.PITCH]=1.42,a[N.ROLL]=.25,a[N.HIPY]=.22,a[N.SHL]=.5,a[N.SHR]=.7,a[N.ELL]=1.3,a[N.ELR]=1.7,a[N.HPL]=.75,a[N.KNL]=1.2,a[N.HPR]=.15,a[N.KNR]=.3,a[N.LEAN]=-.15,a[N.HEAD]=.3,b=14;break;case jt.TRYDIVE:a[N.PITCH]=-1.36,a[N.HIPY]=Ia(.8,.26,At(h*1.6,0,1)),a[N.SHR]=2.7,a[N.SHL]=2.4,a[N.ELL]=a[N.ELR]=.2,a[N.ABR]=-.1,a[N.HPL]=-.3,a[N.HPR]=-.1,a[N.KNL]=.35,a[N.KNR]=.6,a[N.LEAN]=-.05,b=20;break;case jt.CELEBRATE:{let P=Math.abs(Math.sin(s*7.5+r));a[N.SHL]=2.95,a[N.SHR]=2.8+Math.sin(s*9+r)*.25,a[N.ABL]=a[N.ABR]=.45,a[N.ELL]=a[N.ELR]=.25,a[N.YOFF]=P*.24,a[N.KNL]=a[N.KNR]=.25*(1-P),a[N.LEAN]=.1,a[N.HEAD]=-.25,b=20;break}case jt.DEJECTED:a[N.HEAD]=.6,a[N.LEAN]=-.22,a[N.SHL]=a[N.SHR]=-.25,a[N.ABL]=a[N.ABR]=.5,a[N.ELL]=a[N.ELR]=1.75,b=8;break;case jt.CATCH:a[N.SHL]=a[N.SHR]=2.65,a[N.ELL]=a[N.ELR]=.35,a[N.ABL]=a[N.ABR]=.22,a[N.HEAD]=-.5,a[N.LEAN]=.08,b=16;break;case jt.SETKICK:a[N.LEAN]=-.1,a[N.HEAD]=.25,a[N.SHL]=a[N.SHR]=.05,a[N.ELL]=a[N.ELR]=.3,b=10;break;case jt.STEP:a[N.ROLL]=d*.42,a[N.HIPY]-=.08,a[N.ABL]=d<0?.9:.2,a[N.ABR]=d>0?.9:.2;break;case jt.GETUP:a[N.PITCH]=-.55,a[N.HIPY]=.62,a[N.KNL]=1.3,a[N.KNR]=.9,a[N.HPL]=1.15,a[N.HPR]=.5,a[N.SHL]=a[N.SHR]=.9,a[N.ELL]=a[N.ELR]=.3,b=10;break}let E=1-Math.exp(-b*i),R=this.cur;for(let P=0;P<N.N;P++)R[P]+=(a[P]-R[P])*E;this.root.position.set(t[e],0,t[e+1]),this.root.rotation.y=-t[e+2],this.hips.position.y=R[N.HIPY]+R[N.YOFF]/this.sy,this.hips.rotation.set(R[N.ROLL],0,R[N.PITCH]),this.spine.rotation.set(0,R[N.TWIST],R[N.LEAN]),this.headG.rotation.z=R[N.HEAD],this.sh[0].rotation.set(R[N.ABL],0,R[N.SHL]),this.sh[1].rotation.set(-R[N.ABR],0,R[N.SHR]),this.el[0].rotation.z=R[N.ELL],this.el[1].rotation.z=R[N.ELR],this.hp[0].rotation.z=R[N.HPL],this.hp[1].rotation.z=R[N.HPR],this.kn[0].rotation.z=-R[N.KNL],this.kn[1].rotation.z=-R[N.KNR]}snap(){this.cur.set(this.tgt)}ballPos(t){return this.root.updateMatrixWorld(!0),this.ballAnchor.getWorldPosition(t)}},ja=class{constructor(t){let e=document.createElement("canvas");e.width=128,e.height=128;let i=e.getContext("2d");i.fillStyle="#f6f1e4",i.fillRect(0,0,128,128),i.fillStyle="#e0a21a",i.fillRect(0,0,128,24),i.fillRect(0,104,128,24),i.fillStyle="#1c2a44",i.fillRect(0,24,128,4),i.fillRect(0,100,128,4);for(let a=0;a<4;a++)i.fillRect(a*32,28,2,72);let s=new ni(e);s.colorSpace=we;let r=new Qi(1,20,14);r.rotateZ(-Math.PI/2),r.scale(.185,.115,.115),this.mesh=new Tt(r,new me({map:s,roughness:.45})),this.mesh.castShadow=!0,this.mesh.rotation.order="YZX",t.add(this.mesh),this.blob=new Tt(new ws(.4,16),new Ae({color:0,transparent:!0,opacity:.3,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,t.add(this.blob),this.tee=new Tt(new si(.07,.11,.1,10),new me({color:16742938})),this.tee.visible=!1,t.add(this.tee)}set(t,e,i,s,r,a){this.mesh.position.set(t,e,i),a===3?this.mesh.rotation.set(0,-s,1.15):a===2?this.mesh.rotation.set(0,-s,r):this.mesh.rotation.set(a===1?r:0,-s,a===0?.35:.18),this.blob.visible=a!==0&&e>.5,this.blob.position.set(t,.03,i);let o=At(1.2-e*.05,.4,1.2);this.blob.scale.set(o,o,o),this.blob.material.opacity=At(.36-e*.012,.1,.36),this.tee.visible=a===3,a===3&&this.tee.position.set(t,.05,i)}},Qa=class{constructor(t,e,i){let s=document.createElement("canvas");s.width=64,s.height=32;let r=s.getContext("2d"),a=r.createRadialGradient(20,16,1,32,16,30);a.addColorStop(0,"rgba(0,0,0,.9)"),a.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=a,r.fillRect(0,0,64,32);let o=new ii(2.3,.85);o.rotateX(-Math.PI/2),o.translate(.95,0,0),this.mesh=new Bn(o,new Ae({map:new ni(s),transparent:!0,opacity:.2,depthWrite:!1}),e*i.length),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh),this.masts=i,this.count=e,this.m=new ie,this.q=new vi,this.p=new A,this.s=new A(1,1,1),this.up=new A(0,1,0)}update(t,e,i){if(this.mesh.visible=i,!i)return;let s=0;for(let r=0;r<this.count;r++)for(let[a,o]of this.masts){if(r<e){let l=t[r*fi],c=t[r*fi+1];this.q.setFromAxisAngle(this.up,-Math.atan2(c-o,l-a)),this.p.set(l,.035,c),this.s.setScalar(1)}else this.s.setScalar(1e-4);this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(s++,this.m)}this.mesh.instanceMatrix.needsUpdate=!0}};var gv=`
  attribute float size; attribute vec4 pcolor; varying vec4 vColor; uniform float uScale;
  void main(){ vColor = pcolor; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * uScale / max(0.5, -mv.z); gl_Position = projectionMatrix * mv; }`,xv=`
  varying vec4 vColor; uniform float uSoft;
  void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard;
    float a = mix(1.0, smoothstep(0.5, 0.12, d), uSoft); gl_FragColor = vec4(vColor.rgb, vColor.a * a);
    #include <colorspace_fragment>
  }`,to=class{constructor(t,e,i){this.n=e,this.i=0,this.live=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.s0=new Float32Array(e),this.a0=new Float32Array(e);let s=this.geo=new Ie;s.setAttribute("position",new ke(this.pos,3)),s.setAttribute("pcolor",new ke(this.col,4)),s.setAttribute("size",new ke(this.size,1)),this.mat=new Re({vertexShader:gv,fragmentShader:xv,uniforms:{uScale:{value:600},uSoft:{value:i?1:.6}},transparent:!0,depthWrite:!1,blending:i?ps:pn}),this.points=new xa(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points)}emit(t,e,i,s,r,a,o,l,c,h,u,d=1,f=9,g=.5){let x=this.i;this.i=(x+1)%this.n,this.pos[x*3]=t,this.pos[x*3+1]=e,this.pos[x*3+2]=i,this.vel[x*3]=s,this.vel[x*3+1]=r,this.vel[x*3+2]=a,this.life[x]=this.max[x]=o,this.s0[x]=l,this.a0[x]=d,this.grav[x]=f,this.drag[x]=g,this.col[x*4]=c,this.col[x*4+1]=h,this.col[x*4+2]=u,this.col[x*4+3]=d,this.size[x]=l}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0)continue;let i=this.life[e]-=t,s=e*3;if(i<=0){this.size[e]=0,this.col[e*4+3]=0;continue}let r=Math.max(0,1-this.drag[e]*t);this.vel[s]*=r,this.vel[s+2]*=r,this.vel[s+1]=this.vel[s+1]*r-this.grav[e]*t,this.pos[s]+=this.vel[s]*t,this.pos[s+1]+=this.vel[s+1]*t,this.pos[s+2]+=this.vel[s+2]*t,this.pos[s+1]<.03&&this.grav[e]>0&&(this.pos[s+1]=.03,this.vel[s+1]*=-.25,this.vel[s]*=.6,this.vel[s+2]*=.6),this.col[e*4+3]=this.a0[e]*Math.min(1,i/this.max[e]*2.2)}this.geo.attributes.position.needsUpdate=this.geo.attributes.pcolor.needsUpdate=this.geo.attributes.size.needsUpdate=!0}},eo=class{constructor(t){this.solid=new to(t,1400,!1),this.glow=new to(t,900,!0),this.rain=null,this.scene=t,this.raining=!1,this.wet=!1,this._buildRain()}resize(t,e){let i=t/(2*Math.tan(e*Math.PI/360));this.solid.mat.uniforms.uScale.value=i,this.glow.mat.uniforms.uScale.value=i}turf(t,e,i=10,s=1){for(let r=0;r<i;r++){let a=j(6.28),o=j(1,4)*s,l=j(.25,.5);this.solid.emit(t+j(-.3,.3),.1,e+j(-.3,.3),Math.cos(a)*o,j(1.5,4.5)*s,Math.sin(a)*o,j(.4,.9),j(.05,.11),l*.5,l,l*.35,1,11,1.2)}if(this.wet)for(let r=0;r<i;r++){let a=j(6.28),o=j(1,5)*s;this.solid.emit(t,.1,e,Math.cos(a)*o,j(1,4)*s,Math.sin(a)*o,j(.3,.6),j(.04,.08),.8,.88,.95,.7,12,.6)}else for(let r=0;r<i/3;r++)this.solid.emit(t+j(-.4,.4),.2,e+j(-.4,.4),j(-1,1),j(.3,1),j(-1,1),j(.5,1),j(.5,.9),.75,.72,.6,.18,-.4,1.5)}dust(t,e,i,s){this.solid.emit(t,.08,e,-i*.15+j(-.6,.6),j(.4,1.4),-s*.15+j(-.6,.6),j(.25,.5),j(.05,.09),.22,.42,.18,.9,9,1.5)}trail(t,e,i){this.glow.emit(t,e,i,0,0,0,.3,.3,.5,.5,.46,.3,0,0)}confetti(t,e,i,s,r=80){for(let a=0;a<r;a++){let o=s[a%s.length];this.solid.emit(t+j(-10,10),e+j(0,6),i+j(-10,10),j(-3,3),j(-1,4),j(-3,3),j(2.5,5),j(.12,.2),(o>>16&255)/255,(o>>8&255)/255,(o&255)/255,1,2.2,.9)}}firework(t,e,i,s){let r=(s>>16&255)/255*3,a=(s>>8&255)/255*3,o=(s&255)/255*3;for(let l=0;l<90;l++){let c=j(6.28),h=Math.acos(j(-1,1)),u=j(8,15);this.glow.emit(t,e,i,Math.sin(h)*Math.cos(c)*u,Math.cos(h)*u,Math.sin(h)*Math.sin(c)*u,j(.9,1.7),j(.5,.9),r,a,o,1,4,1.4)}}flash(t,e,i){this.glow.emit(t,e,i,0,0,0,j(.06,.14),j(1.2,2.4),4,4,4.4,1,0,0)}spark(t,e,i,s=8){for(let r=0;r<s;r++)this.glow.emit(t,e,i,j(-3,3),j(1,5),j(-3,3),j(.2,.5),.14,3,2.4,1.2,1,10,.5)}_buildRain(){let e=new Float32Array(9600),i=new Float32Array(1600*2);for(let r=0;r<1600;r++){let a=j(-45,45),o=j(0,40),l=j(-45,45);e.set([a,o,l,a,o,l],r*6),i[r*2]=0,i[r*2+1]=1}let s=new Ie;s.setAttribute("position",new ke(e,3)),s.setAttribute("end",new ke(i,1)),this.rainMat=new Re({uniforms:{uTime:{value:0},uCam:{value:new A}},transparent:!0,depthWrite:!1,vertexShader:`attribute float end; uniform float uTime; uniform vec3 uCam; varying float vA;
        void main(){ vec3 p = position; p.y = mod(p.y - uTime * 34.0, 40.0); p.x = mod(p.x - uTime * 5.0 - uCam.x + 45.0, 90.0) - 45.0 + uCam.x; p.z = mod(p.z - uCam.z + 45.0, 90.0) - 45.0 + uCam.z;
          p.y += end * 1.1; p.x += end * 0.16; vA = end; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.78, 0.85, 0.95, 0.1 + vA * 0.22); }"}),this.rain=new ga(s,this.rainMat),this.rain.frustumCulled=!1,this.rain.visible=!1,this.rain.renderOrder=6,this.scene.add(this.rain)}setRain(t){this.raining=this.wet=t,this.rain.visible=t}update(t,e,i){this.solid.update(t),this.glow.update(t),this.raining&&(this.rainMat.uniforms.uTime.value=e,this.rainMat.uniforms.uCam.value.copy(i.position))}};function eh(n,t){return n==="side"?{fx:0,fz:-1,rx:1,rz:0,lx:0,lz:1}:{fx:t,fz:0,rx:0,rz:t,lx:0,lz:t}}var io=class{constructor(t){this.cam=t,this.pos=new A(-40,20,50),this.look=new A,this.fov=50,this.mode="menu",this.t=0,this.snap=!0,this.trauma=0,this.p={},this.tp=new A,this.tl=new A,this.clock=0}set(t,e={}){(t!==this.mode||e.force)&&(this.snap=!e.blend,this.t=0),this.mode=t,this.p=e}shake(t){vt.shake&&(this.trauma=Math.min(1,this.trauma+t))}update(t,e){this.t+=t,this.clock+=t;let i=this.tp,s=this.tl,r=e.focus,a=e.d||1,o=Math.max(0,(e.ballY||0)-1.5),l=50,c=5;switch(this.mode){case"play":if(e.style==="side")i.set(At(r.x,-44,44)*.92,24+o*.2,At(r.z+50,38,62)),s.set(r.x,.5+o*.4,r.z*.88-1),l=30;else{let d=21+(e.defending?3:0)+o*.5,f=12+(e.defending?1:0)+o*.3;i.set(r.x-a*d,f,At(r.z*.82,-30,30)),s.set(r.x+a*(e.defending?9:6),1.4+o*.45,r.z*.94),l=50,i.x=At(i.x,-84,84);let g=Math.abs(i.x)-71;g>0&&(i.y=Math.max(i.y,1.6+g*.6+4.5))}break;case"intro":{let d=cd(At(this.t/(this.p.dur||5),0,1));i.set(-46+30*d,30-17*d,44-16*d),s.set(6*d,2,0),l=50-6*d,c=30;break}case"try":{let d=(this.p.a0||0)+this.t*.45,f=10;i.set(r.x+Math.cos(d)*f,3.6,r.z+Math.sin(d)*f),s.set(r.x,1.1,r.z),l=34,c=8;break}case"convert":{let d=this.p,f=d.gx-d.x,g=-d.z,x=Math.hypot(f,g)||1,m=At(d.aim||0,-1,1);i.set(d.x-f/x*9+g/x*1.2,3.3,d.z-g/x*9-f/x*1.2),e.ballFlying?s.lerpVectors(s.set(d.gx,5,0),new A(r.x,r.y||0,r.z),.6):s.set(d.gx,5.5,m*0),l=42,c=6;break}case"replay":{if(this.p.angle===1)i.set(this.p.gx+a*15,13,r.z*.35),s.set(r.x,1,r.z),l=26;else{let d=this.p.side||1;i.set(r.x-a*7,1.6,r.z+d*13),s.set(r.x+a*1.5,1.1+o*.5,r.z),l=30}c=7;break}case"wide":{let d=(this.p.a0||.6)+this.t*.06;i.set(Math.cos(d)*52,30,Math.sin(d)*38),s.set(0,2,0),l=52;break}case"fixed":i.copy(this.p.pos),s.copy(this.p.look),l=this.p.fov||40,c=this.p.rate||3;break;default:{let d=this.clock*.045+.9;i.set(Math.cos(d)*44+r.x*.3,11+Math.sin(this.clock*.1)*3,Math.sin(d)*33),s.set(r.x*.7,2.5,r.z*.5),l=44,c=1.2}}if(this.snap)this.pos.copy(i),this.look.copy(s),this.fov=l,this.snap=!1;else{this.pos.set(_n(this.pos.x,i.x,c,t),_n(this.pos.y,i.y,c,t),_n(this.pos.z,i.z,c,t));let d=c*1.25;this.look.set(_n(this.look.x,s.x,d,t),_n(this.look.y,s.y,d,t),_n(this.look.z,s.z,d,t)),this.fov=_n(this.fov,l,3,t)}this.trauma=Math.max(0,this.trauma-t*1.7);let h=this.trauma*this.trauma,u=this.clock*37;this.cam.position.set(this.pos.x+Math.sin(u)*h*.5,this.pos.y+Math.sin(u*1.31+2)*h*.4,this.pos.z+Math.sin(u*.83+4)*h*.5),this.cam.lookAt(this.look),this.cam.rotation.z+=Math.sin(u*1.7)*h*.025,Math.abs(this.cam.fov-this.fov)>.01&&(this.cam.fov=this.fov,this.cam.updateProjectionMatrix())}};var vv=()=>(Math.random()+Math.random()+Math.random()-1.5)/.75;function kd(n,t,e,i,s){let r=n.squads[t].filter(a=>a.down<=0&&a!==s).sort((a,o)=>_e(a,e)-_e(o,e));for(let a=0;a<Math.min(i,r.length);a++)r[a].chase=!0}function Nd(n,t){let e=n.ball;for(let i of n.players)i.chase=!1;if(n.ref=e.carrier||(e.mode==="pass"?e.target:null),e.mode==="loose"){n.land=n.landing();for(let i=0;i<2;i++)kd(n,i,n.land,e.kick&&e.kick.team===i?3:2,e.noCatch>0?e.kicker:null)}else if(n.ref){let i=1-n.ref.t;n.seenT[i]-=t,(n.seenT[i]<=0||!n.seen[i]||n.seen[i].t!==n.ref.t||n.seen[i].down>0)&&(n.seen[i]=n.ref),kd(n,i,n.seen[i],n.cpuTeam(i)?n.diff.chasers:2,null)}}function Fd(n,t,e){let i=n.ball,s=n.speedOf(t);if(t.stepT>0){t.stepT-=e,t.vx=n.dir[t.t]*5.5,t.vz=t.stepS*12.5;return}if(i.mode==="loose"){let c=n.land;t.chase?(t.sprint=!0,n.moveTo(t,c.x,c.z,s*(t.tired?1:1.15),e)):(t.sprint=!1,n.moveTo(t,At(c.x-n.dir[t.t]*(t.fb?18:7),-56,56),t.lz*.8+c.z*.2,s*.92,e));return}let r=n.ref;if(!r){n.setVel(t,0,0,e);return}if(t.t!==r.t)return yv(n,t,s,e);if(t===i.carrier)return _v(n,t,s,e);let a=n.dir[t.t];if(t===i.target){t.sprint=!0,n.setVel(t,a*s*1.08,t.vz*.5,e);return}t.sprint=!1;let o=Math.abs(t.lz-r.z),l=t.fb?7:(t.fwd?1.6:t.wing?3:2.3)+.05*o;n.moveTo(t,At(r.x-a*l,-57,57),t.fb?r.z*.6:t.lz*.84+r.z*.16,s*1.12,e)}function yv(n,t,e,i){let s=n.seen[t.t]&&n.seen[t.t].t!==t.t?n.seen[t.t]:n.ref;if(t.fooled>0){t.foolTo?n.moveTo(t,t.foolTo.x,t.foolTo.z,e*.8,i):n.setVel(t,0,0,i);return}let r=n.dir[s.t],a=(t.x-s.x)*r,o=_e(t,s);if(t.marker&&n.playT<n.diff.marker){n.setVel(t,0,0,i),t.backpedal=!0;return}if(t.chase&&o<gr.engage||o<3.5||a<.8||t.fb&&o<15||t.marker&&n.playT<1.2){let l=At(o/(e+3),0,.55);t.sprint=o>4&&(a<1||n.broke),n.moveTo(t,s.x+s.vx*l,s.z+s.vz*l,e*(t.sprint&&!t.tired?1.16:1.03),i)}else if(t.fb)t.sprint=!1,n.moveTo(t,s.x+r*At(a,13,28),s.z*.85,e*.9,i);else{t.sprint=!1;let l=Math.min((s.x+r*(3.4+(t.wing?3.5:0)))*r,50-.4)*r;n.moveTo(t,l,t.lz*.7+s.z*.3,e*gr.line,i)}}function _v(n,t,e,i){let s=n.dir[t.t],r=n.squads[1-t.t],a=50-t.x*s,o=null,l=1e9;for(let c of r){if(c.down>0||(c.x-t.x)*s<-1.5)continue;let h=_e(c,t);h<l&&(l=h,o=c)}if(t.think-=i,t.think<=0){t.think=.2;let c=-1e9,h=0;for(let u of t.fwd?[-4,-2,0,2,4]:[-9,-5,-2,0,2,5,9]){let d=t.x+s*6,f=At(t.z+u,-31,31),g=10;for(let x of r)x.down<=0&&(g=Math.min(g,Math.hypot(x.x-d,x.z-f)));g-=Math.abs(u)*.22,u===t.steer&&(g+=.6),Math.abs(f)>29&&(g-=3),g>c&&(c=g,h=u)}if(t.steer=h,t.plan==="service"&&t.holdT>.14&&(t.plan=null,Math.random()<.8)){let u=n.tackles<2&&t.x*s<10,d=n.squads[t.t].filter(g=>g!==t&&g.down<=0&&(g.x-t.x)*s<-.5&&_e(g,t)>3.2&&_e(g,t)<13&&!g.fb).sort((g,x)=>(u?(x.fwd-g.fwd)*20:(g.fwd-x.fwd)*6)+_e(g,t)-_e(x,t)),f=d[Math.random()<.65?0:1]||d[0];if(f)return n.doPass(t,f)}if(t.holdT>.3){let u=n.tackles>=n.maxT-1,d=n.score[t.t]-n.score[1-t.t];if((n.golden&&a<30&&n.tackles>=2||n.half===2&&n.clock<40&&(d===0||d===-1)&&n.tackles>=3)&&a<34&&Math.abs(t.z)<15&&l>2&&n.dropGoal(t))return;if(u&&a>11&&l>2.3&&Math.random()<.5){let g=r.find(x=>x.fb);return a<24?n.doKick(t,Math.random()<.6?"grubber":"bomb",1,s,At(-t.z*.03+j(-.25,.25),-.6,.6)):a<50?n.doKick(t,"bomb",1,s,j(-.45,.45)):n.doKick(t,"punt",j(.75,1),s,(g&&g.z>0?-1:1)*j(.15,.5))}if(o&&l<4.2&&t.holdT>.45&&n.passN<3&&Math.random()<.3+n.diff.smart*.35){let g=null,x=2.5,m=Ud(r,t);for(let p of n.squads[t.t]){if(p===t||p.down>0||(p.x-t.x)*s>-.4||(p.x-t.x)*s<-6)continue;let y=_e(p,t);if(y<3||y>20)continue;let w=Ud(r,p)-m-y*.05;w>x&&(x=w,g=p)}if(g)return n.doPass(t,g,_e(g,t)>13)}if(o&&l<2.6&&l>1.3&&(o.x-t.x)*s>0){let g=Math.random();g<n.diff.smart*.16&&t.stepCd<=0?(t.stepT=.2,t.stepS=o.z>t.z?-1:1,t.immune=.3,t.stepCd=2.5,n.emit("step",{p:t})):g<n.diff.smart*.3&&t.fendCd<=0&&t.str>70&&(t.fendT=.6,t.fendCd=3,n.emit("fend",{p:t}))}}}t.sprint=!t.tired&&(l>7||n.broke)&&t.holdT>.4,n.moveTo(t,t.x+s*9,At(t.z+t.steer,-32,32),e*(t.sprint?1.18:1)*.98,i)}function Ud(n,t){let e=30;for(let i of n)i.down<=0&&(e=Math.min(e,_e(i,t)));return e}function Od(){return{power:j(.6,.95),z:j(-20,20)}}function Bd(n,t){let e=Math.atan2(Math.abs(t.spot.z),Math.abs(t.gx-t.spot.x)),i=(.02+(100-t.kicker.kck)*9e-4+e*.035)*(1.15-n.diff.smart*.3);return{power:At((t.dist-12)/34+.5,.5,.9),err:vv()*i}}var zd=()=>(Math.random()+Math.random()+Math.random()-1.5)/.75,gr={tackle:.63,breakImmune:.45,line:.62,engage:6.5},Hd=()=>({poss:0,metres:0,tackles:0,missed:0,breaks:0,errors:0,kicks:0,tries:0,sets:0}),so=class{constructor(t){this.cfg=t,this.emit=t.emit||(()=>{}),this.humans=t.humans,this.n=t.n||13,this.diff=ka[t.diff??1],this.rain=t.weather==="rain",this.maxT=t.rules?.tackles||6,this.rules=Object.assign({bonus:!1,golden:!1,mustWin:!1},t.rules),this.dir=[1,-1],this.score=[0,0],this.half=1,this.halfSecs=t.halfSecs||180,this.clock=this.halfSecs,this.siren=!1,this.golden=!1,this.over=!1,this.time=0,this.scorers=[],this.stats=[Hd(),Hd()],this.poss=0,this.tackles=0,this.mark={x:0,z:0},this.phase="idle",this.pt=0,this.pdur=0,this.pnext=null,this.waiting=!1,this.after=null,this.sel=[null,null],this.cands=[{L:[],R:[]},{L:[],R:[]}],this.basis=[null,null],this.seen=[null,null],this.seenT=[0,0],this.passN=0,this.ref=null,this.land={x:0,z:0},this.playT=0,this.broke=!1,this.conv=null,this.ko=null,this.wind={x:this.rain?j(-1.6,1.6):j(-.6,.6),z:this.rain?j(-1.6,1.6):j(-.6,.6)},this.players=[],this.squads=[[],[]];for(let e=0;e<2;e++)Md(t.teams[e],this.n).forEach((i,s)=>{let r=Object.assign({},i,{t:e,i:s,id:this.players.length,lz:i.lane,x:0,z:0,vx:0,vz:0,dir:e?Math.PI:0,ph:Math.random()*6,lastX:0,down:0,downType:jt.PRONE,rise:0,anim:0,animT:0,animDur:1,animAux:0,mood:0,jump:0,stam:1,tired:!1,sprint:!1,immune:0,fendT:0,fendCd:0,stepT:0,stepS:0,stepCd:0,dummyCd:0,diveT:0,big:!1,charge:0,holdT:0,think:0,steer:0,fooled:0,chase:!1,marker:!1,backpedal:!1,plan:null,tx:0,tz:0,tried:0});this.players.push(r),this.squads[e].push(r)});this.ball={x:0,y:.22,z:0,vx:0,vy:0,vz:0,mode:"dead",carrier:null,target:null,last:0,kicker:null,kick:null,noCatch:0,spin:0,yaw:0,px:0,pz:0,py:0,judged:0,id:0,long:!1}}team(t){return this.squads[t]}isHuman(t){return this.humans[t]!==null&&this.humans[t]!==void 0}cpuTeam(t){return!this.isHuman(t)}speedOf(t){return(4.2+t.spd*.04)*(this.cpuTeam(t.t)?this.diff.cpuSpeed:1)*(this.rain?.97:1)}anim(t,e,i,s=0){t.anim=e,t.animT=i,t.animDur=i,t.animAux=s}ground(t,e,i){t.down=e,t.downType=i,t.vx=t.vz=0,t.diveT=0,t.stepT=0,t.charge=0,t.big=!1,t.fendT=0}setVel(t,e,i,s,r=8.5){let a=Math.min(1,s*r);t.vx+=(e-t.vx)*a,t.vz+=(i-t.vz)*a}moveTo(t,e,i,s,r){let a=e-t.x,o=i-t.z,l=Math.hypot(a,o)||1,c=l<.25?0:Math.min(s,l*4.5);this.setVel(t,a/l*c,o/l*c,r)}setPhase(t,e=0,i=null){this.phase=t,this.pt=0,this.pdur=e,this.pnext=i}hold(t,e){this.waiting=!0,this.after=e,this.emit("hold",{reason:t})}resume(){if(!this.waiting)return;this.waiting=!1;let t=this.after;this.after=null,t&&t()}landing(){let t=this.ball;if(t.y<=.4&&Math.abs(t.vy)<2.5)return{x:t.x+t.vx*.3,z:t.z+t.vz*.3};let e=(t.vy+Math.sqrt(t.vy*t.vy+2*14*Math.max(0,t.y-.25)))/14;return{x:At(t.x+t.vx*e,-58,58),z:At(t.z+t.vz*e,-36,36),t:e}}pickDefender(t,e,i){let s=i||this.ball.carrier||this.ball.target||(this.ball.mode==="loose"?this.land:this.mark),r=-this.dir[t],a=null,o=1e9;for(let l of this.squads[t]){if(l===e)continue;let c=_e(l,s)+(l.down>0?25:0)+((l.x-s.x)*r<-.5?5:0)+(l.fb?3:0)+(l.marker?2:0);c<o&&(o=c,a=l)}return a}bestKicker(t){return this.squads[t].reduce((e,i)=>i.kck>e.kck?i:e)}start(){this.firstKick=Math.random()<.5?0:1,this.rules.golden&&(this.golden=!0,this.clock=0),this.restart(this.firstKick,"kickoff")}restart(t,e){if(this.periodEnded())return this.endPeriod();let i=1-t,s=this.dir[t],r=e==="dropout"?-s*50:0,a=this.ball,o=this.bestKicker(t);for(let l of this.players)Object.assign(l,{vx:0,vz:0,down:0,rise:0,diveT:0,stepT:0,charge:0,mood:0,animT:0,fooled:0,marker:!1,backpedal:!1,plan:null,immune:0,jump:0}),l.t===t?(l.x=r-s*(l===o?2.4:l.fb?14:1),l.z=l===o?0:l.lz,l.dir=s>0?0:Math.PI):(l.x=r+s*(l.fb?e==="dropout"?44:42:l.fwd?16+l.i%3*3:l.wing?33:27),l.z=l.lz*(l.fb?0:.95),l.dir=s>0?Math.PI:0),l.x=At(l.x,-57,57),l.lastX=l.x;Object.assign(a,{mode:"place",carrier:null,target:null,kick:null,x:r,y:.3,z:0,vx:0,vy:0,vz:0,last:t,yaw:s>0?0:Math.PI}),this.poss=i,this.tackles=0,this.broke=!1,this.ref=null,this.ko={k:t,kicker:o,type:e,kx:r,charge:0,charging:!1,human:this.isHuman(t)},this.sel[t]=o,this.sel[i]=this.squads[i].find(l=>l.fb),this.setPhase("kickoff"),this.emit("kickoff",{type:e,k:t})}launchKickoff(t,e){let{k:i,kicker:s,type:r,kx:a}=this.ko,o=this.dir[i],l=this.ball,c=2.1+.5*t,h=Math.min((r==="dropout"?26:22)+32*t,(r==="dropout"?2*50:50)+8-4);Object.assign(l,{mode:"loose",vx:o*h/c,vz:At(e,-28,28)/c,vy:14*c/2,y:.5,last:i,kicker:s,noCatch:.6,judged:0,id:l.id+1,kick:{type:"kickoff",from:{x:a,z:0},team:i,bounced:!1}}),this.anim(s,jt.KICK,.45),this.playT=0,this.stats[i].kicks++,this.emit("kick",{type:"kickoff",p:s}),this.setPhase("play")}periodEnded(){return!this.golden&&this.clock<=0}endPeriod(){let t=this.ball;Object.assign(t,{mode:"dead",carrier:null,target:null,kick:null});for(let e of this.players)e.charge=0,e.diveT=0;this.half===1?(this.setPhase("half"),this.emit("half"),this.hold("half",()=>{this.half=2,this.clock=this.halfSecs,this.siren=!1,this.dir=[-this.dir[0],-this.dir[1]],this.restart(1-this.firstKick,"kickoff")})):this.score[0]===this.score[1]&&this.rules.mustWin?(this.golden=!0,this.clock=0,this.emit("golden"),this.setPhase("half"),this.hold("golden",()=>this.restart(Math.random()<.5?0:1,"kickoff"))):this.finish()}finish(){this.over=!0,this.setPhase("full"),this.emit("full"),this.hold("full",()=>{})}ruck(t,e,i={}){if(this.periodEnded())return this.endPeriod();i.team!==void 0&&i.team!==this.poss&&(this.poss=i.team,this.tackles=0,this.stats[this.poss].sets++),i.reset&&(this.tackles=0);let s=this.poss,r=this.dir[s],a=this.ball;t=At(t,-49,49),e=At(e,-27,27),this.mark={x:t,z:e},Object.assign(a,{mode:"dead",carrier:null,target:null,kick:null,x:t,y:.22,z:e,vx:0,vy:0,vz:0});let o=null,l=1e9;for(let c of this.squads[s]){let h=Math.hypot(c.x-t,c.z-e)+(c.down>0?5:0)+(c===i.tackled?99:0)+(c.fb?10:0)+(c.wing?6:0);h<l&&(l=h,o=c)}for(let c of this.players)if(Object.assign(c,{diveT:0,stepT:0,charge:0,big:!1,fooled:0,marker:!1,plan:null,backpedal:c.t!==s,sprint:!1}),c.t===s){if(c===o)c.tx=t-r*1.4,c.tz=e;else if(c===i.tackled)c.tx=t,c.tz=e;else{let h=c.fb?10:c.fwd?3.2:c.wing?6:4.5;c.tx=t-r*(h+.07*Math.abs(c.lz-e)),c.tz=c.fb?e*.5:c.lz*.82+e*.18}c.tx=At(c.tx,-57,57)}else c===i.tackler?(c.marker=!0,c.tx=t+r*1.4,c.tz=e):c.fb?(c.tx=At(t+r*27,-54,54),c.tz=e*.6):(c.tx=At(t+r*(c.wing?13:10),-50,50),c.tz=c.lz*.78+e*.22);this.dh=o,this.broke=!1,this.ref=null,this.passN=0,this.sel[s]=o,this.sel[1-s]=this.pickDefender(1-s,null,{x:t+r*6,z:e}),this.setPhase("ruck",i.slow?2.4:1.8,()=>{Object.assign(a,{mode:"held",carrier:o}),o.holdT=0,o.down=0,o.think=.25,o.plan="service",o.lastX=o.x,this.playT=0,this.seen=[o,o],this.sel[s]=o,this.setPhase("play"),this.emit("playball")})}turnover(t,e,i,s,r={}){this.emit("stoppage",Object.assign({msg:s,team:i},r)),this.ruck(t,e,{team:i,reset:!0,slow:!0})}addScore(t,e,i,s){this.score[t]+=e,this.scorers.push({t,pts:e,type:i,name:s?s.name:"",num:s?s.num:0,min:Math.max(1,Math.ceil(((this.half-1)*this.halfSecs+(this.halfSecs-Math.max(0,this.clock)))/this.halfSecs*40))}),this.emit("score",{t,pts:e,type:i,p:s})}scoreTry(t){let e=this.ball,i=this.dir[t.t],s=this.rules.bonus&&Math.abs(t.z)<6,r=s?5:4;Object.assign(e,{mode:"held",carrier:t,kick:null}),this.ground(t,3,jt.TRYDIVE),t.vx=i*5.5,t.vz*=.3,t.slide=.6,this.stats[t.t].tries++,this.addScore(t.t,r,"try",t);for(let a of this.players)a.charge=0,a.mood=a.t===t.t?jt.CELEBRATE:jt.DEJECTED,a.sprint=!1;this.setPhase("try",3,()=>this.hold("try",()=>this.golden?this.finish():this.startConversion(t))),this.emit("try",{p:t,bonus:s})}startConversion(t){let e=this.dir[t.t],i=At(Math.abs(t.z)*.85,12,30);this.setPlaceKick(t.t,{x:e*50-e*i,z:At(t.z,-31,31)})}setPlaceKick(t,e){let i=this.dir[t],s=i*50,r=this.ball,a=this.bestKicker(t),o=Math.atan2(-e.z,s-e.x);for(let l of this.players)Object.assign(l,{vx:0,vz:0,down:0,rise:0,mood:0,animT:0,sprint:!1}),l===a?(l.x=e.x-Math.cos(o)*2.2,l.z=e.z-Math.sin(o)*2.2,l.dir=o):l.t===t?(l.x=e.x-i*(12+l.i%4*2.5),l.z=l.lz*.8,l.dir=i>0?0:Math.PI):(l.x=s+i*(1.5+l.i%3*1.4),l.z=l.lz*.75,l.dir=i>0?Math.PI:0);Object.assign(r,{mode:"place",carrier:null,target:null,kick:null,x:e.x,y:.3,z:e.z,vx:0,vy:0,vz:0,yaw:o,judged:0}),this.conv={t,kicker:a,spot:e,gx:s,base:o,aim:0,stage:0,power:0,needle:0,time:0,st:0,human:this.isHuman(t),result:null,flying:!1,dist:Math.hypot(s-e.x,e.z)},this.sel[t]=a,this.setPhase("convert"),this.emit("convert",this.conv)}placeKick(t,e,i){let s=this.ball,r=Math.max(0,e-.9)*2.2,a=19+9.5*e,o=.6,l=t.base+t.aim+i*(1+r*2.5)+(r?zd()*r*.08:0);Object.assign(s,{mode:"loose",vx:Math.cos(l)*a*Math.cos(o),vz:Math.sin(l)*a*Math.cos(o),vy:a*Math.sin(o),y:.4,judged:0,id:s.id+1,noCatch:9,kicker:t.kicker,last:t.t,kick:{type:"place",from:{x:s.x,z:s.z},team:t.t,bounced:!1,gx:t.gx}}),this.anim(t.kicker,jt.KICK,.5),t.stage=3,t.flying=!0,t.st=0,this.emit("kick",{type:"place",p:t.kicker})}updateConvert(t,e){let i=this.conv,s=this.ball;if(i.time+=t,i.st+=t,i.stage<3){if(i.human){let r=e[i.t],a=r&&(r.pressed.step||r.pressed.kick||r.pressed.fend);if(i.stage===0)r&&(i.aim=At(i.aim+r.mx*t*.3,-.5,.5)),(a&&i.time>.35||i.time>14)&&(i.stage=1,i.st=0);else if(i.stage===1){let o=i.st/.9%2;i.power=o<1?o:2-o,(a||i.st>6)&&(i.stage=2,i.st=0,this.emit("tick"))}else i.needle=Math.sin(i.st*5.4),(a||i.st>6)&&(this.emit("tick"),this.placeKick(i,i.power,i.needle*.13*(1.3-i.kicker.kck/250)))}else if(i.time>1.6){let r=Bd(this,i);i.aim=0,i.power=r.power,this.placeKick(i,r.power,r.err)}return}if(this.flyBall(t),i.result===null&&(s.judged!==0||s.y<=.3||i.st>4)&&(i.result=s.judged===1,i.st=0,i.flying=!1,i.result&&this.addScore(i.t,2,"conversion",i.kicker),this.emit("convResult",{good:i.result,t:i.t})),i.result!==null&&i.st>1.9){let r=i.t;this.conv=null,this.rules.kicking?(this.setPhase("between"),this.hold("kickNext",()=>{})):this.restart(1-r,"kickoff")}}gain(t,e){let i=this.ball;Object.assign(i,{mode:"held",carrier:t,target:null,kick:null}),t.holdT=0,t.think=.3,t.lastX=t.x,t.plan=null,t.charge=0,t.t!==this.poss&&(this.poss=t.t,this.tackles=0,this.broke=!1,this.passN=0,this.stats[t.t].sets++,this.emit("turnover",{p:t,how:e})),this.seen=[t,t],this.sel[t.t]=t,this.isHuman(1-t.t)&&(this.sel[1-t.t]=this.pickDefender(1-t.t)),this.emit("catch",{p:t,how:e})}doPass(t,e,i=!1){let s=this.ball;Object.assign(s,{mode:"pass",carrier:null,target:e,last:t.t,x:t.x,y:1.3,z:t.z,kick:null,long:i,id:s.id+1});let r=-Math.sin(t.dir)*(e.x-t.x)+Math.cos(t.dir)*(e.z-t.z);this.anim(t,jt.PASS,.32,r>=0?1:-1),t.charge=0,t.plan=null,this.seenT[1-t.t]=this.diff.react,this.passN++,this.isHuman(1-t.t)&&vt.autoSwitch&&this.sel[1-t.t]&&_e(this.sel[1-t.t],e)>9&&(this.sel[1-t.t]=this.pickDefender(1-t.t,null,e)),this.emit("pass",{from:t,to:e,long:i})}doKick(t,e,i,s,r){let a=this.ball,o=Math.hypot(s,r)||1,l=.93+t.kck*9e-4,c,h;e==="bomb"?(c=10.5,h=19.5):e==="grubber"?(c=15.5,h=2.4):i<.18?(c=9,h=9.5,e="chip"):(c=14+13*i,h=9.5+5.5*i),c*=l*(this.rain?.95:1),Object.assign(a,{mode:"loose",carrier:null,target:null,last:t.t,kicker:t,noCatch:.5,judged:0,id:a.id+1,x:t.x+s/o*.6,y:e==="grubber"?.45:1,z:t.z+r/o*.6,vx:s/o*c,vz:r/o*c,vy:h,kick:{type:e,from:{x:t.x,z:t.z},team:t.t,bounced:!1}}),this.anim(t,jt.KICK,.45),t.vx*=.45,t.vz*=.45,t.charge=0,this.stats[t.t].kicks++,this.broke=!1,this.isHuman(1-t.t)&&(this.sel[1-t.t]=this.pickDefender(1-t.t,null,this.landing())),this.emit("kick",{type:e,p:t,power:i})}dropGoal(t){let e=this.dir[t.t],i=e*50,s=i-t.x,r=-t.z,a=Math.hypot(s,r),o=this.ball;if(s*e<4||a>50)return!1;let l=.028+a*.0021+(100-t.kck)*8e-4;for(let d of this.squads[1-t.t])if(d.down<=0&&_e(d,t)<3){l*=1.7;break}this.isHuman(t.t)&&(l*=.85);let c=Math.atan2(r,s)+zd()*l,h=At(17.5+a*.3,18,31),u=.62;return Object.assign(o,{mode:"loose",carrier:null,target:null,last:t.t,kicker:t,noCatch:.6,judged:0,id:o.id+1,x:t.x+Math.cos(c)*.6,y:.5,z:t.z+Math.sin(c)*.6,vx:Math.cos(c)*h*Math.cos(u),vz:Math.sin(c)*h*Math.cos(u),vy:h*Math.sin(u),kick:{type:"drop",from:{x:t.x,z:t.z},team:t.t,bounced:!1,gx:i,D:a}}),this.anim(t,jt.KICK,.45),t.vx*=.3,t.vz*=.3,this.stats[t.t].kicks++,this.emit("kick",{type:"drop",p:t}),!0}flyBall(t){let e=this.ball;e.px=e.x,e.py=e.y,e.pz=e.z,e.vy-=14*t,e.y>2&&(e.vx+=this.wind.x*t,e.vz+=this.wind.z*t),e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t,e.spin+=t*(e.kick&&e.kick.type==="punt"?22:13),Math.hypot(e.vx,e.vz)>.5&&(e.yaw=Math.atan2(e.vz,e.vx));let i=e.kick;if(i&&i.gx!==void 0&&!e.judged&&(e.px-i.gx)*(e.x-i.gx)<=0&&e.x!==e.px){let s=(i.gx-e.px)/(e.x-e.px),r=e.pz+s*(e.z-e.pz),a=e.py+s*(e.y-e.py);Math.abs(Math.abs(r)-2.75)<.16&&a>.3?(e.judged=Math.random()<.45?1:-1,e.vz*=-.3,this.emit("post")):e.judged=Math.abs(r)<2.75&&a>3.05?1:-1}if(e.y<.25)if(e.y=.25,i&&!i.bounced&&(i.bounced=!0,i.bx=e.x),i&&i.gx!==void 0&&!e.judged&&(e.judged=-1),e.vy<-2.4)this.emit("bounce",{v:-e.vy}),e.vy*=-(i&&i.type==="grubber"?.55:.42),e.vx*=.72,e.vz=e.vz*.72+j(-1.8,1.8),Math.random()<.25&&(e.vx+=j(-1.5,1.5),e.vy*=1.4);else{e.vy=0;let s=Math.max(0,1-t*(this.rain?1.2:1.9));e.vx*=s,e.vz*=s}}updateBall(t){let e=this.ball;if(e.mode==="held"){let s=e.carrier;e.x=s.x+Math.cos(s.dir)*.3,e.z=s.z+Math.sin(s.dir)*.3,e.y=s.down>0?.35:1.2,e.vx=s.vx,e.vz=s.vz,e.yaw=s.dir;return}if(e.mode==="pass"){let s=e.target,r=s.x-e.x,a=s.z-e.z,o=Math.hypot(r,a),l=e.long?23:18.5;if(e.yaw=Math.atan2(a,r),e.spin+=t*25,s.down>0){Object.assign(e,{mode:"loose",vy:2,vx:r/(o||1)*6,vz:a/(o||1)*6,noCatch:0,kick:null});return}if(o<.95){let c=.005+(this.rain?.02:0)+(e.long?.01:0)-(s.hnd-75)*8e-4;Math.random()<c?(Object.assign(e,{mode:"loose",vx:s.vx+j(-2,2)+this.dir[s.t]*2.5,vz:s.vz+j(-2,2),vy:3.5,last:s.t,kicker:s,noCatch:.35,kick:null}),this.stats[s.t].errors++,this.emit("spill",{p:s})):this.gain(s,"pass");return}e.x+=r/o*l*t,e.z+=a/o*l*t,e.y=1.25+Math.min(.7,o*.05),e.vx=r/o*l,e.vz=a/o*l;for(let c of this.squads[1-s.t]){if(c.down>0||c.tried===e.id||Math.hypot(c.x-e.x,c.z-e.z)>.8)continue;c.tried=e.id;let h=this.sel[c.t]===c&&this.isHuman(c.t);if(Math.random()<(h?.5:.16+this.diff.cpuTackle)){this.stats[c.t].breaks++,this.gain(c,"intercept");return}}return}if(e.mode!=="loose")return;e.noCatch-=t,this.flyBall(t);let i=e.kick;if(i&&i.type==="drop"&&e.judged){if(e.judged===1){let s=i.D>40?2:1;this.addScore(i.team,s,"field goal",e.kicker),this.emit("fieldGoal",{t:i.team,pts:s});let r=i.team;e.kick=null,this.setPhase("between",2.2,()=>this.golden?this.finish():this.restart(1-r,"kickoff"));return}i.gx=void 0}if(Math.abs(e.z)>34+.3){let s=Math.sign(e.z);if(i&&!i.bounced)return this.turnover(i.from.x,i.from.z,1-i.team,"Out on the full");if(i&&(i.type==="punt"||i.type==="chip"||i.type==="grubber"||i.type==="bomb")){let r=this.dir[i.team];if(i.from.x*r<-10&&i.bx*r>30&&e.x*r>30&&e.x*r<50)return this.turnover(e.x,s*24,i.team,"40/20!",{big:!0})}return this.turnover(e.x,s*24,1-e.last,"Touch")}if(Math.abs(e.x)>58)return this.deadBall(Math.sign(e.x));if(e.y<2.55){let s=null,r=1.15;for(let a of this.players){if(a.down>0||a===e.kicker&&e.noCatch>0||a.tried===e.id)continue;let o=Math.hypot(a.x-e.x,a.z-e.z);o<r&&(r=o,s=a)}if(s){let a=e.y>1.2&&e.vy<-6,o=a?.03+(i&&i.type==="bomb"?.09:0)+(this.rain?.06:0)-(s.hnd-75)*.002:this.rain?.04:.005;if(a){for(let l of this.squads[1-s.t])if(l.down<=0&&_e(l,s)<1.8){o+=.2;break}}if(Math.random()<o)s.tried=e.id,Object.assign(e,{vx:j(-3,3)+this.dir[s.t]*2,vz:j(-3,3),vy:4,last:s.t,kick:null}),this.stats[s.t].errors++,this.emit("spill",{p:s});else{let l=this.dir[s.t];this.gain(s,i?"kick":"loose"),s.x*l>50&&this.scoreTry(s)}}}}deadBall(t){let e=this.dir[0]===-t?0:1,i=this.ball;if(!(i.kick&&i.kick.type==="place")){if(i.last===e)return this.emit("stoppage",{msg:"Goal line drop-out",team:1-e}),this.setPhase("between",1.6,()=>this.restart(e,"dropout"));this.turnover(t*30,0,e,"20 metre restart")}}human(t,e,i){let s=this.sel[t],r=this.ball,a=this.basis[t];if(!s||!a)return;let o=r.carrier===s,l=this.dir[t],c=a.rx*e.mx+a.fx*e.my,h=a.rz*e.mx+a.fz*e.my,u=Math.hypot(c,h);if(s.stepT>0){s.stepT-=i,s.vx=l*5.5,s.vz=s.stepS*12.5;return}if(s.diveT>0){s.diveT-=i,s.diveT<=0&&(this.ground(s,s.big?1:.75,jt.PRONE),this.emit("dust",{p:s}));return}s.sprint=e.held.sprint&&!s.tired&&u>.2;let d=this.speedOf(s)*(s.sprint?1.22:1)*(s.rise>0?.5:1)*(o?.98:1)*(s.charge>0?.72:1)*(s.fendT>0?.9:1);if(this.setVel(s,c*d,h*d,i,o?7.5:9),o){if(s.holdT<.1)return;for(let[x,m]of[["passL","L"],["passR","R"]]){let p=this.cands[t][m];if(e.released[x]&&e.holdT[x]<.22){if(p[0])return this.doPass(s,p[0]);this.emit("deny",{t})}else if(e.held[x]&&e.holdT[x]>=.22&&!s["long"+m]){if(s["long"+m]=!0,p[1]||p[0])return this.doPass(s,p[1]||p[0],!!p[1]);this.emit("deny",{t})}e.held[x]||(s["long"+m]=!1)}let f=u>.3?c:l,g=u>.3?h:0;if(e.held.kick)s.charge=Math.min(1,s.charge+i/.85);else if(s.charge>0)return this.doKick(s,"punt",s.charge,f,g);if(e.pressed.bomb)return this.doKick(s,"bomb",1,f,g);if(e.pressed.grubber)return this.doKick(s,"grubber",1,f,g);if(e.pressed.drop&&!this.dropGoal(s)&&this.emit("deny",{t}),r.carrier!==s)return;if(e.pressed.step&&s.stepCd<=0&&s.stam>.08){let x=Math.abs(h)>.3?Math.sign(h):0;if(!x){let m=null,p=1e9;for(let y of this.squads[1-t]){let w=_e(y,s);y.down<=0&&w<p&&(p=w,m=y)}x=m&&m.z>s.z?-1:1}s.stepT=.2,s.stepS=x,s.immune=.32,s.stepCd=1.1,s.stam=Math.max(0,s.stam-.1),this.emit("step",{p:s})}if(e.pressed.fend&&s.fendCd<=0&&(s.fendT=.65,s.fendCd=2,this.emit("fend",{p:s})),e.pressed.dummy&&s.dummyCd<=0){s.dummyCd=2.2;let x=this.cands[t].R[0]&&(!this.cands[t].L[0]||h*a.lz+c*a.lx>=0)?"R":"L",m=this.cands[t][x][0];this.anim(s,jt.PASS,.3,x==="R"?1:-1);for(let p of this.squads[1-t])p.down<=0&&_e(p,s)<9&&Math.random()<(this.cpuTeam(p.t)?this.diff.fool:.5)&&this.sel[p.t]!==p&&(p.fooled=.5,p.foolTo=m||null);this.emit("dummy",{p:s})}}else if(r.mode!=="dead"){if(e.pressed.step||e.pressed.fend){let f=r.carrier,g=u>.2?Math.atan2(h,c):s.dir;if(f&&f.t!==t){let m=_e(f,s),p=Math.atan2(f.z+f.vz*.15-s.z,f.x+f.vx*.15-s.x);m<5.5&&Math.abs(Da(p,g))<1.1&&(g=p)}s.big=!!e.pressed.fend&&!e.pressed.step,s.diveT=s.big?.22:.28;let x=s.big?10.5:12.5;s.vx=Math.cos(g)*x,s.vz=Math.sin(g)*x,s.dir=g}else if(e.pressed.passL)this.sel[t]=this.pickDefender(t,s)||s;else if(e.pressed.passR){let f=this.squads[t].filter(g=>g.down<=0&&g!==s).sort((g,x)=>_e(g,r)-_e(x,r));this.sel[t]=f[1]||f[0]||s}}}passCandidates(t){let e=this.ball.carrier,i=this.cands[t];if(i.L.length=0,i.R.length=0,!e||e.t!==t||!this.basis[t])return;let s=this.basis[t],r=this.dir[t],a=[],o=[];for(let l of this.squads[t]){if(l===e||l.down>0||(l.x-e.x)*r>.7)continue;let c=_e(l,e);if(c<2.6||c>30)continue;let h=(l.x-e.x)*s.lx+(l.z-e.z)*s.lz;Math.abs(h)<1.2||(h>0?o:a).push([c,l])}for(let[l,c]of[[a,i.L],[o,i.R]]){l.sort((h,u)=>h[0]-u[0]);for(let h=0;h<Math.min(2,l.length);h++)c.push(l[h][1])}}tackleChecks(){let t=this.ball,e=t.carrier;if(!(!e||e.holdT<.12||e.immune>0))for(let i of this.squads[1-e.t]){if(i.down>0||i.rise>.2||i.marker&&this.playT<this.diff.marker&&this.cpuTeam(i.t)||_e(i,e)>(i.diveT>0?1.8:1.12))continue;let s=this.sel[i.t]===i&&this.isHuman(i.t),r=gr.tackle+(i.tkl-e.str)*.004;this.cpuTeam(i.t)?r+=this.diff.cpuTackle:r+=s?this.diff.humanTackle+.07:-.03,i.diveT>0&&s&&(r+=.07),i.big&&(r-=.13);let a=!1;if(e.fendT>0&&Math.abs(Da(Math.atan2(i.z-e.z,i.x-e.x),e.dir))<1.35&&(r-=.42+(e.str-70)*.004,a=!0),Math.hypot(e.vx,e.vz)<3&&(r+=.1),e.sprint&&(r-=.04),this.isHuman(e.t)&&(r-=.03),Math.random()<At(r,.15,.97))return this.tackle(i,e);this.ground(i,1.2,jt.PRONE),e.immune=gr.breakImmune,e.vx*=.92,e.vz*=.92,this.stats[i.t].missed++,this.emit("miss",{def:i,car:e,fended:a})}}tackle(t,e){let i=this.ball,s=this.dir[e.t],r=!!t.big||Math.random()<.1;this.ground(e,1.3,jt.SUPINE),this.ground(t,1.05,jt.PRONE),this.stats[t.t].tackles++,e.dir=Math.atan2(t.z-e.z,t.x-e.x)+Math.PI,this.emit("tackle",{def:t,car:e,big:r,human:this.sel[t.t]===t&&this.isHuman(t.t)});let a=.007+(r?.18:0)+(this.rain?.03:0)-(e.hnd-75)*.001;if(Math.random()<a){Object.assign(i,{mode:"loose",carrier:null,target:null,kick:null,x:e.x,y:.9,z:e.z,vx:e.vx*.3+j(-3.5,3.5),vz:j(-3.5,3.5),vy:4.5,last:e.t,kicker:e,noCatch:.3,id:i.id+1}),this.stats[e.t].errors++,this.emit("fumble",{p:e,def:t});return}if(e.x*s<-50)return this.emit("stoppage",{msg:"Goal line drop-out",team:1-e.t}),this.setPhase("between",1.8,()=>this.restart(e.t,"dropout"));this.tackles++,this.tackles>=this.maxT?(this.emit("stoppage",{msg:"Handover",team:1-e.t}),this.ruck(e.x,e.z,{team:1-e.t,slow:!0})):(this.emit("count",{n:this.tackles,last:this.tackles===this.maxT-1}),this.ruck(e.x+s*.8,e.z,{tackled:e,tackler:t}))}timers(t,e){t.holdT+=e,t.immune-=e,t.fendT-=e,t.fendCd-=e,t.stepCd-=e,t.dummyCd-=e,t.fooled-=e,t.rise-=e,t.animT>0&&(t.animT-=e),t.sprint&&!t.tired?(t.stam-=e*.26,t.stam<=0&&(t.stam=0,t.tired=!0)):(t.stam=Math.min(1,t.stam+e*.11),t.stam>.3&&(t.tired=!1)),t.tired&&(t.sprint=!1)}integrate(t){let e=this.players,i=this.ball;for(let s of e){s.x=At(s.x+s.vx*t,-58+.4,58-.4),s.z=At(s.z+s.vz*t,-34-1.6,34+1.6);let r=Math.hypot(s.vx,s.vz);s.ph+=r*t*1.55;let a=null;if(s.down>0||s.diveT>0)a=null;else if(s.backpedal||r<.9){let o=i.x-s.x,l=i.z-s.z;Math.hypot(o,l)>1.2&&(s.backpedal||this.phase!=="convert")&&(a=Math.atan2(l,o)),(i.carrier===s||this.phase==="convert"||this.phase==="kickoff")&&(a=r>.9?Math.atan2(s.vz,s.vx):null)}else a=Math.atan2(s.vz,s.vx);a!==null&&(s.dir+=Da(a,s.dir)*Math.min(1,t*11))}for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){let a=e[s],o=e[r];if(a.down>0||o.down>0||a===i.carrier||o===i.carrier)continue;let l=o.x-a.x,c=o.z-a.z,h=Math.hypot(l,c);if(h<.85&&h>.001){let u=(.85-h)/2/h;a.x-=l*u,a.z-=c*u,o.x+=l*u,o.z+=c*u}}}update(t,e){if(this.waiting||this.phase==="idle")return;this.time+=t,this.pt+=t;let i=this.ball;if(this.phase==="play")this.stepPlay(t,e);else if(this.phase==="ruck"){this.clock-=t;for(let s of this.players){if(this.timers(s,t),s.sprint=!1,s.down>0){s.down-=t,s.vx=s.vz=0,s.down<=0&&(s.rise=.35);continue}this.moveTo(s,s.tx,s.tz,this.speedOf(s)*1.25,t)}this.integrate(t)}else if(this.phase==="kickoff"){let s=this.ko,r=e[s.k];for(let a of this.players)this.timers(a,t),this.setVel(a,0,0,t);if(s.human&&r){if(r.held.kick||r.held.step)s.charging=!0,s.charge=Math.min(1,s.charge+t/.9);else if(s.charging){let a=this.basis[s.k];this.launchKickoff(Math.max(.3,s.charge),(a.rz*r.mx+a.fz*r.my||j(-.6,.6))*22)}this.pt>7&&!s.charging&&this.launchKickoff(.7,j(-18,18)),s.charging&&s.charge>=1&&this.pt>9&&this.launchKickoff(1,j(-18,18))}else if(this.pt>1.5){let a=Od(this);this.launchKickoff(a.power,a.z)}this.integrate(t)}else if(this.phase==="convert"){for(let s of this.players)this.timers(s,t);this.updateConvert(t,e),this.integrate(t)}else{for(let s of this.players){if(this.timers(s,t),s.down>0){s.down-=t,s.slide>0?(s.slide-=t,s.vx*=1-t*3):s.vx=s.vz=0,s.down<=0&&(s.rise=.35);continue}this.setVel(s,0,0,t,4)}this.integrate(t),i.mode==="loose"?this.flyBall(t):this.updateBall(t)}if(this.pdur&&this.pt>=this.pdur&&this.pnext){let s=this.pnext;this.pnext=null,this.pdur=0,s()}}stepPlay(t,e){let i=this.ball;this.playT+=t,this.golden?this.clock+=t:(this.clock-=t,this.clock<=0&&!this.siren&&(this.siren=!0,this.emit("siren")));let s=i.carrier;if(s){let o=this.stats[s.t];o.poss+=t;let l=(s.x-s.lastX)*this.dir[s.t];l>0&&(o.metres+=l),s.lastX=s.x}Nd(this,t);for(let o=0;o<2;o++)this.isHuman(o)&&(i.carrier&&i.carrier.t===o?this.sel[o]=i.carrier:i.mode==="pass"&&i.target.t===o?this.sel[o]=i.target:(!this.sel[o]||this.sel[o].down>.9)&&(this.sel[o]=this.pickDefender(o)),this.passCandidates(o));for(let o of this.players){if(this.timers(o,t),o.down>0){o.down-=t,o.vx=o.vz=0,o.down<=0&&(o.rise=.35);continue}o.backpedal=!1,this.sel[o.t]===o&&this.isHuman(o.t)&&e[o.t]?this.human(o.t,e[o.t],t):Fd(this,o,t)}if(this.integrate(t),this.updateBall(t),this.phase!=="play")return;let r=i.carrier;if(!r)return;let a=this.dir[r.t];if(Math.abs(r.z)>34)return this.turnover(r.x,Math.sign(r.z)*24,1-r.t,"Into touch");if(r.x*a>=50+.3)return this.scoreTry(r);if(r.x*a<-58+.6)return this.emit("stoppage",{msg:"Goal line drop-out",team:1-r.t}),this.setPhase("between",1.6,()=>this.restart(r.t,"dropout"));if(!this.broke&&this.playT>.5){let o=0;for(let l of this.squads[1-r.t])!l.fb&&l.down<=0&&(l.x-r.x)*a>.5&&Math.abs(l.z-r.z)<16&&o++;o===0&&(r.x-this.mark.x)*a>6&&(this.broke=!0,this.stats[r.t].breaks++,this.emit("break",{p:r}))}this.tackleChecks()}snapshot(t){let e=this.ball,i=this.phase==="play"||this.phase==="ruck";for(let r=0;r<this.players.length;r++){let a=this.players[r],o=r*fi,l=jt.NONE,c=0,h=0,u=0;a.down>0?(l=a.downType,c=a.downType===jt.TRYDIVE?1-a.down/3:1):a.rise>0?l=jt.GETUP:a.diveT>0?(l=jt.LUNGE,c=1-a.diveT/.28):a.stepT>0?(l=jt.STEP,h=a.stepS*(Math.cos(a.dir)>=0?1:-1)):a.animT>0?(l=a.anim,c=1-a.animT/a.animDur,h=a.animAux):a.mood&&this.phase==="try"?l=a.mood:this.phase==="convert"&&this.conv&&a===this.conv.kicker&&this.conv.stage<3?l=jt.SETKICK:e.mode==="loose"&&a.chase&&e.y>2.5&&_e(a,this.land)<2&&(l=jt.CATCH),e.carrier===a&&(u|=nn.BALL),a.fendT>0&&(u|=nn.FEND),a.sprint&&(u|=nn.SPRINT),i&&a.t!==this.poss&&e.mode!=="loose"&&(u|=nn.READY),t[o]=a.x,t[o+1]=a.z,t[o+2]=a.dir,t[o+3]=a.vx*Math.cos(a.dir)+a.vz*Math.sin(a.dir),t[o+4]=a.ph,t[o+5]=l,t[o+6]=c,t[o+7]=u,t[o+8]=h,t[o+9]=0}let s=this.players.length*fi;t[s]=e.x,t[s+1]=e.y,t[s+2]=e.z,t[s+3]=e.yaw,t[s+4]=e.spin,t[s+5]=e.mode==="held"?0:e.mode==="place"?3:e.mode==="dead"?4:e.mode==="pass"||e.kick&&(e.kick.type==="punt"||e.kick.type==="chip")?1:2,t[s+6]=e.carrier?e.carrier.id:-1}};var Gt=(n,t)=>n.querySelector(t),bv=n=>{let[t,...e]=n.split(" ");return t[0]+". "+e.join(" ")},ro=class{constructor(t){this.root=t,this.cache={},this.bannerT=0,this.tickT=0,t.innerHTML=`
      <div class="bug">
        <div class="bug-team home"><img class="crest" alt=""><span class="abbr"></span><b class="pts">0</b></div>
        <div class="bug-clock"><b>0:00</b><span>1ST</span></div>
        <div class="bug-team away"><b class="pts">0</b><span class="abbr"></span><img class="crest" alt=""></div>
        <div class="count"><span class="lbl">Tackle</span><div class="pips"></div></div>
      </div>
      <div class="card"><b class="num"></b><div class="who"><span class="pname"></span><span class="prole"></span><div class="stam"><i></i></div></div></div>
      <div class="hints"></div>
      <canvas class="radar" width="240" height="140"></canvas>
      <div class="banner"><div class="b-main"></div><div class="b-sub"></div></div>
      <div class="ticker"></div><div class="prompt"></div>
      <div class="tag" data-k="0"></div><div class="tag" data-k="1"></div><div class="tag" data-k="2"></div><div class="tag" data-k="3"></div>
      <div class="pin" data-k="0"><i></i><span></span></div><div class="pin" data-k="1"><i></i><span></span></div>
      <div class="kbar" data-k="0"><i></i></div><div class="kbar" data-k="1"><i></i></div>
      <div class="meter" hidden><div class="m-title"></div>
        <div class="m-row"><span>Power</span><div class="m-bar power"><i class="sweet"></i><i class="fill"></i></div></div>
        <div class="m-row"><span>Accuracy</span><div class="m-bar acc"><i class="zone"></i><i class="needle"></i></div></div>
        <div class="m-wind"><span>Wind</span><i class="arrow"></i><b></b></div></div>
      <div class="replay" hidden><span>Replay</span></div>
      <div class="bars"></div>
      <div class="versus" hidden><div class="v-side home"><img alt=""><b></b><span></span></div><div class="v-mid"><em></em><b>V</b><span></span></div><div class="v-side away"><img alt=""><b></b><span></span></div></div>`,this.el={bug:Gt(t,".bug"),home:Gt(t,".bug-team.home"),away:Gt(t,".bug-team.away"),clock:Gt(t,".bug-clock b"),half:Gt(t,".bug-clock span"),count:Gt(t,".count"),lbl:Gt(t,".count .lbl"),pips:Gt(t,".pips"),card:Gt(t,".card"),hints:Gt(t,".hints"),radar:Gt(t,".radar"),banner:Gt(t,".banner"),bMain:Gt(t,".b-main"),bSub:Gt(t,".b-sub"),ticker:Gt(t,".ticker"),prompt:Gt(t,".prompt"),meter:Gt(t,".meter"),replay:Gt(t,".replay"),versus:Gt(t,".versus"),tags:[...t.querySelectorAll(".tag")],pins:[...t.querySelectorAll(".pin")],kbars:[...t.querySelectorAll(".kbar")]},this.g=this.el.radar.getContext("2d")}set(t,e,i,s="textContent"){this.cache[t]!==i&&(this.cache[t]=i,e[s]=i)}show(t){this.root.hidden=!t}setTeams(t,e,i){this.teams=t,this.cache={},[this.el.home,this.el.away].forEach((s,r)=>{Gt(s,".crest").src=Ci(t[r]),Gt(s,".abbr").textContent=t[r].abbr,s.style.setProperty("--tc",Vt(t[r].c1)),s.style.setProperty("--tk",Vt(ze(t[r].c1)))}),this.el.pips.innerHTML="<i></i>".repeat(i),this.pips=[...this.el.pips.children],this.colors=t.map((s,r)=>Vt(e[r].c1))}banner(t,e="",i={}){let s=this.el.banner;this.el.bMain.textContent=t,this.el.bSub.textContent=e,s.className="banner on"+(i.big?" big":"")+(i.small?" small":""),s.style.setProperty("--bc",i.color||"#ffd23c"),s.style.setProperty("--bk",i.ink||"#0a0e13"),s.offsetWidth,s.classList.add("go"),this.bannerT=i.dur||1.8}comment(t){let e=this.el.ticker;e.textContent=t,e.classList.remove("on"),e.offsetWidth,e.classList.add("on"),this.tickT=3.2}versus(t,e,i,s){let r=this.el.versus;r.hidden=!t,t&&([...r.querySelectorAll(".v-side")].forEach((a,o)=>{Gt(a,"img").src=Ci(e[o],320),Gt(a,"b").textContent=e[o].name,Gt(a,"span").textContent=e[o].city,a.style.setProperty("--tc",Vt(e[o].c1))}),Gt(r,".v-mid em").textContent=i,Gt(r,".v-mid span").textContent=s)}replay(t){this.el.replay.hidden=!t,this.root.classList.toggle("cine",t)}cine(t){this.root.classList.toggle("cine",t)}update(t,e){let i=e.match,s=this.el,r=i.ball;this.bannerT>0&&(this.bannerT-=t)<=0&&s.banner.classList.remove("on","go"),this.tickT>0&&(this.tickT-=t)<=0&&s.ticker.classList.remove("on"),this.set("s0",Gt(s.home,".pts"),String(i.score[0])),this.set("s1",Gt(s.away,".pts"),String(i.score[1]));let a=Math.max(0,i.golden?Math.floor(i.clock):Math.ceil(i.clock));this.set("clock",s.clock,Math.floor(a/60)+":"+String(a%60).padStart(2,"0")),this.set("half",s.half,i.golden?"GOLDEN POINT":i.rules.kicking?"SHOOTOUT":i.half===1?"1ST HALF":"2ND HALF"),this.cache.possCls!==i.poss&&(this.cache.possCls=i.poss,s.home.classList.toggle("has",i.poss===0),s.away.classList.toggle("has",i.poss===1));let o=i.tackles>=i.maxT-1,l=i.phase==="play"||i.phase==="ruck";this.set("lbl",s.lbl,o?"Last tackle":"Tackle "+i.tackles),this.cache.tk!==i.tackles&&(this.cache.tk=i.tackles,this.pips.forEach((y,w)=>y.classList.toggle("on",w<i.tackles)),s.count.classList.toggle("last",o)),s.count.style.setProperty("--tc",this.colors[i.poss]);let c=e.quiet||e.replay||i.rules.kicking;s.count.style.visibility=l&&!c?"visible":"hidden";let h=e.humans.findIndex(y=>y!==null),u=h>=0?i.sel[h]:null,d=!!u&&l&&!c&&!e.duo;s.card.style.visibility=d?"visible":"hidden",d&&(this.set("num",Gt(s.card,".num"),String(u.num)),this.set("pname",Gt(s.card,".pname"),bv(u.name)),this.set("prole",Gt(s.card,".prole"),bd[u.role]),Gt(s.card,".stam i").style.transform=`scaleX(${u.stam.toFixed(3)})`,Gt(s.card,".stam").classList.toggle("tired",u.tired),s.card.style.setProperty("--tc",this.colors[h]));let f=!vt.hints||!l||c||h<0||e.duo?"off":r.carrier&&r.carrier.t===h||i.poss===h&&r.mode==="pass"?"att":"def";if(this.cache.hint!==f+Zt.pads[0].usingPad){this.cache.hint=f+Zt.pads[0].usingPad;let y=w=>`<kbd>${Zt.label(0,w)}</kbd>`;s.hints.innerHTML=f==="off"?"":f==="att"?`<span>${y("passL")}${y("passR")} Pass</span><span>${y("step")} Step</span><span>${y("fend")} Fend</span><span>${y("dummy")} Dummy</span><span>${y("kick")} Punt</span><span>${y("bomb")} Bomb</span><span>${y("grubber")} Grubber</span><span>${y("drop")} Field goal</span><span>${y("sprint")} Sprint</span>`:`<span>${y("step")} Tackle</span><span>${y("fend")} Big hit</span><span>${y("passL")}${y("passR")} Switch</span><span>${y("sprint")} Sprint</span>`}let g=0;for(let y=0;y<2;y++){let w=e.humans[y],b=s.pins[y],D=s.kbars[y],E=i.sel[y];if(w===null||!E||!l||c){b.style.display="none",D.style.display="none";continue}let[R,P,S]=e.project(E.x,2.45,E.z);b.style.display=S?"block":"none",b.style.transform=`translate(${R}px,${P}px)`,b.style.setProperty("--tc",e.duo&&y?"#4fd1ff":"#ffd23c"),this.set("pin"+y,b.lastElementChild,e.duo?"P"+(w+1):"");let M=i.phase==="kickoff"&&i.ko&&i.ko.k===y?i.ko.charge:E.charge;if(D.style.display=M>0&&S?"block":"none",M>0&&(D.style.transform=`translate(${R}px,${P-26}px)`,D.firstElementChild.style.transform=`scaleX(${M.toFixed(3)})`,D.classList.toggle("max",M>.9)),r.carrier&&r.carrier.t===y&&i.phase==="play")for(let[C,V]of[["L","passL"],["R","passR"]]){let B=i.cands[y][C][0],G=s.tags[g++];if(!G)break;if(!B){G.style.display="none";continue}let[J,$,et]=e.project(B.x,2.5,B.z);G.style.display=et?"block":"none",G.style.transform=`translate(${J}px,${$}px)`,this.set("tag"+g,G,Zt.label(w,V))}}for(;g<4;g++)s.tags[g].style.display="none";let x="";e.replay?x="Press any key to skip":e.intro?x=e.intro<3.9?"Press any key to skip":"":i.phase==="kickoff"&&i.ko&&i.ko.human&&!i.ko.charging&&(x=`Hold <kbd>${Zt.label(e.humans[i.ko.k]||0,"kick")}</kbd> and release to kick off`),this.cache.prompt!==x&&(this.cache.prompt=x,s.prompt.innerHTML=x,s.prompt.classList.toggle("on",!!x));let m=i.conv,p=!!m&&m.human&&m.stage<3;if(this.cache.meter!==p&&(this.cache.meter=p,s.meter.hidden=!p),p){let y=`<kbd>${Zt.label(e.humans[m.t]||0,"step")}</kbd>`;this.set("mt",Gt(s.meter,".m-title"),m.stage===0?`Aim with <kbd>${Zt.label(e.humans[m.t]||0,"left")}</kbd><kbd>${Zt.label(e.humans[m.t]||0,"right")}</kbd> then press ${y}`:m.stage===1?`Press ${y} to set power`:`Press ${y} when the pin is centred`,"innerHTML"),s.meter.dataset.stage=m.stage,Gt(s.meter,".fill").style.transform=`scaleX(${m.power.toFixed(3)})`,Gt(s.meter,".needle").style.left=50+m.needle*50+"%";let w=Math.hypot(i.wind.x,i.wind.z),[b,D]=e.windScreen||[1,0];Gt(s.meter,".arrow").style.transform=`rotate(${Math.atan2(D,b)}rad)`,this.set("wind",Gt(s.meter,".m-wind b"),(w*9).toFixed(0)+" km/h")}e.quiet||this.radar(i,e),s.radar.style.visibility=l&&!c?"visible":"hidden"}radar(t,e){let i=this.g,s=240,r=140,a=2,o=h=>s/2+h*a,l=h=>r/2+h*a;i.clearRect(0,0,s,r),i.fillStyle="rgba(8,14,20,.62)",i.fillRect(o(-58),l(-34),58*2*a,34*2*a);for(let h=0;h<2;h++)i.fillStyle=this.colors[h],i.globalAlpha=.4,i.fillRect(o(t.dir[h]>0?-58:50),l(-34),8*a,34*2*a);i.globalAlpha=1,i.strokeStyle="rgba(255,255,255,.45)",i.lineWidth=1,i.strokeRect(o(-58)+.5,l(-34)+.5,58*2*a-1,34*2*a-1),i.beginPath();for(let h of[-50,-30,-10,0,10,30,50])i.moveTo(o(h)+.5,l(-34)),i.lineTo(o(h)+.5,l(34));i.stroke();for(let h of t.players){let u=t.sel[h.t]===h&&e.humans[h.t]!==null;i.fillStyle=this.colors[h.t],i.beginPath(),i.arc(o(h.x),l(h.z),u?4:2.6,0,7),i.fill(),i.lineWidth=u?2:.8,i.strokeStyle=u?"#ffd23c":"rgba(255,255,255,.75)",i.stroke()}let c=t.ball;i.fillStyle="#fff",i.beginPath(),i.arc(o(c.x),l(c.z),2.4,0,7),i.fill(),i.strokeStyle="#000",i.lineWidth=1,i.stroke()}};function Mv(n){let t=Math.exp(-n),e=0,i=1;do e++,i*=Math.random();while(i>t);return e-1}function Vd(n,t,e=!1){let i=(a,o)=>{let l=0,c=Mv(Math.max(.5,3.3+(a.att-o.def)*.11+(a.spd-o.spd)*.03));for(let h=0;h<c;h++)l+=4+(Math.random()<a.kck/115?2:0);return l+(Math.random()<.07?1:0)},s=i(n,t),r=i(t,n);return e&&s===r&&(Math.random()<.5?s+=1:r+=1),[s,r]}function Sv(n){let t=n.slice(),e=t.length,i=[];for(let s=0;s<e-1;s++){let r=[];for(let a=0;a<e/2;a++)r.push(s%2?[t[e-1-a],t[a]]:[t[a],t[e-1-a]]);i.push(r),t.splice(1,0,t.pop())}return i}var ih=n=>{let t=n.slice();for(let e=t.length-1;e>0;e--){let i=Math.random()*(e+1)|0;[t[e],t[i]]=[t[i],t[e]]}return t};function Gd(n,t){let e=ih(ge.map(a=>a.id)),i=Sv(e).slice(0,t?5:11),s={};for(let a of e)s[a]={p:0,w:0,d:0,l:0,pf:0,pa:0,pts:0};let r={team:n,rounds:i,round:0,table:s,stage:"regular",finals:null,last:[],champion:null,out:!1};return Ce.set("season",r),r}var Us=()=>Ce.get("season",null),wv=n=>Ce.set("season",n);function nh(n){return Object.entries(n.table).map(([t,e])=>Object.assign({id:t,pd:e.pf-e.pa},e)).sort((t,e)=>e.pts-t.pts||e.pd-t.pd||e.pf-t.pf)}function Tv(n,t,e,i,s){let r=n.table[t],a=n.table[e];r.p++,a.p++,r.pf+=i,r.pa+=s,a.pf+=s,a.pa+=i,i>s?(r.w++,r.pts+=2,a.l++):s>i?(a.w++,a.pts+=2,r.l++):(r.d++,a.d++,r.pts++,a.pts++)}function sh(n){if(n.stage==="done")return null;let t=n.stage==="regular"?n.rounds[n.round]:n.finals,e=t.find(i=>i.includes(n.team));return e?{home:Le(e[0]),away:Le(e[1]),userSide:e[0]===n.team?0:1,label:n.stage==="regular"?`Round ${n.round+1} of ${n.rounds.length}`:n.stage==="semi"?"Semi final":"Grand final",knockout:n.stage!=="regular"}:null}function ao(n,t){let e=n.stage==="regular"?n.rounds[n.round]:n.finals;n.last=[];let i=[];for(let[s,r]of e){let a=s===n.team||r===n.team,o=a&&t?t:Vd(Le(s),Le(r),n.stage!=="regular");n.last.push([s,r,o[0],o[1]]),i.push(o[0]>=o[1]?s:r),n.stage==="regular"&&Tv(n,s,r,o[0],o[1])}if(n.stage==="regular"){if(n.round++,n.round>=n.rounds.length){let s=nh(n).slice(0,4).map(r=>r.id);n.finals=[[s[0],s[3]],[s[1],s[2]]],n.stage="semi",n.out=!s.includes(n.team)}}else n.stage==="semi"?(n.finals=[[i[0],i[1]]],n.stage="final",i.includes(n.team)||(n.out=!0)):(n.champion=i[0],n.stage="done");for(;n.out&&n.stage!=="done";)ao(n,null);return wv(n),n}function Wd(n){let t=ih(ge.map(s=>s.id).filter(s=>s!==n)).slice(0,7),e=ih([n,...t]),i={team:n,rounds:[[[e[0],e[1]],[e[2],e[3]],[e[4],e[5]],[e[6],e[7]]]],results:[],stage:"play",champion:null,out:!1};return Ce.set("cup",i),i}var xr=()=>Ce.get("cup",null),rh=["Quarter final","Semi final","Final"];function ah(n){if(n.stage==="done"||n.out)return null;let t=n.rounds.length-1,e=n.rounds[t].find(i=>i.includes(n.team));return{home:Le(e[0]),away:Le(e[1]),userSide:e[0]===n.team?0:1,label:"Cup "+rh[t].toLowerCase(),knockout:!0}}function oh(n,t){let e=n.rounds.length-1,i=[],s=[];for(let[r,a]of n.rounds[e]){let o=(r===n.team||a===n.team)&&t,l=o?t:Vd(Le(r),Le(a),!0);i.push([l[0],l[1]]),s.push(l[0]>=l[1]?r:a)}if(n.results.push(i),s.includes(n.team)||(n.out=!0),s.length===1)n.champion=s[0],n.stage="done";else{let r=[];for(let a=0;a<s.length;a+=2)r.push([s[a],s[a+1]]);n.rounds.push(r)}for(;n.out&&n.stage!=="done";)oh(n,null);return Ce.set("cup",n),n}var vr=[{id:"quick",name:"Quick Match",blurb:"Pick two clubs and play a full 13-a-side match. Six tackles a set, two halves, bragging rights."},{id:"season",name:"Premiership",blurb:"Take a club through the regular season, finish in the top four and win the grand final."},{id:"cup",name:"Knockout Cup",blurb:"Eight clubs, three rounds, no second chances. Level at full time means golden point."},{id:"nines",name:"Nines Blitz",blurb:"Nine a side, five-tackle sets and wide open spaces. A try under the posts is worth five."},{id:"golden",name:"Golden Point",blurb:"Sudden death from the kick-off. The first try, goal or field goal wins it."},{id:"kicking",name:"Goal Kicking",blurb:"Ten shots at goal from tougher and tougher spots, with the wind getting up. Beat your best."},{id:"versus",name:"Two Player",blurb:"Head to head on one PC. Share the keyboard or plug in gamepads."}];var Xd=n=>n[0].toUpperCase()+n.slice(1),lh=(n,t,e)=>n[(n.indexOf(t)+e+n.length)%n.length],lo={half:{label:"Half length",get:()=>vt.half+" min",adj:n=>{vt.half=lh(ud,vt.half,n)}},difficulty:{label:"Difficulty",get:()=>ka[vt.difficulty].name,adj:n=>{vt.difficulty=(vt.difficulty+n+3)%3}},time:{label:"Time of day",get:()=>Xd(vt.time),adj:n=>{vt.time=lh(dd,vt.time,n)}},weather:{label:"Weather",get:()=>vt.weather==="rain"?"Rain":"Clear",adj:()=>{vt.weather=vt.weather==="rain"?"clear":"rain"}},camera:{label:"Camera",get:()=>vt.camera==="side"?"Broadcast side-on":"End-on, behind play",adj:()=>{vt.camera=vt.camera==="side"?"endon":"side"}},quality:{label:"Graphics quality",get:()=>Xd(vt.quality),adj:n=>{vt.quality=lh(fd,vt.quality,n)}},sfx:{label:"Effects volume",get:()=>Math.round(vt.sfx*10),adj:n=>{vt.sfx=Math.min(1,Math.max(0,Math.round(vt.sfx*10+n)/10))}},crowd:{label:"Crowd volume",get:()=>Math.round(vt.crowd*10),adj:n=>{vt.crowd=Math.min(1,Math.max(0,Math.round(vt.crowd*10+n)/10))}},music:{label:"Music volume",get:()=>Math.round(vt.music*10),adj:n=>{vt.music=Math.min(1,Math.max(0,Math.round(vt.music*10+n)/10))}},shake:{label:"Camera shake",get:()=>vt.shake?"On":"Off",adj:()=>{vt.shake=!vt.shake}},replays:{label:"Try replays",get:()=>vt.replays?"On":"Off",adj:()=>{vt.replays=!vt.replays}},hints:{label:"Key hints",get:()=>vt.hints?"On":"Off",adj:()=>{vt.hints=!vt.hints}},autoSwitch:{label:"Auto-switch defender",get:()=>vt.autoSwitch?"On":"Off",adj:()=>{vt.autoSwitch=!vt.autoSwitch}}},Ns=n=>`<div class="row" data-adj="${n}"><span>${lo[n].label}</span><b><i class="ar">&#9664;</i>${lo[n].get()}<i class="ar">&#9654;</i></b></div>`,Te=(n,t,e="")=>`<div class="row btn ${e}" data-act="${n}"><span>${t}</span></div>`,oo=(n,t)=>`<div class="stat"><span>${n}</span><div><i style="width:${t}%"></i></div><b>${t}</b></div>`;function $d(n,t,e=0){return`<div class="tcard" style="--tc:${Vt(n.c1)};--t2:${Vt(n.c2)}"><div class="tc-tag">${t}</div>
    <div class="tc-top"><img class="tc-crest" src="${Ci(n,320)}" alt=""><img class="tc-kit" src="${Sd(n,e)}" alt=""></div>
    <div class="tc-city">${n.city}</div><div class="tc-name">${n.name}</div><div class="tc-ground">${n.ground}</div>
    ${oo("Attack",n.att)}${oo("Defence",n.def)}${oo("Speed",n.spd)}${oo("Kicking",n.kck)}<div class="tc-ovr"><span>Overall</span><b>${vd(n)}</b></div></div>`}function qd(n){let[t,e]=n.stats,i=t.poss+e.poss||1,s=(r,a,o)=>`<tr><td>${a}</td><th>${r}</th><td>${o}</td></tr>`;return`<table class="stats">${s("Possession",Math.round(t.poss/i*100)+"%",Math.round(e.poss/i*100)+"%")}${s("Metres run",Math.round(t.metres),Math.round(e.metres))}${s("Line breaks",t.breaks,e.breaks)}${s("Tackles",t.tackles,e.tackles)}${s("Missed tackles",t.missed,e.missed)}${s("Errors",t.errors,e.errors)}${s("Kicks",t.kicks,e.kicks)}</table>`}function Yd(n){let[t,e]=n.teams,i=s=>n.scorers.filter(r=>r.t===s&&r.type!=="conversion").map(r=>`${r.name.split(" ").slice(1).join(" ")} ${r.min}'${r.type==="field goal"?" (FG)":""}`).join(", ");return`<div class="final"><div class="f-team" style="--tc:${Vt(t.c1)}"><img src="${Ci(t,320)}" alt=""><span>${t.name}</span><em>${i(0)}</em></div><div class="f-score"><b>${n.score[0]}</b><i>&ndash;</i><b>${n.score[1]}</b></div><div class="f-team" style="--tc:${Vt(e.c1)}"><img src="${Ci(e,320)}" alt=""><span>${e.name}</span><em>${i(1)}</em></div></div>`}var co=class{constructor(t,e){this.root=t,this.app=e,this.stack=[],this.focus=0,this.items=[],this.closedAt=0,this.pick={mode:"quick",a:0,b:1,short:!0};let i=Ce.get("lastTeams",null);i&&(this.pick.a=Math.max(0,ge.findIndex(s=>s.id===i[0])),this.pick.b=Math.max(0,ge.findIndex(s=>s.id===i[1]))),Zt.menuHandler=(s,r)=>this.nav(s,r),t.addEventListener("click",s=>{if(Pt.init(),this.top&&this.top.name==="title")return this.nav("ok");let r=s.target.closest(".row");if(!r)return;let a=this.items.indexOf(r);a<0||(this.focus=a,r.dataset.adj?this.adjust(r,s.target.closest(".ar")&&s.target.closest(".ar")===r.querySelector(".ar")?-1:1):this.activate(r))}),t.addEventListener("mousemove",s=>{let r=s.target.closest(".row");if(!r)return;let a=this.items.indexOf(r);a>=0&&a!==this.focus&&(this.focus=a,this.paint())})}get active(){return this.stack.length>0}get top(){return this.stack[this.stack.length-1]}open(t,e={}){this.stack.push({name:t,data:e}),this.focus=e.focus||0,this.render()}replace(t,e={}){this.stack.pop(),this.open(t,e)}reset(t,e={}){this.stack=[],this.open(t,e)}closeAll(){this.stack=[],this.root.innerHTML="",this.root.hidden=!0,this.items=[],this.closedAt=performance.now()}back(){let t=this.top;if(t&&!["title","main","half","post","kickDone"].includes(t.name)){if(Pt.sfx("back"),t.name==="pause")return this.app.resume();if(this.stack.pop(),!this.stack.length)return this.closeAll();this.focus=this.top.data.focus||0,this.render()}}render(){let t=this.top;this.root.hidden=!1,this.root.dataset.screen=t.name,this.root.innerHTML=this["s_"+t.name](t.data),this.items=[...this.root.querySelectorAll(".row")],this.focus=Math.min(this.focus,Math.max(0,this.items.length-1)),this.paint()}paint(){this.items.forEach((e,i)=>e.classList.toggle("focus",i===this.focus));let t=this.items[this.focus];if(t&&t.dataset.mode){let e=this.root.querySelector(".blurb"),i=vr.find(s=>s.id===t.dataset.mode);e&&i&&(e.textContent=i.blurb)}t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest"})}nav(t){let e=this.top;if(!e)return;if(Pt.init(),e.name==="title"){t==="ok"&&(Pt.sfx("ok"),this.replace("main"));return}if(this.capturing)return;let i=this.items[this.focus];if(t==="up"||t==="down"){if(!this.items.length)return;this.focus=(this.focus+(t==="up"?-1:1)+this.items.length)%this.items.length,Pt.sfx("move"),this.paint()}else t==="left"||t==="right"?i&&i.dataset.adj&&this.adjust(i,t==="left"?-1:1):t==="ok"?i&&(i.dataset.adj?this.adjust(i,1):this.activate(i)):t==="back"&&this.back()}adjust(t,e){let i=t.dataset.adj,s=this.pick,r=ge.length;i==="teamA"?(s.a=(s.a+e+r)%r,s.a===s.b&&this.needsTwo()&&(s.b=(s.b+e+r)%r)):i==="teamB"?(s.b=(s.b+e+r)%r,s.a===s.b&&(s.b=(s.b+e+r)%r)):i==="short"?s.short=!s.short:lo[i]&&(lo[i].adj(e),pd(),this.app.applySettings(i)),Pt.sfx("tick"),this.top.data.focus=this.focus,this.render()}needsTwo(){return!["season","cup","kicking"].includes(this.pick.mode)}activate(t){let e=t.dataset.act,i=t.dataset.arg,s=this.pick,r=this.app;if(e)switch(Pt.sfx("ok"),this.top&&(this.top.data.focus=this.focus),e){case"mode":return s.mode=i,i==="season"&&Us()?this.open("season"):i==="cup"&&xr()?this.open("cup"):this.open("teams");case"open":return this.open(i);case"teamsDone":return Ce.set("lastTeams",[ge[s.a].id,ge[s.b].id]),s.mode==="season"?(Gd(ge[s.a].id,s.short),this.replace("season")):s.mode==="cup"?(Wd(ge[s.a].id),this.replace("cup")):this.open("setup");case"kickoff":return r.launch(this.config());case"seasonPlay":{let a=Us(),o=sh(a);return r.launch({mode:"season",teams:[o.home,o.away],userSide:o.userSide,n:13,rules:{mustWin:o.knockout},label:o.label})}case"seasonSim":return ao(Us(),null),this.render();case"seasonNew":return Ce.del("season"),s.mode="season",this.replace("teams");case"cupPlay":{let a=xr(),o=ah(a);return r.launch({mode:"cup",teams:[o.home,o.away],userSide:o.userSide,n:13,rules:{mustWin:!0},label:o.label})}case"cupNew":return Ce.del("cup"),s.mode="cup",this.replace("teams");case"resume":return r.resume();case"restart":return r.restartMatch();case"quit":return r.quitMatch();case"halfGo":return r.continueHalf();case"postGo":return this.afterMatch();case"fullscreen":return r.fullscreen();case"rebind":this.capturing=!0,t.querySelector("b").textContent="Press a key...",Zt.capture=a=>{this.capturing=!1,a!=="Escape"&&Zt.rebind(i,a),this.render()};return;case"resetBinds":return Zt.resetBinds(),this.render();case"back":return this.back()}}config(){let t=this.pick,e=ge[t.a],i=ge[t.b],s={mode:t.mode,teams:[e,i],userSide:0,n:13,rules:{},label:vr.find(r=>r.id===t.mode).name};return t.mode==="nines"&&(s.n=9,s.rules={tackles:5,bonus:!0}),t.mode==="golden"&&(s.rules={golden:!0}),t.mode==="versus"&&(s.duo=!0),t.mode==="kicking"&&(s.teams=[e,ge[(t.a+1)%ge.length]],s.rules={kicking:!0}),s}finish(t){this.sum=t,this.reset(t.mode==="kicking"?"kickDone":"post",{sum:t})}afterMatch(){let t=this.sum;if(this.app.toMenuWorld(),t.mode==="season")return ao(Us(),t.score),this.reset("main"),this.pick.mode="season",this.open("season");if(t.mode==="cup")return oh(xr(),t.score),this.reset("main"),this.pick.mode="cup",this.open("cup");this.reset("main")}s_title(){return'<div class="title"><div class="t-eyebrow">Rugby league arcade</div><h1>Sixth<em>Tackle</em></h1><div class="t-press">Press <kbd>Enter</kbd> to start</div></div>'}s_main(){return`<div class="panel left"><div class="logo">Sixth<em>Tackle</em></div><div class="list">${vr.map(t=>`<div class="row btn" data-act="mode" data-arg="${t.id}" data-mode="${t.id}"><span>${t.name}</span></div>`).join("")}
      <div class="gap"></div>${Te("open","Controls","minor").replace('data-act="open"','data-act="open" data-arg="controls"')}${Te("open","Settings","minor").replace('data-act="open"','data-act="open" data-arg="settings"')}</div>
      <p class="blurb"></p><div class="foot"><kbd>&uarr;</kbd><kbd>&darr;</kbd> choose <kbd>Enter</kbd> select</div></div>`}s_teams(){let t=this.pick,e=this.needsTwo(),i=t.mode==="versus",s=ge[t.a],r=ge[t.b],a=vr.find(l=>l.id===t.mode).name,o=(l,c,h)=>`<div class="row" data-adj="${l}"><span>${c}</span><b><i class="ar">&#9664;</i>${h.city} ${h.name}<i class="ar">&#9654;</i></b></div>`;return`<div class="panel wide"><h2>${a}<small>Choose ${e?"the clubs":"your club"}</small></h2>
      <div class="cards">${$d(s,i?"Player 1":"Your club")}${e?`<div class="vs">V</div>${$d(r,i?"Player 2":"Opponent")}`:""}</div>
      <div class="list tight">${o("teamA",i?"Player 1 club":"Your club",s)}${e?o("teamB",i?"Player 2 club":"Opponent",r):""}
      ${t.mode==="season"?`<div class="row" data-adj="short"><span>Season length</span><b><i class="ar">&#9664;</i>${t.short?"Short, 5 rounds":"Full, 11 rounds"}<i class="ar">&#9654;</i></b></div>`:""}
      ${Te(t.mode==="kicking"?"kickoff":"teamsDone",t.mode==="kicking"?"Start the shootout":"Continue","go")}</div>
      <div class="foot"><kbd>&larr;</kbd><kbd>&rarr;</kbd> change <kbd>Enter</kbd> select <kbd>Esc</kbd> back</div></div>`}s_setup(){let t=this.pick.mode==="versus";return`<div class="panel left"><h2>Match settings</h2><div class="list tight">${Ns("half")}${t?"":Ns("difficulty")}${Ns("time")}${Ns("weather")}${t?"":Ns("camera")}${Te("kickoff","Kick off","go")}</div>
      ${t?'<p class="blurb show">Two player matches use the broadcast side-on camera. Player 1: W A S D, Q/E pass, Space tackle. Player 2: arrow keys, comma/full stop pass, Enter tackle. Gamepads work too.</p>':""}
      <div class="foot"><kbd>&larr;</kbd><kbd>&rarr;</kbd> change <kbd>Esc</kbd> back</div></div>`}s_settings(){return`<div class="panel left"><h2>Settings</h2><div class="list tight">${["quality","camera","difficulty","half","sfx","crowd","music","shake","replays","hints","autoSwitch"].map(Ns).join("")}${Te("fullscreen","Toggle fullscreen")}${Te("back","Done","go")}</div></div>`}s_controls(){return`<div class="panel wide"><h2>Controls<small>Select an action and press Enter to rebind it</small></h2><div class="cols"><div class="list tight scroll">${Fa.map(([e,i])=>`<div class="row" data-act="rebind" data-arg="${e}"><span>${i}</span><b>${Zt.binds[e].map(Kc).join(" / ")}</b></div>`).join("")}${Te("resetBinds","Reset to defaults")}${Te("back","Done","go")}</div>
      <div class="help"><h3>How it plays</h3><p><b>Attack.</b> The key shown above each support runner throws them the ball; hold it for a cut-out pass to the next player along. Step and fend to beat a tackler, and hold the punt key to charge a kick.</p><p><b>Defence.</b> Run into the ball carrier to wrap them up, or dive with the tackle key. A big hit can jar the ball loose but is easy to miss.</p><p><b>Sets.</b> You get six tackles. Kick on the last or hand the ball over where you are caught.</p>
      <h3>Gamepad</h3><p>Left stick move, RT sprint, LB/RB pass, A step or tackle, B fend or big hit, X punt, Y bomb, LT grubber, R3 field goal, L3 dummy.</p>
      <h3>Two player keyboard</h3><p>P1: W A S D, L-Shift, Q/E, Space, F, C, R/T/G/V kicks.<br>P2: arrows, R-Shift, , and . to pass, Enter, /, M, K/I/L/J kicks.</p></div></div></div>`}s_pause(){return`<div class="panel left"><h2>Paused</h2><div class="list">${Te("resume","Resume","go")}${Te("open","Controls").replace('data-act="open"','data-act="open" data-arg="controls"')}${Te("open","Settings").replace('data-act="open"','data-act="open" data-arg="settings"')}${Te("restart","Restart match")}${Te("quit","Quit to menu")}</div></div>`}s_half(t){return`<div class="panel centre"><h2>Half time</h2>${Yd(t.sum)}${qd(t.sum)}<div class="list tight">${Te("halfGo","Second half","go")}</div></div>`}s_post(t){let e=t.sum,i=e.userSide,s=e.score[i]>e.score[1-i],r=e.score[0]===e.score[1];return`<div class="panel centre"><h2>${e.duo?r?"Honours even":`${e.teams[e.score[0]>e.score[1]?0:1].name} win`:r?"Honours even":s?"You win":"Beaten today"}<small>${e.label||"Full time"}${e.golden?", golden point":""}</small></h2>${Yd(e)}${qd(e)}<div class="list tight">${Te("postGo","Continue","go")}</div></div>`}s_kickDone(t){let e=t.sum,i=Ce.get("kickBest",0);return`<div class="panel centre"><h2>${e.kicks.made} from ${e.kicks.total}<small>${e.kicks.made>e.kicks.prev?"A new personal best":"Your best is "+i}</small></h2><div class="kicks">${e.kicks.log.map(s=>`<i class="${s?"good":"miss"}"></i>`).join("")}</div><div class="list tight">${Te("postGo","Continue","go")}</div></div>`}s_season(){let t=Us(),e=sh(t),i=nh(t),s=Le(t.team),r=`<table class="ladder"><tr><th></th><th class="l">Club</th><th>P</th><th>W</th><th>D</th><th>L</th><th>PD</th><th>Pts</th></tr>${i.map((l,c)=>{let h=Le(l.id);return`<tr class="${l.id===t.team?"me":""}${c===3?" cut":""}"><td>${c+1}</td><td class="l"><img src="${Ci(h)}" alt="">${h.city} ${h.name}</td><td>${l.p}</td><td>${l.w}</td><td>${l.d}</td><td>${l.l}</td><td>${l.pd>0?"+":""}${l.pd}</td><td><b>${l.pts}</b></td></tr>`}).join("")}</table>`,a=t.last.length?`<div class="results"><h3>Latest results</h3>${t.last.map(([l,c,h,u])=>`<div class="${l===t.team||c===t.team?"me":""}"><span>${Le(l).name}</span><b>${h} &ndash; ${u}</b><span>${Le(c).name}</span></div>`).join("")}</div>`:"",o;return t.stage==="done"?o=`<div class="next"><h3>${t.champion===t.team?"Premiers!":"Season over"}</h3><p>${Le(t.champion).city} ${Le(t.champion).name} are the champions.${t.champion===t.team?" You lifted the trophy.":t.out?" Your season ended early.":""}</p></div>`:o=`<div class="next"><h3>${e.label}</h3><div class="fx"><img src="${Ci(e.home,320)}" alt=""><span>${e.home.name}<i>v</i>${e.away.name}</span><img src="${Ci(e.away,320)}" alt=""></div></div>`,`<div class="panel full"><h2>Premiership<small>${s.city} ${s.name}</small></h2><div class="cols"><div>${r}</div><div class="side">${o}${a}<div class="list tight">${t.stage==="done"?"":Te("seasonPlay","Play match","go")+Te("seasonSim","Simulate match")}${Te("seasonNew","Start a new season")}${Te("back","Back")}</div></div></div></div>`}s_cup(){let t=xr(),e=ah(t),i=Le(t.team),s=[0,1,2].map(a=>{let o=t.rounds[a]||[],l=[4,2,1][a],c=`<div class="bcol"><h3>${rh[a]}</h3>`;for(let h=0;h<l;h++){let u=o[h],d=t.results[a]&&t.results[a][h];c+=u?`<div class="tie${u.includes(t.team)?" me":""}">${[0,1].map(f=>`<div class="${d&&d[f]>d[1-f]?"won":""}"><img src="${Ci(Le(u[f]))}" alt=""><span>${Le(u[f]).name}</span><b>${d?d[f]:""}</b></div>`).join("")}</div>`:'<div class="tie tbd"><div><span>To be decided</span></div><div><span>To be decided</span></div></div>'}return c+"</div>"}).join(""),r=t.stage==="done"?`<p class="blurb show">${Le(t.champion).city} ${Le(t.champion).name} won the cup.${t.champion===t.team?" That is you. Well played.":""}</p>`:e?`<p class="blurb show">Next: ${e.home.name} v ${e.away.name}, ${e.label.toLowerCase()}.</p>`:"";return`<div class="panel full"><h2>Knockout Cup<small>${i.city} ${i.name}</small></h2><div class="bracket">${s}</div>${r}<div class="list tight row3">${t.stage!=="done"&&e?Te("cupPlay","Play match","go"):""}${Te("cupNew","Start a new cup")}${Te("back","Back")}</div></div>`}};var ch=26,hh=ch*fi+8,qn=420,Zd=[[500,"normal",sd],[600,"normal",rd],[700,"normal",ad],[800,"normal",od],[800,"italic",ld]],Jd=document.createElement("style");Jd.textContent=Zd.map(([n,t,e])=>`@font-face{font-family:"Barlow Condensed";font-weight:${n};font-style:${t};font-display:block;src:url(${e}) format("woff2")}`).join("")+nd;document.head.appendChild(Jd);document.body.insertAdjacentHTML("beforeend",'<div id="st-app"><div id="st-stage"></div><div id="st-hud" hidden></div><div id="st-menu"></div><div id="st-fade"></div></div>');var ho=n=>document.getElementById(n),F={match:null,cfg:null,attract:!1,paused:!1,intro:0,slowT:0,time:0,buf:new Float32Array(hh),view:new Float32Array(hh),events:[],timers:[],humans:[null,null],userTeam:0,style:"endon",duo:!1,excite:0,kicks:null,kits:null,rec:{frames:[],head:0,count:0},replay:{active:!1}},Oi,$n,je,Pi,Ze,be,de,We,uh,jd,fo,sn,wn,po=[],Sn=new A,uo=new A,Fs=new A,Kd={break:["{n} is through the line!","Open country for {n}!","{n} bursts clear!"],bighit:["Huge hit from {n}!","{n} rattles him!","That one shook the stand!"],try:["{n} scores for the {t}!","Try time! {n} gets it down!","{n} crosses for the {t}!"],intercept:["Picked off by {n}!","{n} reads it and steals it!"],miss:["{n} shrugs off the tackle!","{n} will not go down!","Slips straight through {n}'s fingers... wait, he is still going!"],fend:["What a fend from {n}!","{n} palms him away!"],bomb:["Up goes the bomb!","A towering kick from {n}!"],grubber:["{n} threads a grubber through!","Kick in behind!"],drop:["{n} snaps a shot at field goal..."],fumble:["The ball is loose!","Knocked free!"],fortyTwenty:["A forty-twenty! Brilliant from the boot!"],last:["Last tackle. Decision time.","Fifth and last. What have they got?"],conv:["Straight between the sticks!","He has nailed it!"],convMiss:["Pushed it wide.","That one drifts away."]},ri=(n,t={})=>{F.attract||!Kd[n]||de.comment(La(Kd[n]).replace("{n}",t.n||"").replace("{t}",t.t||""))},_i=n=>n?n.name.split(" ").slice(1).join(" "):"",Xn=(n,t)=>F.timers.push({t:n,fn:t});async function Ev(){try{await Promise.race([Promise.all(Zd.map(([o,l])=>document.fonts.load(`${l} ${o} 40px "Barlow Condensed"`))),new Promise(o=>setTimeout(o,2500))])}catch{}Oi=new Ss,$n=new Ye(50,16/9,.3,2400),je=Rd(ho("st-stage"),Oi,$n),Pi=new Za(Oi,je.renderer),Ze=new eo(Oi),be=new io($n);for(let o=0;o<ch;o++)po.push(new Ja(Oi));uh=new ja(Oi),jd=new Qa(Oi,ch,Pi.mastPos),fo=[16765500,5231103].map(o=>{let l=new Tt(new sr(.72,.92,36),new Ae({color:o,transparent:!0,opacity:.95,depthWrite:!1,side:Oe}));return l.rotation.x=-Math.PI/2,l.visible=!1,l.renderOrder=2,Oi.add(l),l}),sn=new Tt(new sr(.9,1.15,36),new Ae({color:16777215,transparent:!0,opacity:.7,depthWrite:!1,side:Oe})),sn.rotation.x=-Math.PI/2,sn.visible=!1,sn.renderOrder=2,Oi.add(sn);let n=document.createElement("canvas");n.width=256,n.height=32;let t=n.getContext("2d"),e=t.createLinearGradient(0,0,256,0);e.addColorStop(0,"rgba(255,210,60,.95)"),e.addColorStop(1,"rgba(255,210,60,0)"),t.fillStyle=e,t.fillRect(0,10,256,12);let i=new ii(14,.8);i.rotateX(-Math.PI/2),i.translate(7.4,0,0),wn=new Tt(i,new Ae({map:new ni(n),transparent:!0,depthWrite:!1})),wn.visible=!1,wn.renderOrder=2,Oi.add(wn);for(let o=0;o<qn;o++)F.rec.frames.push(new Float32Array(hh));de=new ro(ho("st-hud")),We=new co(ho("st-menu"),mo);let s=()=>{je.resize(),Ze.resize(je.h,$n.fov)};window.addEventListener("resize",s),s(),mo.applySettings("quality"),document.addEventListener("visibilitychange",()=>{document.hidden&&F.match&&!F.attract&&!F.paused&&!We.active&&tf()}),window.addEventListener("pointerdown",()=>Pt.init(),{once:!1}),mh(),We.open("title"),ho("st-fade").classList.add("clear");let r=performance.now(),a=o=>{let l=Math.min(.05,(o-r)/1e3);r=o,ef(l),requestAnimationFrame(a)};requestAnimationFrame(a)}function dh(n){let t=!!n.attract,e=n.userSide||0,i=F.match;F.cfg=n,F.attract=t,F.duo=!!n.duo,F.paused=!1,F.events.length=0,F.timers.length=0,F.replay.active=!1,F.rec.count=0,F.slowT=0,F.kicks=null,F.humans=t?[null,null]:n.duo?[0,1]:e===0?[0,null]:[null,0],F.userTeam=n.duo?0:e,F.style=n.duo?"side":vt.camera,Zt.duo=!!n.duo;let s=_d(n.teams[0],n.teams[1]),r=F.kits=[Cs(n.teams[0],s[0]),Cs(n.teams[1],s[1])],a=r.map(Dd),o=t&&!i?vt.time:vt.time,l=t?"clear":vt.weather,c=F.match=new so({teams:n.teams,humans:F.humans,n:n.n||13,halfSecs:t?150:vt.half*60,diff:t?0:vt.difficulty,rules:n.rules||{},weather:l,emit:(u,d)=>F.events.push([u,d])}),h=Pi.setConditions(o,l);if(je.bloom.strength=h.bloom,Ze.setRain(l==="rain"),F.night=o!=="day",Pi.setTeams(n.teams[0],n.teams[1]),fh(),po.forEach((u,d)=>{let f=c.players[d];u.setVisible(!!f),f&&u.setKit(r[f.t],a[f.t],f)}),de.setTeams(n.teams,r,c.maxT),de.versus(!1),de.replay(!1),We.closeAll(),t){de.show(!1),c.start(),be.set("menu");return}if(Pt.music(!1),de.show(!0),n.rules&&n.rules.kicking){F.kicks={i:0,made:0,log:[],total:10,prev:Ce.get("kickBest",0)},Qd(),be.set("play");return}c.start(),c.snapshot(F.buf),F.intro=4.6,be.set("intro",{dur:4.6,force:!0}),de.cine(!0),Pt.sfx("sting"),Pt.cheer(.9),de.versus(!0,n.teams,n.label||"Quick Match",`${n.teams[0].ground} \xB7 ${o[0].toUpperCase()+o.slice(1)}${l==="rain"?", rain":""}`)}function mh(){let n=Math.random()*ge.length|0,t=(n+1+(Math.random()*(ge.length-1)|0))%ge.length;dh({attract:!0,teams:[ge[n],ge[t]],n:13,rules:{}})}function fh(){let n=F.match,t=F.cfg;Pi.setScreen(t.teams[0],t.teams[1],n.score[0],n.score[1],n.over?"FULL TIME":n.golden?"GOLDEN POINT":t.teams[0].ground.toUpperCase())}function ph(){let n=F.match,t=F.cfg;return{mode:t.mode,label:t.label,teams:t.teams,score:n.score.slice(),stats:n.stats,scorers:n.scorers,userSide:F.userTeam,duo:F.duo,golden:n.golden,kicks:F.kicks}}var Av=[[14,0],[18,9],[22,-13],[21,19],[27,-21],[31,11],[29,26],[35,-25],[39,17],[43,-30]];function Qd(){let n=F.match,t=F.kicks;if(t.i>=t.total)return t.made>t.prev&&Ce.set("kickBest",t.made),We.finish(ph());let[e,i]=Av[t.i],s=.4+t.i*.28,r=j(6.28);n.wind={x:Math.cos(r)*s,z:Math.sin(r)*s},n.waiting=!1,n.setPlaceKick(0,{x:n.dir[0]*(50-e),z:i}),de.banner(`Kick ${t.i+1} of ${t.total}`,`${Math.round(n.conv.dist)} metres out`,{small:!0,dur:2})}function tf(){F.paused||(F.paused=!0,We.open("pause"))}var mo={launch:dh,resume(){F.paused=!1,We.closeAll()},restartMatch(){dh(F.cfg)},quitMatch(){mo.toMenuWorld(),We.reset("main")},continueHalf(){We.closeAll(),be.set("play"),F.match.resume()},toMenuWorld(){de.show(!1),mh(),Pt.music(!0)},fullscreen(){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch{}},applySettings(n){n==="quality"&&(je.setQuality(vt.quality),Pi.setShadowQuality(je.q.shadow),Pi.setCrowd(je.q.crowd),Ze.resize(je.h,$n.fov),Pi.cond&&(je.bloom.strength=Pi.cond.bloom)),n==="camera"&&F.match&&!F.duo&&(F.style=vt.camera),Pt.volumes()}};function Rv(n,t){let e=F.match,i=F.attract,s=F.cfg.teams,r=a=>({color:Vt(F.kits[a].c1),ink:Vt(ze(F.kits[a].c1))});switch(n){case"kickoff":!i&&!F.intro&&de.banner(t.type==="dropout"?"Drop-out":"Kick off","",{small:!0,dur:1.4});break;case"kick":Pt.sfx("kick"),t.type==="bomb"?ri("bomb",{n:_i(t.p)}):t.type==="grubber"?ri("grubber",{n:_i(t.p)}):t.type==="drop"&&ri("drop",{n:_i(t.p)}),t.type==="kickoff"&&Pt.sfx("whistle");break;case"pass":Pt.sfx("pass");break;case"catch":Pt.sfx("catch"),t.how==="intercept"&&(de.banner("Intercept!",_i(t.p),r(t.p.t)),Pt.cheer(1),ri("intercept",{n:_i(t.p)}));break;case"tackle":Pt.sfx(t.big?"bighit":"hit"),Ze.turf(t.car.x,t.car.z,t.big?22:10,t.big?1.5:1),be.shake(t.big?.55:.22),t.big&&(ri("bighit",{n:_i(t.def)}),Pt.cheer(.7),F.excite=Math.max(F.excite,.6),i||(F.slowT=Math.max(F.slowT,.3)));break;case"count":i||(de.banner(t.last?"Last tackle":"Tackle "+t.n,"",Object.assign({small:!0,dur:1.1},t.last?{}:{color:"rgba(10,14,19,.82)",ink:"#fff"})),t.last&&ri("last"));break;case"miss":Pt.sfx("step"),Ze.turf(t.def.x,t.def.z,6),Pt.cheer(.5),t.fended?ri("fend",{n:_i(t.car)}):Math.random()<.5&&ri("miss",{n:_i(t.car)});break;case"break":i||de.banner("Line break",_i(t.p),Object.assign({small:!0},r(t.p.t))),Pt.cheer(.95),F.excite=1,ri("break",{n:_i(t.p)});break;case"fumble":case"spill":Pt.sfx("ooh"),i||de.banner("Loose ball","",{small:!0,dur:1.2}),ri("fumble");break;case"stoppage":Pt.sfx("whistle"),i||de.banner(t.msg,s[t.team].name+" ball",Object.assign({small:!t.big},r(t.team))),t.big&&(Pt.cheer(1),ri("fortyTwenty"));break;case"try":{if(Pt.sfx("whistleLong"),Pt.cheer(1.4),F.excite=1.6,F.slowT=1.1,be.shake(.3),be.set("try",{a0:j(6.28),force:!0}),Ze.turf(t.p.x,t.p.z,20,1.3),Ze.confetti(t.p.x,9,t.p.z,[F.kits[t.p.t].c1,F.kits[t.p.t].c2,16777215],160),F.night)for(let a=0;a<5;a++)Xn(.25*a,()=>{Ze.firework(j(-50,50),j(46,62),j(-1,1)>0?60:-60,La([F.kits[t.p.t].c1,F.kits[t.p.t].c2,16765500])),Pt.sfx("pop")});i||de.banner(t.bonus?"Bonus zone try!":"Try!",`${_i(t.p)} \xB7 ${s[t.p.t].name}`,Object.assign({big:!0,dur:2.8},r(t.p.t))),ri("try",{n:_i(t.p),t:s[t.p.t].name});break}case"convert":be.set("convert",{x:t.spot.x,z:t.spot.z,gx:t.gx,force:!0});break;case"convResult":t.good?(Pt.sfx("good"),Pt.cheer(.9),ri("conv")):(Pt.sfx("bad"),Pt.sfx("ooh"),ri("convMiss")),i||de.banner(t.good?F.kicks?"Good!":"Converted":"No good","",Object.assign({small:!0},t.good?r(t.t):{color:"rgba(10,14,19,.82)",ink:"#fff"})),F.kicks&&(F.kicks.log.push(t.good),t.good&&F.kicks.made++,F.kicks.i++);break;case"fieldGoal":Pt.sfx("good"),Pt.cheer(1.2),F.excite=1.3,i||de.banner(t.pts===2?"Two-point field goal!":"Field goal!",s[t.t].name,Object.assign({big:!0},r(t.t)));break;case"score":fh();break;case"siren":Pt.sfx("siren");break;case"half":Pt.sfx("whistleLong"),be.set("wide",{a0:j(6.28)});break;case"golden":i||de.banner("Golden point","Next score wins",{big:!0,dur:2.6});break;case"full":if(Pt.sfx("whistleLong"),Pt.cheer(1.2),be.set("wide",{a0:j(6.28)}),fh(),i||de.banner("Full time",`${s[0].abbr} ${e.score[0]} \u2013 ${e.score[1]} ${s[1].abbr}`,{big:!0,dur:3}),F.night)for(let a=0;a<8;a++)Xn(.3*a,()=>Ze.firework(j(-55,55),j(46,64),j(-1,1)>0?62:-62,La([16765500,16777215,F.kits[0].c1,F.kits[1].c1])));break;case"step":case"fend":case"dummy":Pt.sfx("step"),Ze.turf(t.p.x,t.p.z,5,.7);break;case"dust":Ze.turf(t.p.x,t.p.z,8,.9);break;case"bounce":Pt.sfx("bounce",At(t.v/10,.3,1)),Ze.turf(e.ball.x,e.ball.z,4,.6);break;case"post":Pt.sfx("post"),Pt.sfx("ooh");break;case"deny":Pt.sfx("bad");break;case"tick":Pt.sfx("tick");break;case"turnover":(t.how==="loose"||t.how==="kick")&&(F.excite=Math.max(F.excite,.4));break;case"hold":t.reason==="try"?i||!vt.replays||F.rec.count<90?e.resume():Cv(5.2):t.reason==="half"?i?Xn(2.5,()=>e.resume()):Xn(2.2,()=>We.open("half",{sum:ph()})):t.reason==="golden"?Xn(2.8,()=>{be.set("play"),e.resume()}):t.reason==="full"?i?Xn(5,()=>{F.attract&&mh()}):Xn(3.4,()=>{Pt.music(!0),We.finish(ph())}):t.reason==="kickNext"&&Qd();break}}function Cv(n){let t=F.rec,e=Math.min(t.count,Math.floor(n*60));F.replay={active:!0,start:(t.head-e+qn)%qn,n:e,pos:0,t:0,angle:Math.random()<.5?0:1,side:Math.random()<.5?1:-1},de.replay(!0),be.set("replay",{angle:F.replay.angle,side:F.replay.side,gx:F.match.dir[F.match.ball.carrier?F.match.ball.carrier.t:0]*50,force:!0})}function Pv(n){let t=F.replay,e=F.rec,i=F.match.players.length;if(t.t+=n,t.pos+=n*60*.5,t.pos>=t.n-2||Zt.any&&t.t>.7){t.active=!1,de.replay(!1),F.match.resume();return}let s=Math.floor(t.pos),r=t.pos-s,a=e.frames[(t.start+s)%qn],o=e.frames[(t.start+s+1)%qn],l=F.view;l.set(a);for(let h=0;h<i;h++){let u=h*fi;l[u]=a[u]+(o[u]-a[u])*r,l[u+1]=a[u+1]+(o[u+1]-a[u+1])*r;let d=o[u+2]-a[u+2];l[u+2]=a[u+2]+Math.atan2(Math.sin(d),Math.cos(d))*r,l[u+4]=a[u+4]+(o[u+4]-a[u+4])*r}let c=i*fi;for(let h=0;h<3;h++)l[c+h]=a[c+h]+(o[c+h]-a[c+h])*r}function ef(n,t=!0){F.time+=n,Zt.update(n),Pt.update(n);let e=F.match,i=0;if(e){if(Zt.pause&&!We.active&&!F.attract&&!F.intro&&performance.now()-We.closedAt>250&&tf(),!F.paused){for(let s=F.timers.length-1;s>=0;s--)if((F.timers[s].t-=n)<=0){let r=F.timers[s].fn;F.timers.splice(s,1),r()}if(F.intro>0)F.intro-=n,(F.intro<=0||Zt.any&&F.intro<3.9)&&(F.intro=0,de.versus(!1),de.cine(!1),be.set("play",{blend:!0}));else if(F.replay.active)Pv(n),i=n*.5;else{F.slowT>0&&(F.slowT-=n),i=n*(F.slowT>0?.32:1);for(let a=0;a<2;a++)e.basis[a]=eh(F.style,e.dir[F.duo?a:F.userTeam]);if(e.phase==="convert"&&e.conv){let a=e.conv;e.basis[a.t]=eh("endon",e.dir[a.t])}let s=[F.humans[0]!==null?Zt.pads[F.humans[0]]:null,F.humans[1]!==null?Zt.pads[F.humans[1]]:null];for(e.update(i,s);F.events.length;){let[a,o]=F.events.shift();Rv(a,o)}if(F.match!==e)return;e.snapshot(F.buf);let r=F.rec;r.frames[r.head].set(F.buf),r.head=(r.head+1)%qn,r.count=Math.min(qn,r.count+1)}}t&&Iv(e,F.paused?0:i||n,n)}t&&(je.grade.uniforms.uSat.value=F.replay.active?.92:1.12,je.grade.uniforms.uVig.value=F.replay.active||We.active?.5:.3,je.render(n))}function Iv(n,t,e){let i=F.replay.active?F.view:F.buf,s=n.players.length,r=s*fi,a=n.ball,o=!F.replay.active;for(let m=0;m<s;m++)po[m].apply(i,m*fi,t,F.time,m*1.7);jd.update(i,s,F.night);let l=i[r+5],c=i[r+6];l===0&&c>=0?(po[c].ballPos(Sn),uh.set(Sn.x,Sn.y,Sn.z,i[r+3],0,0),uo.set(i[c*fi],0,i[c*fi+1])):(uh.set(i[r],l===4?.14:i[r+1],i[r+2],i[r+3],l===4?0:i[r+4],l===4?2:l),uo.set(i[r],i[r+1],i[r+2]));let h=o&&!F.attract&&(n.phase==="play"||n.phase==="ruck"||n.phase==="kickoff");for(let m=0;m<2;m++){let p=n.sel[m],y=fo[F.duo?m:0];if(F.humans[m]===null){F.duo&&(y.visible=!1);continue}y.visible=h&&!!p,p&&(y.position.set(p.x,.05,p.z),y.scale.setScalar(1+Math.sin(F.time*7)*.06))}F.duo||(fo[1].visible=!1),F.attract&&(fo[0].visible=!1),sn.visible=o&&a.mode==="loose"&&a.y>2.2&&n.phase==="play",sn.visible&&(sn.position.set(n.land.x,.05,n.land.z),sn.scale.setScalar(.8+F.time*2%1*.5));let u=n.conv;wn.visible=o&&!!u&&u.human&&u.stage<3,wn.visible&&(wn.position.set(u.spot.x,.06,u.spot.z),wn.rotation.y=-(u.base+u.aim)),o&&a.mode==="loose"&&a.y>1.2&&t>0&&Ze.trail(a.x,a.y,a.z);let d=n.ref?n.dir[n.ref.t]:0,f=n.ref?At((n.ref.x*d-10)/40,0,1):0;F.excite=Math.max(0,F.excite-e*.35),Pt.base=.22+f*.3+(n.broke?.25:0);let g=At(F.excite+f*.25,0,1.6);F.night&&g>.45&&Math.random()<g*.5&&(Pi.randomSeat(Sn),Ze.flash(Sn.x,Sn.y,Sn.z)),Pi.update(e,F.time,g,uo),Ze.update(t,F.time,$n),o&&!F.intro&&(We.active&&F.attract?be.set("menu"):n.phase==="try"||(n.phase==="convert"?be.mode!=="convert"&&u&&be.set("convert",{x:u.spot.x,z:u.spot.z,gx:u.gx}):n.phase==="half"||n.phase==="full"?be.mode!=="wide"&&be.set("wide"):be.mode!=="play"&&!F.attract?be.set("play",{blend:be.mode==="intro"}):F.attract&&!We.active&&be.set("menu")));let x=F.userTeam;if(be.update(e,{focus:uo,style:F.style,d:n.dir[x],defending:!F.duo&&n.poss!==x,ballY:i[r+1],ballFlying:!!u&&u.flying}),!F.attract){let m=[1,0];if(u){let p=Math.cos(u.base),y=Math.sin(u.base);m=[n.wind.x*-y+n.wind.z*p,-(n.wind.x*p+n.wind.z*y)]}de.update(e,{match:n,humans:F.humans,duo:F.duo,replay:F.replay.active,intro:F.intro,quiet:F.intro>0||n.phase==="half"||n.phase==="full",windScreen:m,project:Lv})}}function Lv(n,t,e){return Fs.set(n,t,e).project($n),[(Fs.x*.5+.5)*je.w,(-Fs.y*.5+.5)*je.h,Fs.z<1&&Math.abs(Fs.x)<1.05&&Math.abs(Fs.y)<1.05]}window.__st={G:F,app:mo,settings:vt,TEAMS:ge,input:Zt,fast(n,t=1/60,e=!1){for(let i=0;i<n;i++)ef(t,e)},get menus(){return We},get director(){return be}};Ev();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
