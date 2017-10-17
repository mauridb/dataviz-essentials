/*
tutto quello sotto enter crea nuovi obj
    .selecAll('rect')
    .data(dataset)
    .enter()
*/

var dataset = [3, 6, 2, 5]
//d3.select('svg')
//    .selectAll('rect')
//    .data(dataset)
//    .enter()
//    .append('rect')
//    .attr('width', 50)
//    .attr('height', function(data, index) {
//        return data*10
//    })
//    .attr('x', function(data, index){
//        return index*52
//    })
//    .attr('y', function(data, index){
//        return 150-data*10
//    })
//    .on('mouseenter', function() {
//        d3.select(this)
//            .attr('fill', 'red')
//    })
//    .on('mouseleave', function() {
//        d3.select(this)
//            .attr('fill', 'black')
//    })

var myRects = d3.select('svg')
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('height', 0)
    .attr('x', function(data, index){
        return index*52    
    })
    .attr('width', 50)
    .attr('y', 150)

myRects.transition()
    .duration(2000)
    .delay(function(data, i){
        return i*200
    })
    .attr('y', function(data, index){
        return 150-data*10    
    })
    .attr('height', function(data, index){
        return data*10    
    })

myRects.on('mouseenter', function() {
        d3.select(this)
            .transition()
            .duration(2000)
            .attr('fill', 'red')
    })
    .on('mouseleave', function() {
        d3.select(this)
            .transition()
            .duration(2000)
            .attr('fill', 'black')
    })

