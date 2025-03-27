//手机页面的可视界面的高度
var mheight;
//内嵌框架对象
var ifnode;
//音乐播放器对象
var musnode=null;
window.addEventListener("load",function(){
	//获取手机页面的可视界面的高度
	mheight=document.documentElement.clientHeight;
	//获取内嵌框架对象
	ifnode=document.getElementById("vp");
	//设置内嵌框架对象的高度等于手机页面的可视界面的高度
	ifnode.style.height=mheight+"px";
    //获取音乐播放器对象
    musnode=document.getElementById("music")
    musnode.autoplay="autoplay"
 
});
//
function play(e){
	//判断音乐播放器当前状态是停止还是播放
	if(musnode.paused){
		//如果现在是停止状态，让音乐播放
		musnode.play();
		document.getElementById("btn-music").style.animation="imgrun 4s linear infinite";
	}else{
		//如果现在是播放状态，让音乐暂停
		musnode.pause();
		document.getElementById("btn-music").style.animation="none";
	}
}
//音乐对象.paused="ture/false"---音乐当前状态是暂停吗
//音乐对象.played="ture/false"---音乐当前状态是播放吗
//音乐.play()--让音乐播放
//音乐.paude()--让音乐暂停
