webpackJsonp([9],{103:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,u,r,d=l(0),c=a(d),m=l(6),f=l(11),i=l(15);a(i);t.default=(0,m.withRouteData)(function(e){var t=e.sales,l=e.siteRoot,a=e.title,d=e.metaDescription;e.pages;return c.default.createElement("section",null,c.default.createElement(m.Head,null,c.default.createElement("body",{className:"Sales"}),n?c.default.createElement("title",null,n):c.default.createElement("title",null,a),u?c.default.createElement("meta",{name:"description",content:u}):c.default.createElement("meta",{name:"description",content:d}),r?c.default.createElement("link",{rel:"canonical",href:r}):c.default.createElement("link",{rel:"canonical",href:l})),c.default.createElement(f.Container,null,c.default.createElement(f.Row,null,c.default.createElement(f.Col,{xs:"12"},c.default.createElement("h1",null,"Sales"))),c.default.createElement(f.Row,null,c.default.createElement("div",{className:"card-columns"},t.map(function(e){return c.default.createElement(f.Card,{key:e.id,className:"card-"+e.id},c.default.createElement(m.Link,{to:"/sales/"+e.slug+"/"}),c.default.createElement(f.CardBody,null,c.default.createElement(m.Link,{to:"/sales/"+e.slug+"/"},c.default.createElement(f.CardTitle,null,e.title.rendered?c.default.createElement("div",null,e.title.rendered):"")),c.default.createElement(f.CardText,null,c.default.createElement("small",null,e.date))))})))))})}});