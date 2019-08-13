/*关闭提示框*/
function close_instruction(instruction_id) {
	var div_first = document.getElementById(instruction_id);
	div_first.style.display = "none";
}
function open_instruction(canshu){
	var div_first = document.getElementById(canshu);
	div_first.style.display = "block";
}
/*交易方式判定区域显示不同界面*/
window.onload = function() {
	var area = "曲阜师范大学";
	var div_pay_way = document.getElementById("pay-way");
	if (area_true(area)) {
		// alert("成功");
		var strHTML = "<div class='row' style='margin-bottom: 2.5vw;'>";
		strHTML += "<div class='col-6' style='margin-top: 2.5vw;'>";
		strHTML += "<label>";
		strHTML += "<input type='checkbox' name='platform' />";
		strHTML += "<a style='color: var(--sColor);font-size: 3vw;font-weight: bold;'>平台交易</a>";
		strHTML += "</label>";
		strHTML += "</div>";
		strHTML += "<div class='col-6' style='margin-top: 2.5vw;'>";
		strHTML += "<label>";
		strHTML += "<input type='checkbox' name='f2f'/>";
		strHTML += "<a style='color: var(--sColor);font-size: 3vw;font-weight: bold;'>当面交易</a>";
		strHTML += "</label>";
		strHTML += "</div>";
		strHTML += "</div>";
		strHTML += "</label>";
		div_pay_way.innerHTML = strHTML;
	} else {
		var strHTML = "<div class='row' style='margin-bottom: 2.5vw;'>";
		strHTML += "<div class='col-6' style='margin-top: 2.5vw;'>";
		strHTML += "<label>";
		strHTML += "<svg class='icon' aria-hidden='true' style='font-size:4vw;color: var(--sColor);vertical-align: bottom'>";
		strHTML += "<use xlink:href='#icon-cuowu'></use>";
		strHTML += "</svg>";
		strHTML += "<a style='color: var(--sColor);font-size: 3vw;font-weight: bold;'>平台交易</a>";
		strHTML +=
			"<svg class='icon' aria-hidden='true' style='font-size:4vw;color: var(--fColor);vertical-align: bottom' onclick='open_instruction(\"instruction-second\")'>";
		strHTML += "<use xlink:href='#icon-yiwen'></use>";
		strHTML += "</label>";
		strHTML += "</div>";
		strHTML += "<div class='col-6' style='margin-top: 2.5vw;'>";
		strHTML += "<label>";
		strHTML += "<input type='checkbox' name='f2f'/>";
		strHTML += "<a style='color: var(--sColor);font-size: 3vw;font-weight: bold;'>当面交易</a>";
		strHTML += "</label>";
		strHTML += "</div>";
		strHTML += "</div>";
		strHTML += "</label>";
		div_pay_way.innerHTML = strHTML;
	}
}
/*区域判定函数*/
function area_true(area) {
	if (area == "曲阜师范大学") {
		return true;
	} else {
		return false;
	}

}
