"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[1991],{"./stories/Input/TimePicker.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RangeSelection:()=>RangeSelection,SingleSelection:()=>SingleSelection,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TimePicker_stories});var react=__webpack_require__("./node_modules/react/index.js"),Popover=__webpack_require__("../react/src/Containers/Popover/index.js"),InputSingleLine=__webpack_require__("../react/src/InputSingleLine.js"),toDate=__webpack_require__("../react/node_modules/date-fns/toDate.mjs"),constructFrom=__webpack_require__("../react/node_modules/date-fns/constructFrom.mjs");function addMilliseconds(date,amount){const timestamp=+(0,toDate.a)(date);return(0,constructFrom.w)(date,timestamp+amount)}var constants=__webpack_require__("../react/node_modules/date-fns/constants.mjs");function addMinutes(date,amount){return addMilliseconds(date,amount*constants.Cg)}var format=__webpack_require__("../react/node_modules/date-fns/format.mjs"),startOfDay=__webpack_require__("../react/node_modules/date-fns/startOfDay.mjs");function startOfMinute(date){const _date=(0,toDate.a)(date);return _date.setSeconds(0,0),_date}function isSameMinute(dateLeft,dateRight){return+startOfMinute(dateLeft)==+startOfMinute(dateRight)}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var TimePicker=function(param){var _param_label=param.label,label=void 0===_param_label?"":_param_label,_param_popoverTitle=param.popoverTitle,popoverTitle=void 0===_param_popoverTitle?"":_param_popoverTitle,_param_selectionType=param.selectionType,selectionType=void 0===_param_selectionType?"single":_param_selectionType,onSelection=param.onSelection,_useState=_sliced_to_array((0,react.useState)(""),2),timeValue=_useState[0],setTimeValue=_useState[1],_useState1=_sliced_to_array((0,react.useState)(""),2),endTimeValue=_useState1[0],setEndTimeValue=_useState1[1],_useState2=_sliced_to_array((0,react.useState)(null),2),selectedTime=_useState2[0],setSelectedTime=_useState2[1],_useState3=_sliced_to_array((0,react.useState)({start:null,end:null}),2),selectedTimeRange=_useState3[0],setSelectedTimeRange=_useState3[1],_useState4=_sliced_to_array((0,react.useState)(new Date),2);_useState4[0],_useState4[1];(0,react.useEffect)((function(){var now=new Date,end=addMinutes(now,30);"range"===selectionType&&(setSelectedTimeRange({start:(0,format.GP)(now,"HH:mm"),end:(0,format.GP)(end,"HH:mm")}),onSelection&&onSelection({start:(0,format.GP)(now,"HH:mm"),end:(0,format.GP)(end,"HH:mm")}))}),[selectionType,onSelection]);return react.createElement(Popover.A,{overwriteContentClass:"p-0",title:popoverTitle,hideOnBlur:!1,content:react.createElement("div",{className:"p-4"},react.createElement("div",{className:"grid grid-cols-4 gap-2"},function(){for(var times=[],start=(0,startOfDay.o)(new Date),hour=0;hour<24;hour++)for(var minute=0;minute<60;minute+=30)times.push((0,format.GP)(addMinutes(start,60*hour+minute),"HH:mm"));return times}().map((function(time,index){var isSelected="single"===selectionType?selectedTime===time:selectedTimeRange.start===time||selectedTimeRange.end===time,isInRange=selectedTimeRange.start&&selectedTimeRange.end&&isSameMinute(new Date("1970-01-01T".concat(time,":00")),new Date("1970-01-01T".concat(selectedTimeRange.start,":00")))||new Date("1970-01-01T".concat(time,":00"))>=new Date("1970-01-01T".concat(selectedTimeRange.start,":00"))&&new Date("1970-01-01T".concat(time,":00"))<=new Date("1970-01-01T".concat(selectedTimeRange.end,":00"));return react.createElement("button",{key:index,className:"p-2 m-1 rounded ".concat(isSelected?"bg-blue-500 text-white":isInRange?"bg-blue-100":"hover:bg-gray-200"),onClick:function(){return function(time){"single"===selectionType?(setSelectedTime(time),setTimeValue(time),onSelection&&onSelection(time)):!selectedTimeRange.start||selectedTimeRange.start&&selectedTimeRange.end?(setSelectedTimeRange({start:time,end:null}),onSelection&&onSelection({start:time,end:null}),setTimeValue(time)):(setSelectedTimeRange({start:selectedTimeRange.start,end:time}),onSelection&&onSelection({start:selectedTimeRange.start,end:time}),setTimeValue(selectedTimeRange.start),setEndTimeValue(time))}(time)}},time)})))),position:"bottom"},react.createElement(InputSingleLine.A,{label,value:timeValue})," ","single"===selectionType?null:react.createElement(react.Fragment,null,"to",react.createElement(InputSingleLine.A,{value:endTimeValue})))};const DateOrTimeInput_TimePicker=TimePicker;TimePicker.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{label:{defaultValue:{value:"''",computed:!1},required:!1},popoverTitle:{defaultValue:{value:"''",computed:!1},required:!1},selectionType:{defaultValue:{value:"'single'",computed:!1},required:!1}}};const TimePicker_stories={title:"Input/TwixtTimePicker",component:DateOrTimeInput_TimePicker,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}};var SingleSelection={args:{label:"Choose Time",popoverTitle:"Choose Time",selectionType:"single",onSelection:function(selection){console.log("Selected date or range:",selection)}}},RangeSelection={args:{label:"Choose Time",popoverTitle:"Choose Time",selectionType:"multiple",onSelection:function(selection){console.log("Selected date or range:",selection)}}};const __namedExportsOrder=["SingleSelection","RangeSelection"];SingleSelection.parameters={...SingleSelection.parameters,docs:{...SingleSelection.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Choose Time',\n    popoverTitle: 'Choose Time',\n    selectionType: 'single',\n    onSelection: selection => {\n      console.log('Selected date or range:', selection);\n    }\n  }\n}",...SingleSelection.parameters?.docs?.source}}},RangeSelection.parameters={...RangeSelection.parameters,docs:{...RangeSelection.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Choose Time',\n    popoverTitle: 'Choose Time',\n    selectionType: 'multiple',\n    onSelection: selection => {\n      console.log('Selected date or range:', selection);\n    }\n  }\n}",...RangeSelection.parameters?.docs?.source}}}},"../react/src/Containers/Popover/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Popover_Popover});var react=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Popover=function(param){param.id;var _param_show=param.show,show=void 0!==_param_show&&_param_show,_param_title=param.title,title=void 0===_param_title?"title":_param_title,_param_content=param.content,content=void 0===_param_content?"content":_param_content,_param_position=param.position,position=void 0===_param_position?"top":_param_position,children=param.children,_param_scrollable=param.scrollable,scrollable=void 0!==_param_scrollable&&_param_scrollable,_param_hideOnBlur=param.hideOnBlur,hideOnBlur=void 0===_param_hideOnBlur||_param_hideOnBlur,_param_overwriteContentClass=param.overwriteContentClass,overwriteContentClass=void 0===_param_overwriteContentClass?"":_param_overwriteContentClass,_useState=_sliced_to_array((0,react.useState)(show),2),isOpen=_useState[0],setIsOpen=_useState[1],popoverRef=(0,react.useRef)(null),triggerRef=(0,react.useRef)(null),handleClickOutside=function(event){popoverRef.current&&!popoverRef.current.contains(event.target)&&triggerRef.current&&!triggerRef.current.contains(event.target)&&setIsOpen(!1)};(0,react.useEffect)((function(){return isOpen&&document.addEventListener("mousedown",handleClickOutside),function(){document.removeEventListener("mousedown",handleClickOutside)}}),[isOpen]);return react.createElement("div",{className:"relative inline-block text-left"},react.createElement("div",{ref:triggerRef,onClick:function(){setIsOpen(!isOpen)},onBlur:function(){!0===hideOnBlur&&setIsOpen(!1)}},children),isOpen&&react.createElement("div",{ref:popoverRef,role:"tooltip",className:"absolute z-10 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 ".concat(positionClass(position)," w-auto min-w-[200px] ").concat(scrollable?"max-h-[300px]":"max-h-[none]"," ").concat(scrollable?"overflow-y-auto":"")},react.createElement("div",{className:"px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"},react.createElement("h3",{className:"font-semibold text-gray-900 dark:text-white"},title)),react.createElement("div",{className:"".concat(scrollable?"overflow-y-auto max-h-[300px]":""," ").concat(overwriteContentClass||"px-3 py-2")},content),react.createElement("div",{"data-popper-arrow":!0})))},positionClass=function(position){switch(position){case"top":return"bottom-full left-1/2 transform -translate-x-1/2 mb-2";case"right":return"top-1/2 left-full transform -translate-y-1/2 ml-2";case"bottom":return"top-full left-1/2 transform -translate-x-1/2 mt-2";case"left":return"top-1/2 right-full transform -translate-y-1/2 mr-2";default:return""}};const Popover_Popover=Popover;Popover.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{show:{defaultValue:{value:"false",computed:!1},required:!1},title:{defaultValue:{value:"'title'",computed:!1},required:!1},content:{defaultValue:{value:"'content'",computed:!1},required:!1},position:{defaultValue:{value:"'top'",computed:!1},required:!1},scrollable:{defaultValue:{value:"false",computed:!1},required:!1},hideOnBlur:{defaultValue:{value:"true",computed:!1},required:!1},overwriteContentClass:{defaultValue:{value:"''",computed:!1},required:!1}}}},"../react/src/InputSingleLine.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),InputSingleLine=function(param){var label=param.label,value=param.value,onChange=param.onChange,onBlur=param.onBlur,error=param.error,warning=param.warning,inputClass="shadow appearance-none border ".concat(error?"border-red-500":warning?"border-yellow-500":"border-gray-300"," text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500");return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2"},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"text",value,onChange,onBlur,className:inputClass}),error&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-red-500 text-xs italic"},error),warning&&!error&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-yellow-500 text-xs italic"},warning))};const __WEBPACK_DEFAULT_EXPORT__=InputSingleLine;InputSingleLine.__docgenInfo={description:"",methods:[],displayName:"InputSingleLine"}}}]);