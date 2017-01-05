/*tre:
正则表达式的模式匹配
array方法：split、filter,map,join的使用
 */
// 初始化事件绑定函数
function addEvent(element,event,listener){
  if (element.addEventListener){
    element.addEventListener(event,listener,false);
  }
  else if(element.attachEvent){
    element.attachEvent("on"+event,event);
  }
  else{
    element["on"+event]=listener;
  }
}

window.onload=function(){
  var insert=document.getElementById("insert");
  var search=document.getElementById("search");
  var textarea=document.getElementById("textarea");
  var searchtext=document.getElementById("searchtext");
  var container=document.getElementById("container");
  var array=[];
  function color(str){
    var contain='';
    // for(var i=0;i<array.length;i++){
    //   contain+='<div>'+array[i]+'</div>';
    // }
    // container.innerHTML=contain;

    contain=array.map(function(e) {
      if(str!=null&&str.length>0){
        e=e.replace(new RegExp(str,'g'),"<span style='background-color:red'>"+str+"</span>");
      }
      console.log(e);
      return '<div>'+e+'</div>';
    }).join('');
    container.innerHTML=contain;
  }
  addEvent(insert,'click',function(){
    var str=textarea.value;
    var arr = str.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(e){
      if(e)
        return true;
      else
        return false;
    });
    array=array.concat(arr);
    color();
  });
  addEvent(search,'click',function(){
    var str=searchtext.value;
    color(str);
  })
}

