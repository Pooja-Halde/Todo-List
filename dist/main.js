(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n){t(1,arguments);var a=e(n);return!isNaN(a)}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var o,s={date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},i={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=r.width?String(r.width):o;a=t.formattingValues[s]||t.formattingValues[o]}else{var i=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;a=t.values[c]||t.values[i]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function d(t){return function(e,n){var a=String(e),r=n||{},o=r.width,s=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],i=a.match(s);if(!i)return null;var c,d=i[0],u=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(d))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(d))return n}(u),c=t.valueCallback?t.valueCallback(c):c,{value:c=r.valueCallback?r.valueCallback(c):c,rest:a.slice(d.length)}}}const u={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:s,formatRelative:function(t,e,n,a){return i[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(o={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(o.matchPattern);if(!r)return null;var s=r[0],i=n.match(o.parsePattern);if(!i)return null;var c=o.valueCallback?o.valueCallback(i[0]):i[0];return{value:c=a.valueCallback?a.valueCallback(c):c,rest:n.slice(s.length)}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function l(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function h(n,a){t(2,arguments);var r=e(n).getTime(),o=l(a);return new Date(r+o)}function m(e,n){t(2,arguments);var a=l(n);return h(e,-a)}function g(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const p=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return g("yy"===e?a%100:a,e.length)},f=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):g(n+1,2)},w=function(t,e){return g(t.getUTCDate(),e.length)},T=function(t,e){return g(t.getUTCHours()%12||12,e.length)},v=function(t,e){return g(t.getUTCHours(),e.length)},k=function(t,e){return g(t.getUTCMinutes(),e.length)},y=function(t,e){return g(t.getUTCSeconds(),e.length)},b=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return g(Math.floor(a*Math.pow(10,n-3)),e.length)};var P=864e5;function j(n){t(1,arguments);var a=1,r=e(n),o=r.getUTCDay(),s=(o<a?7:0)+o-a;return r.setUTCDate(r.getUTCDate()-s),r.setUTCHours(0,0,0,0),r}function E(n){t(1,arguments);var a=e(n),r=a.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var s=j(o),i=new Date(0);i.setUTCFullYear(r,0,4),i.setUTCHours(0,0,0,0);var c=j(i);return a.getTime()>=s.getTime()?r+1:a.getTime()>=c.getTime()?r:r-1}function C(e){t(1,arguments);var n=E(e),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var r=j(a);return r}var D=6048e5;function x(n,a){t(1,arguments);var r=a||{},o=r.locale,s=o&&o.options&&o.options.weekStartsOn,i=null==s?0:l(s),c=null==r.weekStartsOn?i:l(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=e(n),u=d.getUTCDay(),h=(u<c?7:0)+u-c;return d.setUTCDate(d.getUTCDate()-h),d.setUTCHours(0,0,0,0),d}function L(n,a){t(1,arguments);var r=e(n,a),o=r.getUTCFullYear(),s=a||{},i=s.locale,c=i&&i.options&&i.options.firstWeekContainsDate,d=null==c?1:l(c),u=null==s.firstWeekContainsDate?d:l(s.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(o+1,0,u),h.setUTCHours(0,0,0,0);var m=x(h,a),g=new Date(0);g.setUTCFullYear(o,0,u),g.setUTCHours(0,0,0,0);var p=x(g,a);return r.getTime()>=m.getTime()?o+1:r.getTime()>=p.getTime()?o:o-1}function M(e,n){t(1,arguments);var a=n||{},r=a.locale,o=r&&r.options&&r.options.firstWeekContainsDate,s=null==o?1:l(o),i=null==a.firstWeekContainsDate?s:l(a.firstWeekContainsDate),c=L(e,n),d=new Date(0);d.setUTCFullYear(c,0,i),d.setUTCHours(0,0,0,0);var u=x(d,n);return u}var S=6048e5;function B(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var s=e||"";return n+String(r)+s+g(o,2)}function N(t,e){return t%60==0?(t>0?"-":"+")+g(Math.abs(t)/60,2):I(t,e)}function I(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+g(Math.floor(r/60),2)+n+g(r%60,2)}const U={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return p(t,e)},Y:function(t,e,n,a){var r=L(t,a),o=r>0?r:1-r;return"YY"===e?g(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):g(o,e.length)},R:function(t,e){return g(E(t),e.length)},u:function(t,e){return g(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return g(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return g(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return f(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return g(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(n,a,r,o){var s=function(n,a){t(1,arguments);var r=e(n),o=x(r,a).getTime()-M(r,a).getTime();return Math.round(o/S)+1}(n,o);return"wo"===a?r.ordinalNumber(s,{unit:"week"}):g(s,a.length)},I:function(n,a,r){var o=function(n){t(1,arguments);var a=e(n),r=j(a).getTime()-C(a).getTime();return Math.round(r/D)+1}(n);return"Io"===a?r.ordinalNumber(o,{unit:"week"}):g(o,a.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):w(t,e)},D:function(n,a,r){var o=function(n){t(1,arguments);var a=e(n),r=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var o=a.getTime(),s=r-o;return Math.floor(s/P)+1}(n);return"Do"===a?r.ordinalNumber(o,{unit:"dayOfYear"}):g(o,a.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return g(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return g(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return g(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return T(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):v(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):g(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):g(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):k(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):y(t,e)},S:function(t,e){return b(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return N(r);case"XXXX":case"XX":return I(r);case"XXXXX":case"XXX":default:return I(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return N(r);case"xxxx":case"xx":return I(r);case"xxxxx":case"xxx":default:return I(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+B(r,":");case"OOOO":default:return"GMT"+I(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+B(r,":");case"zzzz":default:return"GMT"+I(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return g(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return g((a._originalDate||t).getTime(),e.length)}};function W(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function A(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const O={p:A,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return W(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",W(r,e)).replace("{{time}}",A(o,e))}};function Y(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var q=["D","DD"],H=["YY","YYYY"];function F(t){return-1!==q.indexOf(t)}function z(t){return-1!==H.indexOf(t)}function X(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Q=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,G=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,R=/^'([^]*?)'?$/,$=/''/g,J=/[a-zA-Z]/;function _(t){return t.match(R)[1].replace($,"'")}function K(n){t(1,arguments);var a=e(n);return a.setHours(0,0,0,0),a}function V(e,n){t(2,arguments);var a=K(e),r=K(n);return a.getTime()===r.getTime()}function Z(n,a){t(1,arguments);var r=a||{},o=r.locale,s=o&&o.options&&o.options.weekStartsOn,i=null==s?0:l(s),c=null==r.weekStartsOn?i:l(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=e(n),u=d.getDay(),h=(u<c?7:0)+u-c;return d.setDate(d.getDate()-h),d.setHours(0,0,0,0),d}function tt(e,n,a){t(2,arguments);var r=Z(e,a),o=Z(n,a);return r.getTime()===o.getTime()}function et(n,a){t(2,arguments);var r=e(n),o=l(a);return isNaN(o)?new Date(NaN):o?(r.setDate(r.getDate()+o),r):r}class nt{constructor(t){this.name=t,this.tasks=[]}setName(t){this.name=t}getName(){return this.name}setTasks(t){this.tasks=t}getTasks(){return this.tasks}getTask(t){return this.tasks.find((e=>e.getName()===t))}contains(t){return this.tasks.some((e=>e.getName()===t))}addTask(t){this.tasks.indexOf(t)>0||this.tasks.push(t)}deleteTask(t){const e=this.tasks.find((e=>e.getName()===t));this.tasks.splice(this.tasks.indexOf(e),1)}getTasksToday(){return this.tasks.filter((n=>function(e){return t(1,arguments),V(e,Date.now())}(e(new Date(n.getDateFormatted())))))}getTasksThisWeek(){return this.tasks.filter((n=>function(e,n){return t(1,arguments),tt(e,Date.now(),n)}(function(e,n){t(2,arguments);var a=l(n);return et(e,-a)}(e(new Date(n.getDateFormatted())),1))))}}class at{constructor(t,e="No date"){this.name=t,this.dueDate=e}setName(t){this.name=t}getName(){return this.name}setDate(t){this.dueDate=t}getDate(){return this.dueDate}getDateFormatted(){const t=this.dueDate.split("/")[0];return`${this.dueDate.split("/")[1]}/${t}/${this.dueDate.split("/")[2]}`}}class rt{constructor(){this.projects=[],this.projects.push(new nt("Inbox")),this.projects.push(new nt("Today")),this.projects.push(new nt("This week"))}setProjects(t){this.projects=t}getProjects(){return this.projects}getProject(t){return this.projects.find((e=>e.getName()===t))}contains(t){return this.projects.some((e=>e.getName()===t))}addProject(t){this.projects.indexOf(t)>0||this.projects.push(t)}deleteProject(t){const e=this.projects.find((e=>e.getName()===t));this.projects.splice(this.projects.indexOf(e),1)}updateTodayProject(){this.getProject("Today").tasks=[],this.projects.forEach((t=>{"Today"!==t.getName()&&"This week"!==t.getName()&&t.getTasksToday().forEach((e=>{const n=`${e.getName()} (${t.getName()})`;this.getProject("Today").addTask(new at(n,e.getDate()))}))}))}updateWeekProject(){this.getProject("This week").tasks=[],this.projects.forEach((t=>{"Today"!==t.getName()&&"This week"!==t.getName()&&t.getTasksThisWeek().forEach((e=>{const n=`${e.getName()} (${t.getName()})`;this.getProject("This week").addTask(new at(n,e.getDate()))}))})),this.getProject("This week").setTasks(this.getProject("This week").getTasks().sort(((n,a)=>function(n,a){t(2,arguments);var r=e(n),o=e(a),s=r.getTime()-o.getTime();return s<0?-1:s>0?1:s}(e(new Date(n.getDateFormatted())),e(new Date(a.getDateFormatted()))))))}}class ot{static saveTodoList(t){localStorage.setItem("todoList",JSON.stringify(t))}static getTodoList(){const t=Object.assign(new rt,JSON.parse(localStorage.getItem("todoList")));return t.setProjects(t.getProjects().map((t=>Object.assign(new nt,t)))),t.getProjects().forEach((t=>t.setTasks(t.getTasks().map((t=>Object.assign(new at,t)))))),t}static addProject(t){const e=ot.getTodoList();e.addProject(t),ot.saveTodoList(e)}static deleteProject(t){const e=ot.getTodoList();e.deleteProject(t),ot.saveTodoList(e)}static addTask(t,e){const n=ot.getTodoList();n.getProject(t).addTask(e),ot.saveTodoList(n)}static deleteTask(t,e){const n=ot.getTodoList();n.getProject(t).deleteTask(e),ot.saveTodoList(n)}static renameTask(t,e,n){const a=ot.getTodoList();a.getProject(t).getTask(e).setName(n),ot.saveTodoList(a)}static setTaskDate(t,e,n){const a=ot.getTodoList();a.getProject(t).getTask(e).setDate(n),ot.saveTodoList(a)}static updateTodayProject(){const t=ot.getTodoList();t.updateTodayProject(),ot.saveTodoList(t)}static updateWeekProject(){const t=ot.getTodoList();t.updateWeekProject(),ot.saveTodoList(t)}}class st{static loadHomepage(){st.loadProjects(),st.initProjectButtons(),st.openProject("Inbox",document.getElementById("button-inbox-projects")),document.addEventListener("keydown",st.handleKeyboard)}static loadProjects(){ot.getTodoList().getProjects().forEach((t=>{"Inbox"!==t.name&&"Today"!==t.name&&"This week"!==t.name&&st.createProject(t.name)})),st.initAddProjectButtons()}static loadTasks(t){ot.getTodoList().getProject(t).getTasks().forEach((t=>st.createTask(t.name,t.dueDate))),"Today"!==t&&"This week"!==t&&st.initAddTaskButtons()}static loadProjectContent(t){const e=document.getElementById("project-preview");e.innerHTML=`\n        <h1 id="project-name">${t}</h1>\n        <div class="tasks-list" id="tasks-list"></div>`,"Today"!==t&&"This week"!==t&&(e.innerHTML+='\n        <button class="button-add-task" id="button-add-task">\n          <i class="fas fa-plus"></i>\n          Add Task\n        </button>\n        <div class="add-task-popup" id="add-task-popup">\n          <input\n            class="input-add-task-popup"\n            id="input-add-task-popup"\n            type="text"\n          />\n          <div class="add-task-popup-buttons">\n            <button class="button-add-task-popup" id="button-add-task-popup">\n              Add\n            </button>\n            <button\n              class="button-cancel-task-popup"\n              id="button-cancel-task-popup"\n            >\n              Cancel\n            </button>\n          </div>\n        </div>'),st.loadTasks(t)}static createProject(t){document.getElementById("projects-list").innerHTML+=` \n      <button class="button-project" data-project-button>\n        <div class="left-project-panel">\n          <i class="fas fa-tasks"></i>\n          <span>${t}</span>\n        </div>\n        <div class="right-project-panel">\n          <i class="fas fa-times"></i>\n        </div>\n      </button>`,st.initProjectButtons()}static createTask(t,e){document.getElementById("tasks-list").innerHTML+=`\n      <button class="button-task" data-task-button>\n        <div class="left-task-panel">\n          <i class="far fa-circle"></i>\n          <p class="task-content">${t}</p>\n          <input type="text" class="input-task-name" data-input-task-name>\n        </div>\n        <div class="right-task-panel">\n          <p class="due-date" id="due-date">${e}</p>\n          <input type="date" class="input-due-date" data-input-due-date>\n          <i class="fas fa-times"></i>\n        </div>\n      </button>`,st.initTaskButtons()}static clear(){st.clearProjectPreview(),st.clearProjects(),st.clearTasks()}static clearProjectPreview(){document.getElementById("project-preview").textContent=""}static clearProjects(){document.getElementById("projects-list").textContent=""}static clearTasks(){document.getElementById("tasks-list").textContent=""}static closeAllPopups(){st.closeAddProjectPopup(),document.getElementById("button-add-task")&&st.closeAddTaskPopup(),document.getElementById("tasks-list")&&""!==document.getElementById("tasks-list").innerHTML&&st.closeAllInputs()}static closeAllInputs(){document.querySelectorAll("[data-task-button]").forEach((t=>{st.closeRenameInput(t),st.closeSetDateInput(t)}))}static handleKeyboard(t){"Escape"===t.key&&st.closeAllPopups()}static initAddProjectButtons(){const t=document.getElementById("button-add-project"),e=document.getElementById("button-add-project-popup"),n=document.getElementById("button-cancel-project-popup"),a=document.getElementById("input-add-project-popup");t.addEventListener("click",st.openAddProjectPopup),e.addEventListener("click",st.addProject),n.addEventListener("click",st.closeAddProjectPopup),a.addEventListener("keypress",st.handleAddProjectPopupInput)}static openAddProjectPopup(){const t=document.getElementById("add-project-popup"),e=document.getElementById("button-add-project");st.closeAllPopups(),t.classList.add("active"),e.classList.add("active")}static closeAddProjectPopup(){const t=document.getElementById("add-project-popup"),e=document.getElementById("button-add-project"),n=document.getElementById("input-add-project-popup");t.classList.remove("active"),e.classList.remove("active"),n.value=""}static addProject(){const t=document.getElementById("input-add-project-popup"),e=t.value;if(""!==e){if(ot.getTodoList().contains(e))return t.value="",void alert("Project names must be different");ot.addProject(new nt(e)),st.createProject(e),st.closeAddProjectPopup()}else alert("Project name can't be empty")}static handleAddProjectPopupInput(t){"Enter"===t.key&&st.addProject()}static initProjectButtons(){const t=document.getElementById("button-inbox-projects"),e=document.getElementById("button-today-projects"),n=document.getElementById("button-week-projects"),a=document.querySelectorAll("[data-project-button]"),r=document.getElementById("button-open-nav");t.addEventListener("click",st.openInboxTasks),e.addEventListener("click",st.openTodayTasks),n.addEventListener("click",st.openWeekTasks),a.forEach((t=>t.addEventListener("click",st.handleProjectButton))),r.addEventListener("click",st.openNav)}static openInboxTasks(){st.openProject("Inbox",this)}static openTodayTasks(){ot.updateTodayProject(),st.openProject("Today",this)}static openWeekTasks(){ot.updateWeekProject(),st.openProject("This week",this)}static handleProjectButton(t){const e=this.children[0].children[1].textContent;t.target.classList.contains("fa-times")?st.deleteProject(e,this):st.openProject(e,this)}static openProject(t,e){[...document.querySelectorAll(".button-default-project"),...document.querySelectorAll(".button-project")].forEach((t=>t.classList.remove("active"))),e.classList.add("active"),st.closeAddProjectPopup(),st.loadProjectContent(t)}static deleteProject(t,e){e.classList.contains("active")&&st.clearProjectPreview(),ot.deleteProject(t),st.clearProjects(),st.loadProjects()}static openNav(){const t=document.getElementById("nav");st.closeAllPopups(),t.classList.toggle("active")}static initAddTaskButtons(){const t=document.getElementById("button-add-task"),e=document.getElementById("button-add-task-popup"),n=document.getElementById("button-cancel-task-popup"),a=document.getElementById("input-add-task-popup");t.addEventListener("click",st.openAddTaskPopup),e.addEventListener("click",st.addTask),n.addEventListener("click",st.closeAddTaskPopup),a.addEventListener("keypress",st.handleAddTaskPopupInput)}static openAddTaskPopup(){const t=document.getElementById("add-task-popup"),e=document.getElementById("button-add-task");st.closeAllPopups(),t.classList.add("active"),e.classList.add("active")}static closeAddTaskPopup(){const t=document.getElementById("add-task-popup"),e=document.getElementById("button-add-task"),n=document.getElementById("input-add-task-popup");t.classList.remove("active"),e.classList.remove("active"),n.value=""}static addTask(){const t=document.getElementById("project-name").textContent,e=document.getElementById("input-add-task-popup"),n=e.value;if(""!==n){if(ot.getTodoList().getProject(t).contains(n))return alert("Task names must be different"),void(e.value="");ot.addTask(t,new at(n)),st.createTask(n,"No date"),st.closeAddTaskPopup()}else alert("Task name can't be empty")}static handleAddTaskPopupInput(t){"Enter"===t.key&&st.addTask()}static initTaskButtons(){const t=document.querySelectorAll("[data-task-button]"),e=document.querySelectorAll("[data-input-task-name"),n=document.querySelectorAll("[data-input-due-date");t.forEach((t=>t.addEventListener("click",st.handleTaskButton))),e.forEach((t=>t.addEventListener("keypress",st.renameTask))),n.forEach((t=>t.addEventListener("change",st.setTaskDate)))}static handleTaskButton(t){t.target.classList.contains("fa-circle")?st.setTaskCompleted(this):t.target.classList.contains("fa-times")?st.deleteTask(this):t.target.classList.contains("task-content")?st.openRenameInput(this):t.target.classList.contains("due-date")&&st.openSetDateInput(this)}static setTaskCompleted(t){const e=document.getElementById("project-name").textContent,n=t.children[0].children[1].textContent;if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0];ot.deleteTask(t,n)}ot.deleteTask(e,n),st.clearTasks(),st.loadTasks(e)}static deleteTask(t){const e=document.getElementById("project-name").textContent,n=t.children[0].children[1].textContent;if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0];ot.deleteTask(t,n)}ot.deleteTask(e,n),st.clearTasks(),st.loadTasks(e)}static openRenameInput(t){const e=t.children[0].children[1];let n=e.textContent;const a=t.children[0].children[2],r=t.parentNode.parentNode.children[0].textContent;"Today"!==r&&"This week"!==r||([n]=n.split(" (")),st.closeAllPopups(),e.classList.add("active"),a.classList.add("active"),a.value=n}static closeRenameInput(t){const e=t.children[0].children[1],n=t.children[0].children[2];e.classList.remove("active"),n.classList.remove("active"),n.value=""}static renameTask(t){if("Enter"!==t.key)return;const e=document.getElementById("project-name").textContent,n=this.previousElementSibling.textContent,a=this.value;if(""!==a){if(ot.getTodoList().getProject(e).contains(a))return this.value="",void alert("Task names must be different");if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0],r=n.split(" ")[0];ot.renameTask(e,n,`${a} (${t})`),ot.renameTask(t,r,a)}else ot.renameTask(e,n,a);st.clearTasks(),st.loadTasks(e),st.closeRenameInput(this.parentNode.parentNode)}else alert("Task name can't be empty")}static openSetDateInput(t){const e=t.children[1].children[0],n=t.children[1].children[1];st.closeAllPopups(),e.classList.add("active"),n.classList.add("active")}static closeSetDateInput(t){const e=t.children[1].children[0],n=t.children[1].children[1];e.classList.remove("active"),n.classList.remove("active")}static setTaskDate(){const a=this.parentNode.parentNode,r=document.getElementById("project-name").textContent,o=a.children[0].children[1].textContent,s=function(a,r,o){t(2,arguments);var s=String(r),i=o||{},c=i.locale||u,d=c.options&&c.options.firstWeekContainsDate,h=null==d?1:l(d),g=null==i.firstWeekContainsDate?h:l(i.firstWeekContainsDate);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=c.options&&c.options.weekStartsOn,f=null==p?0:l(p),w=null==i.weekStartsOn?f:l(i.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var T=e(a);if(!n(T))throw new RangeError("Invalid time value");var v=Y(T),k=m(T,v),y={firstWeekContainsDate:g,weekStartsOn:w,locale:c,_originalDate:T};return s.match(G).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,O[e])(t,c.formatLong,y):t})).join("").match(Q).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return _(t);var n=U[e];if(n)return!i.useAdditionalWeekYearTokens&&z(t)&&X(t,r,a),!i.useAdditionalDayOfYearTokens&&F(t)&&X(t,r,a),n(k,t,c.localize,y);if(e.match(J))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("")}(new Date(this.value),"dd/MM/yyyy");if("Today"===r||"This week"===r){const t=o.split("(")[1].split(")")[0],e=o.split(" (")[0];ot.setTaskDate(r,o,s),ot.setTaskDate(t,e,s),"Today"===r?ot.updateTodayProject():ot.updateWeekProject()}else ot.setTaskDate(r,o,s);st.clearTasks(),st.loadTasks(r),st.closeSetDateInput(a)}}document.addEventListener("DOMContentLoaded",st.loadHomepage)})();