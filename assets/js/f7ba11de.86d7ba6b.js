"use strict";(self.webpackChunkt_2=self.webpackChunkt_2||[]).push([[952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(n),y=a,g=c["".concat(d,".").concat(y)]||c[y]||u[y]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},s="5. Grouped Into Country/City/Town Folders, Names as Taken Date and Address",i={unversionedId:"usages/grouped-into-country-city-town-folders-names-as-taken-date-and-address",id:"usages/grouped-into-country-city-town-folders-names-as-taken-date-and-address",title:"5. Grouped Into Country/City/Town Folders, Names as Taken Date and Address",description:"Groups photos by address hierarchy than copy on [country]/[city]/[town] directory with a file name as photo taken date. Photos that don't have any coordinate will be copied in a relative subfolder.",source:"@site/docs/usages/grouped-into-country-city-town-folders-names-as-taken-date-and-address.md",sourceDirName:"usages",slug:"/usages/grouped-into-country-city-town-folders-names-as-taken-date-and-address",permalink:"/docs/usages/grouped-into-country-city-town-folders-names-as-taken-date-and-address",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usages/grouped-into-country-city-town-folders-names-as-taken-date-and-address.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Naming With Address, Date in Same Folder Hierarchy",permalink:"/docs/usages/naming-with-address-date-in-same-folder-hierarchy"},next:{title:"Intro",permalink:"/docs/address-building-reverse-geocoding/intro"}},d={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"5-grouped-into-countrycitytown-folders-names-as-taken-date-and-address"},"5. Grouped Into Country/City/Town Folders, Names as Taken Date and Address"),(0,a.kt)("p",null,"Groups photos by address hierarchy than copy on ","[country]","/","[city]","/","[town]"," directory with a file name as photo taken date. Photos that don't have any coordinate will be copied in a relative subfolder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli copy --process-type FlattenAllSubFolders --group-by AddressHierarchy --naming-style DayAddress --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city town suburb --number-style OnlySequentialNumbers --no-taken-date AppendToEndOrderByFileName --no-coordinate InSubFolder --input photos --output organized-albums\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Original Folder Hierarchy"),(0,a.kt)("th",null,"After ",(0,a.kt)("b",null,(0,a.kt)("i",null,"photo-cli")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("p",null,"\u251c\u2500\u2500 DSC",(0,a.kt)("em",{parentName:"p"},"5727.jpg\n\u251c\u2500\u2500 GOPR6742.jpg\n\u251c\u2500\u2500 Italy album\n\u2502\xa0\xa0 \u251c\u2500\u2500 DJI_01732.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 DJI_01733.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC00001.JPG\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC03467.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC_1769.JPG\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC_1770.JPG\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC_1770"),"(same).jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC_1771.JPG\n\u2502\xa0\xa0 \u251c\u2500\u2500 GOPR7496.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 GOPR7497.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 IMG_0747.JPG\n\u2502\xa0\xa0 \u2514\u2500\u2500 IMG_2371.jpg\n\u2514\u2500\u2500 Spain Journey\n\u251c\u2500\u2500 DSC_1807.jpg\n\u251c\u2500\u2500 DSC_1808.jpg\n\u2514\u2500\u2500 IMG_5397.jpg"),(0,a.kt)("p",null,"2 directories, 17 files"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("p",null,"\u251c\u2500\u2500 Espa\xf1a\n\u2502\xa0\xa0 \u2514\u2500\u2500 Madrid\n\u2502\xa0\xa0     \u251c\u2500\u2500 2015.04.10-Espa\xf1a-Madrid-1.jpg\n\u2502\xa0\xa0     \u2514\u2500\u2500 2015.04.10-Espa\xf1a-Madrid-2.jpg\n\u251c\u2500\u2500 Italia\n\u2502\xa0\xa0 \u251c\u2500\u2500 Arezzo\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 2008.10.22-Italia-Arezzo-10.jpg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 2008.10.22-Italia-Arezzo-1.jpg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 2008.10.22-Italia-Arezzo-2.jpg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 2008.10.22-Italia-Arezzo-3.jpg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 2008.10.22-Italia-Arezzo-4.jpg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 2008.10.22-Italia-Arezzo-5.jpg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 2008.10.22-Italia-Arezzo-6.jpg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 2008.10.22-Italia-Arezzo-7.jpg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 2008.10.22-Italia-Arezzo-8.jpg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 2008.10.22-Italia-Arezzo-9.jpg\n\u2502\xa0\xa0 \u2514\u2500\u2500 Firenze\n\u2502\xa0\xa0     \u2514\u2500\u2500 Quartiere 1\n\u2502\xa0\xa0         \u2514\u2500\u2500 2005.12.14-Italia-Firenze-Quartiere 1.jpg\n\u251c\u2500\u2500 Kenya\n\u2502\xa0\xa0 \u2514\u2500\u2500 2005.08.13-Kenya.jpg\n\u251c\u2500\u2500 no-address\n\u2502\xa0\xa0 \u251c\u2500\u2500 IMG_2371.jpg\n\u2502\xa0\xa0 \u2514\u2500\u2500 IMG_5397.jpg\n\u251c\u2500\u2500 photo-cli-report.csv\n\u2514\u2500\u2500 United Kingdom\n\u2514\u2500\u2500 Ascot\n\u2514\u2500\u2500 Sunninghill and Ascot\n\u2514\u2500\u2500 2012.06.22-United Kingdom-Ascot-Sunninghill and Ascot.jpg"),(0,a.kt)("p",null,"11 directories, 18 files"))))))}u.isMDXComponent=!0}}]);