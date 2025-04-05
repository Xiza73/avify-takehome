"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[181],{6181:(e,t,r)=>{r.r(t),r.d(t,{component:()=>K});var n=r(7378),a=r(750),o=r(8335),i=r.n(o),c=r(7608),s=function(){var e=(0,a.A)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==(null===(r=t.response)||void 0===r?void 0:r.status)){e.next=5;break}return e.next=3,Promise.reject(t);case 3:e.next=8;break;case 5:return t.response?(n={status:t.response.status,data:t.response.data},console.error(n)):t.request?console.error(t.request):console.error("Error",t.message),e.next=8,Promise.reject(t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=c.A.create({baseURL:"/api",responseType:"json",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Accept:"application/json"}});l.interceptors.response.use((function(e){return e}),s);var u=function(){var e=(0,a.A)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("/generation");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){return{from:new Date(e.from),to:new Date(e.to),generationMix:e.generationmix.map((function(e){return{fuel:e.fuel,percentage:e.perc}}))}},p=r(4930),d=r(5063),g=r(6190),h=r(4643);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var b=function(e){return e.SECONDS="seconds",e.MILLISECONDS="milliseconds",e.MINUTES="minutes",e.HOURS="hours",e.DAYS="days",e}({}),y=(0,p.A)((0,p.A)((0,p.A)((0,p.A)((0,p.A)({},b.SECONDS,1e3),b.MILLISECONDS,1),b.MINUTES,6e4),b.HOURS,36e5),b.DAYS,864e5),v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.SECONDS;return e*y[t]},x=r(5966),w=r(9271),O={TitleWrapper:(0,r(3848).Ay)("h1",{name:"TitleWrapper"})((function(e){var t=e.theme;return{fontSize:t.typography.h1.fontSize,color:t.palette.text.primary,marginBottom:t.spacing(2)}}))};const E=function(e){var t=e.children;return n.createElement(O.TitleWrapper,null,t)};var S=function(e){var t=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return"".concat(t,"/").concat(r,"/").concat(n)},j=function(e){var t=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return"".concat(t,":").concat(r)},A=function(){return n.createElement(x.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}},n.createElement(E,null,"Loading..."),n.createElement(w.A,{variant:"h4",sx:{marginBottom:2}},"Loading data..."))},D=function(e){var t=e.error;return n.createElement(x.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}},n.createElement(E,null,"Error"),n.createElement(w.A,{variant:"h4",sx:{marginBottom:2}},(null==t?void 0:t.message)||"Error loading data"))},F=r(1817);const P=function(e){var t=e.colors,r=e.labels,a=e.series,o=e.width,i=void 0===o?220:o,c=e.percentage,s=void 0!==c&&c;return n.createElement(F.A,{type:"donut",series:a,width:i,options:{chart:{type:"donut",background:"none"},dataLabels:{enabled:!0,dropShadow:{enabled:!1},textAnchor:"end",formatter:function(e,t){return"".concat(t.w.globals.series[t.seriesIndex]).concat(s?"%":"")},style:{fontSize:"0.9rem",fontFamily:"Roboto",fontWeight:"normal",colors:["black"]}},legend:{show:!1},stroke:{width:0},plotOptions:{pie:{expandOnClick:!1,startAngle:-90,endAngle:270,donut:{size:"70%"},dataLabels:{offset:27,minAngleToShowLabel:-5}}},labels:r,colors:t,grid:{padding:{top:5,bottom:10,right:-10,left:-10}}}})};var C="#FFFFFF",k="#1150CE",I="#27DDA5",L={biomass:k,coal:I,imports:"#FFD780",gas:"#C5DEFF",nuclear:"#FF7E7E",other:"#1150FF",hydro:"#A7ACD0",solar:"#9FD895",wind:"#757575",default:"#F4F4F4"},M=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};const R=function(e){var t=e.data,r=t.map((function(e){return e.percentage})),a=t.map((function(e){return M(e.fuel)})),o=t.map((function(e){return(t=e.fuel)in L?L[t]:L.default;var t}));return n.createElement(x.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",px:2,pt:1.5,pb:2,gap:2,borderRadius:2,boxShadow:1,backgroundColor:C}},n.createElement(w.A,{variant:"h5",sx:{mb:2}},"General Summary"),n.createElement(P,{colors:o,labels:a,series:r,percentage:!0}))};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,p.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const q=function(e){var t=e.categories,r=e.series,a=e.width,o=e.height,i=e.percentage,c=void 0!==i&&i;return n.createElement(F.A,{options:{chart:{background:"white",toolbar:{show:!1}},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:T({enabled:c},c&&{formatter:function(e,t){return e+"%"}}),stroke:{show:!0,width:1,colors:["#fff"]},tooltip:{shared:!0,intersect:!1},noData:{text:"No data available",align:"center"},legend:{show:!1},xaxis:{categories:t,labels:{show:!0,rotate:0,hideOverlappingLabels:!1,trim:!0}},yaxis:{labels:{formatter:function(e,t){return c?e+"%":e.toString()}}}},series:r,type:"bar",width:a,height:o})};var z=["biomass","hydro","solar","wind"],U=function(e){var t=e.data,r=t.filter((function(e){return z.includes(e.fuel)})),a=t.filter((function(e){return!z.includes(e.fuel)}));return n.createElement(x.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",px:2,pt:1.5,pb:2,gap:2,borderRadius:2,boxShadow:1,backgroundColor:C}},n.createElement(w.A,{variant:"h5",sx:{mb:2}},"Renewable vs. Non-Renewable Energy"),n.createElement(q,{categories:["Energy"],series:[{name:"Renewable",data:[r.reduce((function(e,t){return e+t.percentage}),0)],color:k},{name:"Non-Renewable",data:[a.reduce((function(e,t){return e+t.percentage}),0)],color:I}],width:700,height:200,percentage:!0}))};function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,p.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const B=function(e){var t=e.series,r=e.width,a=e.height,o=e.left,i=void 0!==o&&o,c=(0,n.useMemo)((function(){var e=[],r=[];return t.sort((function(e,t){return t.value-e.value})).forEach((function(t){e.push(t.name),r.push(t.value)})),{categories:e,values:r,maxValue:Math.max.apply(Math,r)}}),[t]),s=c.categories,l=c.values,u=c.maxValue;return n.createElement(F.A,{type:"bar",series:[{name:"Handled",data:l}],width:r,height:a,options:{chart:{fontFamily:"inherit",toolbar:{show:!1},stacked:!0},dataLabels:{enabled:!1,offsetY:9,style:{colors:[C],fontSize:"1.2rem"}},grid:{show:!1,xaxis:{lines:{show:!0}},padding:{top:-35,bottom:-20,right:0,left:0}},legend:{show:!1},noData:{text:"No data available",align:"center"},plotOptions:{bar:{barHeight:"13px",borderRadius:0,horizontal:!0,colors:{ranges:[{from:0,to:u,color:k}]},dataLabels:{total:{enabled:!0,offsetX:5,offsetY:-8,style:{fontSize:"0.9rem",fontWeight:900}}}}},tooltip:{enabled:!1},xaxis:{labels:{show:!1},max:u+u*(.3-r/4e3),axisBorder:{show:!1},axisTicks:{show:!1},categories:s},yaxis:{reversed:!1,opposite:!1,labels:Y(Y({},i&&{align:"left",offsetX:-12}),{},{offsetY:2,style:{fontSize:"0.9rem"}})}}})};var H=function(e){var t=e.data.map((function(e){return{name:M(e.fuel),value:e.percentage}})).sort((function(e,t){return t.value-e.value})).slice(0,5);return n.createElement(x.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",px:2,pt:1.5,pb:2,gap:2,borderRadius:2,boxShadow:1,backgroundColor:C}},n.createElement(w.A,{variant:"h5",sx:{mb:2}},"Top Energy Sources"),n.createElement(B,{series:t,width:500,height:200}))},K=function(){var e,t=function(e){var t=e.queryKey,r=e.queryFn,a=e.refetchInterval,o=e.enabled,i=void 0===o||o,c=e.showSuccess,s=e.showError,l=(0,h.p)().setIsFetching,u=(0,d.I)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,p.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({queryKey:t,queryFn:r,enabled:i},a&&{refetchInterval:a})),f=u.data,b=u.error,y=u.isFetching,v=u.isLoading,x=u.refetch;return(0,n.useEffect)((function(){b&&s&&g.oR.error("An error occurred while fetching data.")}),[b]),(0,n.useEffect)((function(){f&&c&&g.oR.success("Data fetched successfully.")}),[f]),(0,n.useEffect)((function(){l(v||y)}),[v,y]),{data:f,error:b,isFetching:y,isLoading:v,refetch:x}}({queryKey:["generationData"],queryFn:(e=(0,a.A)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:return t=e.sent,r=f(t.data),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),refetchInterval:v(30,b.MINUTES)}),r=t.data,o=t.error;return t.isLoading?n.createElement(A,null):!r||o?n.createElement(D,{error:o}):n.createElement(x.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",height:"100vh",padding:2}},n.createElement(E,null,"Generation Mix"),n.createElement(w.A,{variant:"h4",sx:{marginBottom:2}},"Data loaded from ",S(r.from)," ",j(r.from)," at"," ",S(r.to)," ",j(r.to)),n.createElement(x.A,{sx:{display:"flex",justifyContent:"center",alignItems:"stretch",flexWrap:"wrap",gap:4,width:"100%"}},n.createElement(R,{data:r.generationMix}),n.createElement(U,{data:r.generationMix}),n.createElement(H,{data:r.generationMix})))}}}]);