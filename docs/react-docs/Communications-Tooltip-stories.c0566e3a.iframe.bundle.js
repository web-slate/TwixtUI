"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[8570],{"./stories/Communications/Tooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bottom:()=>Bottom,Hidden:()=>Hidden,Left:()=>Left,Right:()=>Right,Top:()=>Top,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var react=__webpack_require__("./node_modules/react/index.js"),ToolTip=function(param){var children=param.children,content=param.content,position=param.position,show=param.show;if(!show||null==children)return null;var wrapperClassNames="absolute transform items-center",arrowClassNames="w-3 h-3 bg-gray-700 rotate-45 transform";switch(position){case"top":wrapperClassNames+=" bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex group-focus:flex flex-col",arrowClassNames+=" -translate-y-1/2";break;case"bottom":wrapperClassNames+=" top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex group-focus:flex flex-col",arrowClassNames+=" translate-y-1/2";break;case"left":wrapperClassNames+=" right-full top-1/2 -translate-y-1/2 mr-2 hidden group-hover:flex group-focus:flex",arrowClassNames+=" -translate-x-1/2";break;case"right":wrapperClassNames+=" left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:flex group-focus:flex",arrowClassNames+=" translate-x-1/2"}return wrapperClassNames+=show?" flex":" hidden",react.createElement("div",{className:"relative group"},children,react.createElement("div",{className:wrapperClassNames},["right","bottom"].includes(position)&&react.createElement("div",{className:arrowClassNames}),react.createElement("div",{className:"py-1 px-3 text-sm text-white bg-gray-700 rounded whitespace-nowrap"},content),["left","top"].includes(position)&&react.createElement("div",{className:arrowClassNames})))};const ToolTip_ToolTip=ToolTip;ToolTip.__docgenInfo={description:"",methods:[],displayName:"ToolTip"};const Tooltip_stories={title:"Communications/TwixtToolTip",component:ToolTip_ToolTip,parameters:{layout:"centered"},argTypes:{position:{control:{type:"radio",options:["top","bottom","left","right"]}},show:{control:"boolean"}}};var Template=function(args){return react.createElement(ToolTip_ToolTip,args)},Top=Template.bind({});Top.args={content:"Tooltip with dynamic content",position:"top",show:!0,children:react.createElement("a",{href:"#"},"Hover to show ToolTip on Top")};var Bottom=Template.bind({});Bottom.args={content:"Tooltip with dynamic content",position:"bottom",show:!0,children:react.createElement("a",{href:"#"},"Hover to show ToolTip on Bottom")};var Left=Template.bind({});Left.args={content:"Tooltip with dynamic content",position:"left",show:!0,children:react.createElement("a",{href:"#"},"Hover to show ToolTip on Left")};var Right=Template.bind({});Right.args={content:"Tooltip with dynamic content",position:"right",show:!0,children:react.createElement("a",{href:"#"},"Hover to show ToolTip on Right")};var Hidden=Template.bind({});Hidden.args={content:"Tooltip with dynamic content",position:"top",show:!1,children:react.createElement("a",{href:"#"},"No Hover its hidden")};const __namedExportsOrder=["Top","Bottom","Left","Right","Hidden"];Top.parameters={...Top.parameters,docs:{...Top.parameters?.docs,source:{originalSource:"args => <TwixtToolTip {...args} />",...Top.parameters?.docs?.source}}},Bottom.parameters={...Bottom.parameters,docs:{...Bottom.parameters?.docs,source:{originalSource:"args => <TwixtToolTip {...args} />",...Bottom.parameters?.docs?.source}}},Left.parameters={...Left.parameters,docs:{...Left.parameters?.docs,source:{originalSource:"args => <TwixtToolTip {...args} />",...Left.parameters?.docs?.source}}},Right.parameters={...Right.parameters,docs:{...Right.parameters?.docs,source:{originalSource:"args => <TwixtToolTip {...args} />",...Right.parameters?.docs?.source}}},Hidden.parameters={...Hidden.parameters,docs:{...Hidden.parameters?.docs,source:{originalSource:"args => <TwixtToolTip {...args} />",...Hidden.parameters?.docs?.source}}}}}]);