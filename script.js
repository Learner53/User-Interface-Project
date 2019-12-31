var lollipopPrice = [0.5, 1];
var icecandyPrice = [1, 2];
var a=document.querySelector(".checkboxInput");
var cnt=100;
function calculateSaving(n){
	let i;
	cnt=n;
	if(a.hasAttribute("checked")){
		document.querySelector(".lServings").innerHTML = n;
		document.querySelector(".iServings").innerHTML = n;

		let saving,moneyLolipop,moneyIcecandy;
		i=1;
		moneyLolipop=lollipopPrice[i]*n;
		moneyIcecandy=icecandyPrice[i]*n;
		saving= moneyIcecandy- moneyLolipop;
		document.getElementById("moneyLolipop").innerHTML=moneyLolipop;
		document.getElementById("moneyIcecandy").innerHTML=moneyIcecandy;
		document.getElementById("moneySaving").innerHTML=saving;	
	}else{
		document.querySelector(".lServings").innerHTML = n;
		document.querySelector(".lServings").innerHTML = n;
		let saving,moneyLolipop,moneyIcecandy;
		i=0;
		moneyLolipop=lollipopPrice[i]*n;
		moneyIcecandy=icecandyPrice[i]*n;
		saving= moneyIcecandy- moneyLolipop;
		document.getElementById("moneyLolipop").innerHTML=moneyLolipop;
		document.getElementById("moneyIcecandy").innerHTML=moneyIcecandy;
		document.getElementById("moneySaving").innerHTML=saving;
	}
	
}
document.querySelector(".checkboxInput").addEventListener("click", function(){
	a.toggleAttribute("checked");
	calculateSaving(cnt);
	document.querySelector(".btn-100").classList.remove('active');
});
document.querySelector(".btn-25").addEventListener("click", function(){
	calculateSaving(25);
});
document.querySelector(".btn-50").addEventListener("click", function(){
	calculateSaving(50);
	document.querySelector(".btn-100").classList.remove('active');
});
document.querySelector(".btn-100").addEventListener("click", function(){
	calculateSaving(100);
});
document.querySelector(".btn-200").addEventListener("click", function(){
	calculateSaving(200);
	document.querySelector(".btn-100").classList.remove('active');
});
