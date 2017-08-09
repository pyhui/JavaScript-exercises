function startMove(obj,attr,target,fn){	
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
    	       var cur=0;
                    if(attr=='opacity'){
                    	cur=parseFloat(getStyle(obj,attr))*100;
                    }else{
		cur=parseInt(getStyle(obj,attr));
                    }
	        var speed=(target-cur)/8;
	        speed=speed>0?Math.ceil(speed):Math.floor(speed);
	        //检测停止
	        if(cur == target){
	            clearInterval(obj.timer);
	            if(fn){
	            	fn();
	            }
	        }
	        else{
	            if(attr=='opacity'){
                    	      obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                    	      obj.style.opacity=(cur+speed)/100;
                        }else{
		      obj.style[attr]=cur+speed+'px';
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