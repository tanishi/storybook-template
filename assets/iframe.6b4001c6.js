var z=Object.defineProperty,P=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var b=(e,o,t)=>o in e?z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,i=(e,o)=>{for(var t in o||(o={}))h.call(o,t)&&b(e,t,o[t]);if(g)for(var t of g(o))y.call(o,t)&&b(e,t,o[t]);return e},L=(e,o)=>P(e,j(o));var _=(e,o)=>{var t={};for(var n in e)h.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&g)for(var n of g(e))o.indexOf(n)<0&&y.call(e,n)&&(t[n]=e[n]);return t};import{j as r,a as l,F as C,b as v,c as I,d as A,e as V,f as $,l as N,g as R,h as F,i as D,k as q,m as U,n as G,o as J,p as K,q as W,r as Y,s as Z}from"./vendor.fa427329.js";const Q=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}};Q();const X={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:X});const d=s=>{var c=s,{primary:e=!1,size:o="medium",backgroundColor:t,label:n}=c,a=_(c,["primary","size","backgroundColor","label"]);const H=e?"storybook-button--primary":"storybook-button--secondary";return r("button",L(i({type:"button",className:["storybook-button",`storybook-button--${o}`,H].join(" "),style:{backgroundColor:t}},a),{children:n}))};var oe={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},large:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},small:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:d,argTypes:{backgroundColor:{control:"color"}}};const p=e=>r(d,i({},e)),S=p.bind({});S.args={primary:!0,label:"Button"};const B=p.bind({});B.args={label:"Button"};const x=p.bind({});x.args={size:"large",label:"Button"};const w=p.bind({});w.args={size:"small",label:"Button"};const te=["Primary","Secondary","Large","Small"];var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe,Primary:S,Secondary:B,Large:x,Small:w,__namedExportsOrder:te});const m=({user:e,onLogin:o,onLogout:t,onCreateAccount:n})=>r("header",{children:l("div",{className:"wrapper",children:[l("div",{children:[r("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:l("g",{fill:"none",fillRule:"evenodd",children:[r("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),r("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),r("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),r("h1",{children:"Acme"})]}),r("div",{children:e?r(d,{size:"small",onClick:t,label:"Log out"}):l(C,{children:[r(d,{size:"small",onClick:o,label:"Log in"}),r(d,{primary:!0,size:"small",onClick:n,label:"Sign up"})]})})]})});var re={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:48,line:11},endLoc:{col:78,line:11},startBody:{col:48,line:11},endBody:{col:78,line:11}},"logged-out":{startLoc:{col:48,line:11},endLoc:{col:78,line:11},startBody:{col:48,line:11},endBody:{col:78,line:11}}}}},title:"Example/Header",component:m};const k=e=>r(m,i({},e)),u=k.bind({});u.args={user:{}};const f=k.bind({});f.args={};const ae=["LoggedIn","LoggedOut"];var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re,LoggedIn:u,LoggedOut:f,__namedExportsOrder:ae});const T=({user:e,onLogin:o,onLogout:t,onCreateAccount:n})=>l("article",{children:[r(m,{user:e,onLogin:o,onLogout:t,onCreateAccount:n}),l("section",{children:[r("h2",{children:"Pages in Storybook"}),l("p",{children:["We recommend building UIs with a"," ",r("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:r("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),r("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),l("ul",{children:[r("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),r("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),l("p",{children:["Get a guided tutorial on component-driven development at"," ",r("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",r("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),l("div",{className:"tip-wrapper",children:[r("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",r("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:r("g",{fill:"none",fillRule:"evenodd",children:r("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]});var le={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';
import * as HeaderStories from '../Header/Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
`,locationsMap:{"logged-in":{startLoc:{col:46,line:12},endLoc:{col:74,line:12},startBody:{col:46,line:12},endBody:{col:74,line:12}},"logged-out":{startLoc:{col:46,line:12},endLoc:{col:74,line:12},startBody:{col:46,line:12},endBody:{col:74,line:12}}}}},title:"Example/Page",component:T};const O=e=>r(T,i({},e)),M=O.bind({});M.args=i({},u.args);const E=O.bind({});E.args=i({},f.args);const ie=["LoggedIn","LoggedOut"];var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le,LoggedIn:M,LoggedOut:E,__namedExportsOrder:ie});const de=[F,D,q,U,G,J,K,W,Y,Z,ee];de.forEach(e=>{Object.keys(e).forEach(o=>{const t=e[o];switch(o){case"args":case"argTypes":return N.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(t));case"decorators":return t.forEach(n=>$(n,!1));case"loaders":return t.forEach(n=>V(n,!1));case"parameters":return v(i({},t),!1);case"argTypesEnhancers":return t.forEach(n=>A(n));case"argsEnhancers":return t.forEach(n=>I(n));case"globals":case"globalTypes":{const n={};return n[o]=t,v(n,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});R(()=>[ne,se,ce].filter(e=>e.default),{hot:!1},!1);
//# sourceMappingURL=iframe.6b4001c6.js.map
