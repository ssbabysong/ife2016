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
  var container=document.getElementById("container");
  var button=document.getElementsByTagName("input");
  var num;
  var pattern=/^\d+$/;
  var array=[];


  // 操作数组
  function leftin(num){
    array.unshift(num);
    color();
  }
  function rightin(num){
    array.push(num);
    color();
  }
  function leftout(){
    array.shift();
    color();
  }
  function rightout(){
    array.pop();
    color();
  }


  // 渲染
  function color(){
    var contain='';
    array.forEach(function(value){
      contain+='<div>'+parseInt(value)+'</div>';
    })
    container.innerHTML=contain;
    adddelEvent();
  }

  // 为div绑定删除事件
  function adddelEvent(){
    for(var i=0;i<container.childNodes.length;i++){
      addEvent(container.childNodes[i],"click",function(){
        container.removeChild(this);
        array.splice(i,1);
      })
    }
  }

  // 为四个按钮绑定事件
  addEvent(button[1],"click",function(){
    var num=button[0].value;
    if(pattern.test(num)){
      leftin(num);
    }
    else{
      alert("inout number please");
    }
  });
  addEvent(button[2],"click",function(){
    var num=button[0].value;
    if(pattern.test(num)){
      rightin(num);
    }
    else{
      alert("inout number please");
    }
  });
  addEvent(button[3],"click",function(){
    if(array.length){
      leftout();
    }
    else{
      alert("empty!");
    }
  });
  addEvent(button[4],"click",function(){
    if(array.length){
      rightout();
      // console.log(array);
    }
    else{
      alert("empty!");
    }
  });

}