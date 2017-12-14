var svg = d3.select("#main");
svg.append("rect").attr("width", "100%").attr("height", "100%").attr("fill", "#0C032E");
var vp = svg.append("g");
for (var i = 0; i < 200; i ++) {
	vp.append("circle").attr("cx", Math.floor(Math.random()*100) + "%").attr("cy", Math.floor(Math.random()*100) + "%").attr("r", Math.floor(Math.random()*10)).attr("fill", "url(#fadeoutwhite)");
}
svg.append("rect").attr("width", "60%").attr("height", "20%").attr("x", "20%").attr("fill", "#0C032E").attr("stroke-width", "5").attr("stroke", "#34034F").classed("top", true);
svg.append("text").classed("title", true).html("TRIANGULUM").attr("width", "60%").attr("height", "20%").attr("x", "50%").attr("y", "10%").attr("text-anchor", "middle").attr("alignment-baseline", "central");
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
vp.append("line").attr("stroke-width", "3").attr("stroke", "#ffffff").attr("stroke-opacity", "0.5").attr("x1", "350").attr("y1", "200").attr("x2", "600").attr("y2", "400");
vp.append("line").attr("stroke-width", "3").attr("stroke", "#ffffff").attr("stroke-opacity", "0.5").attr("x1", "350").attr("y1", "200").attr("x2", "300").attr("y2", "300");
vp.append("line").attr("stroke-width", "3").attr("stroke", "#ffffff").attr("stroke-opacity", "0.5").attr("x1", "300").attr("y1", "300").attr("x2", "600").attr("y2", "400");