var P=Object.defineProperty,I=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var _=(o,t,n)=>t in o?P(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,i=(o,t)=>{for(var n in t||(t={}))x.call(t,n)&&_(o,n,t[n]);if(m)for(var n of m(t))v.call(t,n)&&_(o,n,t[n]);return o},u=(o,t)=>I(o,A(t));var f=(o,t)=>{var n={};for(var r in o)x.call(o,r)&&t.indexOf(r)<0&&(n[r]=o[r]);if(o!=null&&m)for(var r of m(o))t.indexOf(r)<0&&v.call(o,r)&&(n[r]=o[r]);return n};import{c as e,A as D,M as F,j as a,a as c,F as V,b as w,d as R,e as $,f as U,g as X,l as W,h as q,i as G,k as K,m as J,n as Q,o as Y,p as Z,q as ee,r as oe,s as te,t as re}from"./vendor.e4ea7480.js";const ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}};ne();const ae={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:ae}),le="/assets/code-brackets.9ef6443e.svg",ie="/assets/colors.ac9401f3.svg",ce="/assets/comments.f15a6837.svg",de="/assets/direction.94a9917f.svg",ge="/assets/flow.275142c6.svg",pe="/assets/plugin.57148314.svg",me="/assets/repo.fb4ece47.svg",ue="/assets/stackalt.2ad81543.svg";const he={},fe="wrapper";function L(n){var r=n,{components:o}=r,t=f(r,["components"]);return e(fe,u(i(i({},he),t),{components:o,mdxType:"MDXLayout"}),e(F,{title:"Example/Introduction",mdxType:"Meta"}),e("style",null,`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
`),e("h1",null,"Welcome to Storybook"),e("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,e("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),e("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,e("inlineCode",{parentName:"p"},"src/stories"),` directory to learn how they work.
We recommend building UIs with a `,e("a",{parentName:"p",href:"https://componentdriven.org"},e("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),e("div",{className:"subheading"},"Configure"),e("div",{className:"link-list"},e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},e("img",{src:pe,alt:"plugin"}),e("span",null,e("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},e("img",{src:ue,alt:"Build"}),e("span",null,e("strong",null,"Build configuration"),"How to customize webpack and Babel")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},e("img",{src:ie,alt:"colors"}),e("span",null,e("strong",null,"Styling"),"How to load and configure CSS libraries")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},e("img",{src:ge,alt:"flow"}),e("span",null,e("strong",null,"Data"),"Providers and mocking for data libraries"))),e("div",{className:"subheading"},"Learn"),e("div",{className:"link-list"},e("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},e("img",{src:me,alt:"repo"}),e("span",null,e("strong",null,"Storybook documentation"),"Configure, customize, and extend")),e("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},e("img",{src:de,alt:"direction"}),e("span",null,e("strong",null,"In-depth guides"),"Best practices from leading teams")),e("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},e("img",{src:le,alt:"code"}),e("span",null,e("strong",null,"GitHub project"),"View the source and add issues")),e("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},e("img",{src:ce,alt:"comments"}),e("span",null,e("strong",null,"Discord chat"),"Chat with maintainers and the community"))),e("div",{className:"tip-wrapper"},e("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",e("code",null,"src/stories/Introduction.stories.mdx")))}L.isMDXComponent=!0;const S=()=>{throw new Error("Docs-only story")};S.parameters={docsOnly:!0};const g={title:"Example/Introduction",includeStories:["__page"]},ye={};g.parameters=g.parameters||{};g.parameters.docs=u(i({},g.parameters.docs||{}),{page:()=>e(D,{mdxStoryNameToKey:ye,mdxComponentAnnotations:g},e(L,null))});var be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:S,default:g});const p=l=>{var d=l,{primary:o=!1,size:t="medium",backgroundColor:n,label:r}=d,s=f(d,["primary","size","backgroundColor","label"]);const H=o?"storybook-button--primary":"storybook-button--secondary";return a("button",u(i({type:"button",className:["storybook-button",`storybook-button--${t}`,H].join(" "),style:{backgroundColor:n}},s),{children:r}))};var ke={parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},large:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},small:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:p,argTypes:{backgroundColor:{control:"color"}}};const h=o=>a(p,i({},o)),B=h.bind({});B.args={primary:!0,label:"Button"};const T=h.bind({});T.args={label:"Button"};const M=h.bind({});M.args={size:"large",label:"Button"};const E=h.bind({});E.args={size:"small",label:"Button"};const xe=["Primary","Secondary","Large","Small"];var ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ke,Primary:B,Secondary:T,Large:M,Small:E,__namedExportsOrder:xe});const y=({user:o,onLogin:t,onLogout:n,onCreateAccount:r})=>a("header",{children:c("div",{className:"wrapper",children:[c("div",{children:[a("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:c("g",{fill:"none",fillRule:"evenodd",children:[a("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),a("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),a("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),a("h1",{children:"Acme"})]}),a("div",{children:o?a(p,{size:"small",onClick:n,label:"Log out"}):c(V,{children:[a(p,{size:"small",onClick:t,label:"Log in"}),a(p,{primary:!0,size:"small",onClick:r,label:"Sign up"})]})})]})});var _e={parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{"logged-in":{startLoc:{col:48,line:11},endLoc:{col:78,line:11},startBody:{col:48,line:11},endBody:{col:78,line:11}},"logged-out":{startLoc:{col:48,line:11},endLoc:{col:78,line:11},startBody:{col:48,line:11},endBody:{col:78,line:11}}}}},title:"Example/Header",component:y};const C=o=>a(y,i({},o)),b=C.bind({});b.args={user:{}};const k=C.bind({});k.args={};const we=["LoggedIn","LoggedOut"];var Le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e,LoggedIn:b,LoggedOut:k,__namedExportsOrder:we});const O=({user:o,onLogin:t,onLogout:n,onCreateAccount:r})=>c("article",{children:[a(y,{user:o,onLogin:t,onLogout:n,onCreateAccount:r}),c("section",{children:[a("h2",{children:"Pages in Storybook"}),c("p",{children:["We recommend building UIs with a"," ",a("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:a("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),a("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),c("ul",{children:[a("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),a("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),c("p",{children:["Get a guided tutorial on component-driven development at"," ",a("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",a("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),c("div",{className:"tip-wrapper",children:[a("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",a("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:a("g",{fill:"none",fillRule:"evenodd",children:a("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]});var Se={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

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
`,locationsMap:{"logged-in":{startLoc:{col:46,line:12},endLoc:{col:74,line:12},startBody:{col:46,line:12},endBody:{col:74,line:12}},"logged-out":{startLoc:{col:46,line:12},endLoc:{col:74,line:12},startBody:{col:46,line:12},endBody:{col:74,line:12}}}}},title:"Example/Page",component:O};const z=o=>a(O,i({},o)),j=z.bind({});j.args=i({},b.args);const N=z.bind({});N.args=i({},k.args);const Be=["LoggedIn","LoggedOut"];var Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Se,LoggedIn:j,LoggedOut:N,__namedExportsOrder:Be});const Me=[G,K,J,Q,Y,Z,ee,oe,te,re,se];Me.forEach(o=>{Object.keys(o).forEach(t=>{const n=o[t];switch(t){case"args":case"argTypes":return W.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(r=>X(r,!1));case"loaders":return n.forEach(r=>U(r,!1));case"parameters":return w(i({},n),!1);case"argTypesEnhancers":return n.forEach(r=>$(r));case"argsEnhancers":return n.forEach(r=>R(r));case"globals":case"globalTypes":{const r={};return r[t]=n,w(r,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});q(()=>[be,ve,Le,Te].filter(o=>o.default),{hot:!1},!1);
//# sourceMappingURL=iframe.db48b944.js.map
