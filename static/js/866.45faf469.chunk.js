"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[866],{743:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(87),i="MoviesItem_movieListItem__TPZf8",r="MoviesItem_movieInfo__ccfLI",a=n(184),c=function(e){var t=e.movie,n=e.location;return(0,a.jsx)("li",{className:i,children:(0,a.jsx)(o.rU,{to:"".concat(t.id),state:{from:n},children:(0,a.jsxs)("p",{className:r,children:[t.original_title,(0,a.jsxs)("span",{children:["Raiting: ",t.vote_average]})]})})})},s="MoviesList_movieList__8BnEE",u=function(e){var t=e.movies,n=e.location;return(0,a.jsx)("ul",{className:s,children:t.map((function(e){return(0,a.jsx)(c,{movie:e,location:n},e.id)}))})}},866:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var o=n(433),i=n(439),r=n(791),a=n(689),c=n(87),s=n(686),u=n.n(s),f="SearchForm_form__o80os",l="SearchForm_inputSearch__9idWV",m="SearchForm_searchBtn__rp2a7",h=n(184),v=function(e){var t,n=e.onSubmit,o=(0,c.lr)(),r=(0,i.Z)(o,2),a=r[0],s=r[1],v=null!==(t=a.get("name"))&&void 0!==t?t:"";return(0,h.jsxs)("form",{className:f,onSubmit:function(e){if(e.preventDefault(),""===v.trim())return s({}),u().Notify.warning("Please, type what images do you want to find =)");n(a)},children:[(0,h.jsx)("input",{className:l,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:v,onChange:function(e){if(""===e.target.value)return s({});s({name:e.target.value})}}),(0,h.jsx)("button",{className:m,type:"submit",children:"Serach"})]})},p=n(743),g=n(7),_=n.n(g),d=function(e){var t=e.message,n=e.type;return u().Notify[n](t)};d.propTypes={message:_().string.isRequired,type:_().string.isRequired};var y=d,j=n(565),S=function(){var e=(0,r.useState)(""),t=(0,i.Z)(e,2),n=t[0],c=t[1],s=(0,r.useState)([]),u=(0,i.Z)(s,2),f=u[0],l=u[1],m=(0,r.useState)(""),g=(0,i.Z)(m,2),_=g[0],d=g[1],S=(0,a.TH)();return(0,r.useEffect)((function(){j.Z.fetchMoviesByQuery(n).then((function(e){return 0===e.results?Promise.reject(new Error("Sorry, we have no movies.")):l((0,o.Z)(e.results))})).catch((function(e){return d(e.message)}))}),[n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{onSubmit:function(e){c(e.get("name"))}}),(0,h.jsx)(p.Z,{movies:f,location:S}),_&&(0,h.jsx)(y,{message:_,type:"failure"})]})}},565:function(e,t){var n="844acd5d93f95171cb079356b4956807",o="https://api.themoviedb.org/3/",i={fetchTrendsMovies:function(){return fetch("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(n)).then((function(e){if(e.ok)return e.json()}))},fetchMoviesByQuery:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(n,"&language=en-US&page=1&include_adult=false&query=").concat(e)).then((function(e){if(e.ok)return e.json()}))},fetchMoviesDetails:function(e){return fetch("".concat(o,"movie/").concat(e,"?api_key=").concat(n,"&language=en-US")).then((function(e){if(e.ok)return e.json()}))},fetchMovieCast:function(e){return fetch("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(n,"&language=en-US")).then((function(e){if(console.log(e),e.ok)return e.json()}))},fetchMoviesReviews:function(e){return fetch("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(n,"&language=en-US&page=1")).then((function(e){if(console.log(e),e.ok)return e.json()}))},IMAGE_BASE_URL:"https://image.tmdb.org/t/p/w200"};t.Z=i}}]);
//# sourceMappingURL=866.45faf469.chunk.js.map