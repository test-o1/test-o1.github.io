"use strict";(self.webpackChunkt_2=self.webpackChunkt_2||[]).push([[588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6},i="Settings",s={unversionedId:"settings",id:"settings",title:"Settings",description:"User can customize & set these options via settings command.",source:"@site/docs/settings.md",sourceDirName:".",slug:"/settings",permalink:"/docs/settings",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/settings.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Command Line Arguments",permalink:"/docs/command-line-arguments"},next:{title:"Exit Codes",permalink:"/docs/exit-codes"}},l={},p=[{value:"Listing All Settings",id:"listing-all-settings",level:2},{value:"Getting a Single Value",id:"getting-a-single-value",level:2},{value:"Setting a Single Value",id:"setting-a-single-value",level:2},{value:"Resetting All Values To Defaults",id:"resetting-all-values-to-defaults",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"settings"},"Settings"),(0,a.kt)("p",null,"User can customize & set these options via ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," command."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All date & time formats. Reference values: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings"},"MSDN Date Time Format Strings")),(0,a.kt)("li",{parentName:"ul"},"File & folder naming separators"),(0,a.kt)("li",{parentName:"ul"},"Report file names"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"No Photo Taken Date Action")," folder name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"No Address Action")," folder name."),(0,a.kt)("li",{parentName:"ul"},"Third-party reverse geocode API keys."),(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Net.ServicePointManager.DefaultConnectionLimit?view=net-6.0"},"maximum concurrent connection limit")," to connect third-party reverse geocode provider.")),(0,a.kt)("h2",{id:"listing-all-settings"},"Listing All Settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli settings\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"LogLevel=Error\nYearFormat=yyyy\nMonthFormat=MM\nDayFormat=dd\nDateFormatWithMonth=yyyy.MM\nDateFormatWithDay=yyyy.MM.dd\nDateTimeFormatWithMinutes=yyyy.MM.dd_HH.mm\nDateTimeFormatWithSeconds=yyyy.MM.dd_HH.mm.ss\nAddressSeparator=-\nFolderAppendSeparator=-\nDayRangeSeparator=-\nSameNameNumberSeparator=-\nNoPhotoTakenDateFolderName=no-photo-taken-date\nNoAddressFolderName=no-address\nNoAddressAndPhotoTakenDateFolderName=no-address-and-no-photo-taken-date\nCsvReportFileName=photo-cli-report.csv\nDryRunCsvReportFileName=photo-cli-dry-run.csv\nConnectionLimit=4\nBigDataCloudApiKey=\nGoogleMapsApiKey=\nMapQuestApiKey=\nLocationIqApiKey=\n")),(0,a.kt)("h2",{id:"getting-a-single-value"},"Getting a Single Value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli settings --key YearFormat\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"YearFormat=yyyy\n")),(0,a.kt)("h2",{id:"setting-a-single-value"},"Setting a Single Value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli settings --key YearFormat --value y\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"No output when successful.\n")),(0,a.kt)("h2",{id:"resetting-all-values-to-defaults"},"Resetting All Values To Defaults"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli settings --reset\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"No output when successful\n")))}u.isMDXComponent=!0}}]);