var svg = d3.select("#main");
svg.append("rect").attr("width", "100%").attr("height", "100%").attr("fill", "#0C032E");
var vp = svg.append("g");
for (var i = 0; i < 200; i ++) {
	vp.append("circle").attr("cx", Math.floor(Math.random()*100) + "%").attr("cy", Math.floor(Math.random()*100) + "%").attr("r", Math.floor(Math.random()*10)).attr("fill", "url(#fadeoutwhite)");
}
svg.append("rect").attr("width", "60%").attr("height", "20%").attr("x", "20%").attr("fill", "#0C032E").attr("stroke-width", "5").attr("stroke", "#34034F").classed("top", true);
svg.append("text").classed("title", true).html("TRIANGULUM").attr("width", "60%").attr("height", "20%").attr("x", "50%").attr("y", "10%").attr("text-anchor", "middle").attr("alignment-baseline", "central");
var atri = vp.append("g");
atri.append("circle").attr("cx", "350").attr("cy", "180").attr("r", "20").attr("fill", "url(#fadeoutyellow)");
atri.append("circle").attr("cx", "350").attr("cy", "220").attr("r", "20").attr("fill", "url(#fadeoutyellow)");