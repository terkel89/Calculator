function calc() {

	var inputA = document.getElementById("A")
	var a = inputA.value;
	a = parseInt(a);
	var inputSign = document.getElementById("sign")
	var sign = inputSign.value;
	var inputB = document.getElementById("B")
	var b = inputB.value;
	b = parseInt(b);
	var res = "Error";
	switch (sign) {
		case "+" : res = a + b;
		break;
		case "-" : res = a - b;
		break;
		case "*" : res = a * b;
		break;
		case "/" : res = a / b;
		break;
		defult : res = "Error";
	}
	console.log("a " + a + " b " + b + " sign " + sign + " res " + res);
	var result = document.getElementById("res");
	result.value = a + " " + sign + " " + b + " = " + res;
	inputA.value = "";
	inputB.value = "";
}