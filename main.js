var svg = d3.select("#main");
svg.append("rect").attr("width", "100%").attr("height", "100%").attr("fill", "#0C032E");
var vp = svg.append("g");
var mode = "main";
vp.attr("transform", "scale(1) translate(0 0)");
for (var i = 0; i < 1800; i ++) {
	vp.append("circle").attr("cx", Math.floor(Math.random()*300) - 100 + "%").attr("cy", Math.floor(Math.random()*300) - 100 + "%").attr("r", Math.floor(Math.random()*10)).attr("fill", "url(#fadeoutwhite)");
}
var box = svg.append("rect").attr("width", "60%").attr("height", "20%").attr("x", "20%").attr("fill", "#0C032E").attr("stroke-width", "5").attr("stroke", "#34034F").classed("top", true);
svg.append("text").classed("title", true).html("TRIANGULUM").attr("width", "60%").attr("height", "20%").attr("x", "50%").attr("y", "10%").attr("text-anchor", "middle").attr("alignment-baseline", "central");
var plough = vp.append("image").attr("href", "plough.png").attr("x", "120").attr("y", "-60").attr("width", "512").attr("height", "300").attr("transform", "scale(1.6)").attr("opacity", "0");
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
poly.on("click", function() {
	if (mode != "triangulum") {
		if (mode != "main") {
			vp.transition(switchScreen).attr("transform", "scale(1) translate(0 0)").transition(switchScreen).attr("transform", "scale(1.7) translate(-170 -110)");
		} else {
			vp.transition(switchScreen).attr("transform", "scale(1.7) translate(-170 -110)");
		}
		mode = "triangulum";
	}
});
box.on("click", function() {
	if (mode[0] == "s") {
		vp.transition(switchScreen).attr("transform", "scale(1) translate(0 0)").transition(switchScreen).attr("transform", "scale(1.7) translate(-170 -110)");;
		mode = "triangulum";
	} else if (mode == "triangulum") {
		vp.transition(switchScreen).attr("transform", "scale(1) translate(0 0)");
		mode = "main";
	} else if (mode == "main") {
		vp.transition(switchScreen).attr("transform", "scale(0.5) translate(200 500)");
		poly.transition(switchScreen).attr("fill-opacity", "1");
		plough.transition(switchScreen).attr("opacity", "1");
		mode = "plough";
	} else if (mode == "plough") {
		vp.transition(switchScreen).attr("transform", "scale(1) translate(0 0)");
		mode = "main";
	}
});
var atribox = vp.append("rect").attr("x", "560").attr("y", "360").attr("width", "80").attr("height", "80").attr("fill-opacity", "0");
var btribox = vp.append("rect").attr("x", "310").attr("y", "160").attr("width", "80").attr("height", "80").attr("fill-opacity", "0");
var gtribox = vp.append("rect").attr("x", "260").attr("y", "260").attr("width", "80").attr("height", "80").attr("fill-opacity", "0");
atribox.on("click", function() {
	if (mode != "sa") {
		if (mode != "main") {
			vp.transition(switchScreen).attr("transform", "translate(0 0) scale(1)").transition(switchScreen).attr("transform", "scale(4) translate(-520 -350)");
		} else {
			vp.transition(switchScreen).attr("transform", " scale(6) translate(-520 -350)");
		}
		mode = "sa";
	}
});
btribox.on("click", function() {
	if (mode != "sb") {
		if (mode != "main") {
			vp.transition(switchScreen).attr("transform", "translate(0 0) scale(1)").transition(switchScreen).attr("transform", "scale(4) translate(-270 -150)");
		} else {
			vp.transition(switchScreen).attr("transform", " scale(6) translate(-270 -150)");
		}
		mode = "sb";
	}
});
gtribox.on("click", function() {
	if (mode != "sg") {
		if (mode != "main") {
			vp.transition(switchScreen).attr("transform", "translate(0 0) scale(1)").transition(switchScreen).attr("transform", "scale(4) translate(-270 -150)");
		} else {
			vp.transition(switchScreen).attr("transform", " scale(6) translate(-220 -250)");
		}
		mode = "sg";
	}
});