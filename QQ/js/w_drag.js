//封装getElementsByClassName方法，据说IE10之前不支持这一方法
function getByClass(clsName,parent){
     var oParent=parent?document.getElementById(parent):document,
           eles=[],
           elements=oParent.getElementsByTagName('*');
      for(var i=0;i<elements.length;i++){
      	if(elements[i].className==clsName){
      		eles.push(elements[i]);
      	}
      }
      return eles;
}
//封装getElementbyId方法
//其实我也搞不懂为什么要封装，也方便不到哪里去
function getById(w_id){
	var w=document.getElementById(w_id);
	return w;
}

window.onload=drag;

function drag(){
	var oTitle=getByClass('login_logo_webqq','loginPanel')[0];
	// var oTitle=document.getElementsByClassName('login_logo_webqq')[0];
	//拖动
	oTitle.onmousedown=fnDown;
	//关闭
	var oClose=getById('ui_boxyClose');
	oClose.onclick=function(){
		getById('loginPanel').style.display='none';
	};
	//切换状态
	var loginState=getById('loginState'),
	      stateList=getById('loginStatePanel'),
	      lis=stateList.getElementsByTagName('li'),
	      stateTxt=getById('login2qq_state_txt'),
	      loginStateShow=getById("loginStateShow");
	loginState.onclick=function(e){
		e=e||window.event;
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble=true;
			}
		stateList.style.display='block';  
	};
	//鼠标滑过离开点击状态列表时
	for(var i=0,l=lis.length;i<l;i++){
		lis[i].onmouseover=function(){
			this.style.background='#567';
		};
		lis[i].onmouseout=function(){
			this.style.background='#FFF';
		};
		lis[i].onclick=function(e){
			e=e||window.event;
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble=true;
			}
			var id=this.id;
			stateList.style.display='none';
			stateTxt.innerHTML=getByClass('stateSelect_text',id)[0].innerHTML;
                                loginStateShow.className='';
                                loginStateShow.className='login-state-show '+id;
		};
	}
	document.onclick=function(){    //点击任意处隐藏
                      stateList.style.display='none';
	};
}
//鼠标按下触发的事件
function fnDown(){
	//var oDrag=document.getElementById('loginPanel');
	var oDrag=getById('loginPanel'),
	      disX=event.clientX-oDrag.offsetLeft,  //光标按下时光标与面板之间的距离
	      disY=event.clientY-oDrag.offsetTop;

	document.onmousemove=function(event){
		event = event || window.event;
		// document.title=event.clientX+','+event.clientY;
		// oDrag.style.left=event.clientX+'px';
		// oDrag.style.top=event.clientY+'px';
		fnMove(event,disX,disY);
	};
	document.onmouseup=function(){
		document.onmouseup=null;
		document.onmousemove=null;
	};
}
function fnMove(e,posX,posY){
	var oDrag=getById('loginPanel'),
	      l=e.clientX-posX,
	      t=e.clientY-posY,
	      w_width=document.documentElement.clientWidth||document.body.clientWidth,
	      w_height=document.documentElement.clientHeight||document.body.clientHeight,
	      maxW=w_width-oDrag.offsetWidth-10,
	      maxH=w_height-oDrag.offsetHeight;
	
	if(l<0){
		l=0;
	}else if(l>maxW){
		l=maxW;
	}
	if(t<0){
		t=10;
	}else if(t>maxH){
		t=maxH;
	}
	oDrag.style.left=l+'px';
	oDrag.style.top=t+'px';
}


