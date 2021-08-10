(this["webpackJsonpgithub-search-react"]=this["webpackJsonpgithub-search-react"]||[]).push([[0],{19:function(e,t,c){e.exports={Loader:"Loader_Loader__3cxM3","lds-spinner":"Loader_lds-spinner__1EmWQ",center:"Loader_center__3DNW3"}},36:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var r,a,n=c(0),s=c(1),i=c.n(s),l=c(29),j=c.n(l),o=(c(36),c(8)),d=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-dark bg-primary navbar-expand-lg",children:[Object(n.jsx)("div",{className:"navbar-brand",children:"Github Search"}),Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.c,{to:"/",exact:!0,className:"nav-link",children:"Main"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.c,{to:"/about",className:"nav-link",children:"Information"})})]})]})},b=c(2),u=c(10),O=Object(s.createContext)(),h=Object(s.createContext)(),x=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(s.useContext)(O),i=Object(s.useContext)(h);return Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Input username",onKeyPress:function(e){"Enter"===e.key&&(i.clearUsers(),c.trim()?(a.hide(),i.searchUsers(c.trim())):a.show("Input username"))},value:c,onChange:function(e){return r(e.target.value)}})})},m=function(e){var t=e.user;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:t.avatar_url,alt:t.login,width:"304px",height:"304px",className:"card-img-top"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"class-title",children:t.login}),Object(n.jsx)(o.b,{to:"/profile/".concat(t.login),className:"btn btn-primary",children:"See more"})]})]})},p=c(19),v=c.n(p),f=function(){return Object(n.jsx)("div",{className:v.a.center,children:Object(n.jsxs)("div",{className:v.a.Loader,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})},g=function(){var e=Object(s.useContext)(h),t=e.loading,c=e.users;return Object(n.jsxs)("div",{children:[Object(n.jsx)(x,{}),Object(n.jsx)("div",{className:"row mt-4",children:t?Object(n.jsx)(f,{}):c.map((function(e){return Object(n.jsx)("div",{className:"col-sm-3 mb-4",children:Object(n.jsx)(m,{user:e})},e.id)}))})]})},N=function(e){var t=e.repos;return Object(n.jsx)("div",{children:t.map((function(e){var t=e.html_url,c=e.name,r=e.description,a=e.homepage;return Object(n.jsx)("div",{className:"card mb-3",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h4",{className:"card-title",children:Object(n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:"card-link",children:c})}),r&&Object(n.jsx)("h6",{className:"card-subtitle text-muted",children:r}),a&&Object(n.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",className:"card-link",children:a})]})},e.id)}))})},_={maxWidth:200},y=function(e){var t=e.match,c=Object(s.useContext)(h),r=c.getUser,a=c.getRepos,i=c.loading,l=c.user,j=c.repos,d=Object(s.useMemo)((function(){return t.params.name}),[t]);if(Object(s.useEffect)((function(){r(d),a(d)}),[d]),i)return Object(n.jsx)(f,{});var b=l.name,u=l.company,O=l.avatar_url,x=l.location,m=l.bio,p=l.blog,v=l.login,g=l.html_url,y=l.followers,E=l.public_repos,S=l.public_gists,T=l.following;return Object(n.jsxs)("div",{style:{minWidth:"280px"},children:[Object(n.jsx)(o.b,{to:"/",className:"btn btn-link",children:"Back"}),Object(n.jsx)("div",{className:"card mb-4",children:Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-sm-5 col-lg-3 text-center",children:[Object(n.jsx)("img",{style:_,src:O,alt:b}),Object(n.jsx)("h2",{className:"card-title",children:b}),Object(n.jsx)("h5",{className:"card-subtitle text-muted mb-3",children:v}),x&&Object(n.jsxs)("p",{children:["Location: ",x]})]}),Object(n.jsxs)("div",{className:"col-sm-7 col-lg-9",children:[m&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"BIO"}),Object(n.jsx)("p",{children:m})]}),Object(n.jsx)("a",{href:g,target:"_blank",rel:"noreferrer",className:"btn btn-dark",children:"Open Profile"}),Object(n.jsxs)("ul",{children:[u&&Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Company: "})," ",u]}),p&&Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Website: "}),Object(n.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",className:"card-link",children:p})]})]}),Object(n.jsxs)("div",{className:"d-flex flex-column align-items-start",children:[Object(n.jsxs)("div",{className:"badge bg-primary mb-1",children:["Followers: ",y]}),Object(n.jsxs)("div",{className:"badge bg-primary mb-1",children:["Following: ",T]}),Object(n.jsxs)("div",{className:"badge bg-info mb-1",children:["Public repos: ",E]}),Object(n.jsxs)("div",{className:"badge bg-dark",children:["Public gists: ",S]})]})]})]})})}),Object(n.jsx)(N,{repos:j})]})},E=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"jumbotron",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"display-4",children:"About"}),Object(n.jsx)("p",{className:"lead",children:"React hooks app"})]})})})},S=c(5),T="SHOW_ALERT",C="HIDE_ALERT",R="CLEAR_USERS",k="GET_REPOS",L="GET_USER",w="SEARCH_USERS",A="SET_LOADING",P=(r={},Object(S.a)(r,T,(function(e,t){return t.payload})),Object(S.a)(r,C,(function(e,t){return null})),Object(S.a)(r,"DEFAULT",(function(e){return e})),r),U=function(e,t){return(P[t.type]||P.DEFAULT)(e,t)},D=function(e){var t=e.children,c=Object(s.useReducer)(U,null),r=Object(u.a)(c,2),a=r[0],i=r[1];return Object(n.jsx)(O.Provider,{value:{hide:function(){return i({type:C})},show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"secondary";i({type:T,payload:{type:t,text:e}})},alert:a},children:t})},I=function(){var e=Object(s.useContext)(O),t=e.alert,c=e.hide;return t?Object(n.jsxs)("div",{className:"alert alert-".concat(t.type||"secondary"," alert-dismissible"),role:"alert",children:[t.text,Object(n.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:c,children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null},W=c(9),F=c.n(W),H=c(12),K=c(13),B=c.n(K),G=c(7),M=(a={},Object(S.a)(a,w,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{users:t.payload,loading:!1})})),Object(S.a)(a,k,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{repos:t.payload,loading:!1})})),Object(S.a)(a,L,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{user:t.payload,loading:!1})})),Object(S.a)(a,A,(function(e){return Object(G.a)(Object(G.a)({},e),{},{loading:!0})})),Object(S.a)(a,R,(function(e){return Object(G.a)(Object(G.a)({},e),{},{users:[]})})),Object(S.a)(a,"DEFAULT",(function(e){return e})),a),J=function(e,t){return(M[t.type]||M.DEFAULT)(e,t)},V=Object({NODE_ENV:"production",PUBLIC_URL:"/github-search-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CLIENT_ID,q=Object({NODE_ENV:"production",PUBLIC_URL:"/github-search-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CLIENT_SECRET,Q=function(e){return"".concat(e,"client_id=").concat(V,"&client_secret=").concat(q)},z=function(e){var t=e.children,c=Object(s.useReducer)(J,{user:{},users:[],loading:!1,repos:[]}),r=Object(u.a)(c,2),a=r[0],i=r[1],l=function(){var e=Object(H.a)(F.a.mark((function e(t){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,B.a.get(Q("https://api.github.com/search/users?q=".concat(t,"&")));case 3:c=e.sent,i({type:w,payload:c.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(H.a)(F.a.mark((function e(t){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,B.a.get(Q("https://api.github.com/users/".concat(t,"?")));case 3:c=e.sent,i({type:L,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(H.a)(F.a.mark((function e(t){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,B.a.get(Q("https://api.github.com/users/".concat(t,"/repos?per_page=5&")));case 3:c=e.sent,i({type:k,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(H.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i({type:R});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){i({type:A})},O=a.user,x=a.users,m=a.loading,p=a.repos;return Object(n.jsx)(h.Provider,{value:{searchUsers:l,getUser:j,getRepos:o,clearUsers:d,setLoading:b,user:O,users:x,loading:m,repos:p},children:t})};var X=function(){return Object(n.jsx)(z,{children:Object(n.jsx)(D,{children:Object(n.jsxs)(o.a,{basename:"/github-search-react",children:[Object(n.jsx)(d,{}),Object(n.jsxs)("div",{className:"container pt-4",children:[Object(n.jsx)(I,{alert:{text:"alert"}}),Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{path:"/",exact:!0,component:g}),Object(n.jsx)(b.b,{path:"/about",component:E}),Object(n.jsx)(b.b,{path:"/profile/:name",component:y}),Object(n.jsx)(b.a,{to:"/"})]})]})]})})})};j.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(X,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.94ff42a0.chunk.js.map