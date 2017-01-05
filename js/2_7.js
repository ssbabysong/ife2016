/*
剩余工作：
  快排；
  选择排序；
*/


/*tre：
打乱数组；
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
  var container=document.getElementById("container");
  var button=document.getElementsByTagName("input");
  var select=document.getElementById("se");
  var option=document.getElementsByTagName("option");
  var num;
  var pattern=/^\d+$/;
  var array=[];


  // 操作数组
  function leftin(num){
    if(numin(num)){
      array.unshift(num);
      color();
    }
  }
  function rightin(num){
    if(numin(num)){
      array.push(num);
      color();
    }
  }
  function leftout(){
    array.shift(num);
    color();
  }
  function rightout(){
    array.pop(num);
    color();
  }


  // 渲染
  function color(){
    var contain='';
    array.forEach(function(value){
      contain+='<div style="height:'+(parseInt(value)*3)+'px;"></div>';
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
  // 判断输入范围
  function numin(num){
    if(num>9&&num<101){
      return num;
    }
    else{
      button[0].value='请输入10-100之间的数字！';
      return false;
    }
    if(array.length>60){
      alert("数量超出限制！");
      return false;
    }
  }

  function swap(array,i,j){
    var temp=array[i];
    array[i]=array[j];
    array[j]=temp;
  }
  // test排序
  function test(){
    var i=0,j,timer;
    var len=array.length;
    timer=setInterval(function(){
      if(j<len){
        if(array[i]<array[j]){
          swap(array,i,j);
        }
        j++;
      }
      else{
        i++;
        j=0;
      }
      color();

    },50);
  }
    // 冒泡排序
  function bubble(){
    var i=0,j,timer;
    var len=array.length;
    j=len-2;
    timer=setInterval(function(){
      if (j>-1){
        if(array[j]>array[j+1]){
          swap(array,j,j+1);
        }
        j--;
      }
      else{
        i++;
        j=len-2;
      }
      color();

    },5);
  }
   // 冒泡排序chuban
  function bubble1(){
    var i=0,j,timer;
    var len=array.length;
    j=1;
    timer=setInterval(function(){
      if (j<len){
        if(array[i]>array[j]){
          swap(array,i,j);
        }
        j++;
      }
      else{
        i++;
        j=i+1;
      }
      color();

    },50);
  }
  // 打乱
  function reset(){
    array.sort(function(){
      return 0.5 - Math.random();
    });
    color();
  }
  // 随机生成
  function set(){
    array=[];
    for(var i=0;i<10;){
      var rand=Math.random()*100;
      if(rand>10&&rand<101){
        array.push(rand);
        i++;
      }
    }
    color();
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
      console.log(array);
    }
    else{
      alert("empty!");
    }
  });

  // 绑定排序事件
  addEvent(button[5],"click",function(){
    reset();
  });
  addEvent(button[6],"click",function(){
    test();
  });
  addEvent(button[7],"click",function(){
    bubble();
  });
  addEvent(button[8],"click",function(){
    selectsort();
  });
  addEvent(button[9],"click",function(){
    quicksort();
  });
  addEvent(button[10],"click",function(){
    set();
  });














}