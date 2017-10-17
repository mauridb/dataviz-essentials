var dataset = [
    {age:16},
    {age:20},
    {age:30}
]

console.log(dataset)

// STATES : ENTER - EXIT - UPDATE
// CHANGE DATAVIZ ACCORDING TO THE DATASET

// DECORATE THE DATAPOINT

function buildMyChart () {
    var myRects = d3.select('svg')
        .selectAll('rect')
        .data(dataset)

    myRects.enter()
        .append('rect')
        .attr('x', function(d, i){
            return i*20
        })
        .attr('width', 19)
        .attr('height', function(d, i){
                return d.age
        })
        .attr('y', function(d, i){
            return 120 - d.age
        })
        .on('mouseenter', function(d, i){
            d.selected = true
            d3.select(this)
                .style('fill', 'violet')
            console.log(dataset)
        })
    
    myRects.exit()
        .transition()
        .duration(1000)
        .attr('height', 0)
        .attr('y', 120)
        .remove()
    
//    myRects
//        .transition()
//        .duration(1000)
//        .attr('height', function(d, i){
//                return d.age
//        })
//        .attr('y', function(d, i){
//            return 120 - d.age
//        })
}

d3.select('#clickme')
    .on('click', function(){
        dataset.push({age:Math.random()*100})
        console.log(dataset)
        buildMyChart()
    })

d3.select('#remove')
    .on('click', function(){
        dataset.splice(0, 1)
        console.log(dataset)
        buildMyChart()
    })