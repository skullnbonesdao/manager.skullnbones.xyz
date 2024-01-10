import{P as J,V as W}from"./solana-wallets-vue.e6bb8111.js";import{d as Q}from"./index.ca3a514a.js";import{S as X,a as Y,b as Z}from"./wallet.23930225.js";import"./_commonjsHelpers.2cf1d77b.js";/* empty css                       */var q={exports:{}};(function(i){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function r(v,c,s){this.fn=v,this.context=c,this.once=s||!1}function o(v,c,s,l,y){if(typeof s!="function")throw new TypeError("The listener must be a function");var h=new r(s,l||v,y),u=e?e+c:c;return v._events[u]?v._events[u].fn?v._events[u]=[v._events[u],h]:v._events[u].push(h):(v._events[u]=h,v._eventsCount++),v}function d(v,c){--v._eventsCount===0?v._events=new n:delete v._events[c]}function m(){this._events=new n,this._eventsCount=0}m.prototype.eventNames=function(){var c=[],s,l;if(this._eventsCount===0)return c;for(l in s=this._events)t.call(s,l)&&c.push(e?l.slice(1):l);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(s)):c},m.prototype.listeners=function(c){var s=e?e+c:c,l=this._events[s];if(!l)return[];if(l.fn)return[l.fn];for(var y=0,h=l.length,u=new Array(h);y<h;y++)u[y]=l[y].fn;return u},m.prototype.listenerCount=function(c){var s=e?e+c:c,l=this._events[s];return l?l.fn?1:l.length:0},m.prototype.emit=function(c,s,l,y,h,u){var g=e?e+c:c;if(!this._events[g])return!1;var a=this._events[g],_=arguments.length,p,f;if(a.fn){switch(a.once&&this.removeListener(c,a.fn,void 0,!0),_){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,s),!0;case 3:return a.fn.call(a.context,s,l),!0;case 4:return a.fn.call(a.context,s,l,y),!0;case 5:return a.fn.call(a.context,s,l,y,h),!0;case 6:return a.fn.call(a.context,s,l,y,h,u),!0}for(f=1,p=new Array(_-1);f<_;f++)p[f-1]=arguments[f];a.fn.apply(a.context,p)}else{var A=a.length,b;for(f=0;f<A;f++)switch(a[f].once&&this.removeListener(c,a[f].fn,void 0,!0),_){case 1:a[f].fn.call(a[f].context);break;case 2:a[f].fn.call(a[f].context,s);break;case 3:a[f].fn.call(a[f].context,s,l);break;case 4:a[f].fn.call(a[f].context,s,l,y);break;default:if(!p)for(b=1,p=new Array(_-1);b<_;b++)p[b-1]=arguments[b];a[f].fn.apply(a[f].context,p)}}return!0},m.prototype.on=function(c,s,l){return o(this,c,s,l,!1)},m.prototype.once=function(c,s,l){return o(this,c,s,l,!0)},m.prototype.removeListener=function(c,s,l,y){var h=e?e+c:c;if(!this._events[h])return this;if(!s)return d(this,h),this;var u=this._events[h];if(u.fn)u.fn===s&&(!y||u.once)&&(!l||u.context===l)&&d(this,h);else{for(var g=0,a=[],_=u.length;g<_;g++)(u[g].fn!==s||y&&!u[g].once||l&&u[g].context!==l)&&a.push(u[g]);a.length?this._events[h]=a.length===1?a[0]:a:d(this,h)}return this},m.prototype.removeAllListeners=function(c){var s;return c?(s=e?e+c:c,this._events[s]&&d(this,s)):(this._events=new n,this._eventsCount=0),this},m.prototype.off=m.prototype.removeListener,m.prototype.addListener=m.prototype.on,m.prefixed=e,m.EventEmitter=m,i.exports=m})(q);var ee=q.exports;function te(i){if(i.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),e=0;e<t.length;e++)t[e]=255;for(var n=0;n<i.length;n++){var r=i.charAt(n),o=r.charCodeAt(0);if(t[o]!==255)throw new TypeError(r+" is ambiguous");t[o]=n}var d=i.length,m=i.charAt(0),v=Math.log(d)/Math.log(256),c=Math.log(256)/Math.log(d);function s(h){if(h instanceof Uint8Array||(ArrayBuffer.isView(h)?h=new Uint8Array(h.buffer,h.byteOffset,h.byteLength):Array.isArray(h)&&(h=Uint8Array.from(h))),!(h instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(h.length===0)return"";for(var u=0,g=0,a=0,_=h.length;a!==_&&h[a]===0;)a++,u++;for(var p=(_-a)*c+1>>>0,f=new Uint8Array(p);a!==_;){for(var A=h[a],b=0,E=p-1;(A!==0||b<g)&&E!==-1;E--,b++)A+=256*f[E]>>>0,f[E]=A%d>>>0,A=A/d>>>0;if(A!==0)throw new Error("Non-zero carry");g=b,a++}for(var M=p-g;M!==p&&f[M]===0;)M++;for(var I=m.repeat(u);M<p;++M)I+=i.charAt(f[M]);return I}function l(h){if(typeof h!="string")throw new TypeError("Expected String");if(h.length===0)return new Uint8Array;for(var u=0,g=0,a=0;h[u]===m;)g++,u++;for(var _=(h.length-u)*v+1>>>0,p=new Uint8Array(_);h[u];){var f=t[h.charCodeAt(u)];if(f===255)return;for(var A=0,b=_-1;(f!==0||A<a)&&b!==-1;b--,A++)f+=d*p[b]>>>0,p[b]=f%256>>>0,f=f/256>>>0;if(f!==0)throw new Error("Non-zero carry");a=A,u++}for(var E=_-a;E!==_&&p[E]===0;)E++;for(var M=new Uint8Array(g+(_-E)),I=g;E!==_;)M[I++]=p[E++];return M}function y(h){var u=l(h);if(u)return u;throw new Error("Non-base"+d+" character")}return{encode:s,decodeUnsafe:l,decode:y}}var ne=te;const ie=ne,re="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";var x=ie(re);let z;const se=new Uint8Array(16);function oe(){if(!z&&(z=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!z))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return z(se)}const w=[];for(let i=0;i<256;++i)w.push((i+256).toString(16).slice(1));function ae(i,t=0){return w[i[t+0]]+w[i[t+1]]+w[i[t+2]]+w[i[t+3]]+"-"+w[i[t+4]]+w[i[t+5]]+"-"+w[i[t+6]]+w[i[t+7]]+"-"+w[i[t+8]]+w[i[t+9]]+"-"+w[i[t+10]]+w[i[t+11]]+w[i[t+12]]+w[i[t+13]]+w[i[t+14]]+w[i[t+15]]}const ce=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var D={randomUUID:ce};function le(i,t,e){if(D.randomUUID&&!t&&!i)return D.randomUUID();i=i||{};const n=i.random||(i.rng||oe)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){e=e||0;for(let r=0;r<16;++r)t[e+r]=n[r];return t}return ae(n)}function j(i){return i.version===void 0}function de(i){return j(i)?i.serialize({verifySignatures:!1,requireAllSignatures:!1}):i.serialize()}function $(i){return j(i)?i.serializeMessage():i.message.serialize()}function V(i,t,e){if(j(i))i.addSignature(t,Q.Buffer.from(e));else{const r=i.message.staticAccountKeys.slice(0,i.message.header.numRequiredSignatures).findIndex(o=>o.equals(t));r>=0&&(i.signatures[r]=e)}}var B=globalThis&&globalThis.__awaiter||function(i,t,e,n){function r(o){return o instanceof e?o:new e(function(d){d(o)})}return new(e||(e=Promise))(function(o,d){function m(s){try{c(n.next(s))}catch(l){d(l)}}function v(s){try{c(n.throw(s))}catch(l){d(l)}}function c(s){s.done?o(s.value):r(s.value).then(m,v)}c((n=n.apply(i,t||[])).next())})};function H(i){return B(this,void 0,void 0,function*(){try{return yield i.request({method:"wallet_getSnaps"}),!0}catch{return!1}})}function he(){return B(this,void 0,void 0,function*(){try{const i=window.ethereum;if(!i)return null;if(i.providers&&Array.isArray(i.providers)){const t=i.providers;for(const e of t)if(yield H(e))return e}if(i.detected&&Array.isArray(i.detected)){const t=i.detected;for(const e of t)if(yield H(e))return e}return(yield H(i))?i:null}catch(i){return console.error(i),null}})}const ue="solana:mainnet",fe="solana:devnet",ve="solana:testnet",me="solana:localnet",G=[ue,fe,ve,me];function P(i){return G.includes(i)}var T=globalThis&&globalThis.__classPrivateFieldGet||function(i,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!n:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(i):n?n.value:t.get(i)},C=globalThis&&globalThis.__classPrivateFieldSet||function(i,t,e,n,r){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?i!==t||!r:!t.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?r.call(i,e):r?r.value=e:t.set(i,e),e},U,K,O,k,N,L;const _e=G,pe=[X,Y,Z];class F{get address(){return T(this,U,"f")}get publicKey(){return T(this,K,"f").slice()}get chains(){return T(this,O,"f").slice()}get features(){return T(this,k,"f").slice()}get label(){return T(this,N,"f")}get icon(){return T(this,L,"f")}constructor({address:t,publicKey:e,label:n,icon:r}){U.set(this,void 0),K.set(this,void 0),O.set(this,void 0),k.set(this,void 0),N.set(this,void 0),L.set(this,void 0),new.target===F&&Object.freeze(this),C(this,U,t,"f"),C(this,K,e,"f"),C(this,O,_e,"f"),C(this,k,pe,"f"),C(this,N,n,"f"),C(this,L,r,"f")}}U=new WeakMap,K=new WeakMap,O=new WeakMap,k=new WeakMap,N=new WeakMap,L=new WeakMap;var S=globalThis&&globalThis.__awaiter||function(i,t,e,n){function r(o){return o instanceof e?o:new e(function(d){d(o)})}return new(e||(e=Promise))(function(o,d){function m(s){try{c(n.next(s))}catch(l){d(l)}}function v(s){try{c(n.throw(s))}catch(l){d(l)}}function c(s){s.done?o(s.value):r(s.value).then(m,v)}c((n=n.apply(i,t||[])).next())})};class R extends ee{constructor(t){super(),this._network="mainnet-beta",this._iframeParams={},this._element=null,this._iframe=null,this._publicKey=null,this._account=null,this._isConnected=!1,this._connectHandler=null,this._messageHandlers={},this._handleEvent=e=>{var n,r;switch(e.type){case"connect":{this._collapseIframe(),!((n=e.data)===null||n===void 0)&&n.publicKey?(this._publicKey=e.data.publicKey,this._isConnected=!0,this._connectHandler&&(this._connectHandler.resolve(),this._connectHandler=null),this._connected()):(this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected());return}case"disconnect":{this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected();return}case"accountChanged":{!((r=e.data)===null||r===void 0)&&r.publicKey?(this._publicKey=e.data.publicKey,this.emit("accountChanged",this.publicKey),this._standardConnected()):(this.emit("accountChanged",void 0),this._standardDisconnected());return}default:return}},this._handleResize=e=>{e.resizeMode==="full"?e.params.mode==="fullscreen"?this._expandIframe():e.params.mode==="hide"&&this._collapseIframe():e.resizeMode==="coordinates"&&this._resizeIframe(e.params)},this._handleMessage=e=>{var n;if(((n=e.data)===null||n===void 0?void 0:n.channel)!=="solflareIframeToWalletAdapter")return;const r=e.data.data||{};if(r.type==="event")this._handleEvent(r.event);else if(r.type==="resize")this._handleResize(r);else if(r.type==="response"&&this._messageHandlers[r.id]){const{resolve:o,reject:d}=this._messageHandlers[r.id];delete this._messageHandlers[r.id],r.error?d(r.error):o(r.result)}},this._removeElement=()=>{this._element&&(this._element.remove(),this._element=null)},this._removeDanglingElements=()=>{const e=document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe");for(const n of e)n.parentElement&&n.remove()},this._injectElement=()=>{this._removeElement(),this._removeDanglingElements();const e=Object.assign(Object.assign({},this._iframeParams),{mm:!0,v:1,cluster:this._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||""}),n=Object.keys(e).map(o=>`${o}=${encodeURIComponent(e[o])}`).join("&"),r=`${R.IFRAME_URL}?${n}`;this._element=document.createElement("div"),this._element.className="solflare-metamask-wallet-adapter-iframe",this._element.innerHTML=`
      <iframe src='${r}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `,document.body.appendChild(this._element),this._iframe=this._element.querySelector("iframe"),window.addEventListener("message",this._handleMessage,!1)},this._collapseIframe=()=>{this._iframe&&(this._iframe.style.top="",this._iframe.style.right="",this._iframe.style.height="2px",this._iframe.style.width="2px")},this._expandIframe=()=>{this._iframe&&(this._iframe.style.top="0px",this._iframe.style.bottom="0px",this._iframe.style.left="0px",this._iframe.style.right="0px",this._iframe.style.width="100%",this._iframe.style.height="100%")},this._resizeIframe=e=>{!this._iframe||(this._iframe.style.top=isFinite(e.top)?`${e.top}px`:"",this._iframe.style.bottom=isFinite(e.bottom)?`${e.bottom}px`:"",this._iframe.style.left=isFinite(e.left)?`${e.left}px`:"",this._iframe.style.right=isFinite(e.right)?`${e.right}px`:"",this._iframe.style.width=isFinite(e.width)?`${e.width}px`:e.width,this._iframe.style.height=isFinite(e.height)?`${e.height}px`:e.height)},this._sendIframeMessage=e=>{if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");return new Promise((n,r)=>{var o,d;const m=le();this._messageHandlers[m]={resolve:n,reject:r},(d=(o=this._iframe)===null||o===void 0?void 0:o.contentWindow)===null||d===void 0||d.postMessage({channel:"solflareWalletAdapterToIframe",data:Object.assign({id:m},e)},"*")})},this._connected=()=>{this._isConnected=!0,this.emit("connect",this.publicKey),this._standardConnected()},this._disconnected=()=>{this._publicKey=null,this._isConnected=!1,window.removeEventListener("message",this._handleMessage,!1),this._removeElement(),this.emit("disconnect"),this._standardDisconnected()},this._standardConnected=()=>{if(!this.publicKey)return;const e=this.publicKey.toString();(!this._account||this._account.address!==e)&&(this._account=new F({address:e,publicKey:this.publicKey.toBytes()}),this.emit("standard_change",{accounts:this.standardAccounts}))},this._standardDisconnected=()=>{this._account&&(this._account=null,this.emit("standard_change",{accounts:this.standardAccounts}))},t!=null&&t.network&&(this._network=t==null?void 0:t.network),window.SolflareMetaMaskParams&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),window.SolflareMetaMaskParams)),t!=null&&t.params&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),t==null?void 0:t.params))}get publicKey(){return this._publicKey?new J(this._publicKey):null}get standardAccount(){return this._account}get standardAccounts(){return this._account?[this._account]:[]}get isConnected(){return this._isConnected}get connected(){return this.isConnected}get autoApprove(){return!1}connect(){return S(this,void 0,void 0,function*(){this.connected||(this._injectElement(),yield new Promise((t,e)=>{this._connectHandler={resolve:t,reject:e}}))})}disconnect(){return S(this,void 0,void 0,function*(){yield this._sendIframeMessage({method:"disconnect"}),this._disconnected()})}signTransaction(t){var e;return S(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const n=$(t),{signature:r}=yield this._sendIframeMessage({method:"signTransaction",params:{message:x.encode(n)}});return V(t,this.publicKey,x.decode(r)),t}catch(n){throw new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transaction")}})}signAllTransactions(t){var e;return S(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const n=t.map(o=>$(o)),{signatures:r}=yield this._sendIframeMessage({method:"signAllTransactions",params:{messages:n.map(o=>x.encode(o))}});for(let o=0;o<t.length;o++)V(t[o],this.publicKey,x.decode(r[o]));return t}catch(n){throw new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transactions")}})}signAndSendTransaction(t,e){var n;return S(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const r=de(t),{signature:o}=yield this._sendIframeMessage({method:"signAndSendTransaction",params:{transaction:x.encode(r),options:e}});return o}catch(r){throw new Error(((n=r==null?void 0:r.toString)===null||n===void 0?void 0:n.call(r))||"Failed to sign and send transaction")}})}signMessage(t,e="utf8"){var n;return S(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const{signature:r}=yield this._sendIframeMessage({method:"signMessage",params:{data:x.encode(t),display:e}});return Uint8Array.from(x.decode(r))}catch(r){throw new Error(((n=r==null?void 0:r.toString)===null||n===void 0?void 0:n.call(r))||"Failed to sign message")}})}sign(t,e="utf8"){return S(this,void 0,void 0,function*(){return yield this.signMessage(t,e)})}static isSupported(){return S(this,void 0,void 0,function*(){return!!(yield he())})}standardSignAndSendTransaction(...t){return S(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(t.length===1){const{transaction:n,account:r,chain:o,options:d}=t[0],{minContextSlot:m,preflightCommitment:v,skipPreflight:c,maxRetries:s}=d||{};if(r!==this._account)throw new Error("invalid account");if(!P(o))throw new Error("invalid chain");const l=yield this.signAndSendTransaction(W.deserialize(n),{preflightCommitment:v,minContextSlot:m,maxRetries:s,skipPreflight:c});e.push({signature:x.decode(l)})}else if(t.length>1)for(const n of t)e.push(...yield this.standardSignAndSendTransaction(n));return e})}standardSignTransaction(...t){return S(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(t.length===1){const{transaction:n,account:r,chain:o}=t[0];if(r!==this._account)throw new Error("invalid account");if(o&&!P(o))throw new Error("invalid chain");const d=yield this.signTransaction(W.deserialize(n));e.push({signedTransaction:d.serialize()})}else if(t.length>1){let n;for(const d of t){if(d.account!==this._account)throw new Error("invalid account");if(d.chain){if(!P(d.chain))throw new Error("invalid chain");if(n){if(d.chain!==n)throw new Error("conflicting chain")}else n=d.chain}}const r=t.map(({transaction:d})=>W.deserialize(d)),o=yield this.signAllTransactions(r);e.push(...o.map(d=>({signedTransaction:d.serialize()})))}return e})}standardSignMessage(...t){return S(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(t.length===1){const{message:n,account:r}=t[0];if(r!==this._account)throw new Error("invalid account");const o=yield this.signMessage(n);e.push({signedMessage:n,signature:o})}else if(t.length>1)for(const n of t)e.push(...yield this.standardSignMessage(n));return e})}}R.IFRAME_URL="https://widget.solflare.com/";export{F as StandardSolflareMetaMaskWalletAccount,R as default};
