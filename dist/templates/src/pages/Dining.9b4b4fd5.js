webpackJsonp([11],{107:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){e.map(function(e){"dining"==e.slug&&(u=e.yoast_meta.yoast_wpseo_title,d=e.yoast_meta.yoast_wpseo_metadesc,r=e.yoast_meta.yoast_wpseo_canonical)})}Object.defineProperty(t,"__esModule",{value:!0});var u,d,r,c=l(0),i=a(c),o=l(6),m=l(11),f=l(15),s=a(f);t.default=(0,o.withRouteData)(function(e){var t=e.stores,l=e.pages,a=e.siteRoot,c=e.title,f=e.metaDescription;return i.default.createElement("section",null,n(l),i.default.createElement(o.Head,null,i.default.createElement("body",{className:"blog"}),u?i.default.createElement("title",null,u):i.default.createElement("title",null,c),d?i.default.createElement("meta",{name:"description",content:d}):i.default.createElement("meta",{name:"description",content:f}),r?i.default.createElement("link",{rel:"canonical",href:r}):i.default.createElement("link",{rel:"canonical",href:a})),i.default.createElement(m.Container,null,i.default.createElement(m.Row,null,i.default.createElement(m.Col,{xs:"12"},i.default.createElement("h1",null,"Dining"))),i.default.createElement(m.Row,null,i.default.createElement("div",{className:"card-columns"},t.map(function(e){return i.default.createElement(m.Card,{key:e.id,className:"card-"+e.id},i.default.createElement(o.Link,{to:"/dining/"+e.slug+"/"}),i.default.createElement(m.CardBody,null,i.default.createElement(o.Link,{to:"/dining/"+e.slug+"/"},i.default.createElement(m.CardTitle,null,e.title.rendered?i.default.createElement("div",null,e.title.rendered):"")),i.default.createElement(m.CardText,null,(0,s.default)(e.acf.post_copy)),i.default.createElement(m.CardText,null,i.default.createElement("small",null,e.date))))})))))})}});