var box = '';
$(document).ready(function(){
	$("button").click(function(){
		var str = $(this).text();
		
		if (str === 'AC'){
			str='';
			box='';
			$(".txtbox").val(box);
		}
		else if(str === 'CE'){
			box = box.substring(0,CE(box));
			$(".txtbox").val(box);
		}
		else if(str === '='){
			var c = eval(box);
			$(".txtbox").val(c);
			box = c.toString();;
		}
		else if(str === 'Del'){
			box = box.substring(0, box.length - 1);
			$(".txtbox").val(box);
		}
		else{
			box += str;
			$(".txtbox").val(box);
		}

	});
});

function CE(cbox){
	var c = cbox.split("");
	var m =cbox.length-1;
	for (var i = m; i >=0; i--) {
		m--;
		if (c[i] === "+" ||c[i] === "*" ||c[i] === "/" ||c[i]=== "-" ||c[i] === "%") {
			console.log("reached");
			break;
		}
	}
	return m+1;
}