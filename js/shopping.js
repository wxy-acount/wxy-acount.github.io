/**
 * Created by zongjuan.wang on 2016/6/1.
 */

/*关闭窗口*/
function close_plan(){
    window.close();
}
//收藏
function collection(){
    var flag=confirm("移入收藏后，将不再购物车显示，是否继续操作?");
    if(flag==true){
        alert("移入收藏成功!");
    }
}
//删除
function del(){
    var flag=confirm("您确定要删除商品吗?");
    if(flag==true){
        alert("删除成功!");
    }
}
//加号按钮
function plus(num){
	//获取单价
	var price=document.getElementsByName("price")[num].value;
	//获取数量加1
	var count=parseInt(document.getElementsByName("amount")[num].value)+1;
	//将数量加1后，显示出来
	document.getElementsByName("amount")[num].value=count;
	//计算每种商品小计
	var tt=parseFloat(price*count).toFixed(2);
	document.getElementById("price"+num).innerHTML=tt;
	total();
}
//减号按钮
function minus(num){
	//获取单价
	var price=document.getElementsByName("price")[num].value;
	//获取数量减1
	var count=parseInt(document.getElementsByName("amount")[num].value)-1;
	if(count<1){
		alert("已经减到低啦");
	}else{
			
	//将数量减1后，显示出来
	document.getElementsByName("amount")[num].value=count;
	//计算每种商品小计
	var tt=parseFloat(price*count).toFixed(2);
	document.getElementById("price"+num).innerHTML=tt;
	total();
	}
	

}
//总价
function total(){
	//获取单价数组
	var prices=document.getElementsByName("price");
	//获取数量的数组
	var count=document.getElementsByName("amount");
	var sum=0;
	for(var i=0;i<prices.length;i++){
		sum+=prices[i].value*count[i].value;
	}
	 document.getElementById("totalPrice").innerHTML="￥"+sum.toFixed(2);
}
//直接调用总价函数
total();
//知识点
//数字对象.toFixed(n);把数值四舍五入保留n为小数，n的范围0-20
function accounts(){
	//1.获取键盘小计
	var num1=document.getElementById("cartList").firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML||document.getElementById("cartList").firstChild.firstChild.nextSibling.nextSibling.innerHTML;
	//2.获取鼠标小计
	var num2=document.getElementById("cartList").firstElementChild.nextElementSibling.lastElementChild.previousElementSibling.innerHTML||document.getElementById("cartList").firstChild.nextSibling.lastChild.previousSibling.innerHTML;
	
	//3.获取总价
	var total=document.getElementById("cartList").lastElementChild.firstElementChild.innerHTML||document.getElementById("cartList").lastChild.firstChild.innerHTML;
	//alert(total);
	//编写字符串
	var str="您本次购买的商品如下：<br>婴儿衣服："+num1+"<br>婴儿袜子:"+num2+"<br>本次购入如下"+total;
	document.getElementById("cartList").nextElementSibling.innerHTML=str;
}
