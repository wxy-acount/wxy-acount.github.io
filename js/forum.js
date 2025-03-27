//显示发帖模块
function post(){
	document.getElementById("post").style.display="block";
}
//创建头像数组
var tou=["uploads/母婴店图片/头像1.jpg","uploads/母婴店图片/头像2.jpg","uploads/母婴店图片/头像3.jpg","uploads/母婴店图片/头像4.jpg"];
//发帖成功
function postsuccess(){
	var newli=document.createElement("li");//创建li节点
	var inum=Math.floor(Math.random()*4);//产生0-3随机数作为数组下标
	var toudiv=document.createElement("div");//创建div节点
	var touimg=document.createElement("img");//创建img节点
	touimg.setAttribute("src",tou[inum]);//为img标签添加src属性即头像路径
	toudiv.appendChild(touimg);//将img追加到div中
	newli.appendChild(toudiv);//将头像div追加到li中
	var titleh1=document.createElement("h1");//创建h1节点
	var title=document.getElementById("title").value;//获取标题内容
	titleh1.innerHTML=title;//将标题内容添加到h1中
	newli.appendChild(titleh1);//将标题追加到li中
	var newp=document.createElement("p");//创建p节点
	var bankuai=document.createElement("span");//创建板块span节点 
	var secvalue=document.getElementById("sec").value;
	bankuai.innerHTML="板块  :"+secvalue;//将板块信息添加到span中
	newp.appendChild(bankuai);//将板块span追加到p中
	var fabiao=document.createElement("span");//创建板块发表时间span节点
	//获取发表时间
	var mydate=new Date();
	var cdate=mydate.getFullYear()+"-"+parseInt(mydate.getMonth()+1)+"-"+mydate.getDate()+
	" "+mydate.getHours()+":"+mydate.getMinutes();
	fabiao.innerHTML="发表时间: "+cdate;//将发表时间添加到span中;
	newp.appendChild(fabiao);//将发表时间span追加到p中
	newli.appendChild(newp);//将p追加到li中
	//将新创建的li插入到ul所有子节点前
	var ulnode=document.getElementById("postlist");
	ulnode.insertBefore(newli,ulnode.firstChild);
	//恢复初始状态
	//title.value="";//标题清空
	document.getElementById("title").value="";//标题清空
	document.getElementById("content").value="";//内容清空
	document.getElementById("sec").value="请选择板块";//板块重置
	document.getElementById("post").style.display="none";//隐藏表单
	
	
	
	//document.getElementById("post").style.display="none";
	
	
}
