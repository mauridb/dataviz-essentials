var dataset = [
    {age:16},
    {age:20},
    {age:30}
]

console.log(dataset)

// STATES : ENTER - EXIT - UPDATE
// CHANGE DATAVIZ ACCORDING TO THE DATASET

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
}

d3.select('#clickme')
    .on('click', function(){
        dataset.push({age:Math.random()*100})
        console.log(dataset)
        buildMyChart()
    })