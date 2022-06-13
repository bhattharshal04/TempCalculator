let cel;
let feh;
let kel;

function celius() {
	cel = document.getElementById("input_cel").value;
	console.log(cel);
	parseFloat(cel)
	feh = (9 / 5) * cel + 32;
	document.getElementById("input_feh").value = feh;
	kel = parseFloat(cel) + 273.15;
	document.getElementById("input_kel").value = kel;
}
function fehrenheit() {
	feh = document.getElementById("input_feh").value;
	console.log(feh);
	parseFloat(feh);
	cel = ((feh - 32) * 5) / 9;
	document.getElementById("input_cel").value = cel;
	kel = (((feh - 32) * 5) / 9) + 273.15;
	document.getElementById("input_kel").value = kel;
}
function kelvin() {
	kel = document.getElementById("input_kel").value;
	console.log(kel);
	parseFloat(kel);
	cel = kel - 273.15;
	document.getElementById("input_cel").value = cel;
	feh = (((kel - 273.15) * 9) / 5) + 32;
	document.getElementById("input_feh").value = feh;
}
