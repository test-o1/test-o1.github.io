"use strict";(self.webpackChunkt_2=self.webpackChunkt_2||[]).push([[805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="2. Setting API Key",l={unversionedId:"address-building-reverse-geocoding/setting-api-key",id:"address-building-reverse-geocoding/setting-api-key",title:"2. Setting API Key",description:"After selecting reverse geocode provider, you need to provide an API key. There are three ways to provide this API key;",source:"@site/docs/address-building-reverse-geocoding/setting-api-key.md",sourceDirName:"address-building-reverse-geocoding",slug:"/address-building-reverse-geocoding/setting-api-key",permalink:"/test-o1/docs/address-building-reverse-geocoding/setting-api-key",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/address-building-reverse-geocoding/setting-api-key.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Selecting Third-Party Reverse Geocode Provider",permalink:"/test-o1/docs/address-building-reverse-geocoding/selecting-third-party-reverse-geocode-provider"},next:{title:"3. Understanding Reverse Geocode Response",permalink:"/test-o1/docs/address-building-reverse-geocoding/understanding-reverse-geocode-response"}},d={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-setting-api-key"},"2. Setting API Key"),(0,a.kt)("p",null,"After selecting reverse geocode provider, you need to provide an API key. There are three ways to provide this API key;"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Send as an argument every time"),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/docs/settings#setting-a-single-value"},"persist a setting")," to save it as configuration, so you don't need to submit everytime."),(0,a.kt)("li",{parentName:"ol"},"Use environment variable, so you don't need to submit everytime.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Reverse Geocode Provider"),(0,a.kt)("th",{parentName:"tr",align:null},"Settings Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Argument"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/"},"BigDataCloud")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"BigDataCloudApiKey")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PHOTO_CLI_BIG_DATA_CLOUD_API_KEY")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-b")," or  ",(0,a.kt)("inlineCode",{parentName:"td"},"--bigdatacloud-key"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://nominatim.org/release-docs/latest/api/Reverse/"},"Open Street Map Foundation - Nominatim")),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developers.google.com/maps/documentation/geocoding/overview/"},"GoogleMaps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"GoogleMapsApiKey")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PHOTO_CLI_GOOGLE_MAPS_API_KEY")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-k")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"--googlemaps-key"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developer.mapquest.com/documentation/open/nominatim-search/reverse/"},"MapQuest")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MapQuestApiKey")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PHOTO_CLI_MAPQUEST_API_KEY")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-u")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"--mapquest-key"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://locationiq.com/sandbox/geocoding/reverse/"},"LocationIq")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"LocationIqApiKey")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PHOTO_CLI_LOCATIONIQ_API_KEY")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-q")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"--locationiq-key"))))))}c.isMDXComponent=!0}}]);