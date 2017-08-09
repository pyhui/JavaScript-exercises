// function startMove(obj,attr,target,fn){
function startMove(obj,json,fn){	
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
              var flag=true;//假设所有运动都到达目标值，
              // flag要写在定时器里，否则不会执行到fn
              for(var attr in json){
    	       var cur=0;
                    if(attr=='opacity'){
                    	cur=parseFloat(getStyle(obj,attr))*100;
                    }else{
		cur=parseInt(getStyle(obj,attr));
                    }
	        var speed=(json[attr]-cur)/8;
	        speed=speed>0?Math.ceil(speed):Math.floor(speed);
	        //检测停止
	        // if(cur == json[attr]){
	        //     clearInterval(obj.timer);
	        //     if(fn){
	        //     	fn();
	        //     }
	        // }
	        // else{
	        	if(cur!=json[attr]){
	        	      flag=false;
	        	}
	            if(attr=='opacity'){
                    	      obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                    	      obj.style.opacity=(cur+speed)/100;
                        }else{
		      obj.style[attr]=cur+speed+'px';
                        }     
                        if(flag){
                              clearInterval(obj.timer);
	                  if(fn){
	            	fn();
	                  }
                        }
	  }
	},30);
} 

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];

	}else{
		return getComputedStyle(obj,false)[attr];
	}
}