"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[5792],{"./stories/CallsToAction/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BackgroundColor:()=>BackgroundColor,LeftIcon:()=>LeftIcon,LeftIconWithLabel:()=>LeftIconWithLabel,LeftIconWithSpinner:()=>LeftIconWithSpinner,RightIconWithSpinner:()=>RightIconWithSpinner,TextColor:()=>TextColor,__namedExportsOrder:()=>__namedExportsOrder,circularButton:()=>circularButton,clickButton:()=>clickButton,default:()=>__WEBPACK_DEFAULT_EXPORT__,hoverButton:()=>hoverButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_src_CallsToAction_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/src/CallsToAction/Button/index.js"),_react_src_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/src/Icon.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Call To Action/TwixtButton",component:_react_src_CallsToAction_Button__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{background:{type:{name:"string",required:!1},description:"Tailwind background class",defaultValue:"bg-indigo-500"},color:{type:{name:"string",required:!1},description:"Tailwind text color class",defaultValue:"text-white"},onClick:{action:"clicked",description:"Function to be called when the button is clicked"},children:{type:{name:"string",required:!0},description:"The content of the button",defaultValue:"Button"},leftIcon:{type:{name:"node",required:!1},description:"Icon JSX",defaultValue:null},rightIcon:{type:{name:"node",required:!1},description:"Icon JSX",defaultValue:null},label:{type:{name:"string",required:!0},description:"Button Label",defaultValue:""},hideLabel:{type:{name:"boolean",required:!1},description:"Button Label",defaultValue:!1},disabled:{type:{name:"boolean",required:!1},description:"Button Disabled",defaultValue:!1},showSpinner:{type:{name:"boolean",required:!1},description:"showSpinner in right side of the Button before right icon",defaultValue:!1},overwriteClass:{type:{name:"string",required:!1},description:"Overwrite Tailwind other classes",defaultValue:"px-4 py-2 rounded-md"}},docs:{description:{component:"This is a customizable button component used in various parts of the application. You can overwrite the class and define click actions."},source:{type:"code",language:"jsx"}}};var BackgroundColor={args:{label:"Changed Background color to Red",background:"bg-red-500"}},TextColor={args:{label:"Changed Text color to Black",background:"bg-green-500",color:"text-black"}},LeftIcon={args:{leftIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{type:"pin",variant:"filled",size:"12",color:"color"}),hideLabel:!0}},LeftIconWithLabel={args:{leftIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{type:"magnifier",variant:"filled",size:"12",color:"color"}),label:"Search"}},LeftIconWithSpinner={args:{leftIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{type:"pin",variant:"filled",size:"12",color:"color"}),hideLabel:!0,showSpinner:!0}},RightIconWithSpinner={args:{showSpinner:!0,label:"Generating...",rightIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{type:"chevronDown",variant:"filled",size:"12",color:"color"})}},clickButton=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_CallsToAction_Button__WEBPACK_IMPORTED_MODULE_1__.A,args)};clickButton.args={children:"Clickme",overwriteClass:"px-4 py-2 bg-indigo-500 text-white rounded-md",onClick:function(){alert("Button clicked")}},clickButton.parameters={docs:{storyDescription:"This is an example of the `TwixtButton` with custom text and an alert action on click."}};var hoverButton=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_CallsToAction_Button__WEBPACK_IMPORTED_MODULE_1__.A,args)};hoverButton.args={children:"Hover me",overwriteClass:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700",onClick:function(){alert("You have clicked the button")}},hoverButton.parameters={docs:{storyDescription:"This is an example of the `TwixtButton` with a hover effect. The button changes color when hovered."}};var circularButton=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_CallsToAction_Button__WEBPACK_IMPORTED_MODULE_1__.A,args)};circularButton.args={children:"+",overwriteClass:"w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center",onClick:function(){alert("Circular button clicked")}},circularButton.parameters={docs:{storyDescription:"This is an example of a circular `TwixtButton`. It is styled to be round with equal height and width."}};const __namedExportsOrder=["BackgroundColor","TextColor","LeftIcon","LeftIconWithLabel","LeftIconWithSpinner","RightIconWithSpinner","clickButton","hoverButton","circularButton"];BackgroundColor.parameters={...BackgroundColor.parameters,docs:{...BackgroundColor.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Changed Background color to Red",\n    background: "bg-red-500"\n  }\n}',...BackgroundColor.parameters?.docs?.source}}},TextColor.parameters={...TextColor.parameters,docs:{...TextColor.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Changed Text color to Black",\n    background: "bg-green-500",\n    color: "text-black"\n  }\n}',...TextColor.parameters?.docs?.source}}},LeftIcon.parameters={...LeftIcon.parameters,docs:{...LeftIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    leftIcon: <TwixtIcon type="pin" variant="filled" size="12" color="color" />,\n    hideLabel: true\n  }\n}',...LeftIcon.parameters?.docs?.source}}},LeftIconWithLabel.parameters={...LeftIconWithLabel.parameters,docs:{...LeftIconWithLabel.parameters?.docs,source:{originalSource:'{\n  args: {\n    leftIcon: <TwixtIcon type="magnifier" variant="filled" size="12" color="color" />,\n    label: \'Search\'\n  }\n}',...LeftIconWithLabel.parameters?.docs?.source}}},LeftIconWithSpinner.parameters={...LeftIconWithSpinner.parameters,docs:{...LeftIconWithSpinner.parameters?.docs,source:{originalSource:'{\n  args: {\n    leftIcon: <TwixtIcon type="pin" variant="filled" size="12" color="color" />,\n    hideLabel: true,\n    showSpinner: true\n  }\n}',...LeftIconWithSpinner.parameters?.docs?.source}}},RightIconWithSpinner.parameters={...RightIconWithSpinner.parameters,docs:{...RightIconWithSpinner.parameters?.docs,source:{originalSource:'{\n  args: {\n    showSpinner: true,\n    label: "Generating...",\n    rightIcon: <TwixtIcon type="chevronDown" variant="filled" size="12" color="color" />\n  }\n}',...RightIconWithSpinner.parameters?.docs?.source}}},clickButton.parameters={...clickButton.parameters,docs:{...clickButton.parameters?.docs,source:{originalSource:"args => <TwixtButton {...args} />",...clickButton.parameters?.docs?.source}}},hoverButton.parameters={...hoverButton.parameters,docs:{...hoverButton.parameters?.docs,source:{originalSource:"args => <TwixtButton {...args} />",...hoverButton.parameters?.docs?.source}}},circularButton.parameters={...circularButton.parameters,docs:{...circularButton.parameters?.docs,source:{originalSource:"args => <TwixtButton {...args} />",...circularButton.parameters?.docs?.source}}}},"../react/src/CallsToAction/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtButton});var react=__webpack_require__("./node_modules/react/index.js"),Spinner=__webpack_require__("../react/src/Communications/Spinner/index.js");function TwixtButton(param){var _param_background=param.background,background=void 0===_param_background?"bg-indigo-500":_param_background,_param_color=param.color,color=void 0===_param_color?"text-white":_param_color,children=param.children,_param_leftIcon=param.leftIcon,leftIcon=void 0===_param_leftIcon?null:_param_leftIcon,_param_rightIcon=param.rightIcon,rightIcon=void 0===_param_rightIcon?null:_param_rightIcon,label=param.label,_param_hideLabel=param.hideLabel,hideLabel=void 0!==_param_hideLabel&&_param_hideLabel,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_showSpinner=param.showSpinner,showSpinner=void 0!==_param_showSpinner&&_param_showSpinner,onClick=param.onClick,buttonClasses=param.overwriteClass||"px-4 py-2 rounded-md";return react.createElement("button",{onClick,className:"flex items-center justify-center space-x-2 ".concat(background," ").concat(color," ").concat(buttonClasses),disabled:showSpinner||disabled},children||react.createElement(react.Fragment,null,leftIcon&&react.createElement("span",null,leftIcon),!hideLabel&&react.createElement("span",null,label),showSpinner&&react.createElement(Spinner.A,{size:"sm",overwriteClass:"flex"}),rightIcon&&react.createElement("span",null,rightIcon)))}TwixtButton.__docgenInfo={description:"",methods:[],displayName:"TwixtButton",props:{background:{defaultValue:{value:"'bg-indigo-500'",computed:!1},required:!1},color:{defaultValue:{value:"'text-white'",computed:!1},required:!1},leftIcon:{defaultValue:{value:"null",computed:!1},required:!1},rightIcon:{defaultValue:{value:"null",computed:!1},required:!1},hideLabel:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showSpinner:{defaultValue:{value:"false",computed:!1},required:!1}}}},"../react/src/Communications/Spinner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Spinner_Spinner});var react=__webpack_require__("./node_modules/react/index.js"),Spinner=function(param){var _param_label=param.label,label=void 0===_param_label?"":_param_label,_param_size=param.size,size=void 0===_param_size?"md":_param_size,_param_fullPage=param.fullPage,fullPage=void 0!==_param_fullPage&&_param_fullPage,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,_param_bgColor=param.bgColor,sizeClasses={sm:"w-4 h-4 text-xs",md:"w-8 h-8 text-sm",lg:"w-16 h-16 text-base",xl:"w-24 h-24 text-lg"},spinnerSize=sizeClasses[size]||sizeClasses.md,fullPageClasses=fullPage?"fixed inset-0 flex flex-col items-center justify-center ".concat(void 0===_param_bgColor?"bg-gray-200 bg-opacity-70":_param_bgColor," z-50"):"";return react.createElement("div",{role:"status",className:"".concat(fullPageClasses," ").concat(overwriteClass)},react.createElement("svg",{"aria-hidden":"true",className:"inline ".concat(spinnerSize.split(" ")[0]," text-gray-200 animate-spin fill-blue-600"),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),react.createElement("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),label&&react.createElement("span",{className:"ml-2 mt-2 ".concat(spinnerSize.split(" ")[1])},label))};const Spinner_Spinner=Spinner;Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{label:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},fullPage:{defaultValue:{value:"false",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1},bgColor:{defaultValue:{value:"'bg-gray-200 bg-opacity-70'",computed:!1},required:!1}}}},"../react/src/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/node_modules/react-icons/fa/index.mjs"),react_icons_ci__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/node_modules/react-icons/ci/index.mjs"),react_icons_io5__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../react/node_modules/react-icons/io5/index.mjs"),react_icons_pi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/node_modules/react-icons/pi/index.mjs"),iconTypes={notification:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jNV,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.CzP},terminal:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.iuJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTerminalSlash},help:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.gZZ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaQuestionCircleSlash},magnifier:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.KSO,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.onj},hamburger:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.OXb,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Hcp},verticalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.H_v,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.H_v},horizontalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.HFM,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.HFM},pin:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.LBY,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaThumbtackSlash},delete:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.qbC,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.RCe},add:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.OiG,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Hw0},chevronUp:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Ucs,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Ucs},chevronDown:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Vr3,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Vr3},chevronLeft:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__._Jj,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__._Jj},chevronRight:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.X6T,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.X6T},note:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jie,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jie},pencil:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbp,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbp},refresh:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Swo,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.KP4},learn:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.vd0,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.hko},monitor:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Wqt,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaDesktopAlt},import:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.PiR,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.PiR},export:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbn,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbn},filter:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.YsJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFilterAlt},userAvatar:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.NBi},clipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.O6N,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.O6N},checkedClipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.aZA,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.aZA},headphone:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.tLl,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_2__.WLS},watch:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.CqA,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.V3h},speaker:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.e8f,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.lvJ},speakerSlashed:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.$3T,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.TVP},file:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Gp9,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.t69},lock:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.JhU,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.nQ7},share:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.eb3,outline:null},user:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.VGZ},userSlashed:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.vYY,outline:null},userGraduate:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.mFx,outline:null},userGroup:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaUserGroup,outline:null},office:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.ymh,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.IqM},mobile:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.rle,outline:null},mail:{filled:null,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_2__.ep0},settings:{filled:react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.ikl,outline:react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.GD}};function TwixtIcon(param){var _iconTypes_type,_iconTypes_type1,_param_type=param.type,type=void 0===_param_type?"notification":_param_type,_param_variant=param.variant,variant=void 0===_param_variant?"filled":_param_variant,_param_size=param.size,size=void 0===_param_size?12:_param_size,_param_color=param.color,color=void 0===_param_color?"black":_param_color;if(!iconTypes[type]||!(null===(_iconTypes_type=iconTypes[type])||void 0===_iconTypes_type?void 0:_iconTypes_type[variant]))return null;var IconComponent=(null===(_iconTypes_type1=iconTypes[type])||void 0===_iconTypes_type1?void 0:_iconTypes_type1[variant])||iconTypes.notification[filled];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{size,color})}TwixtIcon.__docgenInfo={description:"",methods:[],displayName:"TwixtIcon",props:{type:{defaultValue:{value:"'notification'",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},size:{defaultValue:{value:"12",computed:!1},required:!1},color:{defaultValue:{value:"'black'",computed:!1},required:!1}}}}}]);