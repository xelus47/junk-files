
var QueryString=function(){var query_string={};var query=window.location.search.substring(1);var vars=query.split("&");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");if(typeof query_string[pair[0]]==="undefined"){query_string[pair[0]]=pair[1];}else if(typeof query_string[pair[0]]==="string"){var arr=[query_string[pair[0]],pair[1]];query_string[pair[0]]=arr;}else{query_string[pair[0]].push(pair[1]);}}
return query_string;}();

// http://stackoverflow.com/questions/979975/how-to-get-the-value-from-url-parameter
// usage: "QueryString.search" returns the value of "search" in "http://www.example.com/?search=A+song+about+bananas", which is "A+song+about+bananas"

window.mobilecheck = function() {
var check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
return check; }

if (1) {
  var tidd=setInterval(function(){if(document.readyState!=='complete')return;clearInterval(tidd);if(mobilecheck()){document.body.setAttribute('data-mobile','true');}else{document.body.setAttribute('data-mobile','false');}},1);
}

// usage: mobilecheck();

if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.contains = function(needle) {
    return this.indexOf(needle) !== -1;
};

Array.prototype.contains = function(needle) {
    return this.indexOf(needle) !== -1;
};

String.prototype.replaceGlobal = function(needle,newString){
  return this.replace(new RegExp(needle,"g"), newString);
};

Array.prototype.random = function(){
  return this[(Math.floor(Math.random() * this.length))]
}

var tid=setInterval(function(){if(document.readyState!=='complete')return;clearInterval(tid);try{onReady();}catch(e){}},1);

wait=function(a,b){hasDelay=false;hasFunc=false;if(typeof a==='number'){delay=a;hasDelay=true;}
if(typeof a==='function'){run=a;hasFunc=true;}
if(typeof b==='number'){delay=b;hasDelay=true;}
if(typeof b==='function'){run=b;hasFunc=true;}
if(hasFunc&&hasDelay){setTimeout(function(){run();},delay);}
else{return false;}}

var ajax={create:{full:function(){if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();return xmlhttp;}else{xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');return xmlhttp;}},modern:function(){xmlhttp=new XMLHttpRequest();return xmlhttp;},xml:function(){if(window.XMLHttpRequest){xhttp=new XMLHttpRequest();}else{xhttp=new ActiveXObject('Microsoft.XMLHTTP');}
return xhttp;},xmlModern:function(){xhttp=new XMLHttpRequest();return xhttp;}},post:function(url,args,callBack){var obj=ajax.create.full();obj.onreadystatechange=function(){if(obj.readyState==4&&obj.status==200&&typeof callBack==='function'){callBack(obj.responseText);}}
xmlhttp.open('POST',url,true);xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');xmlhttp.send(args);},get:function(url,callBack){var obj=ajax.create.full();obj.onreadystatechange=function(){if(obj.readyState==4&&obj.status==200&&typeof callBack==='function'){callBack(obj.responseText);}}
obj.open('GET',url,true);obj.send();},xget:function(url,callBack){var obj=ajax.create.full();obj.onreadystatechange=function(){if(obj.readyState==4&&obj.status==200&&typeof callBack==='function'){callBack({'url':url,'responseText':obj.responseText});}}
obj.open('GET',url,true);obj.send();},xml:function(url){var obj=ajax.create.xml();obj.open('GET',url,false);obj.send();return obj.responseXML;},solidXml:function(url,callback){var obj=ajax.create.xml();obj.onreadystatechange=function(){if(obj.readyState==4&&obj.status==200&&typeof callBack==='function'){callback(obj.responseXML);}}
obj.open('GET',url,false);obj.send();},cacheXml:function(uri,fnc){if(uri in ajax.xmlCache){fnc(ajax.xmlCache[uri]);}else{ajax.solidXml(uri,function(res){ajax.xmlCache[uri]=res;fnc(res);});}},xmlCache:{},clearCache:function(){ajax.xmlCache={};}}

// update 20140101 added failsafe callback functions to AJAX. You can now use "ajax.get('http://www.example.com');" without callback function, useful for preloading.

// update 20160615 added ajax.xget, which returns object {'url':url,'responseText':responseText}




function readCookie(k){return(document.cookie.match('(^|; )'+k+'=([^;]*)')||0)[2]}

var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
      // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} ();

/* http://stackoverflow.com/questions/979975/how-to-get-the-value-from-url-parameter */