(this["webpackJsonpavito-sx-frontend-trainee-assignment"]=this["webpackJsonpavito-sx-frontend-trainee-assignment"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(19),i=n.n(s),o=(n(36),n(4)),u=(n(37),n(38),function(){return Object(r.jsx)("div",{className:"background"})}),l=n(14),f=n(6),m=n(5),j=n.n(m),d=n(11),p="https://hacker-news.firebaseio.com/v0",b=".json",h=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"/newstories"+b);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,r=n.splice(0,100),c=Promise.all(r.map((function(e){return O(e)}))),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(p+"/item/"+t+b);case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent){e.next=9;break}return e.abrupt("return",Promise.reject({status:404}));case 9:return e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"/item/"+t+b);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Promise.all(t.map((function(e){return w(e)}))),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=new Date(1e3*e.time);return e.time="".concat(t.getDate(),".").concat(t.getMonth()+1,".").concat(t.getFullYear(),", ").concat(t.getHours(),":").concat(t.getMinutes()<10?"0":"").concat(t.getMinutes()),e},y="ADD_NEWS",_=function(){return function(e){e(S(!0)),h().then((function(e){return e.sort((function(e,t){return t.time-e.time}))})).then((function(e){return e.map((function(e){return x(e)}))})).then((function(t){return e(function(e){return{type:y,payload:e}}(t))})).finally((function(){return e(S(!1))}))}},N="ADD_ACTIVE_NEWS",g="REMOVE_ACTIVE_NEWS",E=function(e){return function(t){t(S(!0)),O(e).then((function(e){return x(e)})).then((function(e){return t(function(e){return{type:N,payload:e}}(e))})).catch((function(e){t(I(e.status))})).finally((function(){return t(S(!1))}))}},k="SET_ERROR",I=function(e){return{type:k,payload:e}},C="RESET_ERROR",P="SET_LOADING",S=function(e){return{type:P,payload:e}},M="ADD_COMMENTS",L=function(e){return function(t){t(S(!0)),v(e).then((function(e){return e.sort((function(e,t){return t.time-e.time}))})).then((function(e){return e.map((function(e){return e.orderOfPriority=0,x(e)}))})).then((function(e){return t(function(e){return{type:M,payload:e}}(e))})).finally((function(){return t(S(!1))}))}},A="ADD_CHILD_COMMENTS",R=function(e,t){return{type:A,payload:{parentId:e,comments:t}}},D="RESET_ALL_COMMENTS",T=function(){var e=Object(d.a)(j.a.mark((function e(t,n,r){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(r);case 2:return(c=e.sent).sort((function(e,t){return t.time-e.time})),a=Promise.all(c.map(function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.orderOfPriority=n+1,!(t.hasOwnProperty("kids")&&t.kids.length>0)){e.next=5;break}return e.next=4,T(t.id,t.orderOfPriority,t.kids);case 4:t.childComments=e.sent;case 5:return e.abrupt("return",x(t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),z=(n(44),n(13)),B=n.n(z);n(45);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var V=c.createElement("path",{d:"M511.266 197.256a14.998 14.998 0 0 0-12.108-10.209l-158.722-23.065-70.984-143.827a15 15 0 0 0-26.902 0l-70.988 143.828-158.719 23.064a15 15 0 0 0-8.313 25.585l114.848 111.955L92.27 482.67a15 15 0 0 0 21.765 15.812L256 423.846l141.961 74.637a14.982 14.982 0 0 0 6.979 1.723 15 15 0 0 0 14.786-17.536L392.61 324.587l114.86-111.954a15 15 0 0 0 3.796-15.377zM366.023 308.608a14.996 14.996 0 0 0-4.314 13.278l23.311 135.898-122.038-64.162a15.004 15.004 0 0 0-13.961 0l-122.045 64.163 23.304-135.9a15.003 15.003 0 0 0-4.313-13.276l-98.731-96.244 136.445-19.829a15 15 0 0 0 11.294-8.205L256 60.685l61.023 123.645a15.002 15.002 0 0 0 11.294 8.206l136.447 19.828-98.741 96.244z"});function W(e,t){var n=e.title,r=e.titleId,a=H(e,["title","titleId"]);return c.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.001 512.001",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,V)}var J=c.forwardRef(W),G=(n.p,function(e){var t=e.newsItem,n=e.className,c=Object(o.f)();return Object(r.jsxs)("article",{className:B()("news-item",n),onClick:function(){c.push("/news/".concat(t.id))},children:[Object(r.jsx)("p",{className:"news-item__author",children:t.by}),Object(r.jsxs)("div",{className:"news-item__wrapper",children:[Object(r.jsx)("p",{className:"news-item__title",children:t.title}),Object(r.jsx)("p",{className:"news-item__time",children:t.time})]}),Object(r.jsxs)("div",{className:"news-item__score",children:[Object(r.jsx)(J,{className:"news-item__score-icon"}),Object(r.jsx)("p",{className:"news-item__score-count",children:t.score})]})]})}),Y=a.a.memo(G),q=Object(f.b)((function(e){return{news:e.news}}),(function(e){return{showNews:function(){e(_())}}}))((function(e){var t=e.news,n=e.showNews,a=Object(c.useState)(0),s=Object(l.a)(a,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){n();var e=setInterval((function(){return o(i+1)}),6e4);return function(){return clearInterval(e)}}),[i]),Object(r.jsx)("div",{className:"news",children:t.map((function(e){return Object(r.jsx)(Y,{className:"news__news-item",newsItem:e},e.id)}))})}));n(47);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var U=c.createElement("path",{d:"M265.171 125.577l-80-80c-4.881-4.881-12.797-4.881-17.678 0-4.882 4.882-4.882 12.796 0 17.678l58.661 58.661H12.5c-6.903 0-12.5 5.597-12.5 12.5 0 6.902 5.597 12.5 12.5 12.5h213.654l-58.659 58.661c-4.882 4.882-4.882 12.796 0 17.678 2.44 2.439 5.64 3.661 8.839 3.661s6.398-1.222 8.839-3.661l79.998-80c4.882-4.882 4.882-12.796 0-17.678z"});function X(e,t){var n=e.title,r=e.titleId,a=Q(e,["title","titleId"]);return c.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",height:40,width:40,viewBox:"0 0 268.832 268.832",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,U)}var Z=c.forwardRef(X);n.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var te=c.createElement("path",{d:"M334.485 37.463c-6.753-1.449-13.396 2.853-14.842 9.603l-9.084 42.391c-28.922-49.34-82.008-80.302-140.191-80.302-89.603 0-162.5 72.896-162.5 162.5 0 6.903 5.596 12.5 12.5 12.5 6.903 0 12.5-5.597 12.5-12.5 0-75.818 61.682-137.5 137.5-137.5 49.429 0 94.515 26.403 118.925 68.443l-41.674-8.931c-6.752-1.447-13.396 2.854-14.841 9.604-1.446 6.75 2.854 13.396 9.604 14.842l71.536 15.33a12.48 12.48 0 0 0 9.409-1.728 12.501 12.501 0 0 0 5.433-7.875l15.331-71.536c1.444-6.749-2.856-13.393-9.606-14.841zM321.907 155.271c-6.899.228-12.309 6.006-12.081 12.905 1.212 36.708-11.942 71.689-37.042 98.504-25.099 26.812-59.137 42.248-95.844 43.46-1.53.05-3.052.075-4.576.075-47.896-.002-92.018-24.877-116.936-65.18l43.447 11.65c6.668 1.787 13.523-2.168 15.311-8.837 1.788-6.668-2.168-13.522-8.836-15.312L34.686 213.59a12.497 12.497 0 0 0-15.311 8.836L.43 293.092c-1.788 6.668 2.168 13.522 8.836 15.311 1.085.291 2.173.431 3.245.431 5.518 0 10.569-3.684 12.066-9.267l10.649-39.717c29.624 46.647 81.189 75.367 137.132 75.365 1.797 0 3.604-.029 5.408-.089 43.381-1.434 83.608-19.674 113.271-51.362s45.209-73.031 43.776-116.413c-.227-6.898-6.008-12.325-12.906-12.08z"});function ne(e,t){var n=e.title,r=e.titleId,a=ee(e,["title","titleId"]);return c.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",height:40,width:40,viewBox:"0 0 344.37 344.37",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,te)}var re=c.forwardRef(ne),ce=(n.p,Object(f.b)((function(e){return{isLoading:e.isLoading}}),(function(e){return{showNews:function(){e(_())},showActiveNews:function(t){e(E(t))}}}))((function(e){var t=e.isLoading,n=e.showNews,c=e.showActiveNews,a=Object(o.f)(),s=Object(o.g)(),i=function(){a.push("/")};return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("div",{className:"header__wrapper",children:function(){if("/"!==s.path)return Object(r.jsx)("button",{className:"header__button-icon",onClick:i,children:Object(r.jsx)(Z,{className:"header__icon header__icon_back"})})}()}),Object(r.jsxs)("div",{className:"header__text",children:[Object(r.jsx)("h1",{className:"header__title",children:"Hacker News"}),Object(r.jsx)("p",{className:"header__subtitle",children:"The news we deserve"})]}),Object(r.jsx)("div",{className:"header__wrapper",children:Object(r.jsx)("button",{className:"header__button-icon",onClick:function(){"/"===s.path?n():"/news/:id"===s.path&&c(s.params.id)},children:Object(r.jsx)(re,{className:B()("header__icon",{header__icon_loader:t})})})})]})}))),ae=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce,{}),Object(r.jsx)(u,{}),Object(r.jsx)(q,{})]})},se=n(3);n(48);function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var ue=c.createElement("path",{d:"M401.625 325.125h-191.25c-10.557 0-19.125 8.568-19.125 19.125s8.568 19.125 19.125 19.125h191.25c10.557 0 19.125-8.568 19.125-19.125s-8.568-19.125-19.125-19.125zm38.25-114.75h-267.75c-10.557 0-19.125 8.568-19.125 19.125s8.568 19.125 19.125 19.125h267.75c10.557 0 19.125-8.568 19.125-19.125s-8.568-19.125-19.125-19.125zM306 0C137.012 0 0 119.875 0 267.75c0 84.514 44.848 159.751 114.75 208.826V612l134.047-81.339c18.552 3.061 37.638 4.839 57.203 4.839 169.008 0 306-119.875 306-267.75S475.008 0 306 0zm0 497.25c-22.338 0-43.911-2.601-64.643-7.019l-90.041 54.123 1.205-88.701C83.5 414.133 38.25 345.513 38.25 267.75c0-126.741 119.875-229.5 267.75-229.5s267.75 102.759 267.75 229.5S453.875 497.25 306 497.25z"});function le(e,t){var n=e.title,r=e.titleId,a=oe(e,["title","titleId"]);return c.createElement("svg",ie({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 612 612",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,ue)}var fe=c.forwardRef(le),me=(n.p,Object(f.b)((function(e,t){return{id:t.match.params.id,activeNews:e.activeNews}}),(function(e){return{showActiveNews:function(t){e(E(t))},resetActiveNews:function(){e({type:g,payload:null})}}}))((function(e){var t=e.id,n=e.activeNews,a=e.showActiveNews,s=e.resetActiveNews,i=Object(c.useState)(0),o=Object(l.a)(i,2),u=o[0],f=o[1];return Object(c.useEffect)((function(){a(t);var e=setInterval((function(){return f(u+1)}),6e4);return function(){return clearInterval(e)}}),[u]),Object(c.useEffect)((function(){return function(){s()}}),[]),n?Object(r.jsxs)("section",{className:"active-news",children:[Object(r.jsx)("p",{className:"active-news__author",children:n.by}),Object(r.jsx)("p",{className:"active-news__title",children:n.title}),Object(r.jsx)("a",{href:n.url,target:"_black",className:"active-news__url",children:n.url}),Object(r.jsxs)("div",{className:"active-news__wrapper",children:[Object(r.jsx)("p",{className:"active-news__time",children:n.time}),Object(r.jsxs)("div",{className:"active-news__comments",children:[Object(r.jsx)(fe,{className:"active-news__comments-icon"}),Object(r.jsx)("p",{className:"active-news__comments-count",children:n.descendants})]})]})]}):null}))),je=(n(49),n(50),Object(f.b)((function(){return{}}),(function(e){return{showChildComments:function(t,n,r){e(function(e,t,n){return function(){var r=Object(d.a)(j.a.mark((function r(c){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(S(!0)),r.next=3,T(e,t,n).then((function(t){return c(R(e,t))})).finally((function(){return c(S(!1))}));case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t,n,r))}}}))((function e(t){var n=t.comment,c=t.showChildComments,a=!!n.kids,s=0===n.orderOfPriority,i=n.hasOwnProperty("childComments")&&n.childComments.length>0,o=n.hasOwnProperty("deleted")&&!!n.deleted;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"comment",onClick:function(){if(!a||!s||i)return null;c(n.id,n.orderOfPriority,n.kids)},children:[function(e){for(var t=[],n=0;n<e;n++)t.push(n);return t.map((function(e){return Object(r.jsx)("div",{className:"comment__order"},e)}))}(n.orderOfPriority),Object(r.jsxs)("div",{className:B()("comment__wrapper",{comment__wrapper_hover:a&&s&&!i},{comment__wrapper_main:s}),children:[Object(r.jsxs)("div",{className:"comment__headline",children:[Object(r.jsx)("p",{className:"comment__author",children:n.by}),Object(r.jsx)("p",{className:"comment__time",children:n.time})]}),Object(r.jsx)("p",{className:"comment__text",dangerouslySetInnerHTML:{__html:n.text}}),a&&s&&!i?Object(r.jsx)("p",{className:"comment__show-more",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451 ..."}):null]})]}),function(){if(i)return n.childComments.map((function(t){return o?null:Object(r.jsx)(e,{comment:t},t.id)}))}()]})}))),de=Object(f.b)((function(e){return{childCommentIds:e.activeNews&&e.activeNews.hasOwnProperty("kids")?e.activeNews.kids:null,comments:e.comments}}),(function(e){return{showComments:function(t){e(L(t))},resetComments:function(){e({type:D,payload:[]})}}}))((function(e){var t=e.comments,n=e.childCommentIds,a=e.showComments,s=e.resetComments;return Object(c.useEffect)((function(){return n&&0!==n.length&&a(n),function(){s()}}),[n]),Object(r.jsx)("section",{className:"comments",children:t.map((function(e){return e.hasOwnProperty("deleted")?null:Object(r.jsx)(je,{comment:e},e.id)}))})})),pe=(n(51),Object(f.b)((function(e){return{statusError:e.statusError}}),(function(e){return{resetError:function(){e({type:C,payload:null})}}}))((function(e){var t=e.statusError,n=e.resetError,a=Object(c.useState)("\u041e\u0448\u0438\u0431\u043a\u0430"),s=Object(l.a)(a,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){404===t&&o("Not Found")}),[t]),Object(c.useEffect)((function(){return function(){n()}}),[]),t?Object(r.jsx)("section",{className:"notification",children:Object(r.jsx)("p",{className:"notification__text",children:i})}):null}))),be=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce,{}),Object(r.jsx)(me,Object(se.a)({},e)),Object(r.jsx)(de,Object(se.a)({},e)),Object(r.jsx)(pe,{})]})},he=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/news/:id",component:be}),Object(r.jsx)(o.a,{exact:!0,path:"/",children:Object(r.jsx)(ae,{})})]})})},Oe=n(18),we=n(30),ve=n(22),xe={isLoading:!1,news:[],activeNews:null,comments:[],statusError:null},ye=Object(Oe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(se.a)(Object(se.a)({},e),{},{news:Object(ve.a)(t.payload)});case N:case g:return Object(se.a)(Object(se.a)({},e),{},{activeNews:t.payload});case P:return Object(se.a)(Object(se.a)({},e),{},{isLoading:t.payload});case k:case C:return Object(se.a)(Object(se.a)({},e),{},{statusError:t.payload});case M:return Object(se.a)(Object(se.a)({},e),{},{comments:Object(ve.a)(t.payload)});case A:return Object(se.a)(Object(se.a)({},e),{},{comments:Object(ve.a)(e.comments.map((function(e){return e.id===t.payload.parentId&&(e.childComments=t.payload.comments),Object(se.a)({},e)})))});case D:return Object(se.a)(Object(se.a)({},e),{},{comments:[]});default:return e}}),Object(Oe.a)(we.a)),_e=n(15);i.a.render(Object(r.jsx)(f.a,{store:ye,children:Object(r.jsx)(_e.a,{children:Object(r.jsx)(he,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.d5ba9b42.chunk.js.map