var data=['我爱你','mmp','你是傻逼吗','你大爷的',
'i am fuck','瑟瑟发抖','原谅我吧','心疼我寄几','老子无所畏惧'],
    timer=null;

window.onload=function(){
    var play=document.getElementById('play'),
        stop=document.getElementById('stop');
      var flag=0;
    // 开始抽奖
    play.onclick=playFun;
    stop.onclick=stopFun;

   // 键盘事件
   document.onkeyup=function(event){
      event = event || window.event;
      if(event.keyCode==13){
         if(flag===0){
           playFun();
           flag=1;
         }else{
           stopFun();
           flag=0;
         }
      }
   };
};



function playFun(){
	var title=document.getElementById('title');
	var play=document.getElementById('play');
	clearInterval(timer);
	timer=setInterval(function(){
	   var random=Math.floor(Math.random()*data.length);
	   title.innerHTML=data[random];
	},200);
    play.style.background='#999';
}

function stopFun(){
	clearInterval(timer);
	var play=document.getElementById('play');
	play.style.background='#036';
}