"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var c=n(439),i=n(689),r=n(791),a="Reviews_reviews__n3fdK",o="Reviews_reviewsList__hDAQA",s="Reviews_reviewItem__ax7Fo",u="Reviews_error__urRRw",h="Reviews_reviewImg__yYWpn",f="Reviews_reviewSubtitle__CYgai",l=n(565),v=n(184),_=function(){var e=(0,i.UO)().movieId,t=(0,r.useState)([]),n=(0,c.Z)(t,2),_=n[0],d=n[1],m=(0,r.useState)(""),p=(0,c.Z)(m,2),w=p[0],g=p[1];return(0,r.useEffect)((function(){l.Z.fetchMoviesReviews(e).then((function(e){return 0===e.results.length?Promise.reject(new Error("Sorry, we have no reviews for this movie.")):d(e.results)})).catch((function(e){return g(e.message)}))}),[e]),(0,v.jsxs)("div",{className:a,children:[(0,v.jsx)("ul",{className:o,children:_.map((function(e){var t=e.id,n=e.author,c=e.author_details,i=e.content,r=e.created_at;return(0,v.jsxs)("li",{className:s,children:[(0,v.jsx)("h3",{children:n}),(0,v.jsx)("img",{className:h,src:"".concat(l.Z.IMAGE_BASE_URL).concat(c.avatar_path),alt:n}),(0,v.jsx)("p",{children:i}),(0,v.jsxs)("p",{children:[(0,v.jsx)("span",{className:f,children:"Created at: "}),r]})]},t)}))}),w&&(0,v.jsx)("div",{className:u,children:w})]})}},565:function(e,t){var n="844acd5d93f95171cb079356b4956807",c="https://api.themoviedb.org/3/",i={fetchTrendsMovies:function(){return fetch("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(n)).then((function(e){if(e.ok)return e.json()}))},fetchMoviesByQuery:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(n,"&language=en-US&page=1&include_adult=false&query=").concat(e)).then((function(e){if(e.ok)return e.json()}))},fetchMoviesDetails:function(e){return fetch("".concat(c,"movie/").concat(e,"?api_key=").concat(n,"&language=en-US")).then((function(e){if(e.ok)return e.json()}))},fetchMovieCast:function(e){return fetch("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(n,"&language=en-US")).then((function(e){if(console.log(e),e.ok)return e.json()}))},fetchMoviesReviews:function(e){return fetch("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(n,"&language=en-US&page=1")).then((function(e){if(console.log(e),e.ok)return e.json()}))},IMAGE_BASE_URL:"https://image.tmdb.org/t/p/w200"};t.Z=i}}]);
//# sourceMappingURL=168.bd184343.chunk.js.map