"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a=n(439),c=n(791),s=n(689),o=n(565),r="Cast_cast__m5y0R",i="Cast_castItem__-Jcfe",u="Cast_error__hQWWB",l="Cast_castList__ARoWn",h="Cast_castSubtitle__5Sj6E",f="Cast_castImg__T4WbF",m=n(869),p=n(184),_=function(){var e=(0,s.UO)().movieId,t=(0,c.useState)(null),n=(0,a.Z)(t,2),_=n[0],d=n[1],g=(0,c.useState)(""),v=(0,a.Z)(g,2),j=v[0],k=v[1];return(0,c.useEffect)((function(){o.Z.fetchMovieCast(e).then((function(e){return e?d(e.cast):Promise.reject(new Error("Sorry, we have no casts for this movie."))})).catch((function(e){return k(e.message)}))}),[e]),(0,p.jsxs)("div",{className:r,children:[(0,p.jsx)("ul",{className:l,children:_&&_.map((function(e){var t=e.id,n=e.profile_path,a=e.name,c=e.character,s=e.popularity;return(0,p.jsxs)("li",{className:i,children:[n?(0,p.jsx)("img",{className:f,src:"".concat(o.Z.IMAGE_BASE_URL).concat(n),alt:"".concat(a)}):(0,p.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0d/UserAvatar.svg",alt:"default",width:"60"}),(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{className:h,children:"Actor name: "}),a||(0,p.jsx)(m.Z,{message:"No name"})]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{className:h,children:"Character: "}),c||(0,p.jsx)(m.Z,{message:"No character"})]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{className:h,children:"Popularity: "}),s||(0,p.jsx)(m.Z,{message:"No popularity"})]})]},t)}))}),j&&(0,p.jsx)("div",{className:u,children:j})]})}},869:function(e,t,n){n.d(t,{Z:function(){return s}});var a="NoInfo_noinfo__L-a7y",c=n(184),s=function(e){var t=e.message;return(0,c.jsx)("span",{className:a,children:t})}},565:function(e,t){var n="844acd5d93f95171cb079356b4956807",a="https://api.themoviedb.org/3/",c={fetchTrendsMovies:function(){return fetch("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(n)).then((function(e){if(e.ok)return e.json()}))},fetchMoviesByQuery:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(n,"&language=en-US&page=1&include_adult=false&query=").concat(e)).then((function(e){if(e.ok)return e.json()}))},fetchMoviesDetails:function(e){return fetch("".concat(a,"movie/").concat(e,"?api_key=").concat(n,"&language=en-US")).then((function(e){if(e.ok)return e.json()}))},fetchMovieCast:function(e){return fetch("".concat(a,"movie/").concat(e,"/credits?api_key=").concat(n,"&language=en-US")).then((function(e){if(console.log(e),e.ok)return e.json()}))},fetchMoviesReviews:function(e){return fetch("".concat(a,"movie/").concat(e,"/reviews?api_key=").concat(n,"&language=en-US&page=1")).then((function(e){if(console.log(e),e.ok)return e.json()}))},IMAGE_BASE_URL:"https://image.tmdb.org/t/p/w200"};t.Z=c}}]);
//# sourceMappingURL=76.e70ffb56.chunk.js.map