// create a scale
var mapX = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 600])

var myAxis = d3.axisTop(mapX)

var myGroup = d3.select('svg')
    .append('g')
    .attr('transform', 'rotate(20)')
    .call(myAxis)