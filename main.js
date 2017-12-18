var svg = d3.select("#main");
svg.append("rect").attr("width", "100%").attr("height", "100%").attr("fill", "#0C032E");
var vp = svg.append("g");
var mode = "main";
vp.attr("transform", "scale(1) translate(0 0)");
var backstars = vp.append("g");
for (var i = 0; i < 1800; i ++) {
	backstars.append("circle").attr("cx", Math.floor(Math.random()*300) - 100 + "%").attr("cy", Math.floor(Math.random()*300) - 100 + "%").attr("r", Math.floor(Math.random()*10)).attr("fill", "url(#fadeoutwhite)");
}
var box = svg.append("rect").attr("width", "60%").attr("height", "20%").attr("x", "20%").attr("fill", "#0C032E").attr("stroke-width", "5").attr("stroke", "#34034F");
var title = svg.append("text").classed("title", true).html("Triangulum").attr("x", "50%").attr("y", "10%").attr("text-anchor", "middle").attr("alignment-baseline", "central").attr("transform", "translate(0 0)");
var ptext = svg.append("text").classed("title", true).html("The Plough").attr("x", "50%").attr("y", "10%").attr("text-anchor", "middle").attr("alignment-baseline", "central").attr("transform", "translate(10000 0)");
var ttext = svg.append("text").classed("regular", true).html("<tspan class='bold' text-anchor='middle'>Triangulum</tspan>").attr("x", "80%").attr("y", "3%").attr("alignment-baseline", "central").attr("transform", "translate(10000 0)");
ttext.append("tspan").attr("dy", "1.6em").attr("x", "61%").html("- Also known as The Plough, Deltoton, and Sicilia (named");
ttext.append("tspan").attr("dy", "1.6em").attr("x", "61%").html("after the Island of Sicily");
ttext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Created in 1000 BCE by the Babylonians");
ttext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- First appearance in the sky in February marked the time");
ttext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("to begin spring ploughing in Mesopotamia");
ttext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- In the 1st quadrant of the Northern Hemisphere");
ttext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Visible in the winter");
ttext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Best visible between late November and December and");
ttext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("between latitudes +90 and -60");
ttext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Has an area of 132 square degrees");
ttext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Has 42 stars, 3 of which are significant");
var atext = svg.append("text").classed("bigger", true).html("<tspan class='bold' text-anchor='middle'>Alpha Trianguli</tspan>").attr("x", "80%").attr("y", "4%").attr("alignment-baseline", "central").attr("transform", "translate(10000 0)");
atext.append("tspan").attr("dy", "1.6em").attr("x", "61%").html("- The apex of Triangulum");
atext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Also known as Mothallah");
atext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Yellow-white subgiant");
atext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Binary star");
atext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Apparent magnitude of 3.41");
var btext = svg.append("text").classed("bigger", true).html("<tspan class='bold' text-anchor='middle'>Beta Trianguli</tspan>").attr("x", "80%").attr("y", "4%").attr("alignment-baseline", "central").attr("transform", "translate(10000 0)");
btext.append("tspan").attr("dy", "1.6em").attr("x", "61%").html("- The brightest star in Triangulum");
btext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- White giant");
btext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Binary star");
btext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Apparent magnitude of 3");
var gtext = svg.append("text").classed("bigger", true).html("<tspan class='bold' text-anchor='middle'>Gamma Trianguli</tspan>").attr("x", "80%").attr("y", "4%").attr("alignment-baseline", "central").attr("transform", "translate(10000 0)");
gtext.append("tspan").attr("dy", "1.6em").attr("x", "61%").html("- Twice the size of the sun");
gtext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- White main sequence star");
gtext.append("tspan").attr("dy", "1.4em").attr("x", "61%").html("- Apparent magnitude of 3");
var ct = title;
var plough = vp.append("image").attr("href", "plough.png").attr("x", "120").attr("y", "-60").attr("width", "512").attr("height", "300").attr("transform", "scale(1.6)").attr("opacity", "0");
vp.append("rect").attr("width", "487.926pt").attr("height", "449.094pt").attr("fill", "#ffffff").attr("x", "1100").attr("y", "-60");
vp.append("image").attr("href", "triangulum.svg").attr("x", "1100").attr("y", "-60").attr("width", "487.926pt").attr("height", "449.094pt");
var poly = vp.append("polygon").attr("points", "350,200 600,400 300,300").attr("stroke-width", "3").attr("stroke", "#ffffff").attr("fill-opacity", "0").attr("stroke-opacity", "0.5").attr("fill", "#0C032E");
var btri = vp.append("g");
btri.append("circle").attr("cx", "350").attr("cy", "190").attr("r", "10").attr("fill", "url(#fadeoutwhite)");
btri.append("circle").attr("cx", "350").attr("cy", "210").attr("r", "30").attr("fill", "url(#fadeoutwhite)");
var btrirot = 0;
setInterval(function() {
	btri.attr("transform", "rotate(" + btrirot + " 350 200)");
	btrirot += 1;
	btrirot = btrirot % 360;
}, 1);
var atri = vp.append("g");
atri.append("circle").attr("cx", "600").attr("cy", "390").attr("r", "10").attr("fill", "url(#fadeoutwhite)");
atri.append("circle").attr("cx", "600").attr("cy", "410").attr("r", "25").attr("fill", "url(#fadeoutyellow)");
var atrirot = 45;
setInterval(function() {
	atri.attr("transform", "rotate(" + atrirot + " 600 400)");
	atrirot += 1.3;
	atrirot = Math.round(atrirot * 10) / 10;
	atrirot = atrirot % 360;
}, 1);
var gtri = vp.append("circle").attr("cx", "300").attr("cy", "300").attr("r", "20").attr("fill", "url(#fadeoutwhite)");
var switchScreen = d3.transition().duration(1000).ease(d3.easePolyOut);
function transitionMain () {
	poly.transition(switchScreen).attr("fill-opacity", "0");
	plough.transition(switchScreen).attr("opacity", "0");
	var oct = ct;
	ct.transition(switchScreen).attr("transform", "translate(-10000 0)").on("end", function() {
		oct.attr("transform", "translate(10000 0)");
	});
	if (mode != "main") {
		return vp.transition(switchScreen).attr("transform", "scale(1) translate(0 0)");
	} else {
		return vp;
	}
}
poly.on("click", function() {
	if (mode != "triangulum") {
		transitionMain().transition(switchScreen).attr("transform", "scale(1.7) translate(-170 -110)");
		box.transition(switchScreen).attr("width", "40%").attr("height", "45%").attr("x", "60%");
		ct = ttext;
		ttext.transition(switchScreen).attr("transform", "translate(0 0)");
		mode = "triangulum";
	}
});
box.on("click", function() {
	if (mode[0] == "s") {
		transitionMain().transition(switchScreen).attr("transform", "scale(1.7) translate(-170 -110)");
		box.transition(switchScreen).attr("width", "40%").attr("height", "45%").attr("x", "60%");
		mode = "triangulum";
		ct = ttext;
		ttext.transition(switchScreen).attr("transform", "translate(0 0)");
	} else if (mode == "triangulum") {
		transitionMain();
		box.transition(switchScreen).attr("width", "60%").attr("height", "20%").attr("x", "20%");
		title.transition(switchScreen).attr("transform", "translate(0 0)");
		ct = title;
		mode = "main";
	} else if (mode == "main") {
		vp.transition(switchScreen).attr("transform", "scale(0.5) translate(200 500)");
		poly.transition(switchScreen).attr("fill-opacity", "1");
		plough.transition(switchScreen).attr("opacity", "1");
		box.transition(switchScreen).attr("width", "60%").attr("height", "20%").attr("x", "20%");
		ct = ptext;
		title.transition(switchScreen).attr("transform", "translate(-10000 0)").on("end", function() {
			title.attr("transform", "translate(10000 0)");
		});
		ptext.transition(switchScreen).attr("transform", "translate(0 0)");
		mode = "plough";
	} else if (mode == "plough") {
		transitionMain().transition(switchScreen).attr("transform", "scale(1) translate(0 0)");
		box.transition(switchScreen).attr("width", "60%").attr("height", "20%").attr("x", "20%");
		title.transition(switchScreen).attr("transform", "translate(0 0)");
		ct = title;
		mode = "main";
	}
});
var atribox = vp.append("rect").attr("x", "560").attr("y", "360").attr("width", "80").attr("height", "80").attr("fill-opacity", "0");
var btribox = vp.append("rect").attr("x", "310").attr("y", "160").attr("width", "80").attr("height", "80").attr("fill-opacity", "0");
var gtribox = vp.append("rect").attr("x", "260").attr("y", "260").attr("width", "80").attr("height", "80").attr("fill-opacity", "0");
atribox.on("click", function() {
	if (mode != "sa") {
		transitionMain().transition(switchScreen).attr("transform", " scale(6) translate(-520 -350)");
		box.transition(switchScreen).attr("width", "40%").attr("height", "45%").attr("x", "60%");
		mode = "sa";
		ct = atext;
		atext.transition(switchScreen).attr("transform", "translate(0 0)");
	}
});
btribox.on("click", function() {
	if (mode != "sb") {
		transitionMain().transition(switchScreen).attr("transform", " scale(6) translate(-270 -150)");
		box.transition(switchScreen).attr("width", "40%").attr("height", "45%").attr("x", "60%");
		mode = "sb";
		ct = btext;
		btext.transition(switchScreen).attr("transform", "translate(0 0)");
	}
});
gtribox.on("click", function() {
	if (mode != "sg") {
		transitionMain().transition(switchScreen).attr("transform", " scale(6) translate(-220 -250)");
		box.transition(switchScreen).attr("width", "40%").attr("height", "45%").attr("x", "60%");
		mode = "sg";
		ct = gtext;
		gtext.transition(switchScreen).attr("transform", "translate(0 0)");
	}
});
