function adv_cl(){
	document.getElementById("adv").style.display="none";
	document.getElementById("cl").style.display="none";
}
var advobject;
var advtop;
var advleft;

var clobject;
var cltop;
var clleft;
//定义位置
function wz(){
	advobject=document.getElementById("adv");
	clobject=document.getElementById("cl");
	if(clobject.currentStyle){//IE浏览器 对象名.currentStyle.top/left;
		advtop=parseInt(advobject.currentStyle.top);
 	    advleft=parseInt(advobject.currentStyle.left);
 	    cltop=parseInt(closeobject.currentStyle.top);
 	    clleft=parseInt(closeobject.currentStyle.left);
	}else{//非IE浏览器 document.defaultView.getComputedStyle(对象名,null).top/left;
		advtop=parseInt(document.defaultView.getComputedStyle(advobject,null).top);
		advleft=parseInt(document.defaultView.getComputedStyle(advobject,null).left);
		cltop=parseInt(document.defaultView.getComputedStyle(clobject,Number).top);
		clleft=parseInt(document.defaultView.getComputedStyle(clobject,null).left);
	}

}
//滚动条
 function scroll(){//版本1:document.documentEle.scrollTop/left||版本2：document.body.scrollleft/scrolltop;
 	var scrollTop=parseInt(document.documentElement.scrollTop||document.body.scrollTop);
 	var scrollLeft=parseInt(document.documentElement.scrollLeft||document.body.scrollLeft);
 	
 	advobject.style.left=advleft+scrollLeft+"px";
 	advobject.style.top=advtop+scrollTop+"px";
 	
 	clobject.style.left=clleft+scrollLeft+"px";
 	clobject.style.top=cltop+scrollTop+"px";
 }
window.onload=wz;//加载页面
window.onscroll=scroll;//滚动条