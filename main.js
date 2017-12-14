var svg = d3.select("#main");
svg.append("rect").attr("width", "100%").attr("height", "100%").attr("fill", "#15044F");
var vp = svg.append("g");
vp.append("circle").attr("cx", "50").attr("cy", 50).attr("r", "20").attr("fill", "url(#fadeoutwhite)");