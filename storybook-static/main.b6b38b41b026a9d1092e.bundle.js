(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(module,__webpack_exports__,__webpack_require__){"use strict";var slicedToArray=__webpack_require__(62),taggedTemplateLiteral=__webpack_require__(16),react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(17),moment=__webpack_require__(122),moment_default=__webpack_require__.n(moment),lib=__webpack_require__(283),lib_default=__webpack_require__.n(lib),DownArrow_DownArrow=function DownArrow(_ref){var color=_ref.color,dimensions=_ref.dimensions;return react_default.a.createElement("svg",{width:dimensions,height:dimensions,viewBox:"0 0 551.13 551.13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react_default.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z",fill:color}))};DownArrow_DownArrow.defaultProps={color:"#5D5D5F",dimensions:18},DownArrow_DownArrow.__docgenInfo={description:"",methods:[],displayName:"DownArrow",props:{color:{defaultValue:{value:"Color.grayDark",computed:!0},required:!1},dimensions:{defaultValue:{value:"18",computed:!1},required:!1}}};var Icon_DownArrow=DownArrow_DownArrow;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\TimePicker\\Dropdown\\Icon\\DownArrow.js"]={name:"DownArrow",docgenInfo:DownArrow_DownArrow.__docgenInfo,path:"src\\TimePicker\\Dropdown\\Icon\\DownArrow.js"});var UpArrow_UpArrow=function UpArrow(_ref){var color=_ref.color,dimensions=_ref.dimensions;return react_default.a.createElement("svg",{width:dimensions,height:dimensions,viewBox:"0 0 551.13 551.13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react_default.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z",fill:color}))};UpArrow_UpArrow.defaultProps={color:"#5D5D5F",dimensions:18},UpArrow_UpArrow.__docgenInfo={description:"",methods:[],displayName:"UpArrow",props:{color:{defaultValue:{value:"Color.grayDark",computed:!0},required:!1},dimensions:{defaultValue:{value:"18",computed:!1},required:!1}}};var Icon_UpArrow=UpArrow_UpArrow;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\TimePicker\\Dropdown\\Icon\\UpArrow.js"]={name:"UpArrow",docgenInfo:UpArrow_UpArrow.__docgenInfo,path:"src\\TimePicker\\Dropdown\\Icon\\UpArrow.js"});__webpack_require__(636);function _templateObject5(){var data=Object(taggedTemplateLiteral.a)(["\n  position: relative;\n  width: 100%;\n  max-height: 131px;\n  height: ",";\n"]);return _templateObject5=function _templateObject5(){return data},data}function _templateObject4(){var data=Object(taggedTemplateLiteral.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  //width: fit-content;\n  background-color: ",";\n  padding: 12px 16px 12px 16px;\n  border-bottom: ",";\n  box-sizing: border-box;\n  cursor:pointer;\n \n"]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n  position: absolute;\n  top: 42px;\n  left: 0;\n  width: 100%;\n  max-height: 150px; \n  background-color: ",";\n  border: 1px solid ",";\n  box-sizing: border-box;\n  //overflow: hidden;\n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  //width: fit-content;\n  min-width: 96px;\n  height: 44px;\n  border-radius: 4px;\n  background-color: ",";\n  padding: 8px 16px 8px 16px;\n  border: 1px solid ",";\n  margin: 8px;\n  box-sizing: border-box;\n  cursor:pointer;\n"]);return _templateObject=function _templateObject(){return data},data}var Box=styled_components_browser_esm.a.div(_templateObject(),"white","#BDBEC2"),ItemDisplayed=styled_components_browser_esm.a.div(_templateObject2()),DropMenu=styled_components_browser_esm.a.div(_templateObject3(),"white","#BDBEC2"),Cell=styled_components_browser_esm.a.div(_templateObject4(),(function(props){return props.isSelected?"#EEEEEF":"white"}),(function(props){return!props.isLast&&"1px solid".concat("#BDBEC2")})),ContainerPerfectScrollBar=styled_components_browser_esm.a.div(_templateObject5(),(function(props){return props.items.length>3?"131px":"auto"})),Dropdown_Dropdown=function Dropdown(_ref){var items=_ref.items,onChange=_ref.onChange,defaultIndex=_ref.defaultIndex,_useState=Object(react.useState)(!1),_useState2=Object(slicedToArray.a)(_useState,2),mounted=_useState2[0],setMounted=_useState2[1],_useState3=Object(react.useState)(!1),_useState4=Object(slicedToArray.a)(_useState3,2),open=_useState4[0],setOpen=_useState4[1],_useState5=Object(react.useState)(defaultIndex),_useState6=Object(slicedToArray.a)(_useState5,2),indexSelectedItem=_useState6[0],setIndexSelectedItem=_useState6[1],refBox=Object(react.useRef)(null);Object(react.useEffect)((function(){setMounted(!0)}),[]),Object(react.useEffect)((function(){mounted&&onChange(items[indexSelectedItem])}),[indexSelectedItem]);var cells=items&&items.length>0&&items.map((function(i,index){return react_default.a.createElement(Cell,{onClick:function onClick(){setOpen(!1),setIndexSelectedItem(index)},key:index,isLast:index===items.length-1,isSelected:index===indexSelectedItem},String(i).padStart(2,"0"))}));return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Box,{tabIndex:"0",ref:refBox,onClick:function onClick(){return setOpen(!open)},onBlur:function onBlur(){return setOpen(!1)}},react_default.a.createElement(ItemDisplayed,{onFocus:function onFocus(){return console.log("3")}},String(items[indexSelectedItem]).padStart(2,"0")),react_default.a.createElement(ItemDisplayed,{onFocus:function onFocus(){return console.log("4")}},open?react_default.a.createElement(Icon_UpArrow,null):react_default.a.createElement(Icon_DownArrow,null)),open&&items&&items.length>0&&react_default.a.createElement(DropMenu,{onFocus:function onFocus(){return console.log("1")}},react_default.a.createElement(ContainerPerfectScrollBar,{items:items,onFocus:function onFocus(){return console.log("2")}},react_default.a.createElement(lib_default.a,null,cells)))))};Dropdown_Dropdown.defaultProps={onChange:function onChange(){},defaultIndex:0},Dropdown_Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{onChange:{defaultValue:{value:"function onChange(){}",computed:!1},required:!1},defaultIndex:{defaultValue:{value:"0",computed:!1},required:!1}}};var TimePicker_Dropdown_Dropdown=Dropdown_Dropdown;function TimePicker_templateObject4(){var data=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background-color: ",";\n  font-family: Roboto;\n  border-top: 1px solid ",";;\n"]);return TimePicker_templateObject4=function _templateObject4(){return data},data}function TimePicker_templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background-color: white;\n  font-family: Roboto;\n"]);return TimePicker_templateObject3=function _templateObject3(){return data},data}function TimePicker_templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  //height: fit-content;\n  border-radius: 4px;\n  border: 1px solid ",";\n  margin: 8px;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);\n"]);return TimePicker_templateObject2=function _templateObject2(){return data},data}function TimePicker_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n"]);return TimePicker_templateObject=function _templateObject(){return data},data}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\TimePicker\\Dropdown\\Dropdown.js"]={name:"Dropdown",docgenInfo:Dropdown_Dropdown.__docgenInfo,path:"src\\TimePicker\\Dropdown\\Dropdown.js"});styled_components_browser_esm.a.div(TimePicker_templateObject());var ContainerTime=styled_components_browser_esm.a.div(TimePicker_templateObject2(),"#BDBEC2"),Title=styled_components_browser_esm.a.div(TimePicker_templateObject3()),Selector=styled_components_browser_esm.a.div(TimePicker_templateObject4(),"#EEEEEF","#BDBEC2"),TimePicker_TimePicker=function TimePicker(_ref){var TwelveHours=_ref.TwelveHours,onChange=_ref.onChange,title=_ref.title,_useState=Object(react.useState)(moment_default()()),_useState2=Object(slicedToArray.a)(_useState,2),currentHour=_useState2[0],setCurrentHour=_useState2[1],_useState3=Object(react.useState)(currentHour.format("HH")<=12),_useState4=Object(slicedToArray.a)(_useState3,2),isAM=_useState4[0],setIsAm=_useState4[1],itemsHour=[1,2,3,4,5,6,7,8,9,10,11,12];TwelveHours||(itemsHour=itemsHour.concat([13,14,15,16,17,18,19,20,21,22,23,0]));var onChangeFromDropdown=function onChangeFromDropdown(type,value){var temporaryHour=moment_default()(currentHour);switch(type){case"hour":temporaryHour.set("hour",isAM?value:value+12);break;case"minute":temporaryHour.set("minute",value);break;case"twelveHours":"AM"===value&&(setIsAm(!0),temporaryHour.set("hour",currentHour.hour()-12)),"PM"===value&&(setIsAm(!1),temporaryHour.set("hour",currentHour.hour()+12))}setCurrentHour(temporaryHour),onChange(temporaryHour)};return react_default.a.createElement(ContainerTime,null,react_default.a.createElement(Title,null,title||"Select a time"),react_default.a.createElement(Selector,null,react_default.a.createElement(TimePicker_Dropdown_Dropdown,{onChange:function onChange(h){return onChangeFromDropdown("hour",h)},type:"hour",items:itemsHour,defaultIndex:currentHour.format("h")-1}),react_default.a.createElement(TimePicker_Dropdown_Dropdown,{type:"minute",onChange:function onChange(h){return onChangeFromDropdown("minute",h)},items:Array.from(Array(60).keys()),defaultIndex:currentHour.format("mm")}),TwelveHours&&react_default.a.createElement(TimePicker_Dropdown_Dropdown,{type:"twelveHours",onChange:function onChange(h){return onChangeFromDropdown("twelveHours",h)},items:["AM","PM"],defaultIndex:currentHour.format("HH")>12&&1})))};TimePicker_TimePicker.defaultProps={TwelveHours:!0,onChange:function onChange(){},title:null},TimePicker_TimePicker.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{TwelveHours:{defaultValue:{value:"true",computed:!1},required:!1},onChange:{defaultValue:{value:"function onChange(){}",computed:!1},required:!1},title:{defaultValue:{value:"null",computed:!1},required:!1}}};__webpack_exports__.a=TimePicker_TimePicker;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\TimePicker\\TimePicker.js"]={name:"TimePicker",docgenInfo:TimePicker_TimePicker.__docgenInfo,path:"src\\TimePicker\\TimePicker.js"})},288:function(module,exports,__webpack_require__){__webpack_require__(289),__webpack_require__(435),module.exports=__webpack_require__(436)},353:function(module,exports){},436:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(70),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(176);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{name:"simple-react-time-picker",showPanel:!0,panelPosition:"right"},knobs:{escapeHTML:!1}});var req=__webpack_require__(629);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(221)(module))},629:function(module,exports,__webpack_require__){var map={"./TimePicker/TimePicker.stories.js":630};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=629},630:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var C_Users_Marco_Desktop_simple_react_time_picker_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(70),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(17),_TimePicker__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(176),__webpack_require__(123));function _templateObject(){var data=Object(C_Users_Marco_Desktop_simple_react_time_picker_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  position: absolute;\n  left: 16px;\n  top: 16px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: calc(100% - 32px);\n  height: calc(100% - 32px);\n  background-color: #F7F7F7;\n  border-radius: 4px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.div(_templateObject()),stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Time Picker",module);stories.add("12 Hour Format",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TimePicker__WEBPACK_IMPORTED_MODULE_5__.a,{onChange:function onChange(time){return alert(time.format("HH:mm"))}}))})),stories.add("24 Hour Format",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TimePicker__WEBPACK_IMPORTED_MODULE_5__.a,{TwelveHours:!1,onChange:function onChange(time){return alert(time.format("HH:mm"))}}))})),stories.add("Custom Title",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TimePicker__WEBPACK_IMPORTED_MODULE_5__.a,{title:"Custom Title",onChange:function onChange(time){return alert(time.format("HH:mm"))}}))}))}.call(this,__webpack_require__(221)(module))}},[[288,1,2]]]);
//# sourceMappingURL=main.b6b38b41b026a9d1092e.bundle.js.map