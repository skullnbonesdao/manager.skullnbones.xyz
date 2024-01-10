import{B as E,W as o,a as f,P as L,b as I,i as g,s as p,c as k,d as y,e as v,f as C,g as j,h as Y,j as b,k as _,l as w,m as U,n as G,o as B,p as H}from"./solana-wallets-vue.e6bb8111.js";/* empty css                       */import{_ as Q,b as R}from"./index.ca3a514a.js";const V="solana:signAndSendTransaction",F="solana:signMessage",J="solana:signTransaction",K="standard:connect",X="standard:disconnect",$="standard:events",q="Phantom";class tt extends E{constructor(e={}){super(),this.name=q,this.url="https://phantom.app",this.icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg==",this.supportedTransactionVersions=new Set(["legacy",0]),this._readyState=typeof window>"u"||typeof document>"u"?o.Unsupported:o.NotDetected,this._disconnected=()=>{const t=this._wallet;t&&(t.off("disconnect",this._disconnected),t.off("accountChanged",this._accountChanged),this._wallet=null,this._publicKey=null,this.emit("error",new f),this.emit("disconnect"))},this._accountChanged=t=>{const M=this._publicKey;if(!!M){try{t=new L(t.toBytes())}catch(a){this.emit("error",new I(a==null?void 0:a.message,a));return}M.equals(t)||(this._publicKey=t,this.emit("connect",t))}},this._connecting=!1,this._wallet=null,this._publicKey=null,this._readyState!==o.Unsupported&&(g()?(this._readyState=o.Loadable,this.emit("readyStateChange",this._readyState)):p(()=>{var t,M,a;return((M=(t=window.phantom)==null?void 0:t.solana)==null?void 0:M.isPhantom)||((a=window.solana)==null?void 0:a.isPhantom)?(this._readyState=o.Installed,this.emit("readyStateChange",this._readyState),!0):!1}))}get publicKey(){return this._publicKey}get connecting(){return this._connecting}get readyState(){return this._readyState}async autoConnect(){this.readyState===o.Installed&&await this.connect()}async connect(){var e;try{if(this.connected||this.connecting)return;if(this.readyState===o.Loadable){const a=encodeURIComponent(window.location.href),i=encodeURIComponent(window.location.origin);window.location.href=`https://phantom.app/ul/browse/${a}?ref=${i}`;return}if(this.readyState!==o.Installed)throw new k;this._connecting=!0;const t=((e=window.phantom)==null?void 0:e.solana)||window.solana;if(!t.isConnected)try{await t.connect()}catch(a){throw new y(a==null?void 0:a.message,a)}if(!t.publicKey)throw new v;let M;try{M=new L(t.publicKey.toBytes())}catch(a){throw new I(a==null?void 0:a.message,a)}t.on("disconnect",this._disconnected),t.on("accountChanged",this._accountChanged),this._wallet=t,this._publicKey=M,this.emit("connect",M)}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}async disconnect(){const e=this._wallet;if(e){e.off("disconnect",this._disconnected),e.off("accountChanged",this._accountChanged),this._wallet=null,this._publicKey=null;try{await e.disconnect()}catch(t){this.emit("error",new C(t==null?void 0:t.message,t))}}this.emit("disconnect")}async sendTransaction(e,t,M={}){try{const a=this._wallet;if(!a)throw new j;try{const{signers:i,...r}=M;Y(e)?i!=null&&i.length&&e.sign(i):(e=await this.prepareTransaction(e,t,r),i!=null&&i.length&&e.partialSign(...i)),r.preflightCommitment=r.preflightCommitment||t.commitment;const{signature:P}=await a.signAndSendTransaction(e,r);return P}catch(i){throw i instanceof b?i:new _(i==null?void 0:i.message,i)}}catch(a){throw this.emit("error",a),a}}async signTransaction(e){try{const t=this._wallet;if(!t)throw new j;try{return await t.signTransaction(e)||e}catch(M){throw new w(M==null?void 0:M.message,M)}}catch(t){throw this.emit("error",t),t}}async signAllTransactions(e){try{const t=this._wallet;if(!t)throw new j;try{return await t.signAllTransactions(e)||e}catch(M){throw new w(M==null?void 0:M.message,M)}}catch(t){throw this.emit("error",t),t}}async signMessage(e){try{const t=this._wallet;if(!t)throw new j;try{const{signature:M}=await t.signMessage(e);return M}catch(M){throw new U(M==null?void 0:M.message,M)}}catch(t){throw this.emit("error",t),t}}}var et=globalThis&&globalThis.__classPrivateFieldSet||function(n,e,t,M,a){if(M==="m")throw new TypeError("Private method is not writable");if(M==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!a:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return M==="a"?a.call(n,t):a?a.value=t:e.set(n,t),t},Mt=globalThis&&globalThis.__classPrivateFieldGet||function(n,e,t,M){if(t==="a"&&!M)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!M:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?M:t==="a"?M.call(n):M?M.value:e.get(n)},l;function at(n){const e=({register:t})=>t(n);try{window.dispatchEvent(new it(e))}catch(t){console.error(`wallet-standard:register-wallet event could not be dispatched
`,t)}try{window.addEventListener("wallet-standard:app-ready",({detail:t})=>e(t))}catch(t){console.error(`wallet-standard:app-ready event listener could not be added
`,t)}}class it extends Event{constructor(e){super("wallet-standard:register-wallet",{bubbles:!1,cancelable:!1,composed:!1}),l.set(this,void 0),et(this,l,e,"f")}get detail(){return Mt(this,l,"f")}get type(){return"wallet-standard:register-wallet"}preventDefault(){throw new Error("preventDefault cannot be called")}stopImmediatePropagation(){throw new Error("stopImmediatePropagation cannot be called")}stopPropagation(){throw new Error("stopPropagation cannot be called")}}l=new WeakMap;const nt="solana:mainnet",st="solana:devnet",ct="solana:testnet",ot="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzEgMzEiIHdpZHRoPSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwLjI1IiB4Mj0iMjYuNTcxIiB5MT0iMjcuMTczIiB5Mj0iMTkuODU4Ij48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iIzk5NDVmZiIvPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM4NzUyZjMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNTQ5N2Q1Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iIzQzYjRjYSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjMjhlMGI5Ii8+PHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMxOWZiOWIiLz48L2xpbmVhckdyYWRpZW50PjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjA5NCI+PHBhdGggZD0ibTI2LjEwOSAzLjY0My05LjM2OSA2Ljk1OSAxLjczMy00LjEwNSA3LjYzNy0yLjg1M3oiIGZpbGw9IiNlMjc2MWIiIHN0cm9rZT0iI2UyNzYxYiIvPjxnIGZpbGw9IiNlNDc2MWIiIHN0cm9rZT0iI2U0NzYxYiI+PHBhdGggZD0ibTQuNDgxIDMuNjQzIDkuMjk0IDcuMDI0LTEuNjQ4LTQuMTcxem0xOC4yNTggMTYuMTMtMi40OTUgMy44MjMgNS4zMzkgMS40NjkgMS41MzUtNS4yMDctNC4zNzgtLjA4NXptLTE5LjI0Ny4wODUgMS41MjUgNS4yMDcgNS4zMzktMS40NjktMi40OTUtMy44MjN6Ii8+PHBhdGggZD0ibTEwLjA1NSAxMy4zMTMtMS40ODggMi4yNTEgNS4zMDEuMjM1LS4xODgtNS42OTd6bTEwLjQ4IDAtMy42NzItMy4yNzctLjEyMiA1Ljc2MyA1LjI5Mi0uMjM1LTEuNDk3LTIuMjUxem0tMTAuMTc4IDEwLjI4MyAzLjE4My0xLjU1NC0yLjc0OS0yLjE0Ny0uNDMzIDMuNzAxem02LjY5NS0xLjU1NCAzLjE5MiAxLjU1NC0uNDQzLTMuNzAxeiIvPjwvZz48cGF0aCBkPSJtMjAuMjQ0IDIzLjU5Ni0zLjE5Mi0xLjU1NC4yNTQgMi4wODEtLjAyOC44NzZ6bS05Ljg4NyAwIDIuOTY2IDEuNDAzLS4wMTktLjg3Ni4yMzUtMi4wODEtMy4xODMgMS41NTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTMuMzY5IDE4LjUyMS0yLjY1NS0uNzgxIDEuODc0LS44NTd6bTMuODUxIDAgLjc4MS0xLjYzOCAxLjg4My44NTctMi42NjUuNzgxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTEwLjM1NyAyMy41OTYuNDUyLTMuODIzLTIuOTQ3LjA4NXptOS40MzUtMy44MjMuNDUyIDMuODIzIDIuNDk1LTMuNzM4em0yLjI0MS00LjIwOS01LjI5Mi4yMzUuNDkgMi43MjEuNzgyLTEuNjM4IDEuODgzLjg1N3ptLTExLjMxOCAyLjE3NSAxLjg4My0uODU3Ljc3MiAxLjYzOC40OTktMi43MjEtNS4zMDEtLjIzNXoiIGZpbGw9IiNjZDYxMTYiIHN0cm9rZT0iI2NkNjExNiIvPjxwYXRoIGQ9Im04LjU2NyAxNS41NjQgMi4yMjIgNC4zMzEtLjA3NS0yLjE1NnptMTEuMzI4IDIuMTc1LS4wOTQgMi4xNTYgMi4yMzItNC4zMzEtMi4xMzcgMi4xNzV6bS02LjAyNi0xLjk0LS40OTkgMi43MjEuNjIxIDMuMjExLjE0MS00LjIyOC0uMjY0LTEuNzA0em0yLjg3MiAwLS4yNTQgMS42OTUuMTEzIDQuMjM3LjYzMS0zLjIxMXoiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNy4yMyAxOC41Mi0uNjMxIDMuMjExLjQ1Mi4zMTEgMi43NS0yLjE0Ny4wOTQtMi4xNTZ6bS02LjUxNi0uNzgxLjA3NSAyLjE1NiAyLjc1IDIuMTQ3LjQ1Mi0uMzExLS42MjItMy4yMTF6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtMTcuMjc3IDI0Ljk5OS4wMjgtLjg3Ni0uMjM1LS4yMDdoLTMuNTVsLS4yMTcuMjA3LjAxOS44NzYtMi45NjYtMS40MDMgMS4wMzYuODQ4IDIuMSAxLjQ1OWgzLjYwNmwyLjEwOS0xLjQ1OSAxLjAzNi0uODQ4eiIgZmlsbD0iI2MwYWQ5ZSIgc3Ryb2tlPSIjYzBhZDllIi8+PHBhdGggZD0ibTE3LjA1MSAyMi4wNDItLjQ1Mi0uMzExaC0yLjYwOGwtLjQ1Mi4zMTEtLjIzNSAyLjA4MS4yMTctLjIwN2gzLjU1bC4yMzUuMjA3LS4yNTQtMi4wODF6IiBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiLz48cGF0aCBkPSJtMjYuNTA1IDExLjA1My44LTMuODQyLTEuMTk2LTMuNTY5LTkuMDU4IDYuNzIzIDMuNDg0IDIuOTQ3IDQuOTI1IDEuNDQxIDEuMDkyLTEuMjcxLS40NzEtLjMzOS43NTMtLjY4Ny0uNTg0LS40NTIuNzUzLS41NzQtLjQ5OS0uMzc3em0tMjMuMjExLTMuODQxLjggMy44NDItLjUwOC4zNzcuNzUzLjU3NC0uNTc0LjQ1Mi43NTMuNjg3LS40NzEuMzM5IDEuMDgzIDEuMjcxIDQuOTI1LTEuNDQxIDMuNDg0LTIuOTQ3LTkuMDU5LTYuNzIzeiIgZmlsbD0iIzc2M2QxNiIgc3Ryb2tlPSIjNzYzZDE2Ii8+PHBhdGggZD0ibTI1LjQ2IDE0Ljc1NC00LjkyNS0xLjQ0MSAxLjQ5NyAyLjI1MS0yLjIzMiA0LjMzMSAyLjkzOC0uMDM4aDQuMzc4bC0xLjY1Ny01LjEwNHptLTE1LjQwNS0xLjQ0MS00LjkyNSAxLjQ0MS0xLjYzOCA1LjEwNGg0LjM2OWwyLjkyOC4wMzgtMi4yMjItNC4zMzEgMS40ODgtMi4yNTF6bTYuNjg1IDIuNDg2LjMxMS01LjQzMyAxLjQzMS0zLjg3aC02LjM1NmwxLjQxMyAzLjg3LjMyOSA1LjQzMy4xMTMgMS43MTQuMDA5IDQuMjE5aDIuNjFsLjAxOS00LjIxOS4xMjItMS43MTR6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48L2c+PGNpcmNsZSBjeD0iMjMuNSIgY3k9IjIzLjUiIGZpbGw9IiMwMDAiIHI9IjYuNSIvPjxwYXRoIGQ9Im0yNy40NzMgMjUuNTQ1LTEuMzEgMS4zNjhjLS4wMjkuMDMtLjA2My4wNTMtLjEwMS4wN2EuMzEuMzEgMCAwIDEgLS4xMjEuMDI0aC02LjIwOWMtLjAzIDAtLjA1OS0uMDA4LS4wODMtLjAyNGEuMTUuMTUgMCAwIDEgLS4wNTYtLjA2NWMtLjAxMi0uMDI2LS4wMTUtLjA1Ni0uMDEtLjA4NHMuMDE4LS4wNTUuMDM5LS4wNzZsMS4zMTEtMS4zNjhjLjAyOC0uMDMuMDYzLS4wNTMuMTAxLS4wNjlhLjMxLjMxIDAgMCAxIC4xMjEtLjAyNWg2LjIwOGMuMDMgMCAuMDU5LjAwOC4wODMuMDI0YS4xNS4xNSAwIDAgMSAuMDU2LjA2NWMuMDEyLjAyNi4wMTUuMDU2LjAxLjA4NHMtLjAxOC4wNTUtLjAzOS4wNzZ6bS0xLjMxLTIuNzU2Yy0uMDI5LS4wMy0uMDYzLS4wNTMtLjEwMS0uMDdhLjMxLjMxIDAgMCAwIC0uMTIxLS4wMjRoLTYuMjA5Yy0uMDMgMC0uMDU5LjAwOC0uMDgzLjAyNHMtLjA0NC4wMzgtLjA1Ni4wNjUtLjAxNS4wNTYtLjAxLjA4NC4wMTguMDU1LjAzOS4wNzZsMS4zMTEgMS4zNjhjLjAyOC4wMy4wNjMuMDUzLjEwMS4wNjlhLjMxLjMxIDAgMCAwIC4xMjEuMDI1aDYuMjA4Yy4wMyAwIC4wNTktLjAwOC4wODMtLjAyNGEuMTUuMTUgMCAwIDAgLjA1Ni0uMDY1Yy4wMTItLjAyNi4wMTUtLjA1Ni4wMS0uMDg0cy0uMDE4LS4wNTUtLjAzOS0uMDc2em0tNi40MzEtLjk4M2g2LjIwOWEuMzEuMzEgMCAwIDAgLjEyMS0uMDI0Yy4wMzgtLjAxNi4wNzMtLjA0LjEwMS0uMDdsMS4zMS0xLjM2OGMuMDItLjAyMS4wMzQtLjA0Ny4wMzktLjA3NnMuMDAxLS4wNTgtLjAxLS4wODRhLjE1LjE1IDAgMCAwIC0uMDU2LS4wNjVjLS4wMjUtLjAxNi0uMDU0LS4wMjQtLjA4My0uMDI0aC02LjIwOGEuMzEuMzEgMCAwIDAgLS4xMjEuMDI1Yy0uMDM4LjAxNi0uMDcyLjA0LS4xMDEuMDY5bC0xLjMxIDEuMzY4Yy0uMDIuMDIxLS4wMzQuMDQ3LS4wMzkuMDc2cy0uMDAxLjA1OC4wMS4wODQuMDMxLjA0OS4wNTYuMDY1LjA1NC4wMjQuMDgzLjAyNHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=";var s=globalThis&&globalThis.__classPrivateFieldGet||function(n,e,t,M){if(t==="a"&&!M)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!M:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?M:t==="a"?M.call(n):M?M.value:e.get(n)},rt=globalThis&&globalThis.__classPrivateFieldSet||function(n,e,t,M,a){if(M==="m")throw new TypeError("Private method is not writable");if(M==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!a:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return M==="a"?a.call(n,t):a?a.value=t:e.set(n,t),t},u,N,D,T,h,c,z,W,Z,S,d,A,O,m;class jt{constructor(){u.add(this),N.set(this,{}),D.set(this,"1.0.0"),T.set(this,"MetaMask"),h.set(this,ot),c.set(this,null),z.set(this,(e,t)=>{var M;return(M=s(this,N,"f")[e])!=null&&M.push(t)||(s(this,N,"f")[e]=[t]),()=>s(this,u,"m",Z).call(this,e,t)}),S.set(this,async()=>{if(!s(this,c,"f")){let e;try{e=(await Q(()=>import("./index.27ab56a7.js"),["assets/index.27ab56a7.js","assets/wallet_connect.eec8b101.css","assets/solana-wallets-vue.e6bb8111.js","assets/index.ca3a514a.js","assets/index.5056c352.css","assets/_commonjsHelpers.2cf1d77b.js"])).default}catch{throw new Error("Unable to load Solflare MetaMask SDK")}rt(this,c,new e,"f"),s(this,c,"f").on("standard_change",t=>s(this,u,"m",W).call(this,"change",t))}return this.accounts.length||await s(this,c,"f").connect(),{accounts:this.accounts}}),d.set(this,async()=>{!s(this,c,"f")||await s(this,c,"f").disconnect()}),A.set(this,async(...e)=>{if(!s(this,c,"f"))throw new j;return await s(this,c,"f").standardSignAndSendTransaction(...e)}),O.set(this,async(...e)=>{if(!s(this,c,"f"))throw new j;return await s(this,c,"f").standardSignTransaction(...e)}),m.set(this,async(...e)=>{if(!s(this,c,"f"))throw new j;return await s(this,c,"f").standardSignMessage(...e)})}get version(){return s(this,D,"f")}get name(){return s(this,T,"f")}get icon(){return s(this,h,"f")}get chains(){return[nt,st,ct]}get features(){return{[K]:{version:"1.0.0",connect:s(this,S,"f")},[X]:{version:"1.0.0",disconnect:s(this,d,"f")},[$]:{version:"1.0.0",on:s(this,z,"f")},[V]:{version:"1.0.0",supportedTransactionVersions:["legacy",0],signAndSendTransaction:s(this,A,"f")},[J]:{version:"1.0.0",supportedTransactionVersions:["legacy",0],signTransaction:s(this,O,"f")},[F]:{version:"1.0.0",signMessage:s(this,m,"f")}}}get accounts(){return s(this,c,"f")?s(this,c,"f").standardAccounts:[]}}N=new WeakMap,D=new WeakMap,T=new WeakMap,h=new WeakMap,c=new WeakMap,z=new WeakMap,S=new WeakMap,d=new WeakMap,A=new WeakMap,O=new WeakMap,m=new WeakMap,u=new WeakSet,W=function(e,...t){var M;(M=s(this,N,"f")[e])==null||M.forEach(a=>a.apply(null,t))},Z=function(e,t){var M;s(this,N,"f")[e]=(M=s(this,N,"f")[e])==null?void 0:M.filter(a=>t!==a)};let x=!1;function Nt(){x||(at(new jt),x=!0)}async function lt(){const n="solflare-detect-metamask";function e(){window.postMessage({target:"metamask-contentscript",data:{name:"metamask-provider",data:{id:n,jsonrpc:"2.0",method:"wallet_getSnaps"}}},window.location.origin)}function t(M){var i,r;const a=M.data;(a==null?void 0:a.target)==="metamask-inpage"&&((i=a.data)==null?void 0:i.name)==="metamask-provider"&&(((r=a.data.data)==null?void 0:r.id)===n?(window.removeEventListener("message",t),a.data.data.error||Nt()):e())}window.addEventListener("message",t),window.setTimeout(()=>window.removeEventListener("message",t),5e3),e()}const ut="Solflare";class Lt extends E{constructor(e={}){super(),this.name=ut,this.url="https://solflare.com",this.icon="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+",this.supportedTransactionVersions=new Set(["legacy",0]),this._readyState=typeof window>"u"||typeof document>"u"?o.Unsupported:o.Loadable,this._disconnected=()=>{const t=this._wallet;t&&(t.off("disconnect",this._disconnected),this._wallet=null,this._publicKey=null,this.emit("error",new f),this.emit("disconnect"))},this._accountChanged=t=>{if(!t)return;const M=this._publicKey;if(!!M){try{t=new L(t.toBytes())}catch(a){this.emit("error",new I(a==null?void 0:a.message,a));return}M.equals(t)||(this._publicKey=t,this.emit("connect",t))}},this._connecting=!1,this._publicKey=null,this._wallet=null,this._config=e,this._readyState!==o.Unsupported&&(p(()=>{var t;return((t=window.solflare)==null?void 0:t.isSolflare)||window.SolflareApp?(this._readyState=o.Installed,this.emit("readyStateChange",this._readyState),!0):!1}),lt())}get publicKey(){return this._publicKey}get connecting(){return this._connecting}get connected(){var e;return!!((e=this._wallet)!=null&&e.connected)}get readyState(){return this._readyState}async autoConnect(){this.readyState===o.Loadable&&g()||await this.connect()}async connect(){try{if(this.connected||this.connecting)return;if(this._readyState!==o.Loadable&&this._readyState!==o.Installed)throw new k;if(this.readyState===o.Loadable&&g()){const a=encodeURIComponent(window.location.href),i=encodeURIComponent(window.location.origin);window.location.href=`https://solflare.com/ul/v1/browse/${a}?ref=${i}`;return}let e;try{e=(await Q(()=>import("./index.aab0b4b5.js"),["assets/index.aab0b4b5.js","assets/index.ca3a514a.js","assets/index.5056c352.css","assets/solana-wallets-vue.e6bb8111.js","assets/_commonjsHelpers.2cf1d77b.js"])).default}catch(a){throw new G(a==null?void 0:a.message,a)}let t;try{t=new e({network:this._config.network})}catch(a){throw new B(a==null?void 0:a.message,a)}if(this._connecting=!0,!t.connected)try{await t.connect()}catch(a){throw new y(a==null?void 0:a.message,a)}if(!t.publicKey)throw new y;let M;try{M=new L(t.publicKey.toBytes())}catch(a){throw new I(a==null?void 0:a.message,a)}t.on("disconnect",this._disconnected),t.on("accountChanged",this._accountChanged),this._wallet=t,this._publicKey=M,this.emit("connect",M)}catch(e){throw this.emit("error",e),e}finally{this._connecting=!1}}async disconnect(){const e=this._wallet;if(e){e.off("disconnect",this._disconnected),e.off("accountChanged",this._accountChanged),this._wallet=null,this._publicKey=null;try{await e.disconnect()}catch(t){this.emit("error",new C(t==null?void 0:t.message,t))}}this.emit("disconnect")}async sendTransaction(e,t,M={}){try{const a=this._wallet;if(!a)throw new j;try{const{signers:i,...r}=M;return Y(e)?i!=null&&i.length&&e.sign(i):(e=await this.prepareTransaction(e,t,r),i!=null&&i.length&&e.partialSign(...i)),r.preflightCommitment=r.preflightCommitment||t.commitment,await a.signAndSendTransaction(e,r)}catch(i){throw i instanceof b?i:new _(i==null?void 0:i.message,i)}}catch(a){throw this.emit("error",a),a}}async signTransaction(e){try{const t=this._wallet;if(!t)throw new j;try{return await t.signTransaction(e)||e}catch(M){throw new w(M==null?void 0:M.message,M)}}catch(t){throw this.emit("error",t),t}}async signAllTransactions(e){try{const t=this._wallet;if(!t)throw new j;try{return await t.signAllTransactions(e)||e}catch(M){throw new w(M==null?void 0:M.message,M)}}catch(t){throw this.emit("error",t),t}}async signMessage(e){try{const t=this._wallet;if(!t)throw new j;try{return await t.signMessage(e,"utf8")}catch(M){throw new U(M==null?void 0:M.message,M)}}catch(t){throw this.emit("error",t),t}}}var It=R(({app:n})=>{const e={wallets:[new tt,new Lt],autoConnect:!0};n.use(H,e),console.log("[booted] Wallet")}),Dt=Object.freeze(Object.defineProperty({__proto__:null,default:It},Symbol.toStringTag,{value:"Module"}));export{V as S,J as a,F as b,Dt as w};
