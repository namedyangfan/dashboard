(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),s=t.n(r),i=(t(60),t(14)),o=t(15),c=t(17),u=t(16),m=t(18),d=(t(62),t(63),t(45)),p=t.n(d),v=(t(65),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).renderGaugeStationFilter=function(){return l.a.createElement(p.a,{options:[{value:"08313000",label:"RIO GRANDE AT OTOWI BRIDGE"},{value:"08317200",label:"SANTA FE RIVER ABOVE COCHITI LAKE"},{value:"08378500",label:"PECOS RIVER NEAR PECOS"}],onChange:t.props.handleChangeStation,value:t.props.site_number,placeholder:"Select an option",placeholderClassName:"dropDownPlaceHolder",menuClassName:"dropDownPlaceHolder"})},t.renderTimeIntervalFilter=function(){return l.a.createElement("div",null,l.a.createElement("h6",null," Select Duration "),l.a.createElement(p.a,{options:[{value:"10",label:"pass 10 days"},{value:"20",label:"pass 20 days"},{value:"30",label:"pass 30 days"}],onChange:t.props.handleChangeDayInterval,value:t.props.days_interval,placeholder:"Select an option",placeholderClassName:"dropDownPlaceHolder",menuClassName:"dropDownPlaceHolder"}))},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e="Plot"==this.props.activeTab;return l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col s12"},l.a.createElement("h6",null," Select Gauge Station "),this.renderGaugeStationFilter(),e?this.renderTimeIntervalFilter():l.a.createElement("div",null))))}}]),a}(l.a.Component)),h=t(43),b=t.n(h),f=t(26),g=t.n(f),E=t(44),y=t.n(E),N=t(106),C=t(108),w=t(105),O=t(107),S=t(5),_=t.n(S),T=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).renderPlotFlow=function(){var e={y:t.props.value,x:t.props.date,type:"scatter",mode:"lines+points",marker:{color:"red"}};return l.a.createElement(y.a,{data:[e],layout:{responsive:!0,xaxis:{title:"Date",titlefont:{family:"Courier New, monospace",size:18,color:"#7f7f7f"}},yaxis:{title:"Discharge Rate ft3/s",automargin:!0,titlefont:{family:"Courier New, monospace",size:18,color:"#7f7f7f"}}},style:[{width:"100%",height:"100%"}],useResizeHandler:"true"})},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return this.renderPlotFlow()}}]),a}(l.a.Component),j=t(42),D=t.n(j);delete _.a.Icon.Default.prototype._getIconUrl,_.a.Icon.Default.mergeOptions({iconRetinaUrl:t(93),iconUrl:t(94),shadowUrl:t(95)});var I=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props.tabLabel,t=D()({"grey-text":a!==this.props.activeTab,"active-tab":a==this.props.activeTab,"blue-text text-lighten-2":a==this.props.activeTab});return l.a.createElement("li",{className:"tab col s3 offset-s1",onClick:function(){e.props.onClick(a)}},l.a.createElement("a",{className:t},l.a.createElement("i",{className:this.props.labelClass,style:{font:15}}),l.a.createElement("span",{style:{marginLeft:10}},a)))}}]),a}(l.a.Component),k=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).getData=function(){var e="https://waterservices.usgs.gov/nwis/iv/?sites=".concat(t.props.site_number,"&period=P").concat(t.props.days_interval,"D&&parameterCd=00060&format=json");b.a.get(e).then(function(e){t.sortValueDate(e),t.setState({isLoaded:!0})}).catch(function(e){console.log(e)})},t.sortValueDate=function(e){var a=e.data.value.timeSeries[0].values[0].value,n=g.a.map(a,"value"),l=g.a.map(a,"dateTime");console.log(e.data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation),t.setState({value:n,date:l,latitude:e.data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.latitude,longitude:e.data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude,station_name:e.data.value.timeSeries[0].sourceInfo.siteName})},t.renderleafletMap=function(){var e=[t.state.latitude,t.state.longitude];return l.a.createElement(N.a,{center:e,zoom:t.state.zoom},l.a.createElement(C.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),l.a.createElement(w.a,{position:e},l.a.createElement(O.a,null,l.a.createElement("span",null,"Station: ",t.state.station_name))))},t.renderContent=function(){return"Map"==t.props.activeTab?l.a.createElement("div",{className:"col s12"},l.a.createElement("div",{className:"section"},l.a.createElement("span",null," Station Number: ",t.props.site_number," "),l.a.createElement("span",null," Latitude: ",t.state.latitude," "),l.a.createElement("span",null," Longitude: ",t.state.longitude," "),t.renderleafletMap())):l.a.createElement("div",{className:"col s12"},l.a.createElement("div",{className:"plotly-container"},l.a.createElement(T,{value:t.state.value,date:t.state.date})))},t.state={error:null,isLoaded:!1,value:[],date:[],latitude:null,longitude:null,zoom:13,station_name:null},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,a){var t=this;e.site_number===this.props.site_number&&e.days_interval===this.props.days_interval||this.setState({isLoaded:!1},function(){return t.getData()})}},{key:"render",value:function(){return l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col s12"},l.a.createElement("ul",{className:"tabs"},l.a.createElement(I,{tabLabel:"Map",onClick:this.props.handleChangeActiveTab,activeTab:this.props.activeTab,labelClass:"fas fa-globe-americas fa-lg"}),l.a.createElement(I,{tabLabel:"Plot",onClick:this.props.handleChangeActiveTab,activeTab:this.props.activeTab,labelClass:"fas fa-chart-line fa-lg"}))),this.state.isLoaded?this.renderContent():l.a.createElement("div",{className:"col 12 offset-s7 loader"},l.a.createElement("div",{className:"preloader-wrapper big active "},l.a.createElement("div",{className:"spinner-layer spinner-blue-only"},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"})))))))}}]),a}(l.a.Component),L=(t(98),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this))).handleChangeStation=function(e){console.log(e),t.setState({site_number:e.value},function(){return console.log("site_number: "+t.state.site_number)})},t.handleChangeDayInterval=function(e){console.log(e),t.setState({days_interval:e.value},function(){return console.log("days_interval: "+t.state.days_interval)})},t.handleChangeActiveTab=function(e){console.log(e),t.state.activeTab!==e&&t.setState({activeTab:e})},t.renderNavBar=function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper blue"},l.a.createElement("a",{href:"#",className:"brand-logo"},"Demo SPA"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/namedyangfan/dashboard"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/fanyangcanada/"},l.a.createElement("i",{className:"fab fa-linkedin"}))))))},t.state={site_number:"08313000",days_interval:"10",activeTab:"Map"},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,this.renderNavBar(),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m3"},l.a.createElement(v,{site_number:this.state.site_number,handleChangeStation:this.handleChangeStation,days_interval:this.state.days_interval,handleChangeDayInterval:this.handleChangeDayInterval,activeTab:this.state.activeTab})),l.a.createElement("div",{className:"col s12 m9"},l.a.createElement("div",{className:"card"},l.a.createElement(k,{site_number:this.state.site_number,days_interval:this.state.days_interval,activeTab:this.state.activeTab,handleChangeActiveTab:this.handleChangeActiveTab}))))))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(100),t(101),s.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,a,t){e.exports=t(103)},60:function(e,a,t){},62:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},63:function(e,a,t){}},[[55,2,1]]]);
//# sourceMappingURL=main.992747f5.chunk.js.map