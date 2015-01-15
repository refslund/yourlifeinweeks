
function drawRects(canvasID) {
	/*
	var c = document.getElementById(canvasID);
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,150,75);
	*/
	
	var c = document.getElementById(canvasID);
	var ctx = c.getContext("2d");
	var ma = 17; // ydre margin
	var sp = 3;  // mellemrum mellem hver box
	var box = 5; // højde og bredde af hver box   

	for (i=0; i<90; i++) {
	// tegn en række
	for (j=0; j<52; j++) {
		var x = ma+j*(box+sp);
		var y = ma+i*(box+sp);
		ctx.beginPath();
		// ctx.lineWidth="1";
		ctx.strokeStyle="dark grey";
		ctx.strokeRect(x, y, box, box);
		// ctx.rect(x, y, box, box);
		// ctx.stroke();
	}
	}
	
}
