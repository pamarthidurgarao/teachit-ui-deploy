(this["webpackJsonpmy-class"]=this["webpackJsonpmy-class"]||[]).push([[0],{139:function(e,t,a){e.exports=a(183)},144:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=144},174:function(e,t){},177:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(240),r=a(244),o=a(0),i=a.n(o),c=a(11),l=a.n(c),s=a(88),u=a(21),m=a(13),d=a(7),p=a(12),g=i.a.createContext(),h=i.a.createContext();function f(e,t){switch(t.type){case"LOGIN_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{isAuthenticated:!0});case"SIGN_OUT_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{isAuthenticated:!1});default:throw new Error("Unhandled action type: ".concat(t.type))}}function b(e){var t=e.children,a=i.a.useReducer(f,{isAuthenticated:!!localStorage.getItem("user")}),n=Object(d.a)(a,2),r=n[0],o=n[1];return i.a.createElement(g.Provider,{value:r},i.a.createElement(h.Provider,{value:o},t))}function E(){var e=i.a.useContext(h);if(void 0===e)throw new Error("useUserDispatch must be used within a UserProvider");return e}function v(){return i.a.createElement("div",null,i.a.createElement("div",{id:"video-grid"}))}var O=a(216),w=a(218),j=a(220),x=a(221),k=a(48),S=a.n(k),y=a(72),C=a.n(y),A=a(73),N=a.n(A),B=a(70),F=a.n(B),I=a(71),T=a.n(I),L=a(63),M=a.n(L),W=a(46),z=a.n(W),U={apiEndpoint:"https://teachit-api.herokuapp.com",socketEndpoint:"https://teachit-api.herokuapp.com",peerEndpoint:"school-peer.herokuapp.com"},D=(a(177),Object(O.a)((function(e){return{appBar:{top:"auto",bottom:0},grow:{float:"right",position:"absolute",right:"30px"},controlBtn:{margin:"5px"},callEndBtn:{margin:"5px",backgroundColor:"red"},video:{height:window.innerHeight-112+"px",width:(window.innerWidth-74)/2+"px"},videoMobile:{height:(window.innerHeight-112)/2+"px",width:window.innerWidth+"px"}}})));function _(){var e,t=z()(U.socketEndpoint),a=Object(m.h)(),n=Object(m.g)(),r=a.id,c=D(),l=Object(o.useState)(),s=Object(d.a)(l,2),u=s[0],p=s[1],g=Object(o.useState)(!0),h=Object(d.a)(g,2),f=h[0],b=h[1],E=Object(o.useState)(!0),v=Object(d.a)(E,2),O=v[0],k=v[1],y=Object(o.useState)(0),A=Object(d.a)(y,1)[0],B=JSON.parse(localStorage.getItem("user")),I=new M.a(B._id,{port:"443",secure:!0,host:U.peerEndpoint});function L(e){u&&u.getTracks().forEach((function(e){e.stop()})),e&&_(B._id,r+"close"),n.push("/app/contacts")}function W(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)}function _(e,t){fetch(U.apiEndpoint+"/teachit/api/v1/user/"+t+"/"+e,{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e?console.log(e):console.log("unable to inser")}))}function P(t,a){t.srcObject=a,t.addEventListener("loadedmetadata",(function(){t.play()})),e.append(t)}return Object(o.useEffect)((function(){e=document.getElementById("video-grid"),_(B._id,r),t.on(B._id+"close",(function(e){L(!1)})),function(){var e=document.createElement("video");e.setAttribute("class",W()?c.videoMobile:c.video),e.muted=!0,navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(t){p(t),P(e,t),console.log("Call started"),I.on("call",(function(e){console.log("Received the call from source2"),e.answer(t),e.on("stream",(function(e){if(console.log("source2 stream connected"),!document.getElementById(r)){console.log("source1 stream adding to the console");var t=document.createElement("video");t.setAttribute("class",W()?c.videoMobile:c.video),t.setAttribute("id",r),P(t,e)}})),e.on("disconnected",(function(){console.log("disconnected")})),e.on("close",(function(){console.log("close")}))}))}))}()}),[A]),Object(o.useEffect)((function(){return function(){console.log("End"),I.disconnect(),I.destroy()}}),[]),Object(o.useLayoutEffect)((function(){function e(){}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{id:"video-grid",className:""})),i.a.createElement(w.a,{position:"fixed",color:"primary",className:c.appBar},i.a.createElement(j.a,null,i.a.createElement("div",{className:c.grow},i.a.createElement(x.a,{color:"inherit",onClick:function(){return k(e=!O),void(u.getVideoTracks()[0].enabled=e);var e},edge:"end",className:c.controlBtn},O?i.a.createElement(F.a,null):i.a.createElement(T.a,null)),i.a.createElement(x.a,{edge:"end",color:"inherit",onClick:function(){return b(e=!f),void(u.getAudioTracks()[0].enabled=e);var e},className:c.controlBtn},f?i.a.createElement(C.a,null):i.a.createElement(N.a,null)),i.a.createElement(x.a,{color:"inherit",onClick:function(){return L(!0)},edge:"end",className:c.callEndBtn},i.a.createElement(S.a,null))))),i.a.createElement("audio",{className:"audio-element"},i.a.createElement("source",{src:"sample.mp3"})))}var P=Object(O.a)((function(e){return{appBar:{top:"auto",bottom:0},grow:{float:"right",position:"absolute",right:"30px"},controlBtn:{margin:"5px"},callEndBtn:{margin:"5px",backgroundColor:"red"},video:{height:window.innerHeight-112+"px",width:(window.innerWidth-74)/2+"px"},videoMobile:{height:(window.innerHeight-112)/2+"px",width:window.innerWidth+"px"}}}));function R(){var e,t=z()(U.socketEndpoint),a=Object(m.g)(),n=Object(m.h)().id,r=P(),c=Object(o.useState)(),l=Object(d.a)(c,2),s=l[0],u=l[1],p=Object(o.useState)(!0),g=Object(d.a)(p,2),h=g[0],f=g[1],b=Object(o.useState)(!0),E=Object(d.a)(b,2),v=E[0],O=E[1],k=Object(o.useState)(0),y=Object(d.a)(k,1)[0],A=JSON.parse(localStorage.getItem("user")),B=new M.a(A._id,{port:"443",secure:!0,host:U.peerEndpoint});function I(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)}function L(e){s&&s.getTracks().forEach((function(e){e.stop()})),e&&fetch(U.apiEndpoint+"/teachit/api/v1/user/"+""+"/"+(n+"close"),{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e?console.log(e):console.log("unable to inser")})),a.push("/app/contacts")}function W(t,a){t.srcObject=a,t.addEventListener("loadedmetadata",(function(){t.play()})),e.append(t)}return i.a.useEffect((function(){return e=document.getElementById("video-grid"),console.log("hai"),function(){var e=document.createElement("video");e.setAttribute("class",I()?r.videoMobile:r.video),e.muted=!0,navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(t){console.log("Call received"),u(t),W(e,t),setTimeout((function(){var e=B.call(n,t);console.log("Calling to the diler {}",e),e&&e.on("stream",(function(e){if(console.log("source1 stream connected"),!document.getElementById(n)){console.log("source1 stream adding to the console");var t=document.createElement("video");t.setAttribute("class",I()?r.videoMobile:r.video),t.setAttribute("id",n),W(t,e)}}))}),2e3)}))}(),t.on(A._id+"close",(function(e){L(!1)})),function(){s&&s.getTracks().forEach((function(e){e.stop()}))}}),[y]),Object(o.useEffect)((function(){return function(){console.log("End"),B.disconnect(),B.destroy()}}),[]),i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{id:"video-grid",className:""})),i.a.createElement(w.a,{position:"fixed",color:"primary",className:r.appBar},i.a.createElement(j.a,null,i.a.createElement("div",{className:r.grow},i.a.createElement(x.a,{color:"inherit",onClick:function(){return O(e=!v),void(s.getVideoTracks()[0].enabled=e);var e},edge:"end",className:r.controlBtn},v?i.a.createElement(F.a,null):i.a.createElement(T.a,null)),i.a.createElement(x.a,{edge:"end",color:"inherit",onClick:function(){return f(e=!h),void(s.getAudioTracks()[0].enabled=e);var e},className:r.controlBtn},h?i.a.createElement(C.a,null):i.a.createElement(N.a,null)),i.a.createElement(x.a,{color:"inherit",onClick:function(){return L(!0)},edge:"end",className:r.callEndBtn},i.a.createElement(S.a,null))))))}var H=a(222),G=a(186),J=a(223),q=a(249),V=a(225),Y=a(226),X=a(250),$=a(229),K=a(224),Q=a(227),Z=a(228),ee=Object(O.a)((function(e){return{root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)},appBar:{top:"auto",bottom:0},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function te(){var e=ee(),t=Object(m.g)(),a=i.a.useState(!1),n=Object(d.a)(a,1)[0],r=i.a.useState([]),o=Object(d.a)(r,2),c=o[0],l=o[1],s=i.a.useState(!1),u=Object(d.a)(s,2),p=u[0],g=u[1],h=i.a.useState(0),f=Object(d.a)(h,1)[0];i.a.useEffect((function(){!function(e,t){t(!0),fetch("https://teachit-api.herokuapp.com/teachit/api/v1/user",{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){a?(e(a.users),t(!1)):(console.log("unable to inser"),t(!1))}))}(l,g)}),[f]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Contacts"),i.a.createElement("div",{className:e.demo},i.a.createElement(H.a,{dense:n},c.length>0?c.map((function(e){var a=e.firstName,n=e.lastName,r=e.email,o=e._id;return i.a.createElement(G.a,{key:o},i.a.createElement(J.a,null,i.a.createElement(q.a,null,i.a.createElement(K.a,null))),i.a.createElement(V.a,{primary:a+" "+n,secondary:r}),i.a.createElement(Y.a,null,i.a.createElement(x.a,{edge:"end","aria-label":"audio",onClick:function(){return e=o,void t.push("/app/call2/"+e);var e}},i.a.createElement(Q.a,null)),i.a.createElement(x.a,{edge:"end","aria-label":"video"},i.a.createElement(Z.a,null))))})):[])),i.a.createElement(X.a,{className:e.backdrop,open:p,onClick:function(){}},i.a.createElement($.a,null)))}function ae(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Messages"))}var ne=a(8),re=a(17),oe=a.n(re),ie=i.a.createContext(),ce=i.a.createContext();function le(e,t){switch(t.type){case"TOGGLE_SIDEBAR":return Object(p.a)(Object(p.a)({},e),{},{isSidebarOpened:!e.isSidebarOpened});default:throw new Error("Unhandled action type: ".concat(t.type))}}function se(e){var t=e.children,a=i.a.useReducer(le,{isSidebarOpened:!1}),n=Object(d.a)(a,2),r=n[0],o=n[1];return i.a.createElement(ie.Provider,{value:r},i.a.createElement(ce.Provider,{value:o},t))}function ue(){var e=i.a.useContext(ie);if(void 0===e)throw new Error("useLayoutState must be used within a LayoutProvider");return e}function me(){var e=i.a.useContext(ce);if(void 0===e)throw new Error("useLayoutDispatch must be used within a LayoutProvider");return e}function de(e){e({type:"TOGGLE_SIDEBAR"})}var pe=a(54),ge=a(120),he=a(232),fe=a(230),be=a(231),Ee=a(117),ve=a.n(Ee),Oe=a(187),we=Object(Oe.a)((function(e){var t;return t={root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},logotype:Object(ne.a)({color:"white",marginLeft:e.spacing(2.5),marginRight:e.spacing(2.5),fontWeight:500,fontSize:18,whiteSpace:"nowrap"},e.breakpoints.down("xs"),{display:"none"}),appBar:{width:"100vw",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}},Object(ne.a)(t,"menuButton",{marginRight:e.spacing(2)}),Object(ne.a)(t,"toolbar",{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(ne.a)(t,"hide",{display:"none"}),Object(ne.a)(t,"grow",{flexGrow:1}),Object(ne.a)(t,"headerMenuButton",{marginLeft:e.spacing(2),padding:e.spacing(.5)}),Object(ne.a)(t,"headerMenuButtonCollapse",{marginRight:e.spacing(2)}),Object(ne.a)(t,"headerIcon",{fontSize:28,color:"rgba(255, 255, 255, 0.35)"}),Object(ne.a)(t,"headerIconCollapse",{color:"white"}),t}));function je(e){var t=we(),a=E(),n=Object(m.g)(),r=ue(),c=me(),l=i.a.useState(!0),s=Object(d.a)(l,2),u=(s[0],s[1],i.a.useState(null)),p=Object(d.a)(u,2),g=p[0],h=p[1],f=Boolean(g),b=function(){h(null)},v=Object(o.useState)(!1),O=Object(d.a)(v,2);O[0],O[1];return i.a.createElement(w.a,{position:"fixed",className:t.appBar},i.a.createElement(j.a,{className:t.toolbar,variant:"dense"},i.a.createElement(x.a,{color:"inherit",onClick:function(){return de(c)},className:oe()(t.headerMenuButton,t.headerMenuButtonCollapse)},r.isSidebarOpened?i.a.createElement(fe.a,{classes:{root:oe()(t.headerIcon,t.headerIconCollapse)}}):i.a.createElement(be.a,{classes:{root:oe()(t.headerIcon,t.headerIconCollapse)}})),i.a.createElement(pe.a,{className:t.title,variant:"h6",noWrap:!0},"TeachIT"),i.a.createElement("div",null,i.a.createElement(x.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},color:"inherit"},i.a.createElement(ve.a,null)),i.a.createElement(ge.a,{id:"menu-appbar",anchorEl:g,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:b},i.a.createElement(he.a,{onClick:b},"Profile"),i.a.createElement(he.a,{onClick:b},"My account"),i.a.createElement(he.a,{onClick:function(){!function(e,t){localStorage.removeItem("user"),e({type:"SIGN_OUT_SUCCESS"}),t.push("/login")}(a,n)}},"Sign Out")))))}var xe=a(251),ke=a(237),Se=a(121),ye=a(233),Ce=a(234),Ae=a(236),Ne=a(235),Be=Object(Oe.a)((function(e){var t;return{menuButton:{marginLeft:12,marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(ne.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+0},e.breakpoints.down("sm"),{width:240}),toolbar:Object(p.a)(Object(p.a)({},e.mixins.toolbar),{},Object(ne.a)({},e.breakpoints.down("sm"),{display:"none"})),content:{flexGrow:1,padding:e.spacing(3)},mobileBackButton:(t={marginTop:e.spacing(.5),marginLeft:e.spacing(3)},Object(ne.a)(t,e.breakpoints.only("sm"),{marginTop:e.spacing(.625)}),Object(ne.a)(t,e.breakpoints.up("md"),{display:"none"}),t)}}));function Fe(e){var t,a,n,r=e.link,c=e.icon,l=e.label,s=e.children,m=e.location,p=e.isSidebarOpened,g=e.nested,h=e.type,f=Be(),b=Object(o.useState)(!1),E=Object(d.a)(b,2),v=E[0],O=E[1],w=r&&(m.pathname===r||-1!==m.pathname.indexOf(r));return"title"===h?i.a.createElement(pe.a,{className:oe()(f.linkText,f.sectionTitle,Object(ne.a)({},f.linkTextHidden,!p))},l):"divider"===h?i.a.createElement(ye.a,{className:f.divider}):s?i.a.createElement(i.a.Fragment,null,i.a.createElement(G.a,{button:!0,component:r&&u.b,onClick:function(e){p&&(e.preventDefault(),O(!v))},className:f.link,to:r,disableRipple:!0},i.a.createElement(Ce.a,{className:oe()(f.linkIcon,Object(ne.a)({},f.linkIconActive,w))},c||i.a.createElement(Ne.a,null)),i.a.createElement(V.a,{classes:{primary:oe()(f.linkText,(n={},Object(ne.a)(n,f.linkTextActive,w),Object(ne.a)(n,f.linkTextHidden,!p),n))},primary:l})),s&&i.a.createElement(Ae.a,{in:v&&p,timeout:"auto",unmountOnExit:!0,className:f.nestedList},i.a.createElement(H.a,{component:"div",disablePadding:!0},s.map((function(e){return i.a.createElement(Fe,Object.assign({key:e&&e.link,location:m,isSidebarOpened:p,classes:f,nested:!0},e))}))))):i.a.createElement(G.a,{button:!0,component:r&&u.b,to:r,className:f.link,classes:{root:oe()(f.linkRoot,(t={},Object(ne.a)(t,f.linkActive,w&&!g),Object(ne.a)(t,f.linkNested,g),t))},disableRipple:!0},i.a.createElement(Ce.a,{className:oe()(f.linkIcon,Object(ne.a)({},f.linkIconActive,w))},c),i.a.createElement(V.a,{classes:{primary:oe()(f.linkText,(a={},Object(ne.a)(a,f.linkTextActive,w),Object(ne.a)(a,f.linkTextHidden,!p),a))},primary:l}))}var Ie=[{id:1,label:"Calls",link:"/app/calls",icon:i.a.createElement(Q.a,null)},{id:2,label:"Messages",link:"/app/messages",icon:i.a.createElement(K.a,null)},{id:3,label:"Contacts",link:"/app/contacts",icon:i.a.createElement(ke.a,null)}];var Te=Object(m.i)((function(e){var t,a,n=e.location,r=Be(),c=Object(Se.a)(),l=ue().isSidebarOpened,s=me(),u=Object(o.useState)(!0),m=Object(d.a)(u,2),p=m[0],g=m[1];return Object(o.useEffect)((function(){return window.addEventListener("resize",h),h(),function(){window.removeEventListener("resize",h)}})),i.a.createElement(xe.a,{variant:p?"permanent":"temporary",className:oe()(r.drawer,(t={},Object(ne.a)(t,r.drawerOpen,l),Object(ne.a)(t,r.drawerClose,!l),t)),classes:{paper:oe()((a={},Object(ne.a)(a,r.drawerOpen,l),Object(ne.a)(a,r.drawerClose,!l),a))},open:l},i.a.createElement("div",{className:r.toolbar}),i.a.createElement("div",{className:r.mobileBackButton},i.a.createElement(x.a,{onClick:function(){return de(s)}},i.a.createElement(fe.a,{classes:{root:oe()(r.headerIcon,r.headerIconCollapse)}}))),i.a.createElement(H.a,{className:r.sidebarList},Ie.map((function(e){return i.a.createElement(Fe,Object.assign({key:e.id,location:n,isSidebarOpened:l},e))}))));function h(){var e=window.innerWidth<c.breakpoints.values.md;e&&p?g(!1):e||p||g(!0)}})),Le=a(247),Me=a(118),We=a.n(Me);function ze(){return Math.round(20*Math.random())-10}function Ue(){var e=50+ze(),t=50+ze();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var De=Object(O.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[9],padding:e.spacing(2,4,3)},callEnd:{backgroundColor:"#eb0905",color:"#fff",marginLeft:"50px"},callAnswer:{backgroundColor:"#237301",color:"#fff",float:"right",marginRight:"50px"},callImg:{justifyContent:"center",textAlign:"center",backgroundColor:"#040e46",width:"100px",height:"100px",borderRadius:"50px",margin:"0 auto",color:"#ffffff"},callText:{position:"relative",top:"30%",fontSize:"xx-large"},callName:{textAlign:"center"}}}));function _e(e){var t=e.callId,a=e.setOpen,n=e.open,r=e.toggle,c=De(),l=Object(m.g)(),s=Object(o.useState)(Ue),u=Object(d.a)(s,1)[0],p=Object(o.useState)(),g=Object(d.a)(p,2),h=g[0],f=g[1];Object(o.useEffect)((function(){return t&&t.status&&function(e,t){fetch("https://teachit-api.herokuapp.com/teachit/api/v1/user/query",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.json()})).then((function(e){e?t(e[0]):console.log("unable to inser")}))}(t.status,f),function(){}}),[t]);var b=i.a.createElement("div",{style:u,className:c.paper},i.a.createElement("div",{className:c.callImg},i.a.createElement("span",{className:c.callText}," ",h?h.firstName.slice(0,1).toUpperCase()+h.lastName.slice(0,1).toUpperCase():"")),i.a.createElement("div",{className:c.callName},i.a.createElement("h2",{id:"simple-modal-title"},h?h.firstName+" "+h.lastName:""),i.a.createElement("p",null,"Is calling...")),i.a.createElement(x.a,{edge:"end","aria-label":"end",className:c.callEnd,onClick:function(){return a(!1),void r()}},i.a.createElement(S.a,null)),i.a.createElement(x.a,{edge:"end","aria-label":"answer",className:c.callAnswer,onClick:function(){return a(!1),r(),void l.push("/app/call/"+t.status)}},i.a.createElement(We.a,null)));return i.a.createElement("div",null,i.a.createElement(Le.a,{open:n,onClose:function(){a(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},b))}var Pe=Object(Oe.a)((function(e){return{root:{display:"flex",maxWidth:"100vw",overflowX:"hidden"},content:{flexGrow:1,width:"calc(100vw - 240px)",margin:"48px 0px 64px 0px"},contentShift:{width:"calc(100vw - ".concat(240+e.spacing(6),"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},fakeToolbar:Object(p.a)({},e.mixins.toolbar)}})),Re={height:window.innerHeight-112+"px"};var He=Object(m.i)((function(e){var t=function(e){var t=Object(o.useState)(new Audio(e)),a=Object(d.a)(t,1)[0],n=Object(o.useState)(!1),r=Object(d.a)(n,2),i=r[0],c=r[1];return Object(o.useEffect)((function(){a.loop=!0,i?a.play():a.pause()}),[i]),Object(o.useEffect)((function(){return a.addEventListener("ended",(function(){c(!0)})),function(){a.removeEventListener("ended",(function(){return c(!1)}))}}),[]),[i,function(){return c(!i)}]}("telephone_ring.mp3"),a=Object(d.a)(t,2),n=(a[0],a[1]),r=z()("https://teachit-api.herokuapp.com"),c=Pe(),l=i.a.useState(!1),s=Object(d.a)(l,2),u=s[0],p=s[1],g=i.a.useState(),h=Object(d.a)(g,2),f=h[0],b=h[1],E=i.a.useState(10),O=Object(d.a)(E,2),w=O[0];O[1],i.a.useEffect((function(){var e=JSON.parse(localStorage.getItem("user"));r.on(e._id,(function(e){console.log(u),p(!0),console.log(u),n(),b(e)}))}),[w]);var j=ue();return i.a.createElement("div",{className:c.root},i.a.createElement(i.a.Fragment,null,i.a.createElement(je,{history:e.history}),i.a.createElement(Te,null),i.a.createElement("div",{className:oe()(c.content,Object(ne.a)({},c.contentShift,j.isSidebarOpened))},i.a.createElement("div",{style:Re},i.a.createElement(m.d,null,i.a.createElement(m.b,{path:"/app/calls",component:v}),i.a.createElement(m.b,{path:"/app/call/:id",component:R}),i.a.createElement(m.b,{path:"/app/call2/:id",component:_}),i.a.createElement(m.b,{path:"/app/messages",component:ae}),i.a.createElement(m.b,{path:"/app/contacts",component:te})))),u?i.a.createElement(_e,{callId:f,setOpen:p,open:u,toggle:n}):""))})),Ge=a(246),Je=a(242),qe=a(248),Ve=a(239),Ye=a(241),Xe=a(243),$e=a(238),Ke=a(245),Qe=a(76),Ze=a.n(Qe);function et(){return i.a.createElement(pe.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",i.a.createElement($e.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var tt=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function at(){var e=tt(),t=E(),a=Object(m.g)(),r=Object(o.useState)(!1),c=Object(d.a)(r,2),l=c[0],s=c[1],u=Object(o.useState)(null),g=Object(d.a)(u,2),h=g[0],f=g[1],b=Object(o.useState)({email:"",password:""}),v=Object(d.a)(b,2),O=v[0],w=v[1],j=function(e){var t=e.target,a=t.name,n=t.value;w(Object(p.a)(Object(p.a)({},O),{},Object(ne.a)({},a,n)))};return i.a.createElement(Ve.a,{component:"main",maxWidth:"xs"},i.a.createElement(n.a,null),i.a.createElement("div",{className:e.paper},i.a.createElement(q.a,{className:e.avatar},i.a.createElement(Ze.a,null)),i.a.createElement(pe.a,{component:"h1",variant:"h5"},"Sign in"),i.a.createElement("form",{className:e.form,noValidate:!0},i.a.createElement(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",onChange:j,value:O.email,autoComplete:"email",autoFocus:!0}),i.a.createElement(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:j,value:O.password,autoComplete:"current-password"}),i.a.createElement(Ye.a,{control:i.a.createElement(qe.a,{value:"remember",color:"primary"}),label:"Remember me"}),i.a.createElement(Je.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){!function(e,t,a,n,r,o){o(!1),r(!0),t&&a?fetch("https://teachit-api.herokuapp.com/teachit/api/v1/user/query",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()})).then((function(t){t?(localStorage.setItem("user",JSON.stringify(t[0])),o(null),r(!1),e({type:"LOGIN_SUCCESS"}),n.push("/app/contacts")):console.log("unable to inser")})):(e({type:"LOGIN_FAILURE"}),o(!0),r(!1))}(t,O.email,O.password,a,s,f)}},"Sign In"),i.a.createElement(Xe.a,{container:!0},i.a.createElement(Xe.a,{item:!0,xs:!0},i.a.createElement($e.a,{href:"#",variant:"body2"},"Forgot password?")),i.a.createElement(Xe.a,{item:!0},i.a.createElement($e.a,{href:"#/signup",variant:"body2"},"Don't have an account? Sign Up"))))),i.a.createElement(Ge.a,{mt:8},i.a.createElement(et,null)),h,i.a.createElement(X.a,{className:e.backdrop,open:l},i.a.createElement($.a,null)))}function nt(){return i.a.createElement(pe.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",i.a.createElement($e.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var rt=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function ot(){var e=rt(),t=Object(m.g)(),a=Object(o.useState)({firstName:"",lastName:"",email:"",password:""}),r=Object(d.a)(a,2),c=r[0],l=r[1],s=function(e){var t=e.target,a=t.name,n=t.value;l(Object(p.a)(Object(p.a)({},c),{},Object(ne.a)({},a,n)))};return i.a.createElement(Ve.a,{component:"main",maxWidth:"xs"},i.a.createElement(n.a,null),i.a.createElement("div",{className:e.paper},i.a.createElement(q.a,{className:e.avatar},i.a.createElement(Ze.a,null)),i.a.createElement(pe.a,{component:"h1",variant:"h5"},"Sign up"),i.a.createElement("form",{className:e.form,noValidate:!0},i.a.createElement(Xe.a,{container:!0,spacing:2},i.a.createElement(Xe.a,{item:!0,xs:12,sm:6},i.a.createElement(Ke.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",onChange:s,value:c.firstName,autoFocus:!0})),i.a.createElement(Xe.a,{item:!0,xs:12,sm:6},i.a.createElement(Ke.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",onChange:s,value:c.lastName,autoComplete:"lname"})),i.a.createElement(Xe.a,{item:!0,xs:12},i.a.createElement(Ke.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",onChange:s,value:c.email,autoComplete:"email"})),i.a.createElement(Xe.a,{item:!0,xs:12},i.a.createElement(Ke.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:s,value:c.password,autoComplete:"current-password"})),i.a.createElement(Xe.a,{item:!0,xs:12},i.a.createElement(Ye.a,{control:i.a.createElement(qe.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),i.a.createElement(Je.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){e.preventDefault(),fetch("https://teachit-api.herokuapp.com/teachit/api/v1/user",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){e.user?t.push("/app"):alert("Sorrrrrry !!!! Un-authenticated User !!!!!")}))}},"Sign Up"),i.a.createElement(Xe.a,{container:!0,justify:"flex-end"},i.a.createElement(Xe.a,{item:!0},i.a.createElement($e.a,{href:"#/login",variant:"body2"},"Already have an account? Sign in"))))),i.a.createElement(Ge.a,{mt:5},i.a.createElement(nt,null)))}function it(){var e=function(){var e=i.a.useContext(g);if(void 0===e)throw new Error("useUserState must be used within a UserProvider");return e}().isAuthenticated;return i.a.createElement(u.a,null,i.a.createElement(m.d,null,i.a.createElement(m.b,{exact:!0,path:"/",render:function(){return i.a.createElement(m.a,{to:"/app/contacts"})}}),i.a.createElement(m.b,{exact:!0,path:"/app",render:function(){return i.a.createElement(m.a,{to:"/app/contacts"})}}),i.a.createElement(t,{path:"/app",component:He}),i.a.createElement(t,{path:"/app/calls",component:v}),i.a.createElement(t,{path:"/app/call/:id",component:R}),i.a.createElement(t,{path:"/app/call2/:id",component:_}),i.a.createElement(t,{path:"/app/messages",component:ae}),i.a.createElement(t,{path:"/app/contacts",component:te}),i.a.createElement(a,{path:"/login",component:at}),i.a.createElement(a,{path:"/signup",component:ot}),i.a.createElement(m.b,{component:Error})));function t(t){var a=t.component,n=Object(s.a)(t,["component"]);return i.a.createElement(m.b,Object.assign({},n,{render:function(t){return e?i.a.createElement(a,t):i.a.createElement(m.a,{to:{pathname:"/login",state:{from:t.location}}})}}))}function a(t){var a=t.component,n=Object(s.a)(t,["component"]);return i.a.createElement(m.b,Object.assign({},n,{render:function(t){return e?i.a.createElement(m.a,{to:{pathname:"/"}}):i.a.createElement(a,t)}}))}}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ct=a(119),lt=a(30),st=a.n(lt),ut={palette:{primary:{main:"#040e46",light:st()("#536DFE").lighten(7.5).toHexString(),dark:st()("#536DFE").darken(15).toHexString()},secondary:{main:"#FF5C93",light:st()("#FF5C93").lighten(7.5).toHexString(),dark:st()("#FF5C93").darken(15).toHexString(),contrastText:"#FFFFFF"},warning:{main:"#FFC260",light:st()("#FFC260").lighten(7.5).toHexString(),dark:st()("#FFC260").darken(15).toHexString()},success:{main:"#3CD4A0",light:st()("#3CD4A0").lighten(7.5).toHexString(),dark:st()("#3CD4A0").darken(15).toHexString()},info:{main:"#9013FE",light:st()("#9013FE").lighten(7.5).toHexString(),dark:st()("#9013FE").darken(15).toHexString()},text:{primary:"#4A4A4A",secondary:"#6E6E6E",hint:"#B9B9B9"},background:{default:"#F6F7FF",light:"#F3F5FF"}},customShadows:{widget:"0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetDark:"0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetWide:"0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"},overrides:{MuiBackdrop:{root:{backgroundColor:"#4A4A4A1A"}},MuiMenu:{paper:{boxShadow:"0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"}},MuiSelect:{icon:{color:"#B9B9B9"}},MuiListItem:{root:{"&$selected":{backgroundColor:"#F3F5FF !important","&:focus":{backgroundColor:"#F3F5FF"}}},button:{"&:hover, &:focus":{backgroundColor:"#F3F5FF"}}},MuiTouchRipple:{child:{backgroundColor:"white"}},MuiTableRow:{root:{height:56}},MuiTableCell:{root:{borderBottom:"1px solid rgba(224, 224, 224, .5)"},head:{fontSize:"0.95rem"},body:{fontSize:"0.95rem"}}}},mt={default:Object(ct.a)(Object(p.a)(Object(p.a)({},ut),{typography:{h1:{fontSize:"3rem"},h2:{fontSize:"2rem"},h3:{fontSize:"1.64rem"},h4:{fontSize:"1.5rem"},h5:{fontSize:"1.285rem"},h6:{fontSize:"1.142rem"}}}))};l.a.render(i.a.createElement(se,null,i.a.createElement(b,null,i.a.createElement(r.a,{theme:mt.default},i.a.createElement(n.a,null),i.a.createElement(it,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[139,1,2]]]);
//# sourceMappingURL=main.d6fde6d8.chunk.js.map