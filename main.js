var svg = d3.select("#main");
svg.append("rect").attr("width", "100%").attr("height", "100%").attr("fill", "#15044F");
var vp = svg.append("g");
for (var i = 0; i < 100; i ++) {
	vp.append("circle").attr("cx", Math.floor(Math.random()*100) + "%").attr("cy", Math.floor(Math.random()*100) + "%").attr("r", Math.floor(Math.random()*10)).attr("fill", "url(#fadeoutwhite)");
}