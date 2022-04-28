(this["webpackJsonpsolar-system"]=this["webpackJsonpsolar-system"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(7),s=n.n(i),o=n(2),c=n(3),u=n(5),d=n(4),m=n(0),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)("header",{children:Object(m.jsx)("h1",{children:" Sistema Solar "})})}}]),n}(r.a.Component),p=j,y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.headline;return Object(m.jsx)("h2",{children:e})}}]),n}(a.Component),b=y,l=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.planetName,t=this.props.planetImage;return Object(m.jsxs)("div",{"data-testid":"planet-card",children:[Object(m.jsxs)("span",{"data-testid":"planet-name",children:[" ",e]}),Object(m.jsx)("img",{src:t,Alt:"Planeta ".concat(e)})]})}}]),n}(a.Component),O=l,h=[{name:"Merc\xfario",image:n.p+"static/media/Mercurio.a7105a56.png"},{name:"V\xeanus",image:n.p+"static/media/Venus.397fdee2.png"},{name:"Terra",image:n.p+"static/media/Terra.990ac782.png"},{name:"Marte",image:n.p+"static/media/Marte.6cae79d3.png"},{name:"J\xfapiter",image:n.p+"static/media/Jupiter.529cdbe0.png"},{name:"Saturno",image:n.p+"static/media/Saturno.00b7295f.png"},{name:"Urano",image:n.p+"static/media/Urano.607cb33c.png"},{name:"Netuno",image:n.p+"static/media/Netuno.48cf14b7.png"}],f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{"data-testid":"solar-system"}),Object(m.jsx)(b,{headline:"Planetas"}),h.map((function(e){return Object(m.jsx)(O,{planetName:e.name,planetImage:e.image},e.name)}))]})}}]),n}(r.a.Component),g=f,x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.year,a=e.country,r=e.destination;return Object(m.jsxs)("div",{"data-testid":"mission-card",children:[Object(m.jsxs)("span",{"data-testid":"mission-name",children:[" ",t," "]}),Object(m.jsxs)("span",{"data-testid":"mission-year",children:[" ",n," "]}),Object(m.jsxs)("span",{"data-testid":"mission-country",children:[" ",a," "]}),Object(m.jsxs)("span",{"data-testid":"mission-destination",children:[" ",r," "]})]})}}]),n}(a.Component),v=x,M="Estados Unidos",E="URSS",S=[{name:"Apollo 11",year:"1960",country:M,destination:"Lua"},{name:"Voyager 1",year:"1977",country:M,destination:"Espa\xe7o interestelar"},{name:"Mars Pathfinder",year:"1996",country:M,destination:"Marte"},{name:"Esta\xe7\xe3o Internacional Espacial",year:"1998",country:"Estados Unidos e R\xfassia",destination:"\xd3rbita terrestre"},{name:"Kepler",year:"2009",country:M,destination:"Espa\xe7o interestelar"},{name:"Cassini-Huygens",year:"2009",country:"Estados Unidos e Uni\xe3o Europeia",destination:"Saturno"},{name:"Mariner 2",year:"1962",country:M,destination:"V\xeanus"},{name:"Venera 4",year:"1967",country:E,destination:"V\xeanus"},{name:"Mariner 5",year:"1967",country:M,destination:"V\xeanus"},{name:"Mariner 10",year:"1975",country:M,destination:"V\xeanus"},{name:"Venera 16",year:"1983",country:E,destination:"V\xeanus"},{name:"MESSENGER",year:"2004",country:M,destination:"Merc\xfario"},{name:"Genesis",year:"2001",country:M,destination:"Terra"},{name:"2001 Mars Odyssey",year:"2001",country:M,destination:"Marte"},{name:"Mars Surveyor 98 Lander",year:"1999",country:M,destination:"Marte"},{name:"Nozomi (Planeta B)",year:"1998",country:"Jap\xe3o",destination:"Marte"},{name:"Fobos 1",year:"1988",country:E,destination:"Marte"},{name:"Fobos 2",year:"1988",country:E,destination:"Marte"},{name:"Galileo",year:"1989",country:M,destination:"J\xfapiter"},{name:"Cassini/Huygens",year:"1997",country:"Estados Unidos e Europa",destination:"Saturno"}],V=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{"data-testid":"missions"}),Object(m.jsx)(b,{headline:"Miss\xf5es"}),S.map((function(e){return Object(m.jsx)(v,{name:e.name,year:e.year,country:e.country,destination:e.destination},e.name)}))]})}}]),n}(a.Component),k=V,C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsx)(g,{}),Object(m.jsx)(k,{})]})}}]),n}(r.a.Component),U=C;s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.525fa0fe.chunk.js.map