(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(18),l=a.n(r),c=a(4),s=a(5),i=a(8),u=a(6),h=a(9),m=(a(25),a(7)),d=a(15),b="https://reactnd-books-api.udacity.com",f=localStorage.token;f||(f=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:f},p=function(e,t){return fetch("".concat(b,"/books/").concat(e.id),{method:"PUT",headers:Object(d.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},E=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(d.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={searchedList:[]},a.onChangeHandle=function(e,t){a.props.onShelfChange(e.target.value,t)},a.onInputChange=function(e){E(e.target.value.trim()).then(function(e){e&&e.length>0?a.setState({searchedList:e}):a.setState({searchedList:[]})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(m.b,{to:"/MyReads-A-Book-Lending-App"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",onChange:this.onInputChange,placeholder:"Search by title or author"}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},this.state.searchedList.map(function(t){var a=e.props.books.find(function(e){return t.id===e.id});return t.shelf=void 0===a?"none":a.shelf,o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(t.imageLinks&&t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:t.shelf,onChange:function(a){return e.onChangeHandle(a,t)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},t.title),o.a.createElement("div",{className:"book-authors"},t.authors&&t.authors)))})))))}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("ol",{className:"books-grid"},this.props.bookList.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(a){return e.props.onShelfChange(a.target.value,t)},defaultValue:t.shelf},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},t.title),o.a.createElement("div",{className:"book-authors"},t.authors)))}))}}]),t}(n.Component),N=a(0),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.onShelfChange=function(e,t){t.shelf=e,p(t,e).then(function(){a.setState(function(e){return{books:a.state.books.some(function(e){return e.id===t.id})?e.books.map(function(e){return e.id===t.id?t:e}):e.books.concat([t]).map(function(e){return e.id===t.id?t:e})}})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(N.a,{exact:!0,path:"/MyReads-A-Book-Lending-App",render:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement(g,{onShelfChange:e.onShelfChange,bookList:e.state.books.filter(function(e){return"currentlyReading"===e.shelf})}))),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},o.a.createElement(g,{onShelfChange:e.onShelfChange,bookList:e.state.books.filter(function(e){return"wantToRead"===e.shelf})})))),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},o.a.createElement(g,{onShelfChange:e.onShelfChange,bookList:e.state.books.filter(function(e){return"read"===e.shelf})})))))),o.a.createElement("div",{className:"open-search"},o.a.createElement(m.b,{to:"/search"},o.a.createElement("button",null,"Add a book")))))}}),o.a.createElement(N.a,{exact:!0,path:"/search",render:function(t){t.history;return o.a.createElement(v,{books:e.state.books,onShelfChange:e.onShelfChange})}}))}}]),t}(o.a.Component);a(32);l.a.render(o.a.createElement(m.a,null,o.a.createElement(y,null)),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.8cd5c0be.chunk.js.map