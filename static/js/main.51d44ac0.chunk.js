(this["webpackJsonproll-dice"]=this["webpackJsonproll-dice"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(8),s=n.n(o),l=(n(14),n(1)),r=n(2),c=n(5),u=n(4),h=n(3),m=n(6),d=(n(15),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return a.a.createElement("i",{className:"Die fas fa-dice-".concat(this.props.face," ").concat(this.props.rolling&&"shaking")})}}]),t}(i.Component)),f=(n(16),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={num1:"one",num2:"one",isRolling:!1},n.roll=n.roll.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"roll",value:function(){var e=this;this.setState({num1:this.props.sides[Math.floor(Math.random()*this.props.sides.length)],num2:this.props.sides[Math.floor(Math.random()*this.props.sides.length)],isRolling:!0}),setTimeout((function(){return e.setState({isRolling:!1})}),1e3)}},{key:"render",value:function(){return a.a.createElement("div",{className:"RollDice"},a.a.createElement("div",{className:"RollDice-container"},a.a.createElement(d,{face:this.state.num1,rolling:this.state.isRolling}),a.a.createElement(d,{face:this.state.num2,rolling:this.state.isRolling})),a.a.createElement("button",{onClick:this.roll,disabled:this.state.isRolling},this.state.isRolling?"Rolling...":"Roll Dice"))}}]),t}(i.Component));f.defaultProps={sides:["one","two","three","four","five","six"]};var p=f;n(17);var g=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.51d44ac0.chunk.js.map