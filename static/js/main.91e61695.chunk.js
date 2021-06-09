(this["webpackJsonppopular-video-player"]=this["webpackJsonppopular-video-player"]||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(12),i=n.n(c),r=n(45),o=n(83),s=n(176),l=n(173),j=n(62),d=n(9),b=n(73),u=n(19),p=n(172),m=n(165),O=n(174),h=n(170),x=n(169),f=n(75),g=n.n(f),v=n(3),y=Object(m.a)((function(e){return{container:{display:"flex",flexDirection:"column",marginBottom:e.spacing(2)},formControl:{marginBottom:e.spacing(1),border:"none"}}})),C=function(e){var t=e.searchPhrase,n=e.style,a=void 0===n?{}:n,c=e.setSearchPhrase,i=e.label,r=void 0===i?"Search Videos":i,o=y();return Object(v.jsx)("div",{className:o.container,children:Object(v.jsx)(O.a,{style:a,id:"searchBar",value:t,onChange:function(e){return c(e.target.value)},variant:"outlined",fullWidth:!0,label:r,InputProps:{endAdornment:0!==t.length&&Object(v.jsx)(x.a,{onClick:function(){return c("")},children:Object(v.jsx)(h.a,{position:"end",children:Object(v.jsx)(g.a,{})})})}})})},N=n(46),S=Object(m.a)((function(e){return{responsiveIcon:Object(N.a)({},e.breakpoints.down("md"),{fontSize:"1.25rem"})}})),w=function(e){var t=e.icon,n=S();return Object(v.jsx)(x.a,{children:Object(v.jsx)(t,{className:n.responsiveIcon})})},k=n(76),E=n.n(k),I=n(134),G=Object(m.a)((function(e){return{player:{position:"absolute",top:0,left:0},title:{position:"absolute",cursor:"pointer"},container:{marginBottom:e.spacing(6)}}})),J=function(e){var t=e.id,n=e.setLoading,c=G(),i=Object(a.useState)(""),r=Object(u.a)(i,2),o=r[0],s=r[1],l=Object(a.useState)(!1),j=Object(u.a)(l,2),d=j[0],b=j[1];return Object(v.jsxs)("div",{className:c.container,children:[Object(v.jsx)(E.a,{light:d,className:c.player,playing:!1,url:"https://www.youtube.com/watch?v=".concat(t),config:{youtube:{playerVars:{origin:"http://localhost:3000"}}},width:"100%",height:"100%",onReady:function(e){var t=(0,e.getInternalPlayer)();n(!1),s(t.getVideoData().title),b(!0)}}),Object(v.jsx)(I.a,{className:c.title,variant:"h6",component:"h6",children:o})]})},P=n(77),H=n.n(P),L=n(78),q=n.n(L),D=n(79),A=n.n(D),B=n(54),T=n(171),W=n(175),z=Object(m.a)((function(e){return{loadingContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}})),F=function(e){var t=e.open,n=z();return Object(v.jsx)(W.a,{open:t,className:n.modal,"aria-labelledby":"create-distributor-title","aria-describedby":"create-distributor-form",children:Object(v.jsx)("div",{className:n.loadingContainer,"data-test":"loadingSpinner",children:Object(v.jsx)(T.a,{})})})},M=Object(m.a)((function(e){return{endCenter:{display:"flex",justifyContent:"flex-end",alignItems:"center"},videoContainer:{position:"relative",paddingTop:"56.25% !important"},videoGroup:{width:"50% !important",margin:"auto"},toolBar:{padding:"".concat(e.spacing(2),"px 0 0 0")}}})),V=function(e){var t=e.history,n=Object(a.useState)(!0),c=Object(u.a)(n,2),i=c[0],r=c[1],o=Object(a.useState)(""),s=Object(u.a)(o,2),l=s[0],j=s[1],d=Object(a.useState)(""),b=Object(u.a)(d,2),m=b[0],O=b[1],h=M();return Object(a.useEffect)((function(){0!==m.length&&t.push("/video-play/".concat(m))}),[m]),Object(v.jsxs)("div",{children:[Object(v.jsx)(F,{open:i}),Object(v.jsxs)(p.a,{container:!0,className:h.toolBar,children:[Object(v.jsx)(p.a,{item:!0,xs:3}),Object(v.jsx)(p.a,{item:!0,xs:6,children:Object(v.jsx)(C,{searchPhrase:l,setSearchPhrase:j})}),Object(v.jsx)(p.a,{item:!0,className:h.endCenter,xs:1,children:Object(v.jsx)(w,{icon:H.a})}),Object(v.jsx)(p.a,{item:!0,className:h.endCenter,xs:1,children:Object(v.jsx)(w,{icon:q.a})}),Object(v.jsx)(p.a,{item:!0,className:h.endCenter,xs:1,children:Object(v.jsx)(w,{icon:A.a})})]}),Object(v.jsx)(p.a,{container:!0,className:h.videoGroup,spacing:3,children:B.b.map((function(e,t){return Object(v.jsx)(p.a,{item:!0,xs:12,onClick:function(){return O(e)},children:Object(v.jsx)("div",{className:h.videoContainer,children:Object(v.jsx)(J,{id:e,setLoading:r})})},t)}))})]})},U=n(177),K=Object(m.a)((function(e){return{chip:{margin:"".concat(e.spacing(1),"px ").concat(e.spacing(.3),"px")}}})),Q=function(e){var t=e.label,n=K(),c=Object(a.useState)("default"),i=Object(u.a)(c,2),r=i[0],o=i[1];return Object(v.jsx)(U.a,{label:t,clickable:!0,onClick:function(){o("default"===r?"secondary":"default")},color:r,className:n.chip})},R=n(80),Z=n.n(R),X=n(81),Y=n.n(X),_=n(82),$=n.n(_),ee=Object(m.a)((function(e){return{loadingContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},blackChip:{backgroundColor:"black"},chipContainer:{whiteSpace:"noWrap",overflowX:"scroll"},videoContainer:{position:"relative",paddingTop:"56.25% !important"},videoGroup:{width:"50% !important"},buttonGroup:{width:"30% !important",display:"flex",justifyContent:"flex-end",alignItems:"center",padding:"".concat(e.spacing(3),"px 0 0 0")}}})),te=function(e){var t=e.match,n=e.history,c=ee(),i=Object(a.useState)(!0),r=Object(u.a)(i,2),o=r[0],s=r[1],l=Object(a.useState)(t.params.id),j=Object(u.a)(l,2),d=j[0],b=j[1];Object(a.useEffect)((function(){0!==d.length&&n.push("/video-play/".concat(d))}),[d]);return Object(v.jsxs)("div",{children:[Object(v.jsx)(F,{open:o}),Object(v.jsx)("div",{className:c.videoGroup,children:Object(v.jsx)("div",{className:c.videoContainer,children:Object(v.jsx)(J,{id:d,setLoading:s})})}),Object(v.jsxs)(p.a,{container:!0,spacing:3,className:c.buttonGroup,children:[Object(v.jsx)(p.a,{item:!0,xs:4,children:Object(v.jsx)(w,{icon:Z.a})}),Object(v.jsx)(p.a,{item:!0,xs:4,children:Object(v.jsx)(w,{icon:Y.a})}),Object(v.jsx)(p.a,{item:!0,xs:4,children:Object(v.jsx)(w,{icon:$.a})})]}),Object(v.jsx)("div",{className:c.chipContainer,children:["random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1","random 1"].map((function(e,t){return Object(v.jsx)(Q,{label:e},t)}))}),Object(v.jsx)(p.a,{container:!0,className:c.videoGroup,spacing:3,children:B.a.map((function(e,t){return Object(v.jsx)(p.a,{item:!0,xs:12,onClick:function(){return b(e)},children:Object(v.jsx)("div",{className:c.videoContainer,children:Object(v.jsx)(J,{id:e,setLoading:s})})},t)}))})]},d)},ne=function(){return Object(v.jsxs)(b.a,{atEnter:{offset:-100},atLeave:{offset:-100},atActive:{offset:0},mapStyles:function(e){return{transform:"translate(".concat(e.offset,"%)")}},children:[Object(v.jsx)(d.b,{path:"/video-list",render:function(e){return Object(v.jsx)(V,Object(j.a)({},e))}}),Object(v.jsx)(d.b,{path:"/video-play/:id",render:function(e){return Object(v.jsx)(te,Object(j.a)({},e))}}),Object(v.jsx)(d.a,{from:"/",to:"/video-list"})]})},ae=function(e){var t=e.basename,n=Object(o.a)({palette:{primary:{main:"#FF4910"},secondary:{main:"#606060"}},typography:{h6:{"@media (max-width:600px)":{fontSize:"0.75rem"}}}});return n=Object(s.a)(n),Object(v.jsx)(l.a,{theme:n,children:Object(v.jsx)(r.a,{basename:t,children:Object(v.jsx)(ne,{})})})};i.a.render(Object(v.jsx)(ae,{basename:"/popular-video-player"}),document.getElementById("root"))},54:function(e){e.exports=JSON.parse('{"b":["0W6i5LYKCSI","-cMqr9HpZ-Y","Fnlnw8uY6jo","7nnp55fO2dE","mFu99lwvNT8","gg1bWTVGODg","W_D2LwmUxD0","XM5VjNSbJeU","cQqnOqS8I2s","Vr71JncqFqM","zXEGEwubpf4","IPGxu0quugQ","aJdhxsHhmUk","TENsZLAGvgE","Ze8uUKqcepQ","fRrrNJHu5Rk","AkzkxPPtn6w","belm4kDAHgM","PFmuCDHHpwk","4cuJKHNHQ-s","eqR79JJoWlI"],"a":["ktjafK4SgWM","530z-_yjdlU","glEza5ONTcE","TENsZLAGvgE","belm4kDAHgM"]}')}},[[131,1,2]]]);
//# sourceMappingURL=main.91e61695.chunk.js.map