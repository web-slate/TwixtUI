"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[2494],{"./stories/CallsToAction/FloatingButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomLeft:()=>BottomLeft,DefaultBottomRight:()=>DefaultBottomRight,MiddleCenter:()=>MiddleCenter,TopLeft:()=>TopLeft,TopRight:()=>TopRight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FloatingButton_stories});var react=__webpack_require__("./node_modules/react/index.js");function FloatingButton(param){var children=param.children,_param_vertical=param.vertical,vertical=void 0===_param_vertical?"bottom":_param_vertical,_param_horizontal=param.horizontal,horizontal=void 0===_param_horizontal?"right":_param_horizontal;return"bottom"===vertical&&"left"===horizontal?react.createElement("div",{className:"fixed bottom-4 left-4"},children):"top"===vertical&&"right"===horizontal?react.createElement("div",{className:"fixed top-4 right-4"},children):"top"===vertical&&"left"===horizontal?react.createElement("div",{className:"fixed top-4 left-4"},children):"middle"===vertical&&"center"===horizontal?react.createElement("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},children):react.createElement("div",{className:"fixed bottom-4 right-4"},children)}const FloatingButton_FloatingButton=FloatingButton;FloatingButton.__docgenInfo={description:"",methods:[],displayName:"FloatingButton",props:{vertical:{defaultValue:{value:"'bottom'",computed:!1},required:!1},horizontal:{defaultValue:{value:"'right'",computed:!1},required:!1}}};var Button=__webpack_require__("../react/src/CallsToAction/Button/index.js");const FloatingButton_stories={title:"Call To Action/TwixtFloatingButton",component:FloatingButton_FloatingButton,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{type:{name:"string",required:!0},description:"The content of the button",defaultValue:"Button"}},docs:{description:{component:"This is a customizable button group component used in various parts of the application. You can overwrite the class and define click actions."},source:{type:"code",language:"jsx"}}};var Template=function(args){return react.createElement(FloatingButton_FloatingButton,args)},DefaultBottomRight=Template.bind({});DefaultBottomRight.args={children:react.createElement(Button.A,{label:"Bottom Right (Default)"})};var BottomLeft=Template.bind({});BottomLeft.args={vertical:"bottom",horizontal:"left",children:react.createElement(Button.A,{label:"Bottom Left"})};var TopLeft=Template.bind({});TopLeft.args={vertical:"top",horizontal:"left",children:react.createElement(Button.A,{label:"Top Left"})};var TopRight=Template.bind({});TopRight.args={vertical:"top",horizontal:"right",children:react.createElement(Button.A,{label:"Top Right"})};var MiddleCenter=Template.bind({});MiddleCenter.args={vertical:"middle",horizontal:"center",children:react.createElement(Button.A,{label:"Middle Center"})};const __namedExportsOrder=["DefaultBottomRight","BottomLeft","TopLeft","TopRight","MiddleCenter"];DefaultBottomRight.parameters={...DefaultBottomRight.parameters,docs:{...DefaultBottomRight.parameters?.docs,source:{originalSource:"args => <TwixtFloatingButton {...args} />",...DefaultBottomRight.parameters?.docs?.source}}},BottomLeft.parameters={...BottomLeft.parameters,docs:{...BottomLeft.parameters?.docs,source:{originalSource:"args => <TwixtFloatingButton {...args} />",...BottomLeft.parameters?.docs?.source}}},TopLeft.parameters={...TopLeft.parameters,docs:{...TopLeft.parameters?.docs,source:{originalSource:"args => <TwixtFloatingButton {...args} />",...TopLeft.parameters?.docs?.source}}},TopRight.parameters={...TopRight.parameters,docs:{...TopRight.parameters?.docs,source:{originalSource:"args => <TwixtFloatingButton {...args} />",...TopRight.parameters?.docs?.source}}},MiddleCenter.parameters={...MiddleCenter.parameters,docs:{...MiddleCenter.parameters?.docs,source:{originalSource:"args => <TwixtFloatingButton {...args} />",...MiddleCenter.parameters?.docs?.source}}}},"../react/src/CallsToAction/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtButton});var react=__webpack_require__("./node_modules/react/index.js"),Spinner=__webpack_require__("../react/src/Communications/Spinner/index.js");function TwixtButton(param){var _param_id=param.id,id=void 0===_param_id?"":_param_id,_param_type=param.type,type=void 0===_param_type?"button":_param_type,_param_variant=param.variant,variant=void 0===_param_variant?"default":_param_variant,_param_background=param.background,background=void 0===_param_background?"":_param_background,_param_color=param.color,color=void 0===_param_color?"":_param_color,children=param.children,_param_leftIcon=param.leftIcon,leftIcon=void 0===_param_leftIcon?null:_param_leftIcon,_param_rightIcon=param.rightIcon,rightIcon=void 0===_param_rightIcon?null:_param_rightIcon,label=param.label,_param_hideLabel=param.hideLabel,hideLabel=void 0!==_param_hideLabel&&_param_hideLabel,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_showSpinner=param.showSpinner,showSpinner=void 0!==_param_showSpinner&&_param_showSpinner,onClick=param.onClick,overwriteClass=param.overwriteClass,_getButtonStyles=function(){switch(variant){case"primary":return{background:"bg-blue-700",color:"text-white",hover:"hover:bg-blue-800",focus:"focus:ring-blue-300",dark:"dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"};case"secondary":return{background:"bg-gray-700",color:"text-white",hover:"hover:bg-gray-800",focus:"focus:ring-gray-300",dark:"dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"};case"transparent":return{background:"bg-transparent",color:"text-gray-700",placeholder:"placeholder-gray-500",border:"border border-gray-300",hover:"hover:border-gray-400",focus:"focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent",dark:"dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:hover:border-gray-500 dark:focus:ring-gray-800"};default:return{background:"bg-gray-200",color:"text-black",hover:"hover:bg-gray-300",focus:"focus:ring-gray-300",dark:"dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600"}}}(),bgClass=_getButtonStyles.background,textClass=_getButtonStyles.color,hoverClass=_getButtonStyles.hover,focusClass=_getButtonStyles.focus,darkClass=_getButtonStyles.dark,buttonClasses=overwriteClass||"font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ".concat(bgClass," ").concat(textClass," ").concat(hoverClass," ").concat(focusClass," ").concat(darkClass);return react.createElement("button",{id:"twixt-button-".concat(id),type,onClick,className:"flex items-center justify-center space-x-2 ".concat(background||bgClass," ").concat(color||textClass," ").concat(buttonClasses," ").concat(disabled?"opacity-50 cursor-not-allowed":""),disabled:showSpinner||disabled},children||react.createElement(react.Fragment,null,leftIcon&&react.createElement("span",null,leftIcon),!hideLabel&&react.createElement("span",null,label),showSpinner&&react.createElement(Spinner.A,{size:"sm",overwriteClass:"flex"}),rightIcon&&react.createElement("span",null,rightIcon)))}TwixtButton.__docgenInfo={description:"",methods:[],displayName:"TwixtButton",props:{id:{defaultValue:{value:"''",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},background:{defaultValue:{value:"''",computed:!1},required:!1},color:{defaultValue:{value:"''",computed:!1},required:!1},leftIcon:{defaultValue:{value:"null",computed:!1},required:!1},rightIcon:{defaultValue:{value:"null",computed:!1},required:!1},hideLabel:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showSpinner:{defaultValue:{value:"false",computed:!1},required:!1}}}},"../react/src/Communications/Spinner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Spinner_Spinner});var react=__webpack_require__("./node_modules/react/index.js"),Spinner=function(param){var _param_label=param.label,label=void 0===_param_label?"":_param_label,_param_size=param.size,size=void 0===_param_size?"md":_param_size,_param_fullPage=param.fullPage,fullPage=void 0!==_param_fullPage&&_param_fullPage,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,_param_bgColor=param.bgColor,sizeClasses={sm:"w-4 h-4 text-xs",md:"w-8 h-8 text-sm",lg:"w-16 h-16 text-base",xl:"w-24 h-24 text-lg"},spinnerSize=sizeClasses[size]||sizeClasses.md,fullPageClasses=fullPage?"fixed inset-0 flex flex-col items-center justify-center ".concat(void 0===_param_bgColor?"bg-gray-200 bg-opacity-70":_param_bgColor," z-50"):"";return react.createElement("div",{role:"status",className:"".concat(fullPageClasses," ").concat(overwriteClass)},react.createElement("svg",{"aria-hidden":"true",className:"inline ".concat(spinnerSize.split(" ")[0]," text-gray-200 animate-spin fill-blue-600"),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),react.createElement("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),label&&react.createElement("span",{className:"ml-2 mt-2 ".concat(spinnerSize.split(" ")[1])},label))};const Spinner_Spinner=Spinner;Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{label:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},fullPage:{defaultValue:{value:"false",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1},bgColor:{defaultValue:{value:"'bg-gray-200 bg-opacity-70'",computed:!1},required:!1}}}}}]);